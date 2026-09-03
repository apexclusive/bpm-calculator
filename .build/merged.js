


/* ══════════════════════════════════════════════════
   APEXclusive BPM 2026 — nieuwe rekenkern & uitbreidingen (sept. 2026)
══════════════════════════════════════════════════ */


/* ══════════════════════════════════════════════════
   VOERTUIGDATABASE
══════════════════════════════════════════════════ */

const DB={
  'alfa-romeo':{label:'Alfa Romeo',models:{
    'giulia':{label:'Giulia Quadrifoglio',uitv:[
      {l:'Giulia Quadrifoglio 2.9 V6 510pk',cat:114990,co2_wltp:232,co2_nedc:212,bs:'benzine',kw:375},
      {l:'Giulia GTA 2.9 V6 540pk',cat:175000,co2_wltp:232,co2_nedc:null,bs:'benzine',kw:397},
      {l:'Giulia GTAm 2.9 V6 540pk',cat:185000,co2_wltp:232,co2_nedc:null,bs:'benzine',kw:397},
    ]},
    'stelvio':{label:'Stelvio Quadrifoglio',uitv:[
      {l:'Stelvio Quadrifoglio 2.9 V6 510pk',cat:119990,co2_wltp:245,co2_nedc:224,bs:'benzine',kw:375},
      {l:'Stelvio GTA 2.9 V6 540pk',cat:185000,co2_wltp:245,co2_nedc:null,bs:'benzine',kw:397},
    ]},
    '33-stradale':{label:'33 Stradale',uitv:[
      {l:'33 Stradale V6 620pk',cat:1800000,co2_wltp:255,co2_nedc:null,bs:'benzine',kw:456},
      {l:'33 Stradale Electric 750pk',cat:1800000,co2_wltp:0,co2_nedc:null,bs:'elektrisch',kw:551},
    ]},
  }},
  'aston-martin':{label:'Aston Martin',models:{
    'db11':{label:'DB11',uitv:[
      {l:'DB11 V8 510pk',cat:198500,co2_wltp:null,co2_nedc:249,bs:'benzine',kw:375},
      {l:'DB11 V8 Volante 510pk',cat:221000,co2_wltp:null,co2_nedc:255,bs:'benzine',kw:375},
      {l:'DB11 V12 630pk',cat:242000,co2_wltp:null,co2_nedc:299,bs:'benzine',kw:463},
      {l:'DB11 AMR V12 639pk',cat:262000,co2_wltp:null,co2_nedc:299,bs:'benzine',kw:470},
    ]},
    'db12':{label:'DB12',uitv:[
      {l:'DB12 Coupé V8 671pk',cat:295000,co2_wltp:289,co2_nedc:null,bs:'benzine',kw:493},
      {l:'DB12 Volante V8 671pk',cat:328000,co2_wltp:295,co2_nedc:null,bs:'benzine',kw:493},
    ]},
    'dbs':{label:'DBS',uitv:[
      {l:'DBS 770 Ultimate V12 770pk',cat:485000,co2_wltp:335,co2_nedc:null,bs:'benzine',kw:566},
      {l:'DBS Superleggera V12 725pk',cat:368000,co2_wltp:null,co2_nedc:299,bs:'benzine',kw:533},
      {l:'DBS Superleggera Volante 725pk',cat:398000,co2_wltp:null,co2_nedc:305,bs:'benzine',kw:533},
    ]},
    'dbx':{label:'DBX',uitv:[
      {l:'DBX V8 542pk',cat:248000,co2_wltp:295,co2_nedc:270,bs:'benzine',kw:399},
      {l:'DBX707 AMG V8 707pk',cat:328000,co2_wltp:315,co2_nedc:null,bs:'benzine',kw:520},
    ]},
    'vantage':{label:'Vantage',uitv:[
      {l:'Vantage 4.0 V8 665pk',cat:248000,co2_wltp:285,co2_nedc:261,bs:'benzine',kw:489},
      {l:'Vantage Roadster 4.0 V8 665pk',cat:278000,co2_wltp:292,co2_nedc:268,bs:'benzine',kw:489},
      {l:'Vantage F1 Edition 535pk',cat:218000,co2_wltp:279,co2_nedc:null,bs:'benzine',kw:393},
    ]},
    'valkyrie':{label:'Valkyrie',uitv:[
      {l:'Valkyrie V12 Hybrid 1160pk',cat:3000000,co2_wltp:null,co2_nedc:null,bs:'hybride',kw:854},
    ]},
  }},
  audi:{label:'Audi',models:{
    'r8':{label:'R8',uitv:[
      {l:'R8 5.2 V10 Coupé RWD 570pk',cat:229850,co2_wltp:331,co2_nedc:299,bs:'benzine',kw:419},
      {l:'R8 5.2 V10 Coupé Quattro 570pk',cat:252850,co2_wltp:339,co2_nedc:306,bs:'benzine',kw:419},
      {l:'R8 5.2 V10 Spyder RWD 570pk',cat:249850,co2_wltp:338,co2_nedc:305,bs:'benzine',kw:419},
      {l:'R8 5.2 V10 Spyder Quattro 570pk',cat:272850,co2_wltp:345,co2_nedc:312,bs:'benzine',kw:419},
      {l:'R8 5.2 V10 GT RWD 620pk',cat:298000,co2_wltp:338,co2_nedc:null,bs:'benzine',kw:456},
      {l:'R8 5.2 V10 GT Spyder 620pk',cat:318000,co2_wltp:345,co2_nedc:null,bs:'benzine',kw:456},
    ]},
    'rs-e-tron':{label:'RS e-tron GT',uitv:[
      {l:'RS e-tron GT 598pk',cat:165500,co2_wltp:0,co2_nedc:null,bs:'elektrisch',kw:440},
      {l:'RS e-tron GT Performance 925pk',cat:198000,co2_wltp:0,co2_nedc:null,bs:'elektrisch',kw:680},
    ]},
    'rs3':{label:'RS3',uitv:[
      {l:'RS3 Sedan 2.5 TFSI 407pk',cat:92680,co2_wltp:216,co2_nedc:199,bs:'benzine',kw:299},
      {l:'RS3 Sportback 2.5 TFSI 407pk',cat:90680,co2_wltp:212,co2_nedc:196,bs:'benzine',kw:299},
      {l:'RS3 Performance 2.5 TFSI 407pk',cat:99680,co2_wltp:216,co2_nedc:199,bs:'benzine',kw:299},
    ]},
    'rs4':{label:'RS4 Avant',uitv:[
      {l:'RS4 Avant 2.9 TFSI 450pk',cat:148680,co2_wltp:249,co2_nedc:228,bs:'benzine',kw:331},
      {l:'RS4 Avant Carbon Black 450pk',cat:162680,co2_wltp:249,co2_nedc:null,bs:'benzine',kw:331},
      {l:'RS4 Avant Competition 450pk',cat:168680,co2_wltp:249,co2_nedc:null,bs:'benzine',kw:331},
      {l:'RS4 Avant Competition Plus 530pk',cat:188000,co2_wltp:252,co2_nedc:null,bs:'benzine',kw:390},
    ]},
    'rs5':{label:'RS5',uitv:[
      {l:'RS5 Coupé 2.9 TFSI 450pk',cat:154680,co2_wltp:238,co2_nedc:218,bs:'benzine',kw:331},
      {l:'RS5 Sportback 2.9 TFSI 450pk',cat:156680,co2_wltp:241,co2_nedc:221,bs:'benzine',kw:331},
      {l:'RS5 Coupé Competition 450pk',cat:168680,co2_wltp:238,co2_nedc:null,bs:'benzine',kw:331},
      {l:'RS5 Sportback Competition 450pk',cat:170680,co2_wltp:241,co2_nedc:null,bs:'benzine',kw:331},
      {l:'RS5 Competition Plus 530pk',cat:188000,co2_wltp:248,co2_nedc:null,bs:'benzine',kw:390},
    ]},
    'rs6':{label:'RS6 Avant',uitv:[
      {l:'RS6 Avant 4.0 TFSI 600pk',cat:228680,co2_wltp:275,co2_nedc:253,bs:'benzine',kw:441},
      {l:'RS6 Avant Carbon Black 600pk',cat:248680,co2_wltp:275,co2_nedc:null,bs:'benzine',kw:441},
      {l:'RS6 Avant Performance 4.0 TFSI 630pk',cat:258680,co2_wltp:284,co2_nedc:null,bs:'benzine',kw:463},
      {l:'RS6 Avant GT 4.0 TFSI 630pk',cat:298000,co2_wltp:287,co2_nedc:null,bs:'benzine',kw:463},
    ]},
    'rs7':{label:'RS7 Sportback',uitv:[
      {l:'RS7 Sportback 4.0 TFSI 600pk',cat:238680,co2_wltp:272,co2_nedc:249,bs:'benzine',kw:441},
      {l:'RS7 Sportback Carbon Black 600pk',cat:258680,co2_wltp:272,co2_nedc:null,bs:'benzine',kw:441},
      {l:'RS7 Sportback Performance 630pk',cat:268680,co2_wltp:281,co2_nedc:null,bs:'benzine',kw:463},
    ]},
    'rs-q3':{label:'RS Q3',uitv:[
      {l:'RS Q3 2.5 TFSI 400pk',cat:102680,co2_wltp:217,co2_nedc:202,bs:'benzine',kw:294},
      {l:'RS Q3 Sportback 2.5 TFSI 400pk',cat:106450,co2_wltp:224,co2_nedc:208,bs:'benzine',kw:294},
    ]},
    'rs-q8':{label:'RS Q8',uitv:[
      {l:'RS Q8 4.0 TFSI 600pk',cat:268680,co2_wltp:299,co2_nedc:275,bs:'benzine',kw:441},
      {l:'RS Q8 Performance 640pk',cat:298000,co2_wltp:306,co2_nedc:null,bs:'benzine',kw:471},
    ]},
    's6-s8':{label:'S6 / S7 / S8',uitv:[
      {l:'S6 Avant TDI 344pk',cat:128680,co2_wltp:199,co2_nedc:182,bs:'diesel',kw:253},
      {l:'S6 Sedan TDI 344pk',cat:124680,co2_wltp:196,co2_nedc:179,bs:'diesel',kw:253},
      {l:'S7 Sportback TDI 344pk',cat:138680,co2_wltp:196,co2_nedc:179,bs:'diesel',kw:253},
      {l:'S8 4.0 TFSI 571pk',cat:218680,co2_wltp:285,co2_nedc:261,bs:'benzine',kw:420},
      {l:'S8 ABT 640pk',cat:268000,co2_wltp:295,co2_nedc:null,bs:'benzine',kw:471},
    ]},
    'sq5-sq8':{label:'SQ5 / SQ7 / SQ8',uitv:[
      {l:'SQ5 3.0 TFSI 354pk',cat:108680,co2_wltp:218,co2_nedc:199,bs:'benzine',kw:260},
      {l:'SQ5 Sportback 3.0 TFSI 354pk',cat:112680,co2_wltp:215,co2_nedc:null,bs:'benzine',kw:260},
      {l:'SQ7 4.0 TFSI 507pk',cat:178680,co2_wltp:299,co2_nedc:272,bs:'benzine',kw:373},
      {l:'SQ8 4.0 TFSI 507pk',cat:198680,co2_wltp:306,co2_nedc:279,bs:'benzine',kw:373},
      {l:'SQ8 e-tron Electric 503pk',cat:118000,co2_wltp:0,co2_nedc:null,bs:'elektrisch',kw:370},
      {l:'SQ8 e-tron Sportback 503pk',cat:121000,co2_wltp:0,co2_nedc:null,bs:'elektrisch',kw:370},
    ]},
    'ttrs':{label:'TT RS',uitv:[
      {l:'TT RS Coupé 2.5 TFSI 400pk',cat:98680,co2_wltp:215,co2_nedc:197,bs:'benzine',kw:294},
      {l:'TT RS Roadster 2.5 TFSI 400pk',cat:104680,co2_wltp:219,co2_nedc:201,bs:'benzine',kw:294},
    ]},
  }},
  bentley:{label:'Bentley',models:{
    'bentayga':{label:'Bentayga',uitv:[
      {l:'Bentayga V8 550pk',cat:328000,co2_wltp:299,co2_nedc:274,bs:'benzine',kw:404},
      {l:'Bentayga S V8 550pk',cat:348000,co2_wltp:299,co2_nedc:null,bs:'benzine',kw:404},
      {l:'Bentayga Azure V8 550pk',cat:368000,co2_wltp:299,co2_nedc:null,bs:'benzine',kw:404},
      {l:'Bentayga EWB V8 550pk',cat:388000,co2_wltp:305,co2_nedc:null,bs:'benzine',kw:404},
      {l:'Bentayga Hybrid 462pk',cat:318000,co2_wltp:75,co2_nedc:null,bs:'hybride',kw:340},
      {l:'Bentayga EWB Azure Hybrid 462pk',cat:368000,co2_wltp:79,co2_nedc:null,bs:'hybride',kw:340},
      {l:'Bentayga Speed W12 635pk',cat:398000,co2_wltp:325,co2_nedc:299,bs:'benzine',kw:467},
    ]},
    'continental':{label:'Continental GT',uitv:[
      {l:'Continental GT V8 550pk',cat:348000,co2_wltp:295,co2_nedc:270,bs:'benzine',kw:404},
      {l:'Continental GT Speed W12 659pk',cat:448000,co2_wltp:315,co2_nedc:289,bs:'benzine',kw:485},
      {l:'Continental GT Mulliner W12 659pk',cat:498000,co2_wltp:315,co2_nedc:null,bs:'benzine',kw:485},
      {l:'Continental GTC V8 550pk',cat:378000,co2_wltp:299,co2_nedc:274,bs:'benzine',kw:404},
      {l:'Continental GTC Speed W12 659pk',cat:478000,co2_wltp:319,co2_nedc:293,bs:'benzine',kw:485},
      {l:'Continental GT S V8 550pk',cat:368000,co2_wltp:295,co2_nedc:null,bs:'benzine',kw:404},
      {l:'Continental GT Azure V8 550pk',cat:388000,co2_wltp:295,co2_nedc:null,bs:'benzine',kw:404},
    ]},
    'flying-spur':{label:'Flying Spur',uitv:[
      {l:'Flying Spur V8 550pk',cat:338000,co2_wltp:289,co2_nedc:265,bs:'benzine',kw:404},
      {l:'Flying Spur S V8 550pk',cat:358000,co2_wltp:289,co2_nedc:null,bs:'benzine',kw:404},
      {l:'Flying Spur Azure V8 550pk',cat:378000,co2_wltp:289,co2_nedc:null,bs:'benzine',kw:404},
      {l:'Flying Spur W12 635pk',cat:428000,co2_wltp:315,co2_nedc:289,bs:'benzine',kw:467},
      {l:'Flying Spur Speed W12 635pk',cat:458000,co2_wltp:319,co2_nedc:null,bs:'benzine',kw:467},
      {l:'Flying Spur Hybrid 544pk',cat:348000,co2_wltp:79,co2_nedc:null,bs:'hybride',kw:400},
      {l:'Flying Spur Azure Hybrid 544pk',cat:378000,co2_wltp:79,co2_nedc:null,bs:'hybride',kw:400},
    ]},
    'mulsanne':{label:'Mulsanne',uitv:[
      {l:'Mulsanne V8 512pk',cat:428000,co2_wltp:null,co2_nedc:385,bs:'benzine',kw:377},
      {l:'Mulsanne Speed V8 537pk',cat:468000,co2_wltp:null,co2_nedc:388,bs:'benzine',kw:395},
      {l:'Mulsanne Extended Wheelbase 512pk',cat:498000,co2_wltp:null,co2_nedc:385,bs:'benzine',kw:377},
    ]},
  }},
  bmw:{label:'BMW',models:{
    'm1000rr':{label:'Alpina B7 / B8',uitv:[
      {l:'Alpina B7 xDrive 612pk',cat:218000,co2_wltp:279,co2_nedc:null,bs:'benzine',kw:450},
      {l:'Alpina B8 Gran Coupé 621pk',cat:238000,co2_wltp:285,co2_nedc:null,bs:'benzine',kw:456},
      {l:'Alpina XB7 621pk',cat:258000,co2_wltp:299,co2_nedc:null,bs:'benzine',kw:456},
    ]},
    'ix':{label:'iX',uitv:[
      {l:'iX xDrive40 326pk',cat:90600,co2_wltp:0,co2_nedc:null,bs:'elektrisch',kw:240},
      {l:'iX xDrive50 523pk',cat:121500,co2_wltp:0,co2_nedc:null,bs:'elektrisch',kw:385},
      {l:'iX M60 619pk',cat:140900,co2_wltp:0,co2_nedc:null,bs:'elektrisch',kw:455},
    ]},
    'm2':{label:'M2',uitv:[
      {l:'M2 3.0 S58 460pk',cat:108680,co2_wltp:228,co2_nedc:null,bs:'benzine',kw:338},
      {l:'M2 CS 3.0 S58 550pk',cat:148680,co2_wltp:235,co2_nedc:null,bs:'benzine',kw:405},
    ]},
    'm3':{label:'M3 / M4',uitv:[
      {l:'M3 Sedan Competition 510pk',cat:158680,co2_wltp:228,co2_nedc:null,bs:'benzine',kw:375},
      {l:'M3 Sedan Competition xDrive 510pk',cat:163680,co2_wltp:234,co2_nedc:null,bs:'benzine',kw:375},
      {l:'M3 Touring Competition xDrive 510pk',cat:178680,co2_wltp:238,co2_nedc:null,bs:'benzine',kw:375},
      {l:'M4 Coupé Competition 510pk',cat:154680,co2_wltp:222,co2_nedc:null,bs:'benzine',kw:375},
      {l:'M4 Coupé Competition xDrive 510pk',cat:159680,co2_wltp:228,co2_nedc:null,bs:'benzine',kw:375},
      {l:'M4 Cabriolet Competition xDrive 510pk',cat:178680,co2_wltp:238,co2_nedc:null,bs:'benzine',kw:375},
      {l:'M4 CS 3.0 S58 550pk',cat:198680,co2_wltp:238,co2_nedc:null,bs:'benzine',kw:405},
      {l:'M4 CSL 3.0 S58 550pk',cat:228680,co2_wltp:241,co2_nedc:null,bs:'benzine',kw:405},
    ]},
    'm5':{label:'M5',uitv:[
      {l:'M5 4.4 V8 xDrive 727pk',cat:228680,co2_wltp:289,co2_nedc:null,bs:'benzine',kw:535},
      {l:'M5 Touring xDrive 727pk',cat:248680,co2_wltp:295,co2_nedc:null,bs:'benzine',kw:535},
      {l:'M5 CS 4.4 V8 635pk',cat:268680,co2_wltp:296,co2_nedc:null,bs:'benzine',kw:467},
    ]},
    'm8':{label:'M8',uitv:[
      {l:'M8 Coupé Competition xDrive 625pk',cat:248680,co2_wltp:289,co2_nedc:null,bs:'benzine',kw:460},
      {l:'M8 Cabriolet Competition xDrive 625pk',cat:278680,co2_wltp:299,co2_nedc:null,bs:'benzine',kw:460},
      {l:'M8 Gran Coupé Competition xDrive 625pk',cat:252680,co2_wltp:292,co2_nedc:null,bs:'benzine',kw:460},
    ]},
    'xm':{label:'XM',uitv:[
      {l:'XM PHEV 653pk',cat:185000,co2_wltp:82,co2_nedc:null,bs:'hybride',kw:480},
      {l:'XM Label Red PHEV 748pk',cat:248000,co2_wltp:79,co2_nedc:null,bs:'hybride',kw:550},
      {l:'XM Label Black PHEV 748pk',cat:278000,co2_wltp:79,co2_nedc:null,bs:'hybride',kw:550},
    ]},
  }},
  bugatti:{label:'Bugatti',models:{
    'bolide':{label:'Bolide',uitv:[
      {l:'Bolide W16 1825pk',cat:4700000,co2_wltp:null,co2_nedc:null,bs:'benzine',kw:1342},
    ]},
    'chiron':{label:'Chiron',uitv:[
      {l:'Chiron W16 1479pk',cat:3200000,co2_wltp:516,co2_nedc:498,bs:'benzine',kw:1088},
      {l:'Chiron Sport W16 1479pk',cat:3400000,co2_wltp:516,co2_nedc:498,bs:'benzine',kw:1088},
      {l:'Chiron Super Sport W16 1578pk',cat:3900000,co2_wltp:516,co2_nedc:498,bs:'benzine',kw:1160},
      {l:'Chiron Super Sport 300+ W16 1578pk',cat:4600000,co2_wltp:516,co2_nedc:null,bs:'benzine',kw:1160},
      {l:'Chiron Pur Sport W16 1479pk',cat:4000000,co2_wltp:516,co2_nedc:null,bs:'benzine',kw:1088},
      {l:'Chiron Profilée W16 1479pk',cat:5000000,co2_wltp:516,co2_nedc:null,bs:'benzine',kw:1088},
    ]},
    'divo':{label:'Divo',uitv:[
      {l:'Divo W16 1479pk',cat:5700000,co2_wltp:null,co2_nedc:null,bs:'benzine',kw:1088},
    ]},
    'mistral':{label:'Mistral',uitv:[
      {l:'Mistral Roadster W16 1578pk',cat:5200000,co2_wltp:null,co2_nedc:null,bs:'benzine',kw:1160},
    ]},
    'tourbillon':{label:'Tourbillon',uitv:[
      {l:'Tourbillon V16 PHEV 1800pk',cat:4500000,co2_wltp:195,co2_nedc:null,bs:'hybride',kw:1323},
    ]},
    'veyron':{label:'Veyron',uitv:[
      {l:'Veyron 16.4 W16 1001pk',cat:1200000,co2_wltp:null,co2_nedc:539,bs:'benzine',kw:736},
      {l:'Veyron 16.4 Grand Sport W16 1001pk',cat:1450000,co2_wltp:null,co2_nedc:539,bs:'benzine',kw:736},
      {l:'Veyron Super Sport W16 1184pk',cat:2400000,co2_wltp:null,co2_nedc:539,bs:'benzine',kw:882},
      {l:'Veyron Vitesse W16 1184pk',cat:2600000,co2_wltp:null,co2_nedc:539,bs:'benzine',kw:882},
    ]},
  }},
  ferrari:{label:'Ferrari',models:{
    '296-gtb':{label:'296 GTB',uitv:[
      {l:'296 GTB V6 PHEV 830pk',cat:322000,co2_wltp:79,co2_nedc:null,bs:'hybride',kw:610},
      {l:'296 GTB Assetto Fiorano 830pk',cat:365000,co2_wltp:79,co2_nedc:null,bs:'hybride',kw:610},
    ]},
    '296-gts':{label:'296 GTS',uitv:[
      {l:'296 GTS V6 PHEV 830pk',cat:389000,co2_wltp:79,co2_nedc:null,bs:'hybride',kw:610},
    ]},
    '458':{label:'458 Italia / Spider / Speciale',uitv:[
      {l:'458 Italia 4.5 V8 570pk',cat:268000,co2_wltp:null,co2_nedc:307,bs:'benzine',kw:419},
      {l:'458 Spider 4.5 V8 570pk',cat:298000,co2_wltp:null,co2_nedc:307,bs:'benzine',kw:419},
      {l:'458 Speciale 4.5 V8 605pk',cat:328000,co2_wltp:null,co2_nedc:307,bs:'benzine',kw:445},
      {l:'458 Speciale A 4.5 V8 605pk',cat:358000,co2_wltp:null,co2_nedc:307,bs:'benzine',kw:445},
    ]},
    '488':{label:'488 GTB / Spider / Pista',uitv:[
      {l:'488 GTB 3.9 V8 660pk',cat:298000,co2_wltp:null,co2_nedc:275,bs:'benzine',kw:485},
      {l:'488 Spider 3.9 V8 660pk',cat:328000,co2_wltp:null,co2_nedc:279,bs:'benzine',kw:485},
      {l:'488 Pista 3.9 V8 720pk',cat:368000,co2_wltp:null,co2_nedc:275,bs:'benzine',kw:530},
      {l:'488 Pista Spider 3.9 V8 720pk',cat:408000,co2_wltp:null,co2_nedc:279,bs:'benzine',kw:530},
    ]},
    '812':{label:'812 Superfast / GTS',uitv:[
      {l:'812 Superfast V12 800pk',cat:498000,co2_wltp:null,co2_nedc:340,bs:'benzine',kw:588},
      {l:'812 GTS V12 800pk',cat:548000,co2_wltp:null,co2_nedc:340,bs:'benzine',kw:588},
      {l:'812 Competizione V12 830pk',cat:748000,co2_wltp:null,co2_nedc:340,bs:'benzine',kw:610},
      {l:'812 Competizione A V12 830pk',cat:798000,co2_wltp:null,co2_nedc:340,bs:'benzine',kw:610},
    ]},
    'california':{label:'California T',uitv:[
      {l:'California T 3.9 V8 560pk',cat:228000,co2_wltp:null,co2_nedc:250,bs:'benzine',kw:412},
    ]},
    'f8':{label:'F8 Tributo / Spider',uitv:[
      {l:'F8 Tributo 3.9 V8 720pk',cat:318000,co2_wltp:269,co2_nedc:247,bs:'benzine',kw:530},
      {l:'F8 Spider 3.9 V8 720pk',cat:348000,co2_wltp:275,co2_nedc:252,bs:'benzine',kw:530},
    ]},
    'gtc4lusso':{label:'GTC4Lusso',uitv:[
      {l:'GTC4Lusso V12 690pk',cat:398000,co2_wltp:null,co2_nedc:350,bs:'benzine',kw:507},
      {l:'GTC4Lusso T V8 610pk',cat:358000,co2_wltp:null,co2_nedc:299,bs:'benzine',kw:449},
    ]},
    'laferrari':{label:'LaFerrari',uitv:[
      {l:'LaFerrari V12 PHEV 963pk',cat:1350000,co2_wltp:null,co2_nedc:330,bs:'hybride',kw:708},
      {l:'LaFerrari Aperta V12 PHEV 963pk',cat:2200000,co2_wltp:null,co2_nedc:330,bs:'hybride',kw:708},
    ]},
    'portofino':{label:'Portofino / M',uitv:[
      {l:'Portofino 3.9 V8 600pk',cat:268000,co2_wltp:null,co2_nedc:249,bs:'benzine',kw:441},
      {l:'Portofino M 3.9 V8 620pk',cat:298000,co2_wltp:253,co2_nedc:232,bs:'benzine',kw:456},
    ]},
    'purosangue':{label:'Purosangue',uitv:[
      {l:'Purosangue V12 NA 725pk',cat:598000,co2_wltp:399,co2_nedc:null,bs:'benzine',kw:533},
    ]},
    'roma':{label:'Roma',uitv:[
      {l:'Roma 3.9 V8 Turbo 620pk',cat:318000,co2_wltp:253,co2_nedc:232,bs:'benzine',kw:456},
      {l:'Roma Spider 3.9 V8 620pk',cat:348000,co2_wltp:259,co2_nedc:238,bs:'benzine',kw:456},
    ]},
    'sf90':{label:'SF90 Stradale',uitv:[
      {l:'SF90 Stradale PHEV 1000pk',cat:575000,co2_wltp:78,co2_nedc:null,bs:'hybride',kw:736},
      {l:'SF90 Spider PHEV 1000pk',cat:644000,co2_wltp:78,co2_nedc:null,bs:'hybride',kw:736},
      {l:'SF90 XX Stradale PHEV 1030pk',cat:850000,co2_wltp:78,co2_nedc:null,bs:'hybride',kw:757},
      {l:'SF90 XX Spider PHEV 1030pk',cat:920000,co2_wltp:78,co2_nedc:null,bs:'hybride',kw:757},
    ]},
  }},
  ford:{label:'Ford',models:{
    'gt':{label:'Ford GT',uitv:[
      {l:'Ford GT 3.5 EcoBoost V6 660pk',cat:628000,co2_wltp:255,co2_nedc:242,bs:'benzine',kw:485},
      {l:'Ford GT Mk II 3.5 V6 700pk',cat:1200000,co2_wltp:null,co2_nedc:null,bs:'benzine',kw:515},
    ]},
    'mustang':{label:'Mustang',uitv:[
      {l:'Mustang Fastback 5.0 V8 449pk',cat:95680,co2_wltp:322,co2_nedc:295,bs:'benzine',kw:330},
      {l:'Mustang Cabriolet 5.0 V8 449pk',cat:102680,co2_wltp:329,co2_nedc:302,bs:'benzine',kw:330},
      {l:'Mustang Dark Horse 5.0 V8 504pk',cat:118680,co2_wltp:335,co2_nedc:null,bs:'benzine',kw:371},
      {l:'Mustang Mach-E GT AWD 487pk',cat:72000,co2_wltp:0,co2_nedc:null,bs:'elektrisch',kw:358},
    ]},
    'ranger-raptor':{label:'Ranger / Bronco Raptor',uitv:[
      {l:'Ranger Raptor 3.0 V6 292pk',cat:88680,co2_wltp:299,co2_nedc:null,bs:'benzine',kw:215},
      {l:'Bronco Raptor 3.0 V6 418pk',cat:118680,co2_wltp:335,co2_nedc:null,bs:'benzine',kw:307},
    ]},
  }},
  honda:{label:'Honda',models:{
    'civic-type-r':{label:'Civic Type R',uitv:[
      {l:'Civic Type R 2.0 VTEC 329pk',cat:62680,co2_wltp:178,co2_nedc:163,bs:'benzine',kw:242},
      {l:'Civic Type R Limited Edition 329pk',cat:72680,co2_wltp:178,co2_nedc:null,bs:'benzine',kw:242},
    ]},
    'e-nsx':{label:'Honda e',uitv:[
      {l:'Honda e Electric 154pk',cat:38500,co2_wltp:0,co2_nedc:null,bs:'elektrisch',kw:113},
    ]},
    'nsx':{label:'NSX',uitv:[
      {l:'NSX Type S 3.5 V6 PHEV 600pk',cat:198000,co2_wltp:169,co2_nedc:null,bs:'hybride',kw:441},
    ]},
  }},
  koenigsegg:{label:'Koenigsegg',models:{
    'agera':{label:'Agera',uitv:[
      {l:'Agera RS V8 Biturbo 1360pk',cat:2500000,co2_wltp:null,co2_nedc:null,bs:'benzine',kw:1000},
      {l:'Agera Final One V8 1360pk',cat:3200000,co2_wltp:null,co2_nedc:null,bs:'benzine',kw:1000},
    ]},
    'gemera':{label:'Gemera',uitv:[
      {l:'Gemera V8 PHEV 2300pk',cat:1700000,co2_wltp:null,co2_nedc:null,bs:'hybride',kw:1692},
    ]},
    'jesko':{label:'Jesko',uitv:[
      {l:'Jesko V8 Biturbo 1280pk',cat:2800000,co2_wltp:null,co2_nedc:null,bs:'benzine',kw:942},
      {l:'Jesko Absolut V8 1600pk',cat:3500000,co2_wltp:null,co2_nedc:null,bs:'benzine',kw:1176},
    ]},
    'regera':{label:'Regera',uitv:[
      {l:'Regera V8 Hybrid 1500pk',cat:1900000,co2_wltp:null,co2_nedc:null,bs:'hybride',kw:1103},
    ]},
  }},
  lamborghini:{label:'Lamborghini',models:{
    'aventador':{label:'Aventador',uitv:[
      {l:'Aventador LP 700-4 700pk',cat:448000,co2_wltp:null,co2_nedc:398,bs:'benzine',kw:515},
      {l:'Aventador LP 700-4 Roadster 700pk',cat:498000,co2_wltp:null,co2_nedc:398,bs:'benzine',kw:515},
      {l:'Aventador LP 750-4 SV 750pk',cat:528000,co2_wltp:null,co2_nedc:398,bs:'benzine',kw:552},
      {l:'Aventador LP 750-4 SV Roadster 750pk',cat:578000,co2_wltp:null,co2_nedc:398,bs:'benzine',kw:552},
      {l:'Aventador S LP 740-4 740pk',cat:468000,co2_wltp:null,co2_nedc:398,bs:'benzine',kw:544},
      {l:'Aventador SVJ 770pk',cat:598000,co2_wltp:null,co2_nedc:398,bs:'benzine',kw:566},
      {l:'Aventador SVJ Roadster 770pk',cat:648000,co2_wltp:null,co2_nedc:398,bs:'benzine',kw:566},
      {l:'Aventador Ultimae 780pk',cat:698000,co2_wltp:null,co2_nedc:398,bs:'benzine',kw:574},
    ]},
    'gallardo':{label:'Gallardo',uitv:[
      {l:'Gallardo LP 560-4 560pk',cat:228000,co2_wltp:null,co2_nedc:327,bs:'benzine',kw:412},
      {l:'Gallardo LP 570-4 Superleggera 570pk',cat:268000,co2_wltp:null,co2_nedc:327,bs:'benzine',kw:419},
      {l:'Gallardo Spyder 520pk',cat:238000,co2_wltp:null,co2_nedc:327,bs:'benzine',kw:382},
    ]},
    'huracan':{label:'Huracán',uitv:[
      {l:'Huracán LP 610-4 610pk',cat:328000,co2_wltp:325,co2_nedc:298,bs:'benzine',kw:449},
      {l:'Huracán LP 610-4 Spyder 610pk',cat:358000,co2_wltp:332,co2_nedc:305,bs:'benzine',kw:449},
      {l:'Huracán Evo Coupé 640pk',cat:348000,co2_wltp:336,co2_nedc:308,bs:'benzine',kw:470},
      {l:'Huracán Evo Spyder 640pk',cat:378000,co2_wltp:341,co2_nedc:312,bs:'benzine',kw:470},
      {l:'Huracán Evo RWD Coupé 610pk',cat:308000,co2_wltp:325,co2_nedc:298,bs:'benzine',kw:449},
      {l:'Huracán Evo RWD Spyder 610pk',cat:338000,co2_wltp:331,co2_nedc:303,bs:'benzine',kw:449},
      {l:'Huracán Sterrato 610pk',cat:368000,co2_wltp:338,co2_nedc:null,bs:'benzine',kw:449},
      {l:'Huracán Tecnica 640pk',cat:358000,co2_wltp:336,co2_nedc:null,bs:'benzine',kw:470},
      {l:'Huracán STO 640pk',cat:398000,co2_wltp:336,co2_nedc:null,bs:'benzine',kw:470},
    ]},
    'revuelto':{label:'Revuelto',uitv:[
      {l:'Revuelto V12 PHEV 1015pk',cat:599000,co2_wltp:51,co2_nedc:null,bs:'hybride',kw:746},
    ]},
    'urus':{label:'Urus',uitv:[
      {l:'Urus 4.0 V8 BiTurbo 650pk',cat:328590,co2_wltp:325,co2_nedc:null,bs:'benzine',kw:478},
      {l:'Urus S 4.0 V8 BiTurbo 666pk',cat:358000,co2_wltp:335,co2_nedc:null,bs:'benzine',kw:490},
      {l:'Urus Performante 4.0 V8 666pk',cat:388000,co2_wltp:340,co2_nedc:null,bs:'benzine',kw:490},
    ]},
  }},
  lexus:{label:'Lexus',models:{
    'lc':{label:'LC 500',uitv:[
      {l:'LC 500 5.0 V8 477pk',cat:148680,co2_wltp:270,co2_nedc:247,bs:'benzine',kw:351},
      {l:'LC 500h Hybrid 359pk',cat:138680,co2_wltp:218,co2_nedc:199,bs:'hybride',kw:264},
      {l:'LC 500 Cabriolet V8 477pk',cat:168680,co2_wltp:278,co2_nedc:255,bs:'benzine',kw:351},
      {l:'LC 500h Cabriolet Hybrid 359pk',cat:158680,co2_wltp:225,co2_nedc:206,bs:'hybride',kw:264},
    ]},
    'ls':{label:'LS 500',uitv:[
      {l:'LS 500 3.5 V6 Biturbo 422pk',cat:158680,co2_wltp:249,co2_nedc:228,bs:'benzine',kw:310},
      {l:'LS 500h Hybrid 359pk',cat:168680,co2_wltp:189,co2_nedc:173,bs:'hybride',kw:264},
      {l:'LS 500 Inspiration Series 422pk',cat:188680,co2_wltp:249,co2_nedc:null,bs:'benzine',kw:310},
    ]},
    'lx':{label:'LX 600',uitv:[
      {l:'LX 600 3.5 V6 415pk',cat:178680,co2_wltp:315,co2_nedc:289,bs:'benzine',kw:305},
      {l:'LX 600 F Sport 3.5 V6 415pk',cat:198680,co2_wltp:315,co2_nedc:289,bs:'benzine',kw:305},
      {l:'LX 600 Ultra Luxury 415pk',cat:228680,co2_wltp:315,co2_nedc:null,bs:'benzine',kw:305},
    ]},
    'rcf':{label:'RC F',uitv:[
      {l:'RC F 5.0 V8 477pk',cat:118680,co2_wltp:null,co2_nedc:278,bs:'benzine',kw:351},
      {l:'RC F Track Edition 5.0 V8 477pk',cat:138680,co2_wltp:null,co2_nedc:278,bs:'benzine',kw:351},
    ]},
  }},
  maserati:{label:'Maserati',models:{
    'granturismo':{label:'GranTurismo',uitv:[
      {l:'GranTurismo Modena 3.0 V6 490pk',cat:268000,co2_wltp:299,co2_nedc:null,bs:'benzine',kw:360},
      {l:'GranTurismo Trofeo 3.0 V6 550pk',cat:318000,co2_wltp:315,co2_nedc:null,bs:'benzine',kw:405},
      {l:'GranTurismo Folgore Electric 761pk',cat:275000,co2_wltp:0,co2_nedc:null,bs:'elektrisch',kw:560},
    ]},
    'grancabrio':{label:'GranCabrio',uitv:[
      {l:'GranCabrio Modena 3.0 V6 490pk',cat:298000,co2_wltp:305,co2_nedc:null,bs:'benzine',kw:360},
      {l:'GranCabrio Trofeo 3.0 V6 550pk',cat:348000,co2_wltp:319,co2_nedc:null,bs:'benzine',kw:405},
      {l:'GranCabrio Folgore Electric 761pk',cat:295000,co2_wltp:0,co2_nedc:null,bs:'elektrisch',kw:560},
    ]},
    'grecale':{label:'Grecale',uitv:[
      {l:'Grecale GT 2.0 T4 300pk',cat:88680,co2_wltp:199,co2_nedc:null,bs:'benzine',kw:221},
      {l:'Grecale Modena 3.0 V6 330pk',cat:108680,co2_wltp:225,co2_nedc:null,bs:'benzine',kw:243},
      {l:'Grecale Trofeo 3.0 V6 530pk',cat:168680,co2_wltp:299,co2_nedc:null,bs:'benzine',kw:390},
      {l:'Grecale Folgore Electric 557pk',cat:115000,co2_wltp:0,co2_nedc:null,bs:'elektrisch',kw:410},
    ]},
    'levante':{label:'Levante',uitv:[
      {l:'Levante 3.0 V6 350pk',cat:118680,co2_wltp:279,co2_nedc:256,bs:'benzine',kw:257},
      {l:'Levante S 3.0 V6 430pk',cat:138680,co2_wltp:299,co2_nedc:274,bs:'benzine',kw:316},
      {l:'Levante GTS 3.8 V8 550pk',cat:198680,co2_wltp:339,co2_nedc:311,bs:'benzine',kw:404},
      {l:'Levante Trofeo 3.8 V8 580pk',cat:228680,co2_wltp:349,co2_nedc:320,bs:'benzine',kw:427},
    ]},
    'mc20':{label:'MC20',uitv:[
      {l:'MC20 Coupé V6 630pk',cat:318000,co2_wltp:299,co2_nedc:null,bs:'benzine',kw:463},
      {l:'MC20 Cielo Spider V6 630pk',cat:368000,co2_wltp:305,co2_nedc:null,bs:'benzine',kw:463},
      {l:'MC20 Cielo Folgore Electric 761pk',cat:320000,co2_wltp:0,co2_nedc:null,bs:'elektrisch',kw:560},
    ]},
    'quattroporte':{label:'Quattroporte',uitv:[
      {l:'Quattroporte 3.0 V6 350pk',cat:148680,co2_wltp:null,co2_nedc:249,bs:'benzine',kw:257},
      {l:'Quattroporte S 3.0 V6 430pk',cat:168680,co2_wltp:null,co2_nedc:265,bs:'benzine',kw:316},
      {l:'Quattroporte GTS 3.8 V8 530pk',cat:228680,co2_wltp:null,co2_nedc:325,bs:'benzine',kw:390},
      {l:'Quattroporte Trofeo 3.8 V8 580pk',cat:258680,co2_wltp:null,co2_nedc:335,bs:'benzine',kw:427},
    ]},
  }},
  mclaren:{label:'McLaren',models:{
    '540c':{label:'540C',uitv:[
      {l:'540C Coupé 3.8 V8 540pk',cat:198000,co2_wltp:null,co2_nedc:249,bs:'benzine',kw:397},
    ]},
    '570s':{label:'570S / GT',uitv:[
      {l:'570S Coupé 3.8 V8 570pk',cat:228000,co2_wltp:null,co2_nedc:249,bs:'benzine',kw:419},
      {l:'570S Spider 3.8 V8 570pk',cat:248000,co2_wltp:null,co2_nedc:249,bs:'benzine',kw:419},
      {l:'570GT 3.8 V8 570pk',cat:238000,co2_wltp:null,co2_nedc:249,bs:'benzine',kw:419},
    ]},
    '600lt':{label:'600LT',uitv:[
      {l:'600LT Coupé 3.8 V8 600pk',cat:298000,co2_wltp:249,co2_nedc:228,bs:'benzine',kw:441},
      {l:'600LT Spider 3.8 V8 600pk',cat:328000,co2_wltp:255,co2_nedc:234,bs:'benzine',kw:441},
    ]},
    '650s':{label:'650S',uitv:[
      {l:'650S Coupé 3.8 V8 650pk',cat:258000,co2_wltp:249,co2_nedc:228,bs:'benzine',kw:478},
      {l:'650S Spider 3.8 V8 650pk',cat:278000,co2_wltp:255,co2_nedc:234,bs:'benzine',kw:478},
    ]},
    '720s':{label:'720S',uitv:[
      {l:'720S Coupé 4.0 V8 720pk',cat:348000,co2_wltp:269,co2_nedc:247,bs:'benzine',kw:530},
      {l:'720S Spider 4.0 V8 720pk',cat:378000,co2_wltp:275,co2_nedc:252,bs:'benzine',kw:530},
      {l:'720S Performance Coupé 720pk',cat:368000,co2_wltp:269,co2_nedc:247,bs:'benzine',kw:530},
    ]},
    '750s':{label:'750S',uitv:[
      {l:'750S Coupé 4.0 V8 750pk',cat:428000,co2_wltp:285,co2_nedc:null,bs:'benzine',kw:552},
      {l:'750S Spider 4.0 V8 750pk',cat:458000,co2_wltp:292,co2_nedc:null,bs:'benzine',kw:552},
    ]},
    'artura':{label:'Artura',uitv:[
      {l:'Artura V6 PHEV 680pk',cat:265000,co2_wltp:129,co2_nedc:null,bs:'hybride',kw:500},
      {l:'Artura Spider V6 PHEV 700pk',cat:295000,co2_wltp:131,co2_nedc:null,bs:'hybride',kw:515},
    ]},
    'elva':{label:'Elva',uitv:[
      {l:'Elva 4.0 V8 804pk',cat:1690000,co2_wltp:null,co2_nedc:null,bs:'benzine',kw:591},
    ]},
    'p1':{label:'P1',uitv:[
      {l:'P1 V8 PHEV 916pk',cat:1150000,co2_wltp:null,co2_nedc:194,bs:'hybride',kw:674},
      {l:'P1 GTR V8 PHEV 1000pk',cat:2500000,co2_wltp:null,co2_nedc:null,bs:'hybride',kw:736},
    ]},
    'senna':{label:'Senna / GTR',uitv:[
      {l:'Senna 4.0 V8 800pk',cat:985000,co2_wltp:null,co2_nedc:249,bs:'benzine',kw:588},
      {l:'Senna GTR 4.0 V8 825pk',cat:1450000,co2_wltp:null,co2_nedc:null,bs:'benzine',kw:607},
    ]},
    'speedtail':{label:'Speedtail',uitv:[
      {l:'Speedtail V8 Hybrid 1055pk',cat:2100000,co2_wltp:null,co2_nedc:null,bs:'hybride',kw:776},
    ]},
  }},
  mercedes:{label:'Mercedes-Benz',models:{
    'amg-c63':{label:'AMG C 63 / E 63',uitv:[
      {l:'C 63 S E Performance PHEV 680pk',cat:138680,co2_wltp:99,co2_nedc:null,bs:'hybride',kw:500},
      {l:'E 53 AMG 4MATIC+ 449pk',cat:128680,co2_wltp:219,co2_nedc:null,bs:'hybride',kw:330},
      {l:'E 63 S AMG 4MATIC+ 612pk',cat:188680,co2_wltp:279,co2_nedc:null,bs:'benzine',kw:450},
    ]},
    'amg-gt':{label:'AMG GT',uitv:[
      {l:'AMG GT 43 Coupé 449pk',cat:158680,co2_wltp:249,co2_nedc:null,bs:'benzine',kw:330},
      {l:'AMG GT 55 Coupé V8 476pk',cat:188680,co2_wltp:265,co2_nedc:null,bs:'benzine',kw:350},
      {l:'AMG GT 63 4.0 V8 585pk',cat:248680,co2_wltp:289,co2_nedc:null,bs:'benzine',kw:430},
      {l:'AMG GT 63 S E Performance 843pk',cat:298680,co2_wltp:149,co2_nedc:null,bs:'hybride',kw:620},
      {l:'AMG GT 63 S Roadster 585pk',cat:268680,co2_wltp:295,co2_nedc:null,bs:'benzine',kw:430},
    ]},
    'amg-slr':{label:'AMG SL',uitv:[
      {l:'SL 43 AMG 381pk',cat:178680,co2_wltp:235,co2_nedc:null,bs:'benzine',kw:280},
      {l:'SL 55 AMG V8 476pk',cat:218680,co2_wltp:265,co2_nedc:null,bs:'benzine',kw:350},
      {l:'SL 63 AMG V8 585pk',cat:268680,co2_wltp:285,co2_nedc:null,bs:'benzine',kw:430},
      {l:'SL 63 AMG S E Performance 843pk',cat:328680,co2_wltp:149,co2_nedc:null,bs:'hybride',kw:620},
    ]},
    'g-klasse':{label:'G-Klasse',uitv:[
      {l:'G 400d 3.0 D 330pk',cat:178680,co2_wltp:243,co2_nedc:null,bs:'diesel',kw:243},
      {l:'G 500 4.0 V8 422pk',cat:228680,co2_wltp:325,co2_nedc:299,bs:'benzine',kw:310},
      {l:'G 63 AMG 4.0 V8 585pk',cat:328680,co2_wltp:337,co2_nedc:310,bs:'benzine',kw:430},
      {l:'G 63 AMG Manufaktur 585pk',cat:398680,co2_wltp:337,co2_nedc:null,bs:'benzine',kw:430},
      {l:'G 580 EQ Electric 587pk',cat:198000,co2_wltp:0,co2_nedc:null,bs:'elektrisch',kw:432},
    ]},
    'glc-gle':{label:'GLC / GLE AMG',uitv:[
      {l:'GLC 63 S E Performance AMG 680pk',cat:168680,co2_wltp:99,co2_nedc:null,bs:'hybride',kw:500},
      {l:'GLE 53 AMG 4MATIC+ 449pk',cat:158680,co2_wltp:249,co2_nedc:null,bs:'hybride',kw:330},
      {l:'GLE 63 S AMG 4MATIC+ 612pk',cat:228680,co2_wltp:299,co2_nedc:null,bs:'benzine',kw:450},
      {l:'GLE 63 S AMG Coupé 612pk',cat:248680,co2_wltp:305,co2_nedc:null,bs:'benzine',kw:450},
    ]},
    'maybach':{label:'Maybach GLS / S',uitv:[
      {l:'Maybach GLS 600 4MATIC 558pk',cat:318680,co2_wltp:325,co2_nedc:null,bs:'benzine',kw:410},
      {l:'Maybach S 480 4MATIC 367pk',cat:228680,co2_wltp:239,co2_nedc:null,bs:'benzine',kw:270},
      {l:'Maybach S 580 4MATIC 503pk',cat:278680,co2_wltp:259,co2_nedc:null,bs:'benzine',kw:370},
      {l:'Maybach S 680 V12 612pk',cat:378680,co2_wltp:285,co2_nedc:null,bs:'benzine',kw:450},
      {l:'Maybach EQS 680 Electric 658pk',cat:268000,co2_wltp:0,co2_nedc:null,bs:'elektrisch',kw:484},
    ]},
    's-klasse':{label:'S-Klasse / EQS',uitv:[
      {l:'S 350d 4MATIC 286pk',cat:138680,co2_wltp:192,co2_nedc:175,bs:'diesel',kw:210},
      {l:'S 400d 4MATIC 330pk',cat:158680,co2_wltp:199,co2_nedc:181,bs:'diesel',kw:243},
      {l:'S 450 4MATIC 367pk',cat:148680,co2_wltp:225,co2_nedc:null,bs:'benzine',kw:270},
      {l:'S 500 4MATIC 449pk',cat:168680,co2_wltp:239,co2_nedc:218,bs:'benzine',kw:330},
      {l:'S 580 4MATIC 503pk',cat:198680,co2_wltp:259,co2_nedc:null,bs:'benzine',kw:370},
      {l:'S 63 AMG E Performance 802pk',cat:348680,co2_wltp:129,co2_nedc:null,bs:'hybride',kw:590},
      {l:'S 680 Maybach V12 612pk',cat:378680,co2_wltp:285,co2_nedc:null,bs:'benzine',kw:450},
      {l:'EQS 450+ Electric 333pk',cat:139000,co2_wltp:0,co2_nedc:null,bs:'elektrisch',kw:245},
      {l:'EQS 580 4MATIC Electric 544pk',cat:168000,co2_wltp:0,co2_nedc:null,bs:'elektrisch',kw:400},
      {l:'EQS AMG 53 761pk',cat:195000,co2_wltp:0,co2_nedc:null,bs:'elektrisch',kw:560},
    ]},
  }},

  pagani:{label:'Pagani',models:{
    'huayra':{label:'Huayra',uitv:[
      {l:'Huayra V12 Biturbo 730pk',cat:2400000,co2_wltp:null,co2_nedc:null,bs:'benzine',kw:537},
      {l:'Huayra BC V12 Biturbo 800pk',cat:2800000,co2_wltp:null,co2_nedc:null,bs:'benzine',kw:588},
      {l:'Huayra Roadster V12 840pk',cat:3100000,co2_wltp:null,co2_nedc:null,bs:'benzine',kw:618},
      {l:'Huayra R V12 NA 850pk',cat:3500000,co2_wltp:null,co2_nedc:null,bs:'benzine',kw:625},
    ]},
    'utopia':{label:'Utopia',uitv:[
      {l:'Utopia V12 Biturbo 864pk',cat:2700000,co2_wltp:null,co2_nedc:null,bs:'benzine',kw:635},
    ]},
    'zonda':{label:'Zonda',uitv:[
      {l:'Zonda F V12 602pk',cat:1200000,co2_wltp:null,co2_nedc:null,bs:'benzine',kw:442},
      {l:'Zonda Cinque V12 678pk',cat:1800000,co2_wltp:null,co2_nedc:null,bs:'benzine',kw:499},
    ]},
  }},
  porsche:{label:'Porsche',models:{
    '911':{label:'911',uitv:[
      {l:'911 Carrera 3.0 T-Hybrid 357pk',cat:168680,co2_wltp:219,co2_nedc:null,bs:'hybride',kw:263},
      {l:'911 Carrera Cabriolet 3.0 T-Hybrid 357pk',cat:182680,co2_wltp:225,co2_nedc:null,bs:'hybride',kw:263},
      {l:'911 Carrera S 3.0 T-Hybrid 473pk',cat:198680,co2_wltp:229,co2_nedc:null,bs:'hybride',kw:348},
      {l:'911 Carrera S Cabriolet 473pk',cat:215680,co2_wltp:235,co2_nedc:null,bs:'hybride',kw:348},
      {l:'911 Carrera 4S 3.0 T-Hybrid 473pk',cat:208680,co2_wltp:232,co2_nedc:null,bs:'hybride',kw:348},
      {l:'911 Carrera 4S Cabriolet 473pk',cat:225680,co2_wltp:238,co2_nedc:null,bs:'hybride',kw:348},
      {l:'911 Targa 4 3.0 385pk',cat:188680,co2_wltp:228,co2_nedc:null,bs:'benzine',kw:283},
      {l:'911 Targa 4S 3.0 T-Hybrid 473pk',cat:228680,co2_wltp:232,co2_nedc:null,bs:'hybride',kw:348},
      {l:'911 GTS 3.0 T-Hybrid 541pk',cat:238680,co2_wltp:239,co2_nedc:null,bs:'hybride',kw:398},
      {l:'911 GTS Cabriolet 541pk',cat:255680,co2_wltp:245,co2_nedc:null,bs:'hybride',kw:398},
      {l:'911 Targa 4 GTS 541pk',cat:248680,co2_wltp:242,co2_nedc:null,bs:'hybride',kw:398},
      {l:'911 Turbo 3.7 580pk',cat:298680,co2_wltp:249,co2_nedc:228,bs:'benzine',kw:427},
      {l:'911 Turbo Cabriolet 3.7 580pk',cat:315680,co2_wltp:255,co2_nedc:234,bs:'benzine',kw:427},
      {l:'911 Turbo S 3.7 650pk',cat:358680,co2_wltp:252,co2_nedc:231,bs:'benzine',kw:478},
      {l:'911 Turbo S Cabriolet 3.7 650pk',cat:378680,co2_wltp:258,co2_nedc:237,bs:'benzine',kw:478},
      {l:'911 GT3 4.0 518pk',cat:278680,co2_wltp:292,co2_nedc:null,bs:'benzine',kw:381},
      {l:'911 GT3 Touring 4.0 518pk',cat:278680,co2_wltp:292,co2_nedc:null,bs:'benzine',kw:381},
      {l:'911 GT3 RS 4.0 525pk',cat:368680,co2_wltp:299,co2_nedc:null,bs:'benzine',kw:386},
      {l:'911 GT2 RS 3.8 700pk',cat:468680,co2_wltp:null,co2_nedc:295,bs:'benzine',kw:515},
      {l:'911 Dakar 3.0 480pk',cat:288680,co2_wltp:245,co2_nedc:null,bs:'benzine',kw:353},
      {l:'911 Sport Classic 3.7 480pk',cat:318680,co2_wltp:245,co2_nedc:null,bs:'benzine',kw:353},
      {l:'911 Speedster 4.0 502pk',cat:348680,co2_wltp:null,co2_nedc:288,bs:'benzine',kw:369},
    ]},
    'boxster':{label:'Boxster / Cayman',uitv:[
      {l:'Boxster 2.0 300pk',cat:88680,co2_wltp:198,co2_nedc:182,bs:'benzine',kw:220},
      {l:'Boxster S 2.5 350pk',cat:108680,co2_wltp:208,co2_nedc:191,bs:'benzine',kw:257},
      {l:'Boxster GTS 4.0 400pk',cat:138680,co2_wltp:228,co2_nedc:null,bs:'benzine',kw:294},
      {l:'Boxster Spyder 4.0 420pk',cat:158680,co2_wltp:235,co2_nedc:null,bs:'benzine',kw:309},
      {l:'Cayman 2.0 300pk',cat:85680,co2_wltp:195,co2_nedc:179,bs:'benzine',kw:220},
      {l:'Cayman S 2.5 350pk',cat:105680,co2_wltp:205,co2_nedc:188,bs:'benzine',kw:257},
      {l:'Cayman GTS 4.0 400pk',cat:135680,co2_wltp:225,co2_nedc:null,bs:'benzine',kw:294},
      {l:'Cayman GT4 4.0 420pk',cat:155680,co2_wltp:232,co2_nedc:null,bs:'benzine',kw:309},
      {l:'Cayman GT4 RS 4.0 500pk',cat:198680,co2_wltp:245,co2_nedc:null,bs:'benzine',kw:368},
    ]},
    'cayenne':{label:'Cayenne',uitv:[
      {l:'Cayenne 3.0 V6 353pk',cat:138680,co2_wltp:249,co2_nedc:229,bs:'benzine',kw:260},
      {l:'Cayenne Coupé 3.0 V6 353pk',cat:148680,co2_wltp:252,co2_nedc:231,bs:'benzine',kw:260},
      {l:'Cayenne S 4.0 V8 474pk',cat:178680,co2_wltp:279,co2_nedc:256,bs:'benzine',kw:348},
      {l:'Cayenne S Coupé 4.0 V8 474pk',cat:188680,co2_wltp:282,co2_nedc:259,bs:'benzine',kw:348},
      {l:'Cayenne GTS 4.0 V8 500pk',cat:218680,co2_wltp:295,co2_nedc:null,bs:'benzine',kw:368},
      {l:'Cayenne GTS Coupé 4.0 V8 500pk',cat:228680,co2_wltp:299,co2_nedc:null,bs:'benzine',kw:368},
      {l:'Cayenne Turbo GT 4.0 V8 640pk',cat:298680,co2_wltp:325,co2_nedc:null,bs:'benzine',kw:471},
      {l:'Cayenne E-Hybrid 3.0 470pk',cat:158680,co2_wltp:49,co2_nedc:null,bs:'hybride',kw:346},
      {l:'Cayenne E-Hybrid Coupé 470pk',cat:168680,co2_wltp:49,co2_nedc:null,bs:'hybride',kw:346},
      {l:'Cayenne Turbo S E-Hybrid 689pk',cat:278680,co2_wltp:79,co2_nedc:null,bs:'hybride',kw:507},
      {l:'Cayenne Turbo S E-Hybrid Coupé 689pk',cat:288680,co2_wltp:79,co2_nedc:null,bs:'hybride',kw:507},
    ]},
    'macan':{label:'Macan',uitv:[
      {l:'Macan 4 Electric 408pk',cat:89800,co2_wltp:0,co2_nedc:null,bs:'elektrisch',kw:300},
      {l:'Macan 4S Electric 516pk',cat:102500,co2_wltp:0,co2_nedc:null,bs:'elektrisch',kw:380},
      {l:'Macan Turbo Electric 639pk',cat:111100,co2_wltp:0,co2_nedc:null,bs:'elektrisch',kw:470},
    ]},
    'panamera':{label:'Panamera',uitv:[
      {l:'Panamera 4 3.0 440pk',cat:158680,co2_wltp:249,co2_nedc:228,bs:'benzine',kw:324},
      {l:'Panamera 4 Sport Turismo 440pk',cat:168680,co2_wltp:252,co2_nedc:231,bs:'benzine',kw:324},
      {l:'Panamera 4 E-Hybrid 470pk',cat:158680,co2_wltp:59,co2_nedc:null,bs:'hybride',kw:346},
      {l:'Panamera 4 E-Hybrid Sport Turismo 470pk',cat:168680,co2_wltp:62,co2_nedc:null,bs:'hybride',kw:346},
      {l:'Panamera GTS 4.0 V8 500pk',cat:238680,co2_wltp:295,co2_nedc:271,bs:'benzine',kw:368},
      {l:'Panamera GTS Sport Turismo 500pk',cat:248680,co2_wltp:299,co2_nedc:275,bs:'benzine',kw:368},
      {l:'Panamera Turbo S 4.0 V8 630pk',cat:298680,co2_wltp:312,co2_nedc:286,bs:'benzine',kw:463},
      {l:'Panamera Turbo S E-Hybrid 700pk',cat:298680,co2_wltp:79,co2_nedc:null,bs:'hybride',kw:515},
      {l:'Panamera Turbo S E-Hybrid ST 700pk',cat:308680,co2_wltp:82,co2_nedc:null,bs:'hybride',kw:515},
    ]},
    'taycan':{label:'Taycan',uitv:[
      {l:'Taycan RWD 408pk',cat:98500,co2_wltp:0,co2_nedc:null,bs:'elektrisch',kw:300},
      {l:'Taycan Sport Turismo RWD 408pk',cat:105700,co2_wltp:0,co2_nedc:null,bs:'elektrisch',kw:300},
      {l:'Taycan 4S 476pk',cat:120200,co2_wltp:0,co2_nedc:null,bs:'elektrisch',kw:350},
      {l:'Taycan 4S Cross Turismo 476pk',cat:127400,co2_wltp:0,co2_nedc:null,bs:'elektrisch',kw:350},
      {l:'Taycan Turbo 625pk',cat:166800,co2_wltp:0,co2_nedc:null,bs:'elektrisch',kw:460},
      {l:'Taycan Turbo Sport Turismo 625pk',cat:174000,co2_wltp:0,co2_nedc:null,bs:'elektrisch',kw:460},
      {l:'Taycan Turbo S 761pk',cat:196200,co2_wltp:0,co2_nedc:null,bs:'elektrisch',kw:560},
      {l:'Taycan Turbo S Cross Turismo 761pk',cat:203400,co2_wltp:0,co2_nedc:null,bs:'elektrisch',kw:560},
      {l:'Taycan Turbo GT 1108pk',cat:239900,co2_wltp:0,co2_nedc:null,bs:'elektrisch',kw:815},
    ]},
  }},
  'range-rover':{label:'Range Rover',models:{
    'defender':{label:'Defender',uitv:[
      {l:'Defender 90 D200 200pk',cat:72680,co2_wltp:215,co2_nedc:null,bs:'diesel',kw:147},
      {l:'Defender 110 D300 300pk',cat:118680,co2_wltp:235,co2_nedc:null,bs:'diesel',kw:221},
      {l:'Defender 130 D300 300pk',cat:128680,co2_wltp:238,co2_nedc:null,bs:'diesel',kw:221},
      {l:'Defender 90 V8 525pk',cat:218680,co2_wltp:355,co2_nedc:null,bs:'benzine',kw:386},
      {l:'Defender 110 V8 525pk',cat:228680,co2_wltp:362,co2_nedc:null,bs:'benzine',kw:386},
      {l:'Defender 130 V8 Outbound 525pk',cat:238680,co2_wltp:362,co2_nedc:null,bs:'benzine',kw:386},
      {l:'Defender 90 P400e PHEV 404pk',cat:98680,co2_wltp:43,co2_nedc:null,bs:'hybride',kw:297},
    ]},
    'discovery':{label:'Discovery',uitv:[
      {l:'Discovery D300 HSE 300pk',cat:108680,co2_wltp:232,co2_nedc:null,bs:'diesel',kw:221},
      {l:'Discovery D300 R-Dynamic HSE 300pk',cat:118680,co2_wltp:232,co2_nedc:null,bs:'diesel',kw:221},
    ]},
    'range-rover':{label:'Range Rover',uitv:[
      {l:'Range Rover D250 3.0 D 249pk',cat:148680,co2_wltp:219,co2_nedc:null,bs:'diesel',kw:183},
      {l:'Range Rover D300 3.0 D 300pk',cat:162680,co2_wltp:225,co2_nedc:null,bs:'diesel',kw:221},
      {l:'Range Rover D350 3.0 D 350pk',cat:178680,co2_wltp:228,co2_nedc:null,bs:'diesel',kw:258},
      {l:'Range Rover P360 3.0 360pk',cat:178680,co2_wltp:299,co2_nedc:null,bs:'benzine',kw:265},
      {l:'Range Rover P400 3.0 400pk',cat:198680,co2_wltp:312,co2_nedc:null,bs:'benzine',kw:294},
      {l:'Range Rover P460e PHEV 460pk',cat:178680,co2_wltp:35,co2_nedc:null,bs:'hybride',kw:338},
      {l:'Range Rover P530 4.4 V8 530pk',cat:268680,co2_wltp:335,co2_nedc:306,bs:'benzine',kw:390},
      {l:'Range Rover SV 4.4 V8 615pk',cat:388680,co2_wltp:345,co2_nedc:null,bs:'benzine',kw:452},
      {l:'Range Rover SV Autobiography P530',cat:448680,co2_wltp:335,co2_nedc:null,bs:'benzine',kw:390},
      {l:'Range Rover SV Serenity P530',cat:468680,co2_wltp:335,co2_nedc:null,bs:'benzine',kw:390},
    ]},
    'range-rover-sport':{label:'Range Rover Sport',uitv:[
      {l:'Sport D250 3.0 D 249pk',cat:118680,co2_wltp:215,co2_nedc:null,bs:'diesel',kw:183},
      {l:'Sport D300 3.0 D 300pk',cat:128680,co2_wltp:219,co2_nedc:null,bs:'diesel',kw:221},
      {l:'Sport P360 3.0 360pk',cat:138680,co2_wltp:299,co2_nedc:null,bs:'benzine',kw:265},
      {l:'Sport P400 3.0 400pk',cat:158680,co2_wltp:309,co2_nedc:null,bs:'benzine',kw:294},
      {l:'Sport P460e PHEV 460pk',cat:148680,co2_wltp:35,co2_nedc:null,bs:'hybride',kw:338},
      {l:'Sport P530 4.4 V8 530pk',cat:208680,co2_wltp:332,co2_nedc:305,bs:'benzine',kw:390},
      {l:'Sport SV Edition One 635pk',cat:268680,co2_wltp:355,co2_nedc:null,bs:'benzine',kw:467},
    ]},
  }},
  rimac:{label:'Rimac',models:{
    'nevera':{label:'Nevera',uitv:[
      {l:'Rimac Nevera Electric 1914pk',cat:2200000,co2_wltp:0,co2_nedc:null,bs:'elektrisch',kw:1408},
      {l:'Rimac Nevera Time Attack 2012pk',cat:2500000,co2_wltp:0,co2_nedc:null,bs:'elektrisch',kw:1480},
    ]},
  }},
  'rolls-royce':{label:'Rolls-Royce',models:{
    'cullinan':{label:'Cullinan',uitv:[
      {l:'Cullinan V12 571pk',cat:548000,co2_wltp:385,co2_nedc:355,bs:'benzine',kw:420},
      {l:'Cullinan Black Badge V12 612pk',cat:618000,co2_wltp:392,co2_nedc:null,bs:'benzine',kw:450},
      {l:'Cullinan Series II V12 571pk',cat:578000,co2_wltp:385,co2_nedc:null,bs:'benzine',kw:420},
    ]},
    'dawn':{label:'Dawn / Wraith',uitv:[
      {l:'Dawn V12 571pk',cat:448000,co2_wltp:null,co2_nedc:328,bs:'benzine',kw:420},
      {l:'Dawn Black Badge V12 612pk',cat:498000,co2_wltp:null,co2_nedc:332,bs:'benzine',kw:450},
      {l:'Wraith V12 624pk',cat:418000,co2_wltp:null,co2_nedc:335,bs:'benzine',kw:459},
      {l:'Wraith Black Badge V12 632pk',cat:468000,co2_wltp:null,co2_nedc:339,bs:'benzine',kw:465},
    ]},
    'ghost':{label:'Ghost',uitv:[
      {l:'Ghost V12 571pk',cat:478000,co2_wltp:355,co2_nedc:329,bs:'benzine',kw:420},
      {l:'Ghost Extended V12 571pk',cat:518000,co2_wltp:358,co2_nedc:332,bs:'benzine',kw:420},
      {l:'Ghost Black Badge V12 612pk',cat:548000,co2_wltp:362,co2_nedc:null,bs:'benzine',kw:450},
      {l:'Ghost Zenith Collection V12 571pk',cat:568000,co2_wltp:355,co2_nedc:null,bs:'benzine',kw:420},
    ]},
    'phantom':{label:'Phantom',uitv:[
      {l:'Phantom VIII V12 563pk',cat:648000,co2_wltp:369,co2_nedc:339,bs:'benzine',kw:414},
      {l:'Phantom Extended V12 563pk',cat:698000,co2_wltp:372,co2_nedc:null,bs:'benzine',kw:414},
      {l:'Phantom Tempus Collection V12 563pk',cat:748000,co2_wltp:369,co2_nedc:null,bs:'benzine',kw:414},
    ]},
    'spectre':{label:'Spectre',uitv:[
      {l:'Spectre Electric 584pk',cat:430000,co2_wltp:0,co2_nedc:null,bs:'elektrisch',kw:430},
    ]},
  }},
  toyota:{label:'Toyota',models:{
    'gr-supra':{label:'GR Supra',uitv:[
      {l:'GR Supra 2.0 Turbo 258pk',cat:58680,co2_wltp:192,co2_nedc:176,bs:'benzine',kw:190},
      {l:'GR Supra 3.0 340pk',cat:78680,co2_wltp:219,co2_nedc:201,bs:'benzine',kw:250},
      {l:'GR Supra 3.0 A90 Edition 387pk',cat:98680,co2_wltp:225,co2_nedc:null,bs:'benzine',kw:285},
      {l:'GR Supra 45th Anniversary 387pk',cat:102680,co2_wltp:225,co2_nedc:null,bs:'benzine',kw:285},
    ]},
    'gr-yaris':{label:'GR Yaris',uitv:[
      {l:'GR Yaris 1.6 261pk',cat:52680,co2_wltp:185,co2_nedc:null,bs:'benzine',kw:192},
      {l:'GR Yaris Circuit 1.6 261pk',cat:58680,co2_wltp:185,co2_nedc:null,bs:'benzine',kw:192},
    ]},
    'gr86':{label:'GR86',uitv:[
      {l:'GR86 2.4 234pk',cat:42680,co2_wltp:192,co2_nedc:176,bs:'benzine',kw:172},
      {l:'GR86 2.4 Premium 234pk',cat:46680,co2_wltp:192,co2_nedc:null,bs:'benzine',kw:172},
    ]},
    'landcruiser':{label:'Land Cruiser',uitv:[
      {l:'Land Cruiser 300 3.3 D 309pk',cat:118680,co2_wltp:249,co2_nedc:228,bs:'diesel',kw:227},
      {l:'Land Cruiser 300 GR Sport 309pk',cat:128680,co2_wltp:249,co2_nedc:null,bs:'diesel',kw:227},
    ]},
  }},
  volkswagen:{label:'Volkswagen',models:{
    'golf-r':{label:'Golf R',uitv:[
      {l:'Golf R 2.0 TSI 4Motion 333pk',cat:72680,co2_wltp:185,co2_nedc:169,bs:'benzine',kw:245},
      {l:'Golf R 20 Years 333pk',cat:78680,co2_wltp:185,co2_nedc:null,bs:'benzine',kw:245},
    ]},
    'id-family':{label:'ID.4 / ID.5 / ID.7',uitv:[
      {l:'ID.4 GTX 4Motion 299pk',cat:55000,co2_wltp:0,co2_nedc:null,bs:'elektrisch',kw:220},
      {l:'ID.5 GTX 4Motion 299pk',cat:57000,co2_wltp:0,co2_nedc:null,bs:'elektrisch',kw:220},
      {l:'ID.7 Pro S AWD 340pk',cat:68000,co2_wltp:0,co2_nedc:null,bs:'elektrisch',kw:250},
    ]},
    'touareg':{label:'Touareg',uitv:[
      {l:'Touareg R PHEV 462pk',cat:98680,co2_wltp:44,co2_nedc:null,bs:'hybride',kw:340},
      {l:'Touareg 3.0 TDI 286pk',cat:88680,co2_wltp:205,co2_nedc:188,bs:'diesel',kw:210},
    ]},
  }},
  volvo:{label:'Volvo',models:{
    'ex90':{label:'EX90',uitv:[
      {l:'EX90 Twin Motor 408pk',cat:95000,co2_wltp:0,co2_nedc:null,bs:'elektrisch',kw:300},
      {l:'EX90 Twin Motor Performance 510pk',cat:105000,co2_wltp:0,co2_nedc:null,bs:'elektrisch',kw:375},
      {l:'EX90 Ultra Twin Motor Performance 510pk',cat:118000,co2_wltp:0,co2_nedc:null,bs:'elektrisch',kw:375},
    ]},
    'polestar':{label:'Polestar',uitv:[
      {l:'Polestar 1 Hybrid 600pk',cat:155000,co2_wltp:null,co2_nedc:13,bs:'hybride',kw:441},
      {l:'Polestar 2 AWD Long Range 476pk',cat:62000,co2_wltp:0,co2_nedc:null,bs:'elektrisch',kw:350},
      {l:'Polestar 3 AWD Long Range 517pk',cat:89000,co2_wltp:0,co2_nedc:null,bs:'elektrisch',kw:380},
      {l:'Polestar 6 Electric Roadster 884pk',cat:195000,co2_wltp:0,co2_nedc:null,bs:'elektrisch',kw:650},
    ]},
    'xc60':{label:'XC60',uitv:[
      {l:'XC60 Recharge T8 PHEV 455pk',cat:88680,co2_wltp:21,co2_nedc:null,bs:'hybride',kw:335},
      {l:'XC60 Recharge T8 AWD Ultimate 455pk',cat:98680,co2_wltp:21,co2_nedc:null,bs:'hybride',kw:335},
    ]},
    'xc90':{label:'XC90',uitv:[
      {l:'XC90 Recharge T8 455pk PHEV',cat:108680,co2_wltp:22,co2_nedc:null,bs:'hybride',kw:335},
      {l:'XC90 Recharge T8 AWD Ultimate 455pk',cat:118680,co2_wltp:22,co2_nedc:null,bs:'hybride',kw:335},
      {l:'XC90 Recharge AWD Electric 310pk',cat:76000,co2_wltp:0,co2_nedc:null,bs:'elektrisch',kw:228},
    ]},
  }},
  overig:{label:'Overig',models:{
    'handmatig':{label:'Handmatig invoeren',uitv:[
      {l:'Gebruik het tabblad "Handmatig invoeren"',cat:0,co2_wltp:0,co2_nedc:null,bs:'benzine',kw:0},
    ]},
  }},
};
  
