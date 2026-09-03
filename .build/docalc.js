function doCalc(){
  const isAuto=currentTab==='auto';
  const panelId=isAuto?'auto':'man';
  const datum=getCalDate(panelId);
  const resu=document.getElementById('result-wrap');

  /* --- Invoer lezen --- */
  let cat=0, bs='benzine', voertuig='', merkLabel='', massa='', kw='';
  if(isAuto){
    const merk=document.getElementById('sel-merk').value;
    const mod=document.getElementById('sel-model').value;
    const idx=document.getElementById('sel-uitvoering').value;
    cat=parseFloat(document.getElementById('auto-cat').value)||0;
    if(merk&&mod&&idx!==''){
      const u=DB[merk].models[mod].uitv[parseInt(idx)];
      bs=u.bs;
      merkLabel=DB[merk].label;
      voertuig=DB[merk].label+' '+DB[merk].models[mod].label+' — '+u.l;
    } else {
      bs='benzine';
      voertuig='Niet geselecteerd';
    }
  } else {
    cat=parseFloat(document.getElementById('man-cat').value)||0;
    bs=getSegVal('seg-bs');
    merkLabel=document.getElementById('man-merk').value||'Onbekend';
    voertuig=merkLabel;
  }
  massa=document.getElementById(panelId+'-massa').value;
  kw=document.getElementById(panelId+'-kw')?document.getElementById(panelId+'-kw').value:'';

  if(!datum){
    toonFout('Selecteer of voer de datum van eerste toelating in — die bepaalt welk BPM-tarief geldt.');
    return;
  }
  const nu=new Date();
  if(datum.getTime()>nu.getTime()){
    toonFout('De datum eerste toelating ligt in de toekomst — controleer de invoer.');
    return;
  }
  const co2Data=getCo2Value(panelId);
  const co2n=co2Data&&co2Data.nedc>0?co2Data.nedc:null;
  const co2w=co2Data&&co2Data.wltp>0?co2Data.wltp:null;
  if((bs==='benzine'||bs==='diesel'||bs==='hybride')&&co2n===null&&co2w===null&&!cat){
    toonFout('Vul de cataloguswaarde (tabblad Voertuig) óf de CO₂-uitstoot in om te kunnen berekenen.');
    return;
  }
  const leegVeld=hulpVerbergFout();

  /* --- Leeftijd (forfaitair; elke begonnen maand telt) --- */
  let mPos=Math.max(0,(nu.getFullYear()-datum.getFullYear())*12+(nu.getMonth()-datum.getMonth()));
  if(nu.getDate()>datum.getDate()) mPos+=1;
  const jaar=Math.floor(mPos/12), rMnd=mPos%12;
  const pct=getBpmPct(mPos);                       // bv. 0.42 = 42% rest
  const afschrPct=Math.round((1-pct)*100);
  const oldtimer=(mPos>=300);                       // 25 jaar en ouder
  const toelJ=datum.getFullYear();
  const nuJ=TARIEFJAAR;

  /* --- Status-uitzonderingen vóór de hoofdlijn --- */
  if(!oldtimer && datum.getTime()<D_NEDC_TOT.getTime()){
    // pre-2015 (geen oldtimer): deels cataloguswaarde-regime → geen betrouwbare generieke berekening
    resu.classList.add('show');
    document.getElementById('empty-state').style.display='none';
    document.getElementById('dual-calc-wrap').style.display='none';
    document.getElementById('wb-section').style.display='none';
    verbergResultaatKaarten();
    const ve=document.getElementById('r-verdict');
    ve.className='verdict-banner verdict-info';
    let preTxt='';
    if(datum.getFullYear()>=2009) preTxt=' Ontbreekt de CO₂-waarde, dan hanteert de Belastingdienst voor 2009–2014 forfaitair 350 g/km (benzine) of 302 g/km (diesel). ';
    ve.innerHTML='<strong>Eerste toelating vóór 1 januari 2015</strong> — toen gold een BPM-regime dat deels op de (netto) cataloguswaarde was gebaseerd (met CO₂-heffing, energielabel en brandstoftoeslagen). Dat laat zich niet betrouwbaar in een generieke calculator vangen.'+preTxt+'<span class="v-cta">APEXclusive rekent het gratis voor u na — ook het gunstigste historische tarief.</span> <a class="btn gh v-btn" href="https://wa.me/31624735939?text=Beste%20Martijn%2C%20ik%20wil%20een%20gratis%20BPM-naberekening%20voor%20een%20auto%20met%20eerste%20toelating%20v%C3%B3%C3%B3r%202015." target="_blank" rel="noopener">Gratis narekening via WhatsApp</a>';
    setTimeout(()=>resu.scrollIntoView({behavior:'smooth',block:'start'}),80);
    return;
  }

  /* --- Basis-objecten voor resultaat --- */
  let uitkomst={bedrag:null, label:'', bruto:null, brutoLabel:'', norm:null, co2:null,
                regTekst:'', evFlat:false, oldtimer:false, dual:null, infoNoot:''};
  const wltpBanner=document.getElementById('wltp-banner');

  /* ===== ELEKTRISCH ===== */
  if(bs==='elektrisch'){
    const info=evBpmInfo(toelJ, nuJ>=toelJ?[toelJ,nuJ]:[toelJ]);
    uitkomst.evFlat=true;
    if(oldtimer){ uitkomst.oldtimer=true; uitkomst.bedrag=0; uitkomst.label='Vrijgesteld (25 jaar of ouder)'; }
    else if(info.bedrag===0){
      uitkomst.bedrag=0;
      uitkomst.label='BPM nultarief — eerste toelating vóór 1 januari 2025';
      uitkomst.infoNoot='Het oude nultarief voor emissievrije auto\'s blijft gelden voor voertuigen waarvan de eerste toelating vóór 1 januari 2025 ligt.';
    } else {
      uitkomst.bedrag=info.bedrag;
      uitkomst.label=info.tekst;
      uitkomst.infoNoot='Sinds 1 januari 2025 geldt voor (gebruikte) emissievrije personenauto\'s een vaste BPM-voet zonder leeftijdskorting. Bedrag: vaste voet '+info.jaar+'.';
    }
    uitkomst.bruto=uitkomst.bedrag;
    uitkomst.brutoLabel='Vaste BPM-voet';
    uitkomst.regTekst='Nul-emissie';
  } else
  /* ===== OLD TIMER (25+) ===== */
  if(oldtimer){
    uitkomst.oldtimer=true;
    uitkomst.bedrag=0;
    uitkomst.label='Vrijgesteld — 25 jaar of ouder (oldtimer)';
    uitkomst.bruto=0; uitkomst.brutoLabel='Vrijstelling';
    uitkomst.infoNoot='Personenauto\'s van 25 jaar en ouder zijn vrijgesteld van BPM bij (her)registratie/import.';
    uitkomst.regTekst='25+ jaar';
  } else {
    /* ===== BRANDSTOF: regime bepalen ===== */
    let reg=regimeInfo(datum, bs, co2n||0, co2w||0);
    // uitzondering: overgangsperiode met alleen WLTP-waarde (geen NEDC bekend) → reken als WLTP-tijdvak
    if(reg.status==='beide' && co2n===null && co2w!==null){ reg.norm='wltp'; reg.status='wltp'; reg.co2=co2w; }
    if(reg.status==='nedc' && toelJ<2018 && co2n===null && co2w!==null){
      reg.co2=co2DefaultWaarde(bs, datum); reg.co2Default=true; // NEDC-tijdvak zonder NEDC-waarde
    }
    const norm=reg.norm;
    const co2=reg.co2;
    uitkomst.co2=co2;
    uitkomst.norm=norm;
    if(reg.co2Default){
      uitkomst.infoNoot='CO₂-uitstoot onbekend → de Belastingdienst gaat voor dit tijdvak uit van '+(bs==='diesel'?'356':'507')+' g/km (toelating 2015–2020) of '+(bs==='diesel'?'395':'550')+' g/km (vanaf juli 2020). Vul de CO₂-waarde van het kentekenbewijs in voor een scherpere uitkomst.';
    }
    if(reg.status==='pre2015'){
      // regimeInfo geeft dit niet meer (hierboven afgehandeld) — guard
      uitkomst.bedrag=0; uitkomst.label='n.v.t.';
    } else if(co2===null){
      toonFout('Vul de CO₂-uitstoot in (WLTP/NEDC, zie kentekenbewijs of CoC) — zonder CO₂-waarde kan de BPM niet worden berekend.');
      return;
    } else {
      const isPhev=reg.phev;
      const normToel=norm;
      /* Berekening A: tarief van het toelatingsjaar */
      const brutoA=calcBrutoBpm(co2, bs, toelJ, normToel);
      let labelA=tabelLabel(toelJ, normToel);
      if(isPhev && phevActief(toelJ)) labelA+=' · PHEV-tarief (zonder vaste voet)';
      /* Berekening B: tarief aangiftejaar — alleen via WLTP (wettelijk;zelfde aanpak als AutoWeek/BD) */
      let brutoB=null, labelB='';
      const kanB = (reg.status==='wltp' && toelJ<nuJ) ||
                   (reg.status==='beide' && co2w!==null && toelJ<nuJ);
      if(kanB){
        const co2B = (reg.status==='beide') ? co2w : co2;
        brutoB=calcBrutoBpm(co2B, bs, nuJ, 'wltp');
        labelB=tabelLabel(nuJ, 'wltp');
      }
      uitkomst.brutoA=brutoA; uitkomst.brutoB=brutoB;
      if(kanB && brutoB!==null){
        uitkomst.dual={a:brutoA,b:brutoB,labelA:labelA,labelB:labelB,co2A:co2,co2B:(reg.status==='beide'?co2w:co2)};
        if(brutoA<=brutoB){ uitkomst.bruto=brutoA; uitkomst.brutoLabel=labelA; }
        else { uitkomst.bruto=brutoB; uitkomst.brutoLabel=labelB; }
      } else {
        uitkomst.bruto=brutoA; uitkomst.brutoLabel=labelA;
        if(reg.status!=='wltp' && toelJ>=2018){
          uitkomst.infoNoot=(uitkomst.infoNoot?uitkomst.infoNoot+' ':'')+'Voor een vergelijking met de tarieven van '+nuJ+' is de WLTP-CO₂-waarde nodig (die bestaat in principe alleen voor auto\'s met eerste toelating vanaf 1 september 2018).';
        } else if(reg.status==='wltp' && toelJ>=nuJ){
          uitkomst.infoNoot='Toelatingsjaar is gelijk aan het huidige tariefjaar — er is slechts één tarief van toepassing.';
        }
      }
      if(!reg.co2Default){
        // controle op onwaarschijnlijke PHEV-combinaties
        if(isPhev && co2>50 && toelJ<=2024){
          uitkomst.infoNoot=(uitkomst.infoNoot?uitkomst.infoNoot+' ':'')+'Let op: dit voertuig is een plug-in hybride met CO₂ > 50 g/km. Het gereduceerde PHEV-tarief geldt alleen tot 50 g/km; boven 50 g/km geldt de normale benzinetabel.';
        }
      }
      uitkomst.bedrag=Math.round(uitkomst.bruto*pct);
      uitkomst.label='Na '+afschrPct+'% afschrijving · gunstigste tarief';
    }
  }

  /* ===== Verdict / bijzondere situaties ===== */
  const ve=document.getElementById('r-verdict');
  if(uitkomst.bedrag===null){
    return; // foutmelding getoond
  }
  if(uitkomst.oldtimer){
    ve.className='verdict-banner verdict-ok';
    ve.innerHTML='<strong>Oldtimer (25 jaar of ouder): vrijgesteld van BPM.</strong> De vrijstelling geldt bij import en registratie. Voor de wegenbelasting geldt het bijzondere oldtimer-kwarttarief (via onze Kentekencheck per provincie te berekenen); APK blijft van toepassing.';
  } else if(uitkomst.evFlat){
    ve.className='verdict-banner '+(uitkomst.bedrag===0?'verdict-ok':'verdict-info');
    ve.innerHTML = uitkomst.bedrag===0
      ? '<strong>Emissievrij voertuig — nultarief BPM.</strong> '+uitkomst.infoNoot
      : '<strong>Emissievrij voertuig — vaste BPM-voet van € '+fE(uitkomst.bedrag)+'.</strong> '+uitkomst.infoNoot;
  } else {
    const ratio = uitkomst.bruto>0 ? Math.round(pct*100) : 0;
    if(ratio>50){
      ve.className='verdict-banner verdict-bad';
      ve.innerHTML='<strong>Hoge resterende BPM ('+ratio+'% van bruto).</strong> Bij jonge, prijzige auto\'s kan een <em>erkende taxatie</em> (koerslijst of taxatierapport) de rest-BPM flink verlagen — APEXclusive regelt dit via erkende RDW-partners.';
    } else if(ratio>20){
      ve.className='verdict-banner verdict-warn';
      ve.innerHTML='<strong>Rest-BPM: '+ratio+'% van het bruto bedrag.</strong> Een taxatie kan ook hier gunstiger uitpakken dan de forfaitaire tabel. Vraag een gratis indicatie bij APEXclusive.';
    } else {
      ve.className='verdict-banner verdict-ok';
      ve.innerHTML='<strong>Lage resterende BPM ('+ratio+'%).</strong> De auto heeft het grootste deel van de BPM al afgeschreven — gunstig voor import.';
    }
  }

  /* ===== Hoofdkaarten ===== */
  const bedragFinal=uitkomst.bedrag;
  document.getElementById('r-bpm').textContent=fE(bedragFinal);
  document.getElementById('r-bpm-sub').textContent=uitkomst.label;
  const badge=document.getElementById('r-badge');
  let badgeCls='methode-wltp', badgeTxt='';
  if(uitkomst.oldtimer){ badgeCls='methode-ev'; badgeTxt='Oldtimer · vrijgesteld'; }
  else if(uitkomst.evFlat){ badgeCls='methode-ev'; badgeTxt=bedragFinal===0?'Elektrisch · nultarief':'Elektrisch · vaste voet'; }
  else if(uitkomst.dual){ badgeTxt='Vergelijking toegepast → laagste uitkomst'; }
  else { badgeTxt=uitkomst.brutoLabel; }
  if(!uitkomst.oldtimer&&!uitkomst.evFlat&&!uitkomst.dual){
    badgeCls=uitkomst.norm==='wltp'?'methode-wltp':'methode-nedc';
  }
  badge.innerHTML='<div class="methode-badge '+badgeCls+'">'+badgeTxt+'</div>';

  const grondEl=document.getElementById('r-grondslag');
  const grondSub=document.getElementById('r-grondslag-sub');
  if(uitkomst.bruto!==null&&uitkomst.bruto!==undefined){
    grondEl.textContent=fE(Math.round(uitkomst.bruto));
    grondSub.textContent='Bruto BPM — '+uitkomst.brutoLabel;
  } else {
    grondEl.textContent='—'; grondSub.textContent='';
  }
  document.getElementById('r-afschr').textContent =
    (uitkomst.oldtimer||uitkomst.evFlat)?'—':Math.round(pct*100)+'% rest';
  document.getElementById('r-leeftijd').textContent=jaar+' jaar'+(rMnd?' '+rMnd+' mnd':'');

  /* info-noot-blok (CO₂-forfait, PHEV-nuance e.d.) */
  const nootEl=document.getElementById('uitkomst-noot');
  if(nootEl){ nootEl.style.display = uitkomst.infoNoot?'block':'none'; nootEl.innerHTML = uitkomst.infoNoot?('<span class="noot-ic">ⓘ</span> '+uitkomst.infoNoot):''; }

  /* ===== CO₂-blok ===== */
  const ci=document.getElementById('co2-info');
  const toonCo2 = !uitkomst.oldtimer && (!uitkomst.evFlat || bedragFinal>0);
  if(toonCo2 && uitkomst.co2!==null && uitkomst.co2!==undefined){
    ci.classList.add('show');
    document.getElementById('ci-co2').textContent=uitkomst.co2+' g/km';
    document.getElementById('ci-methode').textContent=
      uitkomst.evFlat?'Nul-emissie (0 g/km)':(uitkomst.norm==='wltp'?'WLTP-meting':'NEDC-meting')+
      (uitkomst.evFlat?'':(uitkomst.brutoLabel? ' · tariefjaar '+(uitkomst.dual?(uitkomst.brutoA<=uitkomst.brutoB?toelJ:nuJ):toelJ):''));
    // emissieklasse op basis van WLTP-CO₂ (indicatief energielabel-achtig)
    const kl=co2KL(uitkomst.co2, bs);
    setTimeout(()=>{const b=document.getElementById('ci-bar'); b.style.width=kl.w+'%'; b.style.background=kl.col;},300);
    document.getElementById('ci-klasse').textContent='Klasse '+kl.k;
    document.getElementById('ci-klasse-sub').textContent=kl.s;
    // marginaal tarief per gram van het gekozen jaar/tabel
    const tariefJaar = uitkomst.dual ? (uitkomst.brutoA<=uitkomst.brutoB?toelJ:nuJ) : toelJ;
    if(!uitkomst.evFlat && uitkomst.co2>0){
      const normVoorMarg = (uitkomst.dual && uitkomst.brutoB!==null && uitkomst.brutoB<uitkomst.brutoA)?'wltp':uitkomst.norm;
      const t1=calcBrutoBpm(uitkomst.co2, bs, tariefJaar, normVoorMarg);
      const t2=calcBrutoBpm(uitkomst.co2+1, bs, tariefJaar, normVoorMarg);
      document.getElementById('ci-tarief').textContent='€ '+(t2-t1).toFixed(2)+' · tabel '+tariefJaar;
      const ciLbl=document.querySelector('#co2-info .co2-card:nth-child(3) .co2-lbl');
      if(ciLbl) ciLbl.textContent='BPM-tarief '+tariefJaar+' (€/g)';
    } else {
      document.getElementById('ci-tarief').textContent=uitkomst.evFlat?'€ 0':'n.v.t.';
    }
  } else {
    ci.classList.remove('show');
  }

  /* ===== Dubbele-berekening-kaarten ===== */
  const dualWrap=document.getElementById('dual-calc-wrap');
  const dualResults=document.getElementById('dual-results');
  if(uitkomst.dual){
    const laagste='a', hi='b';
    const dcHead=dualWrap.querySelector('.dual-calc-header');
    if(dcHead) dcHead.textContent='Twee berekeningen — tarief toelatingsjaar '+toelJ+' vs. tarief aangiftejaar '+nuJ+' (WLTP)';
    const kaartA=(uitkomst.dual.a<=uitkomst.dual.b);
    dualWrap.style.display='block';
    const restPctTxt=Math.round(pct*100)+'% rest';
    dualResults.innerHTML=
      '<div class="dual-card year-reg'+(kaartA?' recommended':'')+'">'+
        '<div class="dual-card-lbl">Tarief toelatingsjaar '+toelJ+' ('+uitkomst.dual.labelA.split(' · ')[0]+')</div>'+
        '<div class="dual-card-val">'+fE(Math.round(uitkomst.dual.a*pct))+'</div>'+
        '<div class="dual-card-sub">Bruto '+fE(uitkomst.dual.a)+' · '+restPctTxt+' · CO₂ '+uitkomst.dual.co2A+' g/km</div>'+
        '<div class="dual-card-note">'+uitkomst.dual.labelA+(uitkomst.dual.co2A?' · '+uitkomst.dual.co2A+' g/km':'')+'</div>'+
        (kaartA?'<div class="rec-tag">✓ Laagste uitkomst</div>':'')+
      '</div>'+
      '<div class="dual-card year-now'+(kaartA?'':' recommended')+'">'+
        '<div class="dual-card-lbl">Tarief aangiftejaar '+nuJ+' (WLTP)</div>'+
        '<div class="dual-card-val">'+fE(Math.round(uitkomst.dual.b*pct))+'</div>'+
        '<div class="dual-card-sub">Bruto '+fE(uitkomst.dual.b)+' · '+restPctTxt+' · CO₂ '+uitkomst.dual.co2B+' g/km</div>'+
        '<div class="dual-card-note">'+uitkomst.dual.labelB+'</div>'+
        (kaartA?'':'<div class="rec-tag">✓ Laagste uitkomst</div>')+
      '</div>';
  } else {
    dualWrap.style.display='none';
  }

  /* ===== Chart & tabel ===== */
  const isFlat=uitkomst.oldtimer||uitkomst.evFlat;
  const chartWrap=document.querySelector('.chart-section');
  if(chartWrap) chartWrap.style.display=isFlat?'none':'block';
  if(!isFlat&&uitkomst.bruto>0){
    const canvas=document.getElementById('bpm-chart');
    setTimeout(()=>drawChart(canvas,mPos,Math.round(uitkomst.bruto)),80);
    let tH='<table class="bpm-table"><thead><tr>';
    tH+='<th>Leeftijd</th><th>Rest %</th><th>Rest BPM (indicatief)</th><th>Afgeschreven</th></tr></thead><tbody>';
    const brutoTabel=uitkomst.bruto;
    BTAB.forEach(r=>{
      const cur=mPos>=r.v&&mPos<r.t;
      const rb=Math.round(brutoTabel*r.p/100);
      const vL=mLabel(r.v), tL=mLabel(r.t);
      tH+='<tr'+(cur?' class="cur-row"':'')+'>';
      tH+='<td>'+(cur?'<span class="cur-mark">▶</span>':'')+vL+' – '+tL+'</td>';
      tH+='<td>'+r.p.toFixed(1)+'%</td>';
      tH+='<td>'+fE(rb)+'</td>';
      tH+='<td>−'+Math.round(100-r.p)+'%</td>';
      tH+='</tr>';
    });
    tH+='</tbody></table>';
    document.getElementById('bpm-table-wrap').innerHTML=tH;
  } else {
    const tw=document.getElementById('bpm-table-wrap');
    if(tw) tw.innerHTML='';
  }

  /* ===== Detailgrid ===== */
  document.getElementById('d-voertuig').textContent=voertuig||'—';
  document.getElementById('d-bs').textContent=cap(bs)+(kw?' · '+kw+' kW':'');
  document.getElementById('d-cat').textContent=cat?fE(cat):'—';
  document.getElementById('d-datum').textContent=datum.getDate()+' '+
    ['jan','feb','mrt','apr','mei','jun','jul','aug','sep','okt','nov','dec'][datum.getMonth()]+' '+datum.getFullYear();
  document.getElementById('d-lft').textContent=jaar+' jaar '+rMnd+' maanden';
  let methodeTxt=uitkomst.brutoLabel||'';
  if(uitkomst.dual) methodeTxt='Laagste van '+uitkomst.dual.labelA+' en '+uitkomst.dual.labelB;
  if(uitkomst.oldtimer) methodeTxt='Oldtimer-vrijstelling (25+)';
  document.getElementById('d-methode').textContent=methodeTxt;

  /* ===== Wegenbelasting (indicatie 2026, incl. provinciale opcenten) ===== */
  const wbS=document.getElementById('wb-section');
  if(massa&&parseInt(massa)>0&&!uitkomst.oldtimer){
    const wb=calcWB(parseInt(massa),bs);
    const provLabels={GRONINGEN:'Groningen',FRIESLAND:'Friesland',DRENTHE:'Drenthe',OVERIJSSEL:'Overijssel',FLEVOLAND:'Flevoland',GELDERLAND:'Gelderland',UTRECHT:'Utrecht','NOORD HOLLAND':'Noord-Holland','ZUID HOLLAND':'Zuid-Holland',ZEELAND:'Zeeland','NOORD BRABANT':'Noord-Brabant',LIMBURG:'Limburg ★'};
    let wH='<table class="wb-table"><thead><tr><th>Provincie — opcenten '+TARIEFJAAR+'</th><th>Per kwartaal</th></tr></thead><tbody>';
    Object.keys(wb).forEach(p=>{
      const hl=p==='LIMBURG';
      wH+='<tr'+(hl?' class="wb-hl"':'')+'>';
      wH+='<td>'+ (provLabels[p]||cap(p)) +'</td><td>'+fE(wb[p])+'</td></tr>';
    });
    wH+='</tbody></table>';
    wH+='<div class="wb-note">Indicatie '+TARIEFJAAR+': rijksdeel (gewicht + brandstoftoeslag) × provinciale opcenten '+TARIEFJAAR+'. Sinds 1 juli '+TARIEFJAAR+' rekent de Belastingdienst met massa rijklaar. EV\'s betalen 70% van het benzinetarief (korting 30% t/m 2028); plug-in hybrides betalen sinds 2026 het volle tarief. <a href="https://www.belastingdienst.nl/wps/wcm/connect/nl/auto-en-vervoer/content/hulpmiddel-motorrijtuigenbelasting-berekenen" target="_blank" rel="noopener">Officiële rekenhulp Belastingdienst ↗</a> bepaalt de definitieve aanslag.</div>';
    document.getElementById('wb-wrap').innerHTML=wH;
    wbS.style.display='block';
  } else {
    wbS.style.display='none';
  }

  /* ===== 'Te betalen' blok + kosten ===== */
  const betalenWrap=document.getElementById('betalen-wrap');
  const betalenVal=document.getElementById('betalen-val');
  const betalenSub=document.getElementById('betalen-sub');
  const betalenKosten=document.getElementById('betalen-kosten');
  const betalenTotaal=document.getElementById('betalen-totaal-val');
  const toonBetalen = !uitkomst.oldtimer && bedragFinal>0;
  const jongeAuto = (mPos<=6); // ≤6 mnd sinds eerste toelating → mogelijke btw-plicht bij EU-import (BD)
  if(toonBetalen){
    betalenWrap.style.display='block';
    betalenVal.textContent=fE(bedragFinal);
    betalenSub.textContent=uitkomst.label+' · '+(uitkomst.brutoLabel||'');
    const rdw2026={ident:58.50,doc:63.10,recy:22.50}; // identificatie 58,50 + (kentekenbewijs 50,00 & tenaamstelling 13,10) + recycling 22,50
    const rdwTotaal=Math.round((rdw2026.ident+rdw2026.doc+rdw2026.recy)*100)/100;
    const apk=85, platen=40;
    const transportLaag=800, transportHoog=2500;
    const totaalLaag=bedragFinal+rdwTotaal+apk+platen+transportLaag;
    const totaalHoog=bedragFinal+rdwTotaal+apk+platen+transportHoog;
    betalenKosten.innerHTML=
      '<div class="betalen-kost bpm-kost">'+
        '<div class="betalen-kost-icon">🏛</div>'+
        '<div class="betalen-kost-lbl">Resterende BPM</div>'+
        '<div class="betalen-kost-val">'+fE(bedragFinal)+'</div>'+
        '<div class="betalen-kost-sub">Te betalen aan de Belastingdienst</div>'+
      '</div>'+
      '<div class="betalen-kost">'+
        '<div class="betalen-kost-icon">🔍</div>'+
        '<div class="betalen-kost-lbl">RDW + recycling 2026</div>'+
        '<div class="betalen-kost-val">± € '+rdwTotaal.toLocaleString('nl-NL')+'</div>'+
        '<div class="betalen-kost-sub">Identificatie € 58,50 · kentekenbewijs € 50,00 · tenaamstelling € 13,10 · recycling € 22,50</div>'+
      '</div>'+
      '<div class="betalen-kost">'+
        '<div class="betalen-kost-icon">🚗</div>'+
        '<div class="betalen-kost-lbl">Transport</div>'+
        '<div class="betalen-kost-val">± '+fE(transportLaag)+' – '+fE(transportHoog)+'</div>'+
        '<div class="betalen-kost-sub">Afhankelijk van herkomst en wijze (zelf rijden/vervoer)</div>'+
      '</div>'+
      '<div class="betalen-kost">'+
        '<div class="betalen-kost-icon">📋</div>'+
        '<div class="betalen-kost-lbl">APK + platen</div>'+
        '<div class="betalen-kost-val">± '+fE(apk+platen)+'</div>'+
        '<div class="betalen-kost-sub">Eerste APK (± € 85) en kentekenplaten (± € 40). Aangifte/afhandeling: via APEXclusive op offerte.</div>'+
      '</div>';
    betalenTotaal.textContent=fE(totaalLaag)+' – '+fE(totaalHoog);
    const bestaand=betalenWrap.querySelector('.betalen-methode-info');
    if(bestaand) bestaand.remove();
    const methodInfo=document.createElement('div');
    methodInfo.className='betalen-methode-info';
    methodInfo.textContent='RDW-leges zijn de officiële tarieven 2026 (mrWheelson/RDW). De werkelijke BPM kan lager uitvallen bij een erkende taxatie (koerslijst of taxatierapport) — juist bij jongere, exclusieve auto\'s vaak duizenden euro\'s. APEXclusive regelt taxatie, aangifte en registratie via erkende partners.'+(jongeAuto?' Let op (Belastingdienst): is de auto ≤ 6 maanden geleden in gebruik genomen of heeft hij ≤ 6.000 km gereden, dan is bij import uit een EU-land mogelijk ook btw verschuldigd — wij rekenen dat in de totaalplaatjes graag voor u door.':'');
    if(jongeAuto) methodInfo.classList.add('ml-letop');
    betalenWrap.appendChild(methodInfo);
  } else {
    betalenWrap.style.display='none';
  }

  /* ===== Resultaat tonen + extra modules ===== */
  document.getElementById('empty-state').style.display='none';
  window.__lastUitkomst=uitkomst; window.__lastBs=bs;
  resu.classList.add('show');
  vulResultaatActies(voertuig, uitkomst, bedragFinal, toelJ, mPos, bs, co2n, co2w, cat, massa, kw, merkLabel);
  renderMaandlasten(bs, uitkomst.oldtimer?0:massa, uitkomst); // oldtimer: geen standaard-WB-tarieven
  try{ bewaarBerekening(window.__laatsteUrl||'', voertuig||'BPM-berekening', fE(bedragFinal), uitkomst.label||''); }catch(e){}
  setTimeout(()=>resu.scrollIntoView({behavior:'smooth',block:'start'}),80);
}

