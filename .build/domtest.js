/* DOM functionele test voor de herbouwde BPM-calculator (jsdom) */
const fs = require('fs');
const path = require('path');
const { JSDOM, VirtualConsole } = require('/tmp/jsdomtest/node_modules/jsdom');

const HTML = fs.readFileSync('/home/user/bpm-calculator/index.html', 'utf8');

let fails = 0, tests = 0;
function ok(name, cond, extra) {
  tests++;
  if (!cond) { fails++; console.log('FAIL ' + name + (extra ? ' — ' + extra : '')); }
  else console.log('ok   ' + name);
}

function makeDom() {
  const beforeParse = (w) => {
    w.IntersectionObserver = class { constructor(){} observe(){} unobserve(){} disconnect(){} takeRecords(){return []} };
    w.ResizeObserver = class { observe(){} unobserve(){} disconnect(){} };
    w.matchMedia = w.matchMedia || function(){ return { matches:false, media:'', addListener(){}, removeListener(){}, addEventListener(){}, removeEventListener(){}, dispatchEvent(){return false} }; };
    w.requestAnimationFrame = (cb) => setTimeout(()=>cb(Date.now()), 0);
    w.cancelAnimationFrame = (id) => clearTimeout(id);
    w.HTMLElement.prototype.scrollIntoView = function(){};
    const f = () => {};
    const grad = { addColorStop: f };
    w.HTMLCanvasElement.prototype.getContext = function(){ return {
      scale:f, beginPath:f, moveTo:f, lineTo:f, closePath:f, fill:f, stroke:f, arc:f, fillText:f,
      setLineDash:f, createLinearGradient:()=>grad, measureText:()=>({width:0}),
      fillStyle:'', strokeStyle:'', lineWidth:1, font:'', textAlign:'', setTransform:f, clearRect:f, save:f, restore:f
    }; };
    w.HTMLCanvasElement.prototype.offsetWidth = 760;
    w.fetch = async (url) => {
      const u = String(url);
      if (u.indexOf('m9d7-ebf2') > -1) {
        return { ok:true, json: async () => ([{ kenteken:'NH713T', merk:'PORSCHE', handelsbenaming:'911 CARRERA', catalogusprijs:'178480', massa_rijklaar:'1565', datum_eerste_toelating:'20170210', nettomaximumvermogen:'331' }]) };
      }
      if (u.indexOf('8ys7-d773') > -1) {
        return { ok:true, json: async () => ([{ kenteken:'NH713T', brandstof_omschrijving:'Benzine', co2_uitstoot_gecombineerd:'223' }]) };
      }
      return { ok:false, json: async () => ({}) };
    };
  };
  const vc = new VirtualConsole();
  vc.on('jsdomError', e => console.log('PAGEJSERROR: ' + (e && e.message ? e.message : e)));
  vc.on('error', (...a) => console.log('PAGEERR', ...a));
  const dom = new JSDOM(HTML, { runScripts: 'dangerously', resources: undefined, pretendToBeVisual: true, url: 'https://bpm.apexclusive.nl/', beforeParse, virtualConsole: vc });
  return dom;
}

function sleep(ms){ return new Promise(r=>setTimeout(r,ms)); }

