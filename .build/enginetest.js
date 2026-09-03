function getBpmAfschrijving(maanden){
  // Officiële forfaitaire tabel Belastingdienst
  // Kolom 1: periode | Kolom 2: basis% | Kolom 3: extra% per maand
  let pct = 0;

  if(maanden < 1){
    // 0 dagen tot 1 maand: 0% + 12% per maand
    pct = 0 + (maanden * 12);
  } else if(maanden < 3){
    // 1 maand tot 3 maanden: 12% + 4% per maand
    pct = 12 + ((maanden - 1) * 4);
  } else if(maanden < 5){
    // 3 maanden tot 5 maanden: 20% + 3,5% per maand
    pct = 20 + ((maanden - 3) * 3.5);
  } else if(maanden < 9){
    // 5 maanden tot 9 maanden: 27% + 1,5% per maand
    pct = 27 + ((maanden - 5) * 1.5);
  } else if(maanden < 18){
    // 9 maanden tot 1j6m (18mnd): 33% + 1% per maand
    pct = 33 + ((maanden - 9) * 1);
  } else if(maanden < 30){
    // 1j6m tot 2j6m (18-30mnd): 42% + 0,75% per maand
    pct = 42 + ((maanden - 18) * 0.75);
  } else if(maanden < 42){
    // 2j6m tot 3j6m (30-42mnd): 51% + 0,5% per maand
    pct = 51 + ((maanden - 30) * 0.5);
  } else if(maanden < 54){
    // 3j6m tot 4j6m (42-54mnd): 57% + 0,42% per maand
    pct = 57 + ((maanden - 42) * 0.42);
  } else if(maanden < 66){
    // 4j6m tot 5j6m (54-66mnd): 62% + 0,42% per maand
    pct = 62 + ((maanden - 54) * 0.42);
  } else if(maanden < 78){
    // 5j6m tot 6j6m (66-78mnd): 67% + 0,42% per maand
    pct = 67 + ((maanden - 66) * 0.42);
  } else if(maanden < 90){
    // 6j6m tot 7j6m (78-90mnd): 72% + 0,25% per maand
    pct = 72 + ((maanden - 78) * 0.25);
  } else if(maanden < 102){
    // 7j6m tot 8j6m (90-102mnd): 75% + 0,25% per maand
    pct = 75 + ((maanden - 90) * 0.25);
  } else if(maanden < 114){
    // 8j6m tot 9j6m (102-114mnd): 78% + 0,25% per maand
    pct = 78 + ((maanden - 102) * 0.25);
  } else {
    // Vanaf 9j6m (114mnd+): 81% + 0,19% per maand
    pct = 81 + ((maanden - 114) * 0.19);
  }

  // Max 100%
  pct = Math.min(pct, 100);

  // Restwaarde = 100 - afschrijving%
  return (100 - pct) / 100;
}

// Compatibiliteitswrapper — getBpmPct blijft werken
function getBpmPct(m){
  return getBpmAfschrijving(m);
}

// BTAB voor weergave in de tabel (blokken)
const BTAB=[
  {v:0,   t:1,   p:100.0},
  {v:1,   t:3,   p:88.0},
  {v:3,   t:5,   p:80.0},
  {v:5,   t:9,   p:73.0},
  {v:9,   t:18,  p:67.0},
  {v:18,  t:30,  p:58.0},
  {v:30,  t:42,  p:49.0},
  {v:42,  t:54,  p:43.0},
  {v:54,  t:66,  p:38.0},
  {v:66,  t:78,  p:33.0},
  {v:78,  t:90,  p:28.0},
  {v:90,  t:102, p:25.0},
  {v:102, t:114, p:22.0},
  {v:114, t:999, p:19.0}
];
/* ══════════════════════════════════════════════════
   OFFICIËLE BPM TARIEVEN — BELASTINGDIENST (NIEUWE KERN 09-2026)
   Bron: Belastingdienst 'Bpm-tarieven (vanaf 1993)' + tarieflijsten per jaar.
   Structuur per jaar: [[maxGram, basisbedrag, bedragPerGram], ...]  (laatste max = oneindig)
   Dieseltoeslag apart per jaar: { drempel, bedrag } per gram BOVEN drempel.
   Geverifieerd: 2026 ✓ (ANWB/BD), 2025 ✓, 2024 ✓ (rekenvoorbeeld BD),
   2020-II ✓ (rekenvoorbeeld BD), 2018 ✓ (BD/autobahn), 2015/2016 ✓ (BD-tarieflijst),
   overige jaren aritmetisch consistent met officiële structuur.
   N.B. 2017: vaste voet € 353 en dieseltoeslag € 86,69 > 65 g bevestigd (BD/Autobahn/
   AutoWeek); schijfgrenzen 76/102/150/168 (>168 hoogste schijf) bevestigd; de bedragen
   per gram zijn benaderd op de wettelijke opbouw — daarom gelabeld als benadering.
   Vóór 2015 gold een (deels) op cataloguswaarde gebaseerd regime → aparte afhandeling.
══════════════════════════════════════════════════ */
const TARIEFJAAR = 2026; // ← centraal: bij jaarwisseling hier + tabel 2027 toevoegen
const DATUM_TARIEVEN = 'september 2026';

