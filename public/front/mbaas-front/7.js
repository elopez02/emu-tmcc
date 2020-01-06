(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/ngx-device-detector/fesm2015/ngx-device-detector.js":
/*!**************************************************************************!*\
  !*** ./node_modules/ngx-device-detector/fesm2015/ngx-device-detector.js ***!
  \**************************************************************************/
/*! exports provided: BROWSERS, BROWSERS_RE, BROWSER_VERSIONS_RE, BROWSER_VERSIONS_RE_MAP, DEVICES, DEVICES_RE, DeviceDetectorModule, DeviceDetectorService, MOBILES, OS, OS_RE, OS_VERSIONS, OS_VERSIONS_RE, ReTree, TABLETS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BROWSERS", function() { return BROWSERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BROWSERS_RE", function() { return BROWSERS_RE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BROWSER_VERSIONS_RE", function() { return BROWSER_VERSIONS_RE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BROWSER_VERSIONS_RE_MAP", function() { return BROWSER_VERSIONS_RE_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEVICES", function() { return DEVICES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEVICES_RE", function() { return DEVICES_RE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceDetectorModule", function() { return DeviceDetectorModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceDetectorService", function() { return DeviceDetectorService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOBILES", function() { return MOBILES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OS", function() { return OS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OS_RE", function() { return OS_RE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OS_VERSIONS", function() { return OS_VERSIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OS_VERSIONS_RE", function() { return OS_VERSIONS_RE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReTree", function() { return ReTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLETS", function() { return TABLETS; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");




/**
 * Created by ahsanayaz on 08/11/2016.
 */
const BROWSERS = {
    CHROME: 'Chrome',
    FIREFOX: 'Firefox',
    SAFARI: 'Safari',
    OPERA: 'Opera',
    IE: 'IE',
    MS_EDGE: 'MS-Edge',
    MS_EDGE_CHROMIUM: 'MS-Edge-Chromium',
    FB_MESSANGER: 'FB-Messanger',
    SAMSUNG: 'Samsung',
    UCBROWSER: 'UC-Browser',
    UNKNOWN: 'Unknown'
};
const DEVICES = {
    CHROME_BOOK: 'Chrome-Book',
    PS4: 'PS4',
    CHROMECAST: 'Chromecast',
    APPLE_TV: 'Apple-TV',
    GOOGLE_TV: 'Google-TV',
    UNKNOWN: 'Unknown'
};
const MOBILES = {
    ANDROID: '\\bAndroid\\b|\\bMobile\\b',
    VITA: '\\bVita\\b',
    FIREFOX_OS: '\\bFirefox-OS\\b',
    IPHONE: '\\biPhone\\b|\\biPod\\b',
    BLACKBERRY: '\\bBlackBerry\\b|\\bBB10\\b|rim[0-9]+',
    WINDOWS_PHONE: '\\bWindows-Phone\\b',
    HTC: `HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|
        APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|
        ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\\bEVO\\b|T-Mobile G1|Z520m|Android [0-9.]+; Pixel`,
    NEXUS: `Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 6`,
    DELL: 'Dell[;]? (Streak|Aero|Venue|Venue Pro|Flash|Smoke|Mini 3iX)|XCD28|XCD35|\\b001DL\\b|\\b101DL\\b|\\bGS01\\b',
    MOTOROLA: `Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|
        A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|
        MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|
        ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|
        WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|
        XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|
        XT910|XT912|XT928|XT926|XT915|XT919|XT925|XT1021|\\bMoto E\\b|XT1068|XT1092|XT1052`,
    SAMSUNG: `\\bSamsung\\b|SM-G950F|SM-G955F|SM-G9250|GT-19300|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|
        GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|
        GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|
        GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|
        GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|
        GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|
        GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|
        GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|
        GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|
        GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|
        GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|
        GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|
        GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|
        GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|
        GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|
        GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|
        GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|
        GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|
        SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|
        SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|
        SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|
        SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|
        SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|
        SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|
        SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|
        SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|
        SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|
        SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|
        SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|
        SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|
        SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|
        SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|
        SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|
        SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|
        SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|
        SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|
        SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|
        SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|
        SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|
        SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|
        SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|
        SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|
        SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|
        SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|
        SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|
        SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|
        SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|
        SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|
        SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|
        GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|
        GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|
        GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|
        SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|
        SM-G900W8|SHV-E160K|SCH-P709|SCH-P729|SM-T2558|GT-I9205|SM-G9350|SM-J120F|SM-G920F|SM-G920V|SM-G930F|
        SM-N910C|SM-A310F|GT-I9190|SM-J500FN|SM-G903F|SM-J330F`,
    LG: `\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|
        LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|
        C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|
        LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|
        VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802|
        MS323|M257)`,
    SONY: 'SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533',
    ASUS: 'Asus.*Galaxy|PadFone.*Mobile',
    NOKIA_LUMIA: 'Lumia [0-9]{3,4}',
    MICROMAX: 'Micromax.*\\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\\b',
    PALM: 'PalmSource|Palm',
    VERTU: 'Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature',
    PANTECH: `PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|
        IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|
        IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|
        CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|
        P2000|P7040|P7000|C790`,
    FLY: 'IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250',
    WIKO: `KITE 4G|HIGHWAY|GETAWAY|STAIRWAY|DARKSIDE|DARKFULL|DARKNIGHT|DARKMOON|SLIDE|WAX 4G|RAINBOW|BLOOM|
        SUNSET|GOA(?!nna)|LENNY|BARRY|IGGY|OZZY|CINK FIVE|CINK PEAX|CINK PEAX 2|CINK SLIM|CINK SLIM 2|CINK +|
        CINK KING|CINK PEAX|CINK SLIM|SUBLIM`,
    I_MOBILE: 'i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)',
    SIMVALLEY: '\\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\\b',
    WOLFGANG: 'AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q',
    ALCATEL: 'Alcatel',
    NINTENDO: 'Nintendo (3DS|Switch)',
    AMOI: 'Amoi',
    INQ: 'INQ',
    GENERIC_PHONE: `Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|
        up.link|vodafone|\\bwap\\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser`,
};
const TABLETS = {
    iPad: 'iPad|iPad.*Mobile',
    NexusTablet: 'Android.*Nexus[\\s]+(7|9|10)',
    GoogleTablet: 'Android.*Pixel C',
    SamsungTablet: `SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|
        GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|
        SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|
        GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|
        SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|
        GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|
        SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|
        SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|
        GT-I9200|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|
        SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|
        GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|
        SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|
        SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|
        SM-T530|SM-T705|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|
        SM-T707A|SM-T807A|SM-T237|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T|SM-T116NQ|SM-T116BU|SM-P550|
        SM-T350|SM-T550|SM-T9000|SM-P9000|SM-T705Y|SM-T805|GT-P3113|SM-T710|SM-T810|SM-T815|SM-T360|SM-T533|
        SM-T113|SM-T335|SM-T715|SM-T560|SM-T670|SM-T677|SM-T377|SM-T567|SM-T357T|SM-T555|SM-T561|SM-T713|
        SM-T719|SM-T813|SM-T819|SM-T580|SM-T355Y?|SM-T280|SM-T817A|SM-T820|SM-W700|SM-P580|SM-T587|SM-P350|
        SM-P555M|SM-P355M|SM-T113NU|SM-T815Y|SM-T585|SM-T285|SM-T825|SM-W708|SM-T835`,
    Kindle: `Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|
        KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI|KFARWI|KFFOWI|KFGIWI|KFMEWI)\\b|Android.*Silk\/[0-9.]+ like Chrome\
        /[0-9.]+ (?!Mobile)`,
    SurfaceTablet: 'Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)',
    HPTablet: 'HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10',
    AsusTablet: `^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|
        TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|
        Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|
        ME560CG|ME372CG|ME302KL| K010 | K011 | K017 | K01E |ME572C|ME103K|ME170C|ME171C|\\bME70C\\b|ME581C|
        ME581CL|ME8510C|ME181C|P01Y|PO1MA|P01Z|\\bP027\\b|\\bP024\\b|\\bP00C\\b`,
    BlackBerryTablet: 'PlayBook|RIM Tablet',
    HTCtablet: 'HTC_Flyer_P512|HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410',
    MotorolaTablet: 'xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617',
    NookTablet: 'Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2',
    AcerTablet: `Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|
        W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b|\\bA3-A11\\b|
        \\bA3-A20\\b|\\bA3-A30`,
    ToshibaTablet: 'Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO',
    LGTablet: '\\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\\b',
    FujitsuTablet: 'Android.*\\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\\b',
    PrestigioTablet: `PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|
        PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|
        PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|
        PMP5297C|PMP5297C_QUAD|PMP812E|PMP812E3G|PMP812F|PMP810E|PMP880TD|PMT3017|PMT3037|PMT3047|PMT3057|PMT7008|
        PMT5887|PMT5001|PMT5002`,
    LenovoTablet: `Lenovo TAB|Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|YT3-850M|YT3-X90L|YT3-X90F|
        YT3-X90X|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|
        B8000|B8080)(-|)(FL|F|HV|H|)|TB-X103F|TB-X304F|TB-X304L|TB-8703F|Tab2A7-10F|TB2-X30L`,
    DellTablet: 'Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7',
    YarvikTablet: `Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|
        TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|
        TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|
        TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|
        TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b`,
    MedionTablet: 'Android.*\\bOYO\\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB',
    ArnovaTablet: '97G4|AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT|AN9G2',
    IntensoTablet: 'INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004',
    IRUTablet: 'M702pro',
    MegafonTablet: 'MegaFon V9|\\bZTE V9\\b|Android.*\\bMT7A\\b',
    EbodaTablet: 'E-Boda (Supreme|Impresspeed|Izzycomm|Essential)',
    AllViewTablet: 'Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)',
    ArchosTablet: `\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|c|)(G10|
         Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b`,
    AinolTablet: 'NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark',
    NokiaLumiaTablet: 'Lumia 2520',
    SonyTablet: `Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|
        SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|
        EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551|SGP621|SGP641|SGP612|SOT31|SGP771|SGP611|
        SGP612|SGP712`,
    PhilipsTablet: '\\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\\b',
    CubeTablet: 'Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT',
    CobyTablet: `MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|
        MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010`,
    MIDTablet: `M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|
        MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|
        MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733|MID4X10`,
    MSITablet: `MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|
        Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b`,
    SMiTTablet: 'Android.*(\\bMID\\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)',
    RockChipTablet: 'Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A',
    FlyTablet: 'IQ310|Fly Vision',
    bqTablet: `Android.*(bq)?.*(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|
        Livingstone|Cervantes|Avant|Aquaris ([E|M]10|M8))|Maxwell.*Lite|Maxwell.*Plus`,
    HuaweiTablet: `MediaPad|MediaPad 7 Youth|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|
        S7-201|S7-Slim|M2-A01L|BAH-L09|BAH-W09`,
    NecTablet: '\\bN-06D|\\bN-08D',
    PantechTablet: 'Pantech.*P4100',
    BronchoTablet: 'Broncho.*(N701|N708|N802|a710)',
    VersusTablet: 'TOUCHPAD.*[78910]|\\bTOUCHTAB\\b',
    ZyncTablet: 'z1000|Z99 2G|z99|z930|z999|z990|z909|Z919|z900',
    PositivoTablet: 'TB07STA|TB10STA|TB07FTA|TB10FTA',
    NabiTablet: 'Android.*\\bNabi',
    KoboTablet: 'Kobo Touch|\\bK080\\b|\\bVox\\b Build|\\bArc\\b Build',
    DanewTablet: 'DSlide.*\\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\\b',
    TexetTablet: `NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|
        TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|
        TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|
        TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|
        TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|
        TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|
        TB-436|TB-416|TB-146SE|TB-126SE`,
    PlaystationTablet: 'Playstation.*(Portable|Vita)',
    TrekstorTablet: 'ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab',
    PyleAudioTablet: '\\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\\b',
    AdvanTablet: `Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|
        T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b `,
    DanyTechTablet: `Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|
        Genius TAB GII|Genius TAB GIII|Genius Tab S1`,
    GalapadTablet: 'Android.*\\bG1\\b(?!\\))',
    MicromaxTablet: 'Funbook|Micromax.*\\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\\b',
    KarbonnTablet: 'Android.*\\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\\b',
    AllFineTablet: 'Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide',
    PROSCANTablet: `\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|
        PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|
        PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|
        PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b`,
    YONESTablet: 'BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026',
    ChangJiaTablet: `TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|
        TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|
        TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|
        TPC10111|TPC10203|TPC10205|TPC10503`,
    GUTablet: 'TX-A1301|TX-M9002|Q702|kf026',
    PointOfViewTablet: `TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|
        TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|
        TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|
        TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10`,
    OvermaxTablet: `OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|
        MagicTab|Stream|TB-08|TB-09)|Qualcore 1027`,
    HCLTablet: 'HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync',
    DPSTablet: 'DPS Dream 9|DPS Dual 7',
    VistureTablet: 'V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10',
    CrestaTablet: 'CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989',
    MediatekTablet: '\\bMT8125|MT8389|MT8135|MT8377\\b',
    ConcordeTablet: 'Concorde([ ]+)?Tab|ConCorde ReadMan',
    GoCleverTablet: `GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|
        TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|
        GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|
        TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|
        TAB R104|TAB R83.3|TAB A1042`,
    ModecomTablet: `FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|
        FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|
        FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003`,
    VoninoTablet: `\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|
        Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|
        Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b`,
    ECSTablet: 'V07OT2|TM105A|S10OT1|TR10CS1',
    StorexTablet: `eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab`,
    VodafoneTablet: 'SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7|VF-1497',
    EssentielBTablet: `Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2`,
    RossMoorTablet: 'RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711',
    iMobileTablet: 'i-mobile i-note',
    TolinoTablet: 'tolino tab [0-9.]+|tolino shine',
    AudioSonicTablet: '\\bC-22Q|T7-QC|T-17B|T-17P\\b',
    AMPETablet: 'Android.* A78 ',
    SkkTablet: 'Android.* (SKYPAD|PHOENIX|CYCLOPS)',
    TecnoTablet: 'TECNO P9|TECNO DP8D',
    JXDTablet: `Android.* \\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|
        S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|
        P1000|P300|S18|S6600|S9100)\\b`,
    iJoyTablet: `Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|
        Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|
        Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|
        Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|
        Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)`,
    FX2Tablet: 'FX2 PAD7|FX2 PAD10',
    XoroTablet: `KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|
        PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|
        PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|
        TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151`,
    ViewsonicTablet: 'ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a',
    VerizonTablet: 'QTAQZ3|QTAIR7|QTAQTZ3|QTASUN1|QTASUN2|QTAXIA1',
    OdysTablet: 'LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\\bXELIO\\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10',
    CaptivaTablet: 'CAPTIVA PAD',
    IconbitTablet: `NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|
        NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S`,
    TeclastTablet: `T98 4G|\\bP80\\b|\\bX90HD\\b|X98 Air|X98 Air 3G|\\bX89\\b|P80 3G|\\bX80h\\b|P98 Air|
        \\bX89HD\\b|P98 3G|\\bP90HD\\b|P89 3G|X98 3G|\\bP70h\\b|P79HD 3G|G18d 3G|\\bP79HD\\b|\\bP89s\\b|\\bA88\\b|
        \\bP10HD\\b|\\bP19HD\\b|G18 3G|\\bP78HD\\b|\\bA78\\b|\\bP75\\b|G17s 3G|G17h 3G|\\bP85t\\b|\\bP90\\b|
        \\bP11\\b|\\bP98t\\b|\\bP98HD\\b|\\bG18d\\b|\\bP85s\\b|\\bP11HD\\b|\\bP88s\\b|\\bA80HD\\b|\\bA80se\\b|
        \\bA10h\\b|\\bP89\\b|\\bP78s\\b|\\bG18\\b|\\bP85\\b|\\bA70h\\b|\\bA70\\b|\\bG17\\b|\\bP18\\b|\\bA80s\\b|
        \\bA11s\\b|\\bP88HD\\b|\\bA80h\\b|\\bP76s\\b|\\bP76h\\b|\\bP98\\b|\\bA10HD\\b|\\bP78\\b|\\bP88\\b|\\bA11\\b|
        \\bA10t\\b|\\bP76a\\b|\\bP76t\\b|\\bP76e\\b|\\bP85HD\\b|\\bP85a\\b|\\bP86\\b|\\bP75HD\\b|\\bP76v\\b|\\bA12\\b|
        \\bP75a\\b|\\bA15\\b|\\bP76Ti\\b|\\bP81HD\\b|\\bA10\\b|\\bT760VE\\b|\\bT720HD\\b|\\bP76\\b|\\bP73\\b|\\bP71\\b|
        \\bP72\\b|\\bT720SE\\b|\\bC520Ti\\b|\\bT760\\b|\\bT720VE\\b|T720-3GE|T720-WiFi`,
    OndaTablet: `\\b(V975i|Vi30|VX530|V701|Vi60|V701s|Vi50|V801s|V719|Vx610w|VX610W|V819i|Vi10|VX580W|Vi10|
        V711s|V813|V811|V820w|V820|Vi20|V711|VI30W|V712|V891w|V972|V819w|V820w|Vi60|V820w|V711|V813s|V801|V819|
        V975s|V801|V819|V819|V818|V811|V712|V975m|V101w|V961w|V812|V818|V971|V971s|V919|V989|V116w|V102w|V973|
        Vi40)\\b[\\s]+|V10 \\b4G\\b`,
    JaytechTablet: 'TPC-PA762',
    BlaupunktTablet: 'Endeavour 800NG|Endeavour 1010',
    DigmaTablet: '\\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\\b',
    EvolioTablet: 'ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\\bEvotab\\b|\\bNeura\\b',
    LavaTablet: 'QPAD E704|\\bIvoryS\\b|E-TAB IVORY|\\bE-TAB\\b',
    AocTablet: 'MW0811|MW0812|MW0922|MTK8382|MW1031|MW0831|MW0821|MW0931|MW0712',
    MpmanTablet: `MP11 OCTA|MP10 OCTA|MPQC1114|MPQC1004|MPQC994|MPQC974|MPQC973|MPQC804|MPQC784|MPQC780|
        \\bMPG7\\b|MPDCG75|MPDCG71|MPDC1006|MP101DC|MPDC9000|MPDC905|MPDC706HD|MPDC706|MPDC705|MPDC110|
        MPDC100|MPDC99|MPDC97|MPDC88|MPDC8|MPDC77|MP709|MID701|MID711|MID170|MPDC703|MPQC1010`,
    CelkonTablet: 'CT695|CT888|CT[\\s]?910|CT7 Tab|CT9 Tab|CT3 Tab|CT2 Tab|CT1 Tab|C820|C720|\\bCT-1\\b',
    WolderTablet: `miTab \\b(DIAMOND|SPACE|BROOKLYN|NEO|FLY|MANHATTAN|FUNK|EVOLUTION|SKY|GOCAR|IRON|GENIUS|
        POP|MINT|EPSILON|BROADWAY|JUMP|HOP|LEGEND|NEW AGE|LINE|ADVANCE|FEEL|FOLLOW|LIKE|LINK|LIVE|THINK|
        FREEDOM|CHICAGO|CLEVELAND|BALTIMORE-GH|IOWA|BOSTON|SEATTLE|PHOENIX|DALLAS|IN 101|MasterChef)\\b`,
    MediacomTablet: 'M-MPI10C3G|M-SP10EG|M-SP10EGP|M-SP10HXAH|M-SP7HXAH|M-SP10HXBH|M-SP8HXAH|M-SP8MXA',
    MiTablet: '\\bMI PAD\\b|\\bHM NOTE 1W\\b',
    NibiruTablet: 'Nibiru M1|Nibiru Jupiter One',
    NexoTablet: 'NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI',
    LeaderTablet: `TBLT10Q|TBLT10I|TBL-10WDKB|TBL-10WDKBO2013|TBL-W230V2|TBL-W450|TBL-W500|SV572|TBLT7I|
        TBA-AC7-8G|TBLT79|TBL-8W16|TBL-10W32|TBL-10WKB|TBL-W100`,
    UbislateTablet: 'UbiSlate[\\s]?7C',
    PocketBookTablet: 'Pocketbook',
    KocasoTablet: '\\b(TB-1207)\\b',
    HisenseTablet: '\\b(F5281|E2371)\\b',
    Hudl: 'Hudl HT7S3|Hudl 2',
    TelstraTablet: 'T-Hub2',
    GenericTablet: `Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|
        A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|
        Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD|\\bTP750\\b|\\bQTAQZ3\\b|WVT101|TM1088|KT107`
};
const OS = {
    WINDOWS: 'Windows',
    MAC: 'Mac',
    IOS: 'iOS',
    ANDROID: 'Android',
    LINUX: 'Linux',
    UNIX: 'Unix',
    FIREFOX_OS: 'Firefox-OS',
    CHROME_OS: 'Chrome-OS',
    WINDOWS_PHONE: 'Windows-Phone',
    UNKNOWN: 'Unknown'
};
const OS_VERSIONS = {
    WINDOWS_3_11: 'windows-3-11',
    WINDOWS_95: 'windows-95',
    WINDOWS_ME: 'windows-me',
    WINDOWS_98: 'windows-98',
    WINDOWS_CE: 'windows-ce',
    WINDOWS_2000: 'windows-2000',
    WINDOWS_XP: 'windows-xp',
    WINDOWS_SERVER_2003: 'windows-server-2003',
    WINDOWS_VISTA: 'windows-vista',
    WINDOWS_7: 'windows-7',
    WINDOWS_8_1: 'windows-8-1',
    WINDOWS_8: 'windows-8',
    WINDOWS_10: 'windows-10',
    WINDOWS_PHONE_7_5: 'windows-phone-7-5',
    WINDOWS_PHONE_8_1: 'windows-phone-8-1',
    WINDOWS_PHONE_10: 'windows-phone-10',
    WINDOWS_NT_4_0: 'windows-nt-4-0',
    MACOSX_15: 'mac-os-x-15',
    MACOSX_14: 'mac-os-x-14',
    MACOSX_13: 'mac-os-x-13',
    MACOSX_12: 'mac-os-x-12',
    MACOSX_11: 'mac-os-x-11',
    MACOSX_10: 'mac-os-x-10',
    MACOSX_9: 'mac-os-x-9',
    MACOSX_8: 'mac-os-x-8',
    MACOSX_7: 'mac-os-x-7',
    MACOSX_6: 'mac-os-x-6',
    MACOSX_5: 'mac-os-x-5',
    MACOSX_4: 'mac-os-x-4',
    MACOSX_3: 'mac-os-x-3',
    MACOSX_2: 'mac-os-x-2',
    MACOSX: 'mac-os-x',
    UNKNOWN: 'unknown'
};
const OS_RE = {
    WINDOWS: { and: [{ or: [/\bWindows|(Win\d\d)\b/, /\bWin 9x\b/] }, { not: /\bWindows Phone\b/ }] },
    MAC: { and: [/\bMac OS\b/, { not: { or: [/\biPhone\b/, /\bWindows Phone\b/] } }] },
    IOS: { and: [{ or: [/\biPad\b/, /\biPhone\b/, /\biPod\b/] }, { not: /\bWindows Phone\b/ }] },
    ANDROID: { and: [/\bAndroid\b/, { not: /\bWindows Phone\b/ }] },
    LINUX: /\bLinux\b/,
    UNIX: /\bUNIX\b/,
    FIREFOX_OS: { and: [/\bFirefox\b/, /Mobile\b/] },
    CHROME_OS: /\bCrOS\b/,
    WINDOWS_PHONE: { or: [/\bIEMobile\b/, /\bWindows Phone\b/] },
    PS4: /\bMozilla\/5.0 \(PlayStation 4\b/,
    VITA: /\bMozilla\/5.0 \(Play(S|s)tation Vita\b/
};
const BROWSERS_RE = {
    CHROME: {
        and: [{ or: [/\bChrome\b/, /\bCriOS\b/, /\bHeadlessChrome\b/] }, {
                not: {
                    or: [/\bOPR\b/, /\bEdg(e|A|iOS)\b/, /\bEdg\/\b/, /\bSamsungBrowser\b/, /\bUCBrowser\b/]
                }
            }]
    },
    FIREFOX: { or: [/\bFirefox\b/, /\bFxiOS\b/] },
    SAFARI: {
        and: [/^((?!CriOS).)*\Safari\b.*$/, {
                not: {
                    or: [/\bOPR\b/, /\bEdg(e|A|iOS)\b/, /\bEdg\/\b/, /\bWindows Phone\b/, /\bSamsungBrowser\b/, /\bUCBrowser\b/]
                }
            }]
    },
    OPERA: { or: [/Opera\b/, /\bOPR\b/] },
    IE: { or: [/\bMSIE\b/, /\bTrident\b/, /^Mozilla\/5\.0 \(Windows NT 10\.0; Win64; x64\)$/] },
    MS_EDGE: { or: [/\bEdg(e|A|iOS)\b/] },
    MS_EDGE_CHROMIUM: /\bEdg\/\b/,
    PS4: /\bMozilla\/5.0 \(PlayStation 4\b/,
    VITA: /\bMozilla\/5.0 \(Play(S|s)tation Vita\b/,
    FB_MESSANGER: /\bFBAN\/MessengerForiOS\b/,
    SAMSUNG: /\bSamsungBrowser\b/,
    UCBROWSER: /\bUCBrowser\b/,
};
const DEVICES_RE = {
    ANDROID: { and: [/\bAndroid\b/, { not: /Windows Phone/ }] },
    I_PAD: /\biPad\b/,
    IPHONE: { and: [/\biPhone\b/, { not: /Windows Phone/ }] },
    I_POD: /\biPod\b/,
    BLACKBERRY: /\bblackberry\b/,
    FIREFOX_OS: { and: [/\bFirefox\b/, /\bMobile\b/] },
    CHROME_BOOK: /\bCrOS\b/,
    WINDOWS_PHONE: { or: [/\bIEMobile\b/, /\bWindows Phone\b/] },
    PS4: /\bMozilla\/5.0 \(PlayStation 4\b/,
    CHROMECAST: /\bCrKey\b/,
    APPLE_TV: /^iTunes-AppleTV\/4.1$/,
    GOOGLE_TV: /\bGoogleTV\b/,
    VITA: /\bMozilla\/5.0 \(Play(S|s)tation Vita\b/
};
const OS_VERSIONS_RE = {
    WINDOWS_3_11: /Win16/,
    WINDOWS_95: /(Windows 95|Win95|Windows_95)/,
    WINDOWS_ME: /(Win 9x 4.90|Windows ME)/,
    WINDOWS_98: /(Windows 98|Win98)/,
    WINDOWS_CE: /Windows CE/,
    WINDOWS_2000: /(Windows NT 5.0|Windows 2000)/,
    WINDOWS_XP: /(Windows NT 5.1|Windows XP)/,
    WINDOWS_SERVER_2003: /Windows NT 5.2/,
    WINDOWS_VISTA: /Windows NT 6.0/,
    WINDOWS_7: /(Windows 7|Windows NT 6.1)/,
    WINDOWS_8_1: /(Windows 8.1|Windows NT 6.3)/,
    WINDOWS_8: /(Windows 8|Windows NT 6.2)/,
    WINDOWS_10: /(Windows NT 10.0)/,
    WINDOWS_PHONE_7_5: /(Windows Phone OS 7.5)/,
    WINDOWS_PHONE_8_1: /(Windows Phone 8.1)/,
    WINDOWS_PHONE_10: /(Windows Phone 10)/,
    WINDOWS_NT_4_0: { and: [/(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/, { not: /Windows NT 10.0/ }] },
    MACOSX: /(MAC OS X\s*[^ 0-9])/,
    MACOSX_3: /(Darwin 10.3|Mac OS X 10.3)/,
    MACOSX_4: /(Darwin 10.4|Mac OS X 10.4)/,
    MACOSX_5: /(Mac OS X 10.5)/,
    MACOSX_6: /(Mac OS X 10.6)/,
    MACOSX_7: /(Mac OS X 10.7)/,
    MACOSX_8: /(Mac OS X 10.8)/,
    MACOSX_9: /(Mac OS X 10.9)/,
    MACOSX_10: /(Mac OS X 10.10)/,
    MACOSX_11: /(Mac OS X 10.11)/,
    MACOSX_12: /(Mac OS X 10.12)/,
    MACOSX_13: /(Mac OS X 10.13)/,
    MACOSX_14: /(Mac OS X 10.14)/,
    MACOSX_15: /(Mac OS X 10.15)/
};
const BROWSER_VERSIONS_RE_MAP = {
    CHROME: [/\bChrome\/([\d\.]+)\b/, /\bCriOS\/([\d\.]+)\b/, /\bHeadlessChrome\/([\d\.]+)\b/],
    FIREFOX: /\bFirefox\/([\d\.]+)\b/,
    SAFARI: /\bVersion\/([\d\.]+)\b/,
    OPERA: [/\bVersion\/([\d\.]+)\b/, /\bOPR\/([\d\.]+)\b/],
    IE: [/\bMSIE ([\d\.]+\w?)\b/, /\brv:([\d\.]+\w?)\b/],
    MS_EDGE: /\bEdg(?:e|A|iOS)\/([\d\.]+)\b/,
    MS_EDGE_CHROMIUM: /\bEdg\/([\d\.]+)\b/,
    SAMSUNG: /\bSamsungBrowser\/([\d\.]+)\b/,
    UCBROWSER: /\bUCBrowser\/([\d\.]+)\b/,
};
const BROWSER_VERSIONS_RE = Object.keys(BROWSER_VERSIONS_RE_MAP).reduce(function (obj, key) {
    obj[BROWSERS[key]] = BROWSER_VERSIONS_RE_MAP[key];
    return obj;
}, {});

var Constants = /*#__PURE__*/Object.freeze({
    BROWSERS: BROWSERS,
    DEVICES: DEVICES,
    MOBILES: MOBILES,
    TABLETS: TABLETS,
    OS: OS,
    OS_VERSIONS: OS_VERSIONS,
    OS_RE: OS_RE,
    BROWSERS_RE: BROWSERS_RE,
    DEVICES_RE: DEVICES_RE,
    OS_VERSIONS_RE: OS_VERSIONS_RE,
    BROWSER_VERSIONS_RE_MAP: BROWSER_VERSIONS_RE_MAP,
    BROWSER_VERSIONS_RE: BROWSER_VERSIONS_RE
});

/**
 * Created by ahsanayaz on 08/11/2016.
 */
class ReTree {
    constructor() {
    }
    test(string, regex) {
        let self = this;
        if (typeof regex === 'string') {
            regex = new RegExp(regex);
        }
        if (regex instanceof RegExp) {
            return regex.test(string);
        }
        else if (regex && Array.isArray(regex.and)) {
            return regex.and.every(function (item) {
                return self.test(string, item);
            });
        }
        else if (regex && Array.isArray(regex.or)) {
            return regex.or.some(function (item) {
                return self.test(string, item);
            });
        }
        else if (regex && regex.not) {
            return !self.test(string, regex.not);
        }
        else {
            return false;
        }
    }
    exec(string, regex) {
        let self = this;
        if (typeof regex === 'string') {
            regex = new RegExp(regex);
        }
        if (regex instanceof RegExp) {
            return regex.exec(string);
        }
        else if (regex && Array.isArray(regex)) {
            return regex.reduce(function (res, item) {
                return (!!res) ? res : self.exec(string, item);
            }, null);
        }
        else {
            return null;
        }
    }
}

let DeviceDetectorService = class DeviceDetectorService {
    constructor(platformId) {
        this.platformId = platformId;
        this.ua = '';
        this.userAgent = '';
        this.os = '';
        this.browser = '';
        this.device = '';
        this.os_version = '';
        this.browser_version = '';
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
            this.ua = window.navigator.userAgent;
        }
        this._setDeviceInfo();
    }
    /**
     * @author Ahsan Ayaz
     * @desc Sets the initial value of the device when the service is initiated.
     * This value is later accessible for usage
     */
    _setDeviceInfo() {
        let reTree = new ReTree();
        let ua = this.ua;
        this.userAgent = ua;
        let mappings = [
            { const: 'OS', prop: 'os' },
            { const: 'BROWSERS', prop: 'browser' },
            { const: 'DEVICES', prop: 'device' },
            { const: 'OS_VERSIONS', prop: 'os_version' },
        ];
        mappings.forEach((mapping) => {
            this[mapping.prop] = Object.keys(Constants[mapping.const]).reduce((obj, item) => {
                obj[Constants[mapping.const][item]] = reTree.test(ua, Constants[`${mapping.const}_RE`][item]);
                return obj;
            }, {});
        });
        mappings.forEach((mapping) => {
            this[mapping.prop] = Object.keys(Constants[mapping.const])
                .map((key) => {
                return Constants[mapping.const][key];
            }).reduce((previousValue, currentValue) => {
                return (previousValue === Constants[mapping.const].UNKNOWN && this[mapping.prop][currentValue])
                    ? currentValue : previousValue;
            }, Constants[mapping.const].UNKNOWN);
        });
        this.browser_version = '0';
        if (this.browser !== BROWSERS.UNKNOWN) {
            let re = BROWSER_VERSIONS_RE[this.browser];
            let res = reTree.exec(ua, re);
            if (!!res) {
                this.browser_version = res[1];
            }
        }
    }
    /**
     * @author Ahsan Ayaz
     * @desc Returns the device information
     * @returns the device information object.
     */
    getDeviceInfo() {
        const deviceInfo = {
            userAgent: this.userAgent,
            os: this.os,
            browser: this.browser,
            device: this.device,
            os_version: this.os_version,
            browser_version: this.browser_version
        };
        return deviceInfo;
    }
    /**
     * @author Ahsan Ayaz
     * @desc Compares the current device info with the mobile devices to check
     * if the current device is a mobile and also check current device is tablet so it will return false.
     * @returns whether the current device is a mobile
     */
    isMobile() {
        if (this.isTablet()) {
            return false;
        }
        const mobiles = MOBILES;
        let isMob = false;
        for (const key in mobiles) {
            if (mobiles.hasOwnProperty(key)) {
                const pattern = new RegExp(mobiles[key]);
                if (pattern.test(this.userAgent)) {
                    isMob = true;
                    break;
                }
            }
        }
        return isMob;
    }
    ;
    /**
     * @author Ahsan Ayaz
     * @desc Compares the current device info with the tablet devices to check
     * if the current device is a tablet.
     * @returns whether the current device is a tablet
     */
    isTablet() {
        const tablets = TABLETS;
        let isTab = false;
        for (const key in tablets) {
            if (tablets.hasOwnProperty(key)) {
                const pattern = new RegExp(tablets[key]);
                if (pattern.test(this.userAgent)) {
                    isTab = true;
                    break;
                }
            }
        }
        return isTab;
    }
    ;
    /**
     * @author Ahsan Ayaz
     * @desc Compares the current device info with the desktop devices to check
     * if the current device is a desktop device.
     * @returns whether the current device is a desktop device
     */
    isDesktop() {
        const desktopDevices = [
            DEVICES.PS4,
            DEVICES.CHROME_BOOK,
            DEVICES.UNKNOWN
        ];
        if (this.device === DEVICES.UNKNOWN) {
            if (this.isMobile() || this.isTablet()) {
                return false;
            }
        }
        return desktopDevices.indexOf(this.device) > -1;
    }
    ;
};
DeviceDetectorService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])
], DeviceDetectorService);

var DeviceDetectorModule_1;
let DeviceDetectorModule = DeviceDetectorModule_1 = class DeviceDetectorModule {
    static forRoot() {
        return {
            ngModule: DeviceDetectorModule_1,
            providers: [DeviceDetectorService]
        };
    }
};
DeviceDetectorModule = DeviceDetectorModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ]
    })
], DeviceDetectorModule);

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ngx-device-detector.js.map


