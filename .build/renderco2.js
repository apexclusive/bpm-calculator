function renderCo2Fields(panelId){
  const id = panelId; // 'auto' of 'man'
  const datum = getCalDate(id);
  const wrap = document.getElementById('co2-fields-'+id);
  const titleEl = document.getElementById('co2-method-'+id).querySelector('.co2-method-title');
  if(!wrap||!titleEl) return;
  const isPhevPanel = (id==='auto')
    ? (function(){ const m=document.getElementById('sel-merk').value, mo=document.getElementById('sel-model').value, u=document.getElementById('sel-uitvoering').value;
        try{ return (m&&mo&&u!==''&&DB[m].models[mo].uitv[parseInt(u)].bs==='hybride'); }catch(e){ return false; } })()
    : getSegVal('seg-bs')==='hybride';
  const isEv = (id==='auto')
    ? (function(){ const m=document.getElementById('sel-merk').value, mo=document.getElementById('sel-model').value, u=document.getElementById('sel-uitvoering').value;
        try{ return (m&&mo&&u!==''&&DB[m].models[mo].uitv[parseInt(u)].bs==='elektrisch'); }catch(e){ return false; } })()
    : getSegVal('seg-bs')==='elektrisch';
  if(isEv){
    const info=datum&&datum.getFullYear()>=2025;
    titleEl.innerHTML='<span style="color:rgba(198,203,209,.45)">CO₂-invoer</span> <span class="co2-badge badge-ev">Niet van toepassing — emissievrij</span>';
    wrap.innerHTML='<div style="font-size:.78rem;color:rgba(198,203,209,.5);font-family:var(--lb);letter-spacing:.03em;line-height:1.7">'+
      (info?'Sinds 1 januari 2025 geldt voor emissievrije personenauto\'s een <strong style="color:var(--pt)">vaste BPM-voet</strong> (€ 667 in 2025, € 687 in 2026) zonder leeftijdskorting. Voor eerste toelating vóór 2025 geldt het oude nultarief (€ 0).'+
      ' <em>Vul voor de wegenbelasting wel de massa rijklaar in.</em>'
      :'Emissievrije voertuigen kennen geen CO₂-heffing. Voor eerste toelating vóór 2025 geldt het oude nultarief (€ 0); vanaf 2025 een vaste voet (2026: € 687).')+
      '</div>';
    return;
  }
  let methode='geen';
  if(datum){ if(datum.getTime()<D_NEDC_TOT.getTime()) methode='pre2015'; else if(datum>=D_WLTP_VPL) methode='wltp'; else if(datum>=D_WLTP_MID) methode='beide'; else methode='nedc'; }
  let html='';
  const badge=(cls,txt)=>'<span class="co2-badge '+cls+'">'+txt+'</span>';
  if(methode==='pre2015'){
    titleEl.innerHTML='<span style="color:rgba(198,203,209,.45)">CO₂-invoer</span> '+badge('badge-nedc','Eerste toelating vóór 2015');
    html='<div style="font-size:.78rem;color:rgba(196,154,0,.7);font-family:var(--lb);letter-spacing:.02em;line-height:1.7">Vóór 1 januari 2015 was de BPM deels op de (netto) cataloguswaarde gebaseerd — een generieke berekening is niet mogelijk. APEXclusive rekent het gunstigste historische tarief <strong>gratis</strong> voor u na.</div>';
  } else if(methode==='wltp'){
    titleEl.innerHTML='<span style="color:rgba(198,203,209,.45)">CO₂-invoer</span> '+badge('badge-wltp','WLTP — toelating ≥ 1 juli 2020');
    html='<div class="co2-fields"><div class="co2-field-wrap">'+
      '<label class="field-lbl" for="'+id+'-co2-wltp">WLTP CO₂-waarde (g/km)'+
      '<span class="tooltip-wrap"><span class="tt-btn">?</span><span class="tt-popup">Staat op het kentekenbewijs / CoC. Voor toelating ≥ 1 juli 2020 is WLTP verplicht. Is de waarde onbekend, dan gaat de Belastingdienst uit van 550 g/km (benzine) of 395 g/km (diesel).</span></span></label>'+
      '<div class="co2-row"><input class="fi" type="number" id="'+id+'-co2-wltp" placeholder="bijv. 325" min="0" max="700" step="1"><div class="co2-unit">g/km WLTP</div></div></div></div>';
  } else if(methode==='beide'){
    titleEl.innerHTML='<span style="color:rgba(198,203,209,.45)">CO₂-invoer</span> '+badge('badge-both','Overgangsperiode 1 sept. 2018 – 30 juni 2020');
    html='<div style="font-size:.74rem;color:rgba(196,154,0,.65);margin-bottom:.7rem;font-family:var(--lb);letter-spacing:.03em;line-height:1.65">'+
      'NEDC is bepalend voor het tarief van het toelatingsjaar. Is de WLTP-waarde ook bekend, dan maken we een <strong style="color:rgba(196,154,0,.8)">tweede berekening met de tarieven van '+TARIEFJAAR+'</strong> (die mag wettelijk alleen op WLTP-basis). U betaalt de laagste uitkomst.'+(isPhevPanel?' PHEV\'s tot 50 g/km hadden t/m 2024 een eigen tarief zonder vaste voet — de tool rekent dit automatisch.':'')+
      '</div><div class="co2-fields">'+
      '<div class="co2-field-wrap"><label class="field-lbl" for="'+id+'-co2-nedc">NEDC CO₂-waarde (g/km) — bepalend voor toelatingsjaar'+
      '<span class="tooltip-wrap"><span class="tt-btn">?</span><span class="tt-popup">Staat op het kentekenbewijs. Bij onbekende waarde: 507 g/km (benzine) of 356 g/km (diesel).</span></span></label>'+
      '<div class="co2-row"><input class="fi" type="number" id="'+id+'-co2-nedc" placeholder="bijv. 270" min="0" max="700" step="1"><div class="co2-unit">g/km NEDC</div></div></div>'+
      '<div class="co2-field-wrap"><label class="field-lbl" for="'+id+'-co2-wltp">WLTP CO₂-waarde (g/km) — voor vergelijking met tarieven '+TARIEFJAAR+'</label>'+
      '<div class="co2-row"><input class="fi" type="number" id="'+id+'-co2-wltp" placeholder="bijv. 295 (optioneel)" min="0" max="700" step="1"><div class="co2-unit">g/km WLTP</div></div></div>'+
      '</div>';
  } else if(methode==='nedc'){
    titleEl.innerHTML='<span style="color:rgba(198,203,209,.45)">CO₂-invoer</span> '+badge('badge-nedc','NEDC — toelating vóór 1 sept. 2018');
    html='<div style="font-size:.74rem;color:rgba(196,154,0,.65);margin-bottom:.7rem;font-family:var(--lb);letter-spacing:.03em;line-height:1.65">'+
      'Voor deze auto\'s bestaat alleen een NEDC-waarde — de BPM wordt berekend met het tarief van het <strong style="color:rgba(196,154,0,.8)">toelatingsjaar</strong> (vergelijking met de huidige WLTP-tarieven is wettelijk niet mogelijk).'+
      '</div><div class="co2-fields"><div class="co2-field-wrap">'+
      '<label class="field-lbl" for="'+id+'-co2-nedc">NEDC CO₂-waarde (g/km)'+
      '<span class="tooltip-wrap"><span class="tt-btn">?</span><span class="tt-popup">Staat op het kentekenbewijs. Bij onbekende waarde: 507 g/km (benzine) of 356 g/km (diesel).</span></span></label>'+
      '<div class="co2-row"><input class="fi" type="number" id="'+id+'-co2-nedc" placeholder="bijv. 278" min="0" max="700" step="1"><div class="co2-unit">g/km NEDC</div></div></div></div>';
  } else {
    titleEl.innerHTML='<span style="color:rgba(198,203,209,.45)">CO₂-invoer — selecteer eerst de datum</span>';
    html='<div class="co2-fields">'+
      '<div class="co2-field-wrap"><label class="field-lbl" for="'+id+'-co2-wltp">WLTP CO₂ (g/km)</label><div class="co2-row"><input class="fi" type="number" id="'+id+'-co2-wltp" placeholder="bijv. 325" min="0" max="700" step="1"><div class="co2-unit">g/km WLTP</div></div></div>'+
      '<div class="co2-field-wrap"><label class="field-lbl" for="'+id+'-co2-nedc">NEDC CO₂ (g/km)</label><div class="co2-row"><input class="fi" type="number" id="'+id+'-co2-nedc" placeholder="bijv. 278" min="0" max="700" step="1"><div class="co2-unit">g/km NEDC</div></div></div>'+
      '</div>';
  }
  wrap.innerHTML=html;
  if(typeof _fillCo2Fields==='function') _fillCo2Fields(id);
}