const NEDC_TABEL = {
  // 2015/2016: officiële tarieflijst Belastingdienst (vrijwel letterlijk)
  2015: { rows: [[82,175,6],[110,667,69],[160,2599,112],[180,8199,217],[Infinity,12539,434]] },
  2016: { rows: [[79,175,6],[106,649,69],[155,2512,124],[174,8588,239],[Infinity,13129,478]] },
  2017: { approx:true, rows: [[76,353,2],[102,505,66],[150,2221,145],[168,9181,238],[Infinity,13465,476]] },
  2018: { rows: [[73,356,2],[98,502,63],[144,2077,139],[162,8471,229],[Infinity,12593,458]] },
  2019: { rows: [[71,360,2],[95,502,60],[139,1942,131],[156,7706,215],[Infinity,11361,429]] },
  2020: { rows: [[68,366,2],[91,502,59],[133,1859,129],[150,7277,212],[Infinity,10881,424]] },
};
const WLTP_TABEL = {
  2020: { rows: [[90,366,1],[116,456,57],[162,1938,124],[180,7642,204],[Infinity,11314,408]] },
  2021: { rows: [[86,372,1],[111,458,60],[155,1958,132],[172,7766,216],[Infinity,11438,432]] },
  2022: { rows: [[84,376,1],[109,460,62],[152,2010,137],[168,7901,224],[Infinity,11485,448]] },
  2023: { rows: [[82,400,2],[106,564,68],[148,2196,149],[165,8454,244],[Infinity,12602,488]] },
  2024: { rows: [[80,440,2],[104,600,76],[145,2424,167],[161,9271,274],[Infinity,13655,549]] },
  2025: { rows: [[79,667,2],[101,825,79],[141,2563,173],[157,9483,284],[Infinity,14027,568]] },
  2026: { rows: [[77,687,2],[100,841,82],[139,2727,181],[155,9786,297],[Infinity,14538,594]] },
};
const DIESELTOESLAG = {
  nedc: {2015:{drempel:70,bedrag:86.00}, 2016:{drempel:67,bedrag:86.43}, 2017:{drempel:65,bedrag:86.69},
         2018:{drempel:63,bedrag:87.38}, 2019:{drempel:61,bedrag:88.43}, 2020:{drempel:59,bedrag:89.85}},
  wltp: {2020:{drempel:80,bedrag:78.82}, 2021:{drempel:77,bedrag:83.59}, 2022:{drempel:75,bedrag:86.67},
         2023:{drempel:73,bedrag:94.30}, 2024:{drempel:71,bedrag:106.07}, 2025:{drempel:70,bedrag:109.87},
         2026:{drempel:69,bedrag:114.83}},
};
// Vaste BPM-voet volledig elektrische personenauto's (sinds 1-1-2025; eerst toelating ≤2024 = nultarief)
const EV_VASTE_VOET = {2025:667, 2026:687};
// Forfaitaire CO₂-aannames Belastingdienst bij ONBEKENDE CO₂-uitstoot (personenauto)
const CO2_DEFAULT = { // per eerste-toelating-tijdvak
  '2015_2020': {benzine:507, diesel:356, label:'1 jan. 2015 – 30 juni 2020'},
  '2020_nu'  : {benzine:550, diesel:395, label:'vanaf 1 juli 2020'}
};
const D_NEDC_TOT  = new Date(2015,0,1);   // 1 jan 2015: volledig CO₂-regime van start
const D_WLTP_MID  = new Date(2018,8,1);   // 1 sept 2018: WLTP-waarde bestaat (CO2MPAS/typegoedkeuring)
const D_WLTP_VPL  = new Date(2020,6,1);   // 1 juli 2020: WLTP verplicht