/***/ }),

/***/ "./src/app/modules/cam/cam-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/cam/cam-routing.module.ts ***!
  \***************************************************/
/*! exports provided: CamRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CamRoutingModule", function() { return CamRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forbidden/forbidden.component */ "./src/app/modules/cam/forbidden/forbidden.component.ts");
/* harmony import */ var _common_guards_security_access_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/guards/security-access.guard */ "./src/app/modules/common/guards/security-access.guard.ts");





const routes = [
    {
        path: '',
        component: _forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_3__["ForbiddenComponent"],
        canActivate: [_common_guards_security_access_guard__WEBPACK_IMPORTED_MODULE_4__["SecurityAccessGuard"]]
    },
    {
        path: 'ingresos',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e("common"), __webpack_require__.e(9)]).then(__webpack_require__.bind(null, /*! ./ingresos/ingresos.module */ "./src/app/modules/cam/ingresos/ingresos.module.ts")).then(mod => mod.IngresosModule),
        // canLoad: [ ForbiddenGuard, SecurityAccessGuard ],
        // canActivateChild: [ SecurityAccessGuard ],
        data: {
            stepForbidden: 'cam/forbidden',
            child: [
                'ING001',
                'ING002'
            ]
        }
    },
    {
        path: 'beneficios',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(5)]).then(__webpack_require__.bind(null, /*! ./beneficios/beneficios.module */ "./src/app/modules/cam/beneficios/beneficios.module.ts")).then(mod => mod.BeneficiosModule),
        // canLoad: [ ForbiddenGuard, SecurityAccessGuard ],
        // canActivateChild: [ SecurityAccessGuard ],
        data: {
            stepForbidden: 'cam/forbidden',
            child: [
                'BEN001'
            ]
        }
    },
    {
        path: 'tpc',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(8)]).then(__webpack_require__.bind(null, /*! ./tpc/tpc.module */ "./src/app/modules/cam/tpc/tpc.module.ts")).then(mod => mod.TpcModule),
        // canLoad: [ ForbiddenGuard, SecurityAccessGuard ],
        // canActivateChild: [ SecurityAccessGuard ],
        data: {
            stepForbidden: 'cam/forbidden',
            child: [
                'TPC001'
            ]
        }
    },
    {
        path: 'vinculacion',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e("common"), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, /*! ./vinculacion/vinculacion.module */ "./src/app/modules/cam/vinculacion/vinculacion.module.ts")).then(mod => mod.VinculacionModule),
        // canLoad: [ ForbiddenGuard, SecurityAccessGuard ],
        // canActivateChild: [ SecurityAccessGuard ],
        data: {
            stepForbidden: 'cam/forbidden',
            child: [
                'VIN001',
                'VIN002',
                'VIN003',
                'VIN004',
                'VIN005',
                'VIN006'
            ]
        }
    },
    {
        path: 'biometria',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(4)]).then(__webpack_require__.bind(null, /*! ./biometria/biometria.module */ "./src/app/modules/cam/biometria/biometria.module.ts")).then(mod => mod.BiometriaModule),
        // canLoad: [ ForbiddenGuard, SecurityAccessGuard ],
        // canActivateChild: [ SecurityAccessGuard ],
        data: {
            stepForbidden: 'cam/forbidden',
            child: [
                'BIO001',
                'BIO002',
                'BIO003',
                'BIO004',
                'BIO005',
                'BIO006'
            ]
        }
    },
    {
        path: 'otp',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e("common"), __webpack_require__.e(13)]).then(__webpack_require__.bind(null, /*! ./otp/otp.module */ "./src/app/modules/cam/otp/otp.module.ts")).then(mod => mod.OtpModule),
        // canLoad: [ ForbiddenGuard, SecurityAccessGuard ],
        // canActivateChild: [ SecurityAccessGuard ],
        data: {
            stepForbidden: 'cam/forbidden',
            child: [
                'OTP001'
            ]
        }
    },
    {
        path: 'apertura',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e("common"), __webpack_require__.e(6)]).then(__webpack_require__.bind(null, /*! ./apertura/apertura.module */ "./src/app/modules/cam/apertura/apertura.module.ts")).then(mod => mod.AperturaModule),
        // canLoad: [ ForbiddenGuard, SecurityAccessGuard ],
        // canActivateChild: [ SecurityAccessGuard ],
        data: {
            stepForbidden: 'cam/forbidden',
            child: [
                'ACU001',
                'ACU002',
                'ACU003'
            ]
        }
    },
    {
        path: 'autorizaciones',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e("common"), __webpack_require__.e(10)]).then(__webpack_require__.bind(null, /*! ./autorizaciones/autorizaciones.module */ "./src/app/modules/cam/autorizaciones/autorizaciones.module.ts")).then(mod => mod.AutorizacionesModule),
        // canLoad: [ ForbiddenGuard, SecurityAccessGuard ],
        // canActivateChild: [ SecurityAccessGuard ],
        data: {
            stepForbidden: 'cam/forbidden',
            child: [
                'AUT001',
                'AUT002'
            ]
        }
    },
    {
        path: 'clave',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e("common"), __webpack_require__.e(12)]).then(__webpack_require__.bind(null, /*! ./clave/clave.module */ "./src/app/modules/cam/clave/clave.module.ts")).then(mod => mod.ClaveModule),
        // canLoad: [ ForbiddenGuard, SecurityAccessGuard ],
        // canActivateChild: [ SecurityAccessGuard ],
        data: {
            stepForbidden: 'cam/forbidden',
            child: [
                'CVL001'
            ]
        }
    },
    {
        path: 'forbidden',
        component: _forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_3__["ForbiddenComponent"],
        canActivate: [_common_guards_security_access_guard__WEBPACK_IMPORTED_MODULE_4__["SecurityAccessGuard"]],
    },
    {
        path: '**',
        redirectTo: 'forbidden'
    }
];
let CamRoutingModule = class CamRoutingModule {
};
CamRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], CamRoutingModule);



/***/ }),

/***/ "./src/app/modules/cam/cam.module.ts":
/*!*******************************************!*\
  !*** ./src/app/modules/cam/cam.module.ts ***!
  \*******************************************/
/*! exports provided: CamModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CamModule", function() { return CamModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _cam_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cam-routing.module */ "./src/app/modules/cam/cam-routing.module.ts");
/* harmony import */ var _forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forbidden/forbidden.component */ "./src/app/modules/cam/forbidden/forbidden.component.ts");
/* harmony import */ var _common_components_common_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/components/common-components.module */ "./src/app/modules/cam/common/components/common-components.module.ts");
/* harmony import */ var _common_components_base_base_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/components/base/base.component */ "./src/app/modules/common/components/base/base.component.ts");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-device-detector */ "./node_modules/ngx-device-detector/fesm2015/ngx-device-detector.js");








let CamModule = class CamModule {
};
CamModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_4__["ForbiddenComponent"], _common_components_base_base_component__WEBPACK_IMPORTED_MODULE_6__["BaseComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _cam_routing_module__WEBPACK_IMPORTED_MODULE_3__["CamRoutingModule"],
            _common_components_common_components_module__WEBPACK_IMPORTED_MODULE_5__["CommonComponentsModule"],
            ngx_device_detector__WEBPACK_IMPORTED_MODULE_7__["DeviceDetectorModule"].forRoot()
        ]
    })
], CamModule);



/***/ }),

/***/ "./src/app/modules/cam/common/components/common-components.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/cam/common/components/common-components.module.ts ***!
  \***************************************************************************/
/*! exports provided: CommonComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonComponentsModule", function() { return CommonComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _form_wizard_form_wizard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form-wizard/form-wizard.component */ "./src/app/modules/cam/common/components/form-wizard/form-wizard.component.ts");




let CommonComponentsModule = class CommonComponentsModule {
};
CommonComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _form_wizard_form_wizard_component__WEBPACK_IMPORTED_MODULE_3__["FormWizardComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [
            _form_wizard_form_wizard_component__WEBPACK_IMPORTED_MODULE_3__["FormWizardComponent"]
        ]
    })
], CommonComponentsModule);



/***/ }),

/***/ "./src/app/modules/cam/common/components/form-wizard/form-wizard.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/cam/common/components/form-wizard/form-wizard.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"initialTitle__stepsCounter\">\r\n  <span\r\n    *ngFor=\"let step of stepList\"\r\n    class=\"step\"\r\n    [ngClass]=\"{ 'step--active': step.statusStep }\"\r\n    (click)=\"onSelectStep(step)\"\r\n    >{{ step.numStep }}</span\r\n  >\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/cam/common/components/form-wizard/form-wizard.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/cam/common/components/form-wizard/form-wizard.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY2FtL2NvbW1vbi9jb21wb25lbnRzL2Zvcm0td2l6YXJkL2Zvcm0td2l6YXJkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/cam/common/components/form-wizard/form-wizard.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/cam/common/components/form-wizard/form-wizard.component.ts ***!
  \************************************************************************************/
/*! exports provided: FormWizardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormWizardComponent", function() { return FormWizardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FormWizardComponent = class FormWizardComponent {
    constructor() {
        // tslint:disable-next-line: no-output-rename
        this.selectStep = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.stepList = [];
        this.currentStep = this.currentStep ? this.currentStep : 1;
        this.steps = this.steps ? this.steps : 1;
    }
    ngOnInit() {
        for (let i = 1; i <= this.steps; i += 1) {
            const selected = i <= this.currentStep ? true : false;
            this.stepList.push({
                numStep: i,
                statusStep: selected
            });
        }
    }
    onSelectStep(step) {
        this.selectStep.emit(step.numStep);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('steps'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], FormWizardComponent.prototype, "steps", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('currentStep'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], FormWizardComponent.prototype, "currentStep", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('selectStep'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], FormWizardComponent.prototype, "selectStep", void 0);
FormWizardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-wizard',
        template: __webpack_require__(/*! ./form-wizard.component.html */ "./src/app/modules/cam/common/components/form-wizard/form-wizard.component.html"),
        styles: [__webpack_require__(/*! ./form-wizard.component.scss */ "./src/app/modules/cam/common/components/form-wizard/form-wizard.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FormWizardComponent);



/***/ }),

/***/ "./src/app/modules/cam/forbidden/forbidden.component.html":
/*!****************************************************************!*\
  !*** ./src/app/modules/cam/forbidden/forbidden.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!--\r\n// Copyright (C) 2019 - Banco Davivienda S.A. y sus filiales.\r\n-->\r\n<p>\r\n    CAM FORBIDDEN\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/modules/cam/forbidden/forbidden.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/modules/cam/forbidden/forbidden.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY2FtL2ZvcmJpZGRlbi9mb3JiaWRkZW4uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/cam/forbidden/forbidden.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/cam/forbidden/forbidden.component.ts ***!
  \**************************************************************/
/*! exports provided: ForbiddenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForbiddenComponent", function() { return ForbiddenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ForbiddenComponent = class ForbiddenComponent {
    constructor() { }
    ngOnInit() {
        console.log('Forbidden');
    }
};
ForbiddenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forbidden',
        template: __webpack_require__(/*! ./forbidden.component.html */ "./src/app/modules/cam/forbidden/forbidden.component.html"),
        styles: [__webpack_require__(/*! ./forbidden.component.scss */ "./src/app/modules/cam/forbidden/forbidden.component.scss"), __webpack_require__(/*! ../../../../assets/cam/scss/components/forbidden/_fbdn.scss */ "./src/assets/cam/scss/components/forbidden/_fbdn.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ForbiddenComponent);



/***/ }),

/***/ "./src/app/modules/common/components/base/base.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/common/components/base/base.component.ts ***!
  \******************************************************************/
/*! exports provided: BaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseComponent", function() { return BaseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_workflow_workflow_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/workflow/workflow.service */ "./src/app/modules/common/service/workflow/workflow.service.ts");
/* harmony import */ var _service_SendInformation_send_information_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/SendInformation/send-information.service */ "./src/app/modules/common/service/SendInformation/send-information.service.ts");
/* harmony import */ var _CONST__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../CONST */ "./src/app/modules/common/CONST.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _service_validationRules_validation_rules_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/validationRules/validation-rules.service */ "./src/app/modules/common/service/validationRules/validation-rules.service.ts");
/* harmony import */ var _service_catalogo_catalogo_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../service/catalogo/catalogo.service */ "./src/app/modules/common/service/catalogo/catalogo.service.ts");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-device-detector */ "./node_modules/ngx-device-detector/fesm2015/ngx-device-detector.js");
/* harmony import */ var _service_postMessages_post_messages_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../service/postMessages/post-messages.service */ "./src/app/modules/common/service/postMessages/post-messages.service.ts");












let BaseComponent = class BaseComponent {
    constructor(router, workflow, obser, formBuilder, rules, catalogo, deviceService, route, postMessagesService) {
        // console.warn('Los siguientes servicios deben estar Inyectados o no se aplico la herencia correctamente:');
        // console.warn('--------------------------');
        // console.log('formBuilder:', formBuilder === undefined ? 'No se inyecto' : 'Inyectado');
        // console.log('router:', router === undefined ? 'No se inyecto' : 'Inyectado');
        // console.log('workflow:', workflow === undefined ? 'No se inyecto' : 'Inyectado');
        // console.log('obser:', obser === undefined ? 'No se inyecto' : 'Inyectado');
        // console.log('rules:', rules === undefined ? 'No se inyecto' : 'Inyectado');
        // console.warn('--------------------------');
        this.router = router;
        this.workflow = workflow;
        this.obser = obser;
        this.formBuilder = formBuilder;
        this.rules = rules;
        this.catalogo = catalogo;
        this.deviceService = deviceService;
        this.route = route;
        this.postMessagesService = postMessagesService;
        this.disableButton = false;
        this.stepId = '';
        this.aliado = this.obser.lastValue(_CONST__WEBPACK_IMPORTED_MODULE_5__["ALIADO"]);
        this.pais = this.obser.lastValue(_CONST__WEBPACK_IMPORTED_MODULE_5__["PAIS"]);
        this.modulo = this.obser.lastValue(_CONST__WEBPACK_IMPORTED_MODULE_5__["MODULO"]);
        this.canal = this.obser.lastValue(_CONST__WEBPACK_IMPORTED_MODULE_5__["CANAL"]);
        this.lenguaje = this.obser.lastValue(_CONST__WEBPACK_IMPORTED_MODULE_5__["LENGUAJE"]);
        this.formulario = this.formBuilder.group({});
        this.payloadSubscription = this.obser.getData(_CONST__WEBPACK_IMPORTED_MODULE_5__["PAYLOAD"]).subscribe(this.responsePayload());
        this.router.data.subscribe(this.responseRouteData());
        this.obser.getData(_CONST__WEBPACK_IMPORTED_MODULE_5__["ONCALL"]).subscribe(response => {
            this.disableButton = response ? true : false;
        });
    }
    responsePayload() {
        return (response) => {
            if (response) {
                this.payload = response;
                setTimeout(() => this.obser.unSubscribe(this.payloadSubscription), 150);
            }
        };
    }
    responseRouteData() {
        return (data) => {
            this.stepId = data.stepId;
        };
    }
    onBack(payload) {
        this.workflow.workflow(this.stepId, payload());
    }
    onCall(payload) {
        if (this.formulario.valid) {
            this.workflow.workflow(this.stepId, payload());
        }
    }
    // Método para redirigir directo sin pasar por WF
    onRedirect(stepId) {
        this.route.navigate([this.workflow.getRoute(stepId)]);
    }
    setRules(rules, validators = {}) {
        this.formulario = this.formBuilder.group(rules, validators);
    }
    params(keys) {
        const params = {};
        keys.map(item => {
            params[item] = this.obser.lastValue(item);
            return item;
        });
        return params;
    }
    get deviceInfo() {
        return this.deviceService.getDeviceInfo();
    }
    get isMobile() {
        return this.deviceService.isMobile();
    }
    get isTablet() {
        return this.deviceService.isTablet();
    }
    get isDesktopDevice() {
        return this.deviceService.isDesktop();
    }
    appReady() {
        console.log('Enviando appReady...');
        this.postMessagesService.appReady();
    }
};
BaseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: ''
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _service_workflow_workflow_service__WEBPACK_IMPORTED_MODULE_3__["WorkflowService"],
        _service_SendInformation_send_information_service__WEBPACK_IMPORTED_MODULE_4__["SendInformationService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
        _service_validationRules_validation_rules_service__WEBPACK_IMPORTED_MODULE_7__["ValidationRulesService"],
        _service_catalogo_catalogo_service__WEBPACK_IMPORTED_MODULE_8__["CatalogoService"],
        ngx_device_detector__WEBPACK_IMPORTED_MODULE_9__["DeviceDetectorService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _service_postMessages_post_messages_service__WEBPACK_IMPORTED_MODULE_10__["PostMessagesService"]])
], BaseComponent);



/***/ }),

/***/ "./src/app/modules/common/guards/security-access.guard.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/common/guards/security-access.guard.ts ***!
  \****************************************************************/