/* ══════════════════════════════════════════════════
   DATUM GRENZEN
══════════════════════════════════════════════════ */
const D_WLTP_VERPLICHT = new Date(2020,6,1);   // 1 juli 2020
const D_NEDC_ALLEEN    = new Date(2018,8,1);   // 1 september 2018
// < sept 2018: altijd NEDC
// sept 2018 – juli 2020: beide mogelijk (NEDC verplicht, WLTP optioneel)
// >= juli 2020: altijd WLTP

function getDatumMethode(d){
  if(!d) return 'onbekend';
  if(d >= D_WLTP_VERPLICHT) return 'wltp';
  if(d >= D_NEDC_ALLEEN) return 'beide';
  return 'nedc';
}

/* ══════════════════════════════════════════════════
   CO₂ VELDEN DYNAMISCH OPBOUWEN
══════════════════════════════════════════════════ */
function getCo2Value(panelId){
  // Geeft {wltp, nedc, methode} terug
  const methode = getDatumMethode(getCalDate(panelId));
  const wltpEl = document.getElementById(panelId+'-co2-wltp');
  const nedcEl = document.getElementById(panelId+'-co2-nedc');
  const wltp = wltpEl ? (parseFloat(wltpEl.value)||null) : null;
  const nedc = nedcEl ? (parseFloat(nedcEl.value)||null) : null;
  return {wltp, nedc, methode};
}

