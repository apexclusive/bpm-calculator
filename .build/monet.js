/* ══════════════════════════════════════════════════
   MONETISATIE & LEADS — contextuele CTA's, sticky-balk, exit-intent, voorbeeld
══════════════════════════════════════════════════ */
const APEX_WA_NR='31624735939';
function waLink(txt){ return 'https://wa.me/'+APEX_WA_NR+'?text='+encodeURIComponent(txt); }
function mailLink(subj,body){ return 'mailto:info@apexclusive.nl?subject='+encodeURIComponent(subj)+'&body='+encodeURIComponent(body); }

function buildLeadTeksten(info){
  const v=info&&info.voertuig?info.voertuig:'mijn auto';
  const bedrag=info&&info.bedrag?info.bedrag:'';
  const nul=(bedrag==='€ 0');
  const toel=info&&info.toelJ?' (eerste toelating '+info.toelJ+')':'';
  let wa, subj, mail;
  if(nul){
    wa='Beste Martijn, ik heb net de BPM-calculator gebruikt voor: '+v+toel+'. De indicatie is € 0 (nultarief/vrijstelling), maar ik heb nog een vraag over mijn situatie. Kunt u vrijblijvend meedenken?';
    subj='Vraag over BPM-import (indicatie € 0)';
    mail='Beste APEXclusive,\n\nIk heb de BPM-calculator gebruikt voor: '+v+toel+'\nDe indicatie is € 0, maar ik heb nog een vraag over mijn import-/BPM-situatie.\n\nMet vriendelijke groet,';
  } else {
    wa='Beste Martijn, ik heb net de BPM-calculator gebruikt voor: '+v+toel+'. Resterende BPM-indicatie: '+bedrag+'. Kunt u vrijblijvend checken of een erkende koerslijst of een taxatierapport lager uitpakt?';
    subj='Offerte-aanvraag BPM-afhandeling / taxatie';
    mail='Beste APEXclusive,\n\nIk heb de BPM-calculator gebruikt voor: '+v+toel+'\nResterende BPM-indicatie: '+bedrag+'\n\nIk wil graag een vrijblijvende offerte voor het laten doorrekenen en indienen van de BPM-aangifte (koerslijst/taxatie).\n\nMet vriendelijke groet,';
  }
  return {wa:wa,mailSubj:subj,mail:mail, nul:nul};
}
function vulLeadActies(info){
  const row=document.getElementById('lead-cta-row');
  if(!row) return;
  const t=buildLeadTeksten(info);
  row.style.display='block';
  row.innerHTML=
    '<div class="lead-lbl">'+(t.nul?'Hulp nodig bij uw situatie?':'Direct laten regelen?')+' <span>Vrijblijvend · reactie binnen 24 uur · RDW-erkende partners</span></div>'+
    '<div class="lead-btns">'+
      '<a class="btn lead-wa" href="'+waLink(t.wa)+'" target="_blank" rel="noopener"><span>'+(t.nul?'Gratis advies via WhatsApp':'Gratis check via WhatsApp')+'</span></a>'+
      '<a class="btn gh lead-mail" href="'+mailLink(t.mailSubj,t.mail)+'"><span>Offerte per e-mail</span></a>'+
      '<a class="btn gh lead-tel" href="tel:+31624735939"><span>Bel +31 6 24 73 59 39</span></a>'+
    '</div>';
  // sticky-balk bijwerken
  const sticky=document.getElementById('sticky-cta');
  if(sticky){
    const waEl=document.getElementById('sc-wa');
    if(waEl) waEl.setAttribute('href',waLink(t.wa));
    document.getElementById('sc-val').textContent=info&&info.bedrag?info.bedrag:'—';
    const scWaBtn=sticky.querySelector('.sc-wa');
    if(scWaBtn) scWaBtn.textContent=t.nul?'Vraag het ons — gratis':'Gratis check: kan het lager?';
    let slt=''; try{ slt=sessionStorage.getItem('bpmScClosed')||''; }catch(e){}
    if(!slt){ sticky.style.display='flex'; }
  }
}
function sluitSticky(){
  const s=document.getElementById('sticky-cta');
  if(s) s.style.display='none';
  try{ sessionStorage.setItem('bpmScClosed','1'); }catch(e){}
}
function stickyScrollHide(){
  const s=document.getElementById('sticky-cta');
  if(!s||s.style.display==='none') return;
  const ac=document.getElementById('aangifte-cta');
  if(ac&&ac.getBoundingClientRect){
    const r=ac.getBoundingClientRect();
    if(r.top>=0&&r.top<(window.innerHeight||900)) s.style.display='none';
  }
}
function exitModal(open){
  const m=document.getElementById('exit-modal');
  if(!m) return;
  if(open){
    m.style.display='flex';
    try{ sessionStorage.setItem('bpmExitShown','1'); }catch(e){}
    const info=window.__leadInfo||{};
    const t=buildLeadTeksten(info);
    const w=document.getElementById('exit-wa'); if(w) w.setAttribute('href',waLink(t.wa));
    const ma=document.getElementById('exit-mail'); if(ma) ma.setAttribute('href',mailLink(t.mailSubj,t.mail));
    document.body.style.overflow='hidden';
  } else {
    m.style.display='none';
    document.body.style.overflow='';
  }
}
function voorbeeldBerekening(){
  const inp=document.getElementById('rdw-kent');
  if(inp){ inp.value='NH713T'; }
  rdwZoek();
}
/* Conversie-/analytics-events (GA4/GTM-ready: stuurt alleen als window.dataLayer bestaat) */
function track(ev, params){
  try{
    if(window.dataLayer&&window.dataLayer.push){ window.dataLayer.push(Object.assign({event:ev},params||{})); }
  }catch(e){}
}
/* init: exit-intent, '/' sneltoets, sticky scroll-verberg */
document.addEventListener('DOMContentLoaded',function(){
  // klikken op lead-kanalen meten (WhatsApp/mail/bel + exit/sticky) — werkt straks ook met gtag
  document.addEventListener('click',function(e){
    const a=e.target&&e.target.closest?e.target.closest('a'):null;
    if(!a) return;
    const h=a.getAttribute('href')||'';
    if(h.indexOf('wa.me')>-1) track('bpm_lead',{kanaal:'whatsapp'});
    else if(h.indexOf('mailto:')===0) track('bpm_lead',{kanaal:'mail'});
    else if(h.indexOf('tel:')===0) track('bpm_lead',{kanaal:'tel'});
    else if(h.indexOf('kentekencheck.apexclusive')>-1) track('bpm_outbound',{naar:'kentekencheck'});
    else if(h.indexOf('vergelijk.apexclusive')>-1) track('bpm_outbound',{naar:'vergelijk'});
    else if(h.indexOf('belastingdienst.nl')>-1) track('bpm_outbound',{naar:'belastingdienst'});
  });
  const esc=function(e){ if(e.key==='Escape') exitModal(false); };
  document.addEventListener('keydown',esc);
  document.addEventListener('mouseout',function(e){
    if(!e.relatedTarget && e.clientY<=0){
      let done=''; try{ done=sessionStorage.getItem('bpmExitShown')||''; }catch(err){}
      if(!done){ exitModal(true); track('bpm_exit_intent',{}); }
    }
  });
  document.addEventListener('keydown',function(e){
    const t=e.target&&e.target.tagName?e.target.tagName.toLowerCase():'';
    if(e.key==='/'&&t!=='input'&&t!=='textarea'&&t!=='select'){
      e.preventDefault();
      const k=document.getElementById('rdw-kent');
      if(k) k.focus();
    }
  });
  window.addEventListener('scroll',function(){ window.requestAnimationFrame?requestAnimationFrame(stickyScrollHide):stickyScrollHide(); },{passive:true});
  const vbtn=document.getElementById('voorbeeld-btn');
  if(vbtn) vbtn.addEventListener('click',voorbeeldBerekening);
});