/*! exports provided: SecurityAccessGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityAccessGuard", function() { return SecurityAccessGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_SendInformation_send_information_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/SendInformation/send-information.service */ "./src/app/modules/common/service/SendInformation/send-information.service.ts");
/* harmony import */ var _CONST__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CONST */ "./src/app/modules/common/CONST.ts");




let SecurityAccessGuard = class SecurityAccessGuard {
    constructor(guard, loading) {
        this.guard = guard;
        this.loading = loading;
    }
    canActivate(route, state) {
        return true;
    }
    canActivateChild(next, state) {
        const productos = next.data.producto;
        const stepIds = next.data.child;
        return productos.filter(producto => this.guard.lastValue(_CONST__WEBPACK_IMPORTED_MODULE_3__["PRODUCTO"]) === producto).length === 1 &&
            stepIds.filter(stepId => this.guard.lastValue(_CONST__WEBPACK_IMPORTED_MODULE_3__["STEP_ID"]) === stepId).length === 1;
    }
    canLoad(route, segments) {
        const stepIds = route.data.child;
        return stepIds.filter(stepId => this.guard.lastValue(_CONST__WEBPACK_IMPORTED_MODULE_3__["STEP_ID"]) === stepId).length === 1;
    }
    canDeactivate(component, currentRoute, currentState, nextState) {
        const stepId = currentRoute.data.stepId;
        return this.guard.lastValue(_CONST__WEBPACK_IMPORTED_MODULE_3__["STEP_ID"]) !== stepId;
    }
};
SecurityAccessGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_SendInformation_send_information_service__WEBPACK_IMPORTED_MODULE_2__["SendInformationService"],
        _service_SendInformation_send_information_service__WEBPACK_IMPORTED_MODULE_2__["SendInformationService"]])
], SecurityAccessGuard);



/***/ }),

/***/ "./src/app/modules/common/service/postMessages/post-messages.service.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/common/service/postMessages/post-messages.service.ts ***!
  \******************************************************************************/
/*! exports provided: PostMessagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostMessagesService", function() { return PostMessagesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PostMessagesService = class PostMessagesService {
    constructor() {
        // this.addListener();
    }
    postMessage(event) {
        console.log(event.data);
        console.log(event);
        // window.addEventListener('message', event => {
        //   console.log(event.data);
        //   console.log(event);
        //   this.title = `Respuesta al postMessage:::::${event.data.event}`;
        //   if (event.data.response) {
        //     Object.keys(event.data.response).map((key) => {
        //       this.response.push({
        //         key,
        //         value: event.data.response[key]
        //       });
        //     });
        //   }
        // });
    }
    appReady() {
        window.parent.postMessage({
            event: 'appReady',
        }, '*');
    }
    setTitle() {
        const title = prompt('Ingrese el titulo');
        if (title) {
            window.parent.postMessage({
                event: 'setTitle',
                title
            }, '*');
        }
    }
    captureFrontDocument() {
        window.parent.postMessage({
            event: 'captureFrontDocument'
        }, '*');
    }
    captureBackdocument() {
        window.parent.postMessage({
            event: 'captureBackDocument'
        }, '*');
    }
    captureFace() {
        window.parent.postMessage({
            event: 'captureFace'
        }, '*');
    }
    appFinish() {
        window.parent.postMessage({
            event: 'appFinish'
        }, '*');
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:message', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], PostMessagesService.prototype, "postMessage", null);
PostMessagesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PostMessagesService);



/***/ }),