/* ══════════════════════════════════════════════════
   KALENDER + HANDMATIGE INVOER
══════════════════════════════════════════════════ */
const CS={};
let openCalId=null;

/* Handmatige datum invoer */
function onManualDateInput(id){
  const d = parseInt(document.getElementById('dp-'+id+'-d').value);
  const m = parseInt(document.getElementById('dp-'+id+'-m').value);
  const y = parseInt(document.getElementById('dp-'+id+'-y').value);

  if(d>=1 && d<=31 && m>=1 && m<=12 && y>=1990 && y<=2026){
    const dt = new Date(y, m-1, d);
    // Valideer datum (bijv. 31 feb bestaat niet)
    if(dt.getFullYear()===y && dt.getMonth()===m-1 && dt.getDate()===d){
      if(!CS[id]) CS[id]={};
      CS[id].sel = dt;
      CS[id].y = y;
      CS[id].m = m-1;
      // Visuele hint
      const hint = document.getElementById('dh-'+id);
      const mNames=['januari','februari','maart','april','mei','juni','juli','augustus','september','oktober','november','december'];
      hint.textContent = '✓ '+d+' '+mNames[m-1]+' '+y;
      hint.style.color = 'rgba(0,146,70,.7)';
      checkWltpBanner();
      renderCo2Fields(id);
      // Sync naar kalender
      if(CS[id]) renderCal(id);
    } else {
      const hint = document.getElementById('dh-'+id);
      hint.textContent = 'Ongeldige datum';
      hint.style.color = 'rgba(206,43,55,.7)';
    }
  } else if(y>=1990){
    // Nog niet compleet
    const hint = document.getElementById('dh-'+id);
    hint.textContent = 'Vul DD / MM / JJJJ in';
    hint.style.color = 'rgba(198,203,209,.22)';
  }
}