/* tabelevaluatie: bruto-BPM volgens jaar/norm-tabel (benzine/hybride basis) */
function brutoPerTabel(co2, jaartal, norm){
  const T = (norm==='wltp') ? WLTP_TABEL : NEDC_TABEL;
  const tbl = T[jaartal] || T[TARIEFJAAR]; // jaar zonder tabel → benadering met huidig jaar (gemarkeerd in UI)
  const rows = tbl.rows;
  for(let i=0;i<rows.length;i++){
    if(co2 <= rows[i][0]){
      const grensVorige = i===0 ? 0 : rows[i-1][0];
      return Math.round(rows[i][1] + (co2 - grensVorige) * rows[i][2]);
    }
  }
  return 0;
}
/* dieseltoeslag voor jaar+norm */
function dieselToeslagJaar(co2, jaartal, norm){
  const m = (DIESELTOESLAG[norm]||{})[jaartal] || (norm==='wltp'?DIESELTOESLAG.wltp[TARIEFJAAR]:DIESELTOESLAG.nedc[2020]);
  return co2 > m.drempel ? Math.round((co2 - m.drempel) * m.bedrag) : 0;
}
/* PHEV-tarief: t/m 2024 hadden plug-in hybrides een eigen progressieve tabel ZONDER vaste voet.
   (Belastingplan 2025: specifieke PHEV-tabel per 1-1-2025 beëindigd.) */
function phevActief(jaartal){ return jaartal <= 2024; }
function isPhev(bs){ return bs === 'hybride'; }
/* Bruto BPM (personenauto, volledig CO₂-regime 2015+) */
function calcBrutoBpm(co2, bs, jaartal, norm, opts){
  opts = opts||{};
  if(isPhev(bs) && phevActief(jaartal)){
    // eigen PHEV-tabel = normale tabel minus vaste voet (basis eerste schijf)
    const T = (norm==='wltp') ? WLTP_TABEL : NEDC_TABEL;
    const tbl = T[jaartal] || T[TARIEFJAAR];
    const voet = tbl.rows[0][1];
    const normaal = brutoPerTabel(co2, jaartal, norm);
    return Math.max(0, normaal - voet);
  }
  let b = brutoPerTabel(co2, jaartal, norm);
  if(bs==='diesel') b += dieselToeslagJaar(co2, jaartal, norm);
  return Math.round(b);
}
/* CO₂-aanname bij ontbrekende waarde (Belastingdienst) */
function co2DefaultWaarde(bs, datum){
  if(!datum) return null;
  if(datum >= D_WLTP_VPL) return CO2_DEFAULT['2020_nu'][bs==='diesel'?'diesel':'benzine'];
  return CO2_DEFAULT['2015_2020'][bs==='diesel'?'diesel':'benzine'];
}
/* regime op basis van datum eerste toelating */
function regimeInfo(datum, bs, co2n, co2w){
  const out = { status:'geen', toelJ:null, norm:null, co2:null, co2Default:false, phev:false, ev:false,
                omschrijving:'' };
  if(!datum){ out.status='geen'; return out; }
  const toelJ = datum.getFullYear();
  out.toelJ = toelJ;
  out.ev = (bs==='elektrisch');
  if(out.ev){ out.status='ev'; return out; }
  out.phev = isPhev(bs);
  if(datum.getTime() < D_NEDC_TOT.getTime()){
    out.status='pre2015'; return out;
  }
  let norm, co2=null;
  if(datum >= D_WLTP_VPL){ norm='wltp'; co2 = (co2w>0?co2w:(co2n>0?co2n:null)); }
  else if(datum >= D_WLTP_MID){ norm='nedc'; co2 = (co2n>0?co2n:(co2w>0?co2w:null)); }
  else { norm='nedc'; co2 = (co2n>0?co2n:null); }
  if(co2==null){ co2 = co2DefaultWaarde(bs, datum); out.co2Default=true; }
  out.norm = norm; out.co2 = co2;
  out.status = (norm==='wltp') ? 'wltp' : (toelJ < 2018 ? 'nedc' : 'beide');
  return out;
}
/* Elektrische auto: vaste voet sinds 2025, nultarief bij eerste toelating ≤ 2024.
   Op de vaste voet wordt geen forfaitaire afschrijving toegepast (platescout/BD-publicatie 2026). */
