/* ══════════════════════════════════════════════════
   EXTRA MODULES — RDW-kenteken, delen/printen, maandlasten, FAQ, URL-params
══════════════════════════════════════════════════ */
const BRANDSTOF_PRIJZEN_2026={benzine:1.90,diesel:1.70,lpg:0.95,elektrisch:0.30,waterstof:12};
const BRANDSTOF_VERBRUIK={benzine:23.2,diesel:26.5,lpg:15.5}; // g CO2/km → l/100km (indicatief)

/* --- 1. Kenteken-snelfill via RDW Open Data (zelfde bron als onze Kentekencheck) --- */
function rdwNormaal(k){ return (k||'').replace(/[^a-zA-Z0-9]/g,'').toUpperCase(); }
async function rdwZoek(){
  const inp=document.getElementById('rdw-kent');
  const out=document.getElementById('rdw-status');
  const btn=document.getElementById('rdw-btn');
  const k=rdwNormaal(inp&&inp.value);
  if(!out||!inp) return;
  if(k.length!==6){ out.style.color='rgba(206,43,55,.8)'; out.textContent='Een Nederlands kenteken heeft 6 tekens (bijv. NH-713-T).'; return; }
  btn&&(btn.disabled=true);
  out.style.color='rgba(198,203,209,.6)'; out.textContent='Zoeken in RDW Open Data…';
  try{
    const voertuigRes=await fetch('https://opendata.rdw.nl/resource/m9d7-ebf2.json?kenteken='+k+'&$limit=1');
    if(!voertuigRes.ok) throw new Error('http');
    const v=await voertuigRes.json();
    if(!v||!v.length){ throw new Error('leeg'); }
    const d=v[0];
    let brand='Benzine', co2=null;
    try{
      const brRes=await fetch('https://opendata.rdw.nl/resource/8ys7-d773.json?kenteken='+k+'&$limit=1');
      if(brRes.ok){ const b=await brRes.json(); if(b&&b.length){ if(b[0].brandstof_omschrijving) brand=b[0].brandstof_omschrijving; if(b[0].co2_uitstoot_gecombineerd) co2=parseInt(b[0].co2_uitstoot_gecombineerd); } }
    }catch(e){ /* brandstof/CO2 optioneel */ }
    const bsRaw=brand.toLowerCase();
    let bs='benzine';
    if(bsRaw.indexOf('diesel')>-1) bs='diesel';
    else if(bsRaw.indexOf('elektriciteit')>-1||bsRaw.indexOf('elektrisch')>-1) bs='elektrisch';
    let dt=null;
    if(d.datum_eerste_toelating_dt) dt=new Date(d.datum_eerste_toelating_dt);
    else if(d.datum_eerste_toelating){
      const s=String(d.datum_eerste_toelating); if(/^\d{8}$/.test(s)) dt=new Date(+s.substr(0,4),+s.substr(4,2)-1,+s.substr(6,2));
    }
    switchTab('manual');
    const merkEl=document.getElementById('man-merk');
    const merkNorm=((d.merk||'').toUpperCase());
    const merkOpts=[].slice.call(merkEl.options).map(o=>o.value);
    if(merkOpts.indexOf(merkNorm)>-1) merkEl.value=merkNorm;
    else merkEl.value='OVERIG';
    document.querySelectorAll('#seg-bs .seg-btn').forEach(b=>{ b.classList.toggle('active', b.dataset.val===bs); });
    if(d.catalogusprijs){ document.getElementById('man-cat').value=parseInt(d.catalogusprijs)||''; updateSlider('man'); }
    if(d.massa_rijklaar){ document.getElementById('man-massa').value=parseInt(d.massa_rijklaar)||''; }
    if(d.nettomaximumvermogen){ const kwEl=document.getElementById('man-kw'); if(kwEl) kwEl.value=Math.round(parseFloat(d.nettomaximumvermogen))||''; }
    if(dt){ setDatumProgrammatisch('man', dt); }
    if(co2){
      const isWltp=dt&&dt>=D_WLTP_VPL;
      const veld=document.getElementById(isWltp?'man-co2-wltp':'man-co2-nedc');
      if(veld) veld.value=co2;
    }
    let extraTxt='';
    if(d.bruto_bpm&&parseInt(d.bruto_bpm)>0){ extraTxt=' Volgens RDW is bij eerste Nederlandse tenaamstelling destijds <strong>€ '+parseInt(d.bruto_bpm).toLocaleString('nl-NL')+' BPM</strong> geheven (ter referentie).'; }
    window.__rdwExtra={brutoBpm:d.bruto_bpm?parseInt(d.bruto_bpm):null, datum:dt, merk:d.merk||''};
    out.style.color='rgba(0,146,70,.85)';
    out.innerHTML='<strong>'+d.merk+' '+(d.handelsbenaming||'')+'</strong> gevonden · eerste toelating '+(dt?dt.getDate()+' '+['jan','feb','mrt','apr','mei','jun','jul','aug','sep','okt','nov','dec'][dt.getMonth()]+' '+dt.getFullYear():'?')+' · catalogusprijs '+(d.catalogusprijs?'€ '+parseInt(d.catalogusprijs).toLocaleString('nl-NL'):'n.b.')+'. '+extraTxt+' Vul waar nodig CO₂/massa aan en klik <strong>Bereken BPM</strong>. Het volledige rapport (APK-historie, NAP, recalls, kosten) vindt u in onze <a href="https://kentekencheck.apexclusive.nl" target="_blank" rel="noopener">gratis Kentekencheck ↗</a>.';
    btn&&(btn.disabled=false);
  }catch(e){
    out.style.color='rgba(206,43,55,.8)';
    out.innerHTML='Dit kenteken is niet gevonden in de RDW Open Data (of geen verbinding). Controleer de invoer — bij een buitenlands kenteken werkt de snelfill niet; vul de gegevens handmatig in. Zie ook onze <a href="https://kentekencheck.apexclusive.nl" target="_blank" rel="noopener">gratis Kentekencheck ↗</a>.';
    btn&&(btn.disabled=false);
  }
}
function setDatumProgrammatisch(id, dt){
  const dEl=document.getElementById('dp-'+id+'-d');
  const mEl=document.getElementById('dp-'+id+'-m');
  const yEl=document.getElementById('dp-'+id+'-y');
  if(!dEl||!mEl||!yEl) return;
  dEl.value=dt.getDate(); mEl.value=dt.getMonth()+1; yEl.value=dt.getFullYear();
  const fn=typeof onManualDateInput==='function'?onManualDateInput:null;
  if(fn) onManualDateInput(id);
}
/* --- 2. Resultaat: deel-link, kopieer-samenvatting, print --- */
function vulResultaatActies(voertuig, uitkomst, bedrag, toelJ, mPos, bs, co2n, co2w, cat, massa, kw, merkLabel){
  const wrap=document.getElementById('result-acties');
  if(!wrap) return;
  const isAuto=currentTab==='auto';
  let samenvatting='BPM-indicatie (APEXclusive): '+voertuig+' — resterende BPM: € '+bedrag.toLocaleString('nl-NL')+
    (uitkomst.brutoLabel?' ('+uitkomst.brutoLabel+')':'')+' · leeftijd '+Math.floor(mPos/12)+' j '+(mPos%12)+' mnd';
  let qs='';
  const d=document.getElementById(isAuto?'sel-merk':'man-merk');
  if(isAuto){
    const merk=document.getElementById('sel-merk').value, mod=document.getElementById('sel-model').value, u=document.getElementById('sel-uitvoering').value;
    qs='?t=auto&m='+encodeURIComponent(merk||'')+'&mo='+encodeURIComponent(mod||'')+'&u='+encodeURIComponent(u||'');
    const merkLabelTxt=merk&&DB[merk]?DB[merk].label:'';
    const uTxt=u!==''&&DB[merk]&&DB[merk].models[mod]?DB[merk].models[mod].uitv[parseInt(u)].l:'';
    samenvatting='BPM-indicatie (APEXclusive): '+(merkLabelTxt||merkLabel||'auto')+(uTxt?' '+uTxt:'')+' — resterende BPM: € '+bedrag.toLocaleString('nl-NL')+(uitkomst.brutoLabel?' ('+uitkomst.brutoLabel+')':'');
  } else {
    qs='?t=man&merk='+encodeURIComponent(document.getElementById('man-merk').value||'')+'&bs='+(bs||'')+'&cat='+(cat||'')+'&massa='+(massa||'')+'&kw='+(kw||'');
  }
  const datum=getCalDate(isAuto?'auto':'man');
  if(datum) qs+='&dt='+datum.getFullYear()+'-'+String(datum.getMonth()+1).padStart(2,'0')+'-'+String(datum.getDate()).padStart(2,'0');
  if(co2w) qs+='&w='+co2w;
  if(co2n) qs+='&n='+co2n;
  if(!isAuto){ qs+='&cat2='; }
  const url=location.pathname+qs;
  try{ history.replaceState(null,'',qs); }catch(e){}
  wrap.innerHTML=
    '<span class="ra-lbl">Deel of bewaar deze berekening:</span>'+
    '<button class="btn gh ra-btn" type="button" onclick="kopieerTekst(\''+samenvatting.replace(/'/g,"\\'")+'\')">Kopieer samenvatting</button>'+
    '<button class="btn gh ra-btn" type="button" onclick="kopieerLink()">Kopieer link</button>'+
    '<button class="btn gh ra-btn" type="button" onclick="window.print()">Print / PDF</button>'+
    '<button class="btn gh ra-btn" type="button" onclick="delenWhatsApp(\''+samenvatting.replace(/'/g,"\\'")+'\')">Deel via WhatsApp</button>';
  window.__laatsteUrl=url;
  window.__leadInfo={voertuig:voertuig||merkLabel||'mijn auto',bedrag:fE(bedrag),toelJ:toelJ};
  if(typeof vulLeadActies==='function') vulLeadActies(window.__leadInfo);
}
function kopieerTekst(t){
  const fn=()=>{ const box=document.getElementById('result-acties'); if(box){ const s=document.createElement('span'); s.className='ra-ok'; s.textContent='Gekopieerd ✓'; box.appendChild(s); setTimeout(()=>s.remove(),2500);} };
  if(navigator.clipboard&&navigator.clipboard.writeText){ navigator.clipboard.writeText(t).then(fn,fn); }
  else { const ta=document.createElement('textarea'); ta.value=t; document.body.appendChild(ta); ta.select(); try{document.execCommand('copy');}catch(e){} ta.remove(); fn(); }
}
function kopieerLink(){
  const url=window.__laatsteUrl||location.href;
  kopieerTekst(location.origin+url);
}
function delenWhatsApp(t){
  window.open('https://wa.me/?text='+encodeURIComponent(t+' — '+location.href),'_blank');
}
/* --- 3. Maandlasten-module --- */
function renderMaandlasten(bs, massa, uitkomst){
  const host=document.getElementById('maandlasten');
  const wrap=document.getElementById('addons-wrap');
  if(!host) return;
  const kg=parseInt(massa)||0;
  if(kg<=0){ host.style.display='none'; if(wrap) wrap.style.display='none'; return; }
  if(wrap) wrap.style.display='block';
  host.style.display='block';
  const provEl=host.querySelector('.ml-prov');
  const kmEl=host.querySelector('.ml-km');
  const prov=provEl?provEl.value:'LIMBURG';
  const km=kmEl?parseInt(kmEl.value)||15000:15000;
  const wbPerKwartaal=(calcWB(kg,bs)[prov])||0;
  const wbPerMaand=wbPerKwartaal/3;
  // brandstofschatting
  let brandstofMnd=null, eenheid='';
  const co2=uitkomst&&uitkomst.co2?uitkomst.co2:(bs==='benzine'?180:(bs==='diesel'?150:0));
  if(bs==='elektrisch'){ brandstofMnd=Math.round(km/100*20*BRANDSTOF_PRIJZEN_2026.elektrisch/12); eenheid='≈ 20 kWh/100 km · € 0,30/kWh'; }
  else if(bs==='hybride'){ const l=co2/BRANDSTOF_VERBRUIK.benzine; brandstofMnd=Math.round(km/100*l*BRANDSTOF_PRIJZEN_2026.benzine/12); eenheid='o.b.v. gewogen CO₂ ('+co2+' g/km)'; }
  else { const l=co2/BRANDSTOF_VERBRUIK[bs==='diesel'?'diesel':'benzine']; brandstofMnd=Math.round(km/100*l*BRANDSTOF_PRIJZEN_2026[bs==='diesel'?'diesel':'benzine']/12); eenheid='o.b.v. CO₂ '+co2+' g/km'; }
  const totaalMnd=Math.round(wbPerMaand+(brandstofMnd||0));
  host.querySelector('.ml-wb').textContent='€ '+(wbPerKwartaal).toLocaleString('nl-NL')+' p.kwartaal';
  host.querySelector('.ml-wb-m').textContent='≈ € '+Math.round(wbPerMaand).toLocaleString('nl-NL')+'/mnd';
  host.querySelector('.ml-bs').textContent=brandstofMnd===null?'—':'≈ € '+brandstofMnd.toLocaleString('nl-NL')+'/mnd';
  host.querySelector('.ml-bs-sub').textContent=eenheid+' · brandstofprijzen 2026 (zoals onze Kentekencheck)';
  host.querySelector('.ml-tot').textContent='≈ € '+totaalMnd.toLocaleString('nl-NL')+'/mnd';
}
/* --- 4. FAQ toggle --- */
function faqToggle(btn){
  const item=btn.parentElement;
  const open=item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(i=>i.classList.remove('open'));
  if(!open) item.classList.add('open');
}
/* --- 5b. Recente berekeningen (lokaal in browser, à la 'Mijn garage' in Kentekencheck) --- */
function escHtml(t){return String(t==null?'':t).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');}
function histOphalen(){ try{ return JSON.parse(localStorage.getItem('bpmHist')||'[]'); }catch(e){ return []; } }
function bewaarBerekening(url, titel, bedrag, sub){
  try{
    if(!url) return;
    let arr=histOphalen();
    arr=arr.filter(e=>e.url!==url);
    arr.unshift({url:url,titel:String(titel||'BPM-berekening'),bedrag:String(bedrag||''),sub:String(sub||''),ts:Date.now()});
    arr=arr.slice(0,6);
    localStorage.setItem('bpmHist',JSON.stringify(arr));
    renderHistorie();
  }catch(e){}
}
function renderHistorie(){
  const wrap=document.getElementById('recent-wrap');
  if(!wrap) return;
  const arr=histOphalen();
  if(!arr.length){ wrap.style.display='none'; wrap.innerHTML=''; return; }
  wrap.style.display='block';
  wrap.innerHTML='<div class="section-lbl">Recente berekeningen — lokaal bewaard op dit apparaat</div><div class="hist-list">'+
    arr.map((e,i)=>{
      const d=new Date(e.ts);
      const datum=d.getDate()+' '+['jan','feb','mrt','apr','mei','jun','jul','aug','sep','okt','nov','dec'][d.getMonth()]+' '+d.getFullYear();
      return '<div class="hist-row"><button class="hist-load" type="button" onclick="laadHist('+i+')" title="Herberekenen">'+
        '<span class="hist-t">'+escHtml(e.titel)+'</span><span class="hist-b">'+escHtml(e.bedrag)+'</span>'+
        '<span class="hist-sub">'+escHtml(e.sub)+' · '+datum+'</span></button>'+
        '<button class="hist-del" type="button" onclick="verwijderHist('+i+')" title="Verwijder uit lijst" aria-label="Verwijderen">×</button></div>';
    }).join('')+
    '</div><button class="btn gh hist-clear" type="button" onclick="histLeeg()">Alles wissen</button>';
}
function laadHist(i){
  const arr=histOphalen();
  if(!arr[i]) return;
  const u=String(arr[i].url||''); const q=u.indexOf('?')>-1?u.slice(u.indexOf('?')):'';
  if(q){ location.search=q; } // pagina herlaadt → laadVanUrl() vult de tool opnieuw
}
function verwijderHist(i){
  try{ const arr=histOphalen(); arr.splice(i,1); localStorage.setItem('bpmHist',JSON.stringify(arr)); renderHistorie(); }catch(e){}
}
function histLeeg(){
  try{ localStorage.removeItem('bpmHist'); renderHistorie(); }catch(e){}
}

/* --- 5. URL-parameter loader: resultaat delen / terugkeren --- */
function laadVanUrl(){
  try{
    const p=new URLSearchParams(location.search);
    const t=p.get('t');
    if(!p.get('dt')&&!p.get('m')) return;
    const dtRaw=p.get('dt');
    let dt=null;
    if(dtRaw){ const parts=dtRaw.split('-').map(Number); if(parts.length===3) dt=new Date(parts[0],parts[1]-1,parts[2]); }
    if(t==='auto'){
      const merk=p.get('m'), mod=p.get('mo'), u=p.get('u');
      if(merk&&DB[merk]){
        const merkSel=document.getElementById('sel-merk');
        merkSel.value=merk; onMerkChange();
        if(mod&&DB[merk].models[mod]){ const modSel=document.getElementById('sel-model'); modSel.value=mod; onModelChange(); }
        if(u!==''&&DB[merk].models[mod]&&DB[merk].models[mod].uitv[parseInt(u)]){
          const uSel=document.getElementById('sel-uitvoering'); uSel.value=u; onUitvoeringChange();
        }
      }
    } else if(t==='man'){
      switchTab('manual');
      const merk=p.get('merk'); if(merk){ const el=document.getElementById('man-merk'); const opts=[].slice.call(el.options).map(o=>o.value); if(opts.indexOf(merk.toUpperCase())>-1) el.value=merk.toUpperCase(); }
      const bs=p.get('bs'); if(bs){ document.querySelectorAll('#seg-bs .seg-btn').forEach(b=>b.classList.toggle('active',b.dataset.val===bs)); }
      const cat=p.get('cat'); if(cat){ const el=document.getElementById('man-cat'); el.value=parseInt(cat)||''; updateSlider('man'); }
      const massa=p.get('massa'); if(massa) document.getElementById('man-massa').value=parseInt(massa)||'';
      const kw=p.get('kw'); const kwEl=document.getElementById('man-kw'); if(kw&&kwEl) kwEl.value=parseInt(kw)||'';
    }
    if(dt){
      const panel=(t==='man')?'man':'auto';
      setDatumProgrammatisch(panel, dt);
    }
    const w=p.get('w'), n=p.get('n');
    const panel=(t==='man')?'man':'auto';
    if(w){ const el=document.getElementById(panel+'-co2-wltp'); if(el) el.value=parseInt(w)||''; }
    if(n){ const el=document.getElementById(panel+'-co2-nedc'); if(el) el.value=parseInt(n)||''; }
    setTimeout(()=>doCalc(),350);
  }catch(e){}
}
/* Kenteken-extractie uit geplakte tekst (zelfde truc als onze Kentekencheck) */
function extractKentekenTekst(txt){
  const t=String(txt||'').toUpperCase();
  const tokens=t.split(/[^A-Z0-9]+/).filter(x=>x.length>0);
  const kandidaten=[];
  const push=c=>{ if(c.length===6&&!kandidaten.includes(c)) kandidaten.push(c); };
  // losse 6-reeks
  tokens.forEach(x=>{ if(x.length===6) push(x); });
  // combinatie van drie alfanumerieke brokken (2-3-1 / 3-2-1 / 2-2-2 / 1-3-2 enz.)
  for(let i=0;i<=tokens.length-3;i++){
    const a=tokens[i],b=tokens[i+1],c=tokens[i+2];
    if(a.length<=4&&b.length<=4&&c.length<=4&&(a.length+b.length+c.length)===6) push(a+b+c);
  }
  const ok=s=>/[0-9]/.test(s)&&/[A-Z]/.test(s); // NL-kentekens bevatten cijfers én letters
  return kandidaten.find(ok)||kandidaten[0]||null;
}function plakKentekenIn(e){
  const inp=document.getElementById('rdw-kent');
  if(!inp) return;
  const tekst=(e.clipboardData&&e.clipboardData.getData?e.clipboardData.getData('text'):'')||'';
  const k=extractKentekenTekst(tekst);
  if(k&&k.length===6){
    e.preventDefault();
    inp.value=k;
    rdwZoek();
  }
}
/* Officiële BPM-tarieventabel (2026) weergeven — één bron van waarheid: WLTP_TABEL */
function renderTarievenRef(){
  const host=document.getElementById('kn-tarieven-body');
  if(!host||typeof WLTP_TABEL==='undefined') return;
  const j=TARIEFJAAR;
  const rows=(WLTP_TABEL[j]&&WLTP_TABEL[j].rows)||null;
  if(!rows) return;
  let html='<table class="wb-table ken-tab"><thead><tr><th>CO₂-uitstoot (g/km)</th><th>Basisbedrag</th><th>Per gram boven</th></tr></thead><tbody>';
  const grenzen=[['0','77'],['77','100'],['100','139'],['139','155'],['155','∞']];
  for(let i=0;i<rows.length;i++){
    const r=rows[i];
    const tot=Math.min(r[0]===Infinity?999999:r[0],999999);
    const lbl=(i===rows.length-1)?('> '+grenzen[i-1][1]):(grenzen[i][0]+' – '+grenzen[i][1]);
    html+='<tr><td>'+lbl+' g/km</td><td>€ '+r[1].toLocaleString('nl-NL')+'</td><td>€ '+r[2]+'</td></tr>';
  }
  html+='</tbody></table>';
  const d=(DIESELTOESLAG&&DIESELTOESLAG.wltp&&DIESELTOESLAG.wltp[j])?DIESELTOESLAG.wltp[j]:null;
  let extra='';
  if(d) extra+='<p class="ken-noot">Dieseltoeslag '+j+': € '+d.bedrag.toLocaleString('nl-NL')+' per gram boven '+d.drempel+' g/km. Emissievrij (EV): alleen de vaste voet van € '+(EV_VASTE_VOET&&EV_VASTE_VOET[j]?EV_VASTE_VOET[j]:'—')+'. Aflezen: kies de rij van uw CO₂-waarde, trek de ondergrens uit kolom 1 af, vermenigvuldig met kolom 4 en tel kolom 3 erbij op (voorbeeld Belastingdienst: 130 g/km → (130−100)×€181+€2.727 = € 8.157).</p>';
  html+=extra+'<p class="ken-noot">Bron: <a href="https://www.belastingdienst.nl/wps/wcm/connect/nl/bpm/content/personenauto-bpm-tarief-berekenen" target="_blank" rel="noopener">Belastingdienst — Bpm berekenen voor een personenauto ↗</a> · <a href="https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/themaoverstijgend/brochures_en_publicaties/bpm-tarieven" target="_blank" rel="noopener">alle BPM-tarieven vanaf 1993 ↗</a></p>';
  host.innerHTML=html;
}

/* RDW-bar init + FAQ delegatie + maandlasten events */
document.addEventListener('DOMContentLoaded',function(){
  const rdwBtn=document.getElementById('rdw-btn');
  if(rdwBtn) rdwBtn.addEventListener('click',rdwZoek);
  const rdwInp=document.getElementById('rdw-kent');
  if(rdwInp){
    rdwInp.addEventListener('keydown',function(e){ if(e.key==='Enter'){ e.preventDefault(); rdwZoek(); } });
    rdwInp.addEventListener('paste',plakKentekenIn);
  }
  renderTarievenRef();
  const mlProv=document.querySelector('.ml-prov');
  const mlKm=document.querySelector('.ml-km');
  if(mlProv) mlProv.addEventListener('change',function(){ const bs=(currentTab==='auto')?(window.__lastBs||'benzine'):getSegVal('seg-bs'); const massa=document.getElementById((currentTab==='auto'?'auto':'man')+'-massa').value; renderMaandlasten(bs,massa,window.__lastUitkomst||{}); });
  if(mlKm) mlKm.addEventListener('input',function(){ const bs=(currentTab==='auto')?(window.__lastBs||'benzine'):getSegVal('seg-bs'); const massa=document.getElementById((currentTab==='auto'?'auto':'man')+'-massa').value; renderMaandlasten(bs,massa,window.__lastUitkomst||{}); });
  renderHistorie();
});