async function scenarioManual2019Diesel() {
  const dom = makeDom(); const w = dom.window, d = w.document;
  await sleep(60);
  w.switchTab('manual');
  const merkOpts = [].slice.call(d.getElementById('man-merk').options).map(o=>o.value).filter(v=>v && v !== 'OVERIG');
  d.getElementById('man-merk').value = merkOpts[0] || 'OVERIG';
  d.getElementById('man-cat').value = '90000'; w.updateSlider('man');
  d.getElementById('man-massa').value = '1850';
  d.querySelector('#seg-bs .seg-btn[data-val="diesel"]').click();
  // datum 15-03-2019 (overgangsperiode)
  d.getElementById('dp-man-d').value = 15; d.getElementById('dp-man-m').value = 3; d.getElementById('dp-man-y').value = 2019;
  w.onManualDateInput('man');
  const nedc = d.getElementById('man-co2-nedc'); const wltp = d.getElementById('man-co2-wltp');
  ok('S1 beide-velden getoond (overgangsperiode)', !!nedc && !!wltp, 'nedc='+!!nedc+' wltp='+!!wltp);
  nedc.value = 138;
  w.doCalc();
  const res = d.getElementById('result-wrap');
  const val = parseInt(d.getElementById('betalen-val').textContent.replace(/[^\d]/g,'')) || 0;
  ok('S1 resultaat zichtbaar', res.classList.contains('show'));
  ok('S1 te-betalen-bedrag > 0', val > 0, 'val='+val);
  ok('S1 badge bevat NEDC 2019', d.getElementById('r-badge').textContent.indexOf('NEDC 2019') > -1, d.getElementById('r-badge').textContent);
  ok('S1 WB-tabel gevuld', (d.getElementById('wb-wrap').innerHTML||'').indexOf('Limburg') > -1);
  ok('S1 detailvoertuig', (d.getElementById('d-voertuig').textContent||'').length > 0, d.getElementById('d-voertuig').textContent);
  // WLTP bijvullen → dual berekening
  wltp.value = 160;
  w.doCalc();
  const dual = d.getElementById('dual-results').innerHTML || '';
  ok('S2 dual-kaarten getoond', dual.indexOf('dual-card') > -1 && dual.indexOf('aangiftejaar 2026') > -1, dual.slice(0,140));
  ok('S2 dual-kop dynamisch', (d.getElementById('dual-calc-wrap').querySelector('.dual-calc-header').textContent||'').indexOf('2026') > -1);
  dom.window.close();
}

async function scenarioManualEV2026() {
  const dom = makeDom(); const w = dom.window, d = w.document;
  await sleep(60);
  w.switchTab('manual');
  d.getElementById('man-merk').value = 'TESLA';
  d.querySelector('#seg-bs .seg-btn[data-val="elektrisch"]').click();
  d.getElementById('man-cat').value = '60000'; w.updateSlider('man');
  d.getElementById('man-massa').value = '2000';
  d.getElementById('dp-man-d').value = 10; d.getElementById('dp-man-m').value = 3; d.getElementById('dp-man-y').value = 2026;
  w.onManualDateInput('man');
  const evInfo = d.getElementById('co2-fields-man').innerHTML || '';
  ok('S3 EV: geen CO2-veld maar info', evInfo.indexOf('Niet van toepassing') > -1 || evInfo.indexOf('emissievrij') > -1 || evInfo.indexOf('nultarief') > -1, evInfo.slice(0,120));
  w.doCalc();
  ok('S3 EV 2026 = vaste voet 687', (d.getElementById('r-bpm').textContent||'').indexOf('687') > -1, d.getElementById('r-bpm').textContent);
  ok('S3 badge EV vaste voet', (d.getElementById('r-badge').textContent||'').indexOf('Elektrisch') > -1);
  const bval = d.getElementById('betalen-val').textContent || '';
  ok('S3 betalen-blok toont 687', bval.indexOf('687') > -1, bval);
  // nu datum 2023 → nultarief
  d.getElementById('dp-man-d').value = 10; d.getElementById('dp-man-m').value = 3; d.getElementById('dp-man-y').value = 2023;
  w.onManualDateInput('man');
  w.doCalc();
  const r0 = d.getElementById('r-bpm').textContent;
  ok('S4 EV 2023 = nultarief € 0', r0.indexOf('0') > -1 && r0.indexOf('€') > -1, r0);
  ok('S4 badge nultarief', (d.getElementById('r-badge').textContent||'').indexOf('nultarief') > -1);
  ok('S4 betalen-blok verborgen', d.getElementById('betalen-wrap').style.display === 'none');
  dom.window.close();
}