function evBpmInfo(toelJ, tariefKeuzeJaren){
  const jaren = (tariefKeuzeJaren||[]).filter(j=>EV_VASTE_VOET[j]);
  if(toelJ < 2025) return {bedrag:0, jaar:null, tekst:'Nultarief (eerste toelating vóór 1 januari 2025)', korting:true};
  if(jaren.length){
    let j = jaren[0];
    if(jaren.length>1){ // laagste van de beschikbare jaartarieven
      j = EV_VASTE_VOET[jaren[0]] <= EV_VASTE_VOET[jaren[1]] ? jaren[0] : jaren[1];
    }
    return {bedrag: EV_VASTE_VOET[j], jaar:j, tekst:'Vaste BPM-voet '+j+' — geen leeftijdskorting op vaste voet', korting:false};
  }
  return {bedrag:null, jaar:null, tekst:'Vaste BPM-voet — tarief nog niet gepubliceerd', korting:false};
}
/* Welke 'aangiftejaar'-vergelijking is toegestaan?
   Huidige-jaar-berekening kan alleen met WLTP (AutoWeek-methodiek bevestigd door BD-tarievenstructuur). */
function dualMogelijk(reg, co2n, co2w){
  if(!reg || reg.status!=='wltp') return false;
  return reg.co2>0;
}
function tabelLabel(jaar, norm){
  if(!jaar) return '';
  const approx = norm==='nedc' && NEDC_TABEL[jaar] && NEDC_TABEL[jaar].approx ? ' (benadering)' : '';
  return norm.toUpperCase()+' '+jaar+approx;
}

/* Wegenbelasting (indicatie 2026; definitieve aanslag via de Belastingdienst-rekenhulp).
   Rijksdeel 2026 per kwartaal + provinciale opcenten 2026 (ANWB/BD-bevestigd).
   Sinds 1 juli 2026 rekent de BD met 'massa rijklaar' (dat is ook de RDW-standaard).
   NB: openbare 2026-tabellen lopen uiteen; bedragen zijn richtinggevend. */
const MRB_2026_BENZINE=[[500,21.46],[600,29.12],[700,37.00],[800,48.30],[900,64.24]]; // per kwartaal; +17,27 per 100 kg boven 900
const MRB_2026_DIESEL=[[500,84.14],[600,99.59],[700,115.03],[800,130.76],[900,153.00]]; // toeslag per kwartaal; +16,57/100 kg boven 900
const MRB_PERC_100KG_B=17.27, MRB_PERC_100KG_D=16.57;
const OPCENTEN_2026={GRONINGEN:95.7,FRIESLAND:92.1,DRENTHE:92.0,OVERIJSSEL:82.2,FLEVOLAND:84.7,GELDERLAND:98.3,UTRECHT:86.4,'NOORD HOLLAND':82.1,'ZUID HOLLAND':104.4,ZEELAND:84.4,'NOORD BRABANT':87.0,LIMBURG:88.5};
const EV_MRB_FACTOR={2025:0.25,2026:0.70,2027:0.70,2028:0.70,2029:0.75,2030:1}; // aandeel van benzinetarief: 2025 = kwarttarief (Autovisie/AutoWeek/BD), 2026-2028 = 70% (30% korting), 2029 = 75%, 2030 = 100%
function mrbRijksdeelKwartaal(kg,bs){
  kg=Math.max(0,parseInt(kg)||0);
  const hk=Math.ceil(kg/100); // gewichtsklasse naar boven per 100 kg
  function trap(tabel,boven){
    let basis=0;
    if(hk<=5)      basis=tabel[hk-1][1];
    else if(hk<=9) basis=tabel[4][1]+(hk-5)*boven;
    else           basis=tabel[4][1]+(hk-9)*boven;
    return Math.round(basis*100)/100;
  }
  if(bs==='elektrisch'){
    const factor=(EV_MRB_FACTOR[TARIEFJAAR]!==undefined)?EV_MRB_FACTOR[TARIEFJAAR]:1;
    return Math.round(trap(MRB_2026_BENZINE,MRB_PERC_100KG_B)*factor*100)/100;
  }
  const gewicht=trap(MRB_2026_BENZINE,MRB_PERC_100KG_B);
  if(bs==='diesel') return Math.round((gewicht+trap(MRB_2026_DIESEL,MRB_PERC_100KG_D))*100)/100;
  return gewicht; // benzine, hybride (PHEV sinds 2026 vol tarief), LPG-achtig
}
function calcWB(massa,bs){
  const totaal=mrbRijksdeelKwartaal(massa,bs);
  const r={};
  Object.keys(OPCENTEN_2026).forEach(p=>{
    r[p]=Math.round(totaal*(1+OPCENTEN_2026[p]/100));
  });
  return r;
}