function toggleCal(event,id){
  event.stopPropagation();
  const popup=document.getElementById('cal-'+id);
  if(openCalId&&openCalId!==id){
    document.getElementById('cal-'+openCalId).classList.remove('open');
  }
  if(popup.classList.contains('open')){
    popup.classList.remove('open');
    openCalId=null;
  }else{
    if(!CS[id])initCal(id);
    popup.classList.add('open');
    openCalId=id;
  }
}

function initCal(id){
  const n=new Date();
  if(!CS[id])CS[id]={};
  CS[id].y=n.getFullYear();
  CS[id].m=n.getMonth();
  CS[id].view='days';
  if(!CS[id].sel)CS[id].sel=null;
  renderCal(id);
}

function renderCal(id){
  const s=CS[id];
  if(!s)return;
  const n=new Date();
  const mf=['januari','februari','maart','april','mei','juni','juli','augustus','september','oktober','november','december'];
  const ms=['ma','di','wo','do','vr','za','zo'];
  const msShort=['jan','feb','mrt','apr','mei','jun','jul','aug','sep','okt','nov','dec'];
  const popup=document.getElementById('cal-'+id);
  if(!popup)return;

  let hdr='';
  if(s.view==='days') hdr=mf[s.m]+' '+s.y;
  else if(s.view==='months') hdr=String(s.y);
  else hdr='Selecteer jaar';

  // Snel-navigatie: jaar direct invoeren
  let quickHtml='';
  if(s.view==='days'){
    quickHtml=`<div class="cal-quick">
      <div class="cal-quick-field">
        <span class="cal-quick-label">Maand</span>
        <select class="cal-quick-input" onchange="calQuickMonth(event,'${id}',this.value)">
          ${mf.map((m,i)=>`<option value="${i}"${i===s.m?' selected':''}>${m}</option>`).join('')}
        </select>
      </div>
      <div class="cal-quick-field yr">
        <span class="cal-quick-label">Jaar</span>
        <input class="cal-quick-input" type="number" min="1990" max="2026" value="${s.y}"
          onchange="calQuickYear(event,'${id}',this.value)"
          onkeydown="if(event.key==='Enter')calQuickYear(event,'${id}',this.value)">
      </div>
    </div>`;
  }

  let h=`<div class="cal-header">
    <button class="cal-nav" onclick="calNav(event,'${id}',-1)"><svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg></button>
    <span class="cal-month-year" onclick="calToggleView(event,'${id}')">${hdr}</span>
    <button class="cal-nav" onclick="calNav(event,'${id}',1)"><svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg></button>
  </div>${quickHtml}<div class="cal-view">`;

  if(s.view==='days'){
    h+=`<div class="cal-weekdays">`;
    ms.forEach(d=>h+=`<div class="cal-wd">${d}</div>`);
    h+=`</div><div class="cal-days">`;
    const fd=new Date(s.y,s.m,1);
    let dow=fd.getDay()-1;if(dow<0)dow=6;
    const dim=new Date(s.y,s.m+1,0).getDate();
    const pdim=new Date(s.y,s.m,0).getDate();
    for(let i=dow-1;i>=0;i--)
      h+=`<button class="cal-day other-month" disabled>${pdim-i}</button>`;
    for(let d=1;d<=dim;d++){
      const fut=new Date(s.y,s.m,d)>n;
      const tod=d===n.getDate()&&s.m===n.getMonth()&&s.y===n.getFullYear();
      const sel=s.sel&&d===s.sel.getDate()&&s.m===s.sel.getMonth()&&s.y===s.sel.getFullYear();
      let cl='cal-day';
      if(tod)cl+=' today';
      if(sel)cl+=' selected';
      if(fut)cl+=' future';
      if(fut)h+=`<button class="${cl}" disabled>${d}</button>`;
      else h+=`<button class="${cl}" onclick="calSel(event,'${id}',${s.y},${s.m},${d})">${d}</button>`;
    }
    const tot=dow+dim;const rem=tot%7===0?0:7-tot%7;
    for(let d=1;d<=rem;d++)h+=`<button class="cal-day other-month" disabled>${d}</button>`;
    h+=`</div>`;
  }else if(s.view==='months'){
    h+=`<div class="cal-months-grid">`;
    msShort.forEach((m,i)=>{
      const fut=s.y>n.getFullYear()||(s.y===n.getFullYear()&&i>n.getMonth());
      const sel=s.sel&&i===s.sel.getMonth()&&s.y===s.sel.getFullYear();
      const cur=i===n.getMonth()&&s.y===n.getFullYear()&&!sel;
      let cl='cal-m';if(sel)cl+=' active';if(cur)cl+=' cur-m';
      if(fut)h+=`<button class="${cl}" disabled>${m}</button>`;
      else h+=`<button class="${cl}" onclick="calSelM(event,'${id}',${i})">${m}</button>`;
    });
    h+=`</div>`;
  }else{
    // Years view — toon grotere range (1990-2026)
    const base=Math.floor(s.y/12)*12;
    h+=`<div class="cal-years-grid">`;
    for(let y=base;y<base+12;y++){
      const fut=y>n.getFullYear();
      const tooOld=y<1990;
      const sel=s.sel&&y===s.sel.getFullYear();
      const cur=y===n.getFullYear()&&!sel;
      let cl='cal-y';if(sel)cl+=' active';if(cur)cl+=' cur-y';
      if(fut||tooOld)h+=`<button class="${cl}" disabled>${y}</button>`;
      else h+=`<button class="${cl}" onclick="calSelY(event,'${id}',${y})">${y}</button>`;
    }
    h+=`</div>`;
  }
  h+=`</div><div class="cal-footer">
    <button class="cal-fb cal-tod" onclick="calToday(event,'${id}')">Vandaag</button>
    <button class="cal-fb cal-clr" onclick="calClear(event,'${id}')">Wissen</button>
  </div>`;
  popup.innerHTML=h;
}