/***/ "./src/assets/cam/scss/components/forbidden/_fbdn.scss":
/*!*************************************************************!*\
  !*** ./src/assets/cam/scss/components/forbidden/_fbdn.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* \r\n    Comentarios del autor\r\n*/\n/*! normalize.scss v0.1.0 | MIT License | based on git.io/normalize */\n/**\r\n * 1. Set default font family to sans-serif.\r\n * 2. Prevent iOS text size adjust after orientation change, without disabling\r\n *    user zoom.\r\n */\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n/**\r\n * Remove default margin.\r\n */\nbody {\n  margin: 0; }\n/* HTML5 display definitions\r\n   ========================================================================== */\n/**\r\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\r\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\r\n * and Firefox.\r\n * Correct `block` display not defined for `main` in IE 11.\r\n */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block; }\n/**\r\n * 1. Correct `inline-block` display not defined in IE 8/9.\r\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\r\n */\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */ }\n/**\r\n * Prevent modern browsers from displaying `audio` without controls.\r\n * Remove excess height in iOS 5 devices.\r\n */\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n/**\r\n * Address `[hidden]` styling not present in IE 8/9/10.\r\n * Hide the `template` element in IE 8/9/11, Safari, and Firefox < 22.\r\n */\n[hidden],\ntemplate {\n  display: none; }\n/* Links\r\n   ========================================================================== */\n/**\r\n * Remove the gray background color from active links in IE 10.\r\n */\na {\n  background-color: transparent; }\n/**\r\n * Improve readability when focused and also mouse hovered in all browsers.\r\n */\na:active,\na:hover {\n  outline: 0; }\n/* Text-level semantics\r\n   ========================================================================== */\n/**\r\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\r\n */\nabbr[title] {\n  border-bottom: 1px dotted; }\n/**\r\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\r\n */\nb,\nstrong {\n  font-weight: bold; }\n/**\r\n * Address styling not present in Safari and Chrome.\r\n */\ndfn {\n  font-style: italic; }\n/**\r\n * Address variable `h1` font-size and margin within `section` and `article`\r\n * contexts in Firefox 4+, Safari, and Chrome.\r\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n/**\r\n * Address styling not present in IE 8/9.\r\n */\nmark {\n  background: #ff0;\n  color: #000; }\n/**\r\n * Address inconsistent and variable font size in all browsers.\r\n */\nsmall {\n  font-size: 80%; }\n/**\r\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\r\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\nsup {\n  top: -0.5em; }\nsub {\n  bottom: -0.25em; }\n/* Embedded content\r\n   ========================================================================== */\n/**\r\n * Remove border when inside `a` element in IE 8/9/10.\r\n */\nimg {\n  border: 0; }\n/**\r\n * Correct overflow not hidden in IE 9/10/11.\r\n */\nsvg:not(:root) {\n  overflow: hidden; }\n/* Grouping content\r\n   ========================================================================== */\n/**\r\n * Address margin not present in IE 8/9 and Safari.\r\n */\nfigure {\n  margin: 1em 40px; }\n/**\r\n * Address differences between Firefox and other browsers.\r\n */\nhr {\n  box-sizing: content-box;\n  height: 0;\n  border: 0;\n  margin: 1em 0;\n  border-bottom: 2px solid #ffffff; }\n/**\r\n * Contain overflow in all browsers.\r\n */\npre {\n  overflow: auto; }\n/**\r\n * Address odd `em`-unit font size rendering in all browsers.\r\n */\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em; }\n/* Forms\r\n   ========================================================================== */\n/**\r\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\r\n * styling of `select`, unless a `border` property is set.\r\n */\n/**\r\n * 1. Correct color not being inherited.\r\n *    Known issue: affects color of disabled elements.\r\n * 2. Correct font properties not being inherited.\r\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\r\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n  margin: 0;\n  /* 3 */ }\n/**\r\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\r\n */\nbutton {\n  overflow: visible; }\n/**\r\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\r\n * All other form control elements do not inherit `text-transform` values.\r\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\r\n * Correct `select` style inheritance in Firefox.\r\n */\nbutton,\nselect {\n  text-transform: none; }\n/**\r\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\r\n *    and `video` controls.\r\n * 2. Correct inability to style clickable `input` types in iOS.\r\n * 3. Improve usability and consistency of cursor style between image-type\r\n *    `input` and others.\r\n */\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */ }\n/**\r\n * Re-set default cursor for disabled elements.\r\n */\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default; }\n/**\r\n * Remove inner padding and border in Firefox 4+.\r\n */\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n/**\r\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\r\n * the UA stylesheet.\r\n */\ninput {\n  line-height: normal; }\n/**\r\n * It's recommended that you don't attempt to style these elements.\r\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\r\n *\r\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\r\n * 2. Remove excess padding in IE 8/9/10.\r\n */\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n/**\r\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\r\n * `font-size` values of the `input`, it causes the cursor style of the\r\n * decrement button to change from `default` to `text`.\r\n */\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n/**\r\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\r\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome\r\n *    (include `-moz` to future-proof).\r\n */\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  /* 2 */\n  box-sizing: content-box; }\n/**\r\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\r\n * Safari (but not Chrome) clips the cancel button when the search input has\r\n * padding (and `textfield` appearance).\r\n */\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n/**\r\n * Define consistent border, margin, and padding.\r\n */\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n/**\r\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\r\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\r\n */\nlegend {\n  border: 0;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n/**\r\n * Remove default vertical scrollbar in IE 8/9/10/11.\r\n */\ntextarea {\n  overflow: auto; }\n/**\r\n * Don't inherit the `font-weight` (applied by a rule above).\r\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\r\n */\noptgroup {\n  font-weight: bold; }\n/* Tables\r\n   ========================================================================== */\n/**\r\n * Remove most spacing between table cells.\r\n */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\ntd,\nth {\n  padding: 0; }\n/**\r\n * body -styles\r\n */\n* {\n  font-family: \"MyriadPro\" !important; }\nbody {\n  font-size: 1em;\n  line-height: 1.3125em;\n  font-weight: 100;\n  font-style: normal;\n  margin: auto;\n  padding: 0;\n  position: relative;\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n/**\r\n * Font familys - include.\r\n */\n@font-face {\n  font-family: \"MyriadPro\";\n  font-style: italic;\n  font-weight: 100;\n  src: url(\"/assets/cam/fonts/MyriadPro-It.eot?\") format(\"eot\"), url(\"/assets/cam/fonts/MyriadPro-It.woff\") format(\"woff\"), url(\"/assets/cam/fonts/MyriadPro-It.ttf\") format(\"truetype\"), url(\"/assets/cam/fonts/MyriadPro-It.svg#MyriadPro\") format(\"svg\"); }\n@font-face {\n  font-family: \"MyriadPro\";\n  font-style: normal;\n  font-weight: 100;\n  src: url(\"/assets/cam/fonts/MyriadPro-Regular.eot?\") format(\"eot\"), url(\"/assets/cam/fonts/MyriadPro-Regular.woff\") format(\"woff\"), url(\"/assets/cam/fonts/MyriadPro-Regular.ttf\") format(\"truetype\"), url(\"/assets/cam/fonts/MyriadPro-Regular.svg#MyriadPro\") format(\"svg\"); }\n@font-face {\n  font-family: \"MyriadPro\";\n  font-style: normal;\n  font-weight: bold;\n  src: url(\"/assets/cam/fonts/MyriadPro-Bold.eot?\") format(\"eot\"), url(\"/assets/cam/fonts/MyriadPro-Bold.woff\") format(\"woff\"), url(\"/assets/cam/fonts/MyriadPro-Bold.ttf\") format(\"truetype\"), url(\"/assets/cam/fonts/MyriadPro-Bold.svg#MyriadPro\") format(\"svg\"); }\n/**\r\n * Text elements - styles.\r\n */\nh1, .h1 {\n  color: #323c47;\n  font-family: \"MyriadPro\";\n  font-size: 3.5625em;\n  font-weight: 900;\n  line-height: 1.33333333em;\n  margin-top: 0.36842105em;\n  margin-bottom: 0.73684211em;\n  font-style: normal; }\nh2, .h2 {\n  color: #323c47;\n  font-family: \"MyriadPro\";\n  font-size: 2.25em;\n  font-weight: 900;\n  line-height: 1.16666667em;\n  margin-top: 0.19444444em;\n  margin-bottom: 0.5em;\n  font-style: normal; }\nh3, .h3 {\n  color: #323c47;\n  font-family: \"MyriadPro\";\n  font-size: 1.625em;\n  font-weight: 300;\n  line-height: 0.80769231em;\n  margin-top: 0em;\n  margin-bottom: 0.80769231em;\n  font-style: normal; }\nh4, .h4 {\n  color: #323c47;\n  font-family: \"MyriadPro\";\n  font-size: 1.125em;\n  font-weight: 600;\n  line-height: 1.16666667em;\n  margin-top: 0em;\n  margin-bottom: 1em;\n  font-style: normal; }\nh5, .h5 {\n  color: #323c47;\n  font-family: \"MyriadPro\";\n  font-size: 1em;\n  font-weight: 300;\n  line-height: 1.3125em;\n  margin-top: 0em;\n  margin-bottom: 1.3125em;\n  font-style: normal; }\nh6, .h6 {\n  color: #323c47;\n  font-family: \"MyriadPro\";\n  font-size: 0.75em;\n  font-weight: 300;\n  line-height: 1.33333333em;\n  margin-top: 0em;\n  margin-bottom: 0.83333333em;\n  font-style: normal; }\np {\n  color: #2F3337;\n  font-family: \"MyriadPro\";\n  font-size: 1em;\n  font-weight: 100;\n  line-height: 1.3125em;\n  margin-top: 0em;\n  margin-bottom: 1.3125em;\n  font-style: normal; }\nul li {\n  color: #323c47;\n  font-family: \"MyriadPro\";\n  font-size: 0.9375em;\n  font-weight: 200;\n  line-height: 1.06666667em;\n  margin-top: 0.46666667em;\n  margin-bottom: 0em;\n  font-style: normal; }\nem {\n  color: #323c47;\n  font-family: \"MyriadPro\";\n  font-size: 0.6875em;\n  font-weight: 300;\n  line-height: 1.36363636em;\n  margin-top: 0.90909091em;\n  margin-bottom: 0em;\n  font-style: normal; }\n/**\r\n * Text colors - styles.\r\n */\n.text__color--light {\n  color: white !important; }\n.text__color--dark {\n  color: #22262a !important; }\n.text__color {\n  color: #323c47; }\n.text__color--primary {\n  color: #EE3124; }\n/**\r\n * Text align - styles.\r\n */\n.text__align--left {\n  display: block;\n  text-align: left; }\n.text__align--right {\n  display: block;\n  text-align: right; }\n.text__align--center {\n  display: block;\n  text-align: center; }\n/**\r\n * Text align - weight.\r\n */\n.text__weight--regular {\n  font-weight: normal !important; }\n/**\r\n * Text margin variations\r\n */\n.text__margin--bottom0 {\n  margin-bottom: 0; }\n/**\r\n* Modules - forms - Layout\r\n*/\n.formContainer {\n  width: 100%;\n  display: block;\n  -o-box-sizing: border-box;\n  -ms-box-sizing: border-box;\n  box-sizing: border-box; }\n@media (min-width: 992px) {\n    .formContainer {\n      padding: 2em 0;\n      border: solid 1px #bdbdbd;\n      padding: 2.1875em 2.5em;\n      background-image: url(/assets/cam/img/layout/curve_bg.png);\n      background-position: right bottom;\n      background-repeat: no-repeat;\n      background-color: rgba(189, 189, 189, 0.04);\n      border-radius: 2.625em;\n      -o-box-shadow: 0 0 0.5em rgba(47, 51, 55, 0.17);\n      -ms-box-shadow: 0 0 0.5em rgba(47, 51, 55, 0.17);\n      box-shadow: 0 0 0.5em rgba(47, 51, 55, 0.17); } }\n.formContainer__columnContainer {\n    margin: 2.5em 0;\n    -o-box-sizing: border-box;\n    -ms-box-sizing: border-box;\n    box-sizing: border-box;\n    -webkit-display: flex;\n    -moz-display: flex;\n    -o-display: flex;\n    -ms-display: flex;\n    display: -webkit-box;\n    display: flex;\n    -moz-justify-content: space-around;\n    -o-justify-content: space-around;\n    -ms-justify-content: space-around;\n    justify-content: space-around;\n    -moz-align-items: flex-start;\n    -o-align-items: flex-start;\n    -ms-align-items: flex-start;\n    -webkit-box-align: start;\n            align-items: flex-start;\n    -moz-flex-direction: column;\n    -o-flex-direction: column;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column; }\n@media (min-width: 768px) and (max-width: 992px) {\n      .formContainer__columnContainer {\n        -moz-flex-direction: row;\n        -o-flex-direction: row;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n                flex-direction: row;\n        -o-flex-wrap: wrap;\n        flex-wrap: wrap; } }\n@media (min-width: 992px) {\n      .formContainer__columnContainer {\n        -moz-flex-direction: row;\n        -o-flex-direction: row;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n                flex-direction: row;\n        -o-flex-wrap: wrap;\n        flex-wrap: wrap; } }\n.formContainer__columnContainer .centerText {\n      text-align: center; }\n@media (min-width: 768px) and (max-width: 992px) {\n        .formContainer__columnContainer .centerText {\n          width: 80%; } }\n@media (min-width: 992px) {\n        .formContainer__columnContainer .centerText {\n          width: 80%; } }\n.formContainer__columnContainer .centerText--small {\n        width: 70%;\n        margin: 0.5rem auto; }\n@media (min-width: 576px) and (max-width: 768px) {\n          .formContainer__columnContainer .centerText--small {\n            width: 60%; } }\n@media (min-width: 768px) and (max-width: 992px) {\n          .formContainer__columnContainer .centerText--small {\n            width: 100%; } }\n@media (min-width: 992px) {\n          .formContainer__columnContainer .centerText--small {\n            width: 80%; } }\n.formContainer__columnContainer .centerText--colorPrimary {\n        color: #EE3124; }\n.formContainer__columnContainer .formColumn {\n      width: 100%;\n      margin: 0;\n      padding: 0; }\n@media (min-width: 768px) and (max-width: 992px) {\n        .formContainer__columnContainer .formColumn {\n          width: 45%; } }\n@media (min-width: 992px) {\n        .formContainer__columnContainer .formColumn {\n          width: 35%; } }\n.formContainer__columnContainer .formColumn--center {\n        margin: auto; }\n.formContainer__columnContainer .formColumn__contentCenter {\n        text-align: center; }\n.formContainer__columnContainer .formColumn__contentCenter a {\n          cursor: pointer;\n          color: #EE3124 !important;\n          display: inline-block;\n          margin: 0 0.3125em;\n          font-weight: bold;\n          pointer-events: auto !important; }\n.formContainer__columnContainer .formColumnPrincipal {\n      width: 100%;\n      margin: 0;\n      padding-top: 1em; }\n@media (min-width: 768px) and (max-width: 992px) {\n        .formContainer__columnContainer .formColumnPrincipal {\n          width: 95%; } }\n@media (min-width: 992px) {\n        .formContainer__columnContainer .formColumnPrincipal {\n          width: 85%; } }\n.formContainer__columnContainer .formColumnMiddle {\n      width: 100%;\n      margin: 0;\n      padding-top: 1em;\n      text-align: center; }\n@media (min-width: 768px) and (max-width: 992px) {\n        .formContainer__columnContainer .formColumnMiddle {\n          width: 70%; } }\n@media (min-width: 992px) {\n        .formContainer__columnContainer .formColumnMiddle {\n          width: 60%; } }\n.formContainer__columnContainer .indications {\n      display: -webkit-box;\n      display: flex;\n      width: 100%; }\n.formContainer__columnContainer .indications ul {\n        width: 100%;\n        margin: auto; }\n@media (min-width: 768px) and (max-width: 992px) {\n          .formContainer__columnContainer .indications ul {\n            width: 60%; } }\n@media (min-width: 992px) {\n          .formContainer__columnContainer .indications ul {\n            width: 40%; } }\n.formContainer__buttonContainer {\n    width: 100%;\n    margin: 2.5em 0;\n    display: block; }\n.formContainer__buttonContainer--dualButton {\n      -o-box-sizing: border-box;\n      -ms-box-sizing: border-box;\n      box-sizing: border-box;\n      -webkit-display: flex;\n      -moz-display: flex;\n      -o-display: flex;\n      -ms-display: flex;\n      display: -webkit-box;\n      display: flex;\n      -moz-justify-content: space-between;\n      -o-justify-content: space-between;\n      -ms-justify-content: space-between;\n      -webkit-box-pack: justify;\n              justify-content: space-between;\n      -moz-align-items: center;\n      -o-align-items: center;\n      -ms-align-items: center;\n      -webkit-box-align: center;\n              align-items: center; }\n.formContainer__buttonContainer--dualButton app-button-continue {\n        width: 100%;\n        margin: 0 0.3125em;\n        padding: 0; }\n.formContainer__buttonContainer--dualButton app-button-continue button {\n          width: 100%; }\n.formContainer__buttonContainer--dualButton button {\n        margin: 0 0.3125em;\n        width: 100%; }\n/**\r\n* Modules - forms - Layout\r\n*/\n.cardsContainer {\n  width: 100%;\n  display: block;\n  -o-box-sizing: border-box;\n  -ms-box-sizing: border-box;\n  box-sizing: border-box; }\n@media (min-width: 992px) {\n    .cardsContainer {\n      padding: 2em 0;\n      border: solid 1px #bdbdbd;\n      padding: 2.1875em 2.5em;\n      background-image: url(/assets/cam/img/layout/curve_bg.png);\n      background-position: right bottom;\n      background-repeat: no-repeat;\n      background-color: rgba(189, 189, 189, 0.04);\n      border-radius: 2.625em;\n      -o-box-shadow: 0 0 0.5em rgba(47, 51, 55, 0.17);\n      -ms-box-shadow: 0 0 0.5em rgba(47, 51, 55, 0.17);\n      box-shadow: 0 0 0.5em rgba(47, 51, 55, 0.17); } }\n.cardsContainer__row {\n    margin: 2.5em 0;\n    width: 100%;\n    min-height: 100px;\n    -o-box-sizing: border-box;\n    -ms-box-sizing: border-box;\n    box-sizing: border-box;\n    -webkit-display: flex;\n    -moz-display: flex;\n    -o-display: flex;\n    -ms-display: flex;\n    display: -webkit-box;\n    display: flex;\n    -moz-justify-content: center;\n    -o-justify-content: center;\n    -ms-justify-content: center;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -moz-align-items: flex-start;\n    -o-align-items: flex-start;\n    -ms-align-items: flex-start;\n    -webkit-box-align: start;\n            align-items: flex-start;\n    -moz-flex-direction: column;\n    -o-flex-direction: column;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column; }\n@media (min-width: 768px) and (max-width: 992px) {\n      .cardsContainer__row {\n        -moz-flex-direction: row;\n        -o-flex-direction: row;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n                flex-direction: row;\n        -o-flex-wrap: wrap;\n        flex-wrap: wrap; } }\n@media (min-width: 992px) {\n      .cardsContainer__row {\n        -moz-flex-direction: row;\n        -o-flex-direction: row;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n                flex-direction: row;\n        -o-flex-wrap: wrap;\n        flex-wrap: wrap; } }\n.cardsContainer__row .card {\n      padding: 1.5625em 1.875em;\n      border-radius: 1.25em;\n      background: #E4E4E4;\n      margin: 1rem 0;\n      width: 100%;\n      -o-box-sizing: border-box;\n      -ms-box-sizing: border-box;\n      box-sizing: border-box; }\n@media (min-width: 768px) and (max-width: 992px) {\n        .cardsContainer__row .card {\n          font-size: 1.15em;\n          width: 45%;\n          margin: 1rem; } }\n@media (min-width: 992px) {\n        .cardsContainer__row .card {\n          font-size: 1.15em;\n          width: 30%;\n          margin: 1rem; } }\n.cardsContainer__row .card__header {\n        border-bottom: solid 3px #EE3124;\n        width: 100%; }\n.cardsContainer__row .card__header h4 {\n          font-weight: bold; }\n.cardsContainer__row .card__header h4 strong {\n            color: #EE3124; }\n.cardsContainer__row .card__body {\n        margin: 0.75em 0; }\n@media (min-width: 768px) and (max-width: 992px) {\n          .cardsContainer__row .card__body {\n            min-height: 13rem; } }\n@media (min-width: 992px) {\n          .cardsContainer__row .card__body {\n            min-height: 14rem; } }\n.cardsContainer__row .card__body ul {\n          padding: 0 0.9375em;\n          list-style: none; }\n.cardsContainer__row .card__body ul li:before {\n            content: \"\\2022\";\n            color: #EE3124;\n            font-weight: bold;\n            display: inline-block;\n            width: 1em;\n            margin-left: -1em; }\n.cardsContainer__row .card__footer {\n        margin-top: 1.25em;\n        -o-box-sizing: border-box;\n        -ms-box-sizing: border-box;\n        box-sizing: border-box;\n        -webkit-display: flex;\n        -moz-display: flex;\n        -o-display: flex;\n        -ms-display: flex;\n        display: -webkit-box;\n        display: flex;\n        -moz-justify-content: flex-end;\n        -o-justify-content: flex-end;\n        -ms-justify-content: flex-end;\n        -webkit-box-pack: end;\n                justify-content: flex-end;\n        -moz-align-items: center;\n        -o-align-items: center;\n        -ms-align-items: center;\n        -webkit-box-align: center;\n                align-items: center; }\n.cardsContainer__row .card__footer span {\n          color: #EE3124;\n          margin-right: 0.625em; }\n.cardsContainer__row .card__footer img {\n          width: 20px; }\n.cardsContainer__buttonContainer {\n    width: 100%;\n    margin: 2.5em 0;\n    display: block; }\n/**\r\n * Layout - Main container\r\n */\n.container {\n  width: 100%;\n  background-color: #ffffff;\n  position: relative;\n  padding: 2em 1.25em;\n  min-height: 100vh;\n  -o-box-sizing: border-box;\n  -ms-box-sizing: border-box;\n  box-sizing: border-box;\n  -webkit-display: flex;\n  -moz-display: flex;\n  -o-display: flex;\n  -ms-display: flex;\n  display: -webkit-box;\n  display: flex;\n  -moz-justify-content: flex-start;\n  -o-justify-content: flex-start;\n  -ms-justify-content: flex-start;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  -moz-align-items: center;\n  -o-align-items: center;\n  -ms-align-items: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -moz-flex-direction: column;\n  -o-flex-direction: column;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column; }\n@media (min-width: 992px) {\n    .container--menu {\n      width: 50%;\n      margin: 0 auto; } }\n@media (min-width: 1200px) {\n    .container--menu {\n      width: 50%;\n      margin: 0 auto; } }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvY2FtL3Njc3MvY29tcG9uZW50cy9mb3JiaWRkZW4vQzpcXFVzZXJzXFxlbG9wZXpvc3VuYVxcT25lRHJpdmUgLSBEWEMgUHJvZHVjdGlvblxcRFhDIC0gRGF2aXZpZW5kYSAtIENBTVxcTUJhYVNcXG1iYWFzLWZyb250L3NyY1xcYXNzZXRzXFxjYW1cXHNjc3NcXGNvbXBvbmVudHNcXGZvcmJpZGRlblxcX2ZiZG4uc2NzcyIsInNyYy9hc3NldHMvY2FtL3Njc3MvY29tcG9uZW50cy9mb3JiaWRkZW4vX2ZiZG4uc2NzcyIsInNyYy9hc3NldHMvY2FtL3Njc3MvY29tcG9uZW50cy9mb3JiaWRkZW4vQzpcXFVzZXJzXFxlbG9wZXpvc3VuYVxcT25lRHJpdmUgLSBEWEMgUHJvZHVjdGlvblxcRFhDIC0gRGF2aXZpZW5kYSAtIENBTVxcTUJhYVNcXG1iYWFzLWZyb250L3NyY1xcYXNzZXRzXFxjYW1cXHNjc3NcXGJhc2VcXHJlc2V0XFxfbm9ybWFsaXplLnNjc3MiLCJzcmMvYXNzZXRzL2NhbS9zY3NzL2NvbXBvbmVudHMvZm9yYmlkZGVuL0M6XFxVc2Vyc1xcZWxvcGV6b3N1bmFcXE9uZURyaXZlIC0gRFhDIFByb2R1Y3Rpb25cXERYQyAtIERhdml2aWVuZGEgLSBDQU1cXE1CYWFTXFxtYmFhcy1mcm9udC9zcmNcXGFzc2V0c1xcY2FtXFxzY3NzXFxiYXNlXFx2YXJpYWJsZXNcXF9iYXNlLXZhcmlhYmxlcy5zY3NzIiwic3JjL2Fzc2V0cy9jYW0vc2Nzcy9jb21wb25lbnRzL2ZvcmJpZGRlbi9DOlxcVXNlcnNcXGVsb3Blem9zdW5hXFxPbmVEcml2ZSAtIERYQyBQcm9kdWN0aW9uXFxEWEMgLSBEYXZpdmllbmRhIC0gQ0FNXFxNQmFhU1xcbWJhYXMtZnJvbnQvc3JjXFxhc3NldHNcXGNhbVxcc2Nzc1xcYmFzZVxcYm9keVxcX2JvZHkuc2NzcyIsInNyYy9hc3NldHMvY2FtL3Njc3MvY29tcG9uZW50cy9mb3JiaWRkZW4vQzpcXFVzZXJzXFxlbG9wZXpvc3VuYVxcT25lRHJpdmUgLSBEWEMgUHJvZHVjdGlvblxcRFhDIC0gRGF2aXZpZW5kYSAtIENBTVxcTUJhYVNcXG1iYWFzLWZyb250L3NyY1xcYXNzZXRzXFxjYW1cXHNjc3NcXGJhc2VcXGZvbnRcXF9mb250LWZhY2Uuc2NzcyIsInNyYy9hc3NldHMvY2FtL3Njc3MvY29tcG9uZW50cy9mb3JiaWRkZW4vQzpcXFVzZXJzXFxlbG9wZXpvc3VuYVxcT25lRHJpdmUgLSBEWEMgUHJvZHVjdGlvblxcRFhDIC0gRGF2aXZpZW5kYSAtIENBTVxcTUJhYVNcXG1iYWFzLWZyb250L3NyY1xcYXNzZXRzXFxjYW1cXHNjc3NcXGJhc2VcXGZvbnRcXF9mb250LWVsZW1lbnRzLnNjc3MiLCJzcmMvYXNzZXRzL2NhbS9zY3NzL2NvbXBvbmVudHMvZm9yYmlkZGVuL0M6XFxVc2Vyc1xcZWxvcGV6b3N1bmFcXE9uZURyaXZlIC0gRFhDIFByb2R1Y3Rpb25cXERYQyAtIERhdml2aWVuZGEgLSBDQU1cXE1CYWFTXFxtYmFhcy1mcm9udC9zcmNcXGFzc2V0c1xcY2FtXFxzY3NzXFxsYXlvdXRcXGZvcm1cXF9mb3JtLWxheW91dC5zY3NzIiwic3JjL2Fzc2V0cy9jYW0vc2Nzcy9jb21wb25lbnRzL2ZvcmJpZGRlbi9DOlxcVXNlcnNcXGVsb3Blem9zdW5hXFxPbmVEcml2ZSAtIERYQyBQcm9kdWN0aW9uXFxEWEMgLSBEYXZpdmllbmRhIC0gQ0FNXFxNQmFhU1xcbWJhYXMtZnJvbnQvc3JjXFxhc3NldHNcXGNhbVxcc2Nzc1xcYmFzZVxccHJlZml4ZXNcXF9wcmVmaXhlcy5zY3NzIiwic3JjL2Fzc2V0cy9jYW0vc2Nzcy9jb21wb25lbnRzL2ZvcmJpZGRlbi9DOlxcVXNlcnNcXGVsb3Blem9zdW5hXFxPbmVEcml2ZSAtIERYQyBQcm9kdWN0aW9uXFxEWEMgLSBEYXZpdmllbmRhIC0gQ0FNXFxNQmFhU1xcbWJhYXMtZnJvbnQvc3JjXFxhc3NldHNcXGNhbVxcc2Nzc1xcYmFzZVxcbWVkaWFxdWVyeXNcXF9tZWRpYXF1ZXJ5cy5zY3NzIiwic3JjL2Fzc2V0cy9jYW0vc2Nzcy9jb21wb25lbnRzL2ZvcmJpZGRlbi9DOlxcVXNlcnNcXGVsb3Blem9zdW5hXFxPbmVEcml2ZSAtIERYQyBQcm9kdWN0aW9uXFxEWEMgLSBEYXZpdmllbmRhIC0gQ0FNXFxNQmFhU1xcbWJhYXMtZnJvbnQvc3JjXFxhc3NldHNcXGNhbVxcc2Nzc1xcbGF5b3V0XFxjYXJkc1xcX2NhcmRzLWxheW91dC5zY3NzIiwic3JjL2Fzc2V0cy9jYW0vc2Nzcy9jb21wb25lbnRzL2ZvcmJpZGRlbi9DOlxcVXNlcnNcXGVsb3Blem9zdW5hXFxPbmVEcml2ZSAtIERYQyBQcm9kdWN0aW9uXFxEWEMgLSBEYXZpdmllbmRhIC0gQ0FNXFxNQmFhU1xcbWJhYXMtZnJvbnQvc3JjXFxhc3NldHNcXGNhbVxcc2Nzc1xcbGF5b3V0XFxtYWluXFxfbWFpbi1jb250YWluZXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Q0NFQztBQ0tELHFFQUFBO0FBRUE7Ozs7RURERTtBQ09GO0VBQ0UsdUJBQXVCO0VBQUUsTUFBQTtFQUN6QiwwQkFBMEI7RUFBRSxNQUFBO0VBQzVCLDhCQUE4QjtFQUFFLE1BQUEsRUFBTztBQUd6Qzs7RURGRTtBQ01GO0VBQ0UsU0FBUyxFQUFBO0FBR1g7K0VETCtFO0FDUS9FOzs7OztFREZFO0FDU0Y7Ozs7Ozs7Ozs7Ozs7RUFhRSxjQUFjLEVBQUE7QUFHaEI7OztFRE5FO0FDV0Y7Ozs7RUFJRSxxQkFBcUI7RUFBRSxNQUFBO0VBQ3ZCLHdCQUF3QjtFQUFFLE1BQUEsRUFBTztBQUduQzs7O0VETkU7QUNXRjtFQUNFLGFBQWE7RUFDYixTQUFTLEVBQUE7QUFHWDs7O0VEUkU7QUFDRjs7RUNjRSxhQUFhLEVBQUE7QUFHZjsrRURaK0U7QUNlL0U7O0VEWkU7QUNnQkY7RUFDRSw2QkFBNkIsRUFBQTtBQUcvQjs7RURkRTtBQ2tCRjs7RUFFRSxVQUFVLEVBQUE7QUFHWjsrRURqQitFO0FDb0IvRTs7RURqQkU7QUNxQkY7RUFDRSx5QkFBeUIsRUFBQTtBQUczQjs7RURuQkU7QUN1QkY7O0VBRUUsaUJBQWlCLEVBQUE7QUFHbkI7O0VEckJFO0FDeUJGO0VBQ0Usa0JBQWtCLEVBQUE7QUFHcEI7OztFRHRCRTtBQzJCRjtFQUNFLGNBQWM7RUFDZCxnQkFBZ0IsRUFBQTtBQUdsQjs7RUR6QkU7QUM2QkY7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVyxFQUFBO0FBR2I7O0VEM0JFO0FDK0JGO0VBQ0UsY0FBYyxFQUFBO0FBR2hCOztFRDdCRTtBQ2lDRjs7RUFFRSxjQUFjO0VBQ2QsY0FBYztFQUNkLGtCQUFrQjtFQUNsQix3QkFBd0IsRUFBQTtBQUcxQjtFQUNFLFdBQVcsRUFBQTtBQUdiO0VBQ0UsZUFBZSxFQUFBO0FBR2pCOytFRGxDK0U7QUNxQy9FOztFRGxDRTtBQ3NDRjtFQUNFLFNBQVMsRUFBQTtBQUdYOztFRHBDRTtBQ3dDRjtFQUNFLGdCQUFnQixFQUFBO0FBR2xCOytFRHZDK0U7QUMwQy9FOztFRHZDRTtBQzJDRjtFQUNFLGdCQUFnQixFQUFBO0FBR2xCOztFRHpDRTtBQzZDRjtFQUVFLHVCQUF1QjtFQUN2QixTQUFTO0VBQ1QsU0FBUztFQUNULGFBQWE7RUFDYixnQ0N2TStCLEVBQUE7QUQwTWpDOztFRDNDRTtBQytDRjtFQUNFLGNBQWMsRUFBQTtBQUdoQjs7RUQ3Q0U7QUNpREY7Ozs7RUFJRSxpQ0FBaUM7RUFDakMsY0FBYyxFQUFBO0FBR2hCOytFRGhEK0U7QUNtRC9FOzs7RUQvQ0U7QUNvREY7Ozs7O0VEOUNFO0FDcURGOzs7OztFQUtFLGNBQWM7RUFBRSxNQUFBO0VBQ2hCLGFBQWE7RUFBRSxNQUFBO0VBQ2YsU0FBUztFQUFFLE1BQUEsRUFBTztBQUdwQjs7RURoREU7QUNvREY7RUFDRSxpQkFBaUIsRUFBQTtBQUduQjs7Ozs7RUQvQ0U7QUNzREY7O0VBRUUsb0JBQW9CLEVBQUE7QUFHdEI7Ozs7OztFRGhERTtBQ3dERjs7OztFQUlFLDBCQUEwQjtFQUFFLE1BQUE7RUFDNUIsZUFBZTtFQUFFLE1BQUEsRUFBTztBQUcxQjs7RURwREU7QUN3REY7O0VBRUUsZUFBZSxFQUFBO0FBR2pCOztFRHRERTtBQzBERjs7RUFFRSxTQUFTO0VBQ1QsVUFBVSxFQUFBO0FBR1o7OztFRHZERTtBQzRERjtFQUNFLG1CQUFtQixFQUFBO0FBR3JCOzs7Ozs7RUR0REU7QUM4REY7O0VBRUUsc0JBQXNCO0VBQUUsTUFBQTtFQUN4QixVQUFVO0VBQUUsTUFBQSxFQUFPO0FBR3JCOzs7O0VEeERFO0FDOERGOztFQUVFLFlBQVksRUFBQTtBQUdkOzs7O0VEMURFO0FDZ0VGO0VBQ0UsNkJBQTZCO0VBQUUsTUFBQTtFQUVFLE1BQUE7RUFDakMsdUJBQXVCLEVBQUE7QUFHekI7Ozs7RUQxREU7QUNnRUY7O0VBRUUsd0JBQXdCLEVBQUE7QUFHMUI7O0VEOURFO0FDa0VGO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYiw4QkFBOEIsRUFBQTtBQUdoQzs7O0VEL0RFO0FDb0VGO0VBQ0UsU0FBUztFQUFFLE1BQUE7RUFDWCxVQUFVO0VBQUUsTUFBQSxFQUFPO0FBR3JCOztFRGhFRTtBQ29FRjtFQUNFLGNBQWMsRUFBQTtBQUdoQjs7O0VEakVFO0FDc0VGO0VBQ0UsaUJBQWlCLEVBQUE7QUFHbkI7K0VEckUrRTtBQ3dFL0U7O0VEckVFO0FDeUVGO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQixFQUFBO0FBR25COztFQUVFLFVBQVUsRUFBQTtBRTVhWjs7RUh1V0U7QUduV0Y7RUFFRSxtQ0FBcUMsRUFBQTtBQUd2QztFQUVFLGNEbUI0QjtFQ2xCNUIscUJEa0I0QjtFQ2pCNUIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osVUFBVTtFQUNWLGtCQUFrQjtFQUVsQixzQkFBc0I7RUFDdEIsbUNBQW1DO0VBQ25DLGtDQUFrQyxFQUFBO0FDa0JwQzs7RUptVkU7QUkzVkQ7RUFDQyx3QkFXNEI7RUFWNUIsa0JBVTZEO0VBVDdELGdCQVNxRDtFQVJyRCx5UEFQNEYsRUFBQTtBQUc3RjtFQUNDLHdCQVk0QjtFQVg1QixrQkFXa0U7RUFWbEUsZ0JBVTBEO0VBVDFELDZRQVA0RixFQUFBO0FBRzdGO0VBQ0Msd0JBYTRCO0VBWjVCLGtCQVlnRTtFQVhoRSxpQkFXd0Q7RUFWeEQsaVFBUDRGLEVBQUE7QUNiOUY7O0VMZ1lFO0FLNVhGO0VBZEksY0hNaUI7RUdMakIsd0JIRHNCO0VHRXRCLG1CSHVCMEI7RUd0QjFCLGdCQWFnRTtFQVpoRSx5QkhxQjBCO0VHcEIxQix3QkhvQjBCO0VHbkIxQiwyQkhtQjBCO0VHbEIxQixrQkFSOEosRUFBQTtBQW9CbEs7RUFuQkksY0hNaUI7RUdMakIsd0JIRHNCO0VHRXRCLGlCSHVCMEI7RUd0QjFCLGdCQWtCK0Q7RUFqQi9ELHlCSHFCMEI7RUdwQjFCLHdCSG9CMEI7RUduQjFCLG9CSG1CMEI7RUdsQjFCLGtCQVI4SixFQUFBO0FBeUJsSztFQXhCSSxjSE1pQjtFR0xqQix3QkhEc0I7RUdFdEIsa0JIdUIwQjtFR3RCMUIsZ0JBdUIrRDtFQXRCL0QseUJIcUIwQjtFR3BCMUIsZUhvQjBCO0VHbkIxQiwyQkhtQjBCO0VHbEIxQixrQkFSOEosRUFBQTtBQThCbEs7RUE3QkksY0hNaUI7RUdMakIsd0JIRHNCO0VHRXRCLGtCSHVCMEI7RUd0QjFCLGdCQTRCeUM7RUEzQnpDLHlCSHFCMEI7RUdwQjFCLGVIb0IwQjtFR25CMUIsa0JIbUIwQjtFR2xCMUIsa0JBUjhKLEVBQUE7QUFtQ2xLO0VBbENJLGNITWlCO0VHTGpCLHdCSERzQjtFR0V0QixjSHVCMEI7RUd0QjFCLGdCQWlDeUM7RUFoQ3pDLHFCSHFCMEI7RUdwQjFCLGVIb0IwQjtFR25CMUIsdUJIbUIwQjtFR2xCMUIsa0JBUjhKLEVBQUE7QUF3Q2xLO0VBdkNJLGNITWlCO0VHTGpCLHdCSERzQjtFR0V0QixpQkh1QjBCO0VHdEIxQixnQkFzQ3lDO0VBckN6Qyx5QkhxQjBCO0VHcEIxQixlSG9CMEI7RUduQjFCLDJCSG1CMEI7RUdsQjFCLGtCQVI4SixFQUFBO0FBNkNsSztFQTVDSSxjSE93QjtFR054Qix3QkhEc0I7RUdFdEIsY0h1QjBCO0VHdEIxQixnQkEyQ3NGO0VBMUN0RixxQkhxQjBCO0VHcEIxQixlSG9CMEI7RUduQjFCLHVCSG1CMEI7RUdsQjFCLGtCQVI4SixFQUFBO0FBa0RsSztFQWpESSxjSE1pQjtFR0xqQix3QkhEc0I7RUdFdEIsbUJIdUIwQjtFR3RCMUIsZ0JBZ0R3QztFQS9DeEMseUJIcUIwQjtFR3BCMUIsd0JIb0IwQjtFR25CMUIsa0JIbUIwQjtFR2xCMUIsa0JBUjhKLEVBQUE7QUF1RGxLO0VBdERJLGNITWlCO0VHTGpCLHdCSERzQjtFR0V0QixtQkh1QjBCO0VHdEIxQixnQkFxRHlDO0VBcER6Qyx5QkhxQjBCO0VHcEIxQix3QkhvQjBCO0VHbkIxQixrQkhtQjBCO0VHbEIxQixrQkFSOEosRUFBQTtBQTREbEs7O0VMNGFFO0FLeGFGO0VBRUksdUJBQXVCLEVBQUE7QUFHM0I7RUFFSSx5QkFBb0MsRUFBQTtBQUd4QztFQUVJLGNIckVpQixFQUFBO0FHd0VyQjtFQUVJLGNIdEVvQixFQUFBO0FHeUV4Qjs7RUxtYUU7QUsvWkQ7RUFFRyxjQUFjO0VBQ2QsZ0JBQWdCLEVBQUE7QUFHbkI7RUFFRyxjQUFjO0VBQ2QsaUJBQWlCLEVBQUE7QUFHcEI7RUFFRyxjQUFjO0VBQ2Qsa0JBQWtCLEVBQUE7QUFHdEI7O0VMNFpFO0FLeFpEO0VBRUcsOEJBQThCLEVBQUE7QUFHbEM7O0VMeVpFO0FLclpEO0VBRUcsZ0JBQWdCLEVBQUE7QUNuSXBCOztDTjRoQkM7QU14aEJEO0VBRUMsV0FBVztFQUNYLGNBQWM7RUNLSCx5QkRIWTtFQ0daLDBCREhZO0VDT2hCLHNCRFBnQixFQUFBO0FFUXBCO0lGYko7TUFTRSxjQUFpQjtNQUNqQix5QkpVd0I7TUlUeEIsdUJKcUI0QjtNSXBCNUIsMERBQTBEO01BQzFELGlDQUFpQztNQUNqQyw0QkFBNEI7TUFDNUIsMkNKS3dCO01JSnhCLHNCSmdCNEI7TUt4QmxCLCtDTE1nQjtNS05oQixnRExNZ0I7TUtGcEIsNENMRW9CLEVBQUEsRUltSjNCO0FBNUlBO0lBRUMsZUFBZ0I7SUNmTix5QkRpQmE7SUNqQmIsMEJEaUJhO0lDYmpCLHNCRGFpQjtJQ2pCYixxQkRrQkk7SUNsQkosa0JEa0JJO0lDbEJKLGdCRGtCSTtJQ2xCSixpQkRrQkk7SUNkUixvQkRjUTtJQ2RSLGFEY1E7SUNsQkosa0NEbUJvQjtJQ25CcEIsZ0NEbUJvQjtJQ25CcEIsaUNEbUJvQjtJQ2Z4Qiw2QkRld0I7SUNuQnBCLDRCRG9CYztJQ3BCZCwwQkRvQmM7SUNwQmQsMkJEb0JjO0lDaEJsQix3QkRnQmtCO1lDaEJsQix1QkRnQmtCO0lDcEJkLDJCRHFCYTtJQ3JCYix5QkRxQmE7SUNqQmpCLDRCRGlCaUI7SUNqQmpCLDZCRGlCaUI7WUNqQmpCLHNCRGlCaUIsRUFBQTtBRW5CckI7TUZXSDtRQ2JXLHdCRHlCVztRQ3pCWCxzQkR5Qlc7UUNyQmYsOEJEcUJlO1FDckJmLDZCRHFCZTtnQkNyQmYsbUJEcUJlO1FDekJYLGtCRDBCTztRQ3RCWCxlRHNCVyxFQUFBLEVBa0dqQjtBRXZIRTtNRlFIO1FDYlcsd0JEK0JXO1FDL0JYLHNCRCtCVztRQzNCZiw4QkQyQmU7UUMzQmYsNkJEMkJlO2dCQzNCZixtQkQyQmU7UUMvQlgsa0JEZ0NPO1FDNUJYLGVENEJXLEVBQUEsRUE0RmpCO0FBL0dBO01BdUJDLGtCQUFrQixFQUFBO0FFbENqQjtRRldGO1VBeUJFLFVBQVUsRUFBQSxFQXFCWDtBRXREQztRRlFGO1VBNEJFLFVBQVUsRUFBQSxFQWtCWDtBQTlDRDtRQStCRSxVQUFVO1FBQ1YsbUJBQW1CLEVBQUE7QUU5Q25CO1VGY0Y7WUFrQ0csVUFBVSxFQUFBLEVBUVg7QUVyREE7VUZXRjtZQXFDRyxXQUFXLEVBQUEsRUFLWjtBRWxEQTtVRlFGO1lBd0NHLFVBQVUsRUFBQSxFQUVYO0FBMUNGO1FBNENFLGNKaERvQixFQUFBO0FJSXRCO01BaURDLFdBQVc7TUFDWCxTQUFTO01BQ1QsVUFBVSxFQUFBO0FFOURUO1FGV0Y7VUFxREUsVUFBVSxFQUFBLEVBbUJYO0FFaEZDO1FGUUY7VUF3REUsVUFBVSxFQUFBLEVBZ0JYO0FBeEVEO1FBMkRFLFlBQVksRUFBQTtBQTNEZDtRQThERSxrQkFBa0IsRUFBQTtBQTlEcEI7VUFnRUcsZUFBZTtVQUNmLHlCQUFpQztVQUNqQyxxQkFBcUI7VUFDckIsa0JBQWtCO1VBQ2xCLGlCQUFpQjtVQUNqQiwrQkFBK0IsRUFBQTtBQXJFbEM7TUEyRUMsV0FBVztNQUNYLFNBQVM7TUFDVCxnQkpsRTJCLEVBQUE7QU10QjFCO1FGV0Y7VUErRUUsVUFBVSxFQUFBLEVBS1g7QUU1RkM7UUZRRjtVQWtGRSxVQUFVLEVBQUEsRUFFWDtBQXBGRDtNQXNGQyxXQUFXO01BQ1gsU0FBUztNQUNULGdCSjdFMkI7TUk4RTNCLGtCQUFrQixFQUFBO0FFcEdqQjtRRldGO1VBMkZFLFVBQVUsRUFBQSxFQUtYO0FFeEdDO1FGUUY7VUE4RkUsVUFBVSxFQUFBLEVBRVg7QUFoR0Q7TUFrR0Msb0JBQWE7TUFBYixhQUFhO01BQ2IsV0FBVyxFQUFBO0FBbkdaO1FBcUdFLFdBQVc7UUFDWCxZQUFZLEVBQUE7QUVqSFo7VUZXRjtZQXdHRyxVQUFVLEVBQUEsRUFLWDtBRXJIQTtVRlFGO1lBMkdHLFVBQVUsRUFBQSxFQUVYO0FBR0g7SUFFQyxXQUFXO0lBQ1gsZUFBZ0I7SUFDaEIsY0FBYyxFQUFBO0FBQ2Q7TUNsSVUseUJEb0ljO01DcElkLDBCRG9JYztNQ2hJbEIsc0JEZ0lrQjtNQ3BJZCxxQkRxSUs7TUNySUwsa0JEcUlLO01DcklMLGdCRHFJSztNQ3JJTCxpQkRxSUs7TUNqSVQsb0JEaUlTO01DaklULGFEaUlTO01DcklMLG1DRHNJc0I7TUN0SXRCLGlDRHNJc0I7TUN0SXRCLGtDRHNJc0I7TUNsSTFCLHlCRGtJMEI7Y0NsSTFCLDhCRGtJMEI7TUN0SXRCLHdCRHVJVztNQ3ZJWCxzQkR1SVc7TUN2SVgsdUJEdUlXO01DbklmLHlCRG1JZTtjQ25JZixtQkRtSWUsRUFBQTtBQUxwQjtRQVNDLFdBQVc7UUFDWCxrQkpwSDBCO1FJcUgxQixVQUFVLEVBQUE7QUFYWDtVQWNFLFdBQVcsRUFBQTtBQWRiO1FBa0JDLGtCSjVIMEI7UUk2SDFCLFdBQVcsRUFBQTtBR2pLZjs7Q1R3dEJDO0FTcHRCRDtFQUVDLFdBQVc7RUFDWCxjQUFjO0VGS0gseUJFSFk7RUZHWiwwQkVIWTtFRk9oQixzQkVQZ0IsRUFBQTtBRFFwQjtJQ2JKO01BUUUsY0FBaUI7TUFDakIseUJQV3dCO01PVnhCLHVCUHNCNEI7TU9yQjVCLDBEQUEwRDtNQUMxRCxpQ0FBaUM7TUFDakMsNEJBQTRCO01BQzVCLDJDUE13QjtNT0x4QixzQlBpQjRCO01LeEJsQiwrQ0xNZ0I7TUtOaEIsZ0RMTWdCO01LRnBCLDRDTEVvQixFQUFBLEVPd0gzQjtBQWxIQTtJQUVDLGVBQWdCO0lBQ2hCLFdBQVc7SUFDWCxpQkFBaUI7SUZoQlAseUJFa0JhO0lGbEJiLDBCRWtCYTtJRmRqQixzQkVjaUI7SUZsQmIscUJFbUJJO0lGbkJKLGtCRW1CSTtJRm5CSixnQkVtQkk7SUZuQkosaUJFbUJJO0lGZlIsb0JFZVE7SUZmUixhRWVRO0lGbkJKLDRCRW9CYztJRnBCZCwwQkVvQmM7SUZwQmQsMkJFb0JjO0lGaEJsQix3QkVnQmtCO1lGaEJsQix1QkVnQmtCO0lGcEJkLDRCRXFCYztJRnJCZCwwQkVxQmM7SUZyQmQsMkJFcUJjO0lGakJsQix3QkVpQmtCO1lGakJsQix1QkVpQmtCO0lGckJkLDJCRXNCYTtJRnRCYix5QkVzQmE7SUZsQmpCLDRCRWtCaUI7SUZsQmpCLDZCRWtCaUI7WUZsQmpCLHNCRWtCaUIsRUFBQTtBRHBCckI7TUNVSDtRRlpXLHdCRTBCVztRRjFCWCxzQkUwQlc7UUZ0QmYsOEJFc0JlO1FGdEJmLDZCRXNCZTtnQkZ0QmYsbUJFc0JlO1FGMUJYLGtCRTJCTztRRnZCWCxlRXVCVyxFQUFBLEVBNEZqQjtBRGxIRTtNQ09IO1FGWlcsd0JFZ0NXO1FGaENYLHNCRWdDVztRRjVCZiw4QkU0QmU7UUY1QmYsNkJFNEJlO2dCRjVCZixtQkU0QmU7UUZoQ1gsa0JFaUNPO1FGN0JYLGVFNkJXLEVBQUEsRUFzRmpCO0FBM0dBO01BMEJDLHlCUGQyQjtNT2UzQixxQlBmMkI7TU9nQjNCLG1CUDNCb0I7TU80QnBCLGNBQWM7TUFDZCxXQUFXO01GMUNGLHlCRTRDYztNRjVDZCwwQkU0Q2M7TUZ4Q2xCLHNCRXdDa0IsRUFBQTtBRDFDdEI7UUNVRjtVQW1DRSxpQkFBaUI7VUFDakIsVUFBVTtVQUNWLFlBQVksRUFBQSxFQXFFYjtBRGpIQztRQ09GO1VBeUNFLGlCQUFpQjtVQUNqQixVQUFVO1VBQ1YsWUFBWSxFQUFBLEVBK0RiO0FBMUdEO1FBK0NFLGdDUGxEb0I7UU9tRHBCLFdBQVcsRUFBQTtBQWhEYjtVQW1ERyxpQkFBaUIsRUFBQTtBQW5EcEI7WUFzREksY1B6RGtCLEVBQUE7QU9HdEI7UUE0REUsZ0JBQWdCLEVBQUE7QUR0RWhCO1VDVUY7WUErREcsaUJBQWlCLEVBQUEsRUF1QmxCO0FEN0ZBO1VDT0Y7WUFtRUcsaUJBQWlCLEVBQUEsRUFtQmxCO0FBdEZGO1VBdUVHLG1CUDNEeUI7VU80RHpCLGdCQUFnQixFQUFBO0FBeEVuQjtZQTZFSyxnQkFBZ0I7WUFDaEIsY1BqRmlCO1lPa0ZqQixpQkFBaUI7WUFDakIscUJBQXFCO1lBQ3JCLFVBQVU7WUFDVixpQkFBaUIsRUFBQTtBQWxGdEI7UUF5RkUsa0JQN0UwQjtRS3hCbEIseUJFdUdlO1FGdkdmLDBCRXVHZTtRRm5HbkIsc0JFbUdtQjtRRnZHZixxQkV3R007UUZ4R04sa0JFd0dNO1FGeEdOLGdCRXdHTTtRRnhHTixpQkV3R007UUZwR1Ysb0JFb0dVO1FGcEdWLGFFb0dVO1FGeEdOLDhCRXlHa0I7UUZ6R2xCLDRCRXlHa0I7UUZ6R2xCLDZCRXlHa0I7UUZyR3RCLHFCRXFHc0I7Z0JGckd0Qix5QkVxR3NCO1FGekdsQix3QkUwR1k7UUYxR1osc0JFMEdZO1FGMUdaLHVCRTBHWTtRRnRHaEIseUJFc0dnQjtnQkZ0R2hCLG1CRXNHZ0IsRUFBQTtBQTlGdEI7VUFrR0csY1ByR21CO1VPc0duQixxQlB2RnlCLEVBQUE7QU9aNUI7VUF1R0csV0FBVyxFQUFBO0FBS2Y7SUFFQyxXQUFXO0lBQ1gsZUFBZ0I7SUFDaEIsY0FBYyxFQUFBO0FDeEloQjs7RVZxM0JFO0FVajNCRjtFQUVJLFdBQVc7RUFDWCx5QlJnQjZCO0VRZjdCLGtCQUFrQjtFQUNsQixtQlIyQjBCO0VRMUIxQixpQkFBaUI7RUhFVCx5QkdBa0I7RUhBbEIsMEJHQWtCO0VISXRCLHNCR0pzQjtFSEFsQixxQkdDUztFSERULGtCR0NTO0VIRFQsZ0JHQ1M7RUhEVCxpQkdDUztFSEdiLG9CR0hhO0VIR2IsYUdIYTtFSERULGdDR0V1QjtFSEZ2Qiw4QkdFdUI7RUhGdkIsK0JHRXVCO0VIRTNCLHVCR0YyQjtVSEUzQiwyQkdGMkI7RUhGdkIsd0JHR2U7RUhIZixzQkdHZTtFSEhmLHVCR0dlO0VIQ25CLHlCR0RtQjtVSENuQixtQkdEbUI7RUhIZiwyQkdJa0I7RUhKbEIseUJHSWtCO0VIQXRCLDRCR0FzQjtFSEF0Qiw2QkdBc0I7VUhBdEIsc0JHQXNCLEVBQUE7QUZDMUI7SUVDQTtNQUdRLFVBQVU7TUFDVixjQUFjLEVBQUEsRUFNckI7QUZSRDtJRUZBO01BT1EsVUFBVTtNQUNWLGNBQWMsRUFBQSxFQUVyQiIsImZpbGUiOiJzcmMvYXNzZXRzL2NhbS9zY3NzL2NvbXBvbmVudHMvZm9yYmlkZGVuL19mYmRuLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBcclxuICAgIENvbWVudGFyaW9zIGRlbCBhdXRvclxyXG4qL1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gSW1wb3J0IFNNQUNTUyBCYXNlIENhdGVnb3J5XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5AaW1wb3J0ICcuLi8uLi9iYXNlL19iYXNlJztcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEltcG9ydCBTTUFDU1MgTGF5b3V0IENhdGVnb3J5XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5AaW1wb3J0ICcuLi8uLi9sYXlvdXQvX2xheW91dCc7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBJbXBvcnQgU01BQ1NTIE1vZHVsZXMgZm9yIGZvcmJpZGRlblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4iLCIvKiBcclxuICAgIENvbWVudGFyaW9zIGRlbCBhdXRvclxyXG4qL1xuLyohIG5vcm1hbGl6ZS5zY3NzIHYwLjEuMCB8IE1JVCBMaWNlbnNlIHwgYmFzZWQgb24gZ2l0LmlvL25vcm1hbGl6ZSAqL1xuLyoqXHJcbiAqIDEuIFNldCBkZWZhdWx0IGZvbnQgZmFtaWx5IHRvIHNhbnMtc2VyaWYuXHJcbiAqIDIuIFByZXZlbnQgaU9TIHRleHQgc2l6ZSBhZGp1c3QgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlLCB3aXRob3V0IGRpc2FibGluZ1xyXG4gKiAgICB1c2VyIHpvb20uXHJcbiAqL1xuaHRtbCB7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAvKiAxICovXG4gIC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xuICAvKiAyICovXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcbiAgLyogMiAqLyB9XG5cbi8qKlxyXG4gKiBSZW1vdmUgZGVmYXVsdCBtYXJnaW4uXHJcbiAqL1xuYm9keSB7XG4gIG1hcmdpbjogMDsgfVxuXG4vKiBIVE1MNSBkaXNwbGF5IGRlZmluaXRpb25zXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4vKipcclxuICogQ29ycmVjdCBgYmxvY2tgIGRpc3BsYXkgbm90IGRlZmluZWQgZm9yIGFueSBIVE1MNSBlbGVtZW50IGluIElFIDgvOS5cclxuICogQ29ycmVjdCBgYmxvY2tgIGRpc3BsYXkgbm90IGRlZmluZWQgZm9yIGBkZXRhaWxzYCBvciBgc3VtbWFyeWAgaW4gSUUgMTAvMTFcclxuICogYW5kIEZpcmVmb3guXHJcbiAqIENvcnJlY3QgYGJsb2NrYCBkaXNwbGF5IG5vdCBkZWZpbmVkIGZvciBgbWFpbmAgaW4gSUUgMTEuXHJcbiAqL1xuYXJ0aWNsZSxcbmFzaWRlLFxuZGV0YWlscyxcbmZpZ2NhcHRpb24sXG5maWd1cmUsXG5mb290ZXIsXG5oZWFkZXIsXG5oZ3JvdXAsXG5tYWluLFxubWVudSxcbm5hdixcbnNlY3Rpb24sXG5zdW1tYXJ5IHtcbiAgZGlzcGxheTogYmxvY2s7IH1cblxuLyoqXHJcbiAqIDEuIENvcnJlY3QgYGlubGluZS1ibG9ja2AgZGlzcGxheSBub3QgZGVmaW5lZCBpbiBJRSA4LzkuXHJcbiAqIDIuIE5vcm1hbGl6ZSB2ZXJ0aWNhbCBhbGlnbm1lbnQgb2YgYHByb2dyZXNzYCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cclxuICovXG5hdWRpbyxcbmNhbnZhcyxcbnByb2dyZXNzLFxudmlkZW8ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIC8qIDEgKi9cbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuICAvKiAyICovIH1cblxuLyoqXHJcbiAqIFByZXZlbnQgbW9kZXJuIGJyb3dzZXJzIGZyb20gZGlzcGxheWluZyBgYXVkaW9gIHdpdGhvdXQgY29udHJvbHMuXHJcbiAqIFJlbW92ZSBleGNlc3MgaGVpZ2h0IGluIGlPUyA1IGRldmljZXMuXHJcbiAqL1xuYXVkaW86bm90KFtjb250cm9sc10pIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgaGVpZ2h0OiAwOyB9XG5cbi8qKlxyXG4gKiBBZGRyZXNzIGBbaGlkZGVuXWAgc3R5bGluZyBub3QgcHJlc2VudCBpbiBJRSA4LzkvMTAuXHJcbiAqIEhpZGUgdGhlIGB0ZW1wbGF0ZWAgZWxlbWVudCBpbiBJRSA4LzkvMTEsIFNhZmFyaSwgYW5kIEZpcmVmb3ggPCAyMi5cclxuICovXG5baGlkZGVuXSxcbnRlbXBsYXRlIHtcbiAgZGlzcGxheTogbm9uZTsgfVxuXG4vKiBMaW5rc1xyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLyoqXHJcbiAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIGNvbG9yIGZyb20gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxyXG4gKi9cbmEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxuXG4vKipcclxuICogSW1wcm92ZSByZWFkYWJpbGl0eSB3aGVuIGZvY3VzZWQgYW5kIGFsc28gbW91c2UgaG92ZXJlZCBpbiBhbGwgYnJvd3NlcnMuXHJcbiAqL1xuYTphY3RpdmUsXG5hOmhvdmVyIHtcbiAgb3V0bGluZTogMDsgfVxuXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLyoqXHJcbiAqIEFkZHJlc3Mgc3R5bGluZyBub3QgcHJlc2VudCBpbiBJRSA4LzkvMTAvMTEsIFNhZmFyaSwgYW5kIENocm9tZS5cclxuICovXG5hYmJyW3RpdGxlXSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQ7IH1cblxuLyoqXHJcbiAqIEFkZHJlc3Mgc3R5bGUgc2V0IHRvIGBib2xkZXJgIGluIEZpcmVmb3ggNCssIFNhZmFyaSwgYW5kIENocm9tZS5cclxuICovXG5iLFxuc3Ryb25nIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cblxuLyoqXHJcbiAqIEFkZHJlc3Mgc3R5bGluZyBub3QgcHJlc2VudCBpbiBTYWZhcmkgYW5kIENocm9tZS5cclxuICovXG5kZm4ge1xuICBmb250LXN0eWxlOiBpdGFsaWM7IH1cblxuLyoqXHJcbiAqIEFkZHJlc3MgdmFyaWFibGUgYGgxYCBmb250LXNpemUgYW5kIG1hcmdpbiB3aXRoaW4gYHNlY3Rpb25gIGFuZCBgYXJ0aWNsZWBcclxuICogY29udGV4dHMgaW4gRmlyZWZveCA0KywgU2FmYXJpLCBhbmQgQ2hyb21lLlxyXG4gKi9cbmgxIHtcbiAgZm9udC1zaXplOiAyZW07XG4gIG1hcmdpbjogMC42N2VtIDA7IH1cblxuLyoqXHJcbiAqIEFkZHJlc3Mgc3R5bGluZyBub3QgcHJlc2VudCBpbiBJRSA4LzkuXHJcbiAqL1xubWFyayB7XG4gIGJhY2tncm91bmQ6ICNmZjA7XG4gIGNvbG9yOiAjMDAwOyB9XG5cbi8qKlxyXG4gKiBBZGRyZXNzIGluY29uc2lzdGVudCBhbmQgdmFyaWFibGUgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cclxuICovXG5zbWFsbCB7XG4gIGZvbnQtc2l6ZTogODAlOyB9XG5cbi8qKlxyXG4gKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBhZmZlY3RpbmcgYGxpbmUtaGVpZ2h0YCBpbiBhbGwgYnJvd3NlcnMuXHJcbiAqL1xuc3ViLFxuc3VwIHtcbiAgZm9udC1zaXplOiA3NSU7XG4gIGxpbmUtaGVpZ2h0OiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTsgfVxuXG5zdXAge1xuICB0b3A6IC0wLjVlbTsgfVxuXG5zdWIge1xuICBib3R0b206IC0wLjI1ZW07IH1cblxuLyogRW1iZWRkZWQgY29udGVudFxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLyoqXHJcbiAqIFJlbW92ZSBib3JkZXIgd2hlbiBpbnNpZGUgYGFgIGVsZW1lbnQgaW4gSUUgOC85LzEwLlxyXG4gKi9cbmltZyB7XG4gIGJvcmRlcjogMDsgfVxuXG4vKipcclxuICogQ29ycmVjdCBvdmVyZmxvdyBub3QgaGlkZGVuIGluIElFIDkvMTAvMTEuXHJcbiAqL1xuc3ZnOm5vdCg6cm9vdCkge1xuICBvdmVyZmxvdzogaGlkZGVuOyB9XG5cbi8qIEdyb3VwaW5nIGNvbnRlbnRcclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi8qKlxyXG4gKiBBZGRyZXNzIG1hcmdpbiBub3QgcHJlc2VudCBpbiBJRSA4LzkgYW5kIFNhZmFyaS5cclxuICovXG5maWd1cmUge1xuICBtYXJnaW46IDFlbSA0MHB4OyB9XG5cbi8qKlxyXG4gKiBBZGRyZXNzIGRpZmZlcmVuY2VzIGJldHdlZW4gRmlyZWZveCBhbmQgb3RoZXIgYnJvd3NlcnMuXHJcbiAqL1xuaHIge1xuICAtbW96LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXI6IDA7XG4gIG1hcmdpbjogMWVtIDA7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZmZmZmZmOyB9XG5cbi8qKlxyXG4gKiBDb250YWluIG92ZXJmbG93IGluIGFsbCBicm93c2Vycy5cclxuICovXG5wcmUge1xuICBvdmVyZmxvdzogYXV0bzsgfVxuXG4vKipcclxuICogQWRkcmVzcyBvZGQgYGVtYC11bml0IGZvbnQgc2l6ZSByZW5kZXJpbmcgaW4gYWxsIGJyb3dzZXJzLlxyXG4gKi9cbmNvZGUsXG5rYmQsXG5wcmUsXG5zYW1wIHtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xuICBmb250LXNpemU6IDFlbTsgfVxuXG4vKiBGb3Jtc1xyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLyoqXHJcbiAqIEtub3duIGxpbWl0YXRpb246IGJ5IGRlZmF1bHQsIENocm9tZSBhbmQgU2FmYXJpIG9uIE9TIFggYWxsb3cgdmVyeSBsaW1pdGVkXHJcbiAqIHN0eWxpbmcgb2YgYHNlbGVjdGAsIHVubGVzcyBhIGBib3JkZXJgIHByb3BlcnR5IGlzIHNldC5cclxuICovXG4vKipcclxuICogMS4gQ29ycmVjdCBjb2xvciBub3QgYmVpbmcgaW5oZXJpdGVkLlxyXG4gKiAgICBLbm93biBpc3N1ZTogYWZmZWN0cyBjb2xvciBvZiBkaXNhYmxlZCBlbGVtZW50cy5cclxuICogMi4gQ29ycmVjdCBmb250IHByb3BlcnRpZXMgbm90IGJlaW5nIGluaGVyaXRlZC5cclxuICogMy4gQWRkcmVzcyBtYXJnaW5zIHNldCBkaWZmZXJlbnRseSBpbiBGaXJlZm94IDQrLCBTYWZhcmksIGFuZCBDaHJvbWUuXHJcbiAqL1xuYnV0dG9uLFxuaW5wdXQsXG5vcHRncm91cCxcbnNlbGVjdCxcbnRleHRhcmVhIHtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIC8qIDEgKi9cbiAgZm9udDogaW5oZXJpdDtcbiAgLyogMiAqL1xuICBtYXJnaW46IDA7XG4gIC8qIDMgKi8gfVxuXG4vKipcclxuICogQWRkcmVzcyBgb3ZlcmZsb3dgIHNldCB0byBgaGlkZGVuYCBpbiBJRSA4LzkvMTAvMTEuXHJcbiAqL1xuYnV0dG9uIHtcbiAgb3ZlcmZsb3c6IHZpc2libGU7IH1cblxuLyoqXHJcbiAqIEFkZHJlc3MgaW5jb25zaXN0ZW50IGB0ZXh0LXRyYW5zZm9ybWAgaW5oZXJpdGFuY2UgZm9yIGBidXR0b25gIGFuZCBgc2VsZWN0YC5cclxuICogQWxsIG90aGVyIGZvcm0gY29udHJvbCBlbGVtZW50cyBkbyBub3QgaW5oZXJpdCBgdGV4dC10cmFuc2Zvcm1gIHZhbHVlcy5cclxuICogQ29ycmVjdCBgYnV0dG9uYCBzdHlsZSBpbmhlcml0YW5jZSBpbiBGaXJlZm94LCBJRSA4LzkvMTAvMTEsIGFuZCBPcGVyYS5cclxuICogQ29ycmVjdCBgc2VsZWN0YCBzdHlsZSBpbmhlcml0YW5jZSBpbiBGaXJlZm94LlxyXG4gKi9cbmJ1dHRvbixcbnNlbGVjdCB7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lOyB9XG5cbi8qKlxyXG4gKiAxLiBBdm9pZCB0aGUgV2ViS2l0IGJ1ZyBpbiBBbmRyb2lkIDQuMC4qIHdoZXJlICgyKSBkZXN0cm95cyBuYXRpdmUgYGF1ZGlvYFxyXG4gKiAgICBhbmQgYHZpZGVvYCBjb250cm9scy5cclxuICogMi4gQ29ycmVjdCBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIGBpbnB1dGAgdHlwZXMgaW4gaU9TLlxyXG4gKiAzLiBJbXByb3ZlIHVzYWJpbGl0eSBhbmQgY29uc2lzdGVuY3kgb2YgY3Vyc29yIHN0eWxlIGJldHdlZW4gaW1hZ2UtdHlwZVxyXG4gKiAgICBgaW5wdXRgIGFuZCBvdGhlcnMuXHJcbiAqL1xuYnV0dG9uLFxuaHRtbCBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLFxuaW5wdXRbdHlwZT1cInJlc2V0XCJdLFxuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xuICAvKiAyICovXG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLyogMyAqLyB9XG5cbi8qKlxyXG4gKiBSZS1zZXQgZGVmYXVsdCBjdXJzb3IgZm9yIGRpc2FibGVkIGVsZW1lbnRzLlxyXG4gKi9cbmJ1dHRvbltkaXNhYmxlZF0sXG5odG1sIGlucHV0W2Rpc2FibGVkXSB7XG4gIGN1cnNvcjogZGVmYXVsdDsgfVxuXG4vKipcclxuICogUmVtb3ZlIGlubmVyIHBhZGRpbmcgYW5kIGJvcmRlciBpbiBGaXJlZm94IDQrLlxyXG4gKi9cbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcbmlucHV0OjotbW96LWZvY3VzLWlubmVyIHtcbiAgYm9yZGVyOiAwO1xuICBwYWRkaW5nOiAwOyB9XG5cbi8qKlxyXG4gKiBBZGRyZXNzIEZpcmVmb3ggNCsgc2V0dGluZyBgbGluZS1oZWlnaHRgIG9uIGBpbnB1dGAgdXNpbmcgYCFpbXBvcnRhbnRgIGluXHJcbiAqIHRoZSBVQSBzdHlsZXNoZWV0LlxyXG4gKi9cbmlucHV0IHtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDsgfVxuXG4vKipcclxuICogSXQncyByZWNvbW1lbmRlZCB0aGF0IHlvdSBkb24ndCBhdHRlbXB0IHRvIHN0eWxlIHRoZXNlIGVsZW1lbnRzLlxyXG4gKiBGaXJlZm94J3MgaW1wbGVtZW50YXRpb24gZG9lc24ndCByZXNwZWN0IGJveC1zaXppbmcsIHBhZGRpbmcsIG9yIHdpZHRoLlxyXG4gKlxyXG4gKiAxLiBBZGRyZXNzIGJveCBzaXppbmcgc2V0IHRvIGBjb250ZW50LWJveGAgaW4gSUUgOC85LzEwLlxyXG4gKiAyLiBSZW1vdmUgZXhjZXNzIHBhZGRpbmcgaW4gSUUgOC85LzEwLlxyXG4gKi9cbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXSxcbmlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC8qIDEgKi9cbiAgcGFkZGluZzogMDtcbiAgLyogMiAqLyB9XG5cbi8qKlxyXG4gKiBGaXggdGhlIGN1cnNvciBzdHlsZSBmb3IgQ2hyb21lJ3MgaW5jcmVtZW50L2RlY3JlbWVudCBidXR0b25zLiBGb3IgY2VydGFpblxyXG4gKiBgZm9udC1zaXplYCB2YWx1ZXMgb2YgdGhlIGBpbnB1dGAsIGl0IGNhdXNlcyB0aGUgY3Vyc29yIHN0eWxlIG9mIHRoZVxyXG4gKiBkZWNyZW1lbnQgYnV0dG9uIHRvIGNoYW5nZSBmcm9tIGBkZWZhdWx0YCB0byBgdGV4dGAuXHJcbiAqL1xuaW5wdXRbdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcbmlucHV0W3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICBoZWlnaHQ6IGF1dG87IH1cblxuLyoqXHJcbiAqIDEuIEFkZHJlc3MgYGFwcGVhcmFuY2VgIHNldCB0byBgc2VhcmNoZmllbGRgIGluIFNhZmFyaSBhbmQgQ2hyb21lLlxyXG4gKiAyLiBBZGRyZXNzIGBib3gtc2l6aW5nYCBzZXQgdG8gYGJvcmRlci1ib3hgIGluIFNhZmFyaSBhbmQgQ2hyb21lXHJcbiAqICAgIChpbmNsdWRlIGAtbW96YCB0byBmdXR1cmUtcHJvb2YpLlxyXG4gKi9cbmlucHV0W3R5cGU9XCJzZWFyY2hcIl0ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcbiAgLyogMSAqL1xuICAtbW96LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAvKiAyICovXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyB9XG5cbi8qKlxyXG4gKiBSZW1vdmUgaW5uZXIgcGFkZGluZyBhbmQgc2VhcmNoIGNhbmNlbCBidXR0b24gaW4gU2FmYXJpIGFuZCBDaHJvbWUgb24gT1MgWC5cclxuICogU2FmYXJpIChidXQgbm90IENocm9tZSkgY2xpcHMgdGhlIGNhbmNlbCBidXR0b24gd2hlbiB0aGUgc2VhcmNoIGlucHV0IGhhc1xyXG4gKiBwYWRkaW5nIChhbmQgYHRleHRmaWVsZGAgYXBwZWFyYW5jZSkuXHJcbiAqL1xuaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcbmlucHV0W3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7IH1cblxuLyoqXHJcbiAqIERlZmluZSBjb25zaXN0ZW50IGJvcmRlciwgbWFyZ2luLCBhbmQgcGFkZGluZy5cclxuICovXG5maWVsZHNldCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjMGMwYzA7XG4gIG1hcmdpbjogMCAycHg7XG4gIHBhZGRpbmc6IDAuMzVlbSAwLjYyNWVtIDAuNzVlbTsgfVxuXG4vKipcclxuICogMS4gQ29ycmVjdCBgY29sb3JgIG5vdCBiZWluZyBpbmhlcml0ZWQgaW4gSUUgOC85LzEwLzExLlxyXG4gKiAyLiBSZW1vdmUgcGFkZGluZyBzbyBwZW9wbGUgYXJlbid0IGNhdWdodCBvdXQgaWYgdGhleSB6ZXJvIG91dCBmaWVsZHNldHMuXHJcbiAqL1xubGVnZW5kIHtcbiAgYm9yZGVyOiAwO1xuICAvKiAxICovXG4gIHBhZGRpbmc6IDA7XG4gIC8qIDIgKi8gfVxuXG4vKipcclxuICogUmVtb3ZlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDgvOS8xMC8xMS5cclxuICovXG50ZXh0YXJlYSB7XG4gIG92ZXJmbG93OiBhdXRvOyB9XG5cbi8qKlxyXG4gKiBEb24ndCBpbmhlcml0IHRoZSBgZm9udC13ZWlnaHRgIChhcHBsaWVkIGJ5IGEgcnVsZSBhYm92ZSkuXHJcbiAqIE5PVEU6IHRoZSBkZWZhdWx0IGNhbm5vdCBzYWZlbHkgYmUgY2hhbmdlZCBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBPUyBYLlxyXG4gKi9cbm9wdGdyb3VwIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cblxuLyogVGFibGVzXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4vKipcclxuICogUmVtb3ZlIG1vc3Qgc3BhY2luZyBiZXR3ZWVuIHRhYmxlIGNlbGxzLlxyXG4gKi9cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7IH1cblxudGQsXG50aCB7XG4gIHBhZGRpbmc6IDA7IH1cblxuLyoqXHJcbiAqIGJvZHkgLXN0eWxlc1xyXG4gKi9cbioge1xuICBmb250LWZhbWlseTogXCJNeXJpYWRQcm9cIiAhaW1wb3J0YW50OyB9XG5cbmJvZHkge1xuICBmb250LXNpemU6IDFlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMzEyNWVtO1xuICBmb250LXdlaWdodDogMTAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlOyB9XG5cbi8qKlxyXG4gKiBGb250IGZhbWlseXMgLSBpbmNsdWRlLlxyXG4gKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJNeXJpYWRQcm9cIjtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXdlaWdodDogMTAwO1xuICBzcmM6IHVybChcIi9hc3NldHMvY2FtL2ZvbnRzL015cmlhZFByby1JdC5lb3Q/XCIpIGZvcm1hdChcImVvdFwiKSwgdXJsKFwiL2Fzc2V0cy9jYW0vZm9udHMvTXlyaWFkUHJvLUl0LndvZmZcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwiL2Fzc2V0cy9jYW0vZm9udHMvTXlyaWFkUHJvLUl0LnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKSwgdXJsKFwiL2Fzc2V0cy9jYW0vZm9udHMvTXlyaWFkUHJvLUl0LnN2ZyNNeXJpYWRQcm9cIikgZm9ybWF0KFwic3ZnXCIpOyB9XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJNeXJpYWRQcm9cIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogMTAwO1xuICBzcmM6IHVybChcIi9hc3NldHMvY2FtL2ZvbnRzL015cmlhZFByby1SZWd1bGFyLmVvdD9cIikgZm9ybWF0KFwiZW90XCIpLCB1cmwoXCIvYXNzZXRzL2NhbS9mb250cy9NeXJpYWRQcm8tUmVndWxhci53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcIi9hc3NldHMvY2FtL2ZvbnRzL015cmlhZFByby1SZWd1bGFyLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKSwgdXJsKFwiL2Fzc2V0cy9jYW0vZm9udHMvTXlyaWFkUHJvLVJlZ3VsYXIuc3ZnI015cmlhZFByb1wiKSBmb3JtYXQoXCJzdmdcIik7IH1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIk15cmlhZFByb1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBzcmM6IHVybChcIi9hc3NldHMvY2FtL2ZvbnRzL015cmlhZFByby1Cb2xkLmVvdD9cIikgZm9ybWF0KFwiZW90XCIpLCB1cmwoXCIvYXNzZXRzL2NhbS9mb250cy9NeXJpYWRQcm8tQm9sZC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcIi9hc3NldHMvY2FtL2ZvbnRzL015cmlhZFByby1Cb2xkLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKSwgdXJsKFwiL2Fzc2V0cy9jYW0vZm9udHMvTXlyaWFkUHJvLUJvbGQuc3ZnI015cmlhZFByb1wiKSBmb3JtYXQoXCJzdmdcIik7IH1cblxuLyoqXHJcbiAqIFRleHQgZWxlbWVudHMgLSBzdHlsZXMuXHJcbiAqL1xuaDEsIC5oMSB7XG4gIGNvbG9yOiAjMzIzYzQ3O1xuICBmb250LWZhbWlseTogXCJNeXJpYWRQcm9cIjtcbiAgZm9udC1zaXplOiAzLjU2MjVlbTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMzMzMzMzMzNlbTtcbiAgbWFyZ2luLXRvcDogMC4zNjg0MjEwNWVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjczNjg0MjExZW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDsgfVxuXG5oMiwgLmgyIHtcbiAgY29sb3I6ICMzMjNjNDc7XG4gIGZvbnQtZmFtaWx5OiBcIk15cmlhZFByb1wiO1xuICBmb250LXNpemU6IDIuMjVlbTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMTY2NjY2NjdlbTtcbiAgbWFyZ2luLXRvcDogMC4xOTQ0NDQ0NGVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsOyB9XG5cbmgzLCAuaDMge1xuICBjb2xvcjogIzMyM2M0NztcbiAgZm9udC1mYW1pbHk6IFwiTXlyaWFkUHJvXCI7XG4gIGZvbnQtc2l6ZTogMS42MjVlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDAuODA3NjkyMzFlbTtcbiAgbWFyZ2luLXRvcDogMGVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjgwNzY5MjMxZW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDsgfVxuXG5oNCwgLmg0IHtcbiAgY29sb3I6ICMzMjNjNDc7XG4gIGZvbnQtZmFtaWx5OiBcIk15cmlhZFByb1wiO1xuICBmb250LXNpemU6IDEuMTI1ZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjE2NjY2NjY3ZW07XG4gIG1hcmdpbi10b3A6IDBlbTtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICBmb250LXN0eWxlOiBub3JtYWw7IH1cblxuaDUsIC5oNSB7XG4gIGNvbG9yOiAjMzIzYzQ3O1xuICBmb250LWZhbWlseTogXCJNeXJpYWRQcm9cIjtcbiAgZm9udC1zaXplOiAxZW07XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjMxMjVlbTtcbiAgbWFyZ2luLXRvcDogMGVtO1xuICBtYXJnaW4tYm90dG9tOiAxLjMxMjVlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsOyB9XG5cbmg2LCAuaDYge1xuICBjb2xvcjogIzMyM2M0NztcbiAgZm9udC1mYW1pbHk6IFwiTXlyaWFkUHJvXCI7XG4gIGZvbnQtc2l6ZTogMC43NWVtO1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMS4zMzMzMzMzM2VtO1xuICBtYXJnaW4tdG9wOiAwZW07XG4gIG1hcmdpbi1ib3R0b206IDAuODMzMzMzMzNlbTtcbiAgZm9udC1zdHlsZTogbm9ybWFsOyB9XG5cbnAge1xuICBjb2xvcjogIzJGMzMzNztcbiAgZm9udC1mYW1pbHk6IFwiTXlyaWFkUHJvXCI7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBmb250LXdlaWdodDogMTAwO1xuICBsaW5lLWhlaWdodDogMS4zMTI1ZW07XG4gIG1hcmdpbi10b3A6IDBlbTtcbiAgbWFyZ2luLWJvdHRvbTogMS4zMTI1ZW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDsgfVxuXG51bCBsaSB7XG4gIGNvbG9yOiAjMzIzYzQ3O1xuICBmb250LWZhbWlseTogXCJNeXJpYWRQcm9cIjtcbiAgZm9udC1zaXplOiAwLjkzNzVlbTtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMDY2NjY2NjdlbTtcbiAgbWFyZ2luLXRvcDogMC40NjY2NjY2N2VtO1xuICBtYXJnaW4tYm90dG9tOiAwZW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDsgfVxuXG5lbSB7XG4gIGNvbG9yOiAjMzIzYzQ3O1xuICBmb250LWZhbWlseTogXCJNeXJpYWRQcm9cIjtcbiAgZm9udC1zaXplOiAwLjY4NzVlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMzYzNjM2MzZlbTtcbiAgbWFyZ2luLXRvcDogMC45MDkwOTA5MWVtO1xuICBtYXJnaW4tYm90dG9tOiAwZW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDsgfVxuXG4vKipcclxuICogVGV4dCBjb2xvcnMgLSBzdHlsZXMuXHJcbiAqL1xuLnRleHRfX2NvbG9yLS1saWdodCB7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50OyB9XG5cbi50ZXh0X19jb2xvci0tZGFyayB7XG4gIGNvbG9yOiAjMjIyNjJhICFpbXBvcnRhbnQ7IH1cblxuLnRleHRfX2NvbG9yIHtcbiAgY29sb3I6ICMzMjNjNDc7IH1cblxuLnRleHRfX2NvbG9yLS1wcmltYXJ5IHtcbiAgY29sb3I6ICNFRTMxMjQ7IH1cblxuLyoqXHJcbiAqIFRleHQgYWxpZ24gLSBzdHlsZXMuXHJcbiAqL1xuLnRleHRfX2FsaWduLS1sZWZ0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGxlZnQ7IH1cblxuLnRleHRfX2FsaWduLS1yaWdodCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiByaWdodDsgfVxuXG4udGV4dF9fYWxpZ24tLWNlbnRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuLyoqXHJcbiAqIFRleHQgYWxpZ24gLSB3ZWlnaHQuXHJcbiAqL1xuLnRleHRfX3dlaWdodC0tcmVndWxhciB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDsgfVxuXG4vKipcclxuICogVGV4dCBtYXJnaW4gdmFyaWF0aW9uc1xyXG4gKi9cbi50ZXh0X19tYXJnaW4tLWJvdHRvbTAge1xuICBtYXJnaW4tYm90dG9tOiAwOyB9XG5cbi8qKlxyXG4qIE1vZHVsZXMgLSBmb3JtcyAtIExheW91dFxyXG4qL1xuLmZvcm1Db250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtby1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbXMtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAuZm9ybUNvbnRhaW5lciB7XG4gICAgICBwYWRkaW5nOiAyZW0gMDtcbiAgICAgIGJvcmRlcjogc29saWQgMXB4ICNiZGJkYmQ7XG4gICAgICBwYWRkaW5nOiAyLjE4NzVlbSAyLjVlbTtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2NhbS9pbWcvbGF5b3V0L2N1cnZlX2JnLnBuZyk7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCBib3R0b207XG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxODksIDE4OSwgMTg5LCAwLjA0KTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIuNjI1ZW07XG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwLjVlbSByZ2JhKDQ3LCA1MSwgNTUsIDAuMTcpO1xuICAgICAgLW1vei1ib3gtc2hhZG93OiAwIDAgMC41ZW0gcmdiYSg0NywgNTEsIDU1LCAwLjE3KTtcbiAgICAgIC1vLWJveC1zaGFkb3c6IDAgMCAwLjVlbSByZ2JhKDQ3LCA1MSwgNTUsIDAuMTcpO1xuICAgICAgLW1zLWJveC1zaGFkb3c6IDAgMCAwLjVlbSByZ2JhKDQ3LCA1MSwgNTUsIDAuMTcpO1xuICAgICAgYm94LXNoYWRvdzogMCAwIDAuNWVtIHJnYmEoNDcsIDUxLCA1NSwgMC4xNyk7IH0gfVxuICAuZm9ybUNvbnRhaW5lcl9fY29sdW1uQ29udGFpbmVyIHtcbiAgICBtYXJnaW46IDIuNWVtIDA7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAtby1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC1tcy1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLXdlYmtpdC1kaXNwbGF5OiBmbGV4O1xuICAgIC1tb3otZGlzcGxheTogZmxleDtcbiAgICAtby1kaXNwbGF5OiBmbGV4O1xuICAgIC1tcy1kaXNwbGF5OiBmbGV4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAtbW96LWp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIC1vLWp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIC1tcy1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIC1tb3otYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgLW8tYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgLW1zLWFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAtbW96LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgLW8tZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgICAgIC5mb3JtQ29udGFpbmVyX19jb2x1bW5Db250YWluZXIge1xuICAgICAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIC1tb3otZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgLW8tZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIC13ZWJraXQtZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAtbW96LWZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgLW8tZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAtbXMtZmxleC13cmFwOiB3cmFwO1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7IH0gfVxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgICAgLmZvcm1Db250YWluZXJfX2NvbHVtbkNvbnRhaW5lciB7XG4gICAgICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgLW1vei1mbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAtby1mbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgLXdlYmtpdC1mbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIC1tb3otZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAtby1mbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIC1tcy1mbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDsgfSB9XG4gICAgLmZvcm1Db250YWluZXJfX2NvbHVtbkNvbnRhaW5lciAuY2VudGVyVGV4dCB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gICAgICAgIC5mb3JtQ29udGFpbmVyX19jb2x1bW5Db250YWluZXIgLmNlbnRlclRleHQge1xuICAgICAgICAgIHdpZHRoOiA4MCU7IH0gfVxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgICAgIC5mb3JtQ29udGFpbmVyX19jb2x1bW5Db250YWluZXIgLmNlbnRlclRleHQge1xuICAgICAgICAgIHdpZHRoOiA4MCU7IH0gfVxuICAgICAgLmZvcm1Db250YWluZXJfX2NvbHVtbkNvbnRhaW5lciAuY2VudGVyVGV4dC0tc21hbGwge1xuICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICBtYXJnaW46IDAuNXJlbSBhdXRvOyB9XG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgLmZvcm1Db250YWluZXJfX2NvbHVtbkNvbnRhaW5lciAuY2VudGVyVGV4dC0tc21hbGwge1xuICAgICAgICAgICAgd2lkdGg6IDYwJTsgfSB9XG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gICAgICAgICAgLmZvcm1Db250YWluZXJfX2NvbHVtbkNvbnRhaW5lciAuY2VudGVyVGV4dC0tc21hbGwge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7IH0gfVxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAgICAgICAuZm9ybUNvbnRhaW5lcl9fY29sdW1uQ29udGFpbmVyIC5jZW50ZXJUZXh0LS1zbWFsbCB7XG4gICAgICAgICAgICB3aWR0aDogODAlOyB9IH1cbiAgICAgIC5mb3JtQ29udGFpbmVyX19jb2x1bW5Db250YWluZXIgLmNlbnRlclRleHQtLWNvbG9yUHJpbWFyeSB7XG4gICAgICAgIGNvbG9yOiAjRUUzMTI0OyB9XG4gICAgLmZvcm1Db250YWluZXJfX2NvbHVtbkNvbnRhaW5lciAuZm9ybUNvbHVtbiB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHBhZGRpbmc6IDA7IH1cbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gICAgICAgIC5mb3JtQ29udGFpbmVyX19jb2x1bW5Db250YWluZXIgLmZvcm1Db2x1bW4ge1xuICAgICAgICAgIHdpZHRoOiA0NSU7IH0gfVxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgICAgIC5mb3JtQ29udGFpbmVyX19jb2x1bW5Db250YWluZXIgLmZvcm1Db2x1bW4ge1xuICAgICAgICAgIHdpZHRoOiAzNSU7IH0gfVxuICAgICAgLmZvcm1Db250YWluZXJfX2NvbHVtbkNvbnRhaW5lciAuZm9ybUNvbHVtbi0tY2VudGVyIHtcbiAgICAgICAgbWFyZ2luOiBhdXRvOyB9XG4gICAgICAuZm9ybUNvbnRhaW5lcl9fY29sdW1uQ29udGFpbmVyIC5mb3JtQ29sdW1uX19jb250ZW50Q2VudGVyIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gICAgICAgIC5mb3JtQ29udGFpbmVyX19jb2x1bW5Db250YWluZXIgLmZvcm1Db2x1bW5fX2NvbnRlbnRDZW50ZXIgYSB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIGNvbG9yOiAjRUUzMTI0ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIG1hcmdpbjogMCAwLjMxMjVlbTtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICBwb2ludGVyLWV2ZW50czogYXV0byAhaW1wb3J0YW50OyB9XG4gICAgLmZvcm1Db250YWluZXJfX2NvbHVtbkNvbnRhaW5lciAuZm9ybUNvbHVtblByaW5jaXBhbCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHBhZGRpbmctdG9wOiAxZW07IH1cbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gICAgICAgIC5mb3JtQ29udGFpbmVyX19jb2x1bW5Db250YWluZXIgLmZvcm1Db2x1bW5QcmluY2lwYWwge1xuICAgICAgICAgIHdpZHRoOiA5NSU7IH0gfVxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgICAgIC5mb3JtQ29udGFpbmVyX19jb2x1bW5Db250YWluZXIgLmZvcm1Db2x1bW5QcmluY2lwYWwge1xuICAgICAgICAgIHdpZHRoOiA4NSU7IH0gfVxuICAgIC5mb3JtQ29udGFpbmVyX19jb2x1bW5Db250YWluZXIgLmZvcm1Db2x1bW5NaWRkbGUge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBwYWRkaW5nLXRvcDogMWVtO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAgICAgICAuZm9ybUNvbnRhaW5lcl9fY29sdW1uQ29udGFpbmVyIC5mb3JtQ29sdW1uTWlkZGxlIHtcbiAgICAgICAgICB3aWR0aDogNzAlOyB9IH1cbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgICAgICAuZm9ybUNvbnRhaW5lcl9fY29sdW1uQ29udGFpbmVyIC5mb3JtQ29sdW1uTWlkZGxlIHtcbiAgICAgICAgICB3aWR0aDogNjAlOyB9IH1cbiAgICAuZm9ybUNvbnRhaW5lcl9fY29sdW1uQ29udGFpbmVyIC5pbmRpY2F0aW9ucyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgd2lkdGg6IDEwMCU7IH1cbiAgICAgIC5mb3JtQ29udGFpbmVyX19jb2x1bW5Db250YWluZXIgLmluZGljYXRpb25zIHVsIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogYXV0bzsgfVxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAgICAgICAgIC5mb3JtQ29udGFpbmVyX19jb2x1bW5Db250YWluZXIgLmluZGljYXRpb25zIHVsIHtcbiAgICAgICAgICAgIHdpZHRoOiA2MCU7IH0gfVxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAgICAgICAuZm9ybUNvbnRhaW5lcl9fY29sdW1uQ29udGFpbmVyIC5pbmRpY2F0aW9ucyB1bCB7XG4gICAgICAgICAgICB3aWR0aDogNDAlOyB9IH1cbiAgLmZvcm1Db250YWluZXJfX2J1dHRvbkNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAyLjVlbSAwO1xuICAgIGRpc3BsYXk6IGJsb2NrOyB9XG4gICAgLmZvcm1Db250YWluZXJfX2J1dHRvbkNvbnRhaW5lci0tZHVhbEJ1dHRvbiB7XG4gICAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAtby1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgLW1zLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgLXdlYmtpdC1kaXNwbGF5OiBmbGV4O1xuICAgICAgLW1vei1kaXNwbGF5OiBmbGV4O1xuICAgICAgLW8tZGlzcGxheTogZmxleDtcbiAgICAgIC1tcy1kaXNwbGF5OiBmbGV4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgLW1vei1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAtby1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAtbXMtanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgLW1vei1hbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgLW8tYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIC1tcy1hbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuICAgICAgLmZvcm1Db250YWluZXJfX2J1dHRvbkNvbnRhaW5lci0tZHVhbEJ1dHRvbiBhcHAtYnV0dG9uLWNvbnRpbnVlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogMCAwLjMxMjVlbTtcbiAgICAgICAgcGFkZGluZzogMDsgfVxuICAgICAgICAuZm9ybUNvbnRhaW5lcl9fYnV0dG9uQ29udGFpbmVyLS1kdWFsQnV0dG9uIGFwcC1idXR0b24tY29udGludWUgYnV0dG9uIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTsgfVxuICAgICAgLmZvcm1Db250YWluZXJfX2J1dHRvbkNvbnRhaW5lci0tZHVhbEJ1dHRvbiBidXR0b24ge1xuICAgICAgICBtYXJnaW46IDAgMC4zMTI1ZW07XG4gICAgICAgIHdpZHRoOiAxMDAlOyB9XG5cbi8qKlxyXG4qIE1vZHVsZXMgLSBmb3JtcyAtIExheW91dFxyXG4qL1xuLmNhcmRzQ29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW8tYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1zLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgLmNhcmRzQ29udGFpbmVyIHtcbiAgICAgIHBhZGRpbmc6IDJlbSAwO1xuICAgICAgYm9yZGVyOiBzb2xpZCAxcHggI2JkYmRiZDtcbiAgICAgIHBhZGRpbmc6IDIuMTg3NWVtIDIuNWVtO1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvY2FtL2ltZy9sYXlvdXQvY3VydmVfYmcucG5nKTtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IGJvdHRvbTtcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4OSwgMTg5LCAxODksIDAuMDQpO1xuICAgICAgYm9yZGVyLXJhZGl1czogMi42MjVlbTtcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAuNWVtIHJnYmEoNDcsIDUxLCA1NSwgMC4xNyk7XG4gICAgICAtbW96LWJveC1zaGFkb3c6IDAgMCAwLjVlbSByZ2JhKDQ3LCA1MSwgNTUsIDAuMTcpO1xuICAgICAgLW8tYm94LXNoYWRvdzogMCAwIDAuNWVtIHJnYmEoNDcsIDUxLCA1NSwgMC4xNyk7XG4gICAgICAtbXMtYm94LXNoYWRvdzogMCAwIDAuNWVtIHJnYmEoNDcsIDUxLCA1NSwgMC4xNyk7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMC41ZW0gcmdiYSg0NywgNTEsIDU1LCAwLjE3KTsgfSB9XG4gIC5jYXJkc0NvbnRhaW5lcl9fcm93IHtcbiAgICBtYXJnaW46IDIuNWVtIDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLWhlaWdodDogMTAwcHg7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAtby1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC1tcy1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLXdlYmtpdC1kaXNwbGF5OiBmbGV4O1xuICAgIC1tb3otZGlzcGxheTogZmxleDtcbiAgICAtby1kaXNwbGF5OiBmbGV4O1xuICAgIC1tcy1kaXNwbGF5OiBmbGV4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAtbW96LWp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIC1vLWp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIC1tcy1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIC1tb3otYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgLW8tYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgLW1zLWFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAtbW96LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgLW8tZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgICAgIC5jYXJkc0NvbnRhaW5lcl9fcm93IHtcbiAgICAgICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAtbW96LWZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIC1vLWZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAtd2Via2l0LWZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgLW1vei1mbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIC1vLWZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgLW1zLWZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwOyB9IH1cbiAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAgIC5jYXJkc0NvbnRhaW5lcl9fcm93IHtcbiAgICAgICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAtbW96LWZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIC1vLWZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAtd2Via2l0LWZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgLW1vei1mbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIC1vLWZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgLW1zLWZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwOyB9IH1cbiAgICAuY2FyZHNDb250YWluZXJfX3JvdyAuY2FyZCB7XG4gICAgICBwYWRkaW5nOiAxLjU2MjVlbSAxLjg3NWVtO1xuICAgICAgYm9yZGVyLXJhZGl1czogMS4yNWVtO1xuICAgICAgYmFja2dyb3VuZDogI0U0RTRFNDtcbiAgICAgIG1hcmdpbjogMXJlbSAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAtby1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgLW1zLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAgICAgICAuY2FyZHNDb250YWluZXJfX3JvdyAuY2FyZCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjE1ZW07XG4gICAgICAgICAgd2lkdGg6IDQ1JTtcbiAgICAgICAgICBtYXJnaW46IDFyZW07IH0gfVxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgICAgIC5jYXJkc0NvbnRhaW5lcl9fcm93IC5jYXJkIHtcbiAgICAgICAgICBmb250LXNpemU6IDEuMTVlbTtcbiAgICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICAgIG1hcmdpbjogMXJlbTsgfSB9XG4gICAgICAuY2FyZHNDb250YWluZXJfX3JvdyAuY2FyZF9faGVhZGVyIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgM3B4ICNFRTMxMjQ7XG4gICAgICAgIHdpZHRoOiAxMDAlOyB9XG4gICAgICAgIC5jYXJkc0NvbnRhaW5lcl9fcm93IC5jYXJkX19oZWFkZXIgaDQge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkOyB9XG4gICAgICAgICAgLmNhcmRzQ29udGFpbmVyX19yb3cgLmNhcmRfX2hlYWRlciBoNCBzdHJvbmcge1xuICAgICAgICAgICAgY29sb3I6ICNFRTMxMjQ7IH1cbiAgICAgIC5jYXJkc0NvbnRhaW5lcl9fcm93IC5jYXJkX19ib2R5IHtcbiAgICAgICAgbWFyZ2luOiAwLjc1ZW0gMDsgfVxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAgICAgICAgIC5jYXJkc0NvbnRhaW5lcl9fcm93IC5jYXJkX19ib2R5IHtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEzcmVtOyB9IH1cbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgICAgICAgLmNhcmRzQ29udGFpbmVyX19yb3cgLmNhcmRfX2JvZHkge1xuICAgICAgICAgICAgbWluLWhlaWdodDogMTRyZW07IH0gfVxuICAgICAgICAuY2FyZHNDb250YWluZXJfX3JvdyAuY2FyZF9fYm9keSB1bCB7XG4gICAgICAgICAgcGFkZGluZzogMCAwLjkzNzVlbTtcbiAgICAgICAgICBsaXN0LXN0eWxlOiBub25lOyB9XG4gICAgICAgICAgLmNhcmRzQ29udGFpbmVyX19yb3cgLmNhcmRfX2JvZHkgdWwgbGk6YmVmb3JlIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXFwyMDIyXCI7XG4gICAgICAgICAgICBjb2xvcjogI0VFMzEyNDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgd2lkdGg6IDFlbTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMWVtOyB9XG4gICAgICAuY2FyZHNDb250YWluZXJfX3JvdyAuY2FyZF9fZm9vdGVyIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMS4yNWVtO1xuICAgICAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgLW8tYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgLW1zLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIC13ZWJraXQtZGlzcGxheTogZmxleDtcbiAgICAgICAgLW1vei1kaXNwbGF5OiBmbGV4O1xuICAgICAgICAtby1kaXNwbGF5OiBmbGV4O1xuICAgICAgICAtbXMtZGlzcGxheTogZmxleDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAtbW96LWp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIC1vLWp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIC1tcy1qdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIC1tb3otYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgLW8tYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgLW1zLWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cbiAgICAgICAgLmNhcmRzQ29udGFpbmVyX19yb3cgLmNhcmRfX2Zvb3RlciBzcGFuIHtcbiAgICAgICAgICBjb2xvcjogI0VFMzEyNDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNjI1ZW07IH1cbiAgICAgICAgLmNhcmRzQ29udGFpbmVyX19yb3cgLmNhcmRfX2Zvb3RlciBpbWcge1xuICAgICAgICAgIHdpZHRoOiAyMHB4OyB9XG4gIC5jYXJkc0NvbnRhaW5lcl9fYnV0dG9uQ29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDIuNWVtIDA7XG4gICAgZGlzcGxheTogYmxvY2s7IH1cblxuLyoqXHJcbiAqIExheW91dCAtIE1haW4gY29udGFpbmVyXHJcbiAqL1xuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDJlbSAxLjI1ZW07XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW8tYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1zLWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC13ZWJraXQtZGlzcGxheTogZmxleDtcbiAgLW1vei1kaXNwbGF5OiBmbGV4O1xuICAtby1kaXNwbGF5OiBmbGV4O1xuICAtbXMtZGlzcGxheTogZmxleDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIC1tb3otanVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAtby1qdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIC1tcy1qdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAtbW96LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC1vLWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC1tcy1hbGlnbi1pdGVtczogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIC1tb3otZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgLW8tZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cbiAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgLmNvbnRhaW5lci0tbWVudSB7XG4gICAgICB3aWR0aDogNTAlO1xuICAgICAgbWFyZ2luOiAwIGF1dG87IH0gfVxuICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gICAgLmNvbnRhaW5lci0tbWVudSB7XG4gICAgICB3aWR0aDogNTAlO1xuICAgICAgbWFyZ2luOiAwIGF1dG87IH0gfVxuIiwiXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEltcG9ydCBCYXNlIHZhcmlhYmxlc1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuQGltcG9ydCBcIi4uL3ZhcmlhYmxlcy9fYmFzZS12YXJpYWJsZXNcIjtcclxuXHJcbi8qISBub3JtYWxpemUuc2NzcyB2MC4xLjAgfCBNSVQgTGljZW5zZSB8IGJhc2VkIG9uIGdpdC5pby9ub3JtYWxpemUgKi9cclxuXHJcbi8qKlxyXG4gKiAxLiBTZXQgZGVmYXVsdCBmb250IGZhbWlseSB0byBzYW5zLXNlcmlmLlxyXG4gKiAyLiBQcmV2ZW50IGlPUyB0ZXh0IHNpemUgYWRqdXN0IGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZSwgd2l0aG91dCBkaXNhYmxpbmdcclxuICogICAgdXNlciB6b29tLlxyXG4gKi9cclxuXHJcbmh0bWwge1xyXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmOyAvKiAxICovXHJcbiAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cclxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cclxufVxyXG5cclxuLyoqXHJcbiAqIFJlbW92ZSBkZWZhdWx0IG1hcmdpbi5cclxuICovXHJcblxyXG5ib2R5IHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi8qIEhUTUw1IGRpc3BsYXkgZGVmaW5pdGlvbnNcclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi8qKlxyXG4gKiBDb3JyZWN0IGBibG9ja2AgZGlzcGxheSBub3QgZGVmaW5lZCBmb3IgYW55IEhUTUw1IGVsZW1lbnQgaW4gSUUgOC85LlxyXG4gKiBDb3JyZWN0IGBibG9ja2AgZGlzcGxheSBub3QgZGVmaW5lZCBmb3IgYGRldGFpbHNgIG9yIGBzdW1tYXJ5YCBpbiBJRSAxMC8xMVxyXG4gKiBhbmQgRmlyZWZveC5cclxuICogQ29ycmVjdCBgYmxvY2tgIGRpc3BsYXkgbm90IGRlZmluZWQgZm9yIGBtYWluYCBpbiBJRSAxMS5cclxuICovXHJcblxyXG5hcnRpY2xlLFxyXG5hc2lkZSxcclxuZGV0YWlscyxcclxuZmlnY2FwdGlvbixcclxuZmlndXJlLFxyXG5mb290ZXIsXHJcbmhlYWRlcixcclxuaGdyb3VwLFxyXG5tYWluLFxyXG5tZW51LFxyXG5uYXYsXHJcbnNlY3Rpb24sXHJcbnN1bW1hcnkge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4vKipcclxuICogMS4gQ29ycmVjdCBgaW5saW5lLWJsb2NrYCBkaXNwbGF5IG5vdCBkZWZpbmVkIGluIElFIDgvOS5cclxuICogMi4gTm9ybWFsaXplIHZlcnRpY2FsIGFsaWdubWVudCBvZiBgcHJvZ3Jlc3NgIGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxyXG4gKi9cclxuXHJcbmF1ZGlvLFxyXG5jYW52YXMsXHJcbnByb2dyZXNzLFxyXG52aWRlbyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyAvKiAxICovXHJcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lOyAvKiAyICovXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQcmV2ZW50IG1vZGVybiBicm93c2VycyBmcm9tIGRpc3BsYXlpbmcgYGF1ZGlvYCB3aXRob3V0IGNvbnRyb2xzLlxyXG4gKiBSZW1vdmUgZXhjZXNzIGhlaWdodCBpbiBpT1MgNSBkZXZpY2VzLlxyXG4gKi9cclxuXHJcbmF1ZGlvOm5vdChbY29udHJvbHNdKSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBoZWlnaHQ6IDA7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBZGRyZXNzIGBbaGlkZGVuXWAgc3R5bGluZyBub3QgcHJlc2VudCBpbiBJRSA4LzkvMTAuXHJcbiAqIEhpZGUgdGhlIGB0ZW1wbGF0ZWAgZWxlbWVudCBpbiBJRSA4LzkvMTEsIFNhZmFyaSwgYW5kIEZpcmVmb3ggPCAyMi5cclxuICovXHJcblxyXG5baGlkZGVuXSxcclxudGVtcGxhdGUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi8qIExpbmtzXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4vKipcclxuICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgY29sb3IgZnJvbSBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXHJcbiAqL1xyXG5cclxuYSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbXByb3ZlIHJlYWRhYmlsaXR5IHdoZW4gZm9jdXNlZCBhbmQgYWxzbyBtb3VzZSBob3ZlcmVkIGluIGFsbCBicm93c2Vycy5cclxuICovXHJcblxyXG5hOmFjdGl2ZSxcclxuYTpob3ZlciB7XHJcbiAgb3V0bGluZTogMDtcclxufVxyXG5cclxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi8qKlxyXG4gKiBBZGRyZXNzIHN0eWxpbmcgbm90IHByZXNlbnQgaW4gSUUgOC85LzEwLzExLCBTYWZhcmksIGFuZCBDaHJvbWUuXHJcbiAqL1xyXG5cclxuYWJiclt0aXRsZV0ge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBZGRyZXNzIHN0eWxlIHNldCB0byBgYm9sZGVyYCBpbiBGaXJlZm94IDQrLCBTYWZhcmksIGFuZCBDaHJvbWUuXHJcbiAqL1xyXG5cclxuYixcclxuc3Ryb25nIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEFkZHJlc3Mgc3R5bGluZyBub3QgcHJlc2VudCBpbiBTYWZhcmkgYW5kIENocm9tZS5cclxuICovXHJcblxyXG5kZm4ge1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuLyoqXHJcbiAqIEFkZHJlc3MgdmFyaWFibGUgYGgxYCBmb250LXNpemUgYW5kIG1hcmdpbiB3aXRoaW4gYHNlY3Rpb25gIGFuZCBgYXJ0aWNsZWBcclxuICogY29udGV4dHMgaW4gRmlyZWZveCA0KywgU2FmYXJpLCBhbmQgQ2hyb21lLlxyXG4gKi9cclxuXHJcbmgxIHtcclxuICBmb250LXNpemU6IDJlbTtcclxuICBtYXJnaW46IDAuNjdlbSAwO1xyXG59XHJcblxyXG4vKipcclxuICogQWRkcmVzcyBzdHlsaW5nIG5vdCBwcmVzZW50IGluIElFIDgvOS5cclxuICovXHJcblxyXG5tYXJrIHtcclxuICBiYWNrZ3JvdW5kOiAjZmYwO1xyXG4gIGNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG4vKipcclxuICogQWRkcmVzcyBpbmNvbnNpc3RlbnQgYW5kIHZhcmlhYmxlIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXHJcbiAqL1xyXG5cclxuc21hbGwge1xyXG4gIGZvbnQtc2l6ZTogODAlO1xyXG59XHJcblxyXG4vKipcclxuICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgYWZmZWN0aW5nIGBsaW5lLWhlaWdodGAgaW4gYWxsIGJyb3dzZXJzLlxyXG4gKi9cclxuXHJcbnN1Yixcclxuc3VwIHtcclxuICBmb250LXNpemU6IDc1JTtcclxuICBsaW5lLWhlaWdodDogMDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xyXG59XHJcblxyXG5zdXAge1xyXG4gIHRvcDogLTAuNWVtO1xyXG59XHJcblxyXG5zdWIge1xyXG4gIGJvdHRvbTogLTAuMjVlbTtcclxufVxyXG5cclxuLyogRW1iZWRkZWQgY29udGVudFxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuLyoqXHJcbiAqIFJlbW92ZSBib3JkZXIgd2hlbiBpbnNpZGUgYGFgIGVsZW1lbnQgaW4gSUUgOC85LzEwLlxyXG4gKi9cclxuXHJcbmltZyB7XHJcbiAgYm9yZGVyOiAwO1xyXG59XHJcblxyXG4vKipcclxuICogQ29ycmVjdCBvdmVyZmxvdyBub3QgaGlkZGVuIGluIElFIDkvMTAvMTEuXHJcbiAqL1xyXG5cclxuc3ZnOm5vdCg6cm9vdCkge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi8qIEdyb3VwaW5nIGNvbnRlbnRcclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi8qKlxyXG4gKiBBZGRyZXNzIG1hcmdpbiBub3QgcHJlc2VudCBpbiBJRSA4LzkgYW5kIFNhZmFyaS5cclxuICovXHJcblxyXG5maWd1cmUge1xyXG4gIG1hcmdpbjogMWVtIDQwcHg7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBZGRyZXNzIGRpZmZlcmVuY2VzIGJldHdlZW4gRmlyZWZveCBhbmQgb3RoZXIgYnJvd3NlcnMuXHJcbiAqL1xyXG5cclxuaHIge1xyXG4gIC1tb3otYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIGJvcmRlcjogMDtcclxuICBtYXJnaW46IDFlbSAwO1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkY29sb3JfX2JhY2tncm91bmQtLW1haW47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb250YWluIG92ZXJmbG93IGluIGFsbCBicm93c2Vycy5cclxuICovXHJcblxyXG5wcmUge1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4vKipcclxuICogQWRkcmVzcyBvZGQgYGVtYC11bml0IGZvbnQgc2l6ZSByZW5kZXJpbmcgaW4gYWxsIGJyb3dzZXJzLlxyXG4gKi9cclxuXHJcbmNvZGUsXHJcbmtiZCxcclxucHJlLFxyXG5zYW1wIHtcclxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbn1cclxuXHJcbi8qIEZvcm1zXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4vKipcclxuICogS25vd24gbGltaXRhdGlvbjogYnkgZGVmYXVsdCwgQ2hyb21lIGFuZCBTYWZhcmkgb24gT1MgWCBhbGxvdyB2ZXJ5IGxpbWl0ZWRcclxuICogc3R5bGluZyBvZiBgc2VsZWN0YCwgdW5sZXNzIGEgYGJvcmRlcmAgcHJvcGVydHkgaXMgc2V0LlxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiAxLiBDb3JyZWN0IGNvbG9yIG5vdCBiZWluZyBpbmhlcml0ZWQuXHJcbiAqICAgIEtub3duIGlzc3VlOiBhZmZlY3RzIGNvbG9yIG9mIGRpc2FibGVkIGVsZW1lbnRzLlxyXG4gKiAyLiBDb3JyZWN0IGZvbnQgcHJvcGVydGllcyBub3QgYmVpbmcgaW5oZXJpdGVkLlxyXG4gKiAzLiBBZGRyZXNzIG1hcmdpbnMgc2V0IGRpZmZlcmVudGx5IGluIEZpcmVmb3ggNCssIFNhZmFyaSwgYW5kIENocm9tZS5cclxuICovXHJcblxyXG5idXR0b24sXHJcbmlucHV0LFxyXG5vcHRncm91cCxcclxuc2VsZWN0LFxyXG50ZXh0YXJlYSB7XHJcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDEgKi9cclxuICBmb250OiBpbmhlcml0OyAvKiAyICovXHJcbiAgbWFyZ2luOiAwOyAvKiAzICovXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBZGRyZXNzIGBvdmVyZmxvd2Agc2V0IHRvIGBoaWRkZW5gIGluIElFIDgvOS8xMC8xMS5cclxuICovXHJcblxyXG5idXR0b24ge1xyXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xyXG59XHJcblxyXG4vKipcclxuICogQWRkcmVzcyBpbmNvbnNpc3RlbnQgYHRleHQtdHJhbnNmb3JtYCBpbmhlcml0YW5jZSBmb3IgYGJ1dHRvbmAgYW5kIGBzZWxlY3RgLlxyXG4gKiBBbGwgb3RoZXIgZm9ybSBjb250cm9sIGVsZW1lbnRzIGRvIG5vdCBpbmhlcml0IGB0ZXh0LXRyYW5zZm9ybWAgdmFsdWVzLlxyXG4gKiBDb3JyZWN0IGBidXR0b25gIHN0eWxlIGluaGVyaXRhbmNlIGluIEZpcmVmb3gsIElFIDgvOS8xMC8xMSwgYW5kIE9wZXJhLlxyXG4gKiBDb3JyZWN0IGBzZWxlY3RgIHN0eWxlIGluaGVyaXRhbmNlIGluIEZpcmVmb3guXHJcbiAqL1xyXG5cclxuYnV0dG9uLFxyXG5zZWxlY3Qge1xyXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG59XHJcblxyXG4vKipcclxuICogMS4gQXZvaWQgdGhlIFdlYktpdCBidWcgaW4gQW5kcm9pZCA0LjAuKiB3aGVyZSAoMikgZGVzdHJveXMgbmF0aXZlIGBhdWRpb2BcclxuICogICAgYW5kIGB2aWRlb2AgY29udHJvbHMuXHJcbiAqIDIuIENvcnJlY3QgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSBgaW5wdXRgIHR5cGVzIGluIGlPUy5cclxuICogMy4gSW1wcm92ZSB1c2FiaWxpdHkgYW5kIGNvbnNpc3RlbmN5IG9mIGN1cnNvciBzdHlsZSBiZXR3ZWVuIGltYWdlLXR5cGVcclxuICogICAgYGlucHV0YCBhbmQgb3RoZXJzLlxyXG4gKi9cclxuXHJcbmJ1dHRvbixcclxuaHRtbCBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLCAvKiAxICovXHJcbmlucHV0W3R5cGU9XCJyZXNldFwiXSxcclxuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDIgKi9cclxuICBjdXJzb3I6IHBvaW50ZXI7IC8qIDMgKi9cclxufVxyXG5cclxuLyoqXHJcbiAqIFJlLXNldCBkZWZhdWx0IGN1cnNvciBmb3IgZGlzYWJsZWQgZWxlbWVudHMuXHJcbiAqL1xyXG5cclxuYnV0dG9uW2Rpc2FibGVkXSxcclxuaHRtbCBpbnB1dFtkaXNhYmxlZF0ge1xyXG4gIGN1cnNvcjogZGVmYXVsdDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJlbW92ZSBpbm5lciBwYWRkaW5nIGFuZCBib3JkZXIgaW4gRmlyZWZveCA0Ky5cclxuICovXHJcblxyXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXHJcbmlucHV0OjotbW96LWZvY3VzLWlubmVyIHtcclxuICBib3JkZXI6IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLyoqXHJcbiAqIEFkZHJlc3MgRmlyZWZveCA0KyBzZXR0aW5nIGBsaW5lLWhlaWdodGAgb24gYGlucHV0YCB1c2luZyBgIWltcG9ydGFudGAgaW5cclxuICogdGhlIFVBIHN0eWxlc2hlZXQuXHJcbiAqL1xyXG5cclxuaW5wdXQge1xyXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJdCdzIHJlY29tbWVuZGVkIHRoYXQgeW91IGRvbid0IGF0dGVtcHQgdG8gc3R5bGUgdGhlc2UgZWxlbWVudHMuXHJcbiAqIEZpcmVmb3gncyBpbXBsZW1lbnRhdGlvbiBkb2Vzbid0IHJlc3BlY3QgYm94LXNpemluZywgcGFkZGluZywgb3Igd2lkdGguXHJcbiAqXHJcbiAqIDEuIEFkZHJlc3MgYm94IHNpemluZyBzZXQgdG8gYGNvbnRlbnQtYm94YCBpbiBJRSA4LzkvMTAuXHJcbiAqIDIuIFJlbW92ZSBleGNlc3MgcGFkZGluZyBpbiBJRSA4LzkvMTAuXHJcbiAqL1xyXG5cclxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdLFxyXG5pbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cclxuICBwYWRkaW5nOiAwOyAvKiAyICovXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBGaXggdGhlIGN1cnNvciBzdHlsZSBmb3IgQ2hyb21lJ3MgaW5jcmVtZW50L2RlY3JlbWVudCBidXR0b25zLiBGb3IgY2VydGFpblxyXG4gKiBgZm9udC1zaXplYCB2YWx1ZXMgb2YgdGhlIGBpbnB1dGAsIGl0IGNhdXNlcyB0aGUgY3Vyc29yIHN0eWxlIG9mIHRoZVxyXG4gKiBkZWNyZW1lbnQgYnV0dG9uIHRvIGNoYW5nZSBmcm9tIGBkZWZhdWx0YCB0byBgdGV4dGAuXHJcbiAqL1xyXG5cclxuaW5wdXRbdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcclxuaW5wdXRbdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4vKipcclxuICogMS4gQWRkcmVzcyBgYXBwZWFyYW5jZWAgc2V0IHRvIGBzZWFyY2hmaWVsZGAgaW4gU2FmYXJpIGFuZCBDaHJvbWUuXHJcbiAqIDIuIEFkZHJlc3MgYGJveC1zaXppbmdgIHNldCB0byBgYm9yZGVyLWJveGAgaW4gU2FmYXJpIGFuZCBDaHJvbWVcclxuICogICAgKGluY2x1ZGUgYC1tb3pgIHRvIGZ1dHVyZS1wcm9vZikuXHJcbiAqL1xyXG5cclxuaW5wdXRbdHlwZT1cInNlYXJjaFwiXSB7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cclxuICAtbW96LWJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG4gIC13ZWJraXQtYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDIgKi9cclxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJlbW92ZSBpbm5lciBwYWRkaW5nIGFuZCBzZWFyY2ggY2FuY2VsIGJ1dHRvbiBpbiBTYWZhcmkgYW5kIENocm9tZSBvbiBPUyBYLlxyXG4gKiBTYWZhcmkgKGJ1dCBub3QgQ2hyb21lKSBjbGlwcyB0aGUgY2FuY2VsIGJ1dHRvbiB3aGVuIHRoZSBzZWFyY2ggaW5wdXQgaGFzXHJcbiAqIHBhZGRpbmcgKGFuZCBgdGV4dGZpZWxkYCBhcHBlYXJhbmNlKS5cclxuICovXHJcblxyXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxyXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEZWZpbmUgY29uc2lzdGVudCBib3JkZXIsIG1hcmdpbiwgYW5kIHBhZGRpbmcuXHJcbiAqL1xyXG5cclxuZmllbGRzZXQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjMGMwYzA7XHJcbiAgbWFyZ2luOiAwIDJweDtcclxuICBwYWRkaW5nOiAwLjM1ZW0gMC42MjVlbSAwLjc1ZW07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiAxLiBDb3JyZWN0IGBjb2xvcmAgbm90IGJlaW5nIGluaGVyaXRlZCBpbiBJRSA4LzkvMTAvMTEuXHJcbiAqIDIuIFJlbW92ZSBwYWRkaW5nIHNvIHBlb3BsZSBhcmVuJ3QgY2F1Z2h0IG91dCBpZiB0aGV5IHplcm8gb3V0IGZpZWxkc2V0cy5cclxuICovXHJcblxyXG5sZWdlbmQge1xyXG4gIGJvcmRlcjogMDsgLyogMSAqL1xyXG4gIHBhZGRpbmc6IDA7IC8qIDIgKi9cclxufVxyXG5cclxuLyoqXHJcbiAqIFJlbW92ZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSA4LzkvMTAvMTEuXHJcbiAqL1xyXG5cclxudGV4dGFyZWEge1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4vKipcclxuICogRG9uJ3QgaW5oZXJpdCB0aGUgYGZvbnQtd2VpZ2h0YCAoYXBwbGllZCBieSBhIHJ1bGUgYWJvdmUpLlxyXG4gKiBOT1RFOiB0aGUgZGVmYXVsdCBjYW5ub3Qgc2FmZWx5IGJlIGNoYW5nZWQgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gT1MgWC5cclxuICovXHJcblxyXG5vcHRncm91cCB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi8qIFRhYmxlc1xyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuLyoqXHJcbiAqIFJlbW92ZSBtb3N0IHNwYWNpbmcgYmV0d2VlbiB0YWJsZSBjZWxscy5cclxuICovXHJcblxyXG50YWJsZSB7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICBib3JkZXItc3BhY2luZzogMDtcclxufVxyXG5cclxudGQsXHJcbnRoIHtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcbiIsIlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBTaXplIC0gdmFyaWFibGVzXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4kZm9udF9fc2l6ZTogMTYgIWRlZmF1bHQ7XHJcbiRmb250X19iYXNlOiAyMSAhZGVmYXVsdDtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEZvbnQgZmFtaWx5IC0gdmFyaWFibGVzXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4kZm9udF9fZmFtaWx5OiBcIk15cmlhZFByb1wiO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gQ29sb3IgdmFyaWFibGVzXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiRjb2xvcl9fdGV4dC0tZGFyazogIzIyMjYyYTsgXHJcbiRjb2xvcl9fdGV4dDogIzMyM2M0NzsgXHJcbiRjb2xvcl9fdGV4dC0tbGlnaHQ6ICMyRjMzMzc7XHJcbiRjb2xvcl9fZ3JheTogIzhFOEU4RTtcclxuXHJcbiRjb2xvcl9fcHJpbWFyeTogI0VFMzEyNDsgXHJcblxyXG4kY29sb3JfX2JhY2tncm91bmQtLW1haW46ICNmZmZmZmY7XHJcbiRjb2xvcl9fbGlnaHRncmF5OiAjYmRiZGJkO1xyXG4kY29sb3JfX2lucHV0czogI0U0RTRFNDtcclxuJGNvbG9yX190b29sdGlwOiAjMDA0ZWZmO1xyXG4kY29sb3JfX2JhY2tncm91bmQtLWZvb3RlcjogIzAwMDAwMDtcclxuXHJcblxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gQ29udmVydCBwaXhlbHMgdG8gZW1zIC0gRnVuY3Rpb25cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbkBmdW5jdGlvbiBlbSgkcHgsICRiYXNlOiAkZm9udF9fc2l6ZSl7XHJcbiAgICBAcmV0dXJuKCRweCAvICRiYXNlKSAqIDFlbTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gSW1wb3J0IHByZWZpeGVzIC0gbWl4aW5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbkBpbXBvcnQgJy4uL3ByZWZpeGVzL19wcmVmaXhlcyc7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBJbXBvcnQgbWVkaWEgcXVlcnlzIC0gbWl4aW5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbkBpbXBvcnQgJy4uL21lZGlhcXVlcnlzL19tZWRpYXF1ZXJ5cyc7IiwiXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEltcG9ydCBCYXNlIHZhcmlhYmxlc1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuQGltcG9ydCBcIi4uL3ZhcmlhYmxlcy9fYmFzZS12YXJpYWJsZXNcIjtcclxuXHJcbi8qKlxyXG4gKiBib2R5IC1zdHlsZXNcclxuICovXHJcblxyXG4qXHJcbntcclxuICBmb250LWZhbWlseTogJGZvbnRfX2ZhbWlseSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5ib2R5XHJcbntcclxuICBmb250LXNpemU6IGVtKCRmb250X19zaXplKTtcclxuICBsaW5lLWhlaWdodDogZW0oJGZvbnRfX2Jhc2UpO1xyXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBwYWRkaW5nOiAwO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG59IiwiXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFN0cmluZyBSZXBsYWNlXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5AZnVuY3Rpb24gc3RyLXJlcGxhY2UoJHN0cmluZywgJHNlYXJjaCwgJHJlcGxhY2U6IFwiXCIpIHtcclxuXHQkaW5kZXg6IHN0ci1pbmRleCgkc3RyaW5nLCAkc2VhcmNoKTtcclxuXHJcblx0QGlmICRpbmRleCB7XHJcblx0XHRAcmV0dXJuIHN0ci1zbGljZSgkc3RyaW5nLCAxLCAkaW5kZXggLSAxKSArICRyZXBsYWNlICsgc3RyLXJlcGxhY2Uoc3RyLXNsaWNlKCRzdHJpbmcsICRpbmRleCArIHN0ci1sZW5ndGgoJHNlYXJjaCkpLCAkc2VhcmNoLCAkcmVwbGFjZSk7XHJcblx0fVxyXG5cclxuXHRAcmV0dXJuICRzdHJpbmc7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEZvbnQgRmFjZSAtIG1peGluXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5AbWl4aW4gZm9udC1mYWNlKCRuYW1lLCAkcGF0aCwgJHdlaWdodDogbnVsbCwgJHN0eWxlOiBudWxsLCAkZXh0czogZW90IHdvZmYgdHRmIHN2Zykge1xyXG5cdCRzcmM6IG51bGw7XHJcblxyXG5cdCRleHRtb2RzOiAoXHJcblx0XHRlb3Q6IFwiP1wiLFxyXG5cdFx0c3ZnOiBcIiNcIiArIHN0ci1yZXBsYWNlKCRuYW1lLCBcIiBcIiwgXCJfXCIpXHJcblx0KTtcclxuXHJcblx0JGZvcm1hdHM6IChcclxuXHRcdG90ZjogXCJvcGVudHlwZVwiLFxyXG5cdFx0dHRmOiBcInRydWV0eXBlXCJcclxuXHQpO1xyXG5cclxuXHRAZWFjaCAkZXh0IGluICRleHRzIHtcclxuXHRcdCRleHRtb2Q6IGlmKG1hcC1oYXMta2V5KCRleHRtb2RzLCAkZXh0KSwgJGV4dCArIG1hcC1nZXQoJGV4dG1vZHMsICRleHQpLCAkZXh0KTtcclxuXHRcdCRmb3JtYXQ6IGlmKG1hcC1oYXMta2V5KCRmb3JtYXRzLCAkZXh0KSwgbWFwLWdldCgkZm9ybWF0cywgJGV4dCksICRleHQpO1xyXG5cdFx0JHNyYzogYXBwZW5kKCRzcmMsIHVybChxdW90ZShcIi9hc3NldHMvY2FtL1wiICsgJHBhdGggKyBcIi5cIiArICRleHRtb2QpKSBmb3JtYXQocXVvdGUoJGZvcm1hdCkpLCBjb21tYSk7XHJcblx0fVxyXG5cclxuXHRAZm9udC1mYWNlIHtcclxuXHRcdGZvbnQtZmFtaWx5OiBxdW90ZSgkbmFtZSk7XHJcblx0XHRmb250LXN0eWxlOiAkc3R5bGU7XHJcblx0XHRmb250LXdlaWdodDogJHdlaWdodDtcclxuXHRcdHNyYzogJHNyYztcclxuXHR9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBGb250IGZhbWlseXMgLSBpbmNsdWRlLlxyXG4gKi9cclxuXHJcbkBpbmNsdWRlIGZvbnQtZmFjZShcIk15cmlhZFByb1wiLCBmb250cy9NeXJpYWRQcm8tSXQsIDEwMCwgaXRhbGljKTtcclxuQGluY2x1ZGUgZm9udC1mYWNlKFwiTXlyaWFkUHJvXCIsIGZvbnRzL015cmlhZFByby1SZWd1bGFyLCAxMDAsIG5vcm1hbCk7XHJcbkBpbmNsdWRlIGZvbnQtZmFjZShcIk15cmlhZFByb1wiLCBmb250cy9NeXJpYWRQcm8tQm9sZCwgYm9sZCwgbm9ybWFsKTtcclxuIiwiXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEltcG9ydCBCYXNlIHZhcmlhYmxlc1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuQGltcG9ydCBcIi4uL3ZhcmlhYmxlcy9fYmFzZS12YXJpYWJsZXNcIjtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFRleHQgZWxlbWVudHMgc3R5bGVzIC1taXhpblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuQG1peGluIHRleHQoICRzaXplOiAkZm9udF9fc2l6ZSwgJGxpbmU6ICRmb250X19iYXNlLCAkbWFyZ2luLXRvcDogMCwgJG1hcmdpbi1ib3R0b206IDAsICRmYW1pbHk6ICRmb250X19mYW1pbHksICRjb2xvcjogJGNvbG9yX190ZXh0LCAkd2VpZ2h0OiAxMDAsICRzdHlsZTogbm9ybWFsKSB7XHJcbiAgICBjb2xvcjogJGNvbG9yO1xyXG4gICAgZm9udC1mYW1pbHk6ICRmYW1pbHk7XHJcbiAgICBmb250LXNpemU6IGVtKCRzaXplKTtcclxuICAgIGZvbnQtd2VpZ2h0OiAkd2VpZ2h0O1xyXG4gICAgbGluZS1oZWlnaHQ6IGVtKCRsaW5lLCAkc2l6ZSk7XHJcbiAgICBtYXJnaW4tdG9wOiBlbSgkbWFyZ2luLXRvcCwgJHNpemUpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogZW0oJG1hcmdpbi1ib3R0b20sICRzaXplKTtcclxuICAgIGZvbnQtc3R5bGU6ICRzdHlsZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRleHQgZWxlbWVudHMgLSBzdHlsZXMuXHJcbiAqL1xyXG5cclxuaDEsIC5oMVxyXG57XHJcbiAgICBAaW5jbHVkZSB0ZXh0KDU3LCA3NiwgMjEsIDQyLCAkY29sb3I6ICRjb2xvcl9fdGV4dCwgJHdlaWdodDogOTAwKVxyXG59XHJcblxyXG5oMiwgLmgyXHJcbntcclxuICAgIEBpbmNsdWRlIHRleHQoMzYsIDQyLCA3LCAxOCwgJGNvbG9yOiAkY29sb3JfX3RleHQsICR3ZWlnaHQ6IDkwMClcclxufVxyXG5cclxuaDMsIC5oM1xyXG57XHJcbiAgICBAaW5jbHVkZSB0ZXh0KDI2LCAyMSwgMCwgMjEsICRjb2xvcjogJGNvbG9yX190ZXh0LCAkd2VpZ2h0OiAzMDApXHJcbn1cclxuXHJcbmg0LCAuaDRcclxue1xyXG4gICAgQGluY2x1ZGUgdGV4dCgxOCwgMjEsIDAsIDE4LCAkd2VpZ2h0OiA2MDApXHJcbn1cclxuXHJcbmg1LCAuaDVcclxue1xyXG4gICAgQGluY2x1ZGUgdGV4dCgxNiwgMjEsIDAsIDIxLCAkd2VpZ2h0OiAzMDApXHJcbn1cclxuXHJcbmg2LCAuaDZcclxue1xyXG4gICAgQGluY2x1ZGUgdGV4dCgxMiwgMTYsIDAsIDEwLCAkd2VpZ2h0OiAzMDApXHJcbn1cclxuXHJcbnBcclxue1xyXG4gICAgQGluY2x1ZGUgdGV4dCgkc2l6ZTogMTYsICRtYXJnaW4tYm90dG9tOiAyMSwgJGNvbG9yOiAkY29sb3JfX3RleHQtLWxpZ2h0LCAkd2VpZ2h0OiAxMDApXHJcbn1cclxuXHJcbnVsIGxpXHJcbntcclxuICAgIEBpbmNsdWRlIHRleHQoMTUsIDE2LCA3LCAwLCAkd2VpZ2h0OiAyMDApXHJcbn1cclxuXHJcbmVtXHJcbntcclxuICAgIEBpbmNsdWRlIHRleHQoMTEsIDE1LCAxMCwgMCwgJHdlaWdodDogMzAwKVxyXG59XHJcblxyXG4vKipcclxuICogVGV4dCBjb2xvcnMgLSBzdHlsZXMuXHJcbiAqL1xyXG5cclxuLnRleHRfX2NvbG9yLS1saWdodFxyXG57XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRleHRfX2NvbG9yLS1kYXJrXHJcbntcclxuICAgIGNvbG9yOiAkY29sb3JfX3RleHQtLWRhcmsgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRleHRfX2NvbG9yXHJcbntcclxuICAgIGNvbG9yOiAkY29sb3JfX3RleHQ7XHJcbn1cclxuXHJcbi50ZXh0X19jb2xvci0tcHJpbWFyeVxyXG57XHJcbiAgICBjb2xvcjogJGNvbG9yX19wcmltYXJ5O1xyXG59XHJcblxyXG4vKipcclxuICogVGV4dCBhbGlnbiAtIHN0eWxlcy5cclxuICovXHJcblxyXG4gLnRleHRfX2FsaWduLS1sZWZ0XHJcbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiB9XHJcblxyXG4gLnRleHRfX2FsaWduLS1yaWdodFxyXG4ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuIH1cclxuXHJcbiAudGV4dF9fYWxpZ24tLWNlbnRlclxyXG4ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiB9XHJcblxyXG4vKipcclxuICogVGV4dCBhbGlnbiAtIHdlaWdodC5cclxuICovXHJcblxyXG4gLnRleHRfX3dlaWdodC0tcmVndWxhclxyXG4ge1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbCAhaW1wb3J0YW50O1xyXG4gfVxyXG5cclxuLyoqXHJcbiAqIFRleHQgbWFyZ2luIHZhcmlhdGlvbnNcclxuICovXHJcblxyXG4gLnRleHRfX21hcmdpbi0tYm90dG9tMFxyXG4ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuIH0iLCJcclxuLyoqXHJcbiogTW9kdWxlcyAtIGZvcm1zIC0gTGF5b3V0XHJcbiovXHJcblxyXG4uZm9ybUNvbnRhaW5lclxyXG57XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0QGluY2x1ZGUgcHJlZml4KChcclxuXHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3gsXHRcdCBcclxuICAgICksIHdlYmtpdCBtb3ogbyBtcyk7XHJcblx0Ly8gRW4gZXN0b3MgZG9zIG1lZGlhcXVlcnlzIGluY2x1eWVzIGxhIHNvbWJyYSBkZSBsYSBlc3F1aW5hLCBsZSBpbmx1eWVzIHNvbWJyYXMsIGRlc3RlbGxvcyB5IGxvIHF1ZSBsbGV2ZSBlbCBkaXNlw7FvXHJcblx0QGluY2x1ZGUgbWVkaWEobGcpe1xyXG5cdFx0cGFkZGluZzogZW0oMzIpIDA7XHJcblx0XHRib3JkZXI6IHNvbGlkIDFweCAkY29sb3JfX2xpZ2h0Z3JheTtcclxuXHRcdHBhZGRpbmc6IGVtKDM1KSBlbSg0MCk7XHJcblx0XHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9jYW0vaW1nL2xheW91dC9jdXJ2ZV9iZy5wbmcpO1xyXG5cdFx0YmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgYm90dG9tO1xyXG5cdFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yX19saWdodGdyYXksIDAuMDQpO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogZW0oNDIpO1xyXG5cdFx0QGluY2x1ZGUgcHJlZml4KChcclxuXHRcdFx0Ym94LXNoYWRvdzogMCAwIGVtKDgpIHJnYmEoJGNvbG9yX190ZXh0LS1saWdodCwgMC4xNylcdCBcclxuXHRcdCksIHdlYmtpdCBtb3ogbyBtcyk7XHJcblx0fVxyXG5cdCZfX2NvbHVtbkNvbnRhaW5lclxyXG5cdHtcclxuXHRcdG1hcmdpbjogZW0oNDApIDA7XHJcblx0XHRAaW5jbHVkZSBwcmVmaXgoKFxyXG5cdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94LFxyXG5cdFx0XHRkaXNwbGF5OiBmbGV4LFxyXG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZCxcclxuXHRcdFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQsXHJcblx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cclxuXHRcdCksIHdlYmtpdCBtb3ogbyBtcyk7XHJcblx0XHRAaW5jbHVkZSBtZWRpYShtZCl7XHJcblx0XHRcdEBpbmNsdWRlIHByZWZpeCgoXHJcblx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IHJvdyxcclxuXHRcdFx0XHRmbGV4LXdyYXA6IHdyYXBcclxuXHRcdFx0KSwgd2Via2l0IG1veiBvIG1zKTtcclxuXHRcdH1cclxuXHRcdEBpbmNsdWRlIG1lZGlhKGxnKXtcclxuXHRcdFx0QGluY2x1ZGUgcHJlZml4KChcclxuXHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogcm93LFxyXG5cdFx0XHRcdGZsZXgtd3JhcDogd3JhcFxyXG5cdFx0XHQpLCB3ZWJraXQgbW96IG8gbXMpO1xyXG5cdFx0fVxyXG5cdFx0LmNlbnRlclRleHR7XHJcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdFx0QGluY2x1ZGUgbWVkaWEobWQpe1xyXG5cdFx0XHRcdHdpZHRoOiA4MCU7XHJcblx0XHRcdH1cclxuXHRcdFx0QGluY2x1ZGUgbWVkaWEobGcpe1xyXG5cdFx0XHRcdHdpZHRoOiA4MCU7XHJcblx0XHRcdH1cclxuXHRcdFx0Ji0tc21hbGx7XHJcblx0XHRcdFx0d2lkdGg6IDcwJTtcclxuXHRcdFx0XHRtYXJnaW46IDAuNXJlbSBhdXRvO1xyXG5cdFx0XHRcdEBpbmNsdWRlIG1lZGlhKHNtKXtcclxuXHRcdFx0XHRcdHdpZHRoOiA2MCU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdEBpbmNsdWRlIG1lZGlhKG1kKXtcclxuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRAaW5jbHVkZSBtZWRpYShsZyl7XHJcblx0XHRcdFx0XHR3aWR0aDogODAlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHQmLS1jb2xvclByaW1hcnl7XHJcblx0XHRcdFx0Y29sb3I6ICRjb2xvcl9fcHJpbWFyeTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0LmZvcm1Db2x1bW5cclxuXHRcdHtcclxuXHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdG1hcmdpbjogMDtcclxuXHRcdFx0cGFkZGluZzogMDtcclxuXHRcdFx0QGluY2x1ZGUgbWVkaWEobWQpe1xyXG5cdFx0XHRcdHdpZHRoOiA0NSU7XHJcblx0XHRcdH1cclxuXHRcdFx0QGluY2x1ZGUgbWVkaWEobGcpe1xyXG5cdFx0XHRcdHdpZHRoOiAzNSU7XHJcblx0XHRcdH1cclxuXHRcdFx0Ji0tY2VudGVye1xyXG5cdFx0XHRcdG1hcmdpbjogYXV0bztcclxuXHRcdFx0fVxyXG5cdFx0XHQmX19jb250ZW50Q2VudGVye1xyXG5cdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdFx0XHRhe1xyXG5cdFx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdFx0XHRcdFx0Y29sb3I6ICRjb2xvcl9fcHJpbWFyeSAhaW1wb3J0YW50O1xyXG5cdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdFx0XHRcdFx0bWFyZ2luOiAwIDAuMzEyNWVtO1xyXG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0XHRcdFx0XHRwb2ludGVyLWV2ZW50czogYXV0byAhaW1wb3J0YW50O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0LmZvcm1Db2x1bW5QcmluY2lwYWxcclxuXHRcdHtcclxuXHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdG1hcmdpbjogMDtcclxuXHRcdFx0cGFkZGluZy10b3A6IGVtKDE2KTtcclxuXHRcdFx0QGluY2x1ZGUgbWVkaWEobWQpe1xyXG5cdFx0XHRcdHdpZHRoOiA5NSU7XHJcblx0XHRcdH1cclxuXHRcdFx0QGluY2x1ZGUgbWVkaWEobGcpe1xyXG5cdFx0XHRcdHdpZHRoOiA4NSU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdC5mb3JtQ29sdW1uTWlkZGxle1xyXG5cdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0bWFyZ2luOiAwO1xyXG5cdFx0XHRwYWRkaW5nLXRvcDogZW0oMTYpO1xyXG5cdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRcdEBpbmNsdWRlIG1lZGlhKG1kKXtcclxuXHRcdFx0XHR3aWR0aDogNzAlO1xyXG5cdFx0XHR9XHJcblx0XHRcdEBpbmNsdWRlIG1lZGlhKGxnKXtcclxuXHRcdFx0XHR3aWR0aDogNjAlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHQuaW5kaWNhdGlvbnN7XHJcblx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHR1bHtcclxuXHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0XHRtYXJnaW46IGF1dG87XHJcblx0XHRcdFx0QGluY2x1ZGUgbWVkaWEobWQpe1xyXG5cdFx0XHRcdFx0d2lkdGg6IDYwJTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0QGluY2x1ZGUgbWVkaWEobGcpe1xyXG5cdFx0XHRcdFx0d2lkdGg6IDQwJTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0Jl9fYnV0dG9uQ29udGFpbmVyXHJcblx0e1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRtYXJnaW46IGVtKDQwKSAwO1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHQmLS1kdWFsQnV0dG9ue1xyXG5cdFx0XHRAaW5jbHVkZSBwcmVmaXgoKFxyXG5cdFx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3gsXHJcblx0XHRcdFx0ZGlzcGxheTogZmxleCxcclxuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4sXHJcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcixcclxuXHRcdFx0KSwgd2Via2l0IG1veiBvIG1zKTtcclxuXHRcdFx0YXBwLWJ1dHRvbi1jb250aW51ZVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0bWFyZ2luOiAwIGVtKDUpO1xyXG5cdFx0XHRcdHBhZGRpbmc6IDA7XHJcblx0XHRcdFx0YnV0dG9uXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGJ1dHRvbntcclxuXHRcdFx0XHRtYXJnaW46IDAgZW0oNSk7XHJcblx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIiwiXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFByZWZpeCBzZXZlcmFsIHByb3BlcnRpZXMgYXQgb25jZSAtIE1peGluXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vLy8gQHBhcmFtIHtNYXB9ICRkZWNsYXJhdGlvbnMgLSBEZWNsYXJhdGlvbnMgdG8gcHJlZml4XHJcbi8vLyBAcGFyYW0ge0xpc3R9ICRwcmVmaXhlcyAoKCkpIC0gTGlzdCBvZiBwcmVmaXhlcyB0byBwcmludFxyXG5AbWl4aW4gcHJlZml4KCRkZWNsYXJhdGlvbnMsICRwcmVmaXhlczogKCkpIFxyXG57XHJcbiAgICBAZWFjaCAkcHJvcGVydHksICR2YWx1ZSBpbiAkZGVjbGFyYXRpb25zIFxyXG4gICAge1xyXG4gICAgICAgIEBlYWNoICRwcmVmaXggaW4gJHByZWZpeGVzXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAjeyctJyArICRwcmVmaXggKyAnLScgKyAkcHJvcGVydHl9OiAkdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIC8vIE91dHB1dCBzdGFuZGFyZCBub24tcHJlZml4ZWQgZGVjbGFyYXRpb25cclxuICAgICAgICAjeyRwcm9wZXJ0eX06ICR2YWx1ZTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gVXNhZ2VcclxuXHJcbi8vIC5jbGFzc1xyXG4vLyB7XHJcbi8vICAgICAgIEBpbmNsdWRlIHByZWZpeCgoXHJcbi8vICAgICAgICAgICBwcm9wZXJ0eTogdmFsdWUsXHJcbi8vICAgICAgICksIHdlYmtpdCBtb3ogbyBtcyk7XHJcbi8vIH0iLCJcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gTWVkaWFRdWVyeSBCcmVha3BvaW50cyAtIG1peGluXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4kYnJlYWtwb2ludC1zbTogNTc2cHg7XHJcbiRicmVha3BvaW50LW1kOiA3NjhweDtcclxuJGJyZWFrcG9pbnQtbGc6IDk5MnB4O1xyXG4kYnJlYWtwb2ludC14bGc6IDEyMDBweDtcclxuXHJcbkBtaXhpbiBtZWRpYSgkbWVkaWEpIHtcclxuICBAaWYgJG1lZGlhID09IHNtIHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkYnJlYWtwb2ludC1zbSkgYW5kIChtYXgtd2lkdGg6ICRicmVha3BvaW50LW1kKSB7IEBjb250ZW50OyB9XHJcbiAgfVxyXG4gIEBlbHNlIGlmICRtZWRpYSA9PSBtZCB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJGJyZWFrcG9pbnQtbWQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWtwb2ludC1sZykgeyBAY29udGVudDsgfVxyXG4gIH1cclxuICBAZWxzZSBpZiAkbWVkaWEgPT0gbGcge1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50LWxnKSB7IEBjb250ZW50OyB9XHJcbiAgfVxyXG4gIEBlbHNlIGlmICRtZWRpYSA9PSB4bGcge1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRicmVha3BvaW50LXhsZykgeyBAY29udGVudDsgfVxyXG4gIH1cclxufSIsIlxyXG4vKipcclxuKiBNb2R1bGVzIC0gZm9ybXMgLSBMYXlvdXRcclxuKi9cclxuXHJcbi5jYXJkc0NvbnRhaW5lclxyXG57XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0QGluY2x1ZGUgcHJlZml4KChcclxuXHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3gsXHRcdCBcclxuXHQpLCB3ZWJraXQgbW96IG8gbXMpO1xyXG5cdEBpbmNsdWRlIG1lZGlhKGxnKXtcclxuXHRcdHBhZGRpbmc6IGVtKDMyKSAwO1xyXG5cdFx0Ym9yZGVyOiBzb2xpZCAxcHggJGNvbG9yX19saWdodGdyYXk7XHJcblx0XHRwYWRkaW5nOiBlbSgzNSkgZW0oNDApO1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvY2FtL2ltZy9sYXlvdXQvY3VydmVfYmcucG5nKTtcclxuXHRcdGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IGJvdHRvbTtcclxuXHRcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcl9fbGlnaHRncmF5LCAwLjA0KTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IGVtKDQyKTtcclxuXHRcdEBpbmNsdWRlIHByZWZpeCgoXHJcblx0XHRcdGJveC1zaGFkb3c6IDAgMCBlbSg4KSByZ2JhKCRjb2xvcl9fdGV4dC0tbGlnaHQsIDAuMTcpXHQgXHJcblx0XHQpLCB3ZWJraXQgbW96IG8gbXMpO1xyXG5cdH1cclxuXHQmX19yb3dcclxuXHR7XHJcblx0XHRtYXJnaW46IGVtKDQwKSAwO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRtaW4taGVpZ2h0OiAxMDBweDtcclxuXHRcdEBpbmNsdWRlIHByZWZpeCgoXHJcblx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3gsXHJcblx0XHRcdGRpc3BsYXk6IGZsZXgsXHJcblx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyLFxyXG5cdFx0XHRhbGlnbi1pdGVtczogZmxleC1zdGFydCxcclxuXHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtblxyXG5cdFx0KSwgd2Via2l0IG1veiBvIG1zKTtcclxuXHRcdEBpbmNsdWRlIG1lZGlhKG1kKXtcclxuXHRcdFx0QGluY2x1ZGUgcHJlZml4KChcclxuXHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogcm93LFxyXG5cdFx0XHRcdGZsZXgtd3JhcDogd3JhcFxyXG5cdFx0XHQpLCB3ZWJraXQgbW96IG8gbXMpO1xyXG5cdFx0fVxyXG5cdFx0QGluY2x1ZGUgbWVkaWEobGcpe1xyXG5cdFx0XHRAaW5jbHVkZSBwcmVmaXgoKFxyXG5cdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiByb3csXHJcblx0XHRcdFx0ZmxleC13cmFwOiB3cmFwXHJcblx0XHRcdCksIHdlYmtpdCBtb3ogbyBtcyk7XHJcblx0XHR9XHJcblx0XHQuY2FyZFxyXG5cdFx0e1xyXG5cdFx0XHRwYWRkaW5nOiBlbSgyNSkgZW0oMzApO1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiBlbSgyMCk7XHJcblx0XHRcdGJhY2tncm91bmQ6ICRjb2xvcl9faW5wdXRzO1xyXG5cdFx0XHRtYXJnaW46IDFyZW0gMDtcclxuXHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdEBpbmNsdWRlIHByZWZpeCgoXHJcblx0XHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveFxyXG5cdFx0XHQpLCB3ZWJraXQgbW96IG8gbXMpO1xyXG5cdFx0XHRAaW5jbHVkZSBtZWRpYShtZCl7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAxLjE1ZW07XHJcblx0XHRcdFx0d2lkdGg6IDQ1JTtcclxuXHRcdFx0XHRtYXJnaW46IDFyZW07XHJcblx0XHRcdH1cclxuXHRcdFx0QGluY2x1ZGUgbWVkaWEobGcpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRmb250LXNpemU6IDEuMTVlbTtcclxuXHRcdFx0XHR3aWR0aDogMzAlO1xyXG5cdFx0XHRcdG1hcmdpbjogMXJlbTtcclxuXHRcdFx0fVxyXG5cdFx0XHQmX19oZWFkZXJcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGJvcmRlci1ib3R0b206IHNvbGlkIDNweCAkY29sb3JfX3ByaW1hcnk7XHJcblx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0aDRcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHRcdFx0XHRcdHN0cm9uZ1xyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRjb2xvcjogJGNvbG9yX19wcmltYXJ5O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHQmX19ib2R5XHJcblx0XHRcdHtcclxuXHRcdFx0XHRtYXJnaW46IGVtKDEyKSAwO1xyXG5cdFx0XHRcdEBpbmNsdWRlIG1lZGlhKG1kKVxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdG1pbi1oZWlnaHQ6IDEzcmVtO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRAaW5jbHVkZSBtZWRpYShsZylcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRtaW4taGVpZ2h0OiAxNHJlbTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dWxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRwYWRkaW5nOiAwIGVtKDE1KTtcclxuXHRcdFx0XHRcdGxpc3Qtc3R5bGU6IG5vbmU7XHJcblx0XHRcdFx0XHRsaVxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHQmOmJlZm9yZVxyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0Y29udGVudDogXCJcXDIwMjJcIjsgIFxyXG5cdFx0XHRcdFx0XHRcdGNvbG9yOiAkY29sb3JfX3ByaW1hcnk7XHJcblx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7IFxyXG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jazsgXHJcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDFlbTtcclxuXHRcdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDogLTFlbTsgXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0Jl9fZm9vdGVyXHJcblx0XHRcdHtcclxuXHRcdFx0XHRtYXJnaW4tdG9wOiBlbSgyMCk7XHJcblx0XHRcdFx0QGluY2x1ZGUgcHJlZml4KChcclxuXHRcdFx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3gsXHJcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4LFxyXG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZCxcclxuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXJcclxuXHRcdFx0XHQpLCB3ZWJraXQgbW96IG8gbXMpO1xyXG5cdFx0XHRcdHNwYW5cclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRjb2xvcjogJGNvbG9yX19wcmltYXJ5O1xyXG5cdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiBlbSgxMCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGltZ1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdHdpZHRoOiAyMHB4O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHQmX19idXR0b25Db250YWluZXJcclxuXHR7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdG1hcmdpbjogZW0oNDApIDA7XHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuXHR9XHJcbn1cclxuIiwiXHJcbi8qKlxyXG4gKiBMYXlvdXQgLSBNYWluIGNvbnRhaW5lclxyXG4gKi9cclxuXHJcbi5jb250YWluZXJcclxue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JfX2JhY2tncm91bmQtLW1haW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiBlbSgzMikgZW0oMjApO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBAaW5jbHVkZSBwcmVmaXgoKFxyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3gsXHJcbiAgICAgICAgZGlzcGxheTogZmxleCxcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQsXHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcixcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLCBcclxuICAgICksIHdlYmtpdCBtb3ogbyBtcyk7XHJcbiAgICAmLS1tZW51XHJcbiAgICB7XHJcbiAgICAgICAgQGluY2x1ZGUgbWVkaWEobGcpe1xyXG4gICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgICAgQGluY2x1ZGUgbWVkaWEoeGxnKXtcclxuICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgfSAgICBcclxufSJdfQ== */"

/***/ })

}]);
//# sourceMappingURL=7.js.map