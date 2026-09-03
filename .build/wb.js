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