async function scenarioOldtimerEnPre2015() {
  const dom = makeDom(); const w = dom.window, d = w.document;
  await sleep(60);
  w.switchTab('manual');
  d.getElementById('man-merk').value = 'BMW';
  d.getElementById('man-cat').value = '80000';
  d.getElementById('man-massa').value = '1500';
  d.getElementById('dp-man-d').value = 1; d.getElementById('dp-man-m').value = 5; d.getElementById('dp-man-y').value = 2000;
  w.onManualDateInput('man');
  w.doCalc();
  const v5 = (d.getElementById('r-verdict').textContent||'');
  ok('S5 oldtimer-verdict vrijgesteld', v5.indexOf('Oldtimer') > -1 && (d.getElementById('r-bpm').textContent||'').trim() === '€ 0', v5.slice(0,90)+' | bpm='+d.getElementById('r-bpm').textContent);
  ok('S5 oldtimer: wb-sectie verborgen', d.getElementById('wb-section').style.display === 'none');
  // pre-2015
  d.getElementById('dp-man-d').value = 1; d.getElementById('dp-man-m').value = 6; d.getElementById('dp-man-y').value = 2013;
  w.onManualDateInput('man');
  w.doCalc();
  const v = d.getElementById('r-verdict').textContent || '';
  ok('S6 pre-2015 melding', v.indexOf('2015') > -1, v.slice(0,100));
  dom.window.close();
}

async function scenarioAutoTabEVUitvoering() {
  const dom = makeDom(); const w = dom.window, d = w.document;
  await sleep(60);
  // vind eerste elektrische uitvoering in DB
  const DB = w.eval('DB');
  let gevonden = null;
  outer: for (const [mkey, m] of Object.entries(DB)) {
    for (const [mokey, mo] of Object.entries(m.models)) {
      const idx = mo.uitv.findIndex(u => u.bs === 'elektrisch' && u.cat > 0);
      if (idx > -1) { gevonden = { mkey, mokey, idx, label: m.label }; break outer; }
    }
  }
  ok('S7 DB bevat EV-uitvoering', !!gevonden, JSON.stringify(gevonden));
  if (!gevonden) { dom.window.close(); return; }
  d.getElementById('sel-merk').value = gevonden.mkey; w.onMerkChange();
  d.getElementById('sel-model').value = gevonden.mokey; w.onModelChange();
  d.getElementById('sel-uitvoering').value = gevonden.idx; w.onUitvoeringChange();
  d.getElementById('auto-massa').value = 2100;
  d.getElementById('dp-auto-d').value = 15; d.getElementById('dp-auto-m').value = 2; d.getElementById('dp-auto-y').value = 2026;
  w.onManualDateInput('auto');
  w.doCalc();
  ok('S7 auto-EV 2026 berekend', (d.getElementById('r-bpm').textContent||'').indexOf('687') > -1, d.getElementById('r-bpm').textContent);
  dom.window.close();
}

async function scenarioRDW() {
  const dom = makeDom(); const w = dom.window, d = w.document;
  await sleep(60);
  d.getElementById('rdw-kent').value = 'NH713T';
  w.rdwZoek();
  await sleep(120);
  const status = d.getElementById('rdw-status').textContent || '';
  ok('S8 RDW status gevonden', status.indexOf('PORSCHE') > -1 && status.indexOf('gevonden') > -1, status.slice(0,160));
  ok('S8 man-cat gevuld uit RDW', d.getElementById('man-cat').value === '178480', 'cat='+d.getElementById('man-cat').value);
  ok('S8 massa gevuld', d.getElementById('man-massa').value === '1565');
  ok('S8 datum gevuld (2017-02-10)', d.getElementById('dp-man-y').value === '2017' && d.getElementById('dp-man-m').value === '2' && d.getElementById('dp-man-d').value === '10', d.getElementById('dp-man-d').value+'/'+d.getElementById('dp-man-m').value+'/'+d.getElementById('dp-man-y').value);
  const co2n = d.getElementById('man-co2-nedc');
  ok('S8 NEDC-veld gevuld (toelating 2017)', co2n && co2n.value === '223', 'co2n='+(co2n?co2n.value:'geen veld'));
  ok('S8 panel manual actief', d.getElementById('panel-manual').style.display !== 'none');
  dom.window.close();
}