/* Snel-navigatie handlers */
function calQuickMonth(e,id,val){
  e.stopPropagation();
  CS[id].m=parseInt(val);
  CS[id].view='days';
  renderCal(id);
}
function calQuickYear(e,id,val){
  e.stopPropagation();
  const y=parseInt(val);
  if(y>=1990&&y<=2026){
    CS[id].y=y;
    CS[id].view='days';
    renderCal(id);
  }
}

/* Cal nav handlers */
function calNav(e,id,d){
  e.stopPropagation();
  const s=CS[id];
  if(s.view==='days'){
    s.m+=d;
    if(s.m<0){s.m=11;s.y--;}
    if(s.m>11){s.m=0;s.y++;}
  }else if(s.view==='months'){
    s.y+=d;
  }else{
    s.y+=d*12;
  }
  renderCal(id);
}

function calToggleView(e,id){
  e.stopPropagation();
  const s=CS[id];
  s.view=s.view==='days'?'months':s.view==='months'?'years':'days';
  renderCal(id);
}

function calSelM(e,id,m){
  e.stopPropagation();
  CS[id].m=m;CS[id].view='days';renderCal(id);
}

function calSelY(e,id,y){
  e.stopPropagation();
  CS[id].y=y;CS[id].view='months';renderCal(id);
}

