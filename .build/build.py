#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Herbouw index.html uit de originele HEAD-versie + .build/fragmenten.
Gebruik: python3 .build/build.py   (vanuit repo-root; vereist git HEAD als bron)"""
import re, subprocess, os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
B = os.path.join(ROOT, '.build')
OUT = os.path.join(ROOT, 'index.html')

# 1) origineel uit git
orig = subprocess.check_output(['git', 'show', 'HEAD:index.html'], cwd=ROOT, text=True)
h = orig

def once(old, new, tag):
    global h
    n = h.count(old)
    assert n == 1, f'anchor {tag}: {n} occurrences'
    h = h.replace(old, new, 1)

# 2) head: title/description/og
once('<title>BPM Calculator — APEXclusive | Bereken resterende BPM bij import</title>',
     '<title>BPM Calculator 2026 — resterende BPM bij import berekenen | APEXclusive</title>', 'title')
once('content="Bereken direct de resterende BPM bij import van uw voertuig vanuit Europa. NEDC én WLTP berekening. Gratis, direct, zonder registratie."',
     'content="Bereken in 30 seconden de resterende BPM bij auto-import (2026). Officiële Belastingdienst-tarieven, NEDC/WLTP, afschrijving per maand + wegenbelasting per provincie. Gratis."', 'meta')
once('content="BPM Calculator — APEXclusive"', 'content="BPM Calculator 2026 — resterende BPM bij import | APEXclusive"', 'og-title')
once('content="Bereken direct de resterende BPM bij import van uw voertuig uit Europa."',
     'content="Bereken de resterende BPM bij auto-import: officiële tarieven 2026, NEDC/WLTP-bepaling, afschrijving en wegenbelasting. Gratis, zonder registratie."', 'og-desc')


# 2b) header: WhatsApp-pil
_hdr_old = '<a href="https://apexclusive.nl" class="back-btn">\n    <svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>\n    Terug naar website\n  </a>\n</header>'
_hdr_new = '<a href="https://apexclusive.nl" class="back-btn">\n    <svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>\n    <span class="hc-full">Terug naar website</span>\n  </a>\n  <a class="hdr-cta" href="https://wa.me/31624735939?text=Beste%20Martijn%2C%20ik%20heb%20een%20vraag%20over%20de%20BPM-calculator%20of%20BPM%20bij%20import." target="_blank" rel="noopener"><span class="hc-full">Vraag? </span>WhatsApp</a>\n</header>'
once(_hdr_old, _hdr_new, 'header-wa')

# 3) FAQPage-schema na WebApplication-schema
i = h.find('</script>', h.find('application/ld+json'))
faq = '<script type="application/ld+json">' + open(os.path.join(B, 'html_schema_faq.txt'), encoding='utf-8').read() + '</script>\n'
h = h[:i + len('</script>')] + '\n' + faq + h[i + len('</script>'):]

# 4) extra CSS voor </head>
css = open(os.path.join(B, 'css_extra.txt'), encoding='utf-8').read()
once('</head>', css + '\n</head>', 'head-end')

# 5) RDW-bar + calc-fout na wrap-open
rdw = open(os.path.join(B, 'html_top.txt'), encoding='utf-8').read()
once('<div class="wrap">\n  <div class="method-tabs rv">', '<div class="wrap">\n' + rdw + '\n  <div class="method-tabs rv">', 'wrap-open')

# 5b) hero: neutral note + insight chips (zelfde hero-points-component als zuster-tools)
hero_note = '<div class="wltp-hero-note">⚡ Na 1 juli 2020 altijd WLTP · Vóór sept. 2018 altijd NEDC · Tussenperiode: beide mogelijk</div>'
hero_new = hero_note + '\n      <div class="hero-points"><span>100% gratis · geen account</span><span>Officiële Belastingdienst-tarieven</span><span>RDW Open Data · kenteken-snelfill</span><span>NEDC &amp; WLTP · twee berekeningen</span><span>Wegenbelasting per provincie</span></div>'
once(hero_note, hero_new, 'hero-points')

# 6) uitkomst-noot + result-acties voor co2-info
ra = open(os.path.join(B, 'html_result.txt'), encoding='utf-8').read()
once('</div>\n    <div class="co2-info" id="co2-info">', '</div>\n' + ra + '    <div class="co2-info" id="co2-info">', 'co2-info')

# 7) addons (maandlasten) voor TAXATIE BOX
add = open(os.path.join(B, 'html_addons.txt'), encoding='utf-8').read()
once('\n    <!-- TAXATIE BOX -->', '\n' + add + '\n    <!-- TAXATIE BOX -->', 'taxatie')

# 8) FAQ + kenniscentrum + aangifte-CTA voor wrap-sluiting
faqhtml = open(os.path.join(B, 'html_faq.txt'), encoding='utf-8').read()
kennis = open(os.path.join(B, 'html_kennis.txt'), encoding='utf-8').read()
aangifte = open(os.path.join(B, 'html_aangifte.txt'), encoding='utf-8').read()
overlays = open(os.path.join(B, 'html_overlays.txt'), encoding='utf-8').read()
terug = open(os.path.join(B, 'html_terug.txt'), encoding='utf-8').read()
once('\n</div>\n\n<footer>', '\n' + faqhtml + '\n' + kennis + '\n' + terug + '\n' + aangifte + '\n' + overlays + '\n</div>\n\n<footer>', 'footer')

# 8b) footer: kolom 'Instrumenten' toevoegen (zelfde als zuster-tools)
footer_old = '<div><p class="fh">Juridisch</p><ul class="fl"><li><a href="https://apexclusive.nl/algemenevoorwaarden.html">Algemene voorwaarden</a></li></ul></div>'
footer_new = ('<div><p class="fh">Instrumenten</p><ul class="fl">'
              '<li><a href="https://kentekencheck.apexclusive.nl" target="_blank" rel="noopener">Kentekencheck ↗</a></li>'
              '<li><a href="https://vergelijk.apexclusive.nl" target="_blank" rel="noopener">Auto&rsquo;s vergelijken ↗</a></li>'
              '<li><a href="https://carrapport.apexclusive.nl" target="_blank" rel="noopener">Advertentie Analyse ↗</a></li>'
              '<li><a href="https://apexclusive.nl/aankoopbegeleiding.html" target="_blank" rel="noopener">Aankoopbegeleiding ↗</a></li>'
              '</ul></div>'
              '<div><p class="fh">Juridisch</p><ul class="fl"><li><a href="https://apexclusive.nl/algemenevoorwaarden.html">Algemene voorwaarden</a></li></ul></div>')
once(footer_old, footer_new, 'footer-instrumenten')

# 9) JS: orig script minus doCalc/renderCo2Fields, plus nieuwe modules
s = open(os.path.join(B, 'orig_script.js'), encoding='utf-8').read()
i_dc = s.find('function doCalc'); j_dc = s.find('function resetAll')
assert 0 < i_dc < j_dc
body = s[:i_dc] + s[j_dc:]
i_rc = body.find('function renderCo2Fields'); j_rc = body.find('function getCo2Value')
assert 0 < i_rc < j_rc
body = body[:i_rc] + body[j_rc:]
parts = [body] + [open(os.path.join(B, f), encoding='utf-8').read()
                  for f in ['core.js', 'wb.js', 'features.js', 'monet.js', 'docalc.js', 'renderco2.js']]
merged = '\n\n\n/* ══════════════════════════════════════════════════\n   APEXclusive BPM 2026 — nieuwe rekenkern & uitbreidingen (sept. 2026)\n══════════════════════════════════════════════════ */\n\n' + '\n'.join(parts)
open(os.path.join(B, 'merged.js'), 'w', encoding='utf-8').write(merged)

i0 = h.find('<script>', 60000); i1 = h.find('</script>', i0)
assert 0 < i0 < i1
h = h[:i0] + '<script>\n' + merged + '\n</script>' + h[i1 + len('</script>'):]

open(OUT, 'w', encoding='utf-8').write(h)
print('index.html rebuilt:', len(h), 'chars (orig', len(orig), ')')