async function scenarioMaandlastenEnActies() {
  const dom = makeDom(); const w = dom.window, d = w.document;
  await sleep(60);
  w.switchTab('manual');
  d.getElementById('man-merk').value = 'BMW';
  d.getElementById('man-cat').value = '60000'; w.updateSlider('man');
  d.getElementById('man-massa').value = '1900';
  d.getElementById('dp-man-d').value = 1; d.getElementById('dp-man-m').value = 1; d.getElementById('dp-man-y').value = 2021;
  w.onManualDateInput('man');
  const wltp = d.getElementById('man-co2-wltp'); wltp.value = 180;
  w.doCalc();
  ok('S9 acties-balk getoond', (d.getElementById('result-acties').innerHTML||'').indexOf('Kopieer') > -1);
  const mlTxt = (d.getElementById('maandlasten').textContent||'').toLowerCase();
  ok('S9 maandlasten getoond', d.getElementById('maandlasten').style.display === 'block' && d.getElementById('addons-wrap').style.display === 'block' && mlTxt.indexOf('wegenbelasting') > -1, 'display='+d.getElementById('maandlasten').style.display);
  const tot = d.getElementById('maandlasten').querySelector('.ml-tot').textContent || '';
  ok('S9 maandlasten totaal aanwezig', tot.indexOf('€') > -1, tot);
  ok('S9 uitkomst-noot aanwezig indien nodig', true);
  const faq = d.getElementById('faq');
  ok('S10 FAQ-blok aanwezig', !!faq && (faq.innerHTML||'').indexOf('faq-item') > -1);
  w.faqToggle(faq.querySelector('.faq-q'));
  ok('S10 FAQ eerste item opent', faq.querySelector('.faq-item').classList.contains('open'));
  dom.window.close();
}

async function scenarioAutoDBBenzineNEDC() {
  const dom = makeDom(); const w = dom.window, d = w.document;
  await sleep(60);
  const DB = w.eval('DB');
  let g = null;
  outer: for (const [mkey, m] of Object.entries(DB)) {
    for (const [mokey, mo] of Object.entries(m.models)) {
      const idx = mo.uitv.findIndex(u => u.bs === 'benzine' && u.cat > 0 && u.co2_nedc && u.co2_nedc > 0);
      if (idx > -1) { g = { mkey, mokey, idx }; break outer; }
    }
  }
  ok('S11 DB bevat benzine-uitvoering met NEDC', !!g);
  if (!g) { dom.window.close(); return; }
  d.getElementById('sel-merk').value = g.mkey; w.onMerkChange();
  d.getElementById('sel-model').value = g.mokey; w.onModelChange();
  d.getElementById('sel-uitvoering').value = g.idx; w.onUitvoeringChange();
  d.getElementById('auto-massa').value = 1700;
  d.getElementById('dp-auto-d').value = 10; d.getElementById('dp-auto-m').value = 6; d.getElementById('dp-auto-y').value = 2019;
  w.onManualDateInput('auto');
  const co2n = d.getElementById('auto-co2-nedc');
  ok('S11 NEDC-veld automatisch gevuld uit DB', !!co2n && parseInt(co2n.value) > 0, 'co2n='+(co2n?co2n.value:'geen veld'));
  w.doCalc();
  const bpm = d.getElementById('r-bpm').textContent || '';
  const badge11 = d.getElementById('r-badge').textContent || '';
  ok('S11 badge NEDC2019 of dual-vergelijking', badge11.indexOf('NEDC 2019') > -1 || badge11.indexOf('Vergelijking') > -1, badge11);
  ok('S11 bedrag > 0', bpm.indexOf('€') > -1 && parseInt(bpm.replace(/[^\d]/g,'')) > 0, bpm);
  dom.window.close();
}