function calSel(e,id,y,m,d){
  e.stopPropagation();
  CS[id].sel=new Date(y,m,d);
  renderCal(id);
  syncCalToManualInputs(id,CS[id].sel);
  // Sluit na selectie
  document.getElementById('cal-'+id).classList.remove('open');
  openCalId=null;
  checkWltpBanner();
  renderCo2Fields(id);
}

function calToday(e,id){
  e.stopPropagation();
  const n=new Date();
  CS[id].y=n.getFullYear();
  CS[id].m=n.getMonth();
  CS[id].view='days';
  renderCal(id);
}

function calClear(e,id){
  e.stopPropagation();
  CS[id].sel=null;
  renderCal(id);
  document.getElementById('dp-'+id+'-d').value='';
  document.getElementById('dp-'+id+'-m').value='';
  document.getElementById('dp-'+id+'-y').value='';
  const hint=document.getElementById('dh-'+id);
  hint.textContent='Vul handmatig in (DD/MM/JJJJ) of gebruik de kalender';
  hint.style.color='rgba(198,203,209,.22)';
  document.getElementById('cal-'+id).classList.remove('open');
  openCalId=null;
  checkWltpBanner();
  renderCo2Fields(id);
}


/* Synchroniseer kalender-selectie naar de handmatige invoervelden */
function syncCalToManualInputs(id,dt){
  document.getElementById('dp-'+id+'-d').value=dt.getDate();
  document.getElementById('dp-'+id+'-m').value=dt.getMonth()+1;
  document.getElementById('dp-'+id+'-y').value=dt.getFullYear();
  const hint=document.getElementById('dh-'+id);
  const mNames=['januari','februari','maart','april','mei','juni','juli','augustus','september','oktober','november','december'];
  hint.textContent='✓ '+dt.getDate()+' '+mNames[dt.getMonth()]+' '+dt.getFullYear();
  hint.style.color='rgba(0,146,70,.7)';
}

