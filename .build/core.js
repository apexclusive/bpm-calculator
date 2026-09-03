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
