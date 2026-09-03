# Analyse: BPM Calculator (bpm.apexclusive.nl)

**Geanalyseerd:** 3 september 2026 · bestanden: `index.html` (162 KB, alles-in-één) + `apex-tool-theme.css`
**Methode:** broncode-analyse (HTML/CSS/JS) + uitvoering van de rekenfuncties in Node + steekproefsgewijze controle tegen officiële tariefbronnen. Geen browser-UI-test uitgevoerd; dit is geen fiscaal-juridisch advies.

---

## 1. Managementsamenvatting

De BPM Calculator is een **statische, client-side leadgeneratie-tool** in de huisstijl van APEXclusive: bezoekers berekenen de resterende BPM bij import van een (vooral exclusieve) auto en worden via resultaatblok, taxatie-usps en CTA's richting `apexclusive.nl/#contact` geleid. Technisch is de pagina degelijk opgebouwd (één bestand, geen frameworks, geen backend, geen tracking), en de **BPM-tarieven 2026, dieseltoeslag en historische jaartabellen kloppen met de officiële bronnen**.

De belangrijkste risico's zitten in **actuele datakwaliteit** (voertuig-database met o.a. een onmogelijke CO₂-waarde voor de Revuelto), **behandeling van elektrische auto's** (sinds 2025 niet meer "vrijgesteld"; MRB voor EV's is sinds 2026 niet meer € 0) en **jaarlijks onderhoud** ("2026" is op meerdere plekken hardcoded). Daarnaast staan enkele juridische aannames (NEDC-"2026"-tabel, 10,2%-grondslag, kostenpost € 960 RDW) die een toets door een BPM-specialist verdienen.

| Dimensie | Oordeel |
|---|---|
| Doel & funnel | ★★★★★ Slim: gratis tool → resultaat → taxatie-upsell → contact |
| Rekenkern & tarieven | ★★★★☆ 2026-tabellen exact correct; NEDC-2026-constructie verdient toets |
| Datakwaliteit DB | ★★☆☆☆ Verouderd/inconsistent; enkele grote fouten |
| UX & vormgeving | ★★★★☆ Premium uitstraling, sterke resultaatweergave; validatie/a11y zwak |
| Techniek & SEO | ★★★★☆ Goede meta/JSON-LD; hardcoded jaartal, geen state-sharing |
| Onderhoud | ★★☆☆☆ Na 1-1-2027 rekenen en tonen fout zonder code-update |

---

## 2. Doel, functie en plek binnen de site

- Subdomein `bpm.apexclusive.nl` als **gratis instrument** ("APEXclusive — Gratis instrument"), teruglinkend naar de homepage.
- De tool is onderdeel van een **toolfamilie**: onderaan kruislinks naar `Kentekencheck` (kentekencheck.apexclusive.nl) en `Advertentie Analyse` (carrapport.apexclusive.nl).
- Duidelijke **conversiefunnel**: na berekening volgt een prominent blok "Te betalen BPM bij import" + "Geschatte totale importkosten", daarna een taxatie-verkoopblok ("Een erkende taxatie kan leiden tot een significant lagere BPM-aangifte…"), CTA's naar `apexclusive.nl/#contact` en `#import`. Footer is identiek aan de homepage (logo, juridisch, contact, WhatsApp).
- Doelgroep: **importeurs van exclusieve auto's** — merkselectie opent met Koenigsegg, Pagani, Rimac, enz.; de handmatige modus bevat ook gewone merken.

## 3. Pagina-opbouw en gebruikersflow

1. **Hero** — H1, korte uitleg, "⚡"-regel over de NEDC/WLTP-grenzen (1 juli 2020 / sept. 2018).
2. **Twee invoertabs** (volledig zelfgebouwd, geen `<form>`):
   - **"Voertuig selecteren"** — cascade Merk → Model → Uitvoering (435 uitvoeringen in DB) die cataloguswaarde + CO₂ automatisch invult (aanpasbaar), datum eerste toelating (drie velden + eigen kalenderpopup), massa rijklaar (optioneel).
   - **"Handmatig invoeren"** — merknaam, brandstoftype (segmentknop), datum, massa, vermogen, CO₂-invoer (dynamisch afhankelijk van datum), cataloguswaarde (slider tot € 600K).
   - CO₂-velden **worden dynamisch gerenderd** op basis van de gekozen datum: WLTP (≥ 1-7-2020), NEDC (< 1-9-2018) of beide (tussenperiode).
3. **Resultaatzone**: prominente "Te betalen BPM" + kostenblok → **dubbele berekening** (tarief toelatingsjaar vs. aangiftejaar 2026, laagste wint, "✓ Laagste uitkomst"-tag) → kaarten grondslag/afschrijving/leeftijd → CO₂-info (klasse A+–G, marginaal €/g-tarief) → canvas-chart afschrijvingsverloop (180 maanden) → forfaitaire afschrijvingstabel → detailgrid → wegenbelasting per provincie (Limburg gehighlight) → taxatie-upsell → disclaimer.
4. **Lead-CTA's** + kruislinks andere tools + footer.

Sterke UX-details: tooltips bij velden, kalender met maand-sneltab, "Opnieuw beginnen", statusbanner die uitlegt welke norm geldt, en de dubbele berekening als uniek verkooppunt.

## 4. Technische opbouw

- **Eén statisch HTML-bestand** (162 KB) met inline CSS (~?) en **~101.000 tekens inline JavaScript** (vanilla, geen modules/build). `apex-tool-theme.css` (82 regels) is een gedeelde "presentatielaag" over alle APEXclusive-tools heen.
- **Geen externe scripts/backends** — alles client-side; alleen Google Fonts en (voor OG) een Cloudinary-afbeelding. Geen tracking/cookies gevonden.
- **Databank** (`const DB`): 24 merk-groepen → ~125 modelgroepen → **435 uitvoeringen**, elk met label, cataloguswaarde, CO₂-WLTP (83× `null`), CO₂-NEDC (266× `null`), brandstoftype, vermogen.
- Rekenkern goed gescheiden in functies: datumgrenzen, tarieffuncties (2026), historische tabellen (2018–2025), forfaitaire afschrijvingstabel, wegenbelasting-heuristiek, chart, helpers.
- Codekwaliteit: compact maar erg verkort (namen als `fE`, `cap`, `tH`, `CS`), magische getallen, geen tests, geen comments bij afrondingsregels; **duplicatie** (de jaar-vergelijking staat twee keer: in het dual-blok én in het "te betalen"-blok) verhoogt het risico op inconsistenties bij onderhoud.

## 5. Hoe rekent de tool (samengevat)

1. **Norm bepalen** op datum eerste toelating: `≥ 1-7-2020 → WLTP`, `< 1-9-2018 → NEDC`, daartussen "beide" (primair NEDC; WLTP als NEDC ontbreekt).
2. **Bruto-BPM** = vaste voet + schijventabel per gram CO₂ (benzine/hybride = zelfde tabel; diesel + toeslag; elektrisch → 0 in code).
3. **Leeftijd**: volle maanden sinds eerste toelating (elke begonnen maand telt), rest-% via de officiële forfaitaire afschrijvingstabel (0–1 mnd: 0 + 12%/mnd … ≥ 114 mnd: 81% + 0,19%/mnd, max 100% afschrijving).
4. **Dubbele berekening** (alleen CO₂ > 0 en toelatingsjaar < 2026): `bruto volgens tarieftabel toelatingsjaar × rest-%` vs. `bruto volgens tabel 2026 × rest-%` → **laagste wint**. Dit is correct vormgegeven: bij import van een gebruikte auto mag wettelijk het gunstigste tarief (eerste toelating óf aangifte) worden gekozen.
5. Zonder CO₂-waarde: forfaitair pad via "grondslag" (10,2% × cataloguswaarde) × rest-%.
6. Wegenbelasting (indicatie, per kwartaal): heuristiek op massa + brandstof × provinciale opcenten (110–120%).
7. Kostenblok: rest-BPM + € 960 RDW + € 85 APK + € 295 aangifte + transport € 800–2.500 (bandbreedte getoond).

### Rekenvoorbeelden (uitgevoerd met de eigen code, peildatum 3-9-2026)

| Voertuig | Toelating | Grondslag | Bruto '26 → rest | Bruto toel.jaar → rest | **Te betalen (laagste)** |
|---|---|---|---|---|---|
| BMW M4 CSL 3.0 (241 g WLTP) | 05-01-2023 | € 23.325 | € 65.622 → € 27.666 | € 49.690 → € 20.949 | **€ 20.949** (tarief 2023) |
| Lamborghini Urus Performante (340 g) | 10-01-2023 | € 39.576 | € 124.428 → € 52.459 | € 98.002 → € 41.318 | **€ 41.318** (2023) |
| Aston Martin DBX V8 (295 g) | 04-01-2021 | € 25.296 | € 97.698 → € 31.420 | € 64.574 → € 20.767 | **€ 20.767** (2021) |
| Toyota GR86 (192 g) | 03-01-2024 | € 4.353 | € 36.516 → € 17.528 | € 30.674 → € 14.724 | **€ 14.724** (2024) |

→ Het verschil tussen de twee jaarberekeningen is groot (vaak duizenden euro's); de dubbele berekening is dus functioneel zinvol en geen franje.

## 6. Correctheidsbevindingen (geverifieerd)

### ✅ Klopt
- **2026 WLTP-tarieven exact**: starttarief € 687; schijven 1–77 g: € 2/g · 78–100: € 82/g · 101–139: € 181/g · 140–155: € 297/g · > 155: € 594/g — komt overeen met de officieel gepubliceerde 2026-tabel (o.a. ANWB/berekenen.nl). Dieseltoeslag 2026: € 114,83/g boven 69 g ✓.
- **2025-tabel** (€ 667, 2/79/173/284/568) ✓; **2024- en 2020-tabellen** consistent met rekenvoorbeelden van de Belastingdienst zelf ✓.
- **Datumgrenzen NEDC/WLTP** en de **forfaitaire afschrijvingstabel** (percentages per maand) komen overeen met de officiële systematiek; de "elke begonnen maand"-benadering is conform de Belastingdienst.
- Tariefkeuze toelatingsjaar ↔ aangiftejaar met laagste uitkomst = juiste hoofdregel voor gebruikte import.
- Meta/SEO-basis (title, description, canonical, OG, JSON-LD WebApplication) aanwezig.

### ⚠️ Fouten / risico's
1. **Elektrische auto's zijn niet meer "volledig vrijgesteld".** De tool toont altijd "BPM-vrijgesteld / € 0" en een EV-badge. Sinds 1-1-2025 geldt echter een **vaste BPM-voet**: € 667 (2025) / € 687 (2026) voor EV's — zij het dat import van een EV met eerste toelating **vóór 2025** onder het oude nultarief valt (€ 0). De tool maakt dat onderscheid niet: voor een Taycan met toelating 2026 toont hij € 0 in plaats van € 687.
2. **Wegenbelasting voor EV's = € 0 getoond** (functie `calcWB`: `bs==='elektrisch' ? 0`), maar de MRB-vrijstelling voor EV's is **per 1-1-2026 afgeschaft** (in 2026 resteert een korting van ~25–30% — bronnen lopen uiteen, exacte korting even toetsen). De "indicatieve wegenbelasting per kwartaal"-tabel is daarmee voor EV's misleidend.
3. **NEDC-2026-tabel = letterlijk de NEDC-2019-tabel** (zelfde getallen). Officiële 2026-bronnen publiceren alleen een WLTP-tabel; of er voor NEDC-auto's (toelating vóór 1-7-2020) een "aangiftejaar-tarief 2026" bestaat, is zeer de vraag. Als dat niet zo is, klopt de dubbele berekening voor NEDC-auto's niet en kan de tool een te lage uitkomst tonen. **Laat dit juridisch toetsen.**
4. **Datakwaliteit database** — concreet voorbeeld: Lamborghini Revuelto staat in de DB met **51 g/km CO₂**, officieel is dat ~**350 g/km WLTP**. Gevolg: de tool berekent ± € 260 rest-BPM waar tienduizenden euro's horen te staan (bij 350 g: bruto 2026 ≈ € 127K). Dit is precies het segment waar de tool zich op richt — één zo'n fout ondermijnt het vertrouwen. Verder: prijzen zijn eenmalig ingevuld (geen actualisatie), 83 records zonder WLTP/266 zonder NEDC (deels logisch bij oude modellen), en "Overig / Niet in lijst" levert een dode cascade op zonder uitleg.
5. **Kostenpost "RDW Keuring € 960"** is ruim te hoog: alle reguliere RDW-leges bij import samen zijn in 2026 ± **€ 144** (identificatie € 58,50 + kentekenbewijs € 50 + tenaamstelling € 13,10 + recycling € 22,50); een RDW-keuringsonderzoek ligt rond € 100–150. Ook "APK € 85 + aangifte € 295" zijn geen vaste overheidstarieven. Of de tool bewust een marge/afhandeling door APEXclusive insluit, wordt niet gecommuniceerd — vermeld de aannames of hernoem naar "RDW + afhandeling (incl. marge)".
6. **"Grondslag = 10,2% van cataloguswaarde"** wordt bij élke berekening als resultaatkaart getoond en gebruikt in chart/tabel, terwijl het wettelijke pad voor deze auto's de CO₂-tabel + afschrijving is; het 10,2%-pad is slechts een (onbenoemde) fallback voor ontbrekende CO₂ en is geen officiële grondslagregel. Dit kan gebruikers op het verkeerde been zetten ("waarom betaal ik 10,2%?"). Label als "forfaitair rekenpad (indicatief)" en toon alleen wanneer relevant.
7. **Tekst "tarieven 2026"** onder de hoofduitkomst staat er óók als de laagste uitkomst op het toelatingsjaar is gebaseerd (subtiele inconsistentie met de badge erboven).
8. Geen rekening met koerslijst/taxatie in de berekening zelf (tekst zegt terecht dat dit lager kan uitvallen — dat klopt en is een kans voor de conversie), noch met youngtimer/oldtimer-regimes en afwijkende gevallen (schade, km-stand). De disclaimer dekt dit formeel af.

## 7. UX-, conversie- en kwaliteitsobservaties

- **Sterk:** premium donkere huisstijl met tricolore-accenten; heldere hiërarchie in het resultaat; tooltips; de dubbele-jaarberekening met "laagste uitkomst"-tag is een sterk onderscheidend en eerlijk ogend element; wegenbelasting-vergelijking per provincie met lokale highlight; duidelijke disclaimer.
- **Zwak / kansen:**
  - **Semantiek/toegankelijkheid**: de hele pagina gebruikt maar 2 echte headings (H1 + één H3); alle sectiekoppen ("Voertuig selecteren", "Twee berekeningen…", etc.) zijn `div`s. Labels hangen niet overal via `for` aan inputs; foutmeldingen via native `alert()`; Enter-toets werkt niet overal; kalender is alleen met muis te bedienen (te testen). Beperkt ook de SEO (geen H2-structuur).
  - **Onderhoud**: jaartal 2026 is hardcoded (tarieffuncties, `huidigJaar`, labels, "rest BPM 2026"-kolom). Na 1-1-2027 rekent de tool met 2026-tarieven terwijl 2027-auto's de dubbele berekening overslaan — centraal jaarconstante + tabel-per-jaar-datastructuur nodig.
  - **Geen deelbare/vaste staat**: alles client-side; bij refreshen is de invoer weg en bestaat er geen URL met resultaat (kans: deelbare deep-link met parameters — sterk voor mond-tot-mond binnen de doelgroep).
  - Alleen `lang="nl"`, geen `favicon`-problemen (inline SVG), géén `noscript`-variant, geen FAQ/HowTo-schema (kans voor "BPM berekenen"-SEO), OG-image extern (Cloudinary).
  - Inline JS zonder scheiding data/logica maakt de pagina onnodig groot (162 KB); DB zou prima als apart JSON-bestand kunnen — ook herbruikbaar voor de andere tools.

## 8. Aanbevelingen op volgorde van prioriteit

| # | Actie | Prioriteit |
|---|---|---|
| 1 | Databank uit DB halen & actualiseren (Revuelto 51 g/km, prijzen, ontbrekende CO₂); voeg per uitvoering een "laatst gecheckt"-datum toe | P0 |
| 2 | EV-logica corrigeren: onderscheid eerste toelating ≤ 2024 (nultarief) vs. 2025/2026 (vaste voet € 667/€ 687); badge-tekst aanpassen | P0 |
| 3 | Wegenbelasting EV's 2026 (en op termijn PHEV) corrigeren; kortingspercentages uit één centrale tabel | P0 |
| 4 | Jaartal centraliseren (constante + tabellen per jaar + automatische "huidig jaar"); dan is de tool jaarwissel-proof | P1 |
| 5 | Juridische toets: NEDC-"2026"-tabel en het 10,2%-grondslagpad (mag de aangiftejaar-vergelijking voor NEDC-auto's zo?) | P1 |
| 6 | Kostenblok onderbouwen of anders etiketteren (RDW ± € 144; rest = "afhandeling/marge APEXclusive") | P1 |
| 7 | A11y/SEO: H2-structuur, labels/aria, inline validatie i.p.v. alert(), Enter-toets, FAQ-schema | P2 |
| 8 | Uitkomst deelbaar maken (query-parameters) + e-mailcapture "exacte berekening" als leadversterker | P2 |
| 9 | "Overig"-stroom in de auto-tab gebruiksvriendelijk maken; DB-dubbeling met handmatige tab oplossen | P3 |

## 9. Bronnen (geraadpleegd 3-9-2026)

- ANWB — BPM-tarieven 2026 personenauto (starttarief € 687; schijven): anwb.nl/auto/autokosten/bpm
- berekenen.nl/bpm — BPM-tabel 2026 + dieseltoeslag € 114,83 (WLTP)
- Belastingdienst — BPM afschrijving met koerslijst/taxatierapport/forfaitaire tabel (rekenvoorbeelden tarieven 2020, 2024, 2025): belastingdienst.nl (BPM-afschrijving gebruikte motorrijtuigen)
- Promovendum / Pechdiensten / Autokan — BPM-tarieven 2025 (bevestiging historische tabel in code)
- MrWheelson — RDW-tarieven 2026 import: ± € 144,10 totaal (identificatie/kentekenbewijs/tenaamstelling/recycling)
- Importnu — RDW-keuring ± € 100–150
- Platescout — BPM vaste voet EV 2025/2026 vs. nultarief bij eerste toelating vóór 2025
- OVM / MobilityService / Mijnelektrischeauto — MRB-EV 2026 (vrijstelling vervallen; kortingspercentage verschilt per bron → toetsen)
- Lamborghini (officiële brochure) — Revuelto WLTP CO₂ ± 350 g/km

---

*Bijlage: rekenvoorbeelden uit §5 zijn gegenereerd door de rekenfuncties rechtstreeks uit de pagina te extraheren en in Node uit te voeren (peildatum 3-9-2026, exacte maandentelling en rest-% van de tool). Geen wijzigingen aan de pagina zelf aangebracht.*