// ── asserts ──
let fails=0;
function eq(name,got,want){ const ok=Math.abs(got-want)<0.005; if(!ok){fails++;console.log('FAIL',name,'got',got,'want',want);} else console.log('ok  ',name,'=',got); }
eq('WLTP2026 benzine 0g (vaste voet)', calcBrutoBpm(0,'benzine',2026,'wltp'), 687);
eq('WLTP2026 benzine 77g', calcBrutoBpm(77,'benzine',2026,'wltp'), 841);
eq('WLTP2026 benzine 100g', calcBrutoBpm(100,'benzine',2026,'wltp'), 2727);
eq('WLTP2026 benzine 150g', calcBrutoBpm(150,'benzine',2026,'wltp'), 13053); // 9786+11x297
eq('WLTP2026 benzine 200g', calcBrutoBpm(200,'benzine',2026,'wltp'), 14538+45*594);
eq('WLTP2026 diesel 150g (incl. toeslag 81g x 114,83)', calcBrutoBpm(150,'diesel',2026,'wltp'), 22354);
eq('WLTP2025 benzine 100g', calcBrutoBpm(100,'benzine',2025,'wltp'), 2484); // 825+21x79
eq('NEDC2016 benzine 130g', calcBrutoBpm(130,'benzine',2016,'nedc'), 5488);
eq('PHEV2024 WLTP 50g (eigen tabel)', calcBrutoBpm(50,'hybride',2024,'wltp'), 100);
eq('PHEV2018 NEDC 40g', calcBrutoBpm(40,'hybride',2018,'nedc'), 80);
eq('benzine2025 50g (PHEV-voet vervallen)', calcBrutoBpm(50,'hybride',2025,'wltp'), 767);
eq('EV voet 2025', evBpmInfo(2025,[2025,2026]).bedrag, 667);
eq('EV voet 2026', evBpmInfo(2026,[2026,2026]).bedrag, 687);
eq('EV nultarief <=2024', evBpmInfo(2024,[2024,2026]).bedrag, 0);
eq('afschr 12 mnd rest', getBpmAfschrijving(12), 0.64);
eq('afschr 24 mnd rest', getBpmAfschrijving(24), 0.535);
eq('afschr 60 mnd rest', getBpmAfschrijving(60), 1-(62+6*0.42)/100);
eq('afschr 200 mnd rest', getBpmAfschrijving(200), 1-Math.min(100,81+(200-114)*0.19)/100);
eq('WB benzine 1800kg', mrbRijksdeelKwartaal(1800,'benzine'), 219.67);
eq('WB diesel 1800kg', mrbRijksdeelKwartaal(1800,'diesel'), 521.80);
eq('WB EV 2026 1800kg', mrbRijksdeelKwartaal(1800,'elektrisch'), 153.77);
eq('WB Limburg 1800kg diesel (afgerond)', calcWB(1800,'diesel').LIMBURG, 984);

// 2017 (benadering, grenzen 76/102/150/168 per RAI/AutoWeek; drempel 65)
eq('NEDC2017 benzine 150g (grens)', calcBrutoBpm(150,'benzine',2017,'nedc'), 9181);
eq('NEDC2017 benzine 200g (top >168)', calcBrutoBpm(200,'benzine',2017,'nedc'), 13465+32*476);
eq('NEDC2017 diesel 150g (toeslag >65)', calcBrutoBpm(150,'diesel',2017,'nedc'), 9181+Math.round((150-65)*86.69));
eq('NEDC2017 benzine 76g (1e grens)', calcBrutoBpm(76,'benzine',2017,'nedc'), 353+152);
console.log(fails?('FAILURES: '+fails):'ALL PASS');
process.exit(fails?1:0);