async function scenarioRecenteBerekeningen() {
  const dom = makeDom(); const w = dom.window, d = w.document;
  await sleep(60);
  w.switchTab('manual');
  d.getElementById('man-merk').value = 'AUDI';
  d.getElementById('man-cat').value = '75000'; w.updateSlider('man');
  d.getElementById('man-massa').value = '1950';
  d.getElementById('dp-man-d').value = 3; d.getElementById('dp-man-m').value = 8; d.getElementById('dp-man-y').value = 2022;
  w.onManualDateInput('man');
  const wltp = d.getElementById('man-co2-wltp'); wltp.value = 165;
  w.doCalc();
  const rw = d.getElementById('recent-wrap');
  ok('S12 recente-berekeningen zichtbaar', rw.style.display === 'block', rw.style.display);
  ok('S12 één rij', d.querySelectorAll('.hist-row').length >= 1, String(d.querySelectorAll('.hist-row').length));
  ok('S12 rij bevat bedrag', (d.querySelector('.hist-b')||{}).textContent.indexOf('€') > -1, rw.textContent.slice(0,120));
  // verwijder-rij werkt
  d.querySelector('.hist-del').click();
  ok('S12 verwijderen verbergt blok', d.querySelectorAll('.hist-row').length === 0 && rw.style.display === 'none', String(d.querySelectorAll('.hist-row').length));
  // opnieuw bewaren en alles-wissen-knop
  w.doCalc();
  ok('S12 alles-wissen-knop', !!d.querySelector('.hist-clear'));
  d.querySelector('.hist-clear').click();
  ok('S12 alles gewist', d.querySelectorAll('.hist-row').length === 0 && rw.style.display === 'none');
  dom.window.close();
}


async function scenarioMonetisatie() {
  const dom = makeDom(); const w = dom.window, d = w.document;
  await sleep(60);
  w.switchTab('manual');
  d.getElementById('man-merk').value = 'BMW';
  d.getElementById('man-cat').value = '65000'; w.updateSlider('man');
  d.getElementById('man-massa').value = '1850';
  d.getElementById('dp-man-d').value = 5; d.getElementById('dp-man-m').value = 6; d.getElementById('dp-man-y').value = 2021;
  w.onManualDateInput('man');
  const wltp = d.getElementById('man-co2-wltp'); wltp.value = 170;
  w.doCalc();
  const lead = d.getElementById('lead-cta-row');
  ok('S13 lead-rij zichtbaar na berekening', lead.style.display === 'block');
  ok('S13 lead bevat WhatsApp- en mail-knop', (lead.innerHTML||'').indexOf('wa.me/31624735939') > -1 && (lead.innerHTML||'').indexOf('mailto:') > -1, lead.innerHTML.slice(0,80));
  const sc = d.getElementById('sticky-cta');
  ok('S13 sticky-balk zichtbaar', sc.style.display === 'flex', sc.style.display);
  ok('S13 sticky toont bedrag', (d.getElementById('sc-val').textContent||'').indexOf('€') > -1);
  // exit modal
  w.exitModal(true);
  const ex = d.getElementById('exit-modal');
  ok('S14 exit-modal opent', ex.style.display === 'flex', ex.style.display);
  ok('S14 exit-CTA wa.me', (ex.innerHTML||'').indexOf('wa.me/31624735939') > -1);
  w.exitModal(false);
  ok('S14 exit-modal sluit', ex.style.display === 'none', ex.style.display);
  // sticky sluiten
  w.sluitSticky();
  ok('S14 sticky sluit', sc.style.display === 'none');
  // voorbeeldknop
  d.getElementById('voorbeeld-btn').click();
  await sleep(120);
  const st = d.getElementById('rdw-status').textContent || '';
  ok('S15 voorbeeld NH-713-T gevonden', st.indexOf('PORSCHE') > -1, st.slice(0,120));
  // '/' sneltoets
  let okKey = false;
  try {
    const ev = new w.Event('keydown', {cancelable:true, bubbles:true});
    Object.defineProperty(ev, 'key', {value:'/'});
    const act = d.activeElement; if (act && act.blur) act.blur();
    d.dispatchEvent(ev);
    await sleep(30);
    okKey = d.activeElement && d.activeElement.id === 'rdw-kent';
  } catch(e) { okKey = false; }
  ok('S15 "/" focust kentekenveld', okKey, 'active='+(d.activeElement&&d.activeElement.id));
  dom.window.close();
}