function getCalDate(id){
  return CS[id]&&CS[id].sel?CS[id].sel:null;
}

/* Sluit kalender als men buiten klikt */
document.addEventListener('click',function(){
  if(openCalId){
    document.getElementById('cal-'+openCalId).classList.remove('open');
    openCalId=null;
  }
});

/* ══════════════════════════════════════════════════
   WLTP BANNER
══════════════════════════════════════════════════ */
let currentTab='auto';

function checkWltpBanner(){
  const id=currentTab==='auto'?'auto':'man';
  const d=getCalDate(id);
  const b=document.getElementById('wltp-banner');
  if(!d){b.style.display='none';return;}
  const methode=getDatumMethode(d);
  b.style.display='flex';

  if(methode==='wltp'){
    document.getElementById('wltp-banner-title').textContent='WLTP verplicht — toelating ≥ 1 juli 2020';
    document.getElementById('wltp-banner-body').textContent=
      'Datum eerste toelating op of na 1 juli 2020. Altijd de WLTP-CO₂-waarde gebruiken. Deze staat op het kentekenbewijs of typegoedkeuringsdocument.';
    b.style.background='rgba(196,154,0,.04)';
    b.style.borderColor='rgba(196,154,0,.22)';
    b.querySelector('svg').style.stroke='rgba(196,154,0,.7)';
    b.querySelector('.wltp-banner-text').style.color='rgba(196,154,0,.75)';
    b.querySelector('strong').style.color='rgba(196,154,0,.9)';
  } else if(methode==='nedc'){
    document.getElementById('wltp-banner-title').textContent='NEDC verplicht — toelating vóór 1 september 2018';
    document.getElementById('wltp-banner-body').textContent=
      'Datum eerste toelating vóór 1 september 2018. Altijd de NEDC-CO₂-waarde invullen. BPM wordt berekend via de forfaitaire afschrijvingstabel op de cataloguswaarde.';
    b.style.background='rgba(198,203,209,.03)';
    b.style.borderColor='rgba(198,203,209,.15)';
    b.querySelector('svg').style.stroke='rgba(198,203,209,.5)';
    b.querySelector('.wltp-banner-text').style.color='rgba(198,203,209,.6)';
    b.querySelector('strong').style.color='rgba(198,203,209,.8)';
  } else if(methode==='beide'){
    document.getElementById('wltp-banner-title').textContent='Overgangsperiode — 1 sept. 2018 t/m 30 juni 2020';
    document.getElementById('wltp-banner-body').textContent=
      'Datum eerste toelating valt in de overgangsperiode. NEDC is verplicht. Als WLTP ook bekend is, worden automatisch twee berekeningen gemaakt (één op NEDC, één op WLTP).';
    b.style.background='rgba(0,146,70,.04)';
    b.style.borderColor='rgba(0,146,70,.2)';
    b.querySelector('svg').style.stroke='rgba(0,146,70,.6)';
    b.querySelector('.wltp-banner-text').style.color='rgba(0,146,70,.65)';
    b.querySelector('strong').style.color='rgba(0,146,70,.85)';
  }
}

/* ══════════════════════════════════════════════════
   TABS / SEGMENT / SLIDER
══════════════════════════════════════════════════ */
function switchTab(t){
  currentTab=t;
  document.getElementById('tab-auto').classList.toggle('active',t==='auto');
  document.getElementById('tab-manual').classList.toggle('active',t==='manual');
  document.getElementById('panel-auto').style.display=t==='auto'?'block':'none';
  document.getElementById('panel-manual').style.display=t==='manual'?'block':'none';
  checkWltpBanner();
  renderCo2Fields(t==='auto'?'auto':'man');
}

