/* APEXclusive BPM Calculator — service worker.
   App-shell (HTML/CSS/iconen) offline beschikbaar; RDW-data (opendata.rdw.nl) en
   externe bronnen worden nooit gecachet. Alleen eigen oorsprong. */
const VERSIE='bpm-v1.0.0';
const APP_SHELL=['./','./index.html','./apex-tool-theme.css','./manifest.webmanifest','./icon.svg','./icon-192.png','./icon-512.png','./icon-maskable-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(VERSIE).then(c=>c.addAll(APP_SHELL).catch(()=>{})).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==VERSIE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
  const req=e.request; if(req.method!=='GET')return;
  const url=new URL(req.url); if(url.origin!==self.location.origin)return;
  if(req.mode==='navigate'){
    e.respondWith(fetch(req).then(res=>{const k=res.clone();caches.open(VERSIE).then(c=>c.put('./index.html',k)).catch(()=>{});return res;}).catch(()=>caches.match('./index.html').then(c=>c||caches.match('./'))));
    return;
  }
  e.respondWith(caches.match(req).then(hit=>hit||fetch(req).then(res=>{if(res&&res.status===200){const k=res.clone();caches.open(VERSIE).then(c=>c.put(req,k)).catch(()=>{});}return res;}).catch(()=>caches.match('./index.html'))));
});