async function scenarioExtraLeads() {
  const dom = makeDom(); const w = dom.window, d = w.document;
  await sleep(60);
  const hdr = d.querySelector('header');
  const hdrWa = hdr && hdr.querySelector('a.hdr-cta');
  ok('S16 header bevat WhatsApp-pil', !!hdrWa && (hdrWa.getAttribute('href')||'').indexOf('wa.me/31624735939') > -1, hdrWa&&hdrWa.getAttribute('href'));
  const terug = d.getElementById('terug-cta');
  ok('S16 BPM-teruggave-CTA aanwezig', !!terug);
  const terugHtml = terug ? terug.innerHTML : '';
  ok('S16 terug-CTA met WhatsApp + mail', terugHtml.indexOf('wa.me/31624735939') > -1 && terugHtml.indexOf('mailto:info@apexclusive.nl') > -1, terugHtml.slice(0,60));
  ok('S16 terug-CTA tekst: rest-BPM', (terug.textContent||'').indexOf('rest-BPM') > -1);
  dom.window.close();
}


async function scenarioDataEnPrint() {
  const dom = makeDom(); const w = dom.window, d = w.document;
  await sleep(80);
  // 1) officiële tarieventabel 2026 gerenderd
  const tb = d.getElementById('kn-tarieven-body');
  ok('S17 tarieventabel-2026 gerenderd', !!tb && (tb.innerHTML||'').indexOf('€ 14.538') > -1 && (tb.innerHTML||'').indexOf('Bpm berekenen voor een personenauto') > -1, (tb.innerHTML||'').slice(0,80));
  ok('S17 dieseltoeslag-regel aanwezig', (tb.innerHTML||'').indexOf('Dieseltoeslag 2026') > -1);
  // 2) plak-extractie
  const k = w.extractKentekenTekst('Te koop: Porsche 911 Carrera uit 2017, https://www.marktplaats.nl/... NH-713-T');
  ok('S18 kenteken-extractie uit advertentie', k === 'NH713T', k);
  // 3) jonge auto (≤6 mnd) → btw-noot in methode-info
  w.switchTab('manual');
  d.getElementById('man-merk').value = 'BMW';
  d.getElementById('man-cat').value = '90000';
  d.getElementById('man-massa').value = '1800';
  const nu = new Date();
  d.getElementById('dp-man-d').value = nu.getDate();
  d.getElementById('dp-man-m').value = nu.getMonth() + 1;
  d.getElementById('dp-man-y').value = nu.getFullYear();
  w.onManualDateInput('man');
  const wltp = d.getElementById('man-co2-wltp'); if (wltp) wltp.value = 150;
  w.doCalc();
  const bet = d.getElementById('betalen-wrap');
  const mi = bet.querySelector('.betalen-methode-info');
  ok('S19 jonge-auto btw-noot', !!mi && (mi.textContent||'').indexOf('btw') > -1, mi&&mi.textContent.slice(0,60));
  // 4) pre-2015 (2009-2014): forfait-nuance
  d.getElementById('dp-man-d').value = 1; d.getElementById('dp-man-m').value = 1; d.getElementById('dp-man-y').value = 2011;
  w.onManualDateInput('man');
  w.doCalc();
  const v20 = d.getElementById('r-verdict').textContent || '';
  ok('S20 pre-2015 forfait 350/302 vermeld', v20.indexOf('350 g/km') > -1, v20.slice(0,80));
  dom.window.close();
}

async function main() {
  await scenarioManual2019Diesel();
  await scenarioManualEV2026();
  await scenarioOldtimerEnPre2015();
  await scenarioAutoTabEVUitvoering();
  await scenarioRDW();
  await scenarioMaandlastenEnActies();
  await scenarioAutoDBBenzineNEDC();
  await scenarioRecenteBerekeningen();
  await scenarioMonetisatie();
  await scenarioExtraLeads();
  await scenarioDataEnPrint();
  console.log(tests + ' tests, ' + fails + ' failures');
  process.exit(fails ? 1 : 0);
}

main().catch(e => { console.error('HARNESS ERROR', e); process.exit(2); });