function hulpVerbergFout(){ /* no-op hook voor inline foutmelding */
  return null;
}
function toonFout(msg){
  const box=document.getElementById('calc-fout');
  if(box){ box.style.display='block'; box.innerHTML='⚠ '+msg; box.scrollIntoView({behavior:'smooth',block:'center'}); }
  setTimeout(()=>{ if(box) box.style.display='none'; },9000);
}
function verbergResultaatKaarten(){
  document.getElementById('r-bpm').textContent='—';
  document.getElementById('r-bpm-sub').textContent='';
  document.getElementById('r-grondslag').textContent='—';
  document.getElementById('r-grondslag-sub').textContent='';
  document.getElementById('r-afschr').textContent='—';
  document.getElementById('r-leeftijd').textContent='—';
  const badge=document.getElementById('r-badge');
  if(badge) badge.innerHTML='';
  const ci=document.getElementById('co2-info'); if(ci) ci.classList.remove('show');
  const noot=document.getElementById('uitkomst-noot'); if(noot){ noot.style.display='none'; noot.innerHTML=''; }
  const tw=document.getElementById('bpm-table-wrap'); if(tw) tw.innerHTML='';
  const cw=document.querySelector('.chart-section'); if(cw) cw.style.display='block';
  const addons=document.getElementById('addons-wrap'); if(addons) addons.style.display='none';
}