function setSeg(btn,g){
  document.querySelectorAll('#'+g+' .seg-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
}

function getSegVal(g){
  const a=document.querySelector('#'+g+' .seg-btn.active');
  return a?a.dataset.val:'benzine';
}

function syncInput(p){
  const v=parseInt(document.getElementById(p+'-sl').value);
  document.getElementById(p+'-cat').value=v;
  document.getElementById(p+'-sv').textContent='€ '+v.toLocaleString('nl-NL');
}

function updateSlider(p){
  const v=parseInt(document.getElementById(p+'-cat').value)||0;
  const c=Math.min(600000,Math.max(5000,v||5000));
  document.getElementById(p+'-sl').value=c;
  document.getElementById(p+'-sv').textContent=v?'€ '+v.toLocaleString('nl-NL'):'€ 0';
}

/* ══════════════════════════════════════════════════
   CASCADE MERK → MODEL → UITVOERING
══════════════════════════════════════════════════ */
function onMerkChange(){
  const m=document.getElementById('sel-merk').value;
  const ms=document.getElementById('sel-model');
  const us=document.getElementById('sel-uitvoering');
  ms.innerHTML='<option value="">Selecteer model…</option>';
  us.innerHTML='<option value="">Selecteer eerst model…</option>';
  ms.disabled=true;us.disabled=true;
  clearAutoFields();
  if(!m||!DB[m])return;
  Object.entries(DB[m].models).forEach(([k,v])=>{
    const o=document.createElement('option');o.value=k;o.textContent=v.label;ms.appendChild(o);
  });
  ms.disabled=false;
}

function onModelChange(){
  const m=document.getElementById('sel-merk').value;
  const mod=document.getElementById('sel-model').value;
  const us=document.getElementById('sel-uitvoering');
  us.innerHTML='<option value="">Selecteer uitvoering…</option>';
  us.disabled=true;clearAutoFields();
  if(!m||!mod||!DB[m]||!DB[m].models[mod])return;
  DB[m].models[mod].uitv.forEach((u,i)=>{
    const o=document.createElement('option');o.value=i;o.textContent=u.l;us.appendChild(o);
  });
  us.disabled=false;
}

function onUitvoeringChange(){
  const m=document.getElementById('sel-merk').value;
  const mod=document.getElementById('sel-model').value;
  const idx=document.getElementById('sel-uitvoering').value;
  if(!m||!mod||idx==='')return;
  const u=DB[m].models[mod].uitv[parseInt(idx)];
  if(!u||u.cat===0)return;
  document.getElementById('auto-cat').value=u.cat;
  updateSlider('auto');
  // Sla co2 op voor later gebruik
  window._pendingCo2={wltp:u.co2_wltp,nedc:u.co2_nedc};
  // Probeer direct in te vullen als velden al bestaan
  _fillCo2Fields('auto');
}

function _fillCo2Fields(id){
  if(!window._pendingCo2)return;
  const wltpEl=document.getElementById(id+'-co2-wltp');
  const nedcEl=document.getElementById(id+'-co2-nedc');
  if(wltpEl&&window._pendingCo2.wltp!=null)wltpEl.value=window._pendingCo2.wltp;
  if(nedcEl&&window._pendingCo2.nedc!=null)nedcEl.value=window._pendingCo2.nedc;
}

function clearAutoFields(){
  document.getElementById('auto-cat').value='';
  document.getElementById('auto-sv').textContent='€ 0';
  document.getElementById('auto-sl').value=150000;
}

/* ══════════════════════════════════════════════════
   OFFICIËLE BPM TARIEVEN — BELASTINGDIENST
   Exact overgenomen uit tarievenlijst Belastingdienst
══════════════════════════════════════════════════ */

/* 2026 WLTP benzine/hybride
   I=0→77: €687+€2/g | 77→100: €841+€82/g | 100→139: €2727+€181/g
   139→155: €9786+€297/g | >155: €14538+€594/g */
function wltpBpmBenzine2026(co2){
  if(co2<=0) return 687;
  let b=0;
  if(co2<=77)       b=687+(co2-0)*2;
  else if(co2<=100) b=841+(co2-77)*82;
  else if(co2<=139) b=2727+(co2-100)*181;
  else if(co2<=155) b=9786+(co2-139)*297;
  else              b=14538+(co2-155)*594;
  return Math.round(b);
}

/* 2026 WLTP diesel: benzine + dieseltoeslag €114,83/g boven 69g */
function wltpBpmDiesel2026(co2){
  if(co2<=0) return 687;
  const base = wltpBpmBenzine2026(co2);
  const toeslag = co2>69 ? Math.round((co2-69)*114.83) : 0;
  return base + toeslag;
}

/* NEDC BPM 2026 — benzine/hybride */
function nedcBpmBenzine2026(co2){
  if(co2<=0) return 360;
  let b=0;
  if(co2<=71)       b=360+co2*2;
  else if(co2<=95)  b=502+(co2-71)*60;
  else if(co2<=139) b=1942+(co2-95)*131;
  else if(co2<=156) b=7706+(co2-139)*215;
  else              b=11361+(co2-156)*429;
  return Math.round(b);
}

function nedcBpmDiesel2026(co2){
  if(co2<=0) return 360;
  const base = nedcBpmBenzine2026(co2);
  const toeslag = co2>61 ? Math.round((co2-61)*88.43) : 0;
  return base + toeslag;
}

function calcBpmCo2(co2,bs,norm){
  if(bs==='elektrisch') return 0;
  if(norm==='wltp'){
    if(bs==='diesel') return wltpBpmDiesel2026(co2);
    return wltpBpmBenzine2026(co2);
  } else {
    if(bs==='diesel') return nedcBpmDiesel2026(co2);
    return nedcBpmBenzine2026(co2);
  }
}

/* ══════════════════════════════════════════════════
   HISTORISCHE TARIEVEN PER JAAR — EXACT BELASTINGDIENST
══════════════════════════════════════════════════ */
function calcBpmHistorisch(co2, bs, norm, jaar){
  if(bs==='elektrisch') return 0;
  if(jaar >= 2026) return calcBpmCo2(co2, bs, norm);

  function benzineWltp(co2, j){
    let b=0;
    if(j<=2019){
      if(co2<=71)       b=360+co2*2;
      else if(co2<=95)  b=502+(co2-71)*60;
      else if(co2<=139) b=1942+(co2-95)*131;
      else if(co2<=156) b=7706+(co2-139)*215;
      else              b=11361+(co2-156)*429;
    } else if(j===2020){
      if(co2<=90)        b=366+co2*1;
      else if(co2<=116)  b=456+(co2-90)*57;
      else if(co2<=162)  b=1938+(co2-116)*124;
      else if(co2<=180)  b=7642+(co2-162)*204;
      else               b=11314+(co2-180)*408;
    } else if(j===2021){
      if(co2<=86)        b=372+co2*1;
      else if(co2<=111)  b=458+(co2-86)*60;
      else if(co2<=155)  b=1958+(co2-111)*132;
      else if(co2<=172)  b=7766+(co2-155)*216;
      else               b=11438+(co2-172)*432;
    } else if(j===2022){
      if(co2<=84)        b=376+co2*1;
      else if(co2<=109)  b=460+(co2-84)*62;
      else if(co2<=152)  b=2010+(co2-109)*137;
      else if(co2<=168)  b=7901+(co2-152)*224;
      else               b=11485+(co2-168)*448;
    } else if(j===2023){
      if(co2<=82)        b=400+co2*2;
      else if(co2<=106)  b=564+(co2-82)*68;
      else if(co2<=148)  b=2196+(co2-106)*149;
      else if(co2<=165)  b=8454+(co2-148)*244;
      else               b=12602+(co2-165)*488;
    } else if(j===2024){
      if(co2<=80)        b=440+co2*2;
      else if(co2<=104)  b=600+(co2-80)*76;
      else if(co2<=145)  b=2424+(co2-104)*167;
      else if(co2<=161)  b=9271+(co2-145)*274;
      else               b=13655+(co2-161)*549;
    } else if(j===2025){
      if(co2<=79)        b=667+co2*2;
      else if(co2<=101)  b=825+(co2-79)*79;
      else if(co2<=141)  b=2563+(co2-101)*173;
      else if(co2<=157)  b=9483+(co2-141)*284;
      else               b=14027+(co2-157)*568;
    }
    return Math.round(b);
  }

  function dieselToeslag(co2, j){
    const toeslagDrempel = {2019:61, 2020:80, 2021:77, 2022:75, 2023:73, 2024:71, 2025:70};
    const toeslagBedrag = {2019:88.43, 2020:78.82, 2021:83.59, 2022:86.67, 2023:94.30, 2024:106.07, 2025:109.87};
    const jaar2 = Math.min(j, 2025);
    const drempel = toeslagDrempel[jaar2] || 70;
    const bedrag = toeslagBedrag[jaar2] || 109.87;
    return co2 > drempel ? Math.round((co2 - drempel) * bedrag) : 0;
  }

  function benzineNedc(co2, j){
    let b=0;
    if(j<=2018){
      if(co2<=73)        b=356+co2*2;
      else if(co2<=98)   b=502+(co2-73)*63;
      else if(co2<=144)  b=2077+(co2-98)*139;
      else if(co2<=162)  b=8471+(co2-144)*229;
      else               b=12593+(co2-162)*458;
    } else if(j===2019){
      if(co2<=71)        b=360+co2*2;
      else if(co2<=95)   b=502+(co2-71)*60;
      else if(co2<=139)  b=1942+(co2-95)*131;
      else if(co2<=156)  b=7706+(co2-139)*215;
      else               b=11361+(co2-156)*429;
    } else {
      if(co2<=68)        b=366+co2*2;
      else if(co2<=91)   b=502+(co2-68)*59;
      else if(co2<=133)  b=1859+(co2-91)*129;
      else if(co2<=150)  b=7277+(co2-133)*212;
      else               b=10881+(co2-150)*424;
    }
    return Math.round(b);
  }

  if(norm==='wltp'){
    const base = benzineWltp(co2, jaar);
    if(bs==='diesel') return base + dieselToeslag(co2, jaar);
    return base;
  } else {
    const base = benzineNedc(co2, jaar);
    if(bs==='diesel'){
      const toeslagDrempelNedc = {2018:63, 2019:61, 2020:59};
      const toeslagBedragNedc = {2018:87.38, 2019:88.43, 2020:89.85};
      const j2 = Math.min(jaar, 2020);
      const drempel = toeslagDrempelNedc[j2] || 59;
      const bedrag = toeslagBedragNedc[j2] || 89.85;
      const toeslag = co2 > drempel ? Math.round((co2-drempel)*bedrag) : 0;
      return base + toeslag;
    }
    return base;
  }
}

/* ══════════════════════════════════════════════════
   OFFICIËLE FORFAITAIRE AFSCHRIJVINGSTABEL
   Bron: Belastingdienst.nl — exact overgenomen
══════════════════════════════════════════════════ */
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

/* Maanden vanaf toelatingsdatum berekenen in een specifiek jaar */
function getMaandenOpJaar(datum,jaar){
  const now = new Date();
  // Gebruik 31 december van het opgegeven jaar, of vandaag als dat eerder is
  const eindDatum = new Date(Math.min(new Date(jaar,11,31).getTime(), now.getTime()));
  
  let maanden = (eindDatum.getFullYear() - datum.getFullYear()) * 12 
                + (eindDatum.getMonth() - datum.getMonth());
  
  // Tel gedeeltelijke maand mee (Belastingdienst telt elke begonnen maand)
  if(eindDatum.getDate() > datum.getDate()) maanden += 1;
  
  return Math.max(0, maanden);
}

function calcWB(massa,bs){
  const kg=parseInt(massa)||1200;const hk=Math.ceil(kg/100);
  let basis=bs==='diesel'?Math.round(hk*22.5+85):bs==='elektrisch'?0:Math.round(hk*14.8+55);
  const opc={GRONINGEN:116,FRIESLAND:114,DRENTHE:114,OVERIJSSEL:110,FLEVOLAND:111,GELDERLAND:117,UTRECHT:112,'NOORD HOLLAND':110,'ZUID HOLLAND':120,'ZEELAND':111,'NOORD BRABANT':112,'LIMBURG':113};
  const r={};Object.keys(opc).forEach(p=>r[p]=Math.round(basis*(1+opc[p]/100)));return r;
}

function co2KL(c,bs){
  if(bs==='elektrisch')return{k:'A+',s:'Nul-emissie',col:'#009246',w:0};
  const v=parseFloat(c)||0;
  if(v<=100)return{k:'A',s:'Zeer zuinig',col:'#009246',w:v/400*100};
  if(v<=130)return{k:'B',s:'Zuinig',col:'#4a9a3a',w:v/400*100};
  if(v<=155)return{k:'C',s:'Gemiddeld',col:'#c49a00',w:v/400*100};
  if(v<=185)return{k:'D',s:'Gemiddeld-hoog',col:'#d07000',w:v/400*100};
  if(v<=225)return{k:'E',s:'Hoog verbruik',col:'#d04000',w:Math.min(v/400*100,100)};
  if(v<=300)return{k:'F',s:'Zeer hoog verbruik',col:'#CE2B37',w:Math.min(v/400*100,100)};
  return{k:'G',s:'Extreem hoog verbruik',col:'#CE2B37',w:100};
}

/* ══════════════════════════════════════════════════
   CHART
══════════════════════════════════════════════════ */
function drawChart(canvas,mPos,grondslag){
  const W=canvas.offsetWidth||760,H=175;
  canvas.width=W*devicePixelRatio;
  canvas.height=H*devicePixelRatio;
  canvas.style.width=W+'px';
  canvas.style.height=H+'px';
  const ctx=canvas.getContext('2d');
  ctx.scale(devicePixelRatio,devicePixelRatio);
  const pad={t:14,r:18,b:28,l:62};
  const gW=W-pad.l-pad.r,gH=H-pad.t-pad.b;
  const pts=[];
  for(let m=0;m<=180;m+=2)pts.push({m,v:grondslag*getBpmPct(m)});
  const maxY=grondslag;
  const px=m=>pad.l+(m/180)*gW;
  const py=v=>pad.t+gH-(v/maxY)*gH;
  ctx.strokeStyle='rgba(198,203,209,.05)';
  ctx.lineWidth=1;
  for(let i=0;i<=4;i++){
    const y=pad.t+gH/4*i;
    ctx.beginPath();ctx.moveTo(pad.l,y);ctx.lineTo(pad.l+gW,y);ctx.stroke();
  }
  const gr=ctx.createLinearGradient(0,pad.t,0,pad.t+gH);
  gr.addColorStop(0,'rgba(0,146,70,.16)');
  gr.addColorStop(1,'rgba(0,146,70,0)');
  ctx.beginPath();
  ctx.moveTo(px(0),py(pts[0].v));
  pts.forEach(p=>ctx.lineTo(px(p.m),py(p.v)));
  ctx.lineTo(px(180),pad.t+gH);
  ctx.lineTo(px(0),pad.t+gH);
  ctx.closePath();
  ctx.fillStyle=gr;
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(px(0),py(pts[0].v));
  pts.forEach(p=>ctx.lineTo(px(p.m),py(p.v)));
  ctx.strokeStyle='rgba(0,146,70,.7)';
  ctx.lineWidth=1.5;
  ctx.stroke();
  const cx=px(mPos),cy=py(grondslag*getBpmPct(mPos));
  ctx.beginPath();ctx.moveTo(cx,pad.t);ctx.lineTo(cx,pad.t+gH);
  ctx.strokeStyle='rgba(198,203,209,.18)';
  ctx.lineWidth=1;
  ctx.setLineDash([3,3]);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.beginPath();ctx.arc(cx,cy,6,0,Math.PI*2);
  ctx.fillStyle='rgba(8,8,8,.88)';ctx.fill();
  ctx.strokeStyle='#c6cbd1';ctx.lineWidth=2;ctx.stroke();
  ctx.beginPath();ctx.arc(cx,cy,2.5,0,Math.PI*2);
  ctx.fillStyle='#c6cbd1';ctx.fill();
  ctx.fillStyle='rgba(198,203,209,.22)';
  ctx.font='9px Oswald,sans-serif';
  ctx.textAlign='right';
  for(let i=0;i<=4;i++){
    const v=maxY/4*i;
    ctx.fillText(v>=1000?'€'+(v/1000).toFixed(0)+'K':'€'+v.toFixed(0),pad.l-5,py(v)+3);
  }
  ctx.textAlign='center';
  [0,24,48,72,96,120,144,168].forEach(m=>{
    ctx.fillText(m+'mnd',px(m),H-5);
  });
  ctx.fillStyle='rgba(198,203,209,.8)';
  ctx.font='bold 11px sans-serif';
  ctx.textAlign='center';
  ctx.fillText('▲',cx,cy-13);
}

/* ══════════════════════════════════════════════════
   HELPERS
══════════════════════════════════════════════════ */
function fE(n){return'€ '+Math.round(n).toLocaleString('nl-NL');}
function cap(s){return s?s.charAt(0).toUpperCase()+s.slice(1).toLowerCase():'—';}
function mLabel(m){
  if(m===999)return '+';
  if(m<12)return m+'mnd';
  const jr=Math.floor(m/12);
  const mn=m%12;
  return jr+'jr'+(mn?' '+mn+'mnd':'');
}

/* ══════════════════════════════════════════════════
   HOOFD BEREKENING
══════════════════════════════════════════════════ */
function resetAll(){
  document.getElementById('sel-merk').value='';
  const ms=document.getElementById('sel-model');
  ms.innerHTML='<option value="">Selecteer eerst merk…</option>';
  ms.disabled=true;
  const us=document.getElementById('sel-uitvoering');
  us.innerHTML='<option value="">Selecteer eerst model…</option>';
  us.disabled=true;
  clearAutoFields();
  ['man-cat','man-kw','man-massa','auto-massa'].forEach(id=>{
    const el=document.getElementById(id);if(el)el.value='';
  });
  document.getElementById('man-sv').textContent='€ 0';
  document.getElementById('man-sl').value=100000;
  document.querySelectorAll('#seg-bs .seg-btn').forEach(b=>b.classList.remove('active'));
  const firstBS=document.querySelector('#seg-bs .seg-btn[data-val="benzine"]');
  if(firstBS)firstBS.classList.add('active');
  // Reset datum velden
  ['auto','man'].forEach(id=>{
    if(CS[id]){
      CS[id].sel=null;
      CS[id].view='days';
      const n=new Date();
      CS[id].y=n.getFullYear();
      CS[id].m=n.getMonth();
      renderCal(id);
    }
    ['d','m','y'].forEach(part=>{
      const el=document.getElementById('dp-'+id+'-'+part);
      if(el)el.value='';
    });
    const hint=document.getElementById('dh-'+id);
    if(hint){hint.textContent='Vul handmatig in (DD/MM/JJJJ) of gebruik de kalender';hint.style.color='rgba(198,203,209,.22)';}
    const popup=document.getElementById('cal-'+id);
    if(popup)popup.classList.remove('open');
    // Reset CO₂ velden
    renderCo2Fields(id);
  });
  openCalId=null;
  document.getElementById('wltp-banner').style.display='none';
  document.getElementById('result-wrap').classList.remove('show');
  document.getElementById('co2-info').classList.remove('show');
  document.getElementById('dual-calc-wrap').style.display='none';
  document.getElementById('empty-state').style.display='block';
  window.scrollTo({top:0,behavior:'smooth'});
}

/* ══════════════════════════════════════════════════
   INIT — CO₂ velden direct renderen
══════════════════════════════════════════════════ */
(function init(){
  renderCo2Fields('auto');
  renderCo2Fields('man');
})();

/* ══════════════════════════════════════════════════
   REVEAL OBSERVER
══════════════════════════════════════════════════ */
const io=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(!e.isIntersecting)return;
    io.unobserve(e.target);
    e.target.classList.add('in');
    if(e.target.classList.contains('ey'))e.target.classList.add('tri-in');
    e.target.querySelectorAll&&
      e.target.querySelectorAll('.ey').forEach(ey=>
        setTimeout(()=>ey.classList.add('tri-in'),160)
      );
  });
},{threshold:.06});
document.querySelectorAll('.rv,.ey').forEach(el=>io.observe(el));
  
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
