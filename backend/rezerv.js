const rezerv = [
  {
    name: "Русское Радио",
    url: "https://rusradio.hostingradio.ru/rusradio96.aacp",
  },
  {
    name: "Chanson",
    url: "http://chanson.hostingradio.ru:8041/chanson128.mp3",
  },
  {
    name: "Europa Plus/Москва/256-MP3",
    url: "http://ep256.hostingradio.ru:8052/europaplus256.mp3",
  },
  {
    name: "Авто Радио",
    url:
      "https://pub0302.101.ru:8443/stream/air/aac/64/100?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpcCI6IjIxMi41OC4xMDIuMTQ0IiwidXNlcmFnZW50IjoiTW96aWxsYVwvNS4wIChXaW5kb3dzIE5UIDEwLjA7IFdpbjY0OyB4NjQpIEFwcGxlV2ViS2l0XC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWVcLzk2LjAuNDY2NC40NSBTYWZhcmlcLzUzNy4zNiBPUFJcLzgyLjAuNDIyNy4xMyAoRWRpdGlvbiBiZXRhKSIsInVpZF9jaGFubmVsIjoiMTAwIiwidHlwZV9jaGFubmVsIjoiY2hhbm5lbCIsImV4cCI6MTYzOTA1NDE0Nn0.u0Fagc1UgCtjDLSRJwDA3InfTKaGVaeXD7fwh2nk4as",
  },
  {
    name: "Asia-Plus",
    url: "https://radio.migrantnews.info/ap",
  },
  {
    name: "Dushevnoe Radio Minsk 105.7 FM",
    url: "http://stream.hoster.by:8081/pilotfm/audio/icecast.audio",
  },
  {
    name: "EURO Radio FM",
    url: "http://stream1.euroradio.fm:8000/euroradio1?seed=1523961466",
  },
  {
    name: "Love Is Radio",
    url: "http://listen1.myradio24.com:9000/3355",
  },
  {
    name: "NovoeRadio BY",
    url: "http://live.novoeradio.by:8000/novoeradio-128k",
  },
  {
    name: "NovoeRadio BY Narodnoe",
    url: "http://live.novoeradio.by:8000/narodnoe-radio-128k",
  },
  {
    name: "3",
    url: "http://s1.radioheart.ru:8001/radiogomelfm",
  },
  {
    name: "radio-skif.by",
    url: "http://178.172.150.248:2530/;stream.nsv",
  },
  {
    name: "UP FM radio",
    url: "http://listen.teploe.net:8100/npkfm",
  },
  {
    name: "WarGaming.FM МИНСК",
    url: "http://sv.wargaming.fm:8051/128",
  },
  {
    name: "Гомельское городское радио 107.4FM",
    url: "http://gomeltv.by:2015/gomelradio",
  },
  {
    name: "Легенды FM",
    url: "http://live.legendy.by:8000/legendyfm",
  },
  {
    name: "Мелодии Века",
    url: "http://93.84.112.253:8010/MV128",
  },
  {
    name: "Радио ГОМЕЛЬ-ПЛЮС 103.7FM",
    url: "http://s1.radioheart.ru:8001/radiogomel",
  },
  {
    name: "9 FM (Витебск)",
    url: "http://178.172.150.248:2530/;stream.mp3",
  },
  {
    name: "Теплое Радио Нетоп FM",
    url: "http://radio2.teploe.net:8000/teploeradio",
  },
  {
    name: "1Крым",
    url: "http://fm.1tvcrimea.ru:8000/stream.mp3",
  },
  {
    name: "32 RADIO",
    url: "http://194.58.123.99:8000/stream",
  },
  {
    name: "7 / на семи холмах 104.7 FM",
    url: "http://retroserver.streamr.ru:8040/radio7128.mp3",
  },
  {
    name: "88.3 FM - Ретро ФМ",
    url: "http://hls-01-retro.emgsound.ru/12/128/playlist.m3u8",
  },
  {
    name: "Adam Izhevsk 104.5 FM",
    url: "http://91.226.107.50:8001/adam/128",
  },
  {
    name: "Al Capone FM",
    url: "http://s04.radio-tochka.com:4890/radio",
  },
  {
    name: "Anime Radio Russia",
    url: "http://radio.flex.ru:8000/radionami",
  },
  {
    name: "Big Noise - music from Siberia",
    url: "http://radio.bignoise.club:8000/nonstop",
  },
  {
    name: "Bigtunesradio - trance",
    url: "http://bigtunesradio.com:8000/trance.mp3?type=.mp3/;stream.mp3",
  },
  {
    name: "Bim radio",
    url: "http://av.bimradio.ru:8066/bim_mp3",
  },
  {
    name: "Channel 5 HQ",
    url: "http://radio.promodj.com:8000/channel5-192",
  },
  {
    name: "CjRadio.Ru",
    url: "http://www.cjradio.ru:8000/high",
  },
  {
    name: "Dance Wave Retro!",
    url: "http://retro.dancewave.online/retrodance.mp3",
  },
  {
    name: "Dance Wave!",
    url: "http://dancewave.online/dance.mp3",
  },
  {
    name: "Deep Melon radio",
    url: "http://stream.melonradio.com/deep",
  },
  {
    name: "DI Radio Digital Impulse - Avivmedia",
    url: "http://orion.shoutca.st:8231/;audio.mp3",
  },
  {
    name: "Dipol-FM",
    url: "http://icecast.sibinformburo.cdnvideo.ru:8000/dipolfm",
  },
  {
    name: "DISCOTEKA 90x",
    url: "http://listen1.myradio24.com:9000/5967",
  },
  {
    name: "Dorognoe frontovaya",
    url: "http://dorognoe.hostingradio.ru:8000/dorognoe1945.mp3",
  },
  {
    name: "Enigmatic Station I",
    url: "http://listen2.myradio24.com:9000/8226",
  },
  {
    name: "EuropaRussia",
    url: "http://134.0.115.169:8000/live",
  },
  {
    name: "EuropaRussia",
    url: "http://europarussia.ru:8000/live",
  },
  {
    name: "Fresh FM Sosnovy Bor 105.0 Mhz",
    url: "http://a2.radioheart.ru:8007/live",
  },
  {
    name: "Garage FM Moscow",
    url: "http://music.garagefm.ru:8005/Garagefm128",
  },
  {
    name: "GorVolna",
    url: "http://online.gorvolna.ru:8000/gorvolna",
  },
  {
    name: "Graal Radio Club",
    url: "http://graalradio.com:8123/club",
  },
  {
    name: "Graal Radio Goodtimes 70s/80s",
    url: "http://graalradio.com:8123/goodtimes",
  },
  {
    name: "Green Out FM",
    url: "http://s7.radioheart.ru:8014/nonstop",
  },
  {
    name: "HIT FM TV orsk HD",
    url: "http://hithd.camsh.orsk.ru/hls/hithd.m3u8",
  },
  {
    name: "Hosting radio",
    url: "http://hrradio.hostingradio.ru:8077/hrradio128.mp3",
  },
  {
    name: "House Melon radio",
    url: "http://stream.melonradio.com/house",
  },
  {
    name: "Intervolna - Radio Intervolna 102.9 FM",
    url: "http://online.intervolna.ru:8001/radio128",
  },
  {
    name: "Jazz FM.ru - Instrumental Jazz",
    url: "http://jfm1.hostingradio.ru:14536/ijstream.mp3",
  },
  {
    name: "Jazz FM.ru - Jazz Legends",
    url: "http://jfm1.hostingradio.ru:14536/jlstream.mp3",
  },
  {
    name: "KUFM Radio",
    url: "http://85.21.240.53:8000/kufm",
  },
  {
    name: "Kunel Радио  Набережные Челны",
    url: "http://live.kunelradio.ru:8000/128.mp3",
  },
  {
    name: "Lounge Melon radio",
    url: "http://stream.melonradio.com/lounge",
  },
  {
    name: "Love Radio Москва",
    url: "http://variant.fm:8000/LOVE-32",
  },
  {
    name: "LSD-25 . live . radio",
    url: "http://a1.lsd-25.ru:8000/new?100",
  },
  {
    name: "Marusya FM",
    url: "http://radio-holding.ru:9000/marusya_default",
  },
  {
    name: "MDS Station   AudioBooks",
    url: "http://mds-station.com:8000/mds",
  },
  {
    name: "MGDC FM",
    url: "http://radio.mgdcfm.com:8000/;stream.m3u",
  },
  {
    name: "mixadance.fm - Instrumental Relax",
    url: "https://stream.mixadance.fm/relax",
  },
  {
    name: "Modnoe   kondra",
    url: "http://cast.modnoeradio.ru:8000/kondra",
  },
  {
    name: "Modnoe   socol",
    url: "http://cast.modnoeradio.ru:8000/socol",
  },
  {
    name: "Modnoe Radio - FSJ",
    url: "http://cast.modnoeradio.ru:8000/mp128",
  },
  {
    name: "Neformatnoe Radio Moskva",
    url: "http://neformatnoe.ru:8777/live",
  },
  {
    name: "NN-Radio 99.5 FM AC-POP",
    url: "http://cast.r52.ru:8000/nrd?1446455849857.mp3",
  },
  {
    name: "Noise FM - Modern Electronic Music",
    url: "http://noisefm.ru:8000/play",
  },
  {
    name: "NRJ 99.6 FM Пенза",
    url: "http://den.101.ru:4000/nrj_58_01",
  },
  {
    name: "PAYK_FM",
    url: "http://free.radioheart.ru:8000/paykfm",
  },
  {
    name: "Pilot FM 100.4 Yekaterinburg",
    url: "http://online.pilotfm.ru:8000/pilot",
  },
  {
    name: "Premium",
    url: "http://listen.rpfm.ru:9000/premium128",
  },
  {
    name: "Premium Radio - Pycckuй Toп",
    url: "http://89.175.27.162:9000/aacp48",
  },
  {
    name: "PromoDJ - 186mph Channel",
    url: "http://radio.promodj.com:8000/186mph-192",
  },
  {
    name: "PromoDJ - 300km/h Channel",
    url: "http://radio.promodj.com:8000/300kmh-192",
  },
  {
    name: "PromoDJ - Deep Channel",
    url: "http://radio.promodj.com:8000/deep-192",
  },
  {
    name: "PromoDJ - Dubstep Channel",
    url: "http://radio.promodj.com:8000/dubstep-192",
  },
  {
    name: "PromoDJ - Full Moon Channel",
    url: "http://radio.promodj.com:8000/fullmoon-192",
  },
  {
    name: "PromoDJ - GarageFM",
    url: "http://radio.promodj.com:8000/garagefm-192",
  },
  {
    name: "PromoDJ - KLUBB Channel",
    url: "http://radio.promodj.com:8000/klubb-192",
  },
  {
    name: "PromoDJ - Mini Channel",
    url: "http://radio.promodj.com:8000/mini-192",
  },
  {
    name: "PromoDJ - Mixadance Fm Channel",
    url: "http://radio.promodj.com:8000/mixadancefm-192",
  },
  {
    name: "PromoDJ - Old-School Channel",
    url: "http://radio.promodj.com:8000/oldschool-192",
  },
  {
    name: "PromoDJ - POP Channel",
    url: "http://radio.promodj.com:8000/pop-192",
  },
  {
    name: "PromoDJ - Strange Channel",
    url: "http://radio.promodj.com:8000/strange-192",
  },
  {
    name: "PromoDJ - Too Deep Channel",
    url: "http://radio.promodj.com:8000/toodeep-192",
  },
  {
    name: "PromoDJ - TOO NU Channel",
    url: "http://radio.promodj.com:8000/toonu-192",
  },
  {
    name: "PromoDJ - Vata Channel",
    url: "http://radio.promodj.com:8000/vata-192",
  },
  {
    name: "PromoDJ - YO Radio Channel",
    url: "http://radio.promodj.com:8000/yo-192",
  },
  {
    name: "Promodj: Nu",
    url: "http://radio.promodj.com:8000/nu-192",
  },
  {
    name: "Promodj: TOP 100",
    url: "http://radio.promodj.com:8000/top100-192",
  },
  {
    name: "Radio &quot;My Udmurtiya&quot;",
    url: "http://radio.myudm.ru:10010/mp3",
  },
  {
    name: "Radio &quot;Zarechny&quot; 103.3 FM Penza Oblast",
    url: "http://85.234.36.51:8000/radio",
  },
  {
    name: "Radio 3 OMSK",
    url: "http://81.23.194.18:8010/radio3.mp3",
  },
  {
    name: "Radio 7",
    url: "http://retroserver.streamr.ru:8040/radio7_happiness64.aacp",
  },
  {
    name: " 101.6FM",
    url: "http://fm2inet.aliseplus.lv:8000",
  },
  {
    name: "Radio Anima Amoris - Dub Techno Mix",
    url: "http://amoris.sknt.ru:8024/;",
  },
  {
    name: "Radio ATD www.radiogora.ru",
    url: "http://listen.radiogora.ru:8000/atd320",
  },
  {
    name: "Radio Borneo :: Voronezh ::",
    url: "http://live.borneo.ru:8888/128",
  },
  {
    name: "RADIO CAFE",
    url: "http://radio.mv.ru:8080/Radio_Cafe",
  },
  {
    name: "Radio Cardiowave",
    url: "http://91.206.30.79:8000/CW128",
  },
  {
    name: "Radio DRIVE www.radiogora.ru",
    url: "http://listen.radiogora.ru:8000/drive128",
  },
  {
    name: "Radio ELECTRO www.radiogora.ru",
    url: "http://listen.radiogora.ru:8000/electro32",
  },
  {
    name: "Radio Enjoy",
    url: "http://www.radioenjoy.org:8000/320",
  },
  {
    name: "Radio ET CETERA www.radiogora.ru",
    url: "http://listen.radiogora.ru:8000/etc320",
  },
  {
    name: "Radio ethnomusic",
    url: "http://i-radio.info:8060/radio",
  },
  {
    name: "Radio FREAKYFUNKY www.radiogora.ru",
    url: "http://srv3.listen.radiogora.ru:8000/freakyfunky320",
  },
  {
    name: "Radio GROOVE CAFE www.radiogora.ru",
    url: "http://srv3.listen.radiogora.ru:8000/groovecafe320",
  },
  {
    name: "Radio HIPHOP www.radiogora.ru",
    url: "http://listen.radiogora.ru:8000/hiphop128",
  },
  {
    name: "Radio HITMIX www.radiogora.ru",
    url: "http://listen.radiogora.ru:8000/hitmix128",
  },
  {
    name: "Radio Karnaval 92.8FM in Moscow",
    url: "http://online.carnivalfm.ru:8000/stream/2/",
  },
  {
    name: "Radio Lyantor 100.3 FM",
    url: "http://a2.radioheart.ru:8015/admin",
  },
  {
    name: "Radio Miliceyskaya volna Novokuznetsk",
    url: "http://radio.mvd.ru:8000/mv128.mp3",
  },
  {
    name: "Radio Mix (Luga 106.0 FM)",
    url: "http://media.luga.ru:8002/live",
  },
  {
    name: "Radio Mixa Dance FM",
    url: "https://stream.mixadance.fm/mixadance",
  },
  {
    name: "Radio NEVSKY FM",
    url: "http://radionevskyfm.ru:8000/radio",
  },
  {
    name: "Radio NU EUPHORIA Trance Moscow",
    url: "http://194.87.111.252:8000/live",
  },
  {
    name: "Radio OLDIES www.radiogora.ru",
    url: "http://listen.radiogora.ru:8000/oldies128",
  },
  {
    name: "Radio Podsolnuh 102.9 FM",
    url: "http://live.podsolnuh.media:8000/radio",
  },
  {
    name: "Radio Possibly",
    url: "http://s04.radio-tochka.com:4450/radio",
  },
  {
    name: "Radio REDNOISE www.radiogora.ru",
    url: "http://listen.radiogora.ru:8000/rednoise128",
  },
  {
    name: "Radio Sigma",
    url: "http://195.191.130.125:8000/sigma",
  },
  {
    name: "Radio Sotvorets",
    url: "http://s5.radioheart.ru:8015/nonstop",
  },
  {
    name: "Radio Unikid - Non stop",
    url: "http://listen1.myradio24.com:9000/2455",
  },
  {
    name: "Radio VBC 101.7 Vladivostok",
    url: "http://air.radiovbc.ru:8000/Radio256?21",
  },
  {
    name: "Radio Vitebsk",
    url: "http://radio.vtv.by:8000/radio_vitebsk_128",
  },
  {
    name: "Radio Zaplin   Jazz",
    url: "http://radiozaplin.com:8000/;",
  },
  {
    name: "Radio_100.3FM_of_Lyantor",
    url: "http://s7.radioheart.ru:8015/nonstop",
  },
  {
    name: "Radio-Continental Chelyabinsk",
    url: "http://stream01.radiocon.ru:8000/live",
  },
  {
    name: "Radio-Remix",
    url: "http://radio-remix.ru:8000/radio",
  },
  {
    name: "Radio05.Ru",
    url: "http://radio05.ru:8000/radio05_128",
  },
  {
    name: "RADIO13.RU",
    url: "http://play.radio13.ru:8000/mp3",
  },
  {
    name: "RadioK",
    url: "http://radiok.pro:8000/128",
  },
  {
    name: "Radiokrylya",
    url: "https://myradio24.org/rkradio_256.mp3",
  },
  {
    name: "RadioMantra.ru Bollywood",
    url: "http://s6.radioheart.ru:8012/nonstop",
  },
  {
    name: "Revolution Radio",
    url: "http://revolutionradio.ru:8000/live.mp3",
  },
  {
    name: " 104.5 FM",
    url: "http://online.rockarsenal.ru:8000/rockarsenal",
  },
  {
    name: "RTR - Trance.Ru Channel",
    url: "http://schizoid.in:8000/schizoid",
  },
  {
    name: "SanFm Alternative",
    url: "http://sanfm.ru:8000/alternative",
  },
  {
    name: "SanFM Drum n Bass",
    url: "http://sanfm.ru:8000/drum",
  },
  {
    name: "SanFM Pop",
    url: "http://sanfm.ru:8000/pop",
  },
  {
    name: "SanFM Relax",
    url: "http://sanfm.ru:8000/relax",
  },
  {
    name: "SanFm Trance",
    url: "http://sanfm.ru:8000/trance",
  },
  {
    name: "Sector Radio - 90s",
    url: "http://89.223.45.5:8000/next-160",
  },
  {
    name: "Sector Radio - Space",
    url: "http://89.223.45.5:8000/space-160",
  },
  {
    name: "Shanson FM - Romantic",
    url: "http://chanson.hostingradio.ru:8041/chanson-romantic128.mp3?",
  },
  {
    name: "Shanson FM - UNC",
    url: "http://chanson.hostingradio.ru:8041/chanson-uncensored128.mp3?",
  },
  {
    name: "Soulful Melon radio",
    url: "http://stream.melonradio.com/soulful",
  },
  {
    name: "SOULLIVE.RU",
    url: "http://radio.soullive.ru:8000/soul128",
  },
  {
    name: "SOULLIVE.RU - 1st Club Radio",
    url: "http://radio.soullive.ru:8000/livedj",
  },
  {
    name: "Soulplay_Radio",
    url: "http://s1.radioheart.ru:8018/live",
  },
  {
    name: "SpokoinoeRadio",
    url: "http://listen1.myradio24.com:9000/6262",
  },
  {
    name: "Staroe Dobroe Radio",
    url: "http://91.189.162.134:8008/;stream.nsv",
  },
  {
    name: "Staroe Radio (Detskoe)",
    url: "http://195.91.237.50:8000/detskoe128",
  },
  {
    name: "stealkill",
    url: "http://listen.42fm.ru:8000/stealkill",
  },
  {
    name: "TEMRYUK LIVE",
    url: "http://s1.radioheart.ru:8001/radiotemryuk_128",
  },
  {
    name: "The Obelisk Radio Rock +18",
    url: "http://radio.theobelisk.net:8000/thepodilisk",
  },
  {
    name: "Tipichnoe FM Щелково",
    url: "http://myradio24.org/9696",
  },
  {
    name: "Underrated FM",
    url: "http://s5.radioheart.ru:8011/nonstop",
  },
  {
    name: "Vilgan Zhirnovsk",
    url: "http://194.58.90.144:8025/xstream",
  },
  {
    name: "Vocal Trance",
    url: "http://vocaltrance.ru:8000/vocaltrance",
  },
  {
    name: "YasenBit Radio",
    url: "http://188.126.44.253:8000/yasenbit128k",
  },
  {
    name: "Yum FM",
    url: "http://yumfm.hostingradio.ru:8020/yumfm128.mp3",
  },
  {
    name: "Автомат и гитара-radio",
    url: "http://195.128.127.63:88/mp3",
  },
  {
    name: "Авторитетное радио из Красноярска",
    url: "http://84.22.142.130:8000/arstream?20&amp;45&amp;8",
  },
  {
    name: "Атмосфера-radio",
    url: "http://listen1.myradio24.com:9000/3979",
  },
  {
    name: "Бурлеск fm",
    url: "http://burlesquefm.ru:8000/radio",
  },
  {
    name: "Волшебный Шансон",
    url: "http://listen.myradio24.com:9000/8144",
  },
  {
    name: "Дисней радио",
    url: "http://disney2.streamr.ru:8060/disney",
  },
  {
    name: "Добрый настрой",
    url: "http://s3.radioheart.ru:8013/nonstop",
  },
  {
    name: "7",
    url: "http://91.219.74.220:8000/IvanovoFM.mp3",
  },
  {
    name: "Кабриолет",
    url: "http://setmedia.ru:8000/high3",
  },
  {
    name: "Мария ФМ",
    url: "http://mariafm.ru:8000/maria-fm-128.mp3",
  },
  {
    name: "Минир Live channel to telephone russian chat +18",
    url: "http://185.39.195.90:8000/minir",
  },
  {
    name: "Мир гармонии",
    url: "http://s1.radioheart.ru:8021/nonstop",
  },
  {
    name: "Наши Песни",
    url: "http://online.nashipesni.ru:8000/np-kras",
  },
  {
    name: "Пилот-FM",
    url: "http://online.pilotfm.ru:8000/pilot_aacplus?type=.flv",
  },
  {
    name: "Подмосковные вечера",
    url: "http://setmedia.ru:8000/high5",
  },
  {
    name: "Проводное радио 1Крым",
    url: "http://radiowired.1tvcrimea.ru:9001/stream_provod.mp3",
  },
  {
    name: "Радио За облаками - Курган 101.5 FM",
    url: "http://195.88.63.114:8000/zaoblakami",
  },
  {
    name: "Радио 2x2",
    url: "http://95.104.192.220:8001/radio2x2.ogg",
  },
  {
    name: "Радио FRMX",
    url: "http://front.kgts.ru:8000/live",
  },
  {
    name: "Радио LENA-FM 105.5 (Усть-Кут)",
    url: "http://radio.60500.ru:8000/lenafm128.ogg",
  },
  {
    name: "Радио АЛЬФА",
    url: "http://online.alfafm.ru:8000/alfa?type=.flv",
  },
  {
    name: "Радио Буу!",
    url: "http://buu.hostingradio.ru:8005/radio",
  },
  {
    name: "Радио Книга 105.0  MSK",
    url: "http://bookradio.hostingradio.ru:8069/fm",
  },
  {
    name: "Радио Ливны",
    url: "http://s1.radioheart.ru:8001/radiolivny",
  },
  {
    name: "Радио Меридиан",
    url: "http://stream.gtf.club:8030/stream",
  },
  {
    name: "Радио Море",
    url: "http://sea.1tvcrimea.ru:9003/stream_sea.mp3",
  },
  {
    name: "8FM)",
    url: "http://online.958fm.ru:8000/RADIO958FM",
  },
  {
    name: "Радио Олд-Хит",
    url: "http://radio.oldxit.ru:8000/radio",
  },
  {
    name: "Радио Радонеж",
    url: "http://icecast.radonezh.cdnvideo.ru:8000/rad128",
  },
  {
    name: "Радио Родных Дорог",
    url: "http://stream1.radiord.ru:8000/live96.mp3",
  },
  {
    name: "Радио СИ",
    url: "http://online.radioc.ru:8000/radioc_aacplus?type=.flv",
  },
  {
    name: "Радио Союз Книга Вслух",
    url: "http://soyuztop.ru:4000/radio",
  },
  {
    name: " Волгоград",
    url: "http://online.sputnikfm.ru:8000/sputnik_mp3",
  },
  {
    name: " Челябинская область)",
    url: "http://s02.radio-tochka.com:4530/radio",
  },
  {
    name: "Радио ТСЛ - Тёмная сторона Луны ( Dark side of the Moon )",
    url: "http://a5.radioheart.ru:8049/dmoon",
  },
  {
    name: "Радио Шансон Ижевск",
    url: "http://media.mediatime.ru:8051/Chanson",
  },
  {
    name: "Радио-Н",
    url: "http://online.radio-n.ru:8000/radio",
  },
  {
    name: "Радиола Екатеринбург",
    url: "http://online1.gkvr.ru:8000/radiola_eka_128.mp3",
  },
  {
    name: "Радиола Саратов",
    url: "http://online1.gkvr.ru:8000/radiola_srt_128.mp3",
  },
  {
    name: "Смоленская ВЕСНА fm",
    url: "http://91.203.176.214:8000/vesnafm",
  },
  {
    name: "Центр Ульяновск",
    url: "http://radio.mv.ru:8080/Radio_centr",
  },
  {
    name: "Экстрим",
    url: "http://listen.radioextreme.ru/stream1",
  },
  {
    name: " 107.4 FM",
    url: "http://online.arsenalfm.ru:8000/arsenal",
  },
  {
    name: "100.8 FM - lviv wave",
    url: "http://onair.lviv.fm:8000/lviv.fm",
  },
  {
    name: "Best FM Мариуполь 102.8 FM",
    url: "http://radio.bestfm.fm/bestfm_mp3",
  },
  {
    name: "Gikradio.com",
    url: "http://77.120.162.12:8000/live128",
  },
  {
    name: "JAM FM",
    url: "http://cast.radiogroup.com.ua:8000/jamfm",
  },
  {
    name: "Klassnoe radio 103.9 FM Славянск Донецк обл",
    url: "http://176.101.223.52:8000/klassnoe",
  },
  {
    name: "kometa.fm donetsk",
    url: "http://donetsk.kometa.fm:8000/kometa_donetsk_inet.ogg",
  },
  {
    name: "Kredens Cafe Radio",
    url: "http://stream.mjoy.ua:8000/kredens-cafe-radio",
  },
  {
    name: "MFM STATION FIRST INTERNATIONAL RADIO",
    url: "http://radio.mfm.ua:8080/online128",
  },
  {
    name: "MiX-FM",
    url: "http://vtsu.org.ua:8000/vtsu-dance",
  },
  {
    name: "Nikvesti.fm",
    url: "http://nikvesti.fm:8000/live",
  },
  {
    name: "Odessa-Mama",
    url: "http://85.238.103.118:8000/stream",
  },
  {
    name: "Old Fashioned Radio - Jazz Blues",
    url: "http://air.ofr.fm:8008/;stream.mp3",
  },
  {
    name: "Old Fashioned Radio - Radio Zemlya",
    url: "http://air.ofr.fm:8004/;stream.mp3",
  },
  {
    name: "Old Fashioned Radio - Rock",
    url: "http://air.ofr.fm:8012/;stream.mp3",
  },
  {
    name: "Old Fashioned Radio - Show Music",
    url: "http://91.239.232.234:8000/;stream.mp3",
  },
  {
    name: "Radio BumbleBee",
    url: "http://live.bumblebeefm.ru:8000/radio",
  },
  {
    name: "Radio Station 103.2 FM",
    url: "http://91.205.207.98:8081/acc.mp3",
  },
  {
    name: "Radio Zakarpattya FM Mukachevo101.9",
    url: "http://195.234.148.51:8000/;stream.mp3",
  },
  {
    name: "radio-beach",
    url: "http://listen2.myradio24.com:9000/1632",
  },
  {
    name: "Re: Радіо Країна",
    url: "http://185.65.245.34:8000/kiev",
  },
  {
    name: "UAFM",
    url: "http://live.uafm.org:9001/uafm",
  },
  {
    name: "VTSU-DANCE",
    url: "http://vtsu.org.ua:8000/vtsu-pop",
  },
  {
    name: "Yoga Radio",
    url: "http://play.yogaradio.org.ua:8000/YOGAradio",
  },
  {
    name: "Zakhidny Polus",
    url: "http://online.1043.com.ua:8000/1043fm",
  },
  {
    name: "Zloe Radio",
    url: "http://stream.zloeradio.net:7000/radio",
  },
  {
    name: "Авторадио",
    url: "http://cast.radiogroup.com.ua:8000/avtoradio",
  },
  {
    name: "Аристократы",
    url: "http://air.aristocrats.fm:8000/live2",
  },
  {
    name: "ГОЛОС СВОБОДИ",
    url: "http://holos.fm:8000/holos",
  },
  {
    name: "Еммануил-Светлое Радио",
    url: "http://online.svitle.org:6728/sre",
  },
  {
    name: "Є! UA",
    url: "http://live.eradio.ua/e-ua_hi",
  },
  {
    name: " ЛНР",
    url: "http://91.214.82.110:8002/online",
  },
  {
    name: "Країна ФМ - Дрімайко",
    url: "http://live.radioec.com.ua:8000/drimayko",
  },
  {
    name: "Країна ФМ - Лірика",
    url: "http://185.65.245.34:8000/lyrica",
  },
  {
    name: "Країна ФМ - Ритмотека",
    url: "http://live.radioec.com.ua:8000/ritmoteka",
  },
  {
    name: "Країна ФМ - Рок",
    url: "http://live.radioec.com.ua:8000/rock",
  },
  {
    name: "Одесса Мама",
    url: "http://online.odessa.fm:8000/stream",
  },
  {
    name: "Перец ФМ",
    url: "http://radio.urg.com.ua/radio-stilnoe",
  },
  {
    name: "Радио Пятница",
    url: "http://cast.radiogroup.com.ua:8000/radiopyatnica",
  },
  {
    name: "Радіо з Криївки +18",
    url: "http://stream.mjoy.ua:8000/radio-z-kryjivky",
  },
  {
    name: "РЕТРО FM",
    url: "http://cast.radiogroup.com.ua:8000/retro",
  },
  {
    name: "Сім'я і дім FM",
    url: "http://stream.simya.lutsk.ua:8000/sid_fm_96",
  },
  {
    name: "Сяйво",
    url: "http://stream.ntktv.ua:8000/syaivo.mp3",
  },
  {
    name: "ТАКТ",
    url: "http://radiotakt.com.ua:8000/takt.mp3?type=.flv",
  },
  {
    name: "Хiт FM",
    url: "http://195.95.206.17:8000/HitFM_bak",
  },
  {
    name: "A List 80s",
    url: "http://prmstrm.1.fm:8000/back280s",
  },
  {
    name: "Absolute 70's Pop Radio",
    url: "http://prmstrm.1.fm:8000/70s",
  },
  {
    name: "Absolute 90's Radio",
    url: "http://prmstrm.1.fm:8000/90s",
  },
  {
    name: "Absolute 90s Party Zone Radio",
    url: "http://prmstrm.1.fm:8000/partyzone90s",
  },
  {
    name: "Absolute Country Hits Radio",
    url: "http://prmstrm.1.fm:8000/acountry",
  },
  {
    name: "Absolute Pop Latino Radio",
    url: "http://prmstrm.1.fm:8000/latino",
  },
  {
    name: "Absolute TOP 40 Radio",
    url: "http://prmstrm.1.fm:8000/top40",
  },
  {
    name: "Absolute Trance (Euro) Radio",
    url: "http://prmstrm.1.fm:8000/trance",
  },
  {
    name: "Acappella Radio",
    url: "http://prmstrm.1.fm:8000/acpl",
  },
  {
    name: "Adore Jazz Radio",
    url: "http://prmstrm.1.fm:8000/ajazz",
  },
  {
    name: "Adult Urban Hits Choice Radio",
    url: "http://prmstrm.1.fm:8000/oldschool",
  },
  {
    name: "Afterbeat Electronica Radio",
    url: "http://prmstrm.1.fm:8000/electronica",
  },
  {
    name: "All Euro 80's Radio",
    url: "http://prmstrm.1.fm:8000/80s_90s",
  },
  {
    name: "All Times & Urban Gospel Radio",
    url: "http://prmstrm.1.fm:8000/gospel",
  },
  {
    name: "All Times Hits",
    url: "http://prmstrm.1.fm:8000/allmixedup",
  },
  {
    name: "Alternative Rock X Hits Radio",
    url: "http://prmstrm.1.fm:8000/x",
  },
  {
    name: "Always-Christmas Radio",
    url: "http://prmstrm.1.fm:8000/christmas",
  },
  {
    name: "Ambient Psychill",
    url: "http://prmstrm.1.fm:8000/ambientpsy",
  },
  {
    name: "America's Best Ballads Radio",
    url: "http://prmstrm.1.fm:8000/onelive",
  },
  {
    name: "America's Top 40 Ballads",
    url: "http://prmstrm.1.fm:8000/top40ballads",
  },
  {
    name: "Amsterdam Trance Radio",
    url: "http://prmstrm.1.fm:8000/atr",
  },
  {
    name: "Back To The 50's & 60's Radio",
    url: "http://prmstrm.1.fm:8000/60s_70s",
  },
  {
    name: "Bay Smooth Jazz Radio",
    url: "http://prmstrm.1.fm:8000/smoothjazz",
  },
  {
    name: "Blues Radio",
    url: "http://prmstrm.1.fm:8000/blues",
  },
  {
    name: "BOM Psytrance Radio",
    url: "http://prmstrm.1.fm:8000/psytrance",
  },
  {
    name: "Bombay Beats India Radio",
    url: "http://prmstrm.1.fm:8000/bombaybeats",
  },
  {
    name: "Bossa Nova Hits Radio",
    url: "http://prmstrm.1.fm:8000/bossanova",
  },
  {
    name: "Brazilian Birds Radio",
    url: "http://prmstrm.1.fm:8000/brazilianbirds",
  },
  {
    name: "Cafe Radio",
    url: "http://prmstrm.1.fm:8000/caferadio",
  },
  {
    name: "Chillout Lounge Radio",
    url: "http://prmstrm.1.fm:8000/chilloutlounge",
  },
  {
    name: "Circuit Pride Radio",
    url: "http://prmstrm.1.fm:8000/circuitpride",
  },
  {
    name: "Classic Country Radio",
    url: "http://prmstrm.1.fm:8000/ccountry",
  },
  {
    name: "Classic Rock Replay Radio",
    url: "http://prmstrm.1.fm:8000/crock",
  },
  {
    name: "Club 1 Radio",
    url: "http://prmstrm.1.fm:8000/club",
  },
  {
    name: "Costa Del Mar",
    url: "http://prmstrm.1.fm:8000/costadelmarchillout",
  },
  {
    name: "Country One Radio",
    url: "http://prmstrm.1.fm:8000/country",
  },
  {
    name: "Dance One Radio",
    url: "http://prmstrm.1.fm:8000/dance",
  },
  {
    name: "Deep House Radio",
    url: "http://prmstrm.1.fm:8000/deephouse",
  },
  {
    name: "Deep Techno & Deep House",
    url: "http://prmstrm.1.fm:8000/deeptech",
  },
  {
    name: "Destination: SPA Radio",
    url: "http://prmstrm.1.fm:8000/spa",
  },
  {
    name: "Disco Ball 70's-80's Radio",
    url: "http://prmstrm.1.fm:8000/disco",
  },
  {
    name: "Dubstep Forward Radio",
    url: "http://prmstrm.1.fm:8000/dubstep",
  },
  {
    name: "EDM",
    url: "http://prmstrm.1.fm:8000/edm",
  },
  {
    name: "Eternal Praise & Worship Radio",
    url: "http://prmstrm.1.fm:8000/praise",
  },
  {
    name: "Eurovision Radio",
    url: "http://prmstrm.1.fm:8000/eurovision",
  },
  {
    name: "Exitos del Ayer Radio",
    url: "http://prmstrm.1.fm:8000/spanisholdies",
  },
  {
    name: "Funky Express Radio",
    url: "http://prmstrm.1.fm:8000/funkyexpress",
  },
  {
    name: "Gorilla FM Radio",
    url: "http://prmstrm.1.fm:8000/gorillafm",
  },
  {
    name: "High Voltage Radio",
    url: "http://prmstrm.1.fm:8000/highvoltage",
  },
  {
    name: "Ibiza Chill Tropical",
    url: "http://prmstrm.1.fm:8000/ibizachill",
  },
  {
    name: "Italia On Air Radio",
    url: "http://prmstrm.1.fm:8000/italiaonair",
  },
  {
    name: "Jamz Radio",
    url: "http://prmstrm.1.fm:8000/jamz",
  },
  {
    name: "Kids FM Radio",
    url: "http://prmstrm.1.fm:8000/kidsfm",
  },
  {
    name: "Love Classics Radio",
    url: "http://prmstrm.1.fm:8000/loveclassics",
  },
  {
    name: "Magic 80 Radio",
    url: "http://prmstrm.1.fm:8000/magic80",
  },
  {
    name: "Movie Soundtracks Hits Radio",
    url: "http://prmstrm.1.fm:8000/moviesoundtracks",
  },
  {
    name: "MPB Hits Radio",
    url: "http://prmstrm.1.fm:8000/mpb",
  },
  {
    name: "Otto's Baroque Music Radio",
    url: "http://prmstrm.1.fm:8000/baroque",
  },
  {
    name: "Otto's Classical Music Radio",
    url: "http://prmstrm.1.fm:8000/classical",
  },
  {
    name: "Otto's Opera House Music Radio",
    url: "http://prmstrm.1.fm:8000/opera",
  },
  {
    name: "Polska FM Radio",
    url: "http://prmstrm.1.fm:8000/polskafm",
  },
  {
    name: "Radio Gaia",
    url: "http://prmstrm.1.fm:8000/radiogaia",
  },
  {
    name: "Reggaeton Caribbean Pop",
    url: "http://prmstrm.1.fm:8000/reggaeton",
  },
  {
    name: "ReggaeTrade Radio",
    url: "http://prmstrm.1.fm:8000/reggae",
  },
  {
    name: "Rock Classics Radio",
    url: "http://prmstrm.1.fm:8000/rockclassics",
  },
  {
    name: "Samba Hits Brazil Radio",
    url: "http://prmstrm.1.fm:8000/samba",
  },
  {
    name: "Samba Rock Radio",
    url: "http://prmstrm.1.fm:8000/sambarock",
  },
  {
    name: "Sax4Love",
    url: "http://prmstrm.1.fm:8000/sax4ever",
  },
  {
    name: "Sertaneja Hits Radio",
    url: "http://prmstrm.1.fm:8000/sertanejo",
  },
  {
    name: "Slow Jamz Radio",
    url: "http://prmstrm.1.fm:8000/slowjamz",
  },
  {
    name: "Top Fiesta Radio",
    url: "http://prmstrm.1.fm:8000/spanishparty",
  },
  {
    name: "Top Hits 2000",
    url: "http://prmstrm.1.fm:8000/hits2000",
  },
  {
    name: "Total Hits En Español Radio",
    url: "http://prmstrm.1.fm:8000/spanishtophits",
  },
  {
    name: "16Bit.FM-Cafe/Москва/128-MP3",
    url: "http://16bitfm.com:8000/cafe_mp3_128",
  },
  {
    name: "16Bit.FM-I.D.E.A./Москва/128-MP3",
    url: "http://16bitfm.com:8000/idea_mp3_128",
  },
  {
    name: "16Bit.FM-ProBeat/Москва/128-MP3",
    url: "http://16bitfm.com:8000/main_mp3_128",
  },
  {
    name: "161FM/Ростов-на-Дону/128-MP3",
    url: "http://stream.161fm.ru:8000/128",
  },
  {
    name: "Baby FM/Москва/128-MP3",
    url: "http://a5.radioheart.ru:8012/nonstop",
  },
  {
    name: "BSB Radio Station/Краснодар/96-MP3",
    url: "http://194.58.96.22:8000/radio",
  },
  {
    name: "ChilloutFM/Сургут/128-MP3",
    url: "http://chilloutfm.ru:8000/play",
  },
  {
    name: "Dipol FM/Тюмень/128-MP3",
    url: "http://icecast.sibinformburo.cdnvideo.ru:8000/dipolfm",
  },
  {
    name: "DLS FM/Десногорск/128-MP3",
    url: "http://dls-fm.ru:8000/dls",
  },
  {
    name: "DODO FM/Москва/128-MP3",
    url: "http://dodofm.ru:8000/radio",
  },

  {
    name: "EuropaRussia/Москва/128-MP3",
    url: "http://europarussia.ru:8000/live",
  },
  {
    name: "Fresh FM/Сосновый Бор/128-MP3",
    url: "http://a2.radioheart.ru:8007/live",
  },
  {
    name: "G-Drive Radio/Москва/128-MP3",
    url: "http://m4m128.hostingradio.ru:8074/m4m128.mp3",
  },
  {
    name: "Gardarica FM-Gold/Санкт-Петербург/128-MP3",
    url: "http://stream.gardaricafm.ru:8000/gold.mp3",
  },
  {
    name: "Graal Radio-Club/Москва/192-MP3",
    url: "http://graalradio.com:8123/club",
  },
  {
    name: "Graal Radio-Future/Москва/192-MP3",
    url: "http://graalradio.com:8123/future",
  },
  {
    name: "Graal Radio-Goodtimes/Москва/192-MP3",
    url: "http://graalradio.com:8123/goodtimes",
  },
  {
    name: "Graal Radio-Highway/Москва/192-MP3",
    url: "http://graalradio.com:8123/highway",
  },
  {
    name: "Graal Radio-Sensual/Москва/192-MP3",
    url: "http://graalradio.com:8123/sensual",
  },
  {
    name: "Graal Radio-Space/Москва/192-MP3",
    url: "http://graalradio.com:8123/space",
  },
  {
    name: "HR Radio/Москва/128-MP3",
    url: "http://hrradio.hostingradio.ru:8077/hrradio128.mp3",
  },
  {
    name: "InSTYLE Radio/Москва/256-MP3",
    url: "http://s02.radio-tochka.com:5060/radio",
  },
  {
    name: "Kamchatka Live-Chill/Петропавловск-Камчатский/192-MP3",
    url: "http://radio.kamchatkalive.ru:8100/chillout",
  },
  {
    name: "Kamchatka Live-Dance/Петропавловск-Камчатский/192-MP3",
    url: "http://radio.kamchatkalive.ru:8100/dance",
  },
  {
    name: "Kamchatka Live-Rock/Петропавловск-Камчатский/192-MP3",
    url: "http://radio.kamchatkalive.ru:8100/rock",
  },
  {
    name: "Kids Hits-Junior/Москва/128-MP3",
    url: "http://92.255.229.74:8000/kids-hits-junior",
  },
  {
    name: "Kids Hits/Москва/192-MP3",
    url: "http://92.255.229.74:8000/kidshits_mp3_192",
  },
  {
    name: "KUFM-Komplete Ultimate/Калуга/128-MP3",
    url: "http://85.21.240.53:8000/kufm",
  },
  {
    name: "mCm Radio/Иркутск/128-MP3",
    url: "http://91.227.68.150:10000/hit128",
  },
  {
    name: "MDS Play-МДС Музыка/Москва/128-MP3",
    url: "http://ice.planeset.ru:8000/mds.mp3",
  },
  {
    name: "MDS Play-Модель для сборки 2/Москва/128-MP3",
    url: "http://ice.planeset.ru:8000/mds_voice.mp3",
  },
  {
    name: "MDS Station-Модель для сборки/Москва/128-MP3",
    url: "http://mds-station.com:8000/mds",
  },
  {
    name: "Mix FM/Хабаровск/128-MP3",
    url: "http://radio.gubernia.com:8000/radio3",
  },
  {
    name: "Mix FM/Хабаровск/256-MP3",
    url: "http://radio.gubernia.com:8000/radio4",
  },
  {
    name: "Mixadance FM-Main/Москва/128-MP3",
    url: "https://stream.mixadance.fm/mixadance128",
  },
  {
    name: "Monte Carlo 106.7 FM/Находка/128-MP3",
    url: "http://178.33.138.231:8023/rmc-nhd",
  },
  {
    name: "Orgasma-Black/Калининград/128-MP3",
    url: "http://listen.orgasma.fm:8000/blackmp3",
  },
  {
    name: "Orgasma-Late/Калининград/128-MP3",
    url: "http://listen.orgasma.fm:8000/latemp3",
  },
  {
    name: "Orgasma-White/Калининград/128-MP3",
    url: "http://listen.orgasma.fm:8000/whitemp3",
  },
  {
    name: "PROMODJ.FM-186mph/Москва/128-MP3",
    url: "http://radio.promodj.com:8000/186mph",
  },
  {
    name: "PROMODJ.FM-300kmh/Москва/128-MP3",
    url: "http://radio.promodj.com:8000/300kmh",
  },
  {
    name: "PROMODJ.FM-Channel 5/Москва/128-MP3",
    url: "http://radio.promodj.com:8000/channel5",
  },
  {
    name: "PROMODJ.FM-Deep/Москва/128-MP3",
    url: "http://radio.promodj.com:8000/deep",
  },
  {
    name: "Radio 1743.ru/Оренбург/128-MP3",
    url: "http://dotru.trkeurasia.ru:8000/dotru128",
  },
  {
    name: "Radio Bob Jazz/Челябинск/128-MP3",
    url: "http://stream01.radiocon.ru:8000/bobjazz",
  },
  {
    name: "Radio Gora-ATD/Белгород/128-MP3",
    url: "http://listen.radiogora.ru:8000/atd128",
  },
  {
    name: "Radio Gora-Drive/Белгород/128-MP3",
    url: "http://listen.radiogora.ru:8000/drive128",
  },
  {
    name: "Radio Gora-Electro/Белгород/128-MP3",
    url: "http://listen.radiogora.ru:8000/electro128",
  },
  {
    name: "Radio Gora-Et Cetera/Белгород/128-MP3",
    url: "http://listen.radiogora.ru:8000/etc128",
  },
  {
    name: "Radio Gora-Freaky Funky/Белгород/320-MP3",
    url: "http://listen.radiogora.ru:8000/freakyfunky320",
  },
  {
    name: "Radio Gora-Groove Cafe/Белгород/320-MP3",
    url: "http://listen.radiogora.ru:8000/groovecafe320",
  },
  {
    name: "Radio Nevsky FM/Москва/128-MP3",
    url: "http://www.radionevskyfm.ru:8000/radio",
  },
  {
    name: "Radio Why Not/Кемерово/128-MP3",
    url: "http://176.197.160.234:8000/RWN",
  },
  {
    name: "Rock Arsenal/Екатеринбург/128-MP3",
    url: "http://online.rockarsenal.ru:8000/rockarsenal",
  },
  {
    name: "Rock FM-00/Москва/128-MP3",
    url: "http://jfm1.hostingradio.ru:14536/rock00.mp3",
  },
  {
    name: "Rock FM-70/Москва/128-MP3",
    url: "http://jfm1.hostingradio.ru:14536/rock70.mp3",
  },
  {
    name: "Rock FM-80/Москва/128-MP3",
    url: "http://jfm1.hostingradio.ru:14536/rock80.mp3",
  },
  {
    name: "Rock FM-90/Москва/128-MP3",
    url: "http://jfm1.hostingradio.ru:14536/rock90.mp3",
  },
  {
    name: "Rock FM-Heavy/Москва/128-MP3",
    url: "http://jfm1.hostingradio.ru:14536/metal.mp3",
  },
  {
    name: "Rock FM-Prog/Москва/128-MP3",
    url: "http://jfm1.hostingradio.ru:14536/prog.mp3",
  },
  {
    name: "Rock FM/Москва/256-MP3",
    url: "https://nashe1.hostingradio.ru:18000/rock-256",
  },
  {
    name: "Royal Radio-Club/Санкт-Петербург/128-MP3",
    url: "http://193.33.170.218:8000/RoyalClub",
  },
  {
    name: "Royal Radio-Deep/Санкт-Петербург/128-MP3",
    url: "http://185.39.195.90:8000/royal_deep",
  },
  {
    name: "Royal Radio-Drum/Санкт-Петербург/128-MP3",
    url: "http://193.33.170.218:8000/RoyalDrum",
  },
  {
    name: "Royal Radio-Lounge/Санкт-Петербург/128-MP3",
    url: "http://193.33.170.218:8000/RoyalLounge",
  },
  {
    name: "Royal Radio-Love/Санкт-Петербург/128-MP3",
    url: "http://193.33.170.218:8000/RoyaLove",
  },
  {
    name: "Royal Radio-Popsa/Санкт-Петербург/128-MP3",
    url: "http://193.33.170.218:8000/RoyalPopsa",
  },
  {
    name: "Royal Radio-Retro/Санкт-Петербург/128-MP3",
    url: "http://185.39.195.90:8000/nostalgia",
  },
  {
    name: "Royal Radio-Rock/Санкт-Петербург/128-MP3",
    url: "http://193.33.170.218:8000/RoyalRock",
  },
  {
    name: "Royal Radio-Trance/Санкт-Петербург/128-MP3",
    url: "http://193.33.170.218:8000/RoyalTrance",
  },
  {
    name: "Royal Radio-Trap/Санкт-Петербург/128-MP3",
    url: "http://193.33.170.218:8000/RoyalTrap",
  },
  {
    name: "Royal Radio 98.6 FM/Санкт-Петербург/128-MP3",
    url: "http://185.39.195.90:8000/royal_live",
  },
  {
    name: "Rupsy.ru-Chill-out/Москва/128-MP3",
    url: "http://chill-out.rupsy.ru:8000/chill",
  },
  {
    name: "Rupsy.ru-Dark Psy/Москва/128-MP3",
    url: "http://darkpsy.rupsy.ru:8000/darkpsy",
  },
  {
    name: "Rupsy.ru-Full-on/Москва/128-MP3",
    url: "http://full-on.rupsy.ru:8000/full-on",
  },
  {
    name: "Rupsy.ru-Goa trance/Москва/128-MP3",
    url: "http://goa.rupsy.ru:8000/goa",
  },
  {
    name: "Rupsy.ru-Psychedelic progressive/Москва/128-MP3",
    url: "http://psyprog.rupsy.ru:8000/psyprog",
  },
  {
    name: "Rupsy.ru-Psychedelic trance/Москва/128-MP3",
    url: "http://psy.rupsy.ru:8000/psy",
  },
  {
    name: "Rupsy.ru-Psytrance mixes/Москва/128-MP3",
    url: "http://mix.rupsy.ru:8000/mix",
  },
  {
    name: "Seven Skies-Radio 1/Магнитогорск/256-MP3",
    url: "http://radio.seven.eu.com:8000/stream1",
  },
  {
    name: "Seven Skies-Radio 2/Магнитогорск/256-MP3",
    url: "http://radio.seven.eu.com:8000/stream2",
  },
  {
    name: "Sochi Lounge Neon/Сочи/128-MP3",
    url: "http://listen1.myradio24.com:9000/5790",
  },
  {
    name: "Soulplay Radio/Москва/128-MP3",
    url: "http://s1.radioheart.ru:8018/live",
  },
  {
    name: "True Colors Radio/Москва/192-MP3",
    url: "http://eu2.radioboss.fm:8232/TrueColorsRadio",
  },
  {
    name: "Turbo FM/Москва/128-MP3",
    url: "http://m2m128.hostingradio.ru:8074/m2m128.mp3",
  },
  {
    name: "Ultima.FM/Орел/192-MP3",
    url: "http://sc.ultima.fm:8001/stream/1/stream.mp3",
  },
  {
    name: "Ural Sound FM/Пермь/128-MP3",
    url: "http://188.17.157.29:8000/uralsoundfm",
  },
  {
    name: "Yum FM/Москва/128-MP3",
    url: "http://yumfm.hostingradio.ru:8020/yumfm128.mp3",
  },
  {
    name: "Zaycev.fm-K-Pop/Москва/128-MP3",
    url: "https://zaycevfm.cdnvideo.ru/ZaycevFM_kpop_128.mp3",
  },
  {
    name: "Zaycev.fm-Зайчата/Москва/128-MP3",
    url: "https://zaycevfm.cdnvideo.ru/ZaycevFM_zaychata_128.mp3",
  },
  {
    name: "Бизнес FM/Москва/128-MP3",
    url: "http://bfm.hostingradio.ru:8004/fm",
  },
  {
    name: "БИМ-радио Казань/Казань/128-MP3",
    url: "http://av.bimradio.ru:8066/bim_mp3_128k",
  },
  {
    name: "Большое Радио/Мурманск/128-MP3",
    url: "http://listen.myradio24.com:9000/8286",
  },
  {
    name: "Визави FM/Невинномысск/192-MP3",
    url: "http://94.250.249.126:8000/radio",
  },
  {
    name: "Владивосток FM/Владивосток/128-MP3",
    url: "http://vladfm.com:8000/vfm",
  },
  {
    name: "Волгоград FM/Волгоград/128-MP3",
    url: "http://online.volgogradfm.ru:8000/vfm",
  },
  {
    name: "Время Звучать!/Самара/128-MP3",
    url: "http://vzradio.ru:8000/onair",
  },
  {
    name: "Время Звучать!/Саратов/128-MP3",
    url: "http://vzradio.ru:8000/saratov",
  },
  {
    name: "ВЭБ Радио/Москва/128-MP3",
    url: "http://m5m128.hostingradio.ru:8074/m5m128.mp3",
  },
  {
    name: "Говорит Майкоп/Майкоп/128-MP3",
    url: "http://voicemaikop.hostingradio.ru:8003/voicemaikop128.mp3",
  },
  {
    name: "Говорит Москва/Москва/96-MP3",
    url: "http://video.govoritmoskva.ru:8000/rufm.mp3",
  },
  {
    name: "Город FM/Екатеринбург/128-MP3",
    url: "http://www.gorodfm.ru:8000/gorodfm",
  },
  {
    name: "Городская Волна/Новосибирск/128-MP3",
    url: "http://online.gorvolna.ru:8000/gorvolna",
  },
  {
    name: "Донское Радио/Таганрог/64-MP3",
    url: "http://106-3.tagan.ru:8000/DRadio64",
  },
  {
    name: "Донское Радио/Таганрог/128-MP3",
    url: "http://106-3.tagan.ru:8000/DRadio128",
  },
  {
    name: "Дорожное Радио/Санкт-Петербург/256-MP3",
    url: "http://dorognoe.hostingradio.ru:8000/radio",
  },
  {
    name: "За облаками/Курган/128-MP3",
    url: "http://195.88.63.114:8000/zaoblakami",
  },
  {
    name: "Интерволна-Next/Челябинск/128-MP3",
    url: "http://online.intervolna.ru:8001/live",
  },
  {
    name: "Интерволна/Челябинск/128-MP3",
    url: "http://online.intervolna.ru:8001/radio128",
  },
  {
    name: "Интерволна/Челябинск/192-MP3",
    url: "http://online.intervolna.ru:8001/radio192",
  },
  {
    name: "Интерра FM/Первоуральск/128-MP3",
    url: "http://ice.interra.fm:8000/barix",
  },
  {
    name: "Кавказ Хит/Черкесск/96-MP3",
    url: "http://kavkazhit.hostingradio.ru:8017/kavkazhit96.mp3",
  },
  {
    name: "Кингисепп Сегодня/Кингисепп/128-MP3",
    url: "http://radiokingisepp.ru:8000/radio",
  },
  {
    name: "Классное Радио/Москва/128-MP3",
    url: "http://schoolradio.hostingradio.ru:8026/schoolradio128.mp3",
  },
  {
    name: "Компот FM/Москва/128-MP3",
    url: "http://s4.radioheart.ru:8023/RH420",
  },
  {
    name: "Конаково FM/Конаково/256-MP3",
    url: "http://radio.konakovofm.ru:8000/live",
  },
  {
    name: "Красноярск FM/Красноярск/128-MP3",
    url: "http://online.krasnoyarskfm.ru:8000/krasnoyarskfm_mp3",
  },
  {
    name: "Кунел Радиосы/Набережные Челны/128-MP3",
    url: "http://live.kunelradio.ru:8000/128.mp3",
  },
  {
    name: "Лена FM/Усть-Кут/128-MP3",
    url: "http://radio.60500.ru:8000/lenafm128.mp3",
  },
  {
    name: "Мария FM/Киров/128-MP3",
    url: "http://mariafm.ru:8000/maria-fm-128.mp3",
  },
  {
    name: "Мария FM/Киров/192-MP3",
    url: "http://mariafm.ru:8000/maria-fm.mp3",
  },
  {
    name: "Маруся ФМ/Белгород/192-MP3",
    url: "http://radio-holding.ru:9000/marusya_default",
  },
  {
    name: "Модное Радио/Санкт-Петербург/128-MP3",
    url: "http://cast.modnoeradio.ru:8000/mp128",
  },
  {
    name: "Моя Удмуртия/Ижевск/128-MP3",
    url: "http://radio.myudm.ru:10010/efir",
  },
  {
    name: "Наше 2.0/Москва/256-MP3",
    url: "https://nashe1.hostingradio.ru:18000/nashe20-256",
  },
  {
    name: "Наше Радио-Классик рок/Москва/128-MP3",
    url: "https://nashe1.hostingradio.ru:18000/nasheclassic.mp3",
  },
  {
    name: "Наше Радио-Панки хой!/Москва/128-MP3",
    url: "https://nashe1.hostingradio.ru:18000/nashepunks.mp3",
  },
  {
    name: "Наше Радио-Щас спою/Москва/128-MP3",
    url: "https://nashe1.hostingradio.ru:18000/nashesongs.mp3",
  },
  {
    name: "Наше Радио/Москва/256-MP3",
    url: "https://nashe1.hostingradio.ru:18000/nashe-256",
  },
  {
    name: "Нефтерадио/Омск/128-MP3",
    url: "http://m10m128.hostingradio.ru:8074/m10m128.mp3",
  },
  {
    name: "Первое Интернет-Радио/Ростов-на-Дону/128-MP3",
    url: "http://live.pervoeradio.net:7000/live128.mp3",
  },
  {
    name: "Первое Интернет-Радио/Ростов-на-Дону/256-MP3",
    url: "http://live.pervoeradio.net:7000/live256.mp3",
  },
  {
    name: "Первое Сетевое/Липецк/128-MP3",
    url: "http://streamer.radiovseti.ru:8000/128",
  },
  {
    name: "Первое Сетевое/Липецк/192-MP3",
    url: "http://streamer.radiovseti.ru:8000/192",
  },
  {
    name: "Пилот FM-Dance/Екатеринбург/128-MP3",
    url: "http://online.pilotfm.ru:8000/pilot_dance_mp3",
  },
  {
    name: "Пилот FM-Lounge/Екатеринбург/128-MP3",
    url: "http://online.pilotfm.ru:8000/pilot_lounge_mp3",
  },
  {
    name: "Пилот FM-Secret/Екатеринбург/128-MP3",
    url: "http://online.pilotfm.ru:8000/pilot_secret_mp3",
  },
  {
    name: "Приморская Волна/Уссурийск/128-MP3",
    url: "http://31.31.192.99:8000/primvolna-ussuriysk",
  },
  {
    name: "Радио-3/Омск/128-MP3",
    url: "http://81.23.194.18:8010/radio3.mp3",
  },
  {
    name: "Радио 1 (РТВ-Подмосковье)/Москва/128-MP3",
    url: "http://cdn.radio1.news:8000/rtvp_mp3",
  },
  {
    name: "Радио 10/Петрозаводск/128-MP3",
    url: "http://ic.radio10.live/stream.mp3",
  },
  {
    name: "Радио 54/Новосибирск/128-MP3",
    url: "http://91.202.68.50:8000/;stream.mp3",
  },
  {
    name: "Радио 99.1 FM/Красноярск/128-MP3",
    url: "http://online.99-1.ru:8000/99i1_mp3",
  },
  {
    name: "Радио Best/Москва/256-MP3",
    url: "https://nashe1.hostingradio.ru:18000/best-256",
  },
  {
    name: "Радио Disney/Москва/64-MP3",
    url: "http://disney2.streamr.ru:8060/disney64",
  },
  {
    name: "Радио Disney/Москва/128-MP3",
    url: "http://disney2.streamr.ru:8060/disney",
  },
  {
    name: "Радио Jazz-Classic/Москва/128-MP3",
    url: "http://jfm1.hostingradio.ru:14536/ijstream.mp3",
  },
  {
    name: "Радио Jazz-Jazz Legends/Москва/128-MP3",
    url: "http://jfm1.hostingradio.ru:14536/jlstream.mp3",
  },
  {
    name: "Радио Jazz-Smooth Jazz/Москва/128-MP3",
    url: "http://jfm1.hostingradio.ru:14536/sjstream.mp3",
  },
  {
    name: "Радио Ultra/Москва/256-MP3",
    url: "https://nashe1.hostingradio.ru:18000/ultra-256",
  },
  {
    name: "Радио VBC/Владивосток/256-MP3",
    url: "http://air.radiovbc.ru:8000/Radio256",
  },
  {
    name: "Радио Адам/Ижевск/64-MP3",
    url: "http://91.226.107.50:8001/adam/64",
  },
  {
    name: "Радио Адам/Ижевск/128-MP3",
    url: "http://91.226.107.50:8001/adam/128",
  },
  {
    name: "Радио Альфа/Пермь/128-MP3",
    url: "http://online.alfafm.ru:8000/alfa_mp3",
  },
  {
    name: "Радио Арис/Кумертау/256-MP3",
    url: "http://195.191.78.200:8080/mp",
  },
  {
    name: "Радио Балтик Плюс/Калининград/128-MP3",
    url: "http://bp.koenig.ru:8000/Baltic_Plus_mp3_128.mp3",
  },
  {
    name: "Радио Бесконечность/Темрюк/128-MP3",
    url: "http://s1.radioheart.ru:8001/radiotemryuk_128",
  },
  {
    name: "Радио Благовестие/Воронеж/128-MP3",
    url: "http://live.borneo.ru:8888/bv128",
  },
  {
    name: "Радио Борнео/Воронеж/128-MP3",
    url: "http://live.borneo.ru:8888/128",
  },
  {
    name: "Радио Буу/Москва/128-MP3",
    url: "http://buu.hostingradio.ru:8005/radio",
  },
  {
    name: "Радио Вера-Вера и время/Москва/128-MP3",
    url: "http://radiovera.hostingradio.ru:8007/radioveragorod128.mp3",
  },
  {
    name: "Радио Вера-Классик/Москва/128-MP3",
    url: "http://radiovera.hostingradio.ru:8007/radioverausadba128.mp3",
  },
  {
    name: "Радио Вера-Луг Духовный/Москва/128-MP3",
    url: "http://radiovera.hostingradio.ru:8007/radioveramolitva128.mp3",
  },
  {
    name: "Радио Вера-О людях и смыслах/Москва/128-MP3",
    url: "http://radiovera.hostingradio.ru:8007/radioverasvetliyvecher128.mp3",
  },
  {
    name: "Радио Вера/Москва/128-MP3",
    url: "http://radiovera.hostingradio.ru:8007/radiovera_128",
  },
  {
    name: "Радио Вилган/Жирновск/192-MP3",
    url: "http://194.58.90.144:8025/xstream",
  },
  {
    name: "Радио Гамаюн/Москва/128-MP3",
    url: "http://gamaun.online:8010/radio",
  },
  {
    name: "Радио Губерния/Воронеж/128-MP3",
    url: "http://www.gubernia-media.ru:8000/gubernia",
  },
  {
    name: "Радио Звезда/Москва/96-MP3",
    url: "http://89.208.99.16:8088/zvezda_96",
  },
  {
    name: "Радио Иваново/Иваново/128-MP3",
    url: "http://91.219.74.220:8000/IvanovoFM.mp3",
  },
  {
    name: "Радио Искатель/Москва/128-MP3",
    url: "http://iskatel.hostingradio.ru:8015/iskatel-128.mp3",
  },
  {
    name: "Радио Кавказа-Аварское радио/Махачкала/128-MP3",
    url: "http://radio05.ru:8000/avarskoe_radio_128",
  },
  {
    name: "Радио Кавказа-Агульское радио/Махачкала/128-MP3",
    url: "http://radio05.ru:8000/agulskoe_radio_128",
  },
  {
    name: "Радио Кавказа-Азербайджанское радио/Махачкала/128-MP3",
    url: "http://radio05.ru:8000/azerbaydzhanskoe_radio_128",
  },
  {
    name: "Радио Кавказа-Даргинское радио/Махачкала/128-MP3",
    url: "http://radio05.ru:8000/darginskoe_radio_128",
  },
  {
    name: "Радио Кавказа-Кумыкское радио/Махачкала/128-MP3",
    url: "http://radio05.ru:8000/kumykskoe_radio_128",
  },
  {
    name: "Радио Кавказа-Лакское радио/Махачкала/128-MP3",
    url: "http://radio05.ru:8000/lakskoe_radio_128",
  },
  {
    name: "Радио Кавказа-Лезгинское Радио/Махачкала/128-MP3",
    url: "http://radio05.ru:8000/lezginskoe_radio_128",
  },
  {
    name: "Радио Кавказа-Чеченское радио/Махачкала/128-MP3",
    url: "http://radio05.ru:8000/chechenskoe_radio_128",
  },
  {
    name: "Радио Книга Вслух/Москва/128-MP3",
    url: "http://s02.soyuztop.ru:4000/radio",
  },
  {
    name: "Радио Книга/Москва/256-MP3",
    url: "http://bookradio.hostingradio.ru:8069/fm",
  },
  {
    name: "Радио Континенталь/Челябинск/128-MP3",
    url: "http://stream01.radiocon.ru:8000/live",
  },
  {
    name: "Радио Крым.Точка/Симферополь/128-MP3",
    url: "http://radiowired.1tvcrimea.ru:9001/stream_provod.mp3",
  },
  {
    name: "Радио Крым/Симферополь/128-MP3",
    url: "http://fm.1tvcrimea.ru:8000/stream.mp3",
  },
  {
    name: "Радио Курай/Казань/128-MP3",
    url: "http://av.bimradio.ru:8066/kurai_mp3",
  },
  {
    name: "Радио Ливны/Ливны/128-MP3",
    url: "http://s1.radioheart.ru:8001/radiolivny",
  },
  {
    name: "Радио Мегаполис/Самара/128-MP3",
    url: "http://online.radio-megapolis.ru:8000/megapolis_mp3",
  },
  {
    name: "Радио Мелодия/Воронеж/128-MP3",
    url: "http://icecast.mediaalliance.cdnvideo.ru/mediaalliance",
  },
  {
    name: "Радио Мелодия/Санкт-Петербург/128-MP3",
    url: "http://stream128.melodiafm.spb.ru:8000/melodia128",
  },
  {
    name: "Радио Микс/Луга/128-MP3",
    url: "http://media.luga.ru:8002/live",
  },
  {
    name: "Радио Мир/Москва/128-MP3",
    url: "http://icecast.mirtv.cdnvideo.ru:8000/radio_mir128",
  },
  {
    name: "Радио Мира Белогорья/Белгород/320-MP3",
    url: "http://mirbelogorya.ru:8008/nonstop2",
  },
  {
    name: "Радио Море/Симферополь/128-MP3",
    url: "http://sea.1tvcrimea.ru:9003/stream_sea.mp3",
  },
  {
    name: "Радио Нестандарт/Москва/128-MP3",
    url: "http://listen.radionestandart.ru:8200/128.mp3",
  },
  {
    name: "Радио Олимп/Челябинск/128-MP3",
    url: "http://online.olimpfm.ru:8000/olimp_mp3",
  },
  {
    name: "Радио Подсолнух/Кореновск/128-MP3",
    url: "http://live.podsolnuh.media:8000/radio",
  },
  {
    name: "Радио Прокопьевск/Прокопьевск/192-MP3",
    url: "http://radioserver.27trk.ru:8000/prokopievsk.mp3",
  },
  {
    name: "Радио Радио/Нижний Тагил/128-MP3",
    url: "http://play.radioradio.ru/tag",
  },
  {
    name: "Радио Ракета/Омск/128-MP3",
    url: "http://a6.radioheart.ru:8017/nonstop",
  },
  {
    name: "Радио Родных Дорог/Чебоксары/96-MP3",
    url: "http://stream1.radiord.ru:8000/live96.mp3",
  },
  {
    name: "Радио Русь/Белгород/192-MP3",
    url: "http://radio-holding.ru:9000/rus",
  },
  {
    name: "Радио Самара Максимум/Самара/128-MP3",
    url: "http://85.236.172.22:8000/maximum",
  },
  {
    name: "Радио СИ/Екатеринбург/128-MP3",
    url: "http://online.radioc.ru:8000/radioc",
  },
  {
    name: "Радио Сибирь 102.6 FM/Чита/192-MP3",
    url: "http://185.108.196.182:8090/HQ",
  },
  {
    name: "Радио Сибирь 106.5 FM/Улан-Удэ/128-MP3",
    url: "http://92.124.196.44:8000/radiosibiruu",
  },
  {
    name: "Радио Сигма/Новый Уренгой/192-MP3",
    url: "http://195.191.130.125:8000/sigma",
  },
  {
    name: "Радио Сити/Тюмень/128-MP3",
    url: "http://online.100i6fm.ru:8000/city_mp3",
  },
  {
    name: "Радио Спутник на 107 FM/Екатеринбург/128-MP3",
    url: "http://online.sputnik107.ru:8000/sputnik107",
  },
  {
    name: "Радио Спутник/Волгоград/128-MP3",
    url: "http://online.sputnikfm.ru:8000/sputnik_mp3",
  },
  {
    name: "Радио Трасса/Благовещенск/128-MP3",
    url: "http://c2.radioboss.fm:8082/autodj",
  },
  {
    name: "Радио Фантастики/Москва/96-MP3",
    url: "http://fantasyradioru.no-ip.biz:8002/live",
  },
  {
    name: "Радио Хит/Орск/128-MP3",
    url: "http://hit.trkeurasia.ru:8000/hit128",
  },
  {
    name: "Радио Хорошего Настроения/Хабаровск/128-MP3",
    url: "http://188.93.129.110:8000/fm1018",
  },
  {
    name: "Радио Шория/Таштагол/128-MP3",
    url: "http://193.254.227.55:8000/Radio-Inet",
  },
  {
    name: "Радио Экспресс/Орел/128-MP3",
    url: "http://159.253.18.97:8000/128kbit.mp3",
  },
  {
    name: "Радио Югра/Ханты-Мансийск/128-MP3",
    url: "http://ugra.cdnradio.ru/radiougra",
  },
  {
    name: "Радиола 106.2 FM/Екатеринбург/128-MP3",
    url: "http://online1.gkvr.ru:8000/radiola_eka_128.mp3",
  },
  {
    name: "Радонеж/Москва/32-MP3",
    url: "http://icecast.radonezh.cdnvideo.ru:8000/rad",
  },
  {
    name: "Раменское Радио/Раменское/128-MP3",
    url: "http://radio.ramns.ru:8000/static",
  },
  {
    name: "Родное Радио/Заречный/160-MP3",
    url: "http://85.234.36.51:8000/radio",
  },
  {
    name: "Роксана Радиосы/Уфа/128-MP3",
    url: "http://listen1.myradio24.com:9000/2761",
  },
  {
    name: "Русское FM/Москва/128-MP3",
    url: "http://radio.russkoe.fm:8000/russkoefm_mp3",
  },
  {
    name: "Соль FM/Соликамск/128-MP3",
    url: "http://solfm.ru:8000/online128",
  },
  {
    name: "Старт FM/Саранск/128-MP3",
    url: "http://85.95.185.19:8000/live",
  },
  {
    name: "СТВ Радио/Якутск/128-MP3",
    url: "http://stv-radio.ru:8000/STV-Radio128k",
  },
  {
    name: "Студенческое Радио P.FM/Санкт-Петербург/192-MP3",
    url: "http://radio.spbstu.ru:8000/Radio_Polytech_192",
  },
  {
    name: "Тăван Радио/Чебоксары/128-MP3",
    url: "http://icecast.ntrk21.ru:8000/tavan",
  },
  {
    name: "Умное Радио/Саров/128-MP3",
    url: "http://radio.sarov.info:8010/clever-radio",
  },
  {
    name: "Хакасия FM/Абакан/128-MP3",
    url: "http://194.28.241.173:8000/khs.mp3",
  },
  {
    name: "Чайхона Family Radio/Москва/128-MP3",
    url: "http://m11m128.hostingradio.ru:8074/m11m128.mp3",
  },
  {
    name: "Шансон Романтический/Москва/128-MP3",
    url: "http://chanson.hostingradio.ru:8041/chanson-romantic128.mp3",
  },
  {
    name: "ЭкоРадио/Нижний Тагил/128-MP3",
    url: "http://109.198.108.42:8000/;stream/1",
  },
  {
    name: "World Music - Country",
    url:
      "http://101.ru/api/channel/getServers/78/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "World Music - France",
    url:
      "http://101.ru/api/channel/getServers/68/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "World Music - Italia",
    url:
      "http://101.ru/api/channel/getServers/65/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "World Music - Reggae",
    url:
      "http://101.ru/api/channel/getServers/88/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "World Music - Армения",
    url:
      "http://101.ru/api/channel/getServers/60/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "World Music - Архив Варшавского Договора",
    url:
      "http://101.ru/api/channel/getServers/177/channel/MP3/128/dataFormat/mobile",
  },
  {
    name: "World Music - Кавказ Hits",
    url:
      "http://101.ru/api/channel/getServers/39/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "World Music - Музыка Востока",
    url:
      "http://101.ru/api/channel/getServers/67/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "World Music - Немецкая Музыка",
    url:
      "http://101.ru/api/channel/getServers/324/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "World Music - Русское Регги",
    url:
      "http://101.ru/api/channel/getServers/44/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "World Music - Татарская Народная Музыка",
    url:
      "http://101.ru/api/channel/getServers/262/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "World Music - Татарская Поп-музыка",
    url:
      "http://101.ru/api/channel/getServers/246/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "World Music - Украина",
    url:
      "http://101.ru/api/channel/getServers/66/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "World Music - Французский Шансон",
    url:
      "http://101.ru/api/channel/getServers/146/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "World Music - Цыганская Музыка",
    url:
      "http://101.ru/api/channel/getServers/61/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "World Music - Японская Музыка",
    url:
      "http://101.ru/api/channel/getServers/62/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Без группы - Авторадио - Italo Disco",
    url:
      "http://101.ru/api/channel/getServers/291/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Без группы - Авторадио - Дискотека 80-х",
    url:
      "http://101.ru/api/channel/getServers/288/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Без группы - Авторадио - Дискотека 90-х",
    url:
      "http://101.ru/api/channel/getServers/290/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Без группы - Авторадио - Дискотека СССР",
    url:
      "http://101.ru/api/channel/getServers/292/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Без группы - Авторадио - Музыка Авторадио",
    url:
      "http://101.ru/api/channel/getServers/289/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Без группы - Авторадио - Мурзилки Int.",
    url:
      "http://101.ru/api/channel/getServers/302/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Детская - Григорий Гладков",
    url:
      "http://101.ru/api/channel/getServers/94/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Детская - Детские Песни",
    url:
      "http://101.ru/api/channel/getServers/93/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Детская - Детские Сказки",
    url:
      "http://101.ru/api/channel/getServers/222/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Детская - Колыбельная",
    url:
      "http://101.ru/api/channel/getServers/95/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Джаз / Блюз - Blues",
    url:
      "http://101.ru/api/channel/getServers/76/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Джаз / Блюз - Funk & Soul",
    url:
      "http://101.ru/api/channel/getServers/84/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Джаз / Блюз - Jazz",
    url:
      "http://101.ru/api/channel/getServers/85/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Джаз / Блюз - Smooth Jazz",
    url:
      "http://101.ru/api/channel/getServers/31/channel/MP3/128/dataFormat/mobile",
  },
  {
    name: "Джаз / Блюз - Swing",
    url:
      "http://101.ru/api/channel/getServers/90/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Золотая Коллекция - ABBA",
    url:
      "http://101.ru/api/channel/getServers/104/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Золотая Коллекция - Adriano Celentano",
    url:
      "http://101.ru/api/channel/getServers/277/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Золотая Коллекция - Boney M.",
    url:
      "http://101.ru/api/channel/getServers/114/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Золотая Коллекция - Deep Purple",
    url:
      "http://101.ru/api/channel/getServers/125/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Золотая Коллекция - Depeche Mode",
    url:
      "http://101.ru/api/channel/getServers/105/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Золотая Коллекция - Elton John",
    url:
      "http://101.ru/api/channel/getServers/142/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Золотая Коллекция - Elvis Presley",
    url:
      "http://101.ru/api/channel/getServers/111/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Золотая Коллекция - Enigma",
    url:
      "http://101.ru/api/channel/getServers/175/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Золотая Коллекция - Linkin Park",
    url:
      "http://101.ru/api/channel/getServers/149/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Золотая Коллекция - Madonna",
    url:
      "http://101.ru/api/channel/getServers/128/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Золотая Коллекция - Metallica",
    url:
      "http://101.ru/api/channel/getServers/123/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Золотая Коллекция - Michael Jackson",
    url:
      "http://101.ru/api/channel/getServers/52/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Золотая Коллекция - Modern Talking",
    url:
      "http://101.ru/api/channel/getServers/115/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Золотая Коллекция - Mylene Farmer",
    url:
      "http://101.ru/api/channel/getServers/166/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Золотая Коллекция - Pink Floyd",
    url:
      "http://101.ru/api/channel/getServers/53/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Золотая Коллекция - Prince",
    url:
      "http://101.ru/api/channel/getServers/282/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Золотая Коллекция - Queen",
    url:
      "http://101.ru/api/channel/getServers/54/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Золотая Коллекция - Robbie Williams",
    url:
      "http://101.ru/api/channel/getServers/138/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Золотая Коллекция - Sandra",
    url:
      "http://101.ru/api/channel/getServers/179/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Золотая Коллекция - Scorpions",
    url:
      "http://101.ru/api/channel/getServers/113/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Золотая Коллекция - The Beatles",
    url:
      "http://101.ru/api/channel/getServers/55/channel/MP3/128/dataFormat/mobile",
  },
  {
    name: "Золотая Коллекция - The Prodigy",
    url:
      "http://101.ru/api/channel/getServers/306/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Золотая Коллекция - The Rolling Stones",
    url:
      "http://101.ru/api/channel/getServers/117/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Золотая Коллекция - U2",
    url:
      "http://101.ru/api/channel/getServers/109/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Золотая Коллекция - Агата Кристи",
    url:
      "http://101.ru/api/channel/getServers/139/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Золотая Коллекция - Александр Розенбаум",
    url:
      "http://101.ru/api/channel/getServers/153/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Золотая Коллекция - Алиса",
    url:
      "http://101.ru/api/channel/getServers/137/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Золотая Коллекция - Алла Пугачёва",
    url:
      "http://101.ru/api/channel/getServers/56/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Золотая Коллекция - Ария",
    url:
      "http://101.ru/api/channel/getServers/118/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Золотая Коллекция - БГ & Аквариум",
    url:
      "http://101.ru/api/channel/getServers/57/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Золотая Коллекция - БИ-2",
    url:
      "http://101.ru/api/channel/getServers/135/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Золотая Коллекция - Виктор Цой и группа «КИНО»",
    url:
      "http://101.ru/api/channel/getServers/103/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Золотая Коллекция - Высоцкий",
    url:
      "http://101.ru/api/channel/getServers/58/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Золотая Коллекция - ДДТ",
    url:
      "http://101.ru/api/channel/getServers/112/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Золотая Коллекция - Елена Ваенга",
    url:
      "http://101.ru/api/channel/getServers/171/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Золотая Коллекция - Каста",
    url:
      "http://101.ru/api/channel/getServers/121/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Золотая Коллекция - Король и Шут",
    url:
      "http://101.ru/api/channel/getServers/191/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Золотая Коллекция - Ласковый Май",
    url:
      "http://101.ru/api/channel/getServers/119/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Золотая Коллекция - Любэ",
    url:
      "http://101.ru/api/channel/getServers/158/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Золотая Коллекция - Машина Времени",
    url:
      "http://101.ru/api/channel/getServers/59/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Золотая Коллекция - Михаил Круг",
    url:
      "http://101.ru/api/channel/getServers/110/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Золотая Коллекция - Муслим Магомаев",
    url:
      "http://101.ru/api/channel/getServers/156/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Золотая Коллекция - Наутилус Помпилиус",
    url:
      "http://101.ru/api/channel/getServers/126/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Золотая Коллекция - Парк Горького",
    url:
      "http://101.ru/api/channel/getServers/182/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Золотая Коллекция - Пикник",
    url:
      "http://101.ru/api/channel/getServers/157/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Золотая Коллекция - Руки Вверх!",
    url:
      "http://101.ru/api/channel/getServers/163/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Золотая Коллекция - Сплин",
    url:
      "http://101.ru/api/channel/getServers/129/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Золотая Коллекция - Стас Михайлов",
    url:
      "http://101.ru/api/channel/getServers/154/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Золотая Коллекция - Филипп Киркоров",
    url:
      "http://101.ru/api/channel/getServers/116/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Золотая Коллекция - Чайф",
    url:
      "http://101.ru/api/channel/getServers/106/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Золотая Коллекция - Чиж & Co",
    url:
      "http://101.ru/api/channel/getServers/221/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Каналы Relax FM - Relax Gold",
    url:
      "http://101.ru/api/channel/getServers/266/channel/MP3/128/dataFormat/mobile",
  },
  {
    name: "Каналы Relax FM - Relax Jazz",
    url:
      "http://101.ru/api/channel/getServers/264/channel/MP3/128/dataFormat/mobile",
  },
  {
    name: "Каналы Relax FM - Relax Latino",
    url:
      "http://101.ru/api/channel/getServers/265/channel/MP3/128/dataFormat/mobile",
  },
  {
    name: "Каналы Relax FM - Relax Life",
    url:
      "http://101.ru/api/channel/getServers/267/channel/MP3/128/dataFormat/mobile",
  },
  {
    name: "Каналы Relax FM - Relax Nature",
    url:
      "http://101.ru/api/channel/getServers/263/channel/MP3/128/dataFormat/mobile",
  },
  {
    name: "Каналы Детского Радио - Киномульт",
    url:
      "http://101.ru/api/channel/getServers/326/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Каналы Детского Радио - Музыка для малышей",
    url:
      "http://101.ru/api/channel/getServers/327/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Каналы Детского Радио - Музыка для сна",
    url:
      "http://101.ru/api/channel/getServers/328/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Каналы Детского Радио - От 12 и старше",
    url:
      "http://101.ru/api/channel/getServers/329/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Каналы Детского Радио - Рок Дети",
    url:
      "http://101.ru/api/channel/getServers/330/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Каналы Детского Радио - Танцевальная музыка",
    url:
      "http://101.ru/api/channel/getServers/331/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Каналы Детского Радио - Хиты Детского радио",
    url:
      "http://101.ru/api/channel/getServers/332/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Классика - NeoClassical",
    url:
      "http://101.ru/api/channel/getServers/275/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Классика - Pop Classical Music",
    url:
      "http://101.ru/api/channel/getServers/97/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Классика - Классическая Музыка",
    url:
      "http://101.ru/api/channel/getServers/98/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Классика - Опера",
    url:
      "http://101.ru/api/channel/getServers/96/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Московский Бит - ВАО",
    url:
      "http://101.ru/api/channel/getServers/311/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Московский Бит - ЗАО",
    url:
      "http://101.ru/api/channel/getServers/312/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Московский Бит - САО",
    url:
      "http://101.ru/api/channel/getServers/313/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Московский Бит - СВАО",
    url:
      "http://101.ru/api/channel/getServers/319/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Московский Бит - СЗАО",
    url:
      "http://101.ru/api/channel/getServers/314/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Московский Бит - ЦАО",
    url:
      "http://101.ru/api/channel/getServers/315/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Московский Бит - ЮАО",
    url:
      "http://101.ru/api/channel/getServers/316/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Московский Бит - ЮВАО",
    url:
      "http://101.ru/api/channel/getServers/317/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Московский Бит - ЮЗАО",
    url:
      "http://101.ru/api/channel/getServers/318/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Поп - 101 Fresh",
    url:
      "http://101.ru/api/channel/getServers/148/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Поп - 90's Gold",
    url:
      "http://101.ru/api/channel/getServers/75/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Поп - 90's Pop",
    url:
      "http://101.ru/api/channel/getServers/130/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Поп - Cats & Dogs",
    url:
      "http://101.ru/api/channel/getServers/281/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Поп - Golden 70's",
    url:
      "http://101.ru/api/channel/getServers/192/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Поп - Happy Hours",
    url:
      "http://101.ru/api/channel/getServers/273/channel/MP3/128/dataFormat/mobile",
  },
  {
    name: "Поп - K-Pop",
    url:
      "http://101.ru/api/channel/getServers/323/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Поп - Live Hits",
    url:
      "http://101.ru/api/channel/getServers/86/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Поп - Love Songs",
    url:
      "http://101.ru/api/channel/getServers/29/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Поп - Mainstream",
    url:
      "http://101.ru/api/channel/getServers/87/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Поп - Radio 101 Classics",
    url:
      "http://101.ru/api/channel/getServers/283/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Поп - Голос",
    url:
      "http://101.ru/api/channel/getServers/198/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Поп - Голос Дети",
    url:
      "http://101.ru/api/channel/getServers/287/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Поп - День учителя",
    url:
      "http://101.ru/api/channel/getServers/309/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Поп - Евровидение",
    url:
      "http://101.ru/api/channel/getServers/147/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Поп - Музыка Авторадио",
    url:
      "http://101.ru/api/channel/getServers/2/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Поп - Музыка из сериалов",
    url:
      "http://101.ru/api/channel/getServers/308/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Поп - Музыка Летних Фестивалей",
    url:
      "http://101.ru/api/channel/getServers/285/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Поп - Мюзиклы",
    url:
      "http://101.ru/api/channel/getServers/92/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Поп - На хайпе",
    url:
      "http://101.ru/api/channel/getServers/286/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Поп - Попса 101",
    url:
      "http://101.ru/api/channel/getServers/155/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Поп - Прикосновение",
    url:
      "http://101.ru/api/channel/getServers/196/channel/MP3/128/dataFormat/mobile",
  },
  {
    name: "Поп - Россия Топ 50",
    url:
      "http://101.ru/api/channel/getServers/34/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Поп - Фабрика Звезд",
    url:
      "http://101.ru/api/channel/getServers/48/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Радио - Comedy Radio",
    url:
      "http://101.ru/api/channel/getServers/202/channel/MP3/128/dataFormat/mobile",
  },
  {
    name: "Радио - Crocus City Hall",
    url:
      "http://101.ru/api/channel/getServers/213/channel/MP3/128/dataFormat/mobile",
  },
  {
    name: "Радио - Like FM",
    url:
      "http://101.ru/api/channel/getServers/219/channel/MP3/128/dataFormat/mobile",
  },
  {
    name: "Радио - Megapolis",
    url:
      "http://101.ru/api/channel/getServers/180/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Радио - Relax FM",
    url:
      "http://101.ru/api/channel/getServers/200/channel/MP3/128/dataFormat/mobile",
  },
  {
    name: "Радио - Авторадио",
    url:
      "http://101.ru/api/channel/getServers/100/channel/MP3/128/dataFormat/mobile",
  },
  {
    name: "Радио - Детское Радио",
    url:
      "http://101.ru/api/channel/getServers/199/channel/MP3/128/dataFormat/mobile",
  },
  {
    name: "Радио - Комсомольская Правда",
    url:
      "http://101.ru/api/channel/getServers/194/channel/MP3/128/dataFormat/mobile",
  },
  {
    name: "Радио - Маруся ФМ",
    url:
      "http://101.ru/api/channel/getServers/301/channel/MP3/128/dataFormat/mobile",
  },
  {
    name: "Радио - Радио ENERGY",
    url:
      "http://101.ru/api/channel/getServers/99/channel/MP3/128/dataFormat/mobile",
  },
  {
    name: "Радио - Радио Romantika",
    url:
      "http://101.ru/api/channel/getServers/101/channel/MP3/128/dataFormat/mobile",
  },
  {
    name: "Радио - Радио ВЕРА",
    url:
      "http://101.ru/api/channel/getServers/207/channel/MP3/128/dataFormat/mobile",
  },
  {
    name: "Радио - Радио Зенит",
    url:
      "http://101.ru/api/channel/getServers/269/channel/MP3/128/dataFormat/mobile",
  },
  {
    name: "Радио - Радио Родных Дорог",
    url:
      "http://101.ru/api/channel/getServers/307/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Радио - Радиола",
    url:
      "http://101.ru/api/channel/getServers/209/channel/MP3/128/dataFormat/mobile",
  },
  {
    name: "Радио - ТНТ Music Radio",
    url:
      "http://101.ru/api/channel/getServers/274/channel/MP3/128/dataFormat/mobile",
  },
  {
    name: "Радио - Юмор FM",
    url:
      "http://101.ru/api/channel/getServers/102/channel/MP3/128/dataFormat/mobile",
  },
  {
    name: "Ретро - New York",
    url:
      "http://101.ru/api/channel/getServers/64/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Ретро - ВИА",
    url:
      "http://101.ru/api/channel/getServers/36/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Ретро - Польское Ретро Plus",
    url:
      "http://101.ru/api/channel/getServers/165/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Ретро - СССР 30-50",
    url:
      "http://101.ru/api/channel/getServers/46/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Ретро - СССР 50-70",
    url:
      "http://101.ru/api/channel/getServers/47/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Рок - Alternative",
    url:
      "http://101.ru/api/channel/getServers/176/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Рок - BritPop",
    url:
      "http://101.ru/api/channel/getServers/206/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Рок - Indie",
    url:
      "http://101.ru/api/channel/getServers/152/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Рок - Instrumental Rock",
    url:
      "http://101.ru/api/channel/getServers/183/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Рок - Metal",
    url:
      "http://101.ru/api/channel/getServers/211/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Рок - Modern Rock",
    url:
      "http://101.ru/api/channel/getServers/16/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Рок - Rock",
    url:
      "http://101.ru/api/channel/getServers/69/channel/MP3/128/dataFormat/mobile",
  },
  {
    name: "Рок - Rock Guitar",
    url:
      "http://101.ru/api/channel/getServers/70/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Рок - Rock Hits",
    url:
      "http://101.ru/api/channel/getServers/160/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Рок - Rock Remakes",
    url:
      "http://101.ru/api/channel/getServers/71/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Рок - Rock'n'Roll",
    url:
      "http://101.ru/api/channel/getServers/89/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Рок - Route 101",
    url:
      "http://101.ru/api/channel/getServers/185/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Рок - Thrash",
    url:
      "http://101.ru/api/channel/getServers/73/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Рок - Музыка для паба и бара",
    url:
      "http://101.ru/api/channel/getServers/321/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Рок - Музыка футбола",
    url:
      "http://101.ru/api/channel/getServers/280/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Рок - Наш Метал",
    url:
      "http://101.ru/api/channel/getServers/257/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Рок - Русский Рок",
    url:
      "http://101.ru/api/channel/getServers/42/channel/MP3/128/dataFormat/mobile",
  },
  {
    name: "Русская - 23 Февраля",
    url:
      "http://101.ru/api/channel/getServers/333/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Русская - Авторская Песня",
    url:
      "http://101.ru/api/channel/getServers/35/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Русская - Армейские песни",
    url:
      "http://101.ru/api/channel/getServers/37/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Русская - День Победы",
    url:
      "http://101.ru/api/channel/getServers/178/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Русская - Кабаре «Шансон»",
    url:
      "http://101.ru/api/channel/getServers/49/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Русская - Русские Песни",
    url:
      "http://101.ru/api/channel/getServers/41/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Русская - Шансон",
    url:
      "http://101.ru/api/channel/getServers/50/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Рэп / Хип-Хоп - Gangsta & Hip-Hop",
    url:
      "http://101.ru/api/channel/getServers/8/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Рэп / Хип-Хоп - Jazz Rap",
    url:
      "http://101.ru/api/channel/getServers/278/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Рэп / Хип-Хоп - R'n'B",
    url:
      "http://101.ru/api/channel/getServers/15/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Рэп / Хип-Хоп - Русский Рэп",
    url:
      "http://101.ru/api/channel/getServers/43/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Рэп / Хип-Хоп - Французский Рэп",
    url:
      "http://101.ru/api/channel/getServers/240/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Танцевальная - Big Room",
    url:
      "http://101.ru/api/channel/getServers/220/channel/MP3/128/dataFormat/mobile",
  },
  {
    name: "Танцевальная - Club Dance",
    url:
      "http://101.ru/api/channel/getServers/5/channel/MP3/128/dataFormat/mobile",
  },
  {
    name: "Танцевальная - Disco",
    url:
      "http://101.ru/api/channel/getServers/80/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Танцевальная - Electro",
    url:
      "http://101.ru/api/channel/getServers/7/channel/MP3/128/dataFormat/mobile",
  },
  {
    name: "Танцевальная - Euro Hits",
    url:
      "http://101.ru/api/channel/getServers/82/channel/MP3/128/dataFormat/mobile",
  },
  {
    name: "Танцевальная - Hot Traxx",
    url:
      "http://101.ru/api/channel/getServers/9/channel/MP3/128/dataFormat/mobile",
  },
  {
    name: "Танцевальная - House",
    url:
      "http://101.ru/api/channel/getServers/10/channel/MP3/128/dataFormat/mobile",
  },
  {
    name: "Танцевальная - Italo Disco",
    url:
      "http://101.ru/api/channel/getServers/161/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Танцевальная - Latina",
    url:
      "http://101.ru/api/channel/getServers/63/channel/MP3/128/dataFormat/mobile",
  },
  {
    name: "Танцевальная - Progressive",
    url:
      "http://101.ru/api/channel/getServers/13/channel/MP3/128/dataFormat/mobile",
  },
  {
    name: "Танцевальная - Radio First",
    url:
      "http://101.ru/api/channel/getServers/242/channel/MP3/128/dataFormat/mobile",
  },
  {
    name: "Танцевальная - Russian Dance",
    url:
      "http://101.ru/api/channel/getServers/17/channel/MP3/128/dataFormat/mobile",
  },
  {
    name: "Танцевальная - Zumba",
    url:
      "http://101.ru/api/channel/getServers/259/channel/MP3/128/dataFormat/mobile",
  },
  {
    name: "Танцевальная - Дискотека 80-х",
    url:
      "http://101.ru/api/channel/getServers/1/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Танцевальная - Дискотека 90-х",
    url:
      "http://101.ru/api/channel/getServers/74/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Танцевальная - Дискотека СССР",
    url:
      "http://101.ru/api/channel/getServers/144/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Танцевальная - Лето Non-Stop",
    url:
      "http://101.ru/api/channel/getServers/150/channel/MP3/128/dataFormat/mobile",
  },
  {
    name: "Танцевальная - Россия 90-х",
    url:
      "http://101.ru/api/channel/getServers/33/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Фоновая - Ambient",
    url:
      "http://101.ru/api/channel/getServers/23/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Фоновая - Chillоut",
    url:
      "http://101.ru/api/channel/getServers/24/channel/MP3/128/dataFormat/mobile",
  },
  {
    name: "Фоновая - Deep House",
    url:
      "http://101.ru/api/channel/getServers/173/channel/MP3/128/dataFormat/mobile",
  },
  {
    name: "Фоновая - Easy Listening",
    url:
      "http://101.ru/api/channel/getServers/26/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Фоновая - Instrumental",
    url:
      "http://101.ru/api/channel/getServers/28/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Фоновая - New Age",
    url:
      "http://101.ru/api/channel/getServers/120/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Фоновая - Office Lounge",
    url:
      "http://101.ru/api/channel/getServers/30/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Фоновая - Sex",
    url:
      "http://101.ru/api/channel/getServers/27/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Фоновая - Soulful House",
    url:
      "http://101.ru/api/channel/getServers/184/channel/MP3/128/dataFormat/mobile",
  },
  {
    name: "Фоновая - Акустика",
    url:
      "http://101.ru/api/channel/getServers/164/channel/MP3/128/dataFormat/mobile",
  },
  {
    name: "Фоновая - День Всех Влюбленных",
    url:
      "http://101.ru/api/channel/getServers/325/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Фоновая - Звуки Природы",
    url:
      "http://101.ru/api/channel/getServers/32/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Фоновая - Саундтреки",
    url:
      "http://101.ru/api/channel/getServers/25/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Фоновая - Тантра",
    url:
      "http://101.ru/api/channel/getServers/241/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Электроника - Breakbeat",
    url:
      "http://101.ru/api/channel/getServers/4/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Электроника - Chillstep",
    url:
      "http://101.ru/api/channel/getServers/260/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Электроника - Cyber Space",
    url:
      "http://101.ru/api/channel/getServers/79/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Электроника - Drum & Bass",
    url:
      "http://101.ru/api/channel/getServers/6/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Электроника - DubStep",
    url:
      "http://101.ru/api/channel/getServers/136/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Электроника - Electronic",
    url:
      "http://101.ru/api/channel/getServers/132/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Электроника - Liquid Funk",
    url:
      "http://101.ru/api/channel/getServers/272/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Электроника - Rave",
    url:
      "http://101.ru/api/channel/getServers/151/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Электроника - Tech House",
    url:
      "http://101.ru/api/channel/getServers/170/channel/MP3/128/dataFormat/mobile",
  },
  {
    name: "Электроника - Techno",
    url:
      "http://101.ru/api/channel/getServers/18/channel/MP3/128/dataFormat/mobile",
  },
  {
    name: "Электроника - Trance",
    url:
      "http://101.ru/api/channel/getServers/19/channel/MP3/128/dataFormat/mobile",
  },
  {
    name: "Электроника - Trap",
    url:
      "http://101.ru/api/channel/getServers/193/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Этническая - Духовная Музыка",
    url:
      "http://101.ru/api/channel/getServers/38/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Этническая - Русские Народные",
    url:
      "http://101.ru/api/channel/getServers/40/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Этническая - Этника",
    url:
      "http://101.ru/api/channel/getServers/51/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Юмор - Анекдоты",
    url:
      "http://101.ru/api/channel/getServers/20/channel/MP3/128/dataFormat/mobile",
  },
  {
    name: "Юмор - Классика Жанра",
    url:
      "http://101.ru/api/channel/getServers/21/channel/MP3/128/dataFormat/mobile",
  },
  {
    name: "Юмор - Мурзилки Int.",
    url:
      "http://101.ru/api/channel/getServers/3/channel/AAC/128/dataFormat/mobile",
  },
  {
    name: "Юмор - Юмор Non-Stop",
    url:
      "http://101.ru/api/channel/getServers/22/channel/MP3/128/dataFormat/mobile",
  },
  {
    name: "0N 70s",
    url: "https://str.pcradio.ru/zeron_70s-hi",
  },
  {
    name: "0N 80s",
    url: "https://str.pcradio.ru/zeron_80s-hi",
  },
  {
    name: "0N 90s",
    url: "https://str.pcradio.ru/zeron_90s-hi",
  },
  {
    name: "0N Charts",
    url: "https://str.pcradio.ru/zeron_charts-hi",
  },
  {
    name: "0N Dance",
    url: "https://str.pcradio.ru/zeron_dance-hi",
  },
  {
    name: "0N Disco",
    url: "https://str.pcradio.ru/zeron_disco-hi",
  },
  {
    name: "0N Electro",
    url: "https://str.pcradio.ru/zeron_electro-hi",
  },
  {
    name: "0N Gay",
    url: "https://str.pcradio.ru/zeron_lgbt-hi",
  },
  {
    name: "0N Schlager",
    url: "https://str.pcradio.ru/zeron_schlager-hi",
  },
  {
    name: "1 Oldies",
    url: "https://str.pcradio.ru/oldies_1-hi",
  },
  {
    name: "1.FM A List 80s",
    url: "https://str.pcradio.ru/one_list80s-hi",
  },
  {
    name: "1.FM Absolute 70s Pop",
    url: "https://str.pcradio.ru/one_70spop-hi",
  },
  {
    name: "1.FM Absolute 90s",
    url: "https://str.pcradio.ru/one_absolute90s-hi",
  },
  {
    name: "1.FM Absolute 90s Party Zone",
    url: "https://str.pcradio.ru/one_absolute90party-hi",
  },
  {
    name: "1.FM Absolute Country Hits",
    url: "https://str.pcradio.ru/one_absolute_country-hi",
  },
  {
    name: "1.FM Absolute Pop Latino",
    url: "https://str.pcradio.ru/one_abs_latino-hi",
  },
  {
    name: "1.FM Absolute Top 40",
    url: "https://str.pcradio.ru/one_absolute40-hi",
  },
  {
    name: "1.FM Absolute Trance (Euro)",
    url: "https://str.pcradio.ru/one_abs_tranceeuro-hi",
  },
  {
    name: "1.FM Acapella",
    url: "https://str.pcradio.ru/one_acapella-hi",
  },
  {
    name: "1.FM Adore Jazz",
    url: "https://str.pcradio.ru/one_adore_jazz-hi",
  },
  {
    name: "1.FM Adult Urban Hits",
    url: "https://str.pcradio.ru/one_urbanhits-hi",
  },
  {
    name: "1.FM Afterbeat Electronica",
    url: "https://str.pcradio.ru/one_afterelectro-hi",
  },
  {
    name: "1.FM All Euro 80s",
    url: "https://str.pcradio.ru/one_euro80-hi",
  },
  {
    name: "1.FM All Times and Urban Gospel",
    url: "https://str.pcradio.ru/one_urbangospel-hi",
  },
  {
    name: "1.FM Alternative Rock X Hits",
    url: "https://str.pcradio.ru/one_rock_x-hi",
  },
  {
    name: "1.FM Always Christmas",
    url: "https://str.pcradio.ru/one_xmas-hi",
  },
  {
    name: "1.FM America's Best Ballads",
    url: "https://str.pcradio.ru/one_amer_ballads-hi",
  },
  {
    name: "1.FM Amsterdam Trance",
    url: "https://str.pcradio.ru/one_amsterdam-hi",
  },
  {
    name: "1.FM Back to the 50s and 60s",
    url: "https://str.pcradio.ru/one_50s60s-hi",
  },
  {
    name: "1.FM Bay Smooth Jazz",
    url: "https://str.pcradio.ru/one_baysmooth-hi",
  },
  {
    name: "1.FM Blues",
    url: "https://str.pcradio.ru/one_blues-hi",
  },
  {
    name: "1.FM BOM Psytrance",
    url: "https://str.pcradio.ru/one_bom_psy-hi",
  },
  {
    name: "1.FM Bombay Beats India",
    url: "https://str.pcradio.ru/one_bombaybeats-hi",
  },
  {
    name: "1.FM Bossa Nova Hits",
    url: "https://str.pcradio.ru/one_bossa-hi",
  },
  {
    name: "1.FM Cafe",
    url: "https://str.pcradio.ru/one_cafe-hi",
  },
  {
    name: "1.FM Chillout Lounge",
    url: "https://str.pcradio.ru/one_chillout-hi",
  },
  {
    name: "1.FM Circuit Pride",
    url: "https://str.pcradio.ru/one_circuit_pride-hi",
  },
  {
    name: "1.FM Classic Country",
    url: "https://str.pcradio.ru/one_class_country-hi",
  },
  {
    name: "1.FM Classic Rock Replay",
    url: "https://str.pcradio.ru/one_rock_replay-hi",
  },
  {
    name: "1.FM Club 1",
    url: "https://str.pcradio.ru/one_club1-hi",
  },
  {
    name: "1.FM Country One",
    url: "https://str.pcradio.ru/one_country_one-hi",
  },
  {
    name: "1.FM Deep House",
    url: "https://str.pcradio.ru/one_deephouse-hi",
  },
  {
    name: "1.FM Destination SPA",
    url: "https://str.pcradio.ru/one_destination_spa-hi",
  },
  {
    name: "1.FM Disco Ball 70s-80s",
    url: "https://str.pcradio.ru/one_discoball-hi",
  },
  {
    name: "1.FM Dubstep Forward",
    url: "https://str.pcradio.ru/one_dubstepforw-hi",
  },
  {
    name: "1.FM Eternal Praise and Worship",
    url: "https://str.pcradio.ru/one_eternalpraise-hi",
  },
  {
    name: "1.FM Funky Express",
    url: "https://str.pcradio.ru/one_funky_exp-hi",
  },
  {
    name: "1.FM Gorilla FM",
    url: "https://str.pcradio.ru/one_gorilla-hi",
  },
  {
    name: "1.FM High Voltage",
    url: "https://str.pcradio.ru/one_highvolt-hi",
  },
  {
    name: "1.FM Italia On Air",
    url: "https://str.pcradio.ru/one_italia-hi",
  },
  {
    name: "1.FM Jamz",
    url: "https://str.pcradio.ru/one_jamz-hi",
  },
  {
    name: "1.FM Kids FM",
    url: "https://str.pcradio.ru/one_kids-hi",
  },
  {
    name: "1.FM Love Classics",
    url: "https://str.pcradio.ru/one_loveclass-hi",
  },
  {
    name: "1.FM Magic 80s",
    url: "https://str.pcradio.ru/one_magic80s-hi",
  },
  {
    name: "1.FM MPB Hits",
    url: "https://str.pcradio.ru/one_mpb-hi",
  },
  {
    name: "1.FM Otto's Baroque Music",
    url: "https://str.pcradio.ru/one_ottobaroque-hi",
  },
  {
    name: "1.FM Otto's Classical Music",
    url: "https://str.pcradio.ru/one_ottoclassic-hi",
  },
  {
    name: "1.FM Otto's Opera House Music",
    url: "https://str.pcradio.ru/one_ottoopera-hi",
  },
  {
    name: "1.FM Polska FM",
    url: "https://str.pcradio.ru/one_polska-hi",
  },
  {
    name: "1.FM Radio Gaia",
    url: "https://str.pcradio.ru/one_gaia-hi",
  },
  {
    name: "1.FM ReggaeTrade",
    url: "https://str.pcradio.ru/one_reggae-hi",
  },
  {
    name: "1.FM Rock Classics",
    url: "https://str.pcradio.ru/one_rockclassics-hi",
  },
  {
    name: "1.FM Samba Hits Brazil",
    url: "https://str.pcradio.ru/one_sambahits-hi",
  },
  {
    name: "1.FM Samba Rock",
    url: "https://str.pcradio.ru/one_sambarock-hi",
  },
  {
    name: "1.FM Sertaneja Hits",
    url: "https://str.pcradio.ru/one_sertaneja-hi",
  },
  {
    name: "1.FM Slow Jamz",
    url: "https://str.pcradio.ru/one_slowjamz-hi",
  },
  {
    name: "1.FM Top Fiesta",
    url: "https://str.pcradio.ru/one_topfiesta-hi",
  },
  {
    name: "1.FM Total Hits En Español",
    url: "https://str.pcradio.ru/one_hitsespanol-hi",
  },
  {
    name: "1.Kla$ 18+",
    url: "https://str.pcradio.ru/first_klas-hi",
  },
  {
    name: "100 XR",
    url: "https://str.pcradio.ru/hundred_xr-hi",
  },
  {
    name: "100% NL",
    url: "https://str.pcradio.ru/nl100pnl-hi",
  },
  {
    name: "100% NL Dance",
    url: "https://str.pcradio.ru/nl100pnldance-hi",
  },
  {
    name: "100% NL Feest",
    url: "https://str.pcradio.ru/nl100pnlfeest-hi",
  },
  {
    name: "100% NL Liefde",
    url: "https://str.pcradio.ru/nl100pnlliefde-hi",
  },
  {
    name: "100'5 Das Hitradio",
    url: "https://str.pcradio.ru/dashit_1005-hi",
  },
  {
    name: "1000 Hits 80s",
    url: "https://str.pcradio.ru/hits1000_80-hi",
  },
  {
    name: "1000 Oldies",
    url: "https://str.pcradio.ru/laut_1000oldies-hi",
  },
  {
    name: "100hitz - Heavy Metal",
    url: "https://str.pcradio.ru/hitz100_metal-hi",
  },
  {
    name: "101FM - 80er",
    url: "https://str.pcradio.ru/fm101_80er-hi",
  },
  {
    name: "102.1 The Edge",
    url: "https://str.pcradio.ru/theedge_1021-hi",
  },
  {
    name: "104.6 RTL Berlins Hit-Radio",
    url: "https://str.pcradio.ru/rtl_1046_berlin-hi",
  },
  {
    name: "1055 Rock",
    url: "https://str.pcradio.ru/rock_1055_gr-hi",
  },
  {
    name: "12 Port",
    url: "https://str.pcradio.ru/port_12-hi",
  },
  {
    name: "140 Ударов в минуту",
    url: "https://str.pcradio.ru/sto40_udarov_v_minutu-hi",
  },
  {
    name: "161 FM",
    url: "https://str.pcradio.ru/hundred61_fm-hi",
  },
  {
    name: "16Bit FM - Cafe",
    url: "https://str.pcradio.ru/bit16_cafe-hi",
  },
  {
    name: "16Bit FM - I.D.E.A.",
    url: "https://str.pcradio.ru/bit16_idea-hi",
  },
  {
    name: "16Bit FM - ProBeat",
    url: "https://str.pcradio.ru/bit16_probeat-hi",
  },
  {
    name: "181 FM - The Beat",
    url: "https://str.pcradio.ru/fm181_thebeat-hi",
  },
  {
    name: "181 FM 80's Hairband",
    url: "https://str.pcradio.ru/fm181_80s_hairband-hi",
  },
  {
    name: "181 FM Acid Jazz",
    url: "https://str.pcradio.ru/fm181_acidjazz-hi",
  },
  {
    name: "181 FM Rock 181",
    url: "https://str.pcradio.ru/fm181_rock181-hi",
  },
  {
    name: "181 FM Rock 40 (Rock'n'Roll)",
    url: "https://str.pcradio.ru/fm181_rock40-hi",
  },
  {
    name: "181 FM The Buzz",
    url: "https://str.pcradio.ru/fm181_thebuzz-hi",
  },
  {
    name: "18Hits",
    url: "https://str.pcradio.ru/eighteen_hits-hi",
  },
  {
    name: "1LIVE",
    url: "https://str.pcradio.ru/one_live-hi",
  },
  {
    name: "1LIVE diggi (WDR)",
    url: "https://str.pcradio.ru/wdr_1live_diggi-hi",
  },
  {
    name: "24 Hour Kirtan Radio",
    url: "https://str.pcradio.ru/kirtan_24-hi",
  },
  {
    name: "247 House - Live!",
    url: "https://str.pcradio.ru/house_247_live-hi",
  },
  {
    name: "247Blitz",
    url: "https://str.pcradio.ru/blitz_247-hi",
  },
  {
    name: "247Spice",
    url: "https://str.pcradio.ru/spice_247-hi",
  },
  {
    name: "2Pac",
    url: "https://str.pcradio.ru/pac2-hi",
  },
  {
    name: "2PM",
    url: "https://str.pcradio.ru/two_pm-hi",
  },
  {
    name: "30 Seconds to Mars",
    url: "https://str.pcradio.ru/thirty_Seconds_To_Mars-hi",
  },
  {
    name: "3DO",
    url: "https://str.pcradio.ru/tridoradio-hi",
  },
  {
    name: "40 Principales (Барселона)",
    url: "https://str.pcradio.ru/principales-hi",
  },
  {
    name: "42 FM",
    url: "https://str.pcradio.ru/fm42-hi",
  },
  {
    name: "4Dance Radio",
    url: "https://str.pcradio.ru/for_dance-hi",
  },
  {
    name: "4ZZZ - 4 Triple Z",
    url: "https://str.pcradio.ru/four_zzz-hi",
  },
  {
    name: "50 Cent",
    url: "https://str.pcradio.ru/fifty_Cent-hi",
  },
  {
    name: "7Б",
    url: "https://str.pcradio.ru/seven_b-hi",
  },
  {
    name: "80s80s Love",
    url: "https://str.pcradio.ru/eightys80s_love-hi",
  },
  {
    name: "80s80s NDW",
    url: "https://str.pcradio.ru/eightys80s_ndw-hi",
  },
  {
    name: "80s80s Party",
    url: "https://str.pcradio.ru/eightys80s_party-hi",
  },
  {
    name: "80s80s Radio",
    url: "https://str.pcradio.ru/eightys80s_radio-hi",
  },
  {
    name: "88 vier Berlin",
    url: "https://str.pcradio.ru/vier88_berlin-hi",
  },
  {
    name: "89.0 RTL Deutsch House",
    url: "https://str.pcradio.ru/rtl_890_dh-hi",
  },
  {
    name: "89.0 RTL In The Mix",
    url: "https://str.pcradio.ru/rtl_890_itm-hi",
  },
  {
    name: "89.0 RTL Live",
    url: "https://str.pcradio.ru/rtl_890_live-hi",
  },
  {
    name: "89.0 RTL Most Wanted",
    url: "https://str.pcradio.ru/rtl_890_mw-hi",
  },
  {
    name: "89.7 Bay",
    url: "https://str.pcradio.ru/bay_897_malta-hi",
  },
  {
    name: "9-й район",
    url: "https://str.pcradio.ru/nineth_rayon-hi",
  },
  {
    name: "90-х",
    url: "https://str.pcradio.ru/xoldpcradio90_2-hi",
  },
  {
    name: "90RU",
    url: "https://str.pcradio.ru/ru90pcradio-hi",
  },
  {
    name: "90s Eurodance",
    url: "https://str.pcradio.ru/eurodance90s_ucoz-hi",
  },
  {
    name: "90s Hits",
    url: "https://str.pcradio.ru/shitsradiopcradio90-hi",
  },
  {
    name: "90s Radio",
    url: "https://str.pcradio.ru/sradiopcradio90-hi",
  },
  {
    name: "90s90s Boygroups",
    url: "https://str.pcradio.ru/s90s90_boygr-hi",
  },
  {
    name: "90s90s Dance",
    url: "https://str.pcradio.ru/dance90s90s-hi",
  },
  {
    name: "90s90s Hits",
    url: "https://str.pcradio.ru/s90s90_hits-hi",
  },
  {
    name: "90s90s Techno",
    url: "https://str.pcradio.ru/s90s90_techno-hi",
  },
  {
    name: "90s90s The Beat",
    url: "https://str.pcradio.ru/s90s90_beat-hi",
  },
  {
    name: "90е Россия",
    url: "https://str.pcradio.ru/nineties_rus_pcradio-hi",
  },
  {
    name: "917XFM",
    url: "https://str.pcradio.ru/xfm917-hi",
  },
  {
    name: "94.7 WLS-FM",
    url: "https://str.pcradio.ru/ninety47_wls-hi",
  },
  {
    name: "96.3 Jack FM",
    url: "https://str.pcradio.ru/jackfm_963-hi",
  },
  {
    name: "98.8 Kiss FM Clubsets",
    url: "https://str.pcradio.ru/kiss_fmBerlin_clubsets-hi",
  },
  {
    name: "98.8 Kiss FM Live",
    url: "https://str.pcradio.ru/kiss_fmBerlin_live-hi",
  },
  {
    name: "98.8 Kiss FM R'n'B",
    url: "https://str.pcradio.ru/kiss_fmBerlin_rnb-hi",
  },
  {
    name: "98.8 Kiss FM Urban Beats",
    url: "https://str.pcradio.ru/kiss_fmBerlin_urban-hi",
  },
  {
    name: "A Global Set",
    url: "https://str.pcradio.ru/aglobal_set-hi",
  },
  {
    name: "A-ha",
    url: "https://str.pcradio.ru/aha-hi",
  },
  {
    name: "A.R. Rahman Radio Tamil (ARR)",
    url: "https://str.pcradio.ru/arr_radio-hi",
  },
  {
    name: "AAH Radio - Baroque Classical",
    url: "https://str.pcradio.ru/aah_baroque-hi",
  },
  {
    name: "AAH Radio - Harp Classical",
    url: "https://str.pcradio.ru/aah_harp-hi",
  },
  {
    name: "AAH Radio - Violin Classical",
    url: "https://str.pcradio.ru/aah_violin-hi",
  },
  {
    name: "Abacus Radio Beethoven",
    url: "https://str.pcradio.ru/abacus_beethoven-hi",
  },
  {
    name: "Abacus Radio Classical 1",
    url: "https://str.pcradio.ru/abacus_classical1-hi",
  },
  {
    name: "Abacus Radio Mozart",
    url: "https://str.pcradio.ru/abacus_mozart-hi",
  },
  {
    name: "Abacus The Goon Show",
    url: "https://str.pcradio.ru/abacus_goon-hi",
  },
  {
    name: "ABBA",
    url: "https://str.pcradio.ru/Abba-hi",
  },
  {
    name: "ABC Lounge Music",
    url: "https://str.pcradio.ru/abc_lounge_fr-hi",
  },
  {
    name: "ABC NewsRadio",
    url: "https://str.pcradio.ru/abc_net_au-hi",
  },
  {
    name: "ABC Triple J",
    url: "https://str.pcradio.ru/abc_triplej-hi",
  },
  {
    name: "ABN Radio",
    url: "https://str.pcradio.ru/abn_radio-hi",
  },
  {
    name: "Absolut Radio",
    url: "https://str.pcradio.ru/absolutradio_de-hi",
  },
  {
    name: "Absolut relax",
    url: "https://str.pcradio.ru/absolutrelax_de-hi",
  },
  {
    name: "Absolute Radio 00s",
    url: "https://str.pcradio.ru/absoluteradio_uk_00s-hi",
  },
  {
    name: "Absolute Radio 60s",
    url: "https://str.pcradio.ru/absoluteradio_uk_60s-hi",
  },
  {
    name: "Absolute Radio 70s",
    url: "https://str.pcradio.ru/absoluteradio_uk_70s-hi",
  },
  {
    name: "Absolute Radio 80s",
    url: "https://str.pcradio.ru/absoluteradio_uk_80s-hi",
  },
  {
    name: "Absolute Radio 90s",
    url: "https://str.pcradio.ru/absoluteradio_uk_90s-hi",
  },
  {
    name: "Absolute Radio Classic Rock",
    url: "https://str.pcradio.ru/absoluteradio_uk_class-hi",
  },
  {
    name: "Absolute Radio Live",
    url: "https://str.pcradio.ru/absoluteradio_uk_live-hi",
  },
  {
    name: "Accept",
    url: "https://str.pcradio.ru/accept-hi",
  },
  {
    name: "Accra24",
    url: "https://str.pcradio.ru/accra_24-hi",
  },
  {
    name: "ACDC",
    url: "https://str.pcradio.ru/ACDC-hi",
  },
  {
    name: "Ace Of Base",
    url: "https://str.pcradio.ru/Ace_Of_Base-hi",
  },
  {
    name: "Ace Radio - The Hairband Channel",
    url: "https://str.pcradio.ru/aceradio_hairband-hi",
  },
  {
    name: "Ace Radio - The Super Rock Mix",
    url: "https://str.pcradio.ru/aceradio_superrock_mix-hi",
  },
  {
    name: "Acid Jazz",
    url: "https://str.pcradio.ru/Acid_Jazz-hi",
  },
  {
    name: "Activa FM (Аликанте)",
    url: "https://str.pcradio.ru/wwwactivafm-hi",
  },
  {
    name: "Adele",
    url: "https://str.pcradio.ru/Adele-hi",
  },
  {
    name: "Adriano Celentano",
    url: "https://str.pcradio.ru/Chelentano-hi",
  },
  {
    name: "AFC",
    url: "https://str.pcradio.ru/afc_radio-hi",
  },
  {
    name: "AFK M94.5",
    url: "https://str.pcradio.ru/afk_m945-hi",
  },
  {
    name: "After Party",
    url: "https://str.pcradio.ru/After_Party-hi",
  },
  {
    name: "After Party 2",
    url: "https://str.pcradio.ru/After_Party_2-hi",
  },
  {
    name: "Afterhours FM",
    url: "https://str.pcradio.ru/afterhours-hi",
  },
  {
    name: "Agnus Rádió 88.3 FM",
    url: "https://str.pcradio.ru/agnusradio_ro-hi",
  },
  {
    name: "Aktív Rádió",
    url: "https://str.pcradio.ru/aktivradio_hu-hi",
  },
  {
    name: "Al Orthodoxiya",
    url: "https://str.pcradio.ru/orthodoxiya_org-hi",
  },
  {
    name: "Alem FM 89.2",
    url: "https://str.pcradio.ru/alem_fm892-hi",
  },
  {
    name: "ALEX Berlin 91.0",
    url: "https://str.pcradio.ru/alex_berlin910-hi",
  },
  {
    name: "Alex Jones Show",
    url: "https://str.pcradio.ru/alex_jones_show-hi",
  },
  {
    name: "Alexander Bard Projects",
    url: "https://str.pcradio.ru/Alexander_Bard_Projects-hi",
  },
  {
    name: "AlexFM",
    url: "https://str.pcradio.ru/alexfmradio_tk-hi",
  },
  {
    name: "Alice Cooper",
    url: "https://str.pcradio.ru/alice_cooper-hi",
  },
  {
    name: "Alizee",
    url: "https://str.pcradio.ru/alizee-hi",
  },
  {
    name: "Allsound Radio",
    url: "https://str.pcradio.ru/allsound_nl-hi",
  },
  {
    name: "Almodóvar en La Onda",
    url: "https://str.pcradio.ru/almodovar_onda-hi",
  },
  {
    name: "ALOsertao Sertaneja",
    url: "https://str.pcradio.ru/alosertao-hi",
  },
  {
    name: "Alpha Rádió",
    url: "https://str.pcradio.ru/alpha_889-hi",
  },
  {
    name: "AlternativeFM",
    url: "https://str.pcradio.ru/alternativefm_de-hi",
  },
  {
    name: "AlternativeWorld",
    url: "https://str.pcradio.ru/alter_world_laut-hi",
  },
  {
    name: "Ambiento Radio",
    url: "https://str.pcradio.ru/ambiento_ro-hi",
  },
  {
    name: "American Voice Radio Network (AVRN)",
    url: "https://str.pcradio.ru/avrn_voice-hi",
  },
  {
    name: "América Dance 90's",
    url: "https://str.pcradio.ru/ame_90s-hi",
  },
  {
    name: "Anastacia",
    url: "https://str.pcradio.ru/anastacia-hi",
  },
  {
    name: "Ancient FM",
    url: "https://str.pcradio.ru/ancientfm_com-hi",
  },
  {
    name: "Andy's 80s",
    url: "https://str.pcradio.ru/andys_80s-hi",
  },
  {
    name: "Angel Radio",
    url: "https://str.pcradio.ru/angelradio_couk-hi",
  },
  {
    name: "Animu FM",
    url: "https://str.pcradio.ru/animu_fm-hi",
  },
  {
    name: "Anison FM",
    url: "https://str.pcradio.ru/ansion_fm-hi",
  },
  {
    name: "Anna Vissi",
    url: "https://str.pcradio.ru/Anna_Vissi-hi",
  },
  {
    name: "Antena 1 (RTP)",
    url: "https://str.pcradio.ru/antena1_pt-hi",
  },
  {
    name: "Antena 1 (Сан-Паулу)",
    url: "https://str.pcradio.ru/antena1_combr-hi",
  },
  {
    name: "Antena 1 Rio 103.7",
    url: "https://str.pcradio.ru/antena1_rio-hi",
  },
  {
    name: "Antena 3 (RTP)",
    url: "https://str.pcradio.ru/antena3_rtp-hi",
  },
  {
    name: "Antena Minho",
    url: "https://str.pcradio.ru/antena_minho-hi",
  },
  {
    name: "Antenne 1",
    url: "https://str.pcradio.ru/antenne1_de-hi",
  },
  {
    name: "Antenne 1 Neckarburg",
    url: "https://str.pcradio.ru/antenne1_neckar-hi",
  },
  {
    name: "Antenne Bad Kreuznach",
    url: "https://str.pcradio.ru/antenne_badkreuz-hi",
  },
  {
    name: "Antenne Bayern - 80er Kulthits",
    url: "https://str.pcradio.ru/bayern_80er-hi",
  },
  {
    name: "Antenne Bayern - 90er Hits",
    url: "https://str.pcradio.ru/bayern_90er-hi",
  },
  {
    name: "Antenne Bayern - Black Beatz",
    url: "https://str.pcradio.ru/bayern_blackbeatz-hi",
  },
  {
    name: "Antenne Bayern - Chillout",
    url: "https://str.pcradio.ru/antenne_chillout-hi",
  },
  {
    name: "Antenne Bayern - Classic Rock",
    url: "https://str.pcradio.ru/antenne_classic_rock-hi",
  },
  {
    name: "Antenne Bayern - Event",
    url: "https://str.pcradio.ru/bayern_event-hi",
  },
  {
    name: "Antenne Bayern - Fresh4you",
    url: "https://str.pcradio.ru/bayern_fresh4u-hi",
  },
  {
    name: "Antenne Bayern - Hitmix",
    url: "https://str.pcradio.ru/bayern_hitmix-hi",
  },
  {
    name: "Antenne Bayern - Hits fuer Kids",
    url: "https://str.pcradio.ru/bayern_hitskids-hi",
  },
  {
    name: "Antenne Bayern - Lovesongs",
    url: "https://str.pcradio.ru/bayern_lovesongs-hi",
  },
  {
    name: "Antenne Bayern - Oldies but Goldies",
    url: "https://str.pcradio.ru/bayern_oldies-hi",
  },
  {
    name: "Antenne Bayern - Schlagersahne",
    url: "https://str.pcradio.ru/bayern_schlagersahne-hi",
  },
  {
    name: "Antenne Bayern - Top40",
    url: "https://str.pcradio.ru/antenne_top40-hi",
  },
  {
    name: "Antenne Bayern - Weihnachts Hits",
    url: "https://str.pcradio.ru/bayern_weihnachts-hi",
  },
  {
    name: "Antenne Bayern - Workout Hits",
    url: "https://str.pcradio.ru/bayern_workout-hi",
  },
  {
    name: "3 FM",
    url: "https://str.pcradio.ru/antenne_1013-hi",
  },
  {
    name: "Antenne Brandenburg",
    url: "https://str.pcradio.ru/antenne_brandenburg-hi",
  },
  {
    name: "Antenne Düsseldorf",
    url: "https://str.pcradio.ru/antenne_ddorf-hi",
  },
  {
    name: "Antenne Frankfurt 95.1",
    url: "https://str.pcradio.ru/anten_frank951-hi",
  },
  {
    name: "Antenne Kärnten",
    url: "https://str.pcradio.ru/antenne_kaernten-hi",
  },
  {
    name: "Antenne Niedersachsen",
    url: "https://str.pcradio.ru/antenne_nds_live-hi",
  },
  {
    name: "Antenne Saar",
    url: "https://str.pcradio.ru/antenne_saar-hi",
  },
  {
    name: "Antenne Salzburg",
    url: "https://str.pcradio.ru/antenne_salzburg-hi",
  },
  {
    name: "Antenne Steiermark",
    url: "https://str.pcradio.ru/antenne_steiermark-hi",
  },
  {
    name: "Antenne Thüringen - 80er",
    url: "https://str.pcradio.ru/antenne_tue_80er-hi",
  },
  {
    name: "Antenne Thüringen - 90er",
    url: "https://str.pcradio.ru/antenne_tue_90er-hi",
  },
  {
    name: "Antenne Thüringen - Charts",
    url: "https://str.pcradio.ru/antenne_tue_charts-hi",
  },
  {
    name: "Antenne Thüringen - Deutsch Pop",
    url: "https://str.pcradio.ru/antenne_tue_deupop-hi",
  },
  {
    name: "Antenne Thüringen - Lounge",
    url: "https://str.pcradio.ru/antenne_tue_lounge-hi",
  },
  {
    name: "Antenne Thüringen - Yesterhits",
    url: "https://str.pcradio.ru/antenne_tue_yester-hi",
  },
  {
    name: "Antenne Thüringen Live",
    url: "https://str.pcradio.ru/antenne_tue_live-hi",
  },
  {
    name: "Antenne Tirol",
    url: "https://str.pcradio.ru/antenne_tirol-hi",
  },
  {
    name: "Antenne Vorarlberg",
    url: "https://str.pcradio.ru/antenne_vorarlberg-hi",
  },
  {
    name: "Antyradio",
    url: "https://str.pcradio.ru/antyradio_pl-hi",
  },
  {
    name: "Antyradio Hard",
    url: "https://str.pcradio.ru/antyradio_hard-hi",
  },
  {
    name: "Anuryzm",
    url: "https://str.pcradio.ru/Anuryzm_uae-hi",
  },
  {
    name: "Aphrodite",
    url: "https://str.pcradio.ru/aphrodite-hi",
  },
  {
    name: "Apocalyptica",
    url: "https://str.pcradio.ru/apocalyptica-hi",
  },
  {
    name: "Aqua",
    url: "https://str.pcradio.ru/Aqua-hi",
  },
  {
    name: "Arabella (Вена)",
    url: "https://str.pcradio.ru/arabella_vienna-hi",
  },
  {
    name: "Arabella 80s (Мюнхен)",
    url: "https://str.pcradio.ru/arabella-hi",
  },
  {
    name: "Arabella Herzflimmern",
    url: "https://str.pcradio.ru/arabella_de_herz-hi",
  },
  {
    name: "Arabella Kult",
    url: "https://str.pcradio.ru/arabella_kult-hi",
  },
  {
    name: "Arabella Live",
    url: "https://str.pcradio.ru/arabella_de_live-hi",
  },
  {
    name: "Arabella Niederösterreich",
    url: "https://str.pcradio.ru/arabella_noe-hi",
  },
  {
    name: "Arabella Oberösterreich",
    url: "https://str.pcradio.ru/arabella_ooe-hi",
  },
  {
    name: "Arabella Rock (Мюнхен)",
    url: "https://str.pcradio.ru/arabella_rock-hi",
  },
  {
    name: "Arabella Wiesn-Party",
    url: "https://str.pcradio.ru/arabella_de_party-hi",
  },
  {
    name: "Arabesk FM (Tiryaki FM)",
    url: "https://str.pcradio.ru/arabeskfm_biz-hi",
  },
  {
    name: "Arizsanta FM Stereo",
    url: "https://str.pcradio.ru/arizsanta_fm-hi",
  },
  {
    name: "Armazém",
    url: "https://str.pcradio.ru/armazem_br-hi",
  },
  {
    name: "Armin van Buuren",
    url: "https://str.pcradio.ru/Armin_van_buuren-hi",
  },
  {
    name: "ARSU - Anime Radio",
    url: "https://str.pcradio.ru/animeradio_su-hi",
  },
  {
    name: "Art City Radio",
    url: "https://str.pcradio.ru/artcity-hi",
  },
  {
    name: "Art RemiX",
    url: "https://str.pcradio.ru/art_remix-hi",
  },
  {
    name: "Asia Dream - Japan",
    url: "https://str.pcradio.ru/japan_asiadream-hi",
  },
  {
    name: "Asia Expat Radio - Singapore (AXR)",
    url: "https://str.pcradio.ru/axr_singapore-hi",
  },

  {
    name: "Asterios",
    url: "https://str.pcradio.ru/asterious_tm-hi",
  },
  {
    name: "4",
    url: "https://str.pcradio.ru/astrofm964-hi",
  },
  {
    name: "ATB",
    url: "https://str.pcradio.ru/ATB-hi",
  },
  {
    name: "Atlantis FM",
    url: "https://str.pcradio.ru/spainatlantis-hi",
  },
  {
    name: "Atm.Fm",
    url: "https://str.pcradio.ru/atmfm_ru-hi",
  },
  {
    name: "Atomik Radio",
    url: "https://str.pcradio.ru/atomik_radio-hi",
  },
  {
    name: "Audioboxlive DJ Radio",
    url: "https://str.pcradio.ru/audioboxlive_com-hi",
  },
  {
    name: "Aura Radio",
    url: "https://str.pcradio.ru/aura_radio_pcradio-hi",
  },
  {
    name: "Aurum Inutile Radio",
    url: "https://str.pcradio.ru/aurum_inutil-hi",
  },
  {
    name: "Avenged Sevenfold",
    url: "https://str.pcradio.ru/avenged_sevenfold-hi",
  },
  {
    name: "Avril Lavigne",
    url: "https://str.pcradio.ru/avril_lavigne-hi",
  },
  {
    name: "Axel24",
    url: "https://str.pcradio.ru/axel24_com-hi",
  },
  {
    name: "B.B. King",
    url: "https://str.pcradio.ru/BB_King-hi",
  },
  {
    name: "B4B Dance Disco Funk",
    url: "https://str.pcradio.ru/b4b_dance_classics-hi",
  },
  {
    name: "B4B Deep House",
    url: "https://str.pcradio.ru/b4b_deep_house-hi",
  },
  {
    name: "Baby FM",
    url: "https://str.pcradio.ru/baby_fm-hi",
  },
  {
    name: "Backstreet Boys",
    url: "https://str.pcradio.ru/Backstreet_Boys-hi",
  },
  {
    name: "Bad Balance",
    url: "https://str.pcradio.ru/bad_balance-hi",
  },
  {
    name: "Bad Boys Blue",
    url: "https://str.pcradio.ru/Bad_Boys_Blue-hi",
  },
  {
    name: "BadBeatRadio",
    url: "https://str.pcradio.ru/badbeat_16-hi",
  },
  {
    name: "baden.fm",
    url: "https://str.pcradio.ru/baden_fm-hi",
  },
  {
    name: "Balance Radio",
    url: "https://str.pcradio.ru/balance_radio_electro-hi",
  },
  {
    name: "Balaton Rádió 88.7 FM",
    url: "https://str.pcradio.ru/balaton_887-hi",
  },
  {
    name: "Bananastreet",
    url: "https://str.pcradio.ru/banana_street-hi",
  },
  {
    name: "Bar Legend Radio",
    url: "https://str.pcradio.ru/bar_legend-hi",
  },
  {
    name: "Bargrooves Radio",
    url: "https://str.pcradio.ru/bargrooves_pcradio-hi",
  },
  {
    name: "Bartok Radio (MR3)",
    url: "https://str.pcradio.ru/bartok_radio-hi",
  },
  {
    name: "Bass-Clubbers",
    url: "https://str.pcradio.ru/bass_clubbers-hi",
  },
  {
    name: "Bassdrive",
    url: "https://str.pcradio.ru/bassdrive-hi",
  },
  {
    name: "Bates FM - Hard Rock",
    url: "https://str.pcradio.ru/batesfm_hardrock-hi",
  },
  {
    name: "Bay Radio (Хавеа)",
    url: "https://str.pcradio.ru/bayradionorth-hi",
  },
  {
    name: "Bayern 1",
    url: "https://str.pcradio.ru/bayern_1-hi",
  },
  {
    name: "Bayern 3",
    url: "https://str.pcradio.ru/bayern3-hi",
  },
  {
    name: "BB Radio",
    url: "https://str.pcradio.ru/bbradio_de-hi",
  },
  {
    name: "BB-Radio",
    url: "https://str.pcradio.ru/bbnews_ru-hi",
  },
  {
    name: "BBC 1",
    url: "https://str.pcradio.ru/bbc_1-hi",
  },
  {
    name: "BBN (English)",
    url: "https://str.pcradio.ru/bbn_english-hi",
  },
  {
    name: "BDSM Radio",
    url: "https://str.pcradio.ru/Bdsmradio-hi",
  },
  {
    name: "Beach Boys",
    url: "https://str.pcradio.ru/The_Beach_Boys-hi",
  },
  {
    name: "BeachChill Radio",
    url: "https://str.pcradio.ru/beachchill_com-hi",
  },
  {
    name: "BeachGrooves Radio",
    url: "https://str.pcradio.ru/beachgrooves_com-hi",
  },
  {
    name: "Beatdownx",
    url: "https://str.pcradio.ru/laut_beatdownx-hi",
  },
  {
    name: "Beautiful Instrumentals",
    url: "https://str.pcradio.ru/beautiful_instrumentals-hi",
  },
  {
    name: "BebeNautas",
    url: "https://str.pcradio.ru/radiobebenautas_cl-hi",
  },
  {
    name: "Beirut Nights",
    url: "https://str.pcradio.ru/beirut_nights-hi",
  },
  {
    name: "Benassi Bros.",
    url: "https://str.pcradio.ru/benassi-hi",
  },
  {
    name: "Berliner Rundfunk 91.4",
    url: "https://str.pcradio.ru/berlin_rund914-hi",
  },
  {
    name: "Bermuda Funk",
    url: "https://str.pcradio.ru/bermudafunk_org-hi",
  },
  {
    name: "Best FM (Дебрецен)",
    url: "https://str.pcradio.ru/bestfm_hu-hi",
  },
  {
    name: "Best FM (Стамбул)",
    url: "https://str.pcradio.ru/best_fm_tr-hi",
  },
  {
    name: "Best Hit",
    url: "https://str.pcradio.ru/Best_Hit-hi",
  },
  {
    name: "Best Smooth Jazz",
    url: "https://str.pcradio.ru/best_smoothjazz_uk-hi",
  },
  {
    name: "Beyonce",
    url: "https://str.pcradio.ru/Beyonce-hi",
  },
  {
    name: "BFBS Radio UK",
    url: "https://str.pcradio.ru/bfbs_radio_uk-hi",
  },
  {
    name: "BHeins – Meine Hitgarantie",
    url: "https://str.pcradio.ru/bheins_meinehit-hi",
  },
  {
    name: "Big Noise",
    url: "https://str.pcradio.ru/bignoise_club-hi",
  },
  {
    name: "Big R Radio - The Wave",
    url: "https://str.pcradio.ru/bigrradio_thewave-hi",
  },
  {
    name: "bigFM",
    url: "https://str.pcradio.ru/bigfm_de-hi",
  },
  {
    name: "bigFM Balkan",
    url: "https://str.pcradio.ru/bigfm_balk-hi",
  },
  {
    name: "bigFM Charts",
    url: "https://str.pcradio.ru/bigfm_charts-hi",
  },
  {
    name: "bigFM Dance",
    url: "https://str.pcradio.ru/bigfm_dance-hi",
  },
  {
    name: "bigFM Deep and Tech House",
    url: "https://str.pcradio.ru/bigfm_deep-hi",
  },
  {
    name: "bigFM Deutscher Hip-Hop Charts",
    url: "https://str.pcradio.ru/bigfm_hipdeutsch-hi",
  },
  {
    name: "bigFM Deutschrap",
    url: "https://str.pcradio.ru/bigfm_deu-hi",
  },
  {
    name: "bigFM EDM and Progressive",
    url: "https://str.pcradio.ru/bigfm_edm-hi",
  },
  {
    name: "bigFM Groove Night",
    url: "https://str.pcradio.ru/bigfm_groove-hi",
  },
  {
    name: "bigFM HipHop",
    url: "https://str.pcradio.ru/bigfm_hiphop-hi",
  },
  {
    name: "bigFM Latin Beats",
    url: "https://str.pcradio.ru/bigfm_latin-hi",
  },
  {
    name: "bigFM Mashup",
    url: "https://str.pcradio.ru/bigfm_mash-hi",
  },
  {
    name: "bigFM Oldschool Rap and Hip-Hop",
    url: "https://str.pcradio.ru/bigfm_oldhip-hi",
  },
  {
    name: "bigFM Reggae Vibez",
    url: "https://str.pcradio.ru/bigfm_regg-hi",
  },
  {
    name: "bigFM RnB",
    url: "https://str.pcradio.ru/bigfm_rnb-hi",
  },
  {
    name: "bigFM Rock am Ring",
    url: "https://str.pcradio.ru/bigfm_amring-hi",
  },
  {
    name: "bigFM Russia",
    url: "https://str.pcradio.ru/bigfm_de_rus-hi",
  },
  {
    name: "bigFM SES",
    url: "https://str.pcradio.ru/bigfm_ses-hi",
  },
  {
    name: "bigFM Sunset Lounge",
    url: "https://str.pcradio.ru/bigfm_lou-hi",
  },
  {
    name: "bigFM Urban Club Beats",
    url: "https://str.pcradio.ru/bigfm_urban-hi",
  },
  {
    name: "bigFM US Rap and Hip-Hop",
    url: "https://str.pcradio.ru/bigfm_usrap-hi",
  },
  {
    name: "bigFM World Beats",
    url: "https://str.pcradio.ru/bigfm_wbeats-hi",
  },
  {
    name: "BigTunes Radio - Bass",
    url: "https://str.pcradio.ru/bigtunes_bass-hi",
  },
  {
    name: "BigTunes Radio - House",
    url: "https://str.pcradio.ru/bigtunes_house-hi",
  },
  {
    name: "BigTunes Radio - Oldschool",
    url: "https://str.pcradio.ru/bigtunes_oldschool-hi",
  },
  {
    name: "BigTunes Radio - Trance",
    url: "https://str.pcradio.ru/bigtunes_trance-hi",
  },
  {
    name: "Biker FM",
    url: "https://str.pcradio.ru/biker_fm-hi",
  },
  {
    name: "Billy’s Band",
    url: "https://str.pcradio.ru/billys_band-hi",
  },
  {
    name: "Bingo FM",
    url: "https://str.pcradio.ru/bingofm_nl-hi",
  },
  {
    name: "Birdsong FM",
    url: "https://str.pcradio.ru/birdsong_fm-hi",
  },
  {
    name: "Biz Webradio",
    url: "https://str.pcradio.ru/bizwebradio-hi",
  },
  {
    name: "Bloger FM",
    url: "https://str.pcradio.ru/bloger_fm-hi",
  },
  {
    name: "Bloodstream",
    url: "https://str.pcradio.ru/blood_stream-hi",
  },
  {
    name: "Blue System",
    url: "https://str.pcradio.ru/blue_system-hi",
  },
  {
    name: "BluesMen Channel - Gold",
    url: "https://str.pcradio.ru/bluesmen_gold-hi",
  },
  {
    name: "BluesMen Channel - Hits",
    url: "https://str.pcradio.ru/bluesmen_hits-hi",
  },
  {
    name: "BNR Horizont",
    url: "https://str.pcradio.ru/bnr_bg_hori-hi",
  },
  {
    name: "BNR Hristo Botev",
    url: "https://str.pcradio.ru/bnr_bg_hrist-hi",
  },
  {
    name: "BNR Nieuws Radio",
    url: "https://str.pcradio.ru/bnrnl-hi",
  },
  {
    name: "BNR Radio Sofia",
    url: "https://str.pcradio.ru/bnr_sofia-hi",
  },
  {
    name: "Bob Marley",
    url: "https://str.pcradio.ru/bob_marley-hi",
  },
  {
    name: "Bollocks Rock and Metal Radio",
    url: "https://str.pcradio.ru/bollocks_radio-hi",
  },
  {
    name: "Bollywood Radio",
    url: "https://str.pcradio.ru/Bollywood-hi",
  },
  {
    name: "Bollywood Radio and Beyond",
    url: "https://str.pcradio.ru/bolly_beyond-hi",
  },
  {
    name: "Boney M.",
    url: "https://str.pcradio.ru/BoneyM-hi",
  },
  {
    name: "Bonton",
    url: "https://str.pcradio.ru/radiobonton_cz-hi",
  },
  {
    name: "Boomstation",
    url: "https://str.pcradio.ru/boomstation_radio-hi",
  },
  {
    name: "Bossa Nova Brazil",
    url: "https://str.pcradio.ru/bossanova_vip-hi",
  },
  {
    name: "Bosson",
    url: "https://str.pcradio.ru/bosson-hi",
  },
  {
    name: "Boystown Live Dance Radio",
    url: "https://str.pcradio.ru/boys_town_live-hi",
  },
  {
    name: "BR Heimat",
    url: "https://str.pcradio.ru/br_heimat-hi",
  },
  {
    name: "BR-Klassik",
    url: "https://str.pcradio.ru/br_klassik-hi",
  },
  {
    name: "Brainstorm (Латвия)",
    url: "https://str.pcradio.ru/brainstorm-hi",
  },
  {
    name: "Brandon Stone",
    url: "https://str.pcradio.ru/Brandon_Stone-hi",
  },
  {
    name: "Breaking Orbit",
    url: "https://str.pcradio.ru/Breaking_orbit_aus-hi",
  },
  {
    name: "Bremen Eins",
    url: "https://str.pcradio.ru/bremen_eins-hi",
  },
  {
    name: "Bremen NEXT",
    url: "https://str.pcradio.ru/bremen_next-hi",
  },
  {
    name: "Bremen Vier",
    url: "https://str.pcradio.ru/bremen_vier-hi",
  },
  {
    name: "Bremen Zwei",
    url: "https://str.pcradio.ru/bremen_zwei-hi",
  },
  {
    name: "Bretagne 5",
    url: "https://str.pcradio.ru/bretagne5-hi",
  },
  {
    name: "BRF1",
    url: "https://str.pcradio.ru/brf1_be-hi",
  },
  {
    name: "BRF2",
    url: "https://str.pcradio.ru/brf2_be-hi",
  },
  {
    name: "Britney Spears",
    url: "https://str.pcradio.ru/Britney_Spears-hi",
  },
  {
    name: "Brony Radio Germany - DayDJ",
    url: "https://str.pcradio.ru/brony_germany_day-hi",
  },
  {
    name: "Brony Radio Germany - NightDJ",
    url: "https://str.pcradio.ru/brony_germany_ni-hi",
  },
  {
    name: "BRSS Radio",
    url: "https://str.pcradio.ru/brsswami_com-hi",
  },
  {
    name: "Bruno Mars",
    url: "https://str.pcradio.ru/Bruno_Mars-hi",
  },
  {
    name: "Bryan Adams",
    url: "https://str.pcradio.ru/bryan_adams-hi",
  },
  {
    name: "bTuner's station",
    url: "https://str.pcradio.ru/btuners-hi",
  },
  {
    name: "Buddha Beach",
    url: "https://str.pcradio.ru/buddha_beach-hi",
  },
  {
    name: "Buddha FM",
    url: "https://str.pcradio.ru/buddha_fm-hi",
  },
  {
    name: "BumbleBee",
    url: "https://str.pcradio.ru/bumblebeefm_ru-hi",
  },
  {
    name: "BurnFM",
    url: "https://str.pcradio.ru/burn_fm_de-hi",
  },
  {
    name: "Buryad FM",
    url: "https://str.pcradio.ru/buryad_fm-hi",
  },
  {
    name: "Business FM",
    url: "https://str.pcradio.ru/business_fm-hi",
  },
  {
    name: "ByteFM",
    url: "https://str.pcradio.ru/byte_fm-hi",
  },
  {
    name: "C. C. Catch",
    url: "https://str.pcradio.ru/C_C_Catch-hi",
  },
  {
    name: "C89.5",
    url: "https://str.pcradio.ru/c89_org-hi",
  },
  {
    name: "Cadena 100",
    url: "https://str.pcradio.ru/wwwcadena100es-hi",
  },
  {
    name: "Cadena Cope (Мадрид)",
    url: "https://str.pcradio.ru/wwwcopees-hi",
  },
  {
    name: "Cadena SER - Madrid",
    url: "https://str.pcradio.ru/cadenaser_madrid-hi",
  },
  {
    name: "Cadena SER - Málaga",
    url: "https://str.pcradio.ru/cadenaser_malaga-hi",
  },
  {
    name: "Cafe 80s FM",
    url: "https://str.pcradio.ru/cafe80s_de-hi",
  },
  {
    name: "Café del Mar",
    url: "https://str.pcradio.ru/cafedelmar_ga-hi",
  },
  {
    name: "Callisto Radio",
    url: "https://str.pcradio.ru/callisto_radio-hi",
  },
  {
    name: "Canal B 94.0 FM",
    url: "https://str.pcradio.ru/canalb_fr-hi",
  },
  {
    name: "Canal Extremadura Radio",
    url: "https://str.pcradio.ru/canal_extramadura-hi",
  },
  {
    name: "Canal Sur Radio Andalucía",
    url: "https://str.pcradio.ru/canalsur_sevi-hi",
  },
  {
    name: "Capital FM (Moscow FM)",
    url: "https://str.pcradio.ru/capitalfm_moscow-hi",
  },
  {
    name: "Capital FM (Лондон)",
    url: "https://str.pcradio.ru/capital_fm-hi",
  },
  {
    name: "Capital Xtra",
    url: "https://str.pcradio.ru/capital_xtra_uk-hi",
  },
  {
    name: "Cardigans",
    url: "https://str.pcradio.ru/The_Cardigans-hi",
  },
  {
    name: "Cardiowave",
    url: "https://str.pcradio.ru/cardiowave_net-hi",
  },
  {
    name: "CBC Music",
    url: "https://str.pcradio.ru/cbc_music-hi",
  },
  {
    name: "CBC Radio One (Эдмонтон)",
    url: "https://str.pcradio.ru/cbcone_edm-hi",
  },
  {
    name: "CC Radio",
    url: "https://str.pcradio.ru/cc_radio-hi",
  },
  {
    name: "CD FM",
    url: "https://str.pcradio.ru/cd_fm-hi",
  },
  {
    name: "Celine Dion",
    url: "https://str.pcradio.ru/Celine_Dion-hi",
  },
  {
    name: "Celtic Sounds",
    url: "https://str.pcradio.ru/celtic_sounds-hi",
  },
  {
    name: "Celtic-Rock",
    url: "https://str.pcradio.ru/celtic_rock_de-hi",
  },
  {
    name: "Centr",
    url: "https://str.pcradio.ru/centr-hi",
  },
  {
    name: "CentreForce Radio 88.3",
    url: "https://str.pcradio.ru/centreforce-hi",
  },
  {
    name: "Cesky Impuls AM 981",
    url: "https://str.pcradio.ru/cesky_impuls-hi",
  },
  {
    name: "Charivari 98.6",
    url: "https://str.pcradio.ru/charivari_986-hi",
  },
  {
    name: "ChartHitz",
    url: "https://str.pcradio.ru/laut_charthitz-hi",
  },
  {
    name: "Cher",
    url: "https://str.pcradio.ru/cher-hi",
  },
  {
    name: "Chill Out Zone",
    url: "https://str.pcradio.ru/chillout_zone-hi",
  },
  {
    name: "Chillizet",
    url: "https://str.pcradio.ru/chillizet_pl-hi",
  },
  {
    name: "ChilloutFM",
    url: "https://str.pcradio.ru/chilloutfm_ru-hi",
  },
  {
    name: "ChillTrax",
    url: "https://str.pcradio.ru/chilltrax_com-hi",
  },
  {
    name: "Chilz.Me",
    url: "https://str.pcradio.ru/chilz_me-hi",
  },
  {
    name: "Chocolate FM",
    url: "https://str.pcradio.ru/Chocolat_fm-hi",
  },
  {
    name: "Christian Lais",
    url: "https://str.pcradio.ru/Christian_Lais-hi",
  },
  {
    name: "Christliches Radio München",
    url: "https://str.pcradio.ru/christlichesradio_de-hi",
  },
  {
    name: "Chromanova - Chillout",
    url: "https://str.pcradio.ru/chromanova_chill-hi",
  },
  {
    name: "Chuck Berry",
    url: "https://str.pcradio.ru/chuck_berry-hi",
  },
  {
    name: "Chérie",
    url: "https://str.pcradio.ru/cheriefm_fr-hi",
  },
  {
    name: "City Fm 106.0",
    url: "https://str.pcradio.ru/fm106_am-hi",
  },
  {
    name: "City Radio 106.4 FM",
    url: "https://str.pcradio.ru/cityradio_ro-hi",
  },
  {
    name: "Civil Rádió FM 98",
    url: "https://str.pcradio.ru/civilradio_hu-hi",
  },
  {
    name: "Civil Rádió FM98",
    url: "https://str.pcradio.ru/civilradio_fm98-hi",
  },
  {
    name: "CJLO 1690 (Монреаль)",
    url: "https://str.pcradio.ru/cjlo_1690-hi",
  },
  {
    name: "CJSW 90.9 FM",
    url: "https://str.pcradio.ru/cjsw_909-hi",
  },
  {
    name: "CKUT 90.3 FM",
    url: "https://str.pcradio.ru/ckut_903-hi",
  },
  {
    name: " Астана)",
    url: "https://str.pcradio.ru/classicfm_kz-hi",
  },
  {
    name: "Classic FM (Лондон)",
    url: "https://str.pcradio.ru/classicfm_com-hi",
  },
  {
    name: "Classic FM (София)",
    url: "https://str.pcradio.ru/classicfm_bg-hi",
  },
  {
    name: "Classic Rock Florida",
    url: "https://str.pcradio.ru/classic_rock_flo-hi",
  },
  {
    name: "Classical Network",
    url: "https://str.pcradio.ru/classical_network-hi",
  },
  {
    name: "Club Radio (Прага)",
    url: "https://str.pcradio.ru/club_prague-hi",
  },
  {
    name: "ClubTime FM",
    url: "https://str.pcradio.ru/clubtime_fm-hi",
  },
  {
    name: "CnR Radio",
    url: "https://str.pcradio.ru/cnr_radio-hi",
  },
  {
    name: "Coast FM Tenerife",
    url: "https://str.pcradio.ru/coastfm_tenerife-hi",
  },
  {
    name: "Coast Two",
    url: "https://str.pcradio.ru/coast_two-hi",
  },
  {
    name: "Coffee FM",
    url: "https://str.pcradio.ru/Vintazh_kafe-hi",
  },
  {
    name: "Comedy radio",
    url: "https://str.pcradio.ru/comedy_club-hi",
  },
  {
    name: "Conny",
    url: "https://str.pcradio.ru/conny_laut-hi",
  },
  {
    name: "Cool FM",
    url: "https://str.pcradio.ru/coolfm_hu-hi",
  },
  {
    name: "Cool FM - Goldie'S",
    url: "https://str.pcradio.ru/goldies_hu-hi",
  },
  {
    name: "Cool FM - kultX",
    url: "https://str.pcradio.ru/kultx_hu-hi",
  },
  {
    name: "Cool FM - Xbeat",
    url: "https://str.pcradio.ru/xbeat_hu-hi",
  },
  {
    name: "Cooltura FM",
    url: "https://str.pcradio.ru/cooltura_fm-hi",
  },
  {
    name: "Core Radio!",
    url: "https://str.pcradio.ru/coreradio_ru-hi",
  },
  {
    name: "Core-Mix",
    url: "https://str.pcradio.ru/laut_core_mix-hi",
  },
  {
    name: "Cork's 96FM",
    url: "https://str.pcradio.ru/corks_96fm-hi",
  },
  {
    name: "Corroded",
    url: "https://str.pcradio.ru/Corroded_swe-hi",
  },
  {
    name: "Cosmic Waves",
    url: "https://str.pcradio.ru/cosmicwaves_ru-hi",
  },
  {
    name: "Cosmic Waves - Chill",
    url: "https://str.pcradio.ru/cosmicwaves_chill-hi",
  },
  {
    name: "Cosmic Waves - Progressive",
    url: "https://str.pcradio.ru/cosmicwa_progress-hi",
  },
  {
    name: "8",
    url: "https://str.pcradio.ru/cosmosfm1038-hi",
  },
  {
    name: "Costa Del Mar - Chillout",
    url: "https://str.pcradio.ru/costadelmarradiocom-hi",
  },
  {
    name: "Costa Del Mar - Dance",
    url: "https://str.pcradio.ru/cdm_dance-hi",
  },
  {
    name: "Costa Del Mar - Deep House",
    url: "https://str.pcradio.ru/cdm_deephouse-hi",
  },
  {
    name: "Costa Del Mar - Funky",
    url: "https://str.pcradio.ru/cdm_funky-hi",
  },
  {
    name: "Costa Del Mar - Zen",
    url: "https://str.pcradio.ru/cdm_zen-hi",
  },
  {
    name: "Country 105",
    url: "https://str.pcradio.ru/country_105-hi",
  },
  {
    name: "Creedence",
    url: "https://str.pcradio.ru/Creedence-hi",
  },
  {
    name: "CRo (Оломоуц)",
    url: "https://str.pcradio.ru/rozhlas_cz_olo-hi",
  },
  {
    name: "CRo (Острава)",
    url: "https://str.pcradio.ru/rozhlas_cz_ost-hi",
  },
  {
    name: "CRo (Ческе-Будеёвице)",
    url: "https://str.pcradio.ru/rozhlas_cz_cb-hi",
  },
  {
    name: "CRo D-dur",
    url: "https://str.pcradio.ru/cro_ddur-hi",
  },
  {
    name: "CRo Dvojka",
    url: "https://str.pcradio.ru/cro_dvojka-hi",
  },
  {
    name: "CRo Jazz",
    url: "https://str.pcradio.ru/cro_jazz_cz-hi",
  },
  {
    name: "CRo Plus",
    url: "https://str.pcradio.ru/cro_plus-hi",
  },
  {
    name: "CRo Radio Junior",
    url: "https://str.pcradio.ru/cro_radiojunior_cz-hi",
  },
  {
    name: "CRo Radio Wave",
    url: "https://str.pcradio.ru/cro_radiowave-hi",
  },
  {
    name: "CRo Radiožurnál",
    url: "https://str.pcradio.ru/cro_radiozurnal-hi",
  },
  {
    name: "CRo Vltava",
    url: "https://str.pcradio.ru/cro_vltava-hi",
  },
  {
    name: "Crocus City Hall Radio",
    url: "https://str.pcradio.ru/crocus_city-hi",
  },
  {
    name: "Crooner Radio",
    url: "https://str.pcradio.ru/crooner_fr-hi",
  },
  {
    name: "Crooner Radio - Barbra Streisand",
    url: "https://str.pcradio.ru/crooner_barstr-hi",
  },
  {
    name: "Crooner Radio - Celine Dion",
    url: "https://str.pcradio.ru/crooner_celdi-hi",
  },
  {
    name: "Crooner Radio - Dean Martin",
    url: "https://str.pcradio.ru/crooner_deanm-hi",
  },
  {
    name: "Crooner Radio - Elvis Presley",
    url: "https://str.pcradio.ru/crooner_elvpres-hi",
  },
  {
    name: "Crooner Radio - Frank Sinatra",
    url: "https://str.pcradio.ru/crooner_frsin-hi",
  },
  {
    name: "Crooner Radio - Gentlemen Drivers",
    url: "https://str.pcradio.ru/crooner_gentdr-hi",
  },
  {
    name: "Crooner Radio - In Private",
    url: "https://str.pcradio.ru/crooner_inpri-hi",
  },
  {
    name: "Crooner Radio - Julio Iglesias",
    url: "https://str.pcradio.ru/crooner_juligl-hi",
  },
  {
    name: "Crooner Radio - Legends",
    url: "https://str.pcradio.ru/crooner_legends-hi",
  },
  {
    name: "Crooner Radio - Michael Buble",
    url: "https://str.pcradio.ru/crooner_mibu-hi",
  },
  {
    name: "Crooner Radio - Premium",
    url: "https://str.pcradio.ru/crooner_prem-hi",
  },
  {
    name: "Crucial Velocity",
    url: "https://str.pcradio.ru/crucial_velocity-hi",
  },
  {
    name: "CruiseOne",
    url: "https://str.pcradio.ru/cruiseone_radio-hi",
  },
  {
    name: "Cruisin' Oldies",
    url: "https://str.pcradio.ru/cruisin_oldies_laut-hi",
  },
  {
    name: "Crystal Radiostation",
    url: "https://str.pcradio.ru/crystal_radio-hi",
  },
  {
    name: "CT das Radio 96.9 FM",
    url: "https://str.pcradio.ru/ct_dasradio-hi",
  },
  {
    name: "Cyber Vybez Radio",
    url: "https://str.pcradio.ru/cyber_vybez-hi",
  },
  {
    name: "Damar Türk 34",
    url: "https://str.pcradio.ru/damar_turk34-hi",
  },
  {
    name: "Dance 100 Parar",
    url: "https://str.pcradio.ru/dance100parar-hi",
  },
  {
    name: "Dance Boom",
    url: "https://str.pcradio.ru/dance_boom-hi",
  },
  {
    name: "Dance FM Romania",
    url: "https://str.pcradio.ru/dancefm_ro-hi",
  },
  {
    name: "Dance Radio (Амстердам)",
    url: "https://str.pcradio.ru/danceradio_in-hi",
  },
  {
    name: "Dance Radio (Прага)",
    url: "https://str.pcradio.ru/danceradio_cz-hi",
  },
  {
    name: "Dance Wave Retro!",
    url: "https://str.pcradio.ru/dance_wave_retro-hi",
  },
  {
    name: "Dance Wave!",
    url: "https://str.pcradio.ru/dance_wave-hi",
  },
  {
    name: "Dancefloor Radio",
    url: "https://str.pcradio.ru/dancefloor_vip-hi",
  },
  {
    name: "Danko Radio (MR6)",
    url: "https://str.pcradio.ru/danko_radio-hi",
  },
  {
    name: "Darik Radio",
    url: "https://str.pcradio.ru/darikradio_bg-hi",
  },
  {
    name: "Dark Edge Radio",
    url: "https://str.pcradio.ru/darkedge_ro-hi",
  },
  {
    name: "Dark Radio",
    url: "https://str.pcradio.ru/darkradio_de-hi",
  },
  {
    name: "DarkClubRadio",
    url: "https://str.pcradio.ru/dark_club_radio-hi",
  },
  {
    name: "Darren Hayes",
    url: "https://str.pcradio.ru/Darren_Hayes-hi",
  },
  {
    name: "Das Durchgeknallte Radio",
    url: "https://str.pcradio.ru/durchgeknallte_radio-hi",
  },
  {
    name: "Das Inselradio Mallorca 95.8 FM",
    url: "https://str.pcradio.ru/das_inselradio_958-hi",
  },
  {
    name: "Das Radio der von Neil Young Getöteten",
    url: "https://str.pcradio.ru/dasradio_nyoung-hi",
  },
  {
    name: "DASDING",
    url: "https://str.pcradio.ru/dasding_de-hi",
  },
  {
    name: "David Guetta",
    url: "https://str.pcradio.ru/David_Guetta-hi",
  },
  {
    name: "Davidzon Radio",
    url: "https://str.pcradio.ru/davidzon-hi",
  },
  {
    name: "db962",
    url: "https://str.pcradio.ru/db962_nl-hi",
  },
  {
    name: "DDBY",
    url: "https://str.pcradio.ru/DDBY-hi",
  },
  {
    name: "Deadmau5",
    url: "https://str.pcradio.ru/deadmau5-hi",
  },
  {
    name: "Dean Martin",
    url: "https://str.pcradio.ru/Dean_Martin-hi",
  },
  {
    name: "Death FM",
    url: "https://str.pcradio.ru/death_fm-hi",
  },
  {
    name: "Deathstars",
    url: "https://str.pcradio.ru/Deathstars_swe-hi",
  },
  {
    name: "DeeGay 1 Pop and Dance",
    url: "https://str.pcradio.ru/deegay_popd-hi",
  },
  {
    name: "DeeGay 2 Classic",
    url: "https://str.pcradio.ru/deegay_classic-hi",
  },
  {
    name: "DeeGay 3 Club",
    url: "https://str.pcradio.ru/deegay_club-hi",
  },
  {
    name: "Deep Box",
    url: "https://str.pcradio.ru/deep_box-hi",
  },
  {
    name: "Deep Forest",
    url: "https://str.pcradio.ru/Deep_forest-hi",
  },
  {
    name: "Deep House",
    url: "https://str.pcradio.ru/deep_house-hi",
  },
  {
    name: "Deep House Ibiza",
    url: "https://str.pcradio.ru/deephouse_ibiza-hi",
  },
  {
    name: "Deep Mix Moscow Radio",
    url: "https://str.pcradio.ru/deepmix_ru-hi",
  },
  {
    name: "Deep Purple",
    url: "https://str.pcradio.ru/Deep_purple-hi",
  },
  {
    name: "Deep Radio",
    url: "https://str.pcradio.ru/deep_radioo-hi",
  },
  {
    name: "Deep Stream",
    url: "https://str.pcradio.ru/deep_stream-hi",
  },
  {
    name: "Deep Vocal House",
    url: "https://str.pcradio.ru/deep_voc_house-hi",
  },
  {
    name: "Deepa.Net FM",
    url: "https://str.pcradio.ru/deepanet_fm-hi",
  },
  {
    name: "DeepFM",
    url: "https://str.pcradio.ru/deepfm_nl-hi",
  },
  {
    name: "DeepPort",
    url: "https://str.pcradio.ru/deepport_radio-hi",
  },
  {
    name: "Defjay",
    url: "https://str.pcradio.ru/defjay_com-hi",
  },
  {
    name: "Deform",
    url: "https://str.pcradio.ru/deform-hi",
  },
  {
    name: "Delta Radio - Alternative",
    url: "https://str.pcradio.ru/deltaradio_alternative-hi",
  },
  {
    name: "Delta Radio - Der beste RockPop reloaded",
    url: "https://str.pcradio.ru/delta_bestrockpop-hi",
  },
  {
    name: "Delta Radio - Deutsch",
    url: "https://str.pcradio.ru/delta_deutsch-hi",
  },
  {
    name: "Delta Radio - Grunge",
    url: "https://str.pcradio.ru/deltaradio_grunge-hi",
  },
  {
    name: "Delta Radio - Hard Rock / Heavy Metal",
    url: "https://str.pcradio.ru/deltaradio_hard-hi",
  },
  {
    name: "Delta Radio - Hip Hop",
    url: "https://str.pcradio.ru/delta_hiphop-hi",
  },
  {
    name: "Delta Radio - Indie",
    url: "https://str.pcradio.ru/deltaradio_indie-hi",
  },
  {
    name: "Delta Radio - Top 100 Deutsch Rap",
    url: "https://str.pcradio.ru/delta_deu100rap-hi",
  },
  {
    name: "Delta Radio - Unplugged",
    url: "https://str.pcradio.ru/delta_unplugged-hi",
  },
  {
    name: "Delta Radio Live",
    url: "https://str.pcradio.ru/deltaradio_de-hi",
  },
  {
    name: "Demi Lovato",
    url: "https://str.pcradio.ru/Demi_Lovato-hi",
  },
  {
    name: "Demon Hunter",
    url: "https://str.pcradio.ru/Demon_hunter_usa-hi",
  },
  {
    name: "Den Tunge Radio",
    url: "https://str.pcradio.ru/den_tunge_radio-hi",
  },
  {
    name: "Dendy-Collection",
    url: "https://str.pcradio.ru/dendy_collection-hi",
  },
  {
    name: "Depeche Mode",
    url: "https://str.pcradio.ru/Depeche_Mode-hi",
  },
  {
    name: "detektor.fm - Musik-Stream",
    url: "https://str.pcradio.ru/detektor_musik-hi",
  },
  {
    name: "detektor.fm - Wort-Stream",
    url: "https://str.pcradio.ru/detektor_wort-hi",
  },
  {
    name: "Deutsche Welle (English)",
    url: "https://str.pcradio.ru/deutsche_welle_eng-hi",
  },
  {
    name: "Deutschlandfunk",
    url: "https://str.pcradio.ru/deutschlandfunk-hi",
  },
  {
    name: "Deutschlandfunk Nova (DRadio Wissen)",
    url: "https://str.pcradio.ru/dradio_wissen-hi",
  },
  {
    name: "Deutschlandradio Kultur",
    url: "https://str.pcradio.ru/deutschlandradio_kultur-hi",
  },
  {
    name: "Deutschrock-Plus",
    url: "https://str.pcradio.ru/deutschrockplus_laut-hi",
  },
  {
    name: "Deutschrock-Zentrale",
    url: "https://str.pcradio.ru/deurock_zentr-hi",
  },
  {
    name: "DFM 101.2 (Москва)",
    url: "https://str.pcradio.ru/dfm_moscow-hi",
  },
  {
    name: "1 FM (Орск)",
    url: "https://str.pcradio.ru/dfm_orsk-hi",
  },
  {
    name: "DFM 104.7 (Казань)",
    url: "https://str.pcradio.ru/dfm_kazan-hi",
  },
  {
    name: "DFM 106.0 FM (Краснодар)",
    url: "https://str.pcradio.ru/dfm_krasnodar-hi",
  },
  {
    name: "2 (Таллинн)",
    url: "https://str.pcradio.ru/dfm_tallinn-hi",
  },
  {
    name: "DFM Club",
    url: "https://str.pcradio.ru/dfm_club-hi",
  },
  {
    name: "DFM Deep",
    url: "https://str.pcradio.ru/dfm_deep-hi",
  },
  {
    name: "DFM Russian Dance",
    url: "https://str.pcradio.ru/dfm_russian_dance-hi",
  },
  {
    name: "DFM Trap",
    url: "https://str.pcradio.ru/dfm_trap-hi",
  },
  {
    name: "DFM Дискач 90-х",
    url: "https://str.pcradio.ru/dfm_diskach90s-hi",
  },
  {
    name: "Dhol Radio",
    url: "https://str.pcradio.ru/dhol_radio-hi",
  },
  {
    name: "Diabolus",
    url: "https://str.pcradio.ru/radio_diabolus-hi",
  },
  {
    name: "Dido",
    url: "https://str.pcradio.ru/Dido-hi",
  },
  {
    name: "Die Antenne - Südtirols",
    url: "https://str.pcradio.ru/antenne_suedtir-hi",
  },
  {
    name: "Die Antwoord",
    url: "https://str.pcradio.ru/die_antwoord-hi",
  },
  {
    name: "Die Neue 107.7 - 80er",
    url: "https://str.pcradio.ru/dieneue_1077_80er-hi",
  },
  {
    name: "Die Neue 107.7 - Bester Rock und Pop",
    url: "https://str.pcradio.ru/dieneue_1077-hi",
  },
  {
    name: "Die Neue 107.7 - Oldies",
    url: "https://str.pcradio.ru/dieneue_1077_oldies-hi",
  },
  {
    name: "Die Neue 107.7 - Rock",
    url: "https://str.pcradio.ru/dieneue_1077_rock-hi",
  },
  {
    name: "Die Neue 107.7 - Spass",
    url: "https://str.pcradio.ru/dieneue_1077_spass-hi",
  },
  {
    name: "Die neue Welle",
    url: "https://str.pcradio.ru/die_neue_welle-hi",
  },
  {
    name: "Diesel FM - Techno",
    url: "https://str.pcradio.ru/dieselfm_techno-hi",
  },
  {
    name: "Diesel FM - Trance and Progressive",
    url: "https://str.pcradio.ru/dieselfm_trprogr-hi",
  },
  {
    name: "Different Drumz DnB Radio",
    url: "https://str.pcradio.ru/different_drumz-hi",
  },
  {
    name: "Different Radio 747 AM",
    url: "https://str.pcradio.ru/different_747-hi",
  },
  {
    name: "Digi FM",
    url: "https://str.pcradio.ru/digifm_ro-hi",
  },
  {
    name: "Digital Impulse (DI) - Ambient and Chillout",
    url: "https://str.pcradio.ru/di_radio_ambch-hi",
  },
  {
    name: "Digital Impulse (DI) - Ambient Fantasy",
    url: "https://str.pcradio.ru/di_radio_ambfa-hi",
  },
  {
    name: "Digital Impulse (DI) - Astra Trance",
    url: "https://str.pcradio.ru/di_radio_astratr-hi",
  },
  {
    name: "Digital Impulse (DI) - Emacore Trance",
    url: "https://str.pcradio.ru/di_radio_emacoretr-hi",
  },
  {
    name: "Digital Impulse (DI) - Global Trance",
    url: "https://str.pcradio.ru/di_radio_glotrance-hi",
  },
  {
    name: "Digital Impulse (DI) - Ori Uplift Trance",
    url: "https://str.pcradio.ru/di_radio_oriuplift-hi",
  },
  {
    name: "Digital Impulse (DI) - Psychedelic Tribe",
    url: "https://str.pcradio.ru/di_radio_psytrtr-hi",
  },
  {
    name: "diis Radio",
    url: "https://str.pcradio.ru/diisradio_ch-hi",
  },
  {
    name: "DilemaRadio",
    url: "https://str.pcradio.ru/dilema_radio-hi",
  },
  {
    name: "Dimensione Relax",
    url: "https://str.pcradio.ru/dimensione_relax-hi",
  },
  {
    name: "Dinamo FM Caffe",
    url: "https://str.pcradio.ru/dinamo_fm_caffe-hi",
  },
  {
    name: "Dinamo FM Deep",
    url: "https://str.pcradio.ru/dinamo_fm_deep-hi",
  },
  {
    name: "Dinamo FM Discotheque",
    url: "https://str.pcradio.ru/dinamo_fm_disco-hi",
  },
  {
    name: "Dinamo FM Legacy",
    url: "https://str.pcradio.ru/dinamo_fm_legacy-hi",
  },
  {
    name: "Dinamo FM Locodyno",
    url: "https://str.pcradio.ru/dinamo_fm_loco-hi",
  },
  {
    name: "Dinamo FM Sleep",
    url: "https://str.pcradio.ru/dinamo_fm_sleep-hi",
  },
  {
    name: "Dinamo FM Smog",
    url: "https://str.pcradio.ru/dinamo_fm_smog-hi",
  },
  {
    name: "Dinom Dánom mulatós rádió",
    url: "https://str.pcradio.ru/dinom_danom-hi",
  },
  {
    name: "Dio",
    url: "https://str.pcradio.ru/dio-hi",
  },
  {
    name: "Dire Straits",
    url: "https://str.pcradio.ru/dire_straits-hi",
  },
  {
    name: "Disco Power",
    url: "https://str.pcradio.ru/disco_power-hi",
  },
  {
    name: "Discomania Radio",
    url: "https://str.pcradio.ru/discomaniaradio-hi",
  },
  {
    name: "Discoradio",
    url: "https://str.pcradio.ru/discoradio_it-hi",
  },
  {
    name: "Discover Trance",
    url: "https://str.pcradio.ru/discovertrance_com-hi",
  },
  {
    name: "Dismuke",
    url: "https://str.pcradio.ru/dismuke_radio-hi",
  },
  {
    name: "DJ BoBo",
    url: "https://str.pcradio.ru/DJ_BoBo-hi",
  },
  {
    name: "DJ Shaggy Venezuela",
    url: "https://str.pcradio.ru/djshaggy_ve-hi",
  },
  {
    name: "DJFM",
    url: "https://str.pcradio.ru/djfm_ua-hi",
  },
  {
    name: "DMX",
    url: "https://str.pcradio.ru/DMX-hi",
  },
  {
    name: "DNB FM",
    url: "https://str.pcradio.ru/dnbfm_ru-hi",
  },
  {
    name: "DNBRadio - Darkstep",
    url: "https://str.pcradio.ru/dnbradio_darkstep-hi",
  },
  {
    name: "DNC Radio",
    url: "https://str.pcradio.ru/dnc_radio-hi",
  },
  {
    name: "Dobré rádio",
    url: "https://str.pcradio.ru/dobreradio_sk-hi",
  },
  {
    name: "Doc Show Coast 2 Coast",
    url: "https://str.pcradio.ru/doc_2_show-hi",
  },
  {
    name: "Dokumente und Debatten",
    url: "https://str.pcradio.ru/deutsch_dok_debatten-hi",
  },
  {
    name: "Dolfijn FM",
    url: "https://str.pcradio.ru/dolfijn_fm-hi",
  },
  {
    name: "Domradio",
    url: "https://str.pcradio.ru/domradio_de-hi",
  },
  {
    name: "Donat FM - Зарубежные хиты",
    url: "https://str.pcradio.ru/donat_whits-hi",
  },
  {
    name: "Donat FM - Музыка СССР",
    url: "https://str.pcradio.ru/donat_ussr-hi",
  },
  {
    name: "Donat FM - Русская поп-музыка",
    url: "https://str.pcradio.ru/donat_rupop-hi",
  },
  {
    name: "Donat FM - Русский Рок",
    url: "https://str.pcradio.ru/donat_rusrock-hi",
  },
  {
    name: "Donat FM - Шансон",
    url: "https://str.pcradio.ru/donat_shanson-hi",
  },
  {
    name: "Donau 3 FM",
    url: "https://str.pcradio.ru/donau_3fm-hi",
  },
  {
    name: "Dost FM",
    url: "https://str.pcradio.ru/dostfm_com-hi",
  },
  {
    name: "Downtown Radio",
    url: "https://str.pcradio.ru/downtown_uk-hi",
  },
  {
    name: "DR P1",
    url: "https://str.pcradio.ru/dr_dk_p1-hi",
  },
  {
    name: "DR P2",
    url: "https://str.pcradio.ru/dr_dk_p2-hi",
  },
  {
    name: "DR P3",
    url: "https://str.pcradio.ru/dr_dk_p3-hi",
  },
  {
    name: "DR P4 Копенгаген",
    url: "https://str.pcradio.ru/dr_dk_p4kbh-hi",
  },
  {
    name: "DR P5",
    url: "https://str.pcradio.ru/dr_dk_p5-hi",
  },
  {
    name: "DR P6 Beat",
    url: "https://str.pcradio.ru/dr_dk_p6beat-hi",
  },
  {
    name: "DR P8 Jazz",
    url: "https://str.pcradio.ru/dr_dk_p8jazz-hi",
  },
  {
    name: "Dr. Alban",
    url: "https://str.pcradio.ru/Dr_Alban-hi",
  },
  {
    name: "Dragon Ash",
    url: "https://str.pcradio.ru/Dragon_Ash-hi",
  },
  {
    name: "Dream Радио",
    url: "https://str.pcradio.ru/Dream-hi",
  },
  {
    name: "8 FM",
    url: "https://str.pcradio.ru/dromosfm_gr-hi",
  },
  {
    name: "Drop The Bass",
    url: "https://str.pcradio.ru/drop_the_bass-hi",
  },
  {
    name: "Drum'n'Bass",
    url: "https://str.pcradio.ru/Drum_n_Bass-hi",
  },
  {
    name: "DrumandBass FM",
    url: "https://str.pcradio.ru/drumandbass_fm-hi",
  },
  {
    name: "Drums.ro Radio",
    url: "https://str.pcradio.ru/drums_ro-hi",
  },
  {
    name: "Dubbase FM",
    url: "https://str.pcradio.ru/dubbase_fm-hi",
  },
  {
    name: "Dubstep Light Radio",
    url: "https://str.pcradio.ru/dubstep_light-hi",
  },
  {
    name: "Duk FM",
    url: "https://str.pcradio.ru/duk_fm-hi",
  },
  {
    name: "Duna World Radio (MR)",
    url: "https://str.pcradio.ru/duna_world-hi",
  },
  {
    name: "Dupleks",
    url: "https://str.pcradio.ru/Dupleks-hi",
  },
  {
    name: "Duplex Pop FM",
    url: "https://str.pcradio.ru/Duplex_pop_fm-hi",
  },
  {
    name: "DWG Радио Слово",
    url: "https://str.pcradio.ru/dwg_radioslovo-hi",
  },
  {
    name: "DXFM Radio",
    url: "https://str.pcradio.ru/dxfm_com_ua-hi",
  },
  {
    name: "Eagle Eye Cherry",
    url: "https://str.pcradio.ru/Eagle_Eye_Cherry-hi",
  },
  {
    name: "Easy Hits Florida",
    url: "https://str.pcradio.ru/easy_hits_flo-hi",
  },
  {
    name: "Eco 99 FM",
    url: "https://str.pcradio.ru/eco99_fm-hi",
  },
  {
    name: "Edem UKV",
    url: "https://str.pcradio.ru/edem_ukv-hi",
  },
  {
    name: "Edenex",
    url: "https://str.pcradio.ru/edenex_es-hi",
  },
  {
    name: "EDM Radio",
    url: "https://str.pcradio.ru/edmradioru-hi",
  },
  {
    name: "egoFLASH",
    url: "https://str.pcradio.ru/egofm_flash-hi",
  },
  {
    name: "egoFM 50fresh",
    url: "https://str.pcradio.ru/egofm_50fresh-hi",
  },
  {
    name: "egoFM 50fresh Elektro",
    url: "https://str.pcradio.ru/egofm_50elektro-hi",
  },
  {
    name: "egoFM 50fresh RAP",
    url: "https://str.pcradio.ru/egofm_50rap-hi",
  },
  {
    name: "egoFM Live",
    url: "https://str.pcradio.ru/egofm_live-hi",
  },
  {
    name: "egoFM SEEWALD",
    url: "https://str.pcradio.ru/egofm_seewald-hi",
  },
  {
    name: "egoPURE",
    url: "https://str.pcradio.ru/egofm_pure-hi",
  },
  {
    name: "egoRAP",
    url: "https://str.pcradio.ru/egofm_rap-hi",
  },
  {
    name: "egoRIFF",
    url: "https://str.pcradio.ru/egofm_riff-hi",
  },
  {
    name: "egoSOUL",
    url: "https://str.pcradio.ru/egofm_soul-hi",
  },
  {
    name: "Eingdoi Radio Thailand",
    url: "https://str.pcradio.ru/eingdoi_thai-hi",
  },
  {
    name: "Electro Dreams",
    url: "https://str.pcradio.ru/Electrodreams-hi",
  },
  {
    name: "Electro Radio",
    url: "https://str.pcradio.ru/electroradio_fm-hi",
  },
  {
    name: "Electro Swing Revolution Radio",
    url: "https://str.pcradio.ru/electroswingradio-hi",
  },
  {
    name: "Electromusic Radio",
    url: "https://str.pcradio.ru/electromusic_radio-hi",
  },
  {
    name: "Electrozombies",
    url: "https://str.pcradio.ru/electrozombies_com-hi",
  },
  {
    name: "Elton John",
    url: "https://str.pcradio.ru/Elton_John-hi",
  },
  {
    name: "Elvis Presley",
    url: "https://str.pcradio.ru/Elvis_Presley-hi",
  },
  {
    name: "Emergency FM DNB",
    url: "https://str.pcradio.ru/emergencyfm_dnb-hi",
  },
  {
    name: "Eminem",
    url: "https://str.pcradio.ru/Eminem-hi",
  },
  {
    name: "Emma Shapplin",
    url: "https://str.pcradio.ru/Emma_Shapplin-hi",
  },
  {
    name: "EndTime Prayer Radio",
    url: "https://str.pcradio.ru/endtime_prayer-hi",
  },
  {
    name: "Energy 98",
    url: "https://str.pcradio.ru/energy981com-hi",
  },
  {
    name: "Energy Acoustic",
    url: "https://str.pcradio.ru/nrj_de_acoustic-hi",
  },
  {
    name: "Energy Berlin",
    url: "https://str.pcradio.ru/nrj_berlin-hi",
  },
  {
    name: "Energy Bremen",
    url: "https://str.pcradio.ru/nrj_bremen-hi",
  },
  {
    name: "Energy Classic Rap US",
    url: "https://str.pcradio.ru/nrj_classrap_us-hi",
  },
  {
    name: "Energy Clubbin'",
    url: "https://str.pcradio.ru/nrj_de_clubbin-hi",
  },
  {
    name: "Energy Dance",
    url: "https://str.pcradio.ru/nrj_de_dance-hi",
  },
  {
    name: "Energy Fitness",
    url: "https://str.pcradio.ru/nrj_de_fitness-hi",
  },
  {
    name: "Energy FM",
    url: "https://str.pcradio.ru/energyfm_net-hi",
  },
  {
    name: "Energy FM 100.4",
    url: "https://str.pcradio.ru/energy1004_by-hi",
  },
  {
    name: "Energy FM 102.2",
    url: "https://str.pcradio.ru/energyfmkz-hi",
  },
  {
    name: "Energy FM Australia",
    url: "https://str.pcradio.ru/energyfm_com_au-hi",
  },
  {
    name: "Energy Hamburg",
    url: "https://str.pcradio.ru/nrj_hamburg-hi",
  },
  {
    name: "Energy Hits",
    url: "https://str.pcradio.ru/nrj_de_hits-hi",
  },
  {
    name: "Energy Latino",
    url: "https://str.pcradio.ru/nrj_de_latino-hi",
  },
  {
    name: "Energy Lounge",
    url: "https://str.pcradio.ru/nrj_de_lounge-hi",
  },
  {
    name: "Energy Love",
    url: "https://str.pcradio.ru/nrj_de_love-hi",
  },
  {
    name: "Energy Mastermix",
    url: "https://str.pcradio.ru/nrj_de_mastermix-hi",
  },
  {
    name: "Energy München",
    url: "https://str.pcradio.ru/nrj_munchen-hi",
  },
  {
    name: "Energy Nürnberg",
    url: "https://str.pcradio.ru/nrj_nurnberg-hi",
  },
  {
    name: "Energy Party Hits",
    url: "https://str.pcradio.ru/nrj_de_party-hi",
  },
  {
    name: "Energy Pop",
    url: "https://str.pcradio.ru/nrj_de_pop-hi",
  },
  {
    name: "Energy Rap US",
    url: "https://str.pcradio.ru/nrj_de_rapus-hi",
  },
  {
    name: "Energy Relax",
    url: "https://str.pcradio.ru/nrj_de_relax-hi",
  },
  {
    name: "Energy RnB",
    url: "https://str.pcradio.ru/nrj_de_rnb-hi",
  },
  {
    name: "Energy Rock",
    url: "https://str.pcradio.ru/nrj_de_rock-hi",
  },
  {
    name: "Energy Romantic",
    url: "https://str.pcradio.ru/nrj_de_romantic-hi",
  },
  {
    name: "Energy Sachsen",
    url: "https://str.pcradio.ru/nrj_sachsen-hi",
  },
  {
    name: "Energy Stuttgart",
    url: "https://str.pcradio.ru/nrj_stutgart-hi",
  },
  {
    name: "Energy Urban",
    url: "https://str.pcradio.ru/nrj_de_urban-hi",
  },
  {
    name: "Energy Web Radio",
    url: "https://str.pcradio.ru/energywebradio_it-hi",
  },
  {
    name: "Enigma",
    url: "https://str.pcradio.ru/Enigma-hi",
  },
  {
    name: "Enigmatic station I",
    url: "https://str.pcradio.ru/enigmatic_su1-hi",
  },
  {
    name: "Enigmatic station III",
    url: "https://str.pcradio.ru/enigmatic_su3-hi",
  },
  {
    name: "Ennio Morricone",
    url: "https://str.pcradio.ru/Ennio_Morricone-hi",
  },
  {
    name: "Enrique Iglesias",
    url: "https://str.pcradio.ru/Enrique_Iglesias-hi",
  },
  {
    name: "Enya",
    url: "https://str.pcradio.ru/enya-hi",
  },
  {
    name: "Epic Rock Radio (ERR)",
    url: "https://str.pcradio.ru/epic_rock_radio-hi",
  },
  {
    name: "Era",
    url: "https://str.pcradio.ru/Era-hi",
  },
  {
    name: "ERA 3 Trito (Τριτο προγραμμα)",
    url: "https://str.pcradio.ru/trito_programa-hi",
  },
  {
    name: "ERA Deftero (Δευτερο προγραμμα)",
    url: "https://str.pcradio.ru/deftero_programa-hi",
  },
  {
    name: "ERA Proto (Πρωτο προγραμμα)",
    url: "https://str.pcradio.ru/proto_programa-hi",
  },
  {
    name: "Erasure",
    url: "https://str.pcradio.ru/erasure-hi",
  },
  {
    name: "Erdély FM",
    url: "https://str.pcradio.ru/erdelyfm_ro-hi",
  },
  {
    name: "ERF Plus",
    url: "https://str.pcradio.ru/erf_plus-hi",
  },
  {
    name: "ERF Pop",
    url: "https://str.pcradio.ru/erf_pop-hi",
  },
  {
    name: "ERR Klassikaraadio",
    url: "https://str.pcradio.ru/err_klassika-hi",
  },
  {
    name: "ERR Raadio 2",
    url: "https://str.pcradio.ru/err_raadio2-hi",
  },
  {
    name: "ERR Raadio 4",
    url: "https://str.pcradio.ru/raadio_4_ee-hi",
  },
  {
    name: "ERR Raadio Tallinn",
    url: "https://str.pcradio.ru/err_tallinn-hi",
  },
  {
    name: "ERR Vikerraadio",
    url: "https://str.pcradio.ru/err_vikerraadio-hi",
  },
  {
    name: "esRadio (Мадрид)",
    url: "https://str.pcradio.ru/esradio_madrid-hi",
  },
  {
    name: "ETN.FM Trance",
    url: "https://str.pcradio.ru/etnfm_trance-hi",
  },
  {
    name: "Eurodance 90’s - Dance anos 90",
    url: "https://str.pcradio.ru/danceanos90_br-hi",
  },
  {
    name: "EuroDance Hit",
    url: "https://str.pcradio.ru/EuroDance-hi",
  },
  {
    name: "Europa 2",
    url: "https://str.pcradio.ru/europa2_sk-hi",
  },
  {
    name: "Europa FM (Бухарест)",
    url: "https://str.pcradio.ru/europafm_ro-hi",
  },
  {
    name: "EuropaRussia",
    url: "https://str.pcradio.ru/europarussia_ru-hi",
  },
  {
    name: "Europe 1",
    url: "https://str.pcradio.ru/europe1_fr-hi",
  },
  {
    name: "European Hit Radio (EHR)",
    url: "https://str.pcradio.ru/ehr_riga-hi",
  },
  {
    name: "Euroradio FM - Alternative",
    url: "https://str.pcradio.ru/euroradio_fm-hi",
  },
  {
    name: "Euroradio FM - Soft Rock",
    url: "https://str.pcradio.ru/euroradio_soro-hi",
  },
  {
    name: "Euroradio FM - Толькі BY",
    url: "https://str.pcradio.ru/euroradio_by-hi",
  },
  {
    name: "Eurovision Radio",
    url: "https://str.pcradio.ru/Eurovision-hi",
  },
  {
    name: "Evanescence",
    url: "https://str.pcradio.ru/Evanescence-hi",
  },
  {
    name: "Evosonic Radio",
    url: "https://str.pcradio.ru/evo_sonic-hi",
  },
  {
    name: "Evropa 2 (Прага)",
    url: "https://str.pcradio.ru/evropa2_praga-hi",
  },
  {
    name: "EWTN Radio",
    url: "https://str.pcradio.ru/ewtn_radio-hi",
  },
  {
    name: "Excite Bit",
    url: "https://str.pcradio.ru/excitebit_vgm-hi",
  },
  {
    name: "Extra-Radio 88.0",
    url: "https://str.pcradio.ru/extra_880-hi",
  },
  {
    name: "Ez az a nap!",
    url: "https://str.pcradio.ru/ezazanap_hu-hi",
  },
  {
    name: "Faaz",
    url: "https://str.pcradio.ru/faaz_net-hi",
  },
  {
    name: "Faithless",
    url: "https://str.pcradio.ru/faithless-hi",
  },
  {
    name: "Fajn Rádio",
    url: "https://str.pcradio.ru/fajnradio_cz-hi",
  },
  {
    name: "Fantasy Bayern",
    url: "https://str.pcradio.ru/fantasy_bayern-hi",
  },
  {
    name: "Fantasy Radio",
    url: "https://str.pcradio.ru/fantasy_radio-hi",
  },
  {
    name: "Fashion Радио",
    url: "https://str.pcradio.ru/Fashion-hi",
  },
  {
    name: "Fatboy Slim",
    url: "https://str.pcradio.ru/Fatboy_Slim-hi",
  },
  {
    name: "Felix Radio",
    url: "https://str.pcradio.ru/felix_myrh-hi",
  },
  {
    name: "Fenomen Maksimum Hit Muzik",
    url: "https://str.pcradio.ru/fenomenturk_com-hi",
  },
  {
    name: "FFH BrandNeu",
    url: "https://str.pcradio.ru/ffh_brand_neu-hi",
  },
  {
    name: "FFH Die 80er",
    url: "https://str.pcradio.ru/ffh_80er-hi",
  },
  {
    name: "FFH Eurodance",
    url: "https://str.pcradio.ru/ffh_eurodance-hi",
  },
  {
    name: "FFH Hit Radio",
    url: "https://str.pcradio.ru/ffh_hit_radio-hi",
  },
  {
    name: "FFH iTunes Top40",
    url: "https://str.pcradio.ru/ffh_itunes_top40-hi",
  },
  {
    name: "FFH Just 90s",
    url: "https://str.pcradio.ru/ffh_90s-hi",
  },
  {
    name: "FFH Leider Geil",
    url: "https://str.pcradio.ru/ffh_leider_geil-hi",
  },
  {
    name: "FFH Lounge",
    url: "https://str.pcradio.ru/ffh_lounge-hi",
  },
  {
    name: "FFH Party",
    url: "https://str.pcradio.ru/ffh_party-hi",
  },
  {
    name: "FFH Rock",
    url: "https://str.pcradio.ru/ffh_rock-hi",
  },
  {
    name: "FFH SchlagerKult",
    url: "https://str.pcradio.ru/ffh_kult_schlager-hi",
  },
  {
    name: "FFH Soundtrack",
    url: "https://str.pcradio.ru/ffh_soundtrack-hi",
  },
  {
    name: "FFH WeihnachtsRadio",
    url: "https://str.pcradio.ru/ffh_xmas-hi",
  },
  {
    name: "Fiction Junction",
    url: "https://str.pcradio.ru/Fiction_Junction-hi",
  },
  {
    name: "Fiesta FM 87.6 (Мальорка)",
    url: "https://str.pcradio.ru/fiesta_mallorca-hi",
  },
  {
    name: "Fip",
    url: "https://str.pcradio.ru/fip_live-hi",
  },
  {
    name: "Fip autour du Groove",
    url: "https://str.pcradio.ru/fip_groove-hi",
  },
  {
    name: "Fip autour du Jazz",
    url: "https://str.pcradio.ru/fip_jazz-hi",
  },
  {
    name: "Fip autour du Monde",
    url: "https://str.pcradio.ru/fip_world-hi",
  },
  {
    name: "Fip autour du Rock",
    url: "https://str.pcradio.ru/fip_rock-hi",
  },
  {
    name: "Fip Reggae",
    url: "https://str.pcradio.ru/fip_reggae-hi",
  },
  {
    name: "Fip Tout nouveau",
    url: "https://str.pcradio.ru/fip_new-hi",
  },
  {
    name: "FitDance",
    url: "https://str.pcradio.ru/fit_dance_pcradio-hi",
  },
  {
    name: "Five Finger Death Punch",
    url: "https://str.pcradio.ru/five_finger_death_punch-hi",
  },
  {
    name: "Flaix FM",
    url: "https://str.pcradio.ru/flaixfm_cat-hi",
  },
  {
    name: "Flashback 91.9 FM",
    url: "https://str.pcradio.ru/flashback_919-hi",
  },
  {
    name: "Fly FM",
    url: "https://str.pcradio.ru/flyfm_net-hi",
  },
  {
    name: "FM 4 us",
    url: "https://str.pcradio.ru/fm_4us-hi",
  },
  {
    name: "FM Klassics",
    url: "https://str.pcradio.ru/fm_klassics-hi",
  },
  {
    name: "FM Галичина",
    url: "https://str.pcradio.ru/fm_galychyna-hi",
  },
  {
    name: "FM1 Nord",
    url: "https://str.pcradio.ru/fm1_nord-hi",
  },
  {
    name: "FM1 Sued",
    url: "https://str.pcradio.ru/fm1_sued-hi",
  },
  {
    name: "FM957",
    url: "https://str.pcradio.ru/fm957_is-hi",
  },
  {
    name: "Fomenko Fake Radio",
    url: "https://str.pcradio.ru/fomenko_fake-hi",
  },
  {
    name: "Foreigner",
    url: "https://str.pcradio.ru/Foreigner-hi",
  },
  {
    name: "Foroactivo Polymarchs Radio",
    url: "https://str.pcradio.ru/foro_polymarch-hi",
  },
  {
    name: "Fox 91.4 FM",
    url: "https://str.pcradio.ru/fox_914-hi",
  },
  {
    name: "Fox Radio 97.9 FM",
    url: "https://str.pcradio.ru/foxradio_rs-hi",
  },
  {
    name: "France Bleu Elsass",
    url: "https://str.pcradio.ru/francebleu_els-hi",
  },
  {
    name: "France Culture",
    url: "https://str.pcradio.ru/franceculture_fr-hi",
  },
  {
    name: "France Inter",
    url: "https://str.pcradio.ru/france_inter-hi",
  },
  {
    name: "France Musique",
    url: "https://str.pcradio.ru/francemusique_fr-hi",
  },
  {
    name: "Franceinfo",
    url: "https://str.pcradio.ru/franceinfo-hi",
  },
  {
    name: "Frank Duval",
    url: "https://str.pcradio.ru/Frank_Duval-hi",
  },
  {
    name: "Frank Sinatra",
    url: "https://str.pcradio.ru/frank_sinatra-hi",
  },
  {
    name: "Fraszka UJK",
    url: "https://str.pcradio.ru/fraszka_radio-hi",
  },
  {
    name: "Freak Radio 18+",
    url: "https://str.pcradio.ru/freak_radio-hi",
  },
  {
    name: "Freak31",
    url: "https://str.pcradio.ru/freak31_com-hi",
  },
  {
    name: "Free Americana",
    url: "https://str.pcradio.ru/freeamericana_com-hi",
  },
  {
    name: "Free FM (Коломбо)",
    url: "https://str.pcradio.ru/freefm_lk-hi",
  },
  {
    name: "Free Spirit",
    url: "https://str.pcradio.ru/Free_spirit_fin-hi",
  },
  {
    name: "Free Time Radio",
    url: "https://str.pcradio.ru/free_time_radio-hi",
  },
  {
    name: "Freedom",
    url: "https://str.pcradio.ru/freedom_radio-hi",
  },
  {
    name: "Freelance FM",
    url: "https://str.pcradio.ru/freelance_fm-hi",
  },
  {
    name: "Freies Radio Freudenstadt",
    url: "https://str.pcradio.ru/freies_freudenstadt-hi",
  },
  {
    name: "Freies Radio für Stuttgart (FRS)",
    url: "https://str.pcradio.ru/freies_stuttgart-hi",
  },
  {
    name: "Freies Radio Wiesental",
    url: "https://str.pcradio.ru/freies_wiesental-hi",
  },
  {
    name: "Frekvence 1",
    url: "https://str.pcradio.ru/frekvence_1-hi",
  },
  {
    name: "Fresh 92.7",
    url: "https://str.pcradio.ru/fresh_927-hi",
  },
  {
    name: "Fresh FM 105.0",
    url: "https://str.pcradio.ru/fresh_fm_sosna-hi",
  },
  {
    name: "Fresh Radio",
    url: "https://str.pcradio.ru/freshradio_es-hi",
  },
  {
    name: "Fresh Rock",
    url: "https://str.pcradio.ru/freshrock_net-hi",
  },
  {
    name: "Frisky Chill",
    url: "https://str.pcradio.ru/frisky_chill-hi",
  },
  {
    name: "Frisky Radio",
    url: "https://str.pcradio.ru/frisky_radio-hi",
  },
  {
    name: "Fritz",
    url: "https://str.pcradio.ru/fritz_de-hi",
  },
  {
    name: "Frontinus",
    url: "https://str.pcradio.ru/frontinus_sk-hi",
  },
  {
    name: "Fréquence 3",
    url: "https://str.pcradio.ru/frequence3_live-hi",
  },
  {
    name: "Fréquence 3 - Gold",
    url: "https://str.pcradio.ru/frequence3_gold-hi",
  },
  {
    name: "Fréquence 3 - Urban 3",
    url: "https://str.pcradio.ru/frequence3_urban-hi",
  },
  {
    name: "Fun Radio",
    url: "https://str.pcradio.ru/funradio_fr-hi",
  },
  {
    name: "Fun Radio 80s-90s",
    url: "https://str.pcradio.ru/funradio_sk_80s90s-hi",
  },
  {
    name: "3 FM",
    url: "https://str.pcradio.ru/funradio_sk-hi",
  },
  {
    name: "Fun Radio 95.3",
    url: "https://str.pcradio.ru/funradio_953-hi",
  },
  {
    name: "Fun Radio CZ-SK",
    url: "https://str.pcradio.ru/funradio_czsk-hi",
  },
  {
    name: "Fun Radio Dance",
    url: "https://str.pcradio.ru/funradio_sk_dance-hi",
  },
  {
    name: "Funk2Disco",
    url: "https://str.pcradio.ru/funk2disco-hi",
  },
  {
    name: "Funklust",
    url: "https://str.pcradio.ru/funklust_de-hi",
  },
  {
    name: "FunkURadio (FUR FM)",
    url: "https://str.pcradio.ru/funkuradio_co_uk-hi",
  },
  {
    name: "Funky Corner Radio",
    url: "https://str.pcradio.ru/funky_corner-hi",
  },
  {
    name: "Funky House",
    url: "https://str.pcradio.ru/Funky_House-hi",
  },
  {
    name: "Funky Town",
    url: "https://str.pcradio.ru/funky_town-hi",
  },
  {
    name: "FUV",
    url: "https://str.pcradio.ru/wfuv_music-hi",
  },
  {
    name: "G-Radio",
    url: "https://str.pcradio.ru/gradio_sk-hi",
  },
  {
    name: "Galaxy Aschaffenburg",
    url: "https://str.pcradio.ru/galaxy_916-hi",
  },
  {
    name: "Galaxy Landshut",
    url: "https://str.pcradio.ru/galaxy_landshut-hi",
  },
  {
    name: "Galaxy Mittelfranken",
    url: "https://str.pcradio.ru/galaxy_mittel-hi",
  },
  {
    name: "Galaxy Oberfranken",
    url: "https://str.pcradio.ru/galaxy_oberfranken-hi",
  },
  {
    name: "Galaxy Passau",
    url: "https://str.pcradio.ru/galaxy_passau-hi",
  },
  {
    name: "Galei Tzahal",
    url: "https://str.pcradio.ru/galei_tzahal-hi",
  },
  {
    name: "Galey Israel 106.5 FM",
    url: "https://str.pcradio.ru/galey_israel-hi",
  },
  {
    name: "Galgalatz",
    url: "https://str.pcradio.ru/galgalatz-hi",
  },
  {
    name: "Game Play",
    url: "https://str.pcradio.ru/radiogameplay_ru-hi",
  },
  {
    name: "Gamma Ray",
    url: "https://str.pcradio.ru/Gamma_Ray-hi",
  },
  {
    name: "Gay FM - Pure Dance",
    url: "https://str.pcradio.ru/gayfm_de-hi",
  },
  {
    name: "Gay Moscow Radio 18+",
    url: "https://str.pcradio.ru/gay_moscow-hi",
  },
  {
    name: "GDS Radio",
    url: "https://str.pcradio.ru/gds_radio-hi",
  },
  {
    name: "Generation Soul Disco Funk",
    url: "https://str.pcradio.ru/generationdiscofunk-hi",
  },
  {
    name: "Generations Rap US",
    url: "https://str.pcradio.ru/generation_rapus-hi",
  },
  {
    name: "Generations Rap US Gold",
    url: "https://str.pcradio.ru/gener_rapusgold-hi",
  },
  {
    name: "Gensokyo Radio",
    url: "https://str.pcradio.ru/gensokyo_radio-hi",
  },
  {
    name: "George FM",
    url: "https://str.pcradio.ru/georgefm_nz-hi",
  },
  {
    name: "George Harrison",
    url: "https://str.pcradio.ru/george_harrison-hi",
  },
  {
    name: "George Michael",
    url: "https://str.pcradio.ru/George_Michael-hi",
  },
  {
    name: "GhanaPa",
    url: "https://str.pcradio.ru/ghanapa_com-hi",
  },
  {
    name: "GiBFM",
    url: "https://str.pcradio.ru/gibfm_ru-hi",
  },
  {
    name: "Giga-Dance",
    url: "https://str.pcradio.ru/Giga_Dance-hi",
  },
  {
    name: "Gigant FM",
    url: "https://str.pcradio.ru/gigant_nl-hi",
  },
  {
    name: "GIKRadio",
    url: "https://str.pcradio.ru/gikradio_com-hi",
  },
  {
    name: "Gimadut Radio",
    url: "https://str.pcradio.ru/gimadut_radio-hi",
  },
  {
    name: "Gimadut Radio Book",
    url: "https://str.pcradio.ru/gimadut_book-hi",
  },
  {
    name: "Giorgos Mazonakis",
    url: "https://str.pcradio.ru/Giorgos_Mazonakis-hi",
  },
  {
    name: "Gipsy Kings",
    url: "https://str.pcradio.ru/Gipsy_Kings-hi",
  },
  {
    name: "Global Funk Radio",
    url: "https://str.pcradio.ru/global_funk-hi",
  },
  {
    name: "Godsmack",
    url: "https://str.pcradio.ru/Godsmack-hi",
  },
  {
    name: "Gold FM 93.2",
    url: "https://str.pcradio.ru/goldfm_932-hi",
  },
  {
    name: "Gold London",
    url: "https://str.pcradio.ru/gold_the_greatest_uk-hi",
  },
  {
    name: "gong fm (Регенсбург)",
    url: "https://str.pcradio.ru/gongfm_de-hi",
  },
  {
    name: "Gong Rádió",
    url: "https://str.pcradio.ru/gongradio_hu-hi",
  },
  {
    name: "Good Times Revival",
    url: "https://str.pcradio.ru/good_times_revival-hi",
  },
  {
    name: "Gorillaz",
    url: "https://str.pcradio.ru/Gorillaz-hi",
  },
  {
    name: "Gospel Adoradores",
    url: "https://str.pcradio.ru/radiogospeladoradores_com-hi",
  },
  {
    name: "Gospel FM 89.3",
    url: "https://str.pcradio.ru/redegospelfm_com_br-hi",
  },
  {
    name: "Gospel FM 90.1",
    url: "https://str.pcradio.ru/gospelfm_com_br-hi",
  },
  {
    name: "Gospel Hits",
    url: "https://str.pcradio.ru/tonagospel_com-hi",
  },
  {
    name: "Gospel Zooom",
    url: "https://str.pcradio.ru/gospel_zooom-hi",
  },
  {
    name: "GotRadio - Celtic Crossing",
    url: "https://str.pcradio.ru/celtic_crossing-hi",
  },
  {
    name: "GotRadio - New Age Nuance",
    url: "https://str.pcradio.ru/gotradio_newagenuance-hi",
  },
  {
    name: "GotRadio Metal Madness",
    url: "https://str.pcradio.ru/gotradio_metalmad-hi",
  },
  {
    name: "Graal Radio Club",
    url: "https://str.pcradio.ru/graal_club-hi",
  },
  {
    name: "Graal Radio Future",
    url: "https://str.pcradio.ru/graal_future-hi",
  },
  {
    name: "Graal Radio Goodtimes",
    url: "https://str.pcradio.ru/graal_goodtimes-hi",
  },
  {
    name: "Graal Radio Highway",
    url: "https://str.pcradio.ru/graal_highway-hi",
  },
  {
    name: "Graal Radio Melt",
    url: "https://str.pcradio.ru/graal_melt-hi",
  },
  {
    name: "Graal Radio Sensual",
    url: "https://str.pcradio.ru/graal_sensual-hi",
  },
  {
    name: "Graal Radio Space",
    url: "https://str.pcradio.ru/graal_space-hi",
  },
  {
    name: "GRAZ FM",
    url: "https://str.pcradio.ru/graz_fm-hi",
  },
  {
    name: "Greatest Hits Radio",
    url: "https://str.pcradio.ru/greatesthits_couk-hi",
  },
  {
    name: "Greatest Songs Radio",
    url: "https://str.pcradio.ru/mjoy_greatest-hi",
  },
  {
    name: "Green Day",
    url: "https://str.pcradio.ru/green_day-hi",
  },
  {
    name: "Green Grey",
    url: "https://str.pcradio.ru/green_grey-hi",
  },
  {
    name: "GreenMusic Radio",
    url: "https://str.pcradio.ru/green_music_radio-hi",
  },
  {
    name: "Griaß di' Allgäu Radio",
    url: "https://str.pcradio.ru/rsa_griass_allgau-hi",
  },
  {
    name: "Groove Classics",
    url: "https://str.pcradio.ru/groove_classics-hi",
  },
  {
    name: "GTI Radio",
    url: "https://str.pcradio.ru/gtiradio_ru-hi",
  },
  {
    name: "GtronicRadio",
    url: "https://str.pcradio.ru/gtronic_us-hi",
  },
  {
    name: "GU Blue Радио",
    url: "https://str.pcradio.ru/gu_blue_radio-hi",
  },
  {
    name: "GU Green Радио",
    url: "https://str.pcradio.ru/gu_green_radio-hi",
  },
  {
    name: "GU Red Радио",
    url: "https://str.pcradio.ru/gu_red_radio-hi",
  },
  {
    name: "Guano Apes",
    url: "https://str.pcradio.ru/guano_apes-hi",
  },
  {
    name: "Guf",
    url: "https://str.pcradio.ru/Guf-hi",
  },
  {
    name: "Guldkanalen 60-е",
    url: "https://str.pcradio.ru/guldkanalen_60-hi",
  },
  {
    name: "Guldkanalen 70-е",
    url: "https://str.pcradio.ru/guldkanalen_70-hi",
  },
  {
    name: "Guldkanalen 80-е",
    url: "https://str.pcradio.ru/guldkanalen_80-hi",
  },
  {
    name: "Guldkanalen 90-е",
    url: "https://str.pcradio.ru/guldkanalen_90-hi",
  },
  {
    name: "Guldkanalen Live",
    url: "https://str.pcradio.ru/guldkanalen_live-hi",
  },
  {
    name: "Guns N' Roses",
    url: "https://str.pcradio.ru/guns_n_roses-hi",
  },
  {
    name: "Happy Radio",
    url: "https://str.pcradio.ru/happy_radio_ukr-hi",
  },
  {
    name: "Happyday Newage Radio COOOOL",
    url: "https://str.pcradio.ru/happyday_newage_coool-hi",
  },
  {
    name: "Happyday Newage Radio EZ",
    url: "https://str.pcradio.ru/happyday_newage_ez-hi",
  },
  {
    name: "Hard Rock Hell Radio",
    url: "https://str.pcradio.ru/hardrock_hell-hi",
  },
  {
    name: "Harmony FM",
    url: "https://str.pcradio.ru/harmonyfm_de-hi",
  },
  {
    name: "Hashtag Plus",
    url: "https://str.pcradio.ru/hashtagplus_de-hi",
  },
  {
    name: "Healing Music",
    url: "https://str.pcradio.ru/healing_music-hi",
  },
  {
    name: "Heart FM",
    url: "https://str.pcradio.ru/heartfm_ru-hi",
  },
  {
    name: "Henri Des",
    url: "https://str.pcradio.ru/radio_henrides_net-hi",
  },
  {
    name: "Hi-Fi",
    url: "https://str.pcradio.ru/Hi_fi-hi",
  },
  {
    name: "HipHopBy",
    url: "https://str.pcradio.ru/hiphop_by-hi",
  },
  {
    name: "Hirschmilch Radio - Chillout",
    url: "https://str.pcradio.ru/hirschmilch_chill-hi",
  },
  {
    name: "Hirschmilch Radio - Electronic",
    url: "https://str.pcradio.ru/hirschmilch_electronic-hi",
  },
  {
    name: "Hirschmilch Radio - Prog House",
    url: "https://str.pcradio.ru/hirschmilch_proghouse-hi",
  },
  {
    name: "Hirschmilch Radio - Progressive",
    url: "https://str.pcradio.ru/hirschmilch_prog-hi",
  },
  {
    name: "Hirschmilch Radio - Psytrance",
    url: "https://str.pcradio.ru/hirschmilch_psytrance-hi",
  },
  {
    name: "Hiru FM (ABC)",
    url: "https://str.pcradio.ru/hirufm_abc-hi",
  },
  {
    name: "Hit 104",
    url: "https://str.pcradio.ru/hit104_de-hi",
  },
  {
    name: "Hit Club Dance",
    url: "https://str.pcradio.ru/hitclub_vip-hi",
  },
  {
    name: "7 (Кишинев)",
    url: "https://str.pcradio.ru/hitfm_kishinev-hi",
  },
  {
    name: "Hit Radio N1",
    url: "https://str.pcradio.ru/hitradion1_de-hi",
  },
  {
    name: "Hit Rock FM",
    url: "https://str.pcradio.ru/hit_rock_fm-hi",
  },
  {
    name: "Hit Rádió (Будапешт)",
    url: "https://str.pcradio.ru/hitradio_hu-hi",
  },
  {
    name: "Hit West",
    url: "https://str.pcradio.ru/hitwest_com-hi",
  },
  {
    name: "Hit Zone FM",
    url: "https://str.pcradio.ru/Hit_zone_fm-hi",
  },
  {
    name: "Hitradio 915",
    url: "https://str.pcradio.ru/hitradio_915-hi",
  },
  {
    name: "Hitradio Namibia",
    url: "https://str.pcradio.ru/hitradio_namib-hi",
  },
  {
    name: "Hitradio Ohr",
    url: "https://str.pcradio.ru/hitradio_ohr-hi",
  },
  {
    name: "HitRadio RT1",
    url: "https://str.pcradio.ru/rt1_de-hi",
  },
  {
    name: "Hitradio RTL Sachsen",
    url: "https://str.pcradio.ru/rtl_sachsen-hi",
  },
  {
    name: "Hitradio Ö3",
    url: "https://str.pcradio.ru/oe3_orf_at-hi",
  },
  {
    name: "Hits of Bollywood",
    url: "https://str.pcradio.ru/hits_ofbolly-hi",
  },
  {
    name: "HIts1 Latina",
    url: "https://str.pcradio.ru/hits1radio_latina-hi",
  },
  {
    name: "Hitz FM",
    url: "https://str.pcradio.ru/hitz_mala-hi",
  },
  {
    name: "Hitz24",
    url: "https://str.pcradio.ru/hitz24_com-hi",
  },
  {
    name: "Hobby Rádió",
    url: "https://str.pcradio.ru/hobbyradio_hu-hi",
  },
  {
    name: "Home FM",
    url: "https://str.pcradio.ru/home_fm-hi",
  },
  {
    name: "HoRadS (Hochschulradio)",
    url: "https://str.pcradio.ru/horads_de-hi",
  },
  {
    name: "Horeb",
    url: "https://str.pcradio.ru/radio_horeb-hi",
  },
  {
    name: "Hot 108 Jamz",
    url: "https://str.pcradio.ru/hot108_com-hi",
  },
  {
    name: "Hot Dance Radio",
    url: "https://str.pcradio.ru/hotdanceradio_com-hi",
  },
  {
    name: "Hot Jamz 88.9 FM",
    url: "https://str.pcradio.ru/hotjamz_889-hi",
  },
  {
    name: "Hotmix Radio - 80s",
    url: "https://str.pcradio.ru/hotmixradio_80-hi",
  },
  {
    name: "Hotmix Radio - Funky",
    url: "https://str.pcradio.ru/hotmix_funky-hi",
  },
  {
    name: "Hotmix Radio - Golds",
    url: "https://str.pcradio.ru/hotmix_golds-hi",
  },
  {
    name: "House Bit",
    url: "https://str.pcradio.ru/house_bit_radio-hi",
  },
  {
    name: "House Groove",
    url: "https://str.pcradio.ru/housegroove_pcradio-hi",
  },
  {
    name: "House radio",
    url: "https://str.pcradio.ru/housee_radio-hi",
  },
  {
    name: "HouseTime FM",
    url: "https://str.pcradio.ru/housetime_fm-hi",
  },
  {
    name: "HPR1 - Traditional Classic Country",
    url: "https://str.pcradio.ru/hpr1_tradcountry-hi",
  },
  {
    name: "HPR2 - Today's Classic Country",
    url: "https://str.pcradio.ru/hpr2_todaycountry-hi",
  },
  {
    name: "HR Radio",
    url: "https://str.pcradio.ru/hrradio_ru-hi",
  },
  {
    name: "hr-iNFO",
    url: "https://str.pcradio.ru/hr_info-hi",
  },
  {
    name: "HR1",
    url: "https://str.pcradio.ru/hr1_de-hi",
  },
  {
    name: "HR2 Kultur",
    url: "https://str.pcradio.ru/hr2-hi",
  },
  {
    name: "HR3",
    url: "https://str.pcradio.ru/hr3-hi",
  },
  {
    name: "HR4",
    url: "https://str.pcradio.ru/hr4_de-hi",
  },
  {
    name: "Hua Hin Music Radio",
    url: "https://str.pcradio.ru/huahin_tai-hi",
  },
  {
    name: "Hxodromio Radio",
    url: "https://str.pcradio.ru/hxodromio_com-hi",
  },
  {
    name: "I Love 2 Dance",
    url: "https://str.pcradio.ru/i_love_2dance-hi",
  },
  {
    name: "I Love Bass!",
    url: "https://str.pcradio.ru/I_love_bass-hi",
  },
  {
    name: "I Love Bravo Charts",
    url: "https://str.pcradio.ru/i_love_bravchart-hi",
  },
  {
    name: "I Love Mashup",
    url: "https://str.pcradio.ru/i_love_mash-hi",
  },
  {
    name: "I Love Radio",
    url: "https://str.pcradio.ru/i_love_radio-hi",
  },
  {
    name: "I Love Radio and Chill",
    url: "https://str.pcradio.ru/i_love_chill-hi",
  },
  {
    name: "I Love The Battle",
    url: "https://str.pcradio.ru/i_love_battle-hi",
  },
  {
    name: "IA",
    url: "https://str.pcradio.ru/IA-hi",
  },
  {
    name: "Ibiza Global Radio",
    url: "https://str.pcradio.ru/ibiza_global-hi",
  },
  {
    name: "Ibiza Radios - Chill",
    url: "https://str.pcradio.ru/ibizara_chill-hi",
  },
  {
    name: "Ibiza Radios - Dance",
    url: "https://str.pcradio.ru/ibizara_dance-hi",
  },
  {
    name: "Ibiza Radios - Deep-House",
    url: "https://str.pcradio.ru/ibizara_deepho-hi",
  },
  {
    name: "Ibiza Radios - Funky",
    url: "https://str.pcradio.ru/ibizara_funky-hi",
  },
  {
    name: "Ibiza Radios - Hits",
    url: "https://str.pcradio.ru/ibizara_hits-hi",
  },
  {
    name: "Ibiza Radios - Relax",
    url: "https://str.pcradio.ru/ibizara_relax-hi",
  },
  {
    name: "Ibiza Radios - Smooth Jazz",
    url: "https://str.pcradio.ru/ibizara_smooth-hi",
  },
  {
    name: "ICI Musique",
    url: "https://str.pcradio.ru/ici_musique-hi",
  },
  {
    name: "ICI Radio-Canada Première (Монреаль)",
    url: "https://str.pcradio.ru/ici_can_montr-hi",
  },
  {
    name: "Idobi Howl",
    url: "https://str.pcradio.ru/idobi_howl-hi",
  },
  {
    name: "Idobi Radio",
    url: "https://str.pcradio.ru/idobi_radio-hi",
  },
  {
    name: "Imagination",
    url: "https://str.pcradio.ru/imagination_ru-hi",
  },
  {
    name: "Indie Select",
    url: "https://str.pcradio.ru/indieselect_laut-hi",
  },
  {
    name: " EN)",
    url: "https://str.pcradio.ru/ids_media_en-hi",
  },
  {
    name: " RU)",
    url: "https://str.pcradio.ru/ids_media_ru-hi",
  },
  {
    name: "InfoVojna",
    url: "https://str.pcradio.ru/infovojna_sk-hi",
  },
  {
    name: "Insounds",
    url: "https://str.pcradio.ru/insounds_ru-hi",
  },
  {
    name: "Instyle",
    url: "https://str.pcradio.ru/instyleradio_ru-hi",
  },
  {
    name: "Intereconomia",
    url: "https://str.pcradio.ru/intereconomia_radio-hi",
  },
  {
    name: "Interesting Online",
    url: "https://str.pcradio.ru/interesting_online-hi",
  },
  {
    name: "IP music",
    url: "https://str.pcradio.ru/ipmusic_ch-hi",
  },
  {
    name: "IP music slow",
    url: "https://str.pcradio.ru/ipmusic_slow-hi",
  },
  {
    name: "iRadio",
    url: "https://str.pcradio.ru/iradio_pro-hi",
  },
  {
    name: "Irish Pub Radio",
    url: "https://str.pcradio.ru/irish_pub_radio-hi",
  },
  {
    name: "Italia Dance Music",
    url: "https://str.pcradio.ru/italia_dance_mus-hi",
  },
  {
    name: "Jam FM 93.6",
    url: "https://str.pcradio.ru/jam_fm_936-hi",
  },
  {
    name: "Jam FM Black Label",
    url: "https://str.pcradio.ru/jam_fm_black-hi",
  },
  {
    name: "Jam FM New Music",
    url: "https://str.pcradio.ru/jam_fm_newmusic-hi",
  },
  {
    name: "James Blunt",
    url: "https://str.pcradio.ru/James_Blunt-hi",
  },
  {
    name: "Jamiroquai",
    url: "https://str.pcradio.ru/jamiroquai-hi",
  },
  {
    name: "Jamm FM",
    url: "https://str.pcradio.ru/jammfmnl-hi",
  },
  {
    name: "JamZONE - Для Тех Кому Не По",
    url: "https://str.pcradio.ru/jamzone_dtknp-hi",
  },
  {
    name: "JamZONE - КАВЕРадио",
    url: "https://str.pcradio.ru/jamzone_cover-hi",
  },
  {
    name: "Janko Hraško",
    url: "https://str.pcradio.ru/jankohrasko-hi",
  },
  {
    name: "Japan-A-Radio",
    url: "https://str.pcradio.ru/japan_a_radio-hi",
  },
  {
    name: "Javan",
    url: "https://str.pcradio.ru/javan_radio-hi",
  },
  {
    name: "Jawhara FM",
    url: "https://str.pcradio.ru/jawhara_fm-hi",
  },
  {
    name: "Jazz FM (София)",
    url: "https://str.pcradio.ru/jazzfm_bg-hi",
  },
  {
    name: "Jazzy 90.9",
    url: "https://str.pcradio.ru/jazzy_hu-hi",
  },
  {
    name: "Jean Michel Jarre",
    url: "https://str.pcradio.ru/Jean_Michel_Jarre-hi",
  },
  {
    name: "Jenny FM",
    url: "https://str.pcradio.ru/jennyfm_org-hi",
  },
  {
    name: "Jerry Lee Lewis",
    url: "https://str.pcradio.ru/jerry_lee_lewis-hi",
  },
  {
    name: "Jerusalem 101FM",
    url: "https://str.pcradio.ru/jerusalem_101fm-hi",
  },
  {
    name: "Jessica Jay",
    url: "https://str.pcradio.ru/Jessica_Jay-hi",
  },
  {
    name: "Jesus a Vida",
    url: "https://str.pcradio.ru/jesusavida_com_br-hi",
  },
  {
    name: "JFSR",
    url: "https://str.pcradio.ru/jfsr_co_uk-hi",
  },
  {
    name: "Jimi Hendrix",
    url: "https://str.pcradio.ru/jimi_hendrix-hi",
  },
  {
    name: "Joe Cocker",
    url: "https://str.pcradio.ru/joe_cocker-hi",
  },
  {
    name: "Joe Dassin",
    url: "https://str.pcradio.ru/Joe_Dassin-hi",
  },
  {
    name: "John Lee Hooker",
    url: "https://str.pcradio.ru/John_Lee_Hooker-hi",
  },
  {
    name: "Johnny Cash",
    url: "https://str.pcradio.ru/Johnny_CASH-hi",
  },
  {
    name: "Joint Beat",
    url: "https://str.pcradio.ru/joint_beat-hi",
  },
  {
    name: "Joint Blues",
    url: "https://str.pcradio.ru/joint_blues-hi",
  },
  {
    name: "Joint Radio",
    url: "https://str.pcradio.ru/joint_radio-hi",
  },
  {
    name: "Josh Groban",
    url: "https://str.pcradio.ru/Josh_Groban-hi",
  },
  {
    name: "Jovem Pan FM 100.9",
    url: "https://str.pcradio.ru/jovempan_1009-hi",
  },
  {
    name: "Jovem Pan News (Сан-Паулу)",
    url: "https://str.pcradio.ru/jpn_sao_paulo-hi",
  },
  {
    name: "Joy Hits",
    url: "https://str.pcradio.ru/joyhits_online-hi",
  },
  {
    name: "Joy Turk FM",
    url: "https://str.pcradio.ru/karnaval_com_joyturk-hi",
  },
  {
    name: "JP HiP",
    url: "https://str.pcradio.ru/jp_hip-hi",
  },
  {
    name: "Judas Priest",
    url: "https://str.pcradio.ru/judas_priest-hi",
  },
  {
    name: "Juize",
    url: "https://str.pcradio.ru/juize-hi",
  },
  {
    name: "Julie London",
    url: "https://str.pcradio.ru/julie_london-hi",
  },
  {
    name: "Jump (MDR)",
    url: "https://str.pcradio.ru/mdr_jump-hi",
  },
  {
    name: "Jus Blues",
    url: "https://str.pcradio.ru/jus_blues_radio-hi",
  },
  {
    name: "Justin Timberlake",
    url: "https://str.pcradio.ru/Justin_Timberlake-hi",
  },
  {
    name: "K100",
    url: "https://str.pcradio.ru/k100_mbl_is-hi",
  },
  {
    name: "1 FM",
    url: "https://str.pcradio.ru/kalaweit-hi",
  },
  {
    name: "Kamchatka Live - Chill",
    url: "https://str.pcradio.ru/kamchatka_chill-hi",
  },
  {
    name: "Kamchatka Live - Dance",
    url: "https://str.pcradio.ru/kamchatka_dance-hi",
  },
  {
    name: "Kamchatka Live - Rock",
    url: "https://str.pcradio.ru/kamchatka_rock-hi",
  },
  {
    name: "Kan 88",
    url: "https://str.pcradio.ru/kan_88-hi",
  },
  {
    name: "Kan Arabic",
    url: "https://str.pcradio.ru/kan_arabic-hi",
  },
  {
    name: "Kan Kol Hamusica",
    url: "https://str.pcradio.ru/kan_kol_hamusica-hi",
  },
  {
    name: "Kan Reka",
    url: "https://str.pcradio.ru/kan_reka-hi",
  },
  {
    name: "Kan Reshet Bet",
    url: "https://str.pcradio.ru/kan_reshet_bet-hi",
  },
  {
    name: "Kan Reshet Gimel",
    url: "https://str.pcradio.ru/kan_reshet_gimel-hi",
  },
  {
    name: "Kan Reshet Moreshet",
    url: "https://str.pcradio.ru/kan_reshet_moreshet-hi",
  },
  {
    name: "Kan Tarbut",
    url: "https://str.pcradio.ru/kan_tarbut-hi",
  },
  {
    name: "Karc FM",
    url: "https://str.pcradio.ru/karcfm_hu-hi",
  },
  {
    name: "Karnaval - Mydonose",
    url: "https://str.pcradio.ru/karnaval_mydonose-hi",
  },
  {
    name: "Karunesh",
    url: "https://str.pcradio.ru/karunesh-hi",
  },
  {
    name: "Kate Ryan",
    url: "https://str.pcradio.ru/Kate_Ryan-hi",
  },
  {
    name: "KaTeK NET",
    url: "https://str.pcradio.ru/katek_net-hi",
  },
  {
    name: "Katy Perry",
    url: "https://str.pcradio.ru/Katy_Perry-hi",
  },
  {
    name: "Kaza Fm 18+",
    url: "https://str.pcradio.ru/kaza_fm-hi",
  },
  {
    name: "KBC 1602 AM",
    url: "https://str.pcradio.ru/kbc_1602am-hi",
  },
  {
    name: "KCSN 88.5 FM",
    url: "https://str.pcradio.ru/kcsn_885_la-hi",
  },
  {
    name: "Kelly Clarkson",
    url: "https://str.pcradio.ru/Kelly_Clarkson-hi",
  },
  {
    name: "Kerala Radio",
    url: "https://str.pcradio.ru/kerala_radio-hi",
  },
  {
    name: "Kesha",
    url: "https://str.pcradio.ru/Kesha-hi",
  },
  {
    name: "KEXXX FM Kiev",
    url: "https://str.pcradio.ru/keksfm_kiev-hi",
  },
  {
    name: "KEXXX Rocks",
    url: "https://str.pcradio.ru/kexxx_rocks-hi",
  },
  {
    name: "KFJC",
    url: "https://str.pcradio.ru/kfjc_org-hi",
  },
  {
    name: "Kick!FM",
    url: "https://str.pcradio.ru/kickfm_eu-hi",
  },
  {
    name: "Kiel FM 101.2",
    url: "https://str.pcradio.ru/kielfm_1012-hi",
  },
  {
    name: "KIF Cool",
    url: "https://str.pcradio.ru/kif_cool-hi",
  },
  {
    name: "KIF Hits",
    url: "https://str.pcradio.ru/kif_hits-hi",
  },
  {
    name: "KIF Radio",
    url: "https://str.pcradio.ru/kif_radio-hi",
  },
  {
    name: "KIF Rock",
    url: "https://str.pcradio.ru/kif_rock-hi",
  },
  {
    name: "Kinderlieder",
    url: "https://str.pcradio.ru/kinderlieder_laut-hi",
  },
  {
    name: "Kinderradio",
    url: "https://str.pcradio.ru/lautfm_kinderradio-hi",
  },
  {
    name: "King Crimson",
    url: "https://str.pcradio.ru/King_Crimson-hi",
  },
  {
    name: "KINK",
    url: "https://str.pcradio.ru/kink_nl-hi",
  },
  {
    name: "Kiss",
    url: "https://str.pcradio.ru/Kiss-hi",
  },
  {
    name: "KISS (Осло)",
    url: "https://str.pcradio.ru/kiss_oslo-hi",
  },
  {
    name: "Kiss (Хельсинки)",
    url: "https://str.pcradio.ru/kiss_fi-hi",
  },
  {
    name: "Kiss FM (Бухарест)",
    url: "https://str.pcradio.ru/kissfm_ro-hi",
  },
  {
    name: "Kiss FM (Рейкьявик)",
    url: "https://str.pcradio.ru/kissfm_is-hi",
  },
  {
    name: "Kiss FM 2.0 Deep",
    url: "https://str.pcradio.ru/kissfm_deep-hi",
  },
  {
    name: "Kiss FM 2.0 Digital",
    url: "https://str.pcradio.ru/kissfm_digital-hi",
  },
  {
    name: "Kiss FM Australia",
    url: "https://str.pcradio.ru/kissfm_com_au-hi",
  },
  {
    name: "Kiss FM Ukraine",
    url: "https://str.pcradio.ru/kissfm_main-hi",
  },
  {
    name: "Kiss FM Ukrainian",
    url: "https://str.pcradio.ru/kissfm_ukr-hi",
  },
  {
    name: "Kiss FM West Coast",
    url: "https://str.pcradio.ru/kissfmwestcoast-hi",
  },
  {
    name: "Klassic Joints Radio",
    url: "https://str.pcradio.ru/klassic_joints-hi",
  },
  {
    name: "Klassik Radio - Brazil",
    url: "https://str.pcradio.ru/klassikradio_brazil-hi",
  },
  {
    name: "Klassik Radio - Chor",
    url: "https://str.pcradio.ru/klassikradio_chor-hi",
  },
  {
    name: "Klassik Radio - Friends at Home",
    url: "https://str.pcradio.ru/klassikradio_friends-hi",
  },
  {
    name: "Klassik Radio - Klassik Dreams",
    url: "https://str.pcradio.ru/klassikradio_dreams-hi",
  },
  {
    name: "Klassik Radio - Klassik Rock",
    url: "https://str.pcradio.ru/klassikradio_klassrock-hi",
  },
  {
    name: "Klassik Radio - Lounge",
    url: "https://str.pcradio.ru/klassikradio_lounge-hi",
  },
  {
    name: "Klassik Radio - Lounge Beat",
    url: "https://str.pcradio.ru/klassikradio_loungebeat-hi",
  },
  {
    name: "Klassik Radio - Movie",
    url: "https://str.pcradio.ru/klassikradio_movie-hi",
  },
  {
    name: "Klassik Radio - Opera",
    url: "https://str.pcradio.ru/klassikradio_opera-hi",
  },
  {
    name: "Klassik Radio - Smooth",
    url: "https://str.pcradio.ru/klassikradio_smooth-hi",
  },
  {
    name: "Klassik Radio Live",
    url: "https://str.pcradio.ru/klassikradio_de-hi",
  },
  {
    name: "Klasszik Rádió",
    url: "https://str.pcradio.ru/klasszikradio_hu-hi",
  },
  {
    name: "Klubrádió",
    url: "https://str.pcradio.ru/klubradio_hu-hi",
  },
  {
    name: "KN Radio",
    url: "https://str.pcradio.ru/knradio_se-hi",
  },
  {
    name: "KNPR News 88.9",
    url: "https://str.pcradio.ru/knpr_889news-hi",
  },
  {
    name: "Kola 99.9",
    url: "https://str.pcradio.ru/kola_999-hi",
  },
  {
    name: "Kolor 103 FM",
    url: "https://str.pcradio.ru/radiokolor_pl-hi",
  },
  {
    name: "Kontinental TV",
    url: "https://str.pcradio.ru/kontinental_tv-hi",
  },
  {
    name: "Korn",
    url: "https://str.pcradio.ru/korn-hi",
  },
  {
    name: "KORONAfm100",
    url: "https://str.pcradio.ru/koronafm_100-hi",
  },
  {
    name: "Kosmos FM",
    url: "https://str.pcradio.ru/kosmos_941-hi",
  },
  {
    name: "Kossuth Radio (MR1)",
    url: "https://str.pcradio.ru/kossuth-hi",
  },
  {
    name: "Kral Muzik",
    url: "https://str.pcradio.ru/kral_muzik-hi",
  },
  {
    name: "Kral Pop",
    url: "https://str.pcradio.ru/kral_pop-hi",
  },
  {
    name: "Krec",
    url: "https://str.pcradio.ru/Krec-hi",
  },
  {
    name: "Kredens Cafe Radio",
    url: "https://str.pcradio.ru/mjoy_mmmkred-hi",
  },
  {
    name: "Kronehit 90's Dance",
    url: "https://str.pcradio.ru/kronehit_90sdance-hi",
  },
  {
    name: "Kronehit Black",
    url: "https://str.pcradio.ru/kronehit_black-hi",
  },
  {
    name: "Kronehit Charts",
    url: "https://str.pcradio.ru/kronehit_charts-hi",
  },
  {
    name: "Kronehit Clubland XXL",
    url: "https://str.pcradio.ru/kronehit_clublandxxl-hi",
  },
  {
    name: "Kronehit Dance",
    url: "https://str.pcradio.ru/kronehit_dance-hi",
  },
  {
    name: "Kronehit Digital",
    url: "https://str.pcradio.ru/kronehit_digi-hi",
  },
  {
    name: "Kronehit Electric",
    url: "https://str.pcradio.ru/kronehit_electric-hi",
  },
  {
    name: "Kronehit Fresh",
    url: "https://str.pcradio.ru/kronehit_fresh-hi",
  },
  {
    name: "Kronehit German Hip Hop",
    url: "https://str.pcradio.ru/kronehit_ghiphop-hi",
  },
  {
    name: "Kronehit Latino",
    url: "https://str.pcradio.ru/kronehit_latino-hi",
  },
  {
    name: "Kronehit Love",
    url: "https://str.pcradio.ru/kronehit_love-hi",
  },
  {
    name: "Kronehit Workout",
    url: "https://str.pcradio.ru/kronehit_workout-hi",
  },
  {
    name: "KSLU",
    url: "https://str.pcradio.ru/kslu_org-hi",
  },
  {
    name: "Kulturradio",
    url: "https://str.pcradio.ru/kulturradio_de-hi",
  },
  {
    name: "KX Classics",
    url: "https://str.pcradio.ru/kx_classics-hi",
  },
  {
    name: "Kylie Minogue",
    url: "https://str.pcradio.ru/Kylie_Minogue-hi",
  },
  {
    name: "9",
    url: "https://str.pcradio.ru/lradio_1049-hi",
  },
  {
    name: "L1 Radio (Маастрихт)",
    url: "https://str.pcradio.ru/l1radio_maas-hi",
  },
  {
    name: "La Única 94.5",
    url: "https://str.pcradio.ru/launica_945-hi",
  },
  {
    name: "Lady Gaga",
    url: "https://str.pcradio.ru/Lady_GaGa-hi",
  },
  {
    name: "Lana Del Rey",
    url: "https://str.pcradio.ru/Lana_Del_rey-hi",
  },
  {
    name: "Land FM",
    url: "https://str.pcradio.ru/land_fm-hi",
  },
  {
    name: "LandesWelle Thüringen",
    url: "https://str.pcradio.ru/landeswelle_de-hi",
  },
  {
    name: "Lara Fabian",
    url: "https://str.pcradio.ru/Lara_Fabian-hi",
  },
  {
    name: "Laser Hot Hits Dance International",
    url: "https://str.pcradio.ru/laser_hothits_dance-hi",
  },
  {
    name: "Laser Hot Hits International - Listen Again",
    url: "https://str.pcradio.ru/laser_hothits_again-hi",
  },
  {
    name: "Laserbeat-FM",
    url: "https://str.pcradio.ru/laserbeat_fm-hi",
  },
  {
    name: "Latina 104",
    url: "https://str.pcradio.ru/latina_104-hi",
  },
  {
    name: "Latvijas Radio 1 (LR1)",
    url: "https://str.pcradio.ru/latvijas_radio1-hi",
  },
  {
    name: "Latvijas Radio 2 (LR2)",
    url: "https://str.pcradio.ru/latvijas_radio2-hi",
  },
  {
    name: "Latvijas Radio 3 (LR3)",
    url: "https://str.pcradio.ru/latvijas_radio3-hi",
  },
  {
    name: "Latvijas Radio 4 (LR4)",
    url: "https://str.pcradio.ru/latvijas_radio4-hi",
  },
  {
    name: "Lav Radio",
    url: "https://str.pcradio.ru/lav_radio_arm-hi",
  },
  {
    name: "Lav Radio Mix",
    url: "https://str.pcradio.ru/lav_radio_mix-hi",
  },
  {
    name: "LavRadio 106.9 FM",
    url: "https://str.pcradio.ru/lavradio_1069-hi",
  },
  {
    name: "Layzer",
    url: "https://str.pcradio.ru/laserradio-hi",
  },
  {
    name: "Laza Rádió",
    url: "https://str.pcradio.ru/lazaradio_com-hi",
  },
  {
    name: "Laza Rádió - Mulatós",
    url: "https://str.pcradio.ru/lazaradio_mulatos-hi",
  },
  {
    name: "LBC London",
    url: "https://str.pcradio.ru/lbc_london-hi",
  },
  {
    name: "LBC London News 1152",
    url: "https://str.pcradio.ru/lbc_london1152-hi",
  },
  {
    name: "LBC National (UK)",
    url: "https://str.pcradio.ru/lbc_national-hi",
  },
  {
    name: "LE Radio",
    url: "https://str.pcradio.ru/leradio_mex-hi",
  },
  {
    name: "Le Rapologue Radio",
    url: "https://str.pcradio.ru/le_rapologue-hi",
  },
  {
    name: "Led Zeppelin",
    url: "https://str.pcradio.ru/Led_Zeppelin-hi",
  },
  {
    name: "Legend FM",
    url: "https://str.pcradio.ru/legend_fm-hi",
  },
  {
    name: "Legend FM - Game Radio",
    url: "https://str.pcradio.ru/legendfm_game-hi",
  },
  {
    name: "Lei Ting",
    url: "https://str.pcradio.ru/Lei_Ting-hi",
  },
  {
    name: "Lelo Hafsaka 103FM",
    url: "https://str.pcradio.ru/lelo_hafsaka-hi",
  },
  {
    name: "Leproradio",
    url: "https://str.pcradio.ru/leproradio-hi",
  },
  {
    name: "LernRadio (Der junge Kulturkanal)",
    url: "https://str.pcradio.ru/lern_radio-hi",
  },
  {
    name: "Lev Hamedina 91FM",
    url: "https://str.pcradio.ru/lev_hamedina91-hi",
  },
  {
    name: "Li Yi Jun",
    url: "https://str.pcradio.ru/Li_Yi_Jun-hi",
  },
  {
    name: "Liberland FM",
    url: "https://str.pcradio.ru/liberland_fm-hi",
  },
  {
    name: "Life Channel",
    url: "https://str.pcradio.ru/lifech_ch-hi",
  },
  {
    name: "Life Radio",
    url: "https://str.pcradio.ru/liferadio_at-hi",
  },
  {
    name: "LightBeat Radio",
    url: "https://str.pcradio.ru/light_beat-hi",
  },
  {
    name: "Like FM 87.9",
    url: "https://str.pcradio.ru/radiolikefm_ru-hi",
  },
  {
    name: "Lily Allen",
    url: "https://str.pcradio.ru/Lily_Allen-hi",
  },
  {
    name: "Limp Bizkit",
    url: "https://str.pcradio.ru/limp_bizkit-hi",
  },
  {
    name: "Linea Radio Savona",
    url: "https://str.pcradio.ru/linea_radio_savona-hi",
  },
  {
    name: "Linkin Park",
    url: "https://str.pcradio.ru/Linkin_Park-hi",
  },
  {
    name: "LisFm",
    url: "https://str.pcradio.ru/lisfm_net_ua-hi",
  },
  {
    name: "Lite87",
    url: "https://str.pcradio.ru/lite87_com-hi",
  },
  {
    name: "Little Richard",
    url: "https://str.pcradio.ru/little_richard-hi",
  },
  {
    name: "Live from the Mia",
    url: "https://str.pcradio.ru/live_the_mia-hi",
  },
  {
    name: "Lo Zoo di 105",
    url: "https://str.pcradio.ru/radio105_zoo-hi",
  },
  {
    name: "Loca FM",
    url: "https://str.pcradio.ru/locafm_com-hi",
  },
  {
    name: "Lojik",
    url: "https://str.pcradio.ru/radyolojik-hi",
  },
  {
    name: "London Persian Radio (LPR)",
    url: "https://str.pcradio.ru/londonpersian-hi",
  },
  {
    name: "Looktung Eingdoi Station",
    url: "https://str.pcradio.ru/looktung_eing-hi",
  },
  {
    name: "LORA München",
    url: "https://str.pcradio.ru/lora_924-hi",
  },
  {
    name: "Louis Armstrong",
    url: "https://str.pcradio.ru/Louis_Armstrong-hi",
  },
  {
    name: "Louna",
    url: "https://str.pcradio.ru/Louna-hi",
  },
  {
    name: "Lounge Chill 1",
    url: "https://str.pcradio.ru/lounge_chillout-hi",
  },
  {
    name: "Lounge Chill 2",
    url: "https://str.pcradio.ru/lounge_chillout2-hi",
  },
  {
    name: "Lounge FM (Киев)",
    url: "https://str.pcradio.ru/loungefm_ua-hi",
  },
  {
    name: "Lounge FM (Киев) - Acoustic",
    url: "https://str.pcradio.ru/loungefm_ua_acoustic-hi",
  },
  {
    name: "Lounge FM (Киев) - Chillout",
    url: "https://str.pcradio.ru/loungefm_ua_chill-hi",
  },
  {
    name: "Lounge FM (Киев) - Terrace",
    url: "https://str.pcradio.ru/loungefm_ua_terrace-hi",
  },
  {
    name: "Lounge FM 96",
    url: "https://str.pcradio.ru/loungefm_net-hi",
  },
  {
    name: "Lounge-radio",
    url: "https://str.pcradio.ru/lounge_basel-hi",
  },
  {
    name: "LoungeFM",
    url: "https://str.pcradio.ru/lounge_fm-hi",
  },
  {
    name: "LoungeFM 100% Austria",
    url: "https://str.pcradio.ru/lounge_fm_100aus-hi",
  },
  {
    name: "LoungeFM Digital",
    url: "https://str.pcradio.ru/lounge_fm_digi-hi",
  },
  {
    name: "Love Is Radio",
    url: "https://str.pcradio.ru/loveis_by-hi",
  },
  {
    name: "Love Parade",
    url: "https://str.pcradio.ru/love_parade_pcradio-hi",
  },
  {
    name: "Lovely Music Radio",
    url: "https://str.pcradio.ru/good_music_fr-hi",
  },
  {
    name: "5 FM",
    url: "https://str.pcradio.ru/lratvakan_1065-hi",
  },
  {
    name: "LRT Klasika",
    url: "https://str.pcradio.ru/lrt_klasika-hi",
  },
  {
    name: "LRT Opus",
    url: "https://str.pcradio.ru/lrt_opus-hi",
  },
  {
    name: "LRT Radijas",
    url: "https://str.pcradio.ru/lrt_radijas-hi",
  },
  {
    name: "LSFM",
    url: "https://str.pcradio.ru/lsfm_moze-hi",
  },
  {
    name: "LU Radio CILU 102.7 FM",
    url: "https://str.pcradio.ru/luradio_cilu-hi",
  },
  {
    name: "Luciano Pavarotti",
    url: "https://str.pcradio.ru/pavarotti-hi",
  },
  {
    name: "LugaRadio",
    url: "https://str.pcradio.ru/luga_radio-hi",
  },
  {
    name: "Lulu FM",
    url: "https://str.pcradio.ru/lulu_fm-hi",
  },
  {
    name: "Lumix FM",
    url: "https://str.pcradio.ru/lumix_fm-hi",
  },
  {
    name: "Luxfunk Blackmix",
    url: "https://str.pcradio.ru/luxfunk_blackmix-hi",
  },
  {
    name: "Luxfunk Dance",
    url: "https://str.pcradio.ru/luxfunk_dance-hi",
  },
  {
    name: "Luxfunk Radió",
    url: "https://str.pcradio.ru/luxfunk_hu-hi",
  },
  {
    name: "LXClassics",
    url: "https://str.pcradio.ru/lxclassics_com-hi",
  },
  {
    name: "Lübeck FM",
    url: "https://str.pcradio.ru/luebeck_fm-hi",
  },
  {
    name: "M Radio",
    url: "https://str.pcradio.ru/mradio_fr-hi",
  },
  {
    name: "Machine Head",
    url: "https://str.pcradio.ru/machine_head-hi",
  },
  {
    name: "Made In Zouk",
    url: "https://str.pcradio.ru/madeinzouk-hi",
  },
  {
    name: "Madonna",
    url: "https://str.pcradio.ru/Madonna-hi",
  },
  {
    name: "Magic Disco Radio",
    url: "https://str.pcradio.ru/magic_disco_hu-hi",
  },
  {
    name: "Magic FM",
    url: "https://str.pcradio.ru/magicfm_ro-hi",
  },
  {
    name: "Magyar Katolikus Radio",
    url: "https://str.pcradio.ru/magyar_katolikus-hi",
  },
  {
    name: "Maks Radio",
    url: "https://str.pcradio.ru/maksradio_ru-hi",
  },
  {
    name: "2",
    url: "https://str.pcradio.ru/malmokanalen_892-hi",
  },
  {
    name: "Mancode Radio",
    url: "https://str.pcradio.ru/mancoderadio_com-hi",
  },
  {
    name: "Manowar",
    url: "https://str.pcradio.ru/Manowar-hi",
  },
  {
    name: "Mantra",
    url: "https://str.pcradio.ru/radiomantra_eu-hi",
  },
  {
    name: "Manx Radio FM",
    url: "https://str.pcradio.ru/manxradio_fm-hi",
  },
  {
    name: "Maria Rita",
    url: "https://str.pcradio.ru/Maria_Rita-hi",
  },
  {
    name: "Marilyn Manson",
    url: "https://str.pcradio.ru/Marilyn_Manson-hi",
  },
  {
    name: "MariskalRock",
    url: "https://str.pcradio.ru/mariskalrock_com-hi",
  },
  {
    name: "Max FM",
    url: "https://str.pcradio.ru/maxfm_com_tr-hi",
  },
  {
    name: "Maxi France",
    url: "https://str.pcradio.ru/maxi_france-hi",
  },
  {
    name: "Maximum - 90е",
    url: "https://str.pcradio.ru/maximum_90s-hi",
  },
  {
    name: "Maximum - Rock Hits",
    url: "https://str.pcradio.ru/maximum_rock-hi",
  },
  {
    name: "Maximum 103.7 FM",
    url: "https://str.pcradio.ru/fm_maximum-hi",
  },
  {
    name: "Maximum 104.3 FM",
    url: "https://str.pcradio.ru/maximum_pzavod-hi",
  },
  {
    name: "Maximum 98.8 (Томск)",
    url: "https://str.pcradio.ru/maximum_tomsk-hi",
  },
  {
    name: "Maximum Threshold Radio",
    url: "https://str.pcradio.ru/maximum_thresh-hi",
  },
  {
    name: "Maxxx Radio",
    url: "https://str.pcradio.ru/maxxx_radio_ru-hi",
  },
  {
    name: "Mazzy Star",
    url: "https://str.pcradio.ru/Mazzy_Star-hi",
  },
  {
    name: "MDR 1 Radio Sachsen",
    url: "https://str.pcradio.ru/mdr_1_sachsen-hi",
  },
  {
    name: "MDR Aktuell",
    url: "https://str.pcradio.ru/mdr_aktuell-hi",
  },
  {
    name: "MDR Figaro",
    url: "https://str.pcradio.ru/mdr_figaro-hi",
  },
  {
    name: "MDR Klassik",
    url: "https://str.pcradio.ru/mdr_klassik-hi",
  },
  {
    name: "MDR Kultur",
    url: "https://str.pcradio.ru/mdr_kultur-hi",
  },
  {
    name: "MDR Sachsen-Anhalt",
    url: "https://str.pcradio.ru/mdr_sachsen_anhalt-hi",
  },
  {
    name: "MDR Schlagerwelt Sachsen",
    url: "https://str.pcradio.ru/mdr_schlagerwelt-hi",
  },
  {
    name: "MDR Sputnik Black",
    url: "https://str.pcradio.ru/mdr_sputnik_black-hi",
  },
  {
    name: "MDR Sputnik Club",
    url: "https://str.pcradio.ru/mdr_sputnik_club-hi",
  },
  {
    name: "MDR Sputnik Live",
    url: "https://str.pcradio.ru/mdr_sputnik-hi",
  },
  {
    name: "MDR Sputnik Popkult",
    url: "https://str.pcradio.ru/mdr_sputnik_popkult-hi",
  },
  {
    name: "MDR Sputnik Roboton",
    url: "https://str.pcradio.ru/mdr_sputnik_roboton-hi",
  },
  {
    name: "MDR Sputnik Rock",
    url: "https://str.pcradio.ru/mdr_sputnik_rock-hi",
  },
  {
    name: "MDR Sputnik Soundcheck",
    url: "https://str.pcradio.ru/mdr_sputnik_soundcheck-hi",
  },
  {
    name: "MDR Thüringen",
    url: "https://str.pcradio.ru/mdr_thueringen-hi",
  },
  {
    name: "Medi 1 Maghreb",
    url: "https://str.pcradio.ru/medi1_maghreb-hi",
  },
  {
    name: "Mega Hit FM - Classics",
    url: "https://str.pcradio.ru/megahitfm_classics-hi",
  },
  {
    name: "MegaDance Rádió",
    url: "https://str.pcradio.ru/megadanceradio_hu-hi",
  },
  {
    name: "Megadeth",
    url: "https://str.pcradio.ru/megadeth-hi",
  },
  {
    name: "Megapolis FM 89.5",
    url: "https://str.pcradio.ru/megapolisfm_ru-hi",
  },
  {
    name: "Megaton Cafe Radio",
    url: "https://str.pcradio.ru/megatoncaferadio-hi",
  },
  {
    name: "Mekke FM",
    url: "https://str.pcradio.ru/mekkefm_com-hi",
  },
  {
    name: "Menzil Radyo",
    url: "https://str.pcradio.ru/menzil_radyo-hi",
  },
  {
    name: "Mercy Rádió - Kabaré",
    url: "https://str.pcradio.ru/mercyradio_kabare-hi",
  },
  {
    name: "Metal Live Radio",
    url: "https://str.pcradio.ru/metal_live_radio-hi",
  },
  {
    name: "Metallica",
    url: "https://str.pcradio.ru/Metallica-hi",
  },
  {
    name: "MetalMusicRadio",
    url: "https://str.pcradio.ru/metalmusicradio_com-hi",
  },
  {
    name: "Metro FM",
    url: "https://str.pcradio.ru/metro_fm_es-hi",
  },
  {
    name: "Metro FM",
    url: "https://str.pcradio.ru/metro_fm_turk-hi",
  },
  {
    name: "MFM Music Radio",
    url: "https://str.pcradio.ru/mfm_am-hi",
  },
  {
    name: "Miami Beach Radio",
    url: "https://str.pcradio.ru/miamibeach_radio-hi",
  },
  {
    name: "Miami SoundSets",
    url: "https://str.pcradio.ru/miami_soundsets-hi",
  },
  {
    name: "Michael Jackson",
    url: "https://str.pcradio.ru/Michael_Jackson-hi",
  },
  {
    name: "Mika",
    url: "https://str.pcradio.ru/Mika-hi",
  },
  {
    name: "Mikrasiatis Radio",
    url: "https://str.pcradio.ru/mikrasiatis_gr-hi",
  },
  {
    name: "Milano XR",
    url: "https://str.pcradio.ru/milano_xr-hi",
  },
  {
    name: "Minimal Techno",
    url: "https://str.pcradio.ru/minimal_techno_pcradio-hi",
  },
  {
    name: "Minsk House",
    url: "https://str.pcradio.ru/minsk_house_by-hi",
  },
  {
    name: "Mirchi 91.1 (Шиллонг)",
    url: "https://str.pcradio.ru/mirchi_911-hi",
  },
  {
    name: "MiRádiónk",
    url: "https://str.pcradio.ru/miradionk_com-hi",
  },
  {
    name: "Mix FM (Киев)",
    url: "https://str.pcradio.ru/mixfm_com_ua-hi",
  },
  {
    name: "Mix FM (Никосия)",
    url: "https://str.pcradio.ru/mixfmradio_com-hi",
  },
  {
    name: "Mix FM (Хабаровск)",
    url: "https://str.pcradio.ru/mixfmonline_ru-hi",
  },
  {
    name: "7 (Рига)",
    url: "https://str.pcradio.ru/mixfm_riga-hi",
  },
  {
    name: "Mix Megapol",
    url: "https://str.pcradio.ru/mix_megapol-hi",
  },
  {
    name: "Mix Party",
    url: "https://str.pcradio.ru/MixParty-hi",
  },
  {
    name: "Mixadance Fm",
    url: "https://str.pcradio.ru/mixadance_fm-hi",
  },
  {
    name: "Mixadance Jazz",
    url: "https://str.pcradio.ru/mixadance_jazz-hi",
  },
  {
    name: "MixCult - Main",
    url: "https://str.pcradio.ru/mixcult_main-hi",
  },
  {
    name: "MixCult - Spitzer",
    url: "https://str.pcradio.ru/mixcult_spitzer-hi",
  },
  {
    name: "MixRadio - Napjaink Slágerei",
    url: "https://str.pcradio.ru/mixradio_slager-hi",
  },
  {
    name: "MixRadio - Retro Kedvencek",
    url: "https://str.pcradio.ru/mixradio_retro-hi",
  },
  {
    name: "Mixset",
    url: "https://str.pcradio.ru/mixset_co_uk-hi",
  },
  {
    name: "Mmirojv Radio",
    url: "https://str.pcradio.ru/mmirojv_bg-hi",
  },
  {
    name: "Moby",
    url: "https://str.pcradio.ru/Moby-hi",
  },
  {
    name: "Modern Talking",
    url: "https://str.pcradio.ru/Modern_Talking-hi",
  },
  {
    name: "Momó Rádió",
    url: "https://str.pcradio.ru/momoradio_hu-hi",
  },
  {
    name: "Monkey FM",
    url: "https://str.pcradio.ru/monkey_fm-hi",
  },
  {
    name: "Monte Carlo Lounge",
    url: "https://str.pcradio.ru/montecarlo_cf-hi",
  },
  {
    name: "Morow",
    url: "https://str.pcradio.ru/morow_rock-hi",
  },
  {
    name: "Mortal FM",
    url: "https://str.pcradio.ru/mortalfm_es-hi",
  },
  {
    name: "Mosaique FM",
    url: "https://str.pcradio.ru/mosaiquefm_net-hi",
  },
  {
    name: "MotoRadio.Online",
    url: "https://str.pcradio.ru/motoradio-hi",
  },
  {
    name: "Motorbreath",
    url: "https://str.pcradio.ru/laut_motorbreath-hi",
  },
  {
    name: "Motorhead",
    url: "https://str.pcradio.ru/motorhead-hi",
  },
  {
    name: "Motown Magic Oldies",
    url: "https://str.pcradio.ru/motown_magic_oldies-hi",
  },
  {
    name: "MousiRadio",
    url: "https://str.pcradio.ru/mousi_radio-hi",
  },
  {
    name: "Mousse Radio",
    url: "https://str.pcradio.ru/mjoy_mousse-hi",
  },
  {
    name: "Mouv'",
    url: "https://str.pcradio.ru/mouv_fr-hi",
  },
  {
    name: "Mr. Credo",
    url: "https://str.pcradio.ru/mr_CREDO-hi",
  },
  {
    name: "MT Радио",
    url: "https://str.pcradio.ru/mt_pcradio-hi",
  },
  {
    name: "multicult.fm 91.0",
    url: "https://str.pcradio.ru/multicult_fm-hi",
  },
  {
    name: "Music In Paradise",
    url: "https://str.pcradio.ru/musicinparadise_ru-hi",
  },
  {
    name: "Musical Decadence",
    url: "https://str.pcradio.ru/musicaldecadence_ru-hi",
  },
  {
    name: "Muz FM",
    url: "https://str.pcradio.ru/muzfm_md-hi",
  },
  {
    name: "MuzON",
    url: "https://str.pcradio.ru/muzon_es-hi",
  },
  {
    name: "Mylene Farmer",
    url: "https://str.pcradio.ru/Mylene_Farmer-hi",
  },
  {
    name: "myRock",
    url: "https://str.pcradio.ru/myrock_dk-hi",
  },
  {
    name: "Mária Rádió",
    url: "https://str.pcradio.ru/mariaradio_hu-hi",
  },
  {
    name: "N-Joy",
    url: "https://str.pcradio.ru/njoy_de-hi",
  },
  {
    name: "N-Joy (София)",
    url: "https://str.pcradio.ru/njoy_bg-hi",
  },
  {
    name: "Nachum Segal Network",
    url: "https://str.pcradio.ru/nachumsegal-hi",
  },
  {
    name: "Nami",
    url: "https://str.pcradio.ru/radio_nami-hi",
  },
  {
    name: "Namie Amuro",
    url: "https://str.pcradio.ru/Namie_Amuro-hi",
  },
  {
    name: "Nancy Sinatra",
    url: "https://str.pcradio.ru/nancy_sinatra-hi",
  },
  {
    name: "Napalm Death",
    url: "https://str.pcradio.ru/napalm_death-hi",
  },
  {
    name: "Napoca FM 102.2",
    url: "https://str.pcradio.ru/napoca_fm-hi",
  },
  {
    name: "Narodni Radio Goga",
    url: "https://str.pcradio.ru/radio_goga_crt-hi",
  },
  {
    name: "Navahang",
    url: "https://str.pcradio.ru/navahang_com-hi",
  },
  {
    name: "Nazareth",
    url: "https://str.pcradio.ru/Nazareth-hi",
  },
  {
    name: "NDR 1 Niedersachsen",
    url: "https://str.pcradio.ru/ndr_1niedersachsen-hi",
  },
  {
    name: "NDR 1 Radio MV",
    url: "https://str.pcradio.ru/ndr_1radio_mv-hi",
  },
  {
    name: "NDR 1 Welle Nord",
    url: "https://str.pcradio.ru/ndr_1welle_nord-hi",
  },
  {
    name: "NDR 2",
    url: "https://str.pcradio.ru/ndr2_radio-hi",
  },
  {
    name: "NDR 90.3",
    url: "https://str.pcradio.ru/ndr_903-hi",
  },
  {
    name: "NDR Blue",
    url: "https://str.pcradio.ru/ndr_blue-hi",
  },
  {
    name: "NDR Kultur",
    url: "https://str.pcradio.ru/ndr_kultur-hi",
  },
  {
    name: "NDR Plus",
    url: "https://str.pcradio.ru/ndr_plus-hi",
  },
  {
    name: "Nebula",
    url: "https://str.pcradio.ru/nebulaclub_ru-hi",
  },
  {
    name: "Nek",
    url: "https://str.pcradio.ru/Nek-hi",
  },
  {
    name: "Nelly Furtado",
    url: "https://str.pcradio.ru/Nelly_Furtado-hi",
  },
  {
    name: "Nemzetiségi adások (MR4)",
    url: "https://str.pcradio.ru/nemzetisegi_mr4-hi",
  },
  {
    name: "New Age Radio",
    url: "https://str.pcradio.ru/newage_radio-hi",
  },
  {
    name: "New Clear Radio",
    url: "https://str.pcradio.ru/ncradio-hi",
  },
  {
    name: "New Hits of Bollywood",
    url: "https://str.pcradio.ru/newhits_ofbolly-hi",
  },
  {
    name: "New Model Rádio",
    url: "https://str.pcradio.ru/newmodel_sk-hi",
  },
  {
    name: "NG Radio Show",
    url: "https://str.pcradio.ru/ngradioshowrussia_org-hi",
  },
  {
    name: "Nickelback",
    url: "https://str.pcradio.ru/nickelback-hi",
  },
  {
    name: "Niepoprawne Radio PL",
    url: "https://str.pcradio.ru/niepoprawne_pl-hi",
  },
  {
    name: "Nightwish",
    url: "https://str.pcradio.ru/Nightwish-hi",
  },
  {
    name: "Nirvana",
    url: "https://str.pcradio.ru/Nirvana-hi",
  },
  {
    name: "Noise FM",
    url: "https://str.pcradio.ru/noisefmru-hi",
  },
  {
    name: "Noize MC",
    url: "https://str.pcradio.ru/noize_mc-hi",
  },
  {
    name: "Nomercy Radio",
    url: "https://str.pcradio.ru/nomercy_radio-hi",
  },
  {
    name: "Nonstop Rádio",
    url: "https://str.pcradio.ru/nonstop_sk-hi",
  },
  {
    name: "Nordwestradio",
    url: "https://str.pcradio.ru/nordwestradio-hi",
  },
  {
    name: "Nostalgia FM 98.6",
    url: "https://str.pcradio.ru/nostalgiafm_986-hi",
  },
  {
    name: "Nostalgie",
    url: "https://str.pcradio.ru/nostalgie_fr-hi",
  },
  {
    name: "Novo Tempo",
    url: "https://str.pcradio.ru/novo_tempo-hi",
  },
  {
    name: "NPO 3FM Alternative",
    url: "https://str.pcradio.ru/presents3fmnl-hi",
  },
  {
    name: "NPO 3FM KX radio",
    url: "https://str.pcradio.ru/presents3fmnl_stage-hi",
  },
  {
    name: "NPO 3FM Serious Radio",
    url: "https://str.pcradio.ru/presents3fmnl_pop-hi",
  },
  {
    name: "NPO FunX Amsterdam",
    url: "https://str.pcradio.ru/funxnl-hi",
  },
  {
    name: "NPO FunX Arab",
    url: "https://str.pcradio.ru/npo_funx_arab-hi",
  },
  {
    name: "NPO FunX Dance",
    url: "https://str.pcradio.ru/npo_funx_dance-hi",
  },
  {
    name: "NPO FunX Hip Hop",
    url: "https://str.pcradio.ru/npo_funx_hiphop-hi",
  },
  {
    name: "NPO FunX Latin",
    url: "https://str.pcradio.ru/npo_funx_latin-hi",
  },
  {
    name: "NPO FunX Reggae",
    url: "https://str.pcradio.ru/npo_funx_reggae-hi",
  },
  {
    name: "NPO FunX Slow Jamz",
    url: "https://str.pcradio.ru/npo_funx_slowjamz-hi",
  },
  {
    name: "NPO Radio 1",
    url: "https://str.pcradio.ru/radio1nl-hi",
  },
  {
    name: "NPO Radio 2",
    url: "https://str.pcradio.ru/radio2nl-hi",
  },
  {
    name: "NPO Radio 4",
    url: "https://str.pcradio.ru/radio4nl-hi",
  },
  {
    name: "NPO Radio 5",
    url: "https://str.pcradio.ru/radio5nl-hi",
  },
  {
    name: "NPO Radio 6 Soul & Jazz",
    url: "https://str.pcradio.ru/radio6nl-hi",
  },
  {
    name: "NRG 95 FM",
    url: "https://str.pcradio.ru/nrg95_gr-hi",
  },
  {
    name: "NRJ (Хельсинки)",
    url: "https://str.pcradio.ru/nrj_finland-hi",
  },
  {
    name: "NRJ DnB (Таллинн)",
    url: "https://str.pcradio.ru/nrj_ee_dnb-hi",
  },
  {
    name: "NRJ FM (Energy FM)",
    url: "https://str.pcradio.ru/energyfm_ru-hi",
  },
  {
    name: "NRJ FM (Санкт-Петербург)",
    url: "https://str.pcradio.ru/energy_spb-hi",
  },
  {
    name: "NRJ FM (Таллинн)",
    url: "https://str.pcradio.ru/nrj_ee_beat-hi",
  },
  {
    name: "NRJ France",
    url: "https://str.pcradio.ru/nrj_france-hi",
  },
  {
    name: "NRJ Hits (France)",
    url: "https://str.pcradio.ru/nrj_fr_hits-hi",
  },
  {
    name: "NRJ Norge",
    url: "https://str.pcradio.ru/nrj_norge-hi",
  },
  {
    name: "NRJ Украина",
    url: "https://str.pcradio.ru/nrj_in_ua-hi",
  },
  {
    name: "NRJ Украина - All Hits",
    url: "https://str.pcradio.ru/nrjukr_allhits-hi",
  },
  {
    name: "NRJ Украина - Hot 40",
    url: "https://str.pcradio.ru/nrjukr_hot40-hi",
  },
  {
    name: "NRJ Украина - Party Hits",
    url: "https://str.pcradio.ru/nrjukr_party-hi",
  },
  {
    name: "NRK Alltid Nyheter",
    url: "https://str.pcradio.ru/nrk_alltid-hi",
  },
  {
    name: "NRK Klassisk",
    url: "https://str.pcradio.ru/nrk_klassisk-hi",
  },
  {
    name: "NRK mP3",
    url: "https://str.pcradio.ru/nrk_mp3_no-hi",
  },
  {
    name: "NRK P1 (Осло)",
    url: "https://str.pcradio.ru/nrk_p1_oslo-hi",
  },
  {
    name: "NRK P13",
    url: "https://str.pcradio.ru/nrk_p13-hi",
  },
  {
    name: "NRK P2",
    url: "https://str.pcradio.ru/nrk_p2-hi",
  },
  {
    name: "NRK P3",
    url: "https://str.pcradio.ru/nrk_p3_no-hi",
  },
  {
    name: "NRK Sport",
    url: "https://str.pcradio.ru/nrk_sport-hi",
  },
  {
    name: "NRK Super",
    url: "https://str.pcradio.ru/nrk_super-hi",
  },
  {
    name: "NSB Radio",
    url: "https://str.pcradio.ru/breakbeatradio-hi",
  },
  {
    name: "NTS 1",
    url: "https://str.pcradio.ru/nts1_live-hi",
  },
  {
    name: "NTS 2",
    url: "https://str.pcradio.ru/nts2_live-hi",
  },
  {
    name: "Nu Euphoria Trance Radio",
    url: "https://str.pcradio.ru/nu_euphoria-hi",
  },
  {
    name: "NUiRADIO (Ну и радио)",
    url: "https://str.pcradio.ru/nuiradio_ru-hi",
  },
  {
    name: "Nuxalk Radio 91.1 FM",
    url: "https://str.pcradio.ru/nuxalk_911-hi",
  },
  {
    name: "Oe1 (Österreich 1)",
    url: "https://str.pcradio.ru/oe1_wien-hi",
  },
  {
    name: "Oe2 Radio Tirol",
    url: "https://str.pcradio.ru/tirol_orf_at-hi",
  },
  {
    name: "Oest FM (Øst FM)",
    url: "https://str.pcradio.ru/oestfm_dk-hi",
  },
  {
    name: "Office Chillout 1",
    url: "https://str.pcradio.ru/office_chillout1-hi",
  },
  {
    name: "Office Chillout 2",
    url: "https://str.pcradio.ru/office_chillout2-hi",
  },
  {
    name: "OK-радио (Калининград)",
    url: "https://str.pcradio.ru/ok_radio_kal-hi",
  },
  {
    name: "Okerwelle 104.6",
    url: "https://str.pcradio.ru/okerwelle_1046-hi",
  },
  {
    name: "OkoloJazza",
    url: "https://str.pcradio.ru/okolojazza_radio-hi",
  },
  {
    name: "Old Fashioned Radio. Show and Music",
    url: "https://str.pcradio.ru/olr_jazz-hi",
  },
  {
    name: "Oldie Welle Niederbayern",
    url: "https://str.pcradio.ru/oldiwelle_com-hi",
  },
  {
    name: "OldTime Radio",
    url: "https://str.pcradio.ru/oldtimeradiopcradio-hi",
  },
  {
    name: "Oldxit (Олдхит)",
    url: "https://str.pcradio.ru/oldxit_ru-hi",
  },
  {
    name: "Olegator-FM",
    url: "https://str.pcradio.ru/olegator_fm-hi",
  },
  {
    name: "Omar Akram",
    url: "https://str.pcradio.ru/Omar-hi",
  },
  {
    name: "Omdaru Visual Neoclassical",
    url: "https://str.pcradio.ru/omdaru_visual_neo-hi",
  },
  {
    name: "Omega",
    url: "https://str.pcradio.ru/omega-hi",
  },
  {
    name: "Onda Cero (Мадрид)",
    url: "https://str.pcradio.ru/ondacero_madrid-hi",
  },
  {
    name: "Onda Layetana",
    url: "https://str.pcradio.ru/onda_layetana-hi",
  },
  {
    name: "Onda Loja Radio",
    url: "https://str.pcradio.ru/onda_loja-hi",
  },
  {
    name: "Onda Madrid",
    url: "https://str.pcradio.ru/onda_madrid-hi",
  },
  {
    name: "Onda Vasca",
    url: "https://str.pcradio.ru/onda_vasca-hi",
  },
  {
    name: "One",
    url: "https://str.pcradio.ru/one_laut-hi",
  },
  {
    name: "One Direction",
    url: "https://str.pcradio.ru/One_Direction-hi",
  },
  {
    name: "One FM (Hot FM)",
    url: "https://str.pcradio.ru/onefm_sg-hi",
  },
  {
    name: "One Love Hip Hop Radio",
    url: "https://str.pcradio.ru/oldschool_hiphop-hi",
  },
  {
    name: "One Love Hip-Hop",
    url: "https://str.pcradio.ru/one_hiphop-hi",
  },
  {
    name: "Oomph!",
    url: "https://str.pcradio.ru/oomph-hi",
  },
  {
    name: "Opera Radio",
    url: "https://str.pcradio.ru/Opera_radio-hi",
  },
  {
    name: "Orai Sem Cessar",
    url: "https://str.pcradio.ru/orai_sem_ces-hi",
  },
  {
    name: "ORF FM 4",
    url: "https://str.pcradio.ru/fm4_orf_at-hi",
  },
  {
    name: "ORF Radio Kärnten",
    url: "https://str.pcradio.ru/kaernten_orf_at-hi",
  },
  {
    name: "ORF Radio Steiermark",
    url: "https://str.pcradio.ru/orf_steiermark-hi",
  },
  {
    name: "ORF Radio Vorarlberg",
    url: "https://str.pcradio.ru/orf_vorarlberg-hi",
  },
  {
    name: "ORF Wien",
    url: "https://str.pcradio.ru/orf_wien-hi",
  },
  {
    name: "Orgasma",
    url: "https://str.pcradio.ru/orgasma_main-hi",
  },
  {
    name: "Orgasma Black",
    url: "https://str.pcradio.ru/orgasma_black-hi",
  },
  {
    name: "Orgasma Late",
    url: "https://str.pcradio.ru/orgasma_late-hi",
  },
  {
    name: "Origa",
    url: "https://str.pcradio.ru/Origa-hi",
  },
  {
    name: "Ostseewelle Hit-Radio",
    url: "https://str.pcradio.ru/ostseewelle_de-hi",
  },
  {
    name: "Our Neighborhood Radio",
    url: "https://str.pcradio.ru/our_neighbor-hi",
  },
  {
    name: "OZFM",
    url: "https://str.pcradio.ru/ozfm_ca-hi",
  },
  {
    name: "Ozzy Osbourne",
    url: "https://str.pcradio.ru/ozzy_osbourne-hi",
  },
  {
    name: "P10 Country",
    url: "https://str.pcradio.ru/p10_country-hi",
  },
  {
    name: "P11 Bandit",
    url: "https://str.pcradio.ru/bandit_no-hi",
  },
  {
    name: "P3 Star",
    url: "https://str.pcradio.ru/p3_star-hi",
  },
  {
    name: "P4 Norge",
    url: "https://str.pcradio.ru/p4_norge-hi",
  },
  {
    name: "P5 Hits Bergen",
    url: "https://str.pcradio.ru/p5_bergen-hi",
  },
  {
    name: "P5 Hits Oslo",
    url: "https://str.pcradio.ru/p5_oslo-hi",
  },
  {
    name: "P5 Nonstop Hits",
    url: "https://str.pcradio.ru/p5_nonstop-hi",
  },
  {
    name: "P6 Rock",
    url: "https://str.pcradio.ru/p6_rock-hi",
  },
  {
    name: "P7 Klem",
    url: "https://str.pcradio.ru/p7_klem-hi",
  },
  {
    name: "P8 Pop",
    url: "https://str.pcradio.ru/p8_pop-hi",
  },
  {
    name: "P9 Retro",
    url: "https://str.pcradio.ru/p9_retro-hi",
  },
  {
    name: "Paco de Lucia",
    url: "https://str.pcradio.ru/Paco_de_Lucia-hi",
  },
  {
    name: "Pain",
    url: "https://str.pcradio.ru/Pain-hi",
  },
  {
    name: "Pal FM",
    url: "https://str.pcradio.ru/pal_fm_live-hi",
  },
  {
    name: "Pal Nostalji",
    url: "https://str.pcradio.ru/pal_nostalji-hi",
  },
  {
    name: "Pal Orient",
    url: "https://str.pcradio.ru/pal_orient-hi",
  },
  {
    name: "Pamplona Colombia Radio",
    url: "https://str.pcradio.ru/pamplona_colombia-hi",
  },
  {
    name: "Pannon Rádió",
    url: "https://str.pcradio.ru/pannon_radio-hi",
  },
  {
    name: "Panoramix Radio Station",
    url: "https://str.pcradio.ru/panoramix-hi",
  },
  {
    name: "Panradio",
    url: "https://str.pcradio.ru/panradio_de-hi",
  },
  {
    name: "Pantera",
    url: "https://str.pcradio.ru/Pantera-hi",
  },
  {
    name: "Paprika Rádió 95.1 FM",
    url: "https://str.pcradio.ru/paprika_radio-hi",
  },
  {
    name: "Papua Radio",
    url: "https://str.pcradio.ru/PapuaRadio-hi",
  },
  {
    name: "Paradise FM 103.1 (Curaçao)",
    url: "https://str.pcradio.ru/paradise_1031-hi",
  },
  {
    name: "Paranoia Web",
    url: "https://str.pcradio.ru/paranoiaweb_com-hi",
  },
  {
    name: "Parlamenti radio (MR5)",
    url: "https://str.pcradio.ru/parlamenti_radio_mr5-hi",
  },
  {
    name: "Parov Stelar",
    url: "https://str.pcradio.ru/parov_stelar-hi",
  },
  {
    name: "Party Dance Radio",
    url: "https://str.pcradio.ru/partydance_vip-hi",
  },
  {
    name: "Party Hit Radio",
    url: "https://str.pcradio.ru/party_hit_radio-hi",
  },
  {
    name: "Party Maker",
    url: "https://str.pcradio.ru/party_maker_radio-hi",
  },
  {
    name: "Party Vibe Breakbeat - HipHop",
    url: "https://str.pcradio.ru/partyvibe_break-hi",
  },
  {
    name: "Party Vibe DnB - Jungle",
    url: "https://str.pcradio.ru/partyvibe_dnb-hi",
  },
  {
    name: "Party Vibe Dubstep - Breakbeat",
    url: "https://str.pcradio.ru/partyvibe_dub-hi",
  },
  {
    name: "Party Vibe Pop - Indie",
    url: "https://str.pcradio.ru/partyvibe_pop-hi",
  },
  {
    name: "Party Vibe Psy Trance - Goa",
    url: "https://str.pcradio.ru/partyvibe_trance-hi",
  },
  {
    name: "Party Vibe Rap - HipHop",
    url: "https://str.pcradio.ru/partyvibe_rap-hi",
  },
  {
    name: "Party Vibe Reggae - Roots",
    url: "https://str.pcradio.ru/partyvibe_reggae-hi",
  },
  {
    name: "Party Vibe Relax",
    url: "https://str.pcradio.ru/partyvibe_ambient-hi",
  },
  {
    name: "Party Vibe Rock - Country",
    url: "https://str.pcradio.ru/partyvibe_rock-hi",
  },
  {
    name: "Party Vibe Techno - House",
    url: "https://str.pcradio.ru/partyvibe_techno-hi",
  },
  {
    name: "Party107",
    url: "https://str.pcradio.ru/party_107-hi",
  },
  {
    name: "Partyradio24",
    url: "https://str.pcradio.ru/partyradio24_de-hi",
  },
  {
    name: "Patricia Kaas",
    url: "https://str.pcradio.ru/Patricia_Kaas-hi",
  },
  {
    name: "Paul in Rio Radio",
    url: "https://str.pcradio.ru/paul_in_rio-hi",
  },
  {
    name: "Paul Mauriat",
    url: "https://str.pcradio.ru/paul_mauriat-hi",
  },
  {
    name: "Peli One FM",
    url: "https://str.pcradio.ru/pelione_fm-hi",
  },
  {
    name: "Pendulum",
    url: "https://str.pcradio.ru/Pendulum-hi",
  },
  {
    name: "Peng Li Yuan",
    url: "https://str.pcradio.ru/Peng_Li_Yuan-hi",
  },
  {
    name: "Perfectune FM",
    url: "https://str.pcradio.ru/perfectune_fm-hi",
  },
  {
    name: "Pesti Kabaré",
    url: "https://str.pcradio.ru/pesti_kabare-hi",
  },
  {
    name: "Pet Shop Boys",
    url: "https://str.pcradio.ru/pet_shop_boys-hi",
  },
  {
    name: "Petofi Radio (MR2)",
    url: "https://str.pcradio.ru/petofi-hi",
  },
  {
    name: "Phil Collins",
    url: "https://str.pcradio.ru/phil_collins-hi",
  },
  {
    name: "Piano Relax Radio",
    url: "https://str.pcradio.ru/piano_relax_radio_pcradio-hi",
  },
  {
    name: "Piano радио",
    url: "https://str.pcradio.ru/piano_radio_pcradio-hi",
  },
  {
    name: "Pik 100",
    url: "https://str.pcradio.ru/pik100-hi",
  },
  {
    name: "Pilot FM",
    url: "https://str.pcradio.ru/pilotfm_com-hi",
  },
  {
    name: "Pink Floyd",
    url: "https://str.pcradio.ru/Pink_Floyd-hi",
  },
  {
    name: "Pioneer DJ",
    url: "https://str.pcradio.ru/pioneer_dj_radio-hi",
  },
  {
    name: "Pirate Gong",
    url: "https://str.pcradio.ru/pirate_gong-hi",
  },
  {
    name: "Placebo",
    url: "https://str.pcradio.ru/placebo-hi",
  },
  {
    name: "Planet Hip Hop (MRG.fm)",
    url: "https://str.pcradio.ru/mrg_planethip-hi",
  },
  {
    name: "Planet Radio",
    url: "https://str.pcradio.ru/planet_radio_de-hi",
  },
  {
    name: "Planet Rock",
    url: "https://str.pcradio.ru/planet_rock-hi",
  },
  {
    name: "Planetfrequency Radio",
    url: "https://str.pcradio.ru/planetfreq_us-hi",
  },
  {
    name: "Play Radio Romania",
    url: "https://str.pcradio.ru/playradio_org-hi",
  },
  {
    name: "Play Star FM",
    url: "https://str.pcradio.ru/play_star_fm-hi",
  },
  {
    name: "Plazma",
    url: "https://str.pcradio.ru/plazma-hi",
  },
  {
    name: "Plusz FM",
    url: "https://str.pcradio.ru/pluszfm_ro-hi",
  },
  {
    name: "PMR",
    url: "https://str.pcradio.ru/pmr_lt-hi",
  },
  {
    name: "PN Eins Dance",
    url: "https://str.pcradio.ru/pneins_dance-hi",
  },
  {
    name: "PN Eins Urban",
    url: "https://str.pcradio.ru/pneins_urban-hi",
  },
  {
    name: "Point Blank FM",
    url: "https://str.pcradio.ru/pointblank_fm-hi",
  },
  {
    name: "6 FM",
    url: "https://str.pcradio.ru/polis1026-hi",
  },
  {
    name: "Polskie Radio - Radio Dla Ciebie (RDC)",
    url: "https://str.pcradio.ru/rdc_pl-hi",
  },
  {
    name: "Polskie radio 1 - Jedynka",
    url: "https://str.pcradio.ru/polskie_1-hi",
  },
  {
    name: "Polskie radio 2 - Dwójka",
    url: "https://str.pcradio.ru/polskie_2-hi",
  },
  {
    name: "Polskie radio 24",
    url: "https://str.pcradio.ru/polskie_24-hi",
  },
  {
    name: "Polskie radio 3 - Trójka",
    url: "https://str.pcradio.ru/polskie_3-hi",
  },
  {
    name: "Polskie radio 4 - Czwórka",
    url: "https://str.pcradio.ru/polskie_4-hi",
  },
  {
    name: "Polygon.FM",
    url: "https://str.pcradio.ru/polygon_fm-hi",
  },
  {
    name: "PonyvilleFM PVFM Free!",
    url: "https://str.pcradio.ru/pvfm_3-hi",
  },
  {
    name: "PonyvilleFM PVFM One",
    url: "https://str.pcradio.ru/pvfm_one-hi",
  },
  {
    name: "PonyvilleFM PVFM Two",
    url: "https://str.pcradio.ru/pvfm_2-hi",
  },
  {
    name: "Pop Club",
    url: "https://str.pcradio.ru/Pop_Club-hi",
  },
  {
    name: "PopCanRadio",
    url: "https://str.pcradio.ru/popcanradio-hi",
  },
  {
    name: "Popradio Ostfriesland",
    url: "https://str.pcradio.ru/popradio_ost-hi",
  },
  {
    name: "Poptarisznya",
    url: "https://str.pcradio.ru/poptarisznya_hu-hi",
  },
  {
    name: "Positiva Mix",
    url: "https://str.pcradio.ru/positiva_mix-hi",
  },
  {
    name: "Positive House",
    url: "https://str.pcradio.ru/positivehouse_fm-hi",
  },
  {
    name: "Power Dance",
    url: "https://str.pcradio.ru/power_dance_tr-hi",
  },
  {
    name: "Power FM (Киев)",
    url: "https://str.pcradio.ru/powerfm_ua-hi",
  },
  {
    name: "Power FM (Стамбул)",
    url: "https://str.pcradio.ru/power_fm_tr-hi",
  },
  {
    name: "Power Hit Radio (Вильнюс)",
    url: "https://str.pcradio.ru/powerhit_radio-hi",
  },
  {
    name: "Power Hit Radio (Таллинн)",
    url: "https://str.pcradio.ru/pwr_hit_ee-hi",
  },
  {
    name: "Power Pop",
    url: "https://str.pcradio.ru/power_pop_tr-hi",
  },
  {
    name: "Power Radio",
    url: "https://str.pcradio.ru/powerradio_de-hi",
  },
  {
    name: "Power Turk FM",
    url: "https://str.pcradio.ru/power_turk-hi",
  },
  {
    name: "Power Хит Радио (Мурманск)",
    url: "https://str.pcradio.ru/power1045-hi",
  },
  {
    name: "Powerhitz - Hip Hop",
    url: "https://str.pcradio.ru/powerhitz_hiphop-hi",
  },
  {
    name: "PRG Radio",
    url: "https://str.pcradio.ru/prgradio_com-hi",
  },
  {
    name: "Primaton",
    url: "https://str.pcradio.ru/primaton_de-hi",
  },
  {
    name: "Primavera24",
    url: "https://str.pcradio.ru/primavera24-hi",
  },
  {
    name: "ProFM",
    url: "https://str.pcradio.ru/profm_ro_main-hi",
  },
  {
    name: "Prog Rock and Metal (PRM)",
    url: "https://str.pcradio.ru/progrock_metal-hi",
  },
  {
    name: "Progressive by Psylvain",
    url: "https://str.pcradio.ru/progr_psyl-hi",
  },
  {
    name: "Progressive FM",
    url: "https://str.pcradio.ru/progressive_fm_pcradio-hi",
  },
  {
    name: "Promo DJ - 186mph",
    url: "https://str.pcradio.ru/promo_186mph-hi",
  },
  {
    name: "Promo DJ - 300 kmh",
    url: "https://str.pcradio.ru/promo_300kmh-hi",
  },
  {
    name: "Promo DJ - Channel 5",
    url: "https://str.pcradio.ru/promo_channel5-hi",
  },
  {
    name: "Promo DJ - Deep",
    url: "https://str.pcradio.ru/promo_deep-hi",
  },
  {
    name: "Promo DJ - Full Moon",
    url: "https://str.pcradio.ru/promo_full_moon-hi",
  },
  {
    name: "Promo DJ - Mini",
    url: "https://str.pcradio.ru/promo_mini-hi",
  },
  {
    name: "Promo DJ - Nu",
    url: "https://str.pcradio.ru/promo_nu-hi",
  },
  {
    name: "Promo DJ - Old-School",
    url: "https://str.pcradio.ru/promo_old_school-hi",
  },
  {
    name: "Promo DJ - Pop",
    url: "https://str.pcradio.ru/promo_pop-hi",
  },
  {
    name: "Promo DJ - Strange",
    url: "https://str.pcradio.ru/promo_strange-hi",
  },
  {
    name: "Promo DJ - Too Deep",
    url: "https://str.pcradio.ru/promo_too_deep-hi",
  },
  {
    name: "Promo DJ - Too Nu",
    url: "https://str.pcradio.ru/promo_too_nu-hi",
  },
  {
    name: "Promo DJ - Top 100",
    url: "https://str.pcradio.ru/promo_top100-hi",
  },
  {
    name: "Promo DJ - Vata",
    url: "https://str.pcradio.ru/promo_vata-hi",
  },
  {
    name: "Promo DJ - Yo",
    url: "https://str.pcradio.ru/promo_yo-hi",
  },
  {
    name: "Promo DJ - Dubstep",
    url: "https://str.pcradio.ru/promo_dubstep-hi",
  },
  {
    name: "Promo DJ - Klubb",
    url: "https://str.pcradio.ru/promo_klubb-hi",
  },
  {
    name: "Proton Radio",
    url: "https://str.pcradio.ru/protonradio_com-hi",
  },
  {
    name: "Psy Chill Zone",
    url: "https://str.pcradio.ru/psychillout_zone-hi",
  },
  {
    name: "PsyRadio Alternative",
    url: "https://str.pcradio.ru/psyradio_fm_altern-hi",
  },
  {
    name: "PsyRadio Chillout",
    url: "https://str.pcradio.ru/psyradio_fm_chill-hi",
  },
  {
    name: "PsyRadio Progressive",
    url: "https://str.pcradio.ru/psyradio_fm_progr-hi",
  },
  {
    name: "PsyRadio PsyTrance",
    url: "https://str.pcradio.ru/psyradio_fm_ptran-hi",
  },
  {
    name: "PsyStation Classic Goa Psy Trance",
    url: "https://str.pcradio.ru/psystation_classicgoa-hi",
  },
  {
    name: "PsyStation Dark Root Psy Trance",
    url: "https://str.pcradio.ru/psystation_darkroot-hi",
  },
  {
    name: "Puls (BR)",
    url: "https://str.pcradio.ru/puls_br-hi",
  },
  {
    name: "Pulse 87",
    url: "https://str.pcradio.ru/pulse_87-hi",
  },
  {
    name: "PulseEDM Dance Music Radio",
    url: "https://str.pcradio.ru/pulse_edm-hi",
  },
  {
    name: "PulsRadio 80s",
    url: "https://str.pcradio.ru/pulsradio_80s-hi",
  },
  {
    name: "PulsRadio 90s",
    url: "https://str.pcradio.ru/pulsradio_90s-hi",
  },
  {
    name: "PulsRadio Club",
    url: "https://str.pcradio.ru/pulsradio_club-hi",
  },
  {
    name: "PulsRadio Dance",
    url: "https://str.pcradio.ru/puls_dance-hi",
  },
  {
    name: "PulsRadio Hits",
    url: "https://str.pcradio.ru/pulsradio_hits-hi",
  },
  {
    name: "PulsRadio Lounge",
    url: "https://str.pcradio.ru/pulsradio_lounge-hi",
  },
  {
    name: "PulsRadio Trance",
    url: "https://str.pcradio.ru/pulsradio_trance-hi",
  },
  {
    name: "Pulzus FM 92.1 (Пульс FM)",
    url: "https://str.pcradio.ru/pulsefm_ukr-hi",
  },
  {
    name: "Punkrockers-Radio",
    url: "https://str.pcradio.ru/punkrockers_de-hi",
  },
  {
    name: "Pure 24",
    url: "https://str.pcradio.ru/pure24_nl-hi",
  },
  {
    name: "Pure FM (Сейшелы)",
    url: "https://str.pcradio.ru/purefm_sc-hi",
  },
  {
    name: "Pure FM - Berlins Dance Radio",
    url: "https://str.pcradio.ru/purefm_bdr-hi",
  },
  {
    name: "Pure Radio",
    url: "https://str.pcradio.ru/pureradio_one-hi",
  },
  {
    name: "Push FM",
    url: "https://str.pcradio.ru/laut_pushfm-hi",
  },
  {
    name: "Qfm 94.3 (Тенерифе)",
    url: "https://str.pcradio.ru/qfm943-hi",
  },
  {
    name: "Qmusic",
    url: "https://str.pcradio.ru/gmusic_nl-hi",
  },
  {
    name: "Qmusic Nonstop",
    url: "https://str.pcradio.ru/qmusic_nonstop-hi",
  },
  {
    name: "Queen",
    url: "https://str.pcradio.ru/Queen-hi",
  },
  {
    name: "Querfunk",
    url: "https://str.pcradio.ru/querfunk_de-hi",
  },
  {
    name: "Quran Live Radio",
    url: "https://str.pcradio.ru/quran_live-hi",
  },
  {
    name: "R.E.M.",
    url: "https://str.pcradio.ru/R_E_M-hi",
  },
  {
    name: "R.SA - Maxis Maximal",
    url: "https://str.pcradio.ru/rsa_maxis-hi",
  },
  {
    name: "R.SA Ostrock",
    url: "https://str.pcradio.ru/rsa_ostrock-hi",
  },
  {
    name: "R.SA Sachsen",
    url: "https://str.pcradio.ru/rsa_sachsen-hi",
  },
  {
    name: "RAC105",
    url: "https://str.pcradio.ru/rac105_barc-hi",
  },
  {
    name: "Radijas TAU 102.9 FM",
    url: "https://str.pcradio.ru/tau_lt-hi",
  },
  {
    name: "Radio 1 FM 93.6",
    url: "https://str.pcradio.ru/radio1_936-hi",
  },
  {
    name: "Radio 10",
    url: "https://str.pcradio.ru/radio10goldnl-hi",
  },
  {
    name: "Radio 100",
    url: "https://str.pcradio.ru/radio100-hi",
  },
  {
    name: "Radio 105",
    url: "https://str.pcradio.ru/radio105_net-hi",
  },
  {
    name: "Radio 105 Classics",
    url: "https://str.pcradio.ru/radio105_classics-hi",
  },
  {
    name: "Radio 105 Hip Hop and RnB",
    url: "https://str.pcradio.ru/radio105_hiprnb-hi",
  },
  {
    name: "Radio 105 Hits",
    url: "https://str.pcradio.ru/radio105_hits-hi",
  },
  {
    name: "Radio 105 InDaKlubb",
    url: "https://str.pcradio.ru/radio105_indaklubb-hi",
  },
  {
    name: "Radio 105 Miami",
    url: "https://str.pcradio.ru/radio105_miami-hi",
  },
  {
    name: "Radio 105 Trap",
    url: "https://str.pcradio.ru/radio105_trap-hi",
  },
  {
    name: "Radio 13",
    url: "https://str.pcradio.ru/radio13_ru-hi",
  },
  {
    name: "Radio 21 (Rock 'n Pop)",
    url: "https://str.pcradio.ru/radio21_de-hi",
  },
  {
    name: "Radio 24 (Цюрих)",
    url: "https://str.pcradio.ru/radio24_ch-hi",
  },
  {
    name: "Radio 24 - Il Sole 24 ore",
    url: "https://str.pcradio.ru/radio24_ilsole-hi",
  },
  {
    name: "Radio 2Day",
    url: "https://str.pcradio.ru/radio2_day-hi",
  },
  {
    name: "Radio 32",
    url: "https://str.pcradio.ru/radio32_ch-hi",
  },
  {
    name: "Radio 32 - Goldies",
    url: "https://str.pcradio.ru/radio32_goldies-hi",
  },
  {
    name: "Radio 32 - Hits",
    url: "https://str.pcradio.ru/radio32_hits-hi",
  },
  {
    name: "Radio 32 - Rock",
    url: "https://str.pcradio.ru/radio32_rock-hi",
  },
  {
    name: "Radio 32 - Schlager",
    url: "https://str.pcradio.ru/radio32_schlag-hi",
  },
  {
    name: "Radio 412",
    url: "https://str.pcradio.ru/radio_412-hi",
  },
  {
    name: "Radio 538",
    url: "https://str.pcradio.ru/RADIO538_nl-hi",
  },
  {
    name: "Radio 538 Hitzone",
    url: "https://str.pcradio.ru/radio538_hitzone-hi",
  },
  {
    name: "Radio 538 Nonstop",
    url: "https://str.pcradio.ru/radio538_nonstop-hi",
  },
  {
    name: "Radio 538 Party",
    url: "https://str.pcradio.ru/radio538_party-hi",
  },
  {
    name: "Radio 538 Top 40",
    url: "https://str.pcradio.ru/radio538_top40-hi",
  },
  {
    name: "Radio 7 (Ульм)",
    url: "https://str.pcradio.ru/radio7_de-hi",
  },
  {
    name: "Radio 7 90er",
    url: "https://str.pcradio.ru/radio7_de_90er-hi",
  },
  {
    name: "Radio 7 MixShow",
    url: "https://str.pcradio.ru/radio7_de_mixshow-hi",
  },
  {
    name: "Radio 8",
    url: "https://str.pcradio.ru/radio8_de-hi",
  },
  {
    name: "Radio 886",
    url: "https://str.pcradio.ru/radio_886-hi",
  },
  {
    name: "Radio 90vier",
    url: "https://str.pcradio.ru/radio90vier-hi",
  },
  {
    name: "Radio ABC",
    url: "https://str.pcradio.ru/radioabc_dk-hi",
  },
  {
    name: "Radio Afsana",
    url: "https://str.pcradio.ru/afsana_ca-hi",
  },
  {
    name: "Radio AGORA 105.5",
    url: "https://str.pcradio.ru/agora_at-hi",
  },
  {
    name: "Radio Aktiv 106.5",
    url: "https://str.pcradio.ru/aktiv_1065-hi",
  },
  {
    name: "Radio Albena",
    url: "https://str.pcradio.ru/albena_md-hi",
  },
  {
    name: "Radio ALR",
    url: "https://str.pcradio.ru/alr_radio_dk-hi",
  },
  {
    name: "Radio AM 750",
    url: "https://str.pcradio.ru/am750_arg-hi",
  },
  {
    name: "Radio America Latina",
    url: "https://str.pcradio.ru/america_latina-hi",
  },
  {
    name: "Radio Ankerherz",
    url: "https://str.pcradio.ru/anker_herz-hi",
  },
  {
    name: "Radio Aquarius",
    url: "https://str.pcradio.ru/aquarius_gr-hi",
  },
  {
    name: "Radio ARA",
    url: "https://str.pcradio.ru/ara_lu-hi",
  },
  {
    name: "Radio Arev",
    url: "https://str.pcradio.ru/radio_arev-hi",
  },
  {
    name: "Radio Argovia",
    url: "https://str.pcradio.ru/argovia_ch-hi",
  },
  {
    name: "Radio Armenie",
    url: "https://str.pcradio.ru/radioarmenie_com-hi",
  },
  {
    name: "Radio Art - Meditation",
    url: "https://str.pcradio.ru/art_radio_meditation-hi",
  },
  {
    name: "Radio Art - Solo Flute",
    url: "https://str.pcradio.ru/art_radio_soloflute-hi",
  },
  {
    name: "Radio Art - Solo Harp",
    url: "https://str.pcradio.ru/art_radio_soloharp-hi",
  },
  {
    name: "Radio Aurora",
    url: "https://str.pcradio.ru/radioaurora_am-hi",
  },
  {
    name: "Radio AWN",
    url: "https://str.pcradio.ru/awn_de-hi",
  },
  {
    name: "Radio B2 (Берлин)",
    url: "https://str.pcradio.ru/radiob2_berlin-hi",
  },
  {
    name: "Radio B2 SchlagerMixx",
    url: "https://str.pcradio.ru/radiob2_de-hi",
  },
  {
    name: "Radio Bamberg",
    url: "https://str.pcradio.ru/bamberg_radio-hi",
  },
  {
    name: "Radio Bavaria International",
    url: "https://str.pcradio.ru/bavaria_international-hi",
  },
  {
    name: "Radio Beat",
    url: "https://str.pcradio.ru/beat_isr-hi",
  },
  {
    name: "Radio Best FM (Братислава)",
    url: "https://str.pcradio.ru/bestfm_sk-hi",
  },
  {
    name: "Radio Beta",
    url: "https://str.pcradio.ru/beta_sk-hi",
  },
  {
    name: "Radio Beta - Hity 80's a 90's",
    url: "https://str.pcradio.ru/beta_8090-hi",
  },
  {
    name: "Radio Beta - Hráme Jubilantom",
    url: "https://str.pcradio.ru/beta_jubilantom-hi",
  },
  {
    name: "Radio BOB!",
    url: "https://str.pcradio.ru/radiobob_de-hi",
  },
  {
    name: "Radio Bob! Deutschrock",
    url: "https://str.pcradio.ru/radiobob_deurock-hi",
  },
  {
    name: "Radio BOB! Rockabilly",
    url: "https://str.pcradio.ru/radiobob_de_rockabil-hi",
  },
  {
    name: "Radio Bochum 98.5 FM",
    url: "https://str.pcradio.ru/radiobochum_de-hi",
  },
  {
    name: "Radio Bonn/Rhein-Sieg",
    url: "https://str.pcradio.ru/bonn_rheinsieg-hi",
  },
  {
    name: "Radio Brocken",
    url: "https://str.pcradio.ru/brocken_de-hi",
  },
  {
    name: "Radio Caba",
    url: "https://str.pcradio.ru/caba_urug-hi",
  },
  {
    name: "Radio Cafe",
    url: "https://str.pcradio.ru/radio_cafe-hi",
  },
  {
    name: "Radio Caprice - Classical Choral / Vocal",
    url: "https://str.pcradio.ru/caprice_claschoral-hi",
  },
  {
    name: "Radio Caprice - Classical Crossover",
    url: "https://str.pcradio.ru/caprice_classcross-hi",
  },
  {
    name: "Radio Caprice - Drum and Bass",
    url: "https://str.pcradio.ru/caprice_dnb-hi",
  },
  {
    name: "Radio Caprice - Melodic Black Metal",
    url: "https://str.pcradio.ru/caprice_mbm-hi",
  },
  {
    name: "Radio Caprice - Minimal Techno",
    url: "https://str.pcradio.ru/caprice_minitech-hi",
  },
  {
    name: "Radio Caprice - Neoclassical Metal",
    url: "https://str.pcradio.ru/caprice_neoclmetal-hi",
  },
  {
    name: "Radio Caprice - Neoclassical music",
    url: "https://str.pcradio.ru/caprice_neoclass-hi",
  },
  {
    name: "Radio Caprice - Power Metal",
    url: "https://str.pcradio.ru/caprice_powermetal-hi",
  },
  {
    name: "Radio Caprice - Rock Ballads",
    url: "https://str.pcradio.ru/caprice_rock_ballads-hi",
  },
  {
    name: "Radio Caprice - Ska-Punk / Core",
    url: "https://str.pcradio.ru/caprice_skapunk-hi",
  },
  {
    name: "Radio Caprice - Spacesynth - Synthdance",
    url: "https://str.pcradio.ru/radcap_spacesynth-hi",
  },
  {
    name: "Radio Caprice - Uplifiting Trance",
    url: "https://str.pcradio.ru/caprice_uplift_trance-hi",
  },
  {
    name: "Radio Caprice - Witch House",
    url: "https://str.pcradio.ru/caprice_witchhouse-hi",
  },
  {
    name: "Radio Caprice - Русский Панк Рок",
    url: "https://str.pcradio.ru/caprice_ruspunk-hi",
  },
  {
    name: "Radio Caprice - Русский Постшансон",
    url: "https://str.pcradio.ru/caprice_postshans-hi",
  },
  {
    name: "Radio Caprice - Русский шансон",
    url: "https://str.pcradio.ru/caprice_russhans-hi",
  },
  {
    name: "Radio Caprice - Dark Psytrance",
    url: "https://str.pcradio.ru/caprice_darkpsy-hi",
  },
  {
    name: "Radio Caprice - NeuroFunk/TechnoID",
    url: "https://str.pcradio.ru/caprice_neurofunk-hi",
  },
  {
    name: "Radio Caprice - Русская народная",
    url: "https://str.pcradio.ru/caprice_rusfolk-hi",
  },
  {
    name: "Radio Caprice - Русский рэп",
    url: "https://str.pcradio.ru/caprice_rusrap-hi",
  },
  {
    name: "Radio Caroline",
    url: "https://str.pcradio.ru/caroline_co_uk-hi",
  },
  {
    name: "Radio Caroline (Рен)",
    url: "https://str.pcradio.ru/caroline_fr-hi",
  },
  {
    name: "Radio Caroline Flashback",
    url: "https://str.pcradio.ru/caroline_co_flash-hi",
  },
  {
    name: "Radio Católica Mundial EWTN",
    url: "https://str.pcradio.ru/catolica_mundial-hi",
  },
  {
    name: "Radio CBN (Сан-Паулу)",
    url: "https://str.pcradio.ru/cbnnoticias-hi",
  },
  {
    name: "Radio Central",
    url: "https://str.pcradio.ru/radiocentral_ch-hi",
  },
  {
    name: "Radio Charivari",
    url: "https://str.pcradio.ru/charivari_de-hi",
  },
  {
    name: "Radio Charivari (Вюрцбург)",
    url: "https://str.pcradio.ru/charivari_wurzburg-hi",
  },
  {
    name: "Radio Charivari (Регенсбург)",
    url: "https://str.pcradio.ru/charivari_regens-hi",
  },
  {
    name: "Radio Cinco - Rádio Nacional de Angola",
    url: "https://str.pcradio.ru/radio5_nac_angola-hi",
  },
  {
    name: "Radio City",
    url: "https://str.pcradio.ru/radiocity_fi-hi",
  },
  {
    name: "Radio City Freedom",
    url: "https://str.pcradio.ru/radiocity_freedom-hi",
  },
  {
    name: "Radio City Hindi",
    url: "https://str.pcradio.ru/radiocity_hindy-hi",
  },
  {
    name: "Radio Clasic Beethoven",
    url: "https://str.pcradio.ru/clasic_ro_beethoven-hi",
  },
  {
    name: "Radio Clasic Hits",
    url: "https://str.pcradio.ru/clasic_ro_hits-hi",
  },
  {
    name: "Radio Clasic Jazz",
    url: "https://str.pcradio.ru/clasic_ro_jazz-hi",
  },
  {
    name: "Radio Clasic Kids",
    url: "https://str.pcradio.ru/clasic_ro_kids-hi",
  },
  {
    name: "Radio Clasic Live",
    url: "https://str.pcradio.ru/clasic_ro_live-hi",
  },
  {
    name: "Radio Clasic Mozart",
    url: "https://str.pcradio.ru/clasic_ro_mozart-hi",
  },
  {
    name: "Radio Clasic Opera",
    url: "https://str.pcradio.ru/clasic_ro_opera-hi",
  },
  {
    name: "Radio Clasic Popular",
    url: "https://str.pcradio.ru/clasic_ro_popular-hi",
  },
  {
    name: "Radio Clasic Strauss",
    url: "https://str.pcradio.ru/clasic_ro_strauss-hi",
  },
  {
    name: "Radio Classique",
    url: "https://str.pcradio.ru/classique_fr-hi",
  },
  {
    name: "Radio Contact Ostbelgien",
    url: "https://str.pcradio.ru/contact_ostbelgien-hi",
  },
  {
    name: "Radio Country Acadienne",
    url: "https://str.pcradio.ru/country_acadienne-hi",
  },
  {
    name: "Radio Country Live",
    url: "https://str.pcradio.ru/country_live-hi",
  },
  {
    name: "Radio de Fe Panamá",
    url: "https://str.pcradio.ru/defe_panama-hi",
  },
  {
    name: "Radio Dechovka",
    url: "https://str.pcradio.ru/dechovka_cz-hi",
  },
  {
    name: "Radio Decibel",
    url: "https://str.pcradio.ru/decibel_nl-hi",
  },
  {
    name: "Radio Diva FM",
    url: "https://str.pcradio.ru/radio_diva_fm-hi",
  },
  {
    name: "Radio DJ Shmagi",
    url: "https://str.pcradio.ru/dj_shmagi-hi",
  },
  {
    name: "Radio Dresden",
    url: "https://str.pcradio.ru/radiodresden_de-hi",
  },
  {
    name: "Radio Dresden - 80er Kulthits",
    url: "https://str.pcradio.ru/radiodresden_80-hi",
  },
  {
    name: "Radio Dresden - 90er XXL",
    url: "https://str.pcradio.ru/radiodresden_90-hi",
  },
  {
    name: "Radio Dreyeckland (RDL)",
    url: "https://str.pcradio.ru/dreyeckland_de-hi",
  },
  {
    name: "Radio Dreyeckland (Мюлуз)",
    url: "https://str.pcradio.ru/dreyeckland_mulh-hi",
  },
  {
    name: "Radio Driland",
    url: "https://str.pcradio.ru/drilland_laut-hi",
  },
  {
    name: "Radio E",
    url: "https://str.pcradio.ru/radioe_net-hi",
  },
  {
    name: "Radio EgoЇсти",
    url: "https://str.pcradio.ru/mjoy_egoradio-hi",
  },
  {
    name: "Radio Eins",
    url: "https://str.pcradio.ru/radioeins_com-hi",
  },
  {
    name: "Radio Elmar",
    url: "https://str.pcradio.ru/elmar_ee-hi",
  },
  {
    name: "Radio Energy (София)",
    url: "https://str.pcradio.ru/nrj_bg_sofia-hi",
  },
  {
    name: "Radio Enno 100.4",
    url: "https://str.pcradio.ru/enno_1004-hi",
  },
  {
    name: "Radio Essential",
    url: "https://str.pcradio.ru/radioessential-hi",
  },
  {
    name: "Radio Euroherz",
    url: "https://str.pcradio.ru/euroherz_de-hi",
  },
  {
    name: "Radio Evangelo Centro Italia",
    url: "https://str.pcradio.ru/evangelo-hi",
  },
  {
    name: "Radio Eviva",
    url: "https://str.pcradio.ru/eviva_ch-hi",
  },
  {
    name: "Radio F 94.5",
    url: "https://str.pcradio.ru/radiof_945-hi",
  },
  {
    name: "Radio F 94.5 - Coppa Italiana",
    url: "https://str.pcradio.ru/radiof_945_ci-hi",
  },
  {
    name: "Radio F 94.5 - Made in Germany",
    url: "https://str.pcradio.ru/radiof_945_mig-hi",
  },
  {
    name: "Radio Fama",
    url: "https://str.pcradio.ru/radiofama_am-hi",
  },
  {
    name: "Radio Farda",
    url: "https://str.pcradio.ru/farda_ir-hi",
  },
  {
    name: "Radio ffn",
    url: "https://str.pcradio.ru/ffn_radio-hi",
  },
  {
    name: "Radio ffn Comedy",
    url: "https://str.pcradio.ru/ffn_comedy-hi",
  },
  {
    name: "Radio ffn Peppermint FM",
    url: "https://str.pcradio.ru/ffn_pepper-hi",
  },
  {
    name: "Radio FG",
    url: "https://str.pcradio.ru/radiofg_main-hi",
  },
  {
    name: "Radio FG Belgique",
    url: "https://str.pcradio.ru/radiofg_belgique-hi",
  },
  {
    name: "Radio FG Chic",
    url: "https://str.pcradio.ru/radiofg_chic-hi",
  },
  {
    name: "Radio FG Clubbing",
    url: "https://str.pcradio.ru/radiofg_club-hi",
  },
  {
    name: "Radio FG Deep Dance",
    url: "https://str.pcradio.ru/radiofg_deepdance-hi",
  },
  {
    name: "Radio FG Gay Party",
    url: "https://str.pcradio.ru/radiofg_gay-hi",
  },
  {
    name: "Radio FG Non Stop",
    url: "https://str.pcradio.ru/radiofg_nonstop-hi",
  },
  {
    name: "Radio FG Underground",
    url: "https://str.pcradio.ru/radiofg_ug-hi",
  },
  {
    name: "Radio Focus",
    url: "https://str.pcradio.ru/focus_hu-hi",
  },
  {
    name: "Radio Fresh80s",
    url: "https://str.pcradio.ru/fresh80s_de-hi",
  },
  {
    name: "Radio Galaxy Bayern",
    url: "https://str.pcradio.ru/galaxy_bayern-hi",
  },
  {
    name: "Radio Galilée",
    url: "https://str.pcradio.ru/galilee_canada-hi",
  },
  {
    name: "Radio Gege",
    url: "https://str.pcradio.ru/radio_gege_fr-hi",
  },
  {
    name: "Radio Gege",
    url: "https://str.pcradio.ru/radiogege-hi",
  },
  {
    name: "Radio Gibraltar",
    url: "https://str.pcradio.ru/gbc_gi-hi",
  },
  {
    name: "Radio Gibraltar Plus",
    url: "https://str.pcradio.ru/gbc_gi_plus-hi",
  },
  {
    name: "Radio Gloria",
    url: "https://str.pcradio.ru/radiogloria_ch-hi",
  },
  {
    name: "Radio Gold - Real Classics",
    url: "https://str.pcradio.ru/radiogold_de-hi",
  },
  {
    name: "9 FM (Бухарест)",
    url: "https://str.pcradio.ru/gold_ro-hi",
  },
  {
    name: "Radio Gong 106.9",
    url: "https://str.pcradio.ru/gong_1069-hi",
  },
  {
    name: "Radio Gong 97.1",
    url: "https://str.pcradio.ru/gong_971-hi",
  },
  {
    name: "Radio Haifa 107.5",
    url: "https://str.pcradio.ru/radiohaifa_1075-hi",
  },
  {
    name: "Radio Halmstad 88.6",
    url: "https://str.pcradio.ru/halmstad_se-hi",
  },
  {
    name: "Radio Hamburg 2",
    url: "https://str.pcradio.ru/radiohamburg2_de-hi",
  },
  {
    name: "Radio HCJB",
    url: "https://str.pcradio.ru/hcjb_de-hi",
  },
  {
    name: "Radio Holiday",
    url: "https://str.pcradio.ru/holiday_it-hi",
  },
  {
    name: "Radio Ice",
    url: "https://str.pcradio.ru/radioice_ru-hi",
  },
  {
    name: "Radio IN",
    url: "https://str.pcradio.ru/radio_in-hi",
  },
  {
    name: "Radio Italia Canada",
    url: "https://str.pcradio.ru/italia_canada-hi",
  },
  {
    name: "Radio Italia Stoccarda",
    url: "https://str.pcradio.ru/italia_stoccarda-hi",
  },
  {
    name: "Radio Italian Music",
    url: "https://str.pcradio.ru/italia_sydney-hi",
  },
  {
    name: "Radio Italy Live",
    url: "https://str.pcradio.ru/italy_live_ny-hi",
  },
  {
    name: "Radio Jahani (WRN)",
    url: "https://str.pcradio.ru/jahani_wrn-hi",
  },
  {
    name: "Radio Jan 90.7 FM",
    url: "https://str.pcradio.ru/radio_jan_907-hi",
  },
  {
    name: "Radio Kol Rega 96 FM",
    url: "https://str.pcradio.ru/kol_rega_96fm-hi",
  },
  {
    name: "Radio Kroměříž",
    url: "https://str.pcradio.ru/kromeriz_cz-hi",
  },
  {
    name: "Radio Laser 95.9 FM",
    url: "https://str.pcradio.ru/laser_959-hi",
  },
  {
    name: "Radio Leipzig - 90er XXL",
    url: "https://str.pcradio.ru/leipzig_90xxl-hi",
  },
  {
    name: "Radio Liberté",
    url: "https://str.pcradio.ru/liberte_net-hi",
  },
  {
    name: "Radio Love Live",
    url: "https://str.pcradio.ru/love_live_ny-hi",
  },
  {
    name: "Radio Lübeck",
    url: "https://str.pcradio.ru/radioluebeck_de-hi",
  },
  {
    name: "Radio Ma Va Shoma",
    url: "https://str.pcradio.ru/ma_va_shoma-hi",
  },
  {
    name: "Radio Mainwelle",
    url: "https://str.pcradio.ru/mainwelle_de-hi",
  },
  {
    name: "Radio Marca (Барселона)",
    url: "https://str.pcradio.ru/radiomarcabarcelona-hi",
  },
  {
    name: "Radio Margherita",
    url: "https://str.pcradio.ru/margherita_ita-hi",
  },
  {
    name: "Radio Maria Österreich",
    url: "https://str.pcradio.ru/maria_at-hi",
  },
  {
    name: "Radio Marshall 103.5",
    url: "https://str.pcradio.ru/marshall_am-hi",
  },
  {
    name: "Radio Maryja",
    url: "https://str.pcradio.ru/maryja_pl-hi",
  },
  {
    name: "Radio Mediaș 725",
    url: "https://str.pcradio.ru/medias_725-hi",
  },
  {
    name: "Radio Mega-HIT Romania",
    url: "https://str.pcradio.ru/megahit_ro-hi",
  },
  {
    name: "Radio Metal",
    url: "https://str.pcradio.ru/radiometal_com-hi",
  },
  {
    name: "Radio Metro 102.4",
    url: "https://str.pcradio.ru/metro_1024-hi",
  },
  {
    name: "Radio Metropolitana FM (Сан-Паулу)",
    url: "https://str.pcradio.ru/metropolitana-hi",
  },
  {
    name: "Radio Mihan",
    url: "https://str.pcradio.ru/mihan_tv-hi",
  },
  {
    name: "Radio Mirchi 98.3 FM",
    url: "https://str.pcradio.ru/mirchi_983-hi",
  },
  {
    name: "Radio Monte Carlo FM",
    url: "https://str.pcradio.ru/rmc_fm-hi",
  },
  {
    name: "Radio MRS",
    url: "https://str.pcradio.ru/radiomrs_com-hi",
  },
  {
    name: "Radio Muzika",
    url: "https://str.pcradio.ru/muzika_sk-hi",
  },
  {
    name: "Radio Mágica 87.7",
    url: "https://str.pcradio.ru/magica_877-hi",
  },
  {
    name: "Radio Mélodie",
    url: "https://str.pcradio.ru/melodie_sarreg-hi",
  },
  {
    name: "Radio Namkin",
    url: "https://str.pcradio.ru/namkin_boly-hi",
  },
  {
    name: "Radio Natale",
    url: "https://str.pcradio.ru/natale_it-hi",
  },
  {
    name: "Radio Neue Hoffnung",
    url: "https://str.pcradio.ru/rnh_de-hi",
  },
  {
    name: "Radio Neunkirchen",
    url: "https://str.pcradio.ru/neunkirchen_radio-hi",
  },
  {
    name: "Radio New York Live",
    url: "https://str.pcradio.ru/newyork_live-hi",
  },
  {
    name: "Radio New Zealand National",
    url: "https://str.pcradio.ru/rnz_co_national-hi",
  },
  {
    name: "Radio Niederösterreich (ORF NOE)",
    url: "https://str.pcradio.ru/noe_orf-hi",
  },
  {
    name: "Radio Noise Romania",
    url: "https://str.pcradio.ru/radionoise_ro-hi",
  },
  {
    name: "Radio Nord",
    url: "https://str.pcradio.ru/nord_dk-hi",
  },
  {
    name: "Radio Nordsee International",
    url: "https://str.pcradio.ru/nordsee_de-hi",
  },
  {
    name: "Radio Nordseewelle",
    url: "https://str.pcradio.ru/nordseewelle_de-hi",
  },
  {
    name: "Radio North Pole",
    url: "https://str.pcradio.ru/northpole_ala-hi",
  },
  {
    name: "Radio Northsea International",
    url: "https://str.pcradio.ru/north_sea-hi",
  },
  {
    name: "Radio Nova (Хельсинки)",
    url: "https://str.pcradio.ru/nova_helsinki-hi",
  },
  {
    name: "Radio Nova CR",
    url: "https://str.pcradio.ru/novacr_net-hi",
  },
  {
    name: "Radio Oberösterreich - ORF Oö",
    url: "https://str.pcradio.ru/ooe_orf_at-hi",
  },
  {
    name: "Radio OKJ 103.4",
    url: "https://str.pcradio.ru/okj_1034-hi",
  },
  {
    name: "Radio OM Activ",
    url: "https://str.pcradio.ru/om_activ-hi",
  },
  {
    name: "Radio One 103.9 FM (Curaçao)",
    url: "https://str.pcradio.ru/one_1039curacao-hi",
  },
  {
    name: "Radio Oranje",
    url: "https://str.pcradio.ru/radiooranjenl-hi",
  },
  {
    name: "Radio Paloma",
    url: "https://str.pcradio.ru/radiopaloma_de-hi",
  },
  {
    name: "Radio Paradise",
    url: "https://str.pcradio.ru/radioparadise_com-hi",
  },
  {
    name: "Radio Plassenburg",
    url: "https://str.pcradio.ru/plassenburg_de-hi",
  },
  {
    name: "Radio Pokoj",
    url: "https://str.pcradio.ru/pokoj_sk-hi",
  },
  {
    name: "Radio Poland",
    url: "https://str.pcradio.ru/radio_poland-hi",
  },
  {
    name: "Radio Portugal USA",
    url: "https://str.pcradio.ru/portugal_usa-hi",
  },
  {
    name: "Radio Pro Manele",
    url: "https://str.pcradio.ru/pro_manele-hi",
  },
  {
    name: "Radio Provincia 1270 AM",
    url: "https://str.pcradio.ru/provincia_1270-hi",
  },
  {
    name: "Radio PSR",
    url: "https://str.pcradio.ru/radiopsr_de_live-hi",
  },
  {
    name: "Radio Ramasuri",
    url: "https://str.pcradio.ru/ramasuri_de-hi",
  },
  {
    name: "Radio Ran",
    url: "https://str.pcradio.ru/radioran_co_il-hi",
  },
  {
    name: "Radio Record (Римини)",
    url: "https://str.pcradio.ru/record_rimini-hi",
  },
  {
    name: "Radio Regent",
    url: "https://str.pcradio.ru/radioregent_com-hi",
  },
  {
    name: "Radio Rennes 100.8 FM",
    url: "https://str.pcradio.ru/rennes_1008-hi",
  },
  {
    name: "Radio Rheinwelle 92.5 FM",
    url: "https://str.pcradio.ru/rheinwelle_925-hi",
  },
  {
    name: "Radio Riel - Ragtime",
    url: "https://str.pcradio.ru/radioriel_ragtime-hi",
  },
  {
    name: "Radio Rock On",
    url: "https://str.pcradio.ru/rock_on_la-hi",
  },
  {
    name: "Radio ROKS",
    url: "https://str.pcradio.ru/radioroks_ua-hi",
  },
  {
    name: "Radio ROKS - Hard'n'Heavy",
    url: "https://str.pcradio.ru/roks_ukr_hard-hi",
  },
  {
    name: "Radio ROKS - Новый рок",
    url: "https://str.pcradio.ru/roks_ukr_newrock-hi",
  },
  {
    name: "Radio ROKS - Рок-баллады",
    url: "https://str.pcradio.ru/roks_ukr_ballad-hi",
  },
  {
    name: "Radio ROKS - Украинский рок",
    url: "https://str.pcradio.ru/roks_ukr_ukrock-hi",
  },
  {
    name: "Radio Romania (Яссы)",
    url: "https://str.pcradio.ru/romania_iasi-hi",
  },
  {
    name: "Radio Romania Actualitati",
    url: "https://str.pcradio.ru/rom_actualitati-hi",
  },
  {
    name: "Radio Romania Brașov FM",
    url: "https://str.pcradio.ru/romania_brasov-hi",
  },
  {
    name: "Radio Romania Constanta",
    url: "https://str.pcradio.ru/romania_constanta-hi",
  },
  {
    name: "Radio Romania International 1",
    url: "https://str.pcradio.ru/rri_1-hi",
  },
  {
    name: "Radio Romania Oltenia",
    url: "https://str.pcradio.ru/romania_oltenia-hi",
  },
  {
    name: "Radio Romania Timisoara",
    url: "https://str.pcradio.ru/timisoara_ro-hi",
  },
  {
    name: "Radio Romania Târgu Mures",
    url: "https://str.pcradio.ru/romania_targu-hi",
  },
  {
    name: "Radio Saarschleifenland (RSL)",
    url: "https://str.pcradio.ru/rsl_de-hi",
  },
  {
    name: "Radio Salobreña",
    url: "https://str.pcradio.ru/salobrena_gra-hi",
  },
  {
    name: "Radio Salü",
    url: "https://str.pcradio.ru/salue_de-hi",
  },
  {
    name: "Radio Salü Kulthits",
    url: "https://str.pcradio.ru/salue_kulthits-hi",
  },
  {
    name: "Radio Santa Claus",
    url: "https://str.pcradio.ru/santa_claus_fin-hi",
  },
  {
    name: "Radio Santa Cruz 960 AM",
    url: "https://str.pcradio.ru/santacruz_irfa-hi",
  },
  {
    name: "Radio Santec (на английском)",
    url: "https://str.pcradio.ru/santec_english-hi",
  },
  {
    name: "Radio Santec (на немецком)",
    url: "https://str.pcradio.ru/santec_deutsch-hi",
  },
  {
    name: "Radio Santiago AM 690",
    url: "https://str.pcradio.ru/santiago_am690-hi",
  },
  {
    name: "Radio SAW",
    url: "https://str.pcradio.ru/radiosaw_de-hi",
  },
  {
    name: "Radio Schleswig-Holstein",
    url: "https://str.pcradio.ru/rsh_de-hi",
  },
  {
    name: "Radio Seagull",
    url: "https://str.pcradio.ru/seagull_com-hi",
  },
  {
    name: "Radio Seefunk RSF",
    url: "https://str.pcradio.ru/seefunk_rsf-hi",
  },
  {
    name: "Radio Senti Chi Parla",
    url: "https://str.pcradio.ru/senti_chi_parla-hi",
  },
  {
    name: "Radio Sfera Music",
    url: "https://str.pcradio.ru/sfera_music-hi",
  },
  {
    name: "Radio Shadowbox",
    url: "https://str.pcradio.ru/shadowbox_cz-hi",
  },
  {
    name: "Radio Sharda 90.4 FM",
    url: "https://str.pcradio.ru/sharda_904-hi",
  },
  {
    name: "Radio Skovoroda Live",
    url: "https://str.pcradio.ru/skovoroda_radio-hi",
  },
  {
    name: "Radio Skovoroda Music",
    url: "https://str.pcradio.ru/skovoroda_music-hi",
  },
  {
    name: "Radio Slavic Family",
    url: "https://str.pcradio.ru/slavic_family-hi",
  },
  {
    name: "Radio Sotenäs 95.3",
    url: "https://str.pcradio.ru/sotenas_953-hi",
  },
  {
    name: "Radio StHoerfunk",
    url: "https://str.pcradio.ru/st_hoerfunk-hi",
  },
  {
    name: "Radio Studio 1",
    url: "https://str.pcradio.ru/studio_1-hi",
  },
  {
    name: "Radio Sucesos 101.7",
    url: "https://str.pcradio.ru/sucessos_1017-hi",
  },
  {
    name: "Radio Suomipop",
    url: "https://str.pcradio.ru/suomi_pop-hi",
  },
  {
    name: "Radio Symphony",
    url: "https://str.pcradio.ru/symphony_ny-hi",
  },
  {
    name: "Radio TBB",
    url: "https://str.pcradio.ru/radio_tbb-hi",
  },
  {
    name: "Radio Teddy",
    url: "https://str.pcradio.ru/radioteddy_de-hi",
  },
  {
    name: "Radio Tell",
    url: "https://str.pcradio.ru/radiotell_ch-hi",
  },
  {
    name: "Radio The Big Boss",
    url: "https://str.pcradio.ru/the_big_boss_radio-hi",
  },
  {
    name: "Radio Titine",
    url: "https://str.pcradio.ru/radiotitine-hi",
  },
  {
    name: "Radio Ton",
    url: "https://str.pcradio.ru/radioton_de-hi",
  },
  {
    name: "Radio Top",
    url: "https://str.pcradio.ru/toponline_ch1-hi",
  },
  {
    name: "Radio Top 40 - Charts",
    url: "https://str.pcradio.ru/radiotop40_de_charts-hi",
  },
  {
    name: "Radio Top 40 - Club Sound",
    url: "https://str.pcradio.ru/radiotop40_de_club-hi",
  },
  {
    name: "Radio Top 40 - Urban",
    url: "https://str.pcradio.ru/radiotop40_de_urban-hi",
  },
  {
    name: "Radio Top 40 Live",
    url: "https://str.pcradio.ru/radiotop40_de_live-hi",
  },
  {
    name: "Radio Top Two",
    url: "https://str.pcradio.ru/toponline_ch2-hi",
  },
  {
    name: "Radio Trausnitz",
    url: "https://str.pcradio.ru/trausnitz_de-hi",
  },
  {
    name: "Radio Treby 87.8 FM",
    url: "https://str.pcradio.ru/treby_se-hi",
  },
  {
    name: "Radio Tunisie360",
    url: "https://str.pcradio.ru/tunisie360-hi",
  },
  {
    name: "Radio Univers",
    url: "https://str.pcradio.ru/univers_fr-hi",
  },
  {
    name: "Radio Van",
    url: "https://str.pcradio.ru/radiovan_fm-hi",
  },
  {
    name: "Radio Veronica",
    url: "https://str.pcradio.ru/radioveronicanl-hi",
  },
  {
    name: "Radio Vintage",
    url: "https://str.pcradio.ru/radiovintage_ch-hi",
  },
  {
    name: "Radio Vitez",
    url: "https://str.pcradio.ru/vitez_ba-hi",
  },
  {
    name: "Radio Vostok",
    url: "https://str.pcradio.ru/vostok_ch-hi",
  },
  {
    name: "Radio Vətən",
    url: "https://str.pcradio.ru/radioveten_ml-hi",
  },
  {
    name: "Radio Wanderlust",
    url: "https://str.pcradio.ru/wanderlust-hi",
  },
  {
    name: "Radio Western CHRW 94.9 FM",
    url: "https://str.pcradio.ru/western_chrw-hi",
  },
  {
    name: "Radio WNET",
    url: "https://str.pcradio.ru/radiownet_pl-hi",
  },
  {
    name: "Radio WSW",
    url: "https://str.pcradio.ru/radiowsw_de-hi",
  },
  {
    name: "Radio X London",
    url: "https://str.pcradio.ru/radio_x_london-hi",
  },
  {
    name: "Radio Yan - Armenian",
    url: "https://str.pcradio.ru/radioyan_armenian-hi",
  },
  {
    name: "Radio Yan - Patriotic",
    url: "https://str.pcradio.ru/radioyan_patriot-hi",
  },
  {
    name: "Radio Yeraz",
    url: "https://str.pcradio.ru/yeraz_fm-hi",
  },
  {
    name: "Radio Z 95.8",
    url: "https://str.pcradio.ru/radioz_958-hi",
  },
  {
    name: "Radio ZET",
    url: "https://str.pcradio.ru/radiozet_pl-hi",
  },
  {
    name: "Radio Zeta",
    url: "https://str.pcradio.ru/zeta_it-hi",
  },
  {
    name: "Radio Zum 93.3 FM",
    url: "https://str.pcradio.ru/radiozum_933-hi",
  },
  {
    name: "Radio Évasion",
    url: "https://str.pcradio.ru/evasion_fr-hi",
  },
  {
    name: "Radio Ö24 Wien",
    url: "https://str.pcradio.ru/oe24_wien-hi",
  },
  {
    name: "Radio-Exclusiv",
    url: "https://str.pcradio.ru/exclusiv_laut-hi",
  },
  {
    name: "Radio-M1",
    url: "https://str.pcradio.ru/radio_m1_com-hi",
  },
  {
    name: "Radio-Nice",
    url: "https://str.pcradio.ru/radio_nice_ru-hi",
  },
  {
    name: "Radio-Nice Dance Music",
    url: "https://str.pcradio.ru/nice_dance-hi",
  },
  {
    name: "Radio-Nice Deep Progressive",
    url: "https://str.pcradio.ru/nice_deepprog-hi",
  },
  {
    name: "RadioActive Rock",
    url: "https://str.pcradio.ru/rarock_com-hi",
  },
  {
    name: "RadioAktiv",
    url: "https://str.pcradio.ru/radioaktiv_org-hi",
  },
  {
    name: "8",
    url: "https://str.pcradio.ru/berlin_888-hi",
  },
  {
    name: "Radioeins (RBB)",
    url: "https://str.pcradio.ru/radioeins-hi",
  },
  {
    name: "RadioEx",
    url: "https://str.pcradio.ru/radioex_in_ua-hi",
  },
  {
    name: "Radiofabrik 107.5 (Зальцбург)",
    url: "https://str.pcradio.ru/radiofabrik_1075-hi",
  },
  {
    name: "Radiogora Electro",
    url: "https://str.pcradio.ru/radiogora_electro-hi",
  },
  {
    name: "RadioHBR",
    url: "https://str.pcradio.ru/hbr_radio-hi",
  },
  {
    name: "Radiohead",
    url: "https://str.pcradio.ru/radiohead-hi",
  },
  {
    name: "Radiolife",
    url: "https://str.pcradio.ru/radiolife_su-hi",
  },
  {
    name: "Radiolla",
    url: "https://str.pcradio.ru/radiolla_com-hi",
  },
  {
    name: "RadioParty - Kanał Główny",
    url: "https://str.pcradio.ru/party_glowny-hi",
  },
  {
    name: "3)",
    url: "https://str.pcradio.ru/belgorod_883-hi",
  },
  {
    name: "RadioRock",
    url: "https://str.pcradio.ru/radiorock_fi-hi",
  },
  {
    name: "Radiosai Bhajan",
    url: "https://str.pcradio.ru/radiosai_bhajan-hi",
  },
  {
    name: "RadioStar Five",
    url: "https://str.pcradio.ru/radio_star5-hi",
  },
  {
    name: "RadioSunna",
    url: "https://str.pcradio.ru/radiosunna-hi",
  },
  {
    name: "RadioVideoMusic",
    url: "https://str.pcradio.ru/videomusic_info-hi",
  },
  {
    name: "radiOzora - Chill",
    url: "https://str.pcradio.ru/radiozora_chill-hi",
  },
  {
    name: "radiOzora - Trance",
    url: "https://str.pcradio.ru/radiozora_trance-hi",
  },
  {
    name: "Radius 100FM",
    url: "https://str.pcradio.ru/radius_100fm-hi",
  },
  {
    name: "Raduga 100.8 FM",
    url: "https://str.pcradio.ru/raduga_lt-hi",
  },
  {
    name: "Radyo Mevlana",
    url: "https://str.pcradio.ru/radyo_mevlana-hi",
  },
  {
    name: "Radyo Viva",
    url: "https://str.pcradio.ru/radyo_viva-hi",
  },
  {
    name: "Raggakings",
    url: "https://str.pcradio.ru/raggakings-hi",
  },
  {
    name: "RAI 1",
    url: "https://str.pcradio.ru/rai1_it-hi",
  },
  {
    name: "RAI 2",
    url: "https://str.pcradio.ru/rai2_it-hi",
  },
  {
    name: "RAI 3",
    url: "https://str.pcradio.ru/rai3_it-hi",
  },
  {
    name: "RAI R5 Classica",
    url: "https://str.pcradio.ru/rai5_classica-hi",
  },
  {
    name: "Rai Südtirol",
    url: "https://str.pcradio.ru/rai_sudtirol-hi",
  },
  {
    name: "Rainbow",
    url: "https://str.pcradio.ru/Rainbow-hi",
  },
  {
    name: "Rammstein 18+",
    url: "https://str.pcradio.ru/Rammstein-hi",
  },
  {
    name: "Ramones",
    url: "https://str.pcradio.ru/ramones-hi",
  },
  {
    name: "Rangarang Radio",
    url: "https://str.pcradio.ru/rangarang_us-hi",
  },
  {
    name: "RauteMusik Club",
    url: "https://str.pcradio.ru/music_club_nem-hi",
  },
  {
    name: "RauteMusik Deutschrap",
    url: "https://str.pcradio.ru/rautemusik_deutschrap-hi",
  },
  {
    name: "RauteMusik Main",
    url: "https://str.pcradio.ru/rautemusik_main-hi",
  },
  {
    name: "RauteMusik Trap",
    url: "https://str.pcradio.ru/rautemusik_trap-hi",
  },
  {
    name: "Raw FM",
    url: "https://str.pcradio.ru/rawfm_com_au-hi",
  },
  {
    name: "RCF Radio",
    url: "https://str.pcradio.ru/rcf_fr-hi",
  },
  {
    name: "Rclasicos",
    url: "https://str.pcradio.ru/rclasicos_com-hi",
  },
  {
    name: "RCM Deep FM",
    url: "https://str.pcradio.ru/rcm_deep_fm-hi",
  },
  {
    name: "RDP Internacional",
    url: "https://str.pcradio.ru/rdp_inter-hi",
  },
  {
    name: "Real FM",
    url: "https://str.pcradio.ru/radioreal_ru-hi",
  },
  {
    name: "Real FM Lights",
    url: "https://str.pcradio.ru/realfmpro_lights-hi",
  },
  {
    name: "RealFM",
    url: "https://str.pcradio.ru/realfm_spb-hi",
  },
  {
    name: "RealFM Relax",
    url: "https://str.pcradio.ru/realfmsp_relax-hi",
  },
  {
    name: "Record (Казань)",
    url: "https://str.pcradio.ru/record_kazan-hi",
  },
  {
    name: "Record (Омск)",
    url: "https://str.pcradio.ru/record_omsk-hi",
  },
  {
    name: "Record 104.0 FM (Тольятти)",
    url: "https://str.pcradio.ru/record_tolyatti-hi",
  },
  {
    name: "Record 1970-е",
    url: "https://str.pcradio.ru/record_70s-hi",
  },
  {
    name: "Record 1980-е",
    url: "https://str.pcradio.ru/record_80s-hi",
  },
  {
    name: "Record 2-Step",
    url: "https://str.pcradio.ru/record_2step-hi",
  },
  {
    name: "Record Big Hits",
    url: "https://str.pcradio.ru/record_bighits-hi",
  },
  {
    name: "Record Black",
    url: "https://str.pcradio.ru/record_yo-hi",
  },
  {
    name: "Record Breaks",
    url: "https://str.pcradio.ru/record_breaks-hi",
  },
  {
    name: "Record Chillout",
    url: "https://str.pcradio.ru/record_chillout-hi",
  },
  {
    name: "Record Club",
    url: "https://str.pcradio.ru/radiorecord_club-hi",
  },
  {
    name: "Record Dancecore",
    url: "https://str.pcradio.ru/record_dancecore-hi",
  },
  {
    name: "Record Darkside",
    url: "https://str.pcradio.ru/record_darkside-hi",
  },
  {
    name: "Record Deep",
    url: "https://str.pcradio.ru/radiorecord_deep-hi",
  },
  {
    name: "Record Disco/Funk",
    url: "https://str.pcradio.ru/record_disfunk-hi",
  },
  {
    name: "Record Dream Dance",
    url: "https://str.pcradio.ru/record_dreamdance-hi",
  },
  {
    name: "Record Drum'n'Bass Hits",
    url: "https://str.pcradio.ru/record_dnb-hi",
  },
  {
    name: "Record Dubstep",
    url: "https://str.pcradio.ru/record_dubstep-hi",
  },
  {
    name: "Record EDM Hits",
    url: "https://str.pcradio.ru/record_edmhits-hi",
  },
  {
    name: "Record Electro",
    url: "https://str.pcradio.ru/record_electro-hi",
  },
  {
    name: "Record Eurodance",
    url: "https://str.pcradio.ru/record_eurdance-hi",
  },
  {
    name: "Record Future Bass",
    url: "https://str.pcradio.ru/record_futbass-hi",
  },
  {
    name: "Record Future House",
    url: "https://str.pcradio.ru/record_futurehouse-hi",
  },
  {
    name: "Record GOA/PSY",
    url: "https://str.pcradio.ru/record_psy_goa-hi",
  },
  {
    name: "Record Gold",
    url: "https://str.pcradio.ru/record_gold-hi",
  },
  {
    name: "Record Hard Bass",
    url: "https://str.pcradio.ru/record_hbass-hi",
  },
  {
    name: "Record Hardstyle",
    url: "https://str.pcradio.ru/record_hardstyle-hi",
  },
  {
    name: "Record House Classics",
    url: "https://str.pcradio.ru/record_hoclas-hi",
  },
  {
    name: "Record House Hits",
    url: "https://str.pcradio.ru/record_househits-hi",
  },
  {
    name: "Record Hypnotic",
    url: "https://str.pcradio.ru/record_hypnotic-hi",
  },
  {
    name: "Record Jackin'/Garage",
    url: "https://str.pcradio.ru/record_jackgarage-hi",
  },
  {
    name: "Record Jungle",
    url: "https://str.pcradio.ru/record_jungle-hi",
  },
  {
    name: "Record Megamix",
    url: "https://str.pcradio.ru/radiorecord_mega-hi",
  },
  {
    name: "Record Midtempo",
    url: "https://str.pcradio.ru/record_midtempo-hi",
  },
  {
    name: "Record Minimal/Tech",
    url: "https://str.pcradio.ru/record_minimal-hi",
  },
  {
    name: "Record Moombahton",
    url: "https://str.pcradio.ru/record_moomba-hi",
  },
  {
    name: "Record Neurofunk",
    url: "https://str.pcradio.ru/record_neurofunk-hi",
  },
  {
    name: "Record Old School",
    url: "https://str.pcradio.ru/record_pump-hi",
  },
  {
    name: "Record Pirate Station",
    url: "https://str.pcradio.ru/radiorecord_pirate-hi",
  },
  {
    name: "Record Progressive",
    url: "https://str.pcradio.ru/record_progres-hi",
  },
  {
    name: "Record Rap Hits",
    url: "https://str.pcradio.ru/record_raphits-hi",
  },
  {
    name: "Record Rave FM",
    url: "https://str.pcradio.ru/record_rave_fm-hi",
  },
  {
    name: "Record Remix",
    url: "https://str.pcradio.ru/record_remix-hi",
  },
  {
    name: "Record Rock",
    url: "https://str.pcradio.ru/record_rock-hi",
  },
  {
    name: "Record Russian Gold",
    url: "https://str.pcradio.ru/record_rusgold-hi",
  },
  {
    name: "Record Russian Hits",
    url: "https://str.pcradio.ru/record_rushits-hi",
  },
  {
    name: "Record Russian Mix",
    url: "https://str.pcradio.ru/record_rusmix-hi",
  },
  {
    name: "Record Samara",
    url: "https://str.pcradio.ru/record_samara-hi",
  },
  {
    name: "Record Synthwave",
    url: "https://str.pcradio.ru/record_synthwave-hi",
  },
  {
    name: "Record Technopop",
    url: "https://str.pcradio.ru/record_techpop-hi",
  },
  {
    name: "Record Tecktonik",
    url: "https://str.pcradio.ru/record_tecktonik-hi",
  },
  {
    name: "Record Trance Hits",
    url: "https://str.pcradio.ru/record_trhits-hi",
  },
  {
    name: "Record Trancemission",
    url: "https://str.pcradio.ru/record_trnsm-hi",
  },
  {
    name: "Record Trap",
    url: "https://str.pcradio.ru/record_trap-hi",
  },
  {
    name: "Record Tropical",
    url: "https://str.pcradio.ru/record_trop-hi",
  },
  {
    name: "Record Uplifting",
    url: "https://str.pcradio.ru/record_uplift-hi",
  },
  {
    name: "Record Vip House",
    url: "https://str.pcradio.ru/record_viphouse-hi",
  },
  {
    name: "Record Веснушка FM",
    url: "https://str.pcradio.ru/record_vesnush-hi",
  },
  {
    name: "Record Гастарбайтер",
    url: "https://str.pcradio.ru/record_gast-hi",
  },
  {
    name: "Record Гоп FM 18+",
    url: "https://str.pcradio.ru/record_gopfm-hi",
  },
  {
    name: "Record Маятник Фуко",
    url: "https://str.pcradio.ru/record_mayatnik-hi",
  },
  {
    name: "Record Медляк FM",
    url: "https://str.pcradio.ru/record_medlyak-hi",
  },
  {
    name: "Record Нафталин FM",
    url: "https://str.pcradio.ru/record_naft-hi",
  },
  {
    name: "Record Симфония FM",
    url: "https://str.pcradio.ru/record_symph-hi",
  },
  {
    name: "Record Супердискотека 90-х",
    url: "https://str.pcradio.ru/record_superdisco-hi",
  },
  {
    name: "Red Hot Chili Peppers",
    url: "https://str.pcradio.ru/red_hot_chili_peppers-hi",
  },
  {
    name: "Regenbogen",
    url: "https://str.pcradio.ru/regenbogen-hi",
  },
  {
    name: "Regenbogen 2",
    url: "https://str.pcradio.ru/regenbogen2-hi",
  },
  {
    name: "Regenbogen Adler Mannheim",
    url: "https://str.pcradio.ru/regenbogen_adler-hi",
  },
  {
    name: "Reggae Mix Station",
    url: "https://str.pcradio.ru/reggae_mix_station-hi",
  },
  {
    name: "Relax FM (Москва)",
    url: "https://str.pcradio.ru/relax_fm_ru-hi",
  },
  {
    name: "Relax FM Gold",
    url: "https://str.pcradio.ru/relax_fm_gold-hi",
  },
  {
    name: "Relax FM Jazz",
    url: "https://str.pcradio.ru/relax_fm_jazz-hi",
  },
  {
    name: "Relax FM Latino",
    url: "https://str.pcradio.ru/relax_fm_latino-hi",
  },
  {
    name: "Relax FM Life",
    url: "https://str.pcradio.ru/relax_fm_life-hi",
  },
  {
    name: "Relax FM Nature",
    url: "https://str.pcradio.ru/relax_fm_nature-hi",
  },
  {
    name: "Relax Zone",
    url: "https://str.pcradio.ru/relax_zone-hi",
  },
  {
    name: "Retro Rádió",
    url: "https://str.pcradio.ru/retroradio_hu-hi",
  },
  {
    name: "Retro Rádió (Будапешт)",
    url: "https://str.pcradio.ru/retro_hu_buda-hi",
  },
  {
    name: "RetroPop",
    url: "https://str.pcradio.ru/retropop_es-hi",
  },
  {
    name: "ReVoice Пранкота 18+",
    url: "https://str.pcradio.ru/revoice_prankota-hi",
  },
  {
    name: "Revolution Radio",
    url: "https://str.pcradio.ru/revolutionradio_ru-hi",
  },
  {
    name: "RFI Monde",
    url: "https://str.pcradio.ru/rfi_monde-hi",
  },
  {
    name: "RFI Persian",
    url: "https://str.pcradio.ru/rfi_persian-hi",
  },
  {
    name: "RFI Русский",
    url: "https://str.pcradio.ru/rfi_russian-hi",
  },
  {
    name: "RFM 103.9",
    url: "https://str.pcradio.ru/rfmradio-hi",
  },
  {
    name: "Richard Clayderman",
    url: "https://str.pcradio.ru/Richard_Clayderman-hi",
  },
  {
    name: "Rihanna",
    url: "https://str.pcradio.ru/Rihanna-hi",
  },
  {
    name: "Ring FM",
    url: "https://str.pcradio.ru/ringfm_ee-hi",
  },
  {
    name: "Rire et Chansons",
    url: "https://str.pcradio.ru/rire_et_chansons-hi",
  },
  {
    name: "Rise FM",
    url: "https://str.pcradio.ru/risefm_hu-hi",
  },
  {
    name: "RJM Dance",
    url: "https://str.pcradio.ru/rjm_dance-hi",
  },
  {
    name: "RLCB Dance",
    url: "https://str.pcradio.ru/rlcb_dance-hi",
  },
  {
    name: "RLCB Tuga",
    url: "https://str.pcradio.ru/rlcb_tuga-hi",
  },
  {
    name: "RMC 80",
    url: "https://str.pcradio.ru/rmc_80-hi",
  },
  {
    name: "RMC 90",
    url: "https://str.pcradio.ru/rmc_90-hi",
  },
  {
    name: "RMC Buddha-Bar",
    url: "https://str.pcradio.ru/rmc_buddha-hi",
  },
  {
    name: "RMC Duets",
    url: "https://str.pcradio.ru/rmc_duets-hi",
  },
  {
    name: "RMC Great Artists",
    url: "https://str.pcradio.ru/rmc_greatart-hi",
  },
  {
    name: "RMC Hits",
    url: "https://str.pcradio.ru/rmc_hits-hi",
  },
  {
    name: "RMC Italia",
    url: "https://str.pcradio.ru/rmc_italia-hi",
  },
  {
    name: "RMC Kay Kay",
    url: "https://str.pcradio.ru/rmc_kaykay-hi",
  },
  {
    name: "RMC Love Songs",
    url: "https://str.pcradio.ru/rmc_lovesongs-hi",
  },
  {
    name: "RMC Marine",
    url: "https://str.pcradio.ru/rmc_marine-hi",
  },
  {
    name: "RMC Monte Carlo Nights Story",
    url: "https://str.pcradio.ru/rmc_mcnights-hi",
  },
  {
    name: "RMC New Classics",
    url: "https://str.pcradio.ru/rmc_newclass-hi",
  },
  {
    name: "RMF Classic",
    url: "https://str.pcradio.ru/rmf_classic-hi",
  },
  {
    name: "RMF Disco Polo",
    url: "https://str.pcradio.ru/rmf_discopolo-hi",
  },
  {
    name: "RMF FM",
    url: "https://str.pcradio.ru/rmffm_krakow-hi",
  },
  {
    name: "RMF Maxxx",
    url: "https://str.pcradio.ru/rmf_maxxx-hi",
  },
  {
    name: "RMF Nostalgia",
    url: "https://str.pcradio.ru/rmf_nostalgia-hi",
  },
  {
    name: "RMN Relax",
    url: "https://str.pcradio.ru/rmn_relax-hi",
  },
  {
    name: "RNA - Canal A",
    url: "https://str.pcradio.ru/rna_canala-hi",
  },
  {
    name: "RNB and Hip Hop Radio",
    url: "https://str.pcradio.ru/rnbnhiphop_us-hi",
  },
  {
    name: "Robbie Williams",
    url: "https://str.pcradio.ru/Robbie_Williams-hi",
  },
  {
    name: "Robert Miles",
    url: "https://str.pcradio.ru/Robert_Miles-hi",
  },
  {
    name: "Robyn",
    url: "https://str.pcradio.ru/Robyn-hi",
  },
  {
    name: "Rock Antenne Alternative",
    url: "https://str.pcradio.ru/rockantenne_alternative-hi",
  },
  {
    name: "Rock Antenne Classic Perlen",
    url: "https://str.pcradio.ru/rock_antenne_classicperl-hi",
  },
  {
    name: "Rock Antenne Deutschrock",
    url: "https://str.pcradio.ru/rock_antenne_deutschrock-hi",
  },
  {
    name: "Rock Antenne Heavy Metal",
    url: "https://str.pcradio.ru/rockantenne_heavymetal-hi",
  },
  {
    name: "Rock Antenne Live",
    url: "https://str.pcradio.ru/rock_antenne_live-hi",
  },
  {
    name: "Rock Antenne Soft Rock",
    url: "https://str.pcradio.ru/rock_antenne_soft-hi",
  },
  {
    name: "Rock Antenne Young Stars",
    url: "https://str.pcradio.ru/rock_antenne_young-hi",
  },
  {
    name: "Rock Arena",
    url: "https://str.pcradio.ru/rockarena_sk-hi",
  },
  {
    name: "Rock FM",
    url: "https://str.pcradio.ru/rockfm_fm-hi",
  },
  {
    name: "Rock FM",
    url: "https://str.pcradio.ru/rockfm_moscow-hi",
  },
  {
    name: "Rock FM (Бухарест)",
    url: "https://str.pcradio.ru/rockfm_ro-hi",
  },
  {
    name: "Rock Mania FM",
    url: "https://str.pcradio.ru/Rock_maniy_fm-hi",
  },
  {
    name: "Rock Mauritius Radio",
    url: "https://str.pcradio.ru/mauritius_rock-hi",
  },
  {
    name: "Rock Radio (Варшава)",
    url: "https://str.pcradio.ru/rockradio_tuba_pl-hi",
  },
  {
    name: "Rock Zone (Прага)",
    url: "https://str.pcradio.ru/rockzone_praga-hi",
  },
  {
    name: "Rockabilly Radio",
    url: "https://str.pcradio.ru/rockabilly_radio-hi",
  },
  {
    name: "Rocker Rádió",
    url: "https://str.pcradio.ru/rockerradio_online-hi",
  },
  {
    name: "Rockhaus Radio",
    url: "https://str.pcradio.ru/rockhaus_de-hi",
  },
  {
    name: "Rockland Radio",
    url: "https://str.pcradio.ru/rockland_de-hi",
  },
  {
    name: "RockLand.FM",
    url: "https://str.pcradio.ru/rockland_fm-hi",
  },
  {
    name: "RockRadio1",
    url: "https://str.pcradio.ru/rockradio1-hi",
  },
  {
    name: "RockSatelite Madrid-One",
    url: "https://str.pcradio.ru/rocksatelitecom-hi",
  },
  {
    name: "Romantic Радио",
    url: "https://str.pcradio.ru/Romantic-hi",
  },
  {
    name: "Romantika",
    url: "https://str.pcradio.ru/romantica-hi",
  },
  {
    name: "Roundandsound Radio",
    url: "https://str.pcradio.ru/roundandsound_nl-hi",
  },
  {
    name: "Roxette",
    url: "https://str.pcradio.ru/Roxette-hi",
  },
  {
    name: "RoyalRadio 98.6 FM",
    url: "https://str.pcradio.ru/royal_radio986-hi",
  },
  {
    name: "Royksopp",
    url: "https://str.pcradio.ru/royksopp-hi",
  },
  {
    name: "RPR1. 100% Deutsch-Pop",
    url: "https://str.pcradio.ru/rpr1_de_100deu-hi",
  },
  {
    name: "RPR1. Acoustic",
    url: "https://str.pcradio.ru/rpr1_de_acou-hi",
  },
  {
    name: "RPR1. Aprés Ski und Ballermann",
    url: "https://str.pcradio.ru/rpr1_spreski-hi",
  },
  {
    name: "RPR1. Best of 80's",
    url: "https://str.pcradio.ru/rpr1_de_80s-hi",
  },
  {
    name: "RPR1. Chilloutzone",
    url: "https://str.pcradio.ru/rpr1_de_chill-hi",
  },
  {
    name: "RPR1. Classic Rock",
    url: "https://str.pcradio.ru/rpr1_de_clasro-hi",
  },
  {
    name: "RPR1. Country",
    url: "https://str.pcradio.ru/rpr1_de_coun-hi",
  },
  {
    name: "RPR1. Die Tanzbar",
    url: "https://str.pcradio.ru/rpr1_de_tanzbar-hi",
  },
  {
    name: "RPR1. Evergreens",
    url: "https://str.pcradio.ru/rpr1_de_ever-hi",
  },
  {
    name: "RPR1. Fitness",
    url: "https://str.pcradio.ru/rpr1_de_wout-hi",
  },
  {
    name: "RPR1. Hard Rock",
    url: "https://str.pcradio.ru/rpr1_hardrock-hi",
  },
  {
    name: "RPR1. Heavy Metal",
    url: "https://str.pcradio.ru/rpr1_de_metal-hi",
  },
  {
    name: "RPR1. Hits für Kids",
    url: "https://str.pcradio.ru/rpr1_hitskids-hi",
  },
  {
    name: "RPR1. Kinderlieder",
    url: "https://str.pcradio.ru/rpr1_de_kid-hi",
  },
  {
    name: "RPR1. Live",
    url: "https://str.pcradio.ru/rpr1_de_live-hi",
  },
  {
    name: "RPR1. Neue Deutsche Welle",
    url: "https://str.pcradio.ru/rpr1_de_ndw-hi",
  },
  {
    name: "RPR1. Oldies",
    url: "https://str.pcradio.ru/rpr1_de_oldies-hi",
  },
  {
    name: "RPR1. Oldschool Hip-Hop",
    url: "https://str.pcradio.ru/rpr1_de_ohip-hi",
  },
  {
    name: "RPR1. Original 2000er",
    url: "https://str.pcradio.ru/rpr1_de_00er-hi",
  },
  {
    name: "RPR1. Original 70er",
    url: "https://str.pcradio.ru/rpr1_de_70er-hi",
  },
  {
    name: "RPR1. Original 90er",
    url: "https://str.pcradio.ru/rpr1_de_90er-hi",
  },
  {
    name: "RPR1. Original Old School Hip-Hop",
    url: "https://str.pcradio.ru/rpr1_de_oldhip-hi",
  },
  {
    name: "RPR1. Pappnasen-Playlist",
    url: "https://str.pcradio.ru/rpr1_de_pappna-hi",
  },
  {
    name: "RPR1. Schlagerhits",
    url: "https://str.pcradio.ru/rpr1_de_schla-hi",
  },
  {
    name: "RPR1. Sommerhits",
    url: "https://str.pcradio.ru/rpr1_de_summer-hi",
  },
  {
    name: "RPR1. Top 50",
    url: "https://str.pcradio.ru/rpr1_de_top50-hi",
  },
  {
    name: "RPR1. Traumfabrik",
    url: "https://str.pcradio.ru/rpr1_de_traum-hi",
  },
  {
    name: "RPR1. Weihnachtslieder",
    url: "https://str.pcradio.ru/rpr1_de_xmas-hi",
  },
  {
    name: "RPR1. Yoga Sounds",
    url: "https://str.pcradio.ru/rpr1_de_pur-hi",
  },
  {
    name: "RS2 94.3",
    url: "https://str.pcradio.ru/rs2_943-hi",
  },
  {
    name: "RS2 Kulthits",
    url: "https://str.pcradio.ru/rs2_kult-hi",
  },
  {
    name: "RS2 Top40",
    url: "https://str.pcradio.ru/rs2_top40-hi",
  },
  {
    name: "RSI Rete Uno",
    url: "https://str.pcradio.ru/rsi_reteuno-hi",
  },
  {
    name: "RT1 - 2000er",
    url: "https://str.pcradio.ru/rt1_2000er-hi",
  },
  {
    name: "RT1 - 80er",
    url: "https://str.pcradio.ru/rt1_80er-hi",
  },
  {
    name: "RT1 - 90er",
    url: "https://str.pcradio.ru/rt1_90er-hi",
  },
  {
    name: "RT1 - Black",
    url: "https://str.pcradio.ru/rt1_black-hi",
  },
  {
    name: "RT1 - ChillHouse",
    url: "https://str.pcradio.ru/rt1_chillhouse-hi",
  },
  {
    name: "RT1 - Dance",
    url: "https://str.pcradio.ru/rt1_dance-hi",
  },
  {
    name: "RT1 - Deutsch",
    url: "https://str.pcradio.ru/rt1_deutsch-hi",
  },
  {
    name: "RT1 - EuroDance",
    url: "https://str.pcradio.ru/rt1_eurodance-hi",
  },
  {
    name: "RT1 - Funk",
    url: "https://str.pcradio.ru/rt1_funk-hi",
  },
  {
    name: "RT1 - In the Mix",
    url: "https://str.pcradio.ru/rt1_inthemix-hi",
  },
  {
    name: "RT1 - Kids",
    url: "https://str.pcradio.ru/rt1_kids-hi",
  },
  {
    name: "RT1 - Lounge",
    url: "https://str.pcradio.ru/rt1_lounge-hi",
  },
  {
    name: "RT1 - Oldies",
    url: "https://str.pcradio.ru/rt1_oldies-hi",
  },
  {
    name: "RT1 - Power Workout",
    url: "https://str.pcradio.ru/rt1_workout-hi",
  },
  {
    name: "RT1 - Relax",
    url: "https://str.pcradio.ru/rt1_relax-hi",
  },
  {
    name: "RT1 - Rock",
    url: "https://str.pcradio.ru/rt1_rock-hi",
  },
  {
    name: "RT1 - Weekend",
    url: "https://str.pcradio.ru/rt1_weekend-hi",
  },
  {
    name: "RTBF International",
    url: "https://str.pcradio.ru/rtbf_int-hi",
  },
  {
    name: "RTBF La Première",
    url: "https://str.pcradio.ru/rtbf_la1ere-hi",
  },
  {
    name: "RTBF VivaCité",
    url: "https://str.pcradio.ru/rtbf_vivacite-hi",
  },
  {
    name: "RTE Radio 1",
    url: "https://str.pcradio.ru/rte_radio1-hi",
  },
  {
    name: "RTE Radio 1 Extra",
    url: "https://str.pcradio.ru/rte_radio1_extra-hi",
  },
  {
    name: "RTI Radio Transsylvania International",
    url: "https://str.pcradio.ru/rti_transsylv-hi",
  },
  {
    name: "RTL",
    url: "https://str.pcradio.ru/rtl_fr-hi",
  },
  {
    name: "RTL Radio",
    url: "https://str.pcradio.ru/rtlradio_de-hi",
  },
  {
    name: "RTL Radio - Die besten Hits aller Zeiten",
    url: "https://str.pcradio.ru/rtlradio_hits_aller_zeiten-hi",
  },
  {
    name: "RTL2",
    url: "https://str.pcradio.ru/rtl2_fr-hi",
  },
  {
    name: "RTS - La Première",
    url: "https://str.pcradio.ru/rts_1ere-hi",
  },
  {
    name: "RTVS Pátria Rádio",
    url: "https://str.pcradio.ru/patria_radio-hi",
  },
  {
    name: "RTVS Radio Regina Stred",
    url: "https://str.pcradio.ru/rtvs_reg_stred-hi",
  },
  {
    name: "RTVS Rádio Devín",
    url: "https://str.pcradio.ru/rtvs_devin-hi",
  },
  {
    name: "RTVS Rádio Junior",
    url: "https://str.pcradio.ru/rtvs_junior-hi",
  },
  {
    name: "RTVS Rádio Litera",
    url: "https://str.pcradio.ru/rtvs_litera-hi",
  },
  {
    name: "RTVS Rádio Pyramída",
    url: "https://str.pcradio.ru/rtvs_pyramida-hi",
  },
  {
    name: "RTVS Rádio Regina Východ",
    url: "https://str.pcradio.ru/rtvs_reginavych-hi",
  },
  {
    name: "RTVS Rádio Regina Západ",
    url: "https://str.pcradio.ru/rtvs_reginazap-hi",
  },
  {
    name: "RTVS Rádio Slovakia International",
    url: "https://str.pcradio.ru/rtvs_slovak_int-hi",
  },
  {
    name: "RTVS Rádio Slovensko",
    url: "https://str.pcradio.ru/rtvs_slovensko-hi",
  },
  {
    name: "RTVS Rádio_FM",
    url: "https://str.pcradio.ru/rtvs_radio_fm-hi",
  },
  {
    name: "RTVSLO Muravidéki Magyar Rádió",
    url: "https://str.pcradio.ru/rtvslo_mmr-hi",
  },
  {
    name: "RTÉ 2FM",
    url: "https://str.pcradio.ru/rte_2fm-hi",
  },
  {
    name: "RTÉ 2XM",
    url: "https://str.pcradio.ru/rte_2xm-hi",
  },
  {
    name: "RU музыка",
    url: "https://str.pcradio.ru/RU_Music-hi",
  },
  {
    name: "Rudy Maxa's World",
    url: "https://str.pcradio.ru/maxas_world-hi",
  },
  {
    name: "Ruff Draft Radio",
    url: "https://str.pcradio.ru/ruff_draft-hi",
  },
  {
    name: "Run FM",
    url: "https://str.pcradio.ru/Dlja_bega-hi",
  },
  {
    name: "Run-D.M.C.",
    url: "https://str.pcradio.ru/run_dmc-hi",
  },
  {
    name: "RusRadio LT",
    url: "https://str.pcradio.ru/rusradio_lt-hi",
  },
  {
    name: "Russian! Radio",
    url: "https://str.pcradio.ru/russian_cux-hi",
  },
  {
    name: "RussianFM",
    url: "https://str.pcradio.ru/russianfm_de-hi",
  },
  {
    name: "Rusyn FM",
    url: "https://str.pcradio.ru/rusyn_fm-hi",
  },
  {
    name: "Rádio 7",
    url: "https://str.pcradio.ru/radio7_sk-hi",
  },
  {
    name: "Rádio Aetter",
    url: "https://str.pcradio.ru/aetter_sk-hi",
  },
  {
    name: "Rádio Amigos do Flashback",
    url: "https://str.pcradio.ru/amigos_flash-hi",
  },
  {
    name: "Rádio Amigos do Sertanejo",
    url: "https://str.pcradio.ru/amigos_sertan-hi",
  },
  {
    name: "Rádio Anténa Rock",
    url: "https://str.pcradio.ru/antenarock_sk-hi",
  },
  {
    name: "Rádio Anténa Rock Hard",
    url: "https://str.pcradio.ru/antenarock_sk_hard-hi",
  },
  {
    name: "Rádio Aparecida 820 AM",
    url: "https://str.pcradio.ru/aparecida820-hi",
  },
  {
    name: "Rádio Comercial",
    url: "https://str.pcradio.ru/comercial_pt-hi",
  },
  {
    name: "Rádio Conexão Manaus Reggae",
    url: "https://str.pcradio.ru/conexao_manaus-hi",
  },
  {
    name: "Rádio Cultura 1200 AM",
    url: "https://str.pcradio.ru/cultura_1200-hi",
  },
  {
    name: "Rádio Ecclesia",
    url: "https://str.pcradio.ru/ecclesia_angola-hi",
  },
  {
    name: "Rádio Esperança de Picos",
    url: "https://str.pcradio.ru/esperanca_depicos-hi",
  },
  {
    name: "Rádio Estacao Gospel",
    url: "https://str.pcradio.ru/estacaogospel_br-hi",
  },
  {
    name: "Rádio Expres",
    url: "https://str.pcradio.ru/expres_sk-hi",
  },
  {
    name: "Rádio Fonte",
    url: "https://str.pcradio.ru/fonte_com_br-hi",
  },
  {
    name: "Rádio Girassol",
    url: "https://str.pcradio.ru/girassol_belu-hi",
  },
  {
    name: "Rádio Grenal",
    url: "https://str.pcradio.ru/grenal_com_br-hi",
  },
  {
    name: "Rádio Impuls",
    url: "https://str.pcradio.ru/impuls_raaadio-hi",
  },
  {
    name: "Rádio Inconfidência 880 AM",
    url: "https://str.pcradio.ru/inconfi_880am-hi",
  },
  {
    name: "Rádio Jampa Jovens",
    url: "https://str.pcradio.ru/jampa_jovens-hi",
  },
  {
    name: "Rádio Jemné",
    url: "https://str.pcradio.ru/jemne_sk-hi",
  },
  {
    name: "Rádio Jemné Chillout",
    url: "https://str.pcradio.ru/jemne_sk_chill-hi",
  },
  {
    name: "Rádio Jupiter",
    url: "https://str.pcradio.ru/jupiter_sk-hi",
  },
  {
    name: "Rádio Košice",
    url: "https://str.pcradio.ru/radiokosice_sk-hi",
  },
  {
    name: "Rádio Kuia Beu",
    url: "https://str.pcradio.ru/kuia_beu-hi",
  },
  {
    name: "Rádio Logos",
    url: "https://str.pcradio.ru/logos_sk-hi",
  },
  {
    name: "Rádio Lumen",
    url: "https://str.pcradio.ru/lumen_sk-hi",
  },
  {
    name: "Rádio Modra",
    url: "https://str.pcradio.ru/modra_sk-hi",
  },
  {
    name: "Rádio Mária Slovensko",
    url: "https://str.pcradio.ru/maria_slovensko-hi",
  },
  {
    name: "Rádio Piešťany 90.2",
    url: "https://str.pcradio.ru/piestany_sk-hi",
  },
  {
    name: "Rádio Planeta",
    url: "https://str.pcradio.ru/radioplaneta_com-hi",
  },
  {
    name: "Rádio Radar 97.8 FM",
    url: "https://str.pcradio.ru/radar_978_lis-hi",
  },
  {
    name: "Rádio Rebeca",
    url: "https://str.pcradio.ru/rebeca_sk-hi",
  },
  {
    name: "Rádio Reggae 10",
    url: "https://str.pcradio.ru/reggae10-hi",
  },
  {
    name: "Rádio Santa Rita de Cássia",
    url: "https://str.pcradio.ru/santarita_cassia-hi",
  },
  {
    name: "Rádio Santorelli",
    url: "https://str.pcradio.ru/santorelli_zeno-hi",
  },
  {
    name: "Rádio SiTy 107FM",
    url: "https://str.pcradio.ru/radiosity_sk-hi",
  },
  {
    name: "Rádio Super Funk Melody",
    url: "https://str.pcradio.ru/super_funk_melody-hi",
  },
  {
    name: "Rádio The End",
    url: "https://str.pcradio.ru/theend_sk-hi",
  },
  {
    name: "Rádio Viva 94.9 FM",
    url: "https://str.pcradio.ru/viva_949fm-hi",
  },
  {
    name: "Rádio Vlna",
    url: "https://str.pcradio.ru/vlna_sk-hi",
  },
  {
    name: "Rádio Vlna",
    url: "https://str.pcradio.ru/radiovlna_sk-hi",
  },
  {
    name: "Rádio Vlna Golden",
    url: "https://str.pcradio.ru/vlna_sk_golden-hi",
  },
  {
    name: "Rádio Web Vida Gospel",
    url: "https://str.pcradio.ru/vidagospel_br-hi",
  },
  {
    name: "Rádio Šírava",
    url: "https://str.pcradio.ru/sirava_sk-hi",
  },
  {
    name: "Rádió 24",
    url: "https://str.pcradio.ru/r24_hu-hi",
  },
  {
    name: "Rádió 88",
    url: "https://str.pcradio.ru/radio88_hu-hi",
  },
  {
    name: "Rádió Gaga",
    url: "https://str.pcradio.ru/radiogaga_ro-hi",
  },
  {
    name: "Rádió M",
    url: "https://str.pcradio.ru/fmradiom_hu-hi",
  },
  {
    name: "Rádió Szarvas 105.4",
    url: "https://str.pcradio.ru/szarvas_1054-hi",
  },
  {
    name: "S13 Radio",
    url: "https://str.pcradio.ru/s13_grodno-hi",
  },
  {
    name: "Sade",
    url: "https://str.pcradio.ru/Sade-hi",
  },
  {
    name: "Salsa Gorda Radio",
    url: "https://str.pcradio.ru/salsa_gorda-hi",
  },
  {
    name: "Sampler Radio",
    url: "https://str.pcradio.ru/sampler_br-hi",
  },
  {
    name: "San FM Alternative",
    url: "https://str.pcradio.ru/sanfm_ru_alternative-hi",
  },
  {
    name: "San FM Drum and Bass",
    url: "https://str.pcradio.ru/sanfm_ru_drum-hi",
  },
  {
    name: "San FM Pop",
    url: "https://str.pcradio.ru/sanfm_ru_pop-hi",
  },
  {
    name: "San FM Relax",
    url: "https://str.pcradio.ru/sanfm_ru_relax-hi",
  },
  {
    name: "San FM Trance",
    url: "https://str.pcradio.ru/sanfm_ru_trance-hi",
  },
  {
    name: "San Francisco's 70's Hits",
    url: "https://str.pcradio.ru/sanfran_70hits-hi",
  },
  {
    name: "Sandra",
    url: "https://str.pcradio.ru/Sandra-hi",
  },
  {
    name: "SanFM - Drum and Bass",
    url: "https://str.pcradio.ru/sanfm_dnb-hi",
  },
  {
    name: "Sasaki Sayaka",
    url: "https://str.pcradio.ru/Sasaki_Sayaka-hi",
  },
  {
    name: "SATzentrale - Das Radio",
    url: "https://str.pcradio.ru/satzentrael_de-hi",
  },
  {
    name: "Sawano Hiroyuki",
    url: "https://str.pcradio.ru/Savano_Hirojuki-hi",
  },
  {
    name: "Sax and Love",
    url: "https://str.pcradio.ru/Saxophone-hi",
  },
  {
    name: "Sax4Love",
    url: "https://str.pcradio.ru/one_sax4ever-hi",
  },
  {
    name: "Schiller",
    url: "https://str.pcradio.ru/Schiller-hi",
  },
  {
    name: "Schizoid Chillout - Ambient",
    url: "https://str.pcradio.ru/schizoid_chill-hi",
  },
  {
    name: "Schizoid Dub Techno",
    url: "https://str.pcradio.ru/schizoid_progress-hi",
  },
  {
    name: "Schizoid Progressive Psy",
    url: "https://str.pcradio.ru/schizoid_progpsy-hi",
  },
  {
    name: "Schizoid Psychedelic Trance",
    url: "https://str.pcradio.ru/schizoid_psytrance-hi",
  },
  {
    name: "Schlager Radio",
    url: "https://str.pcradio.ru/schlagerradio_fm-hi",
  },
  {
    name: "Schlagerparadies",
    url: "https://str.pcradio.ru/schlagerparadies-hi",
  },
  {
    name: "SchlagerPlanet",
    url: "https://str.pcradio.ru/schlager_planet-hi",
  },
  {
    name: "Schwarzwald Radio",
    url: "https://str.pcradio.ru/schwarzwaldradio_com-hi",
  },
  {
    name: "Scooter",
    url: "https://str.pcradio.ru/Scooter-hi",
  },
  {
    name: "Scorpions",
    url: "https://str.pcradio.ru/Scorpions-hi",
  },
  {
    name: "Sector Progressive",
    url: "https://str.pcradio.ru/sector_progressive-hi",
  },
  {
    name: "Sector Space",
    url: "https://str.pcradio.ru/sector_space-hi",
  },
  {
    name: "Select Radio",
    url: "https://str.pcradio.ru/selectuk_radio-hi",
  },
  {
    name: "Sensuelle Radio",
    url: "https://str.pcradio.ru/sensu_elle-hi",
  },
  {
    name: "Sepultura",
    url: "https://str.pcradio.ru/Sepultura-hi",
  },
  {
    name: "Seven Skies Radio 1",
    url: "https://str.pcradio.ru/sevenskies_1-hi",
  },
  {
    name: "Seven Skies Radio 2",
    url: "https://str.pcradio.ru/sevenskies_2-hi",
  },
  {
    name: "Seven Skies Radio 3",
    url: "https://str.pcradio.ru/sevenskies_3-hi",
  },
  {
    name: "Sex Pistols",
    url: "https://str.pcradio.ru/sex_pistols-hi",
  },
  {
    name: "2 FM",
    url: "https://str.pcradio.ru/sfera1022-hi",
  },
  {
    name: "Shaivam",
    url: "https://str.pcradio.ru/shaivam_org-hi",
  },
  {
    name: "Shakira",
    url: "https://str.pcradio.ru/Shakira-hi",
  },
  {
    name: "Shakthi FM",
    url: "https://str.pcradio.ru/shakthi_fm-hi",
  },
  {
    name: "Sham FM",
    url: "https://str.pcradio.ru/shamfm_fm-hi",
  },
  {
    name: "Shanson USA",
    url: "https://str.pcradio.ru/shanson_usa-hi",
  },
  {
    name: "Show Radyo",
    url: "https://str.pcradio.ru/show_radyo-hi",
  },
  {
    name: "Shraddha - Lakviru Radio",
    url: "https://str.pcradio.ru/lakviru_lk-hi",
  },
  {
    name: "Shuffle-Radio",
    url: "https://str.pcradio.ru/shuffle_radio-hi",
  },
  {
    name: "SikhNet",
    url: "https://str.pcradio.ru/sikh_net-hi",
  },
  {
    name: "SK-Radio",
    url: "https://str.pcradio.ru/sk_radio_com-hi",
  },
  {
    name: "Skillet",
    url: "https://str.pcradio.ru/skillet-hi",
  },
  {
    name: "Skonto",
    url: "https://str.pcradio.ru/skonto_riga-hi",
  },
  {
    name: "Skrillex",
    url: "https://str.pcradio.ru/Skrillex-hi",
  },
  {
    name: "Sky Plus",
    url: "https://str.pcradio.ru/skyplus_fm-hi",
  },
  {
    name: "Sky Radio - 80's",
    url: "https://str.pcradio.ru/skyradio_80s-hi",
  },
  {
    name: "Sky Radio - 90's",
    url: "https://str.pcradio.ru/skyradio_90s-hi",
  },
  {
    name: "Sky Radio - Hits",
    url: "https://str.pcradio.ru/skyradio_hits-hi",
  },
  {
    name: "Sky Radio - Lounge",
    url: "https://str.pcradio.ru/skyradio_lounge-hi",
  },
  {
    name: "Sky Radio - Love Songs",
    url: "https://str.pcradio.ru/skyradio_love-hi",
  },
  {
    name: "Sky Radio 101 FM",
    url: "https://str.pcradio.ru/skyradionl-hi",
  },
  {
    name: "SKY Rádio (Прешов)",
    url: "https://str.pcradio.ru/skyradio_sk-hi",
  },
  {
    name: "Sky Радио",
    url: "https://str.pcradio.ru/sky_radio_fm-hi",
  },
  {
    name: "Skyline Radio and Soul",
    url: "https://str.pcradio.ru/skyline_soul-hi",
  },
  {
    name: "SLAM! FM",
    url: "https://str.pcradio.ru/slamfmnl-hi",
  },
  {
    name: "SLAM! Hardstyle",
    url: "https://str.pcradio.ru/slam_hardstyle-hi",
  },
  {
    name: "SLAM! MixMarathon",
    url: "https://str.pcradio.ru/slam_mixma-hi",
  },
  {
    name: "SLAM! Non-stop",
    url: "https://str.pcradio.ru/slam_nonstop-hi",
  },
  {
    name: "SLAM! The Boom Room",
    url: "https://str.pcradio.ru/slam_theboom-hi",
  },
  {
    name: "Slipknot",
    url: "https://str.pcradio.ru/SlipKnot-hi",
  },
  {
    name: "Slobodný vysielač",
    url: "https://str.pcradio.ru/slobodny_vysielac-hi",
  },
  {
    name: "Slow Türk FM",
    url: "https://str.pcradio.ru/slow_turkfm-hi",
  },
  {
    name: "Sláger FM",
    url: "https://str.pcradio.ru/slagerfm_hu-hi",
  },
  {
    name: "Smash!!",
    url: "https://str.pcradio.ru/smash-hi",
  },
  {
    name: "Smooth Jazz - Tampa Bay",
    url: "https://str.pcradio.ru/smjazz_tampabay-hi",
  },
  {
    name: "Smooth Jazz 247",
    url: "https://str.pcradio.ru/smoothjazz247-hi",
  },
  {
    name: "Smooth Jazz CD101.9 New York",
    url: "https://str.pcradio.ru/smoothjazz_nyc1019-hi",
  },
  {
    name: "Smooth Jazz Florida Plus",
    url: "https://str.pcradio.ru/smoothjazz_plus-hi",
  },
  {
    name: "Smooth Jazz Global",
    url: "https://str.pcradio.ru/smoothjazz_global-hi",
  },
  {
    name: "Smooth Jazz Lounge",
    url: "https://str.pcradio.ru/smoothjazz_lou-hi",
  },
  {
    name: "Smooth Jazz Smooth Wave",
    url: "https://str.pcradio.ru/smooth_jazzwave-hi",
  },
  {
    name: "Smooth Lounge Global",
    url: "https://str.pcradio.ru/smoothlounge_global-hi",
  },
  {
    name: "smoothfm 91.5 (Мельбурн)",
    url: "https://str.pcradio.ru/smoothfm_915melb-hi",
  },
  {
    name: "Sok FM",
    url: "https://str.pcradio.ru/sokfm_gr-hi",
  },
  {
    name: "Sol de Justicia",
    url: "https://str.pcradio.ru/sol_de_just-hi",
  },
  {
    name: "Sol FM",
    url: "https://str.pcradio.ru/solfm1007-hi",
  },
  {
    name: "Soldier",
    url: "https://str.pcradio.ru/Soldier-hi",
  },
  {
    name: "SomaFM - Boot Liquor",
    url: "https://str.pcradio.ru/somafm_boot-hi",
  },
  {
    name: "SomaFM - Drone Zone",
    url: "https://str.pcradio.ru/somafm_drone_zone-hi",
  },
  {
    name: "SomaFM - Dubstep",
    url: "https://str.pcradio.ru/somafm_dubstep-hi",
  },
  {
    name: "SomaFM - Left Coast 70s",
    url: "https://str.pcradio.ru/soma_left70s-hi",
  },
  {
    name: "SomaFM - SF 10-33",
    url: "https://str.pcradio.ru/somafm_sf1033-hi",
  },
  {
    name: "SomaFM - Space Station",
    url: "https://str.pcradio.ru/somafm_spacesta-hi",
  },
  {
    name: "Sonatica",
    url: "https://str.pcradio.ru/sonatica_fm-hi",
  },
  {
    name: "Sonido Oscuro",
    url: "https://str.pcradio.ru/sonido_oscuro-hi",
  },
  {
    name: "Sopron Rádió FM 94.1",
    url: "https://str.pcradio.ru/sopron_941-hi",
  },
  {
    name: "Sorte Web Radio",
    url: "https://str.pcradio.ru/sorte_web_radio-hi",
  },
  {
    name: "Soulfly",
    url: "https://str.pcradio.ru/Soulfly-hi",
  },
  {
    name: "Soulful House",
    url: "https://str.pcradio.ru/soulfulhou_vip-hi",
  },
  {
    name: "Soulplay Radio",
    url: "https://str.pcradio.ru/soulplay_ru-hi",
  },
  {
    name: "Soulshow Radio",
    url: "https://str.pcradio.ru/soulshow_nl-hi",
  },
  {
    name: "Soundeo",
    url: "https://str.pcradio.ru/soundeo_fm-hi",
  },
  {
    name: "SoundPark Deep",
    url: "https://str.pcradio.ru/sp_deep-hi",
  },
  {
    name: "Soundstorm - Relax Radio",
    url: "https://str.pcradio.ru/soundstorm_radio-hi",
  },
  {
    name: "SpaceSynth RU",
    url: "https://str.pcradio.ru/space_synth_ru-hi",
  },
  {
    name: "Spice Girls",
    url: "https://str.pcradio.ru/Spice_Girls-hi",
  },
  {
    name: "Spin FM",
    url: "https://str.pcradio.ru/swh_spin-hi",
  },
  {
    name: "Spirit FM",
    url: "https://str.pcradio.ru/spirit_radio_pcradio-hi",
  },
  {
    name: "Spreeradio 105'5 - 80er",
    url: "https://str.pcradio.ru/spreeradio_1055_80er-hi",
  },
  {
    name: "Spreeradio 105'5 - Live",
    url: "https://str.pcradio.ru/spreeradio_1055_live-hi",
  },
  {
    name: "Spreeradio 105'5 - Love",
    url: "https://str.pcradio.ru/spreeradio_1055_love-hi",
  },
  {
    name: "Spreeradio 105'5 - Rock",
    url: "https://str.pcradio.ru/spreeradio_1055_rock-hi",
  },
  {
    name: "Sputnik (English)",
    url: "https://str.pcradio.ru/sputnik_english-hi",
  },
  {
    name: "Sputnik Mundo",
    url: "https://str.pcradio.ru/sputnik_mundo-hi",
  },
  {
    name: "SpyNetStation - Bright Side",
    url: "https://str.pcradio.ru/spynet_bright-hi",
  },
  {
    name: "SpyNetStation - Dark Side",
    url: "https://str.pcradio.ru/spynet_dark-hi",
  },
  {
    name: "SR 1 Europawelle",
    url: "https://str.pcradio.ru/sr1_euwelle-hi",
  },
  {
    name: "SR 2 Kulturradio",
    url: "https://str.pcradio.ru/sr2_kulturradio-hi",
  },
  {
    name: "SR 3 Saarlandwelle",
    url: "https://str.pcradio.ru/sr3_saarland-hi",
  },
  {
    name: "SRF 1",
    url: "https://str.pcradio.ru/srf1_ch-hi",
  },
  {
    name: "SRF 2 Kultur",
    url: "https://str.pcradio.ru/srf2_ch-hi",
  },
  {
    name: "SRF 3",
    url: "https://str.pcradio.ru/srf3_ch-hi",
  },
  {
    name: "SRF 4 News",
    url: "https://str.pcradio.ru/srf_4_news-hi",
  },
  {
    name: "SRF Musikwelle",
    url: "https://str.pcradio.ru/srf_mw_ch-hi",
  },
  {
    name: "SRF Virus",
    url: "https://str.pcradio.ru/srf_virus_ch-hi",
  },
  {
    name: "Star FM (Нюрнберг)",
    url: "https://str.pcradio.ru/starm_fm_nuernberg-hi",
  },
  {
    name: "Star FM (Таллинн)",
    url: "https://str.pcradio.ru/starfm_tallinn-hi",
  },
  {
    name: "Star FM Rock Classics",
    url: "https://str.pcradio.ru/starfm_roclass-hi",
  },
  {
    name: "Star*Sat Radio",
    url: "https://str.pcradio.ru/starsat_de-hi",
  },
  {
    name: "Stellar Attraction",
    url: "https://str.pcradio.ru/stellar_attraction-hi",
  },
  {
    name: "Stevie Ray Vaughan",
    url: "https://str.pcradio.ru/stevie_r_vaughan-hi",
  },
  {
    name: "Stevie Wonder",
    url: "https://str.pcradio.ru/stevie_wonder-hi",
  },
  {
    name: "Sting",
    url: "https://str.pcradio.ru/sting-hi",
  },
  {
    name: "Strefa FM",
    url: "https://str.pcradio.ru/strefa_fm-hi",
  },
  {
    name: "Studio 21",
    url: "https://str.pcradio.ru/studio21_ru-hi",
  },
  {
    name: "Studio B",
    url: "https://str.pcradio.ru/studiob_rs-hi",
  },
  {
    name: "Sublime FM",
    url: "https://str.pcradio.ru/sublimefm_nl-hi",
  },
  {
    name: "Sud Radio",
    url: "https://str.pcradio.ru/sudradio_fr-hi",
  },
  {
    name: "Sugababes",
    url: "https://str.pcradio.ru/Sugababes-hi",
  },
  {
    name: "SunAlpes",
    url: "https://str.pcradio.ru/funalpes-hi",
  },
  {
    name: "Sunrise Radio",
    url: "https://str.pcradio.ru/sunrise_uk-hi",
  },
  {
    name: "Sunshine FM 99.4",
    url: "https://str.pcradio.ru/sunshine_994-hi",
  },
  {
    name: "sunshine live",
    url: "https://str.pcradio.ru/sunshinelive-hi",
  },
  {
    name: "sunshine live - Classics",
    url: "https://str.pcradio.ru/sunshinelive_classics-hi",
  },
  {
    name: "sunshine live - Die 80er",
    url: "https://str.pcradio.ru/sunshinelive_80er-hi",
  },
  {
    name: "sunshine live - Die 90er",
    url: "https://str.pcradio.ru/sunshinelive_90er-hi",
  },
  {
    name: "sunshine live - Drum n Bass",
    url: "https://str.pcradio.ru/sunshinelive_drumnbass-hi",
  },
  {
    name: "sunshine live - EDM",
    url: "https://str.pcradio.ru/sunshinelive_edm-hi",
  },
  {
    name: "sunshine live - Festival",
    url: "https://str.pcradio.ru/sunshinelive_festival-hi",
  },
  {
    name: "sunshine live - Hands Up",
    url: "https://str.pcradio.ru/sunshinelive_handsup-hi",
  },
  {
    name: "sunshine live - Hard",
    url: "https://str.pcradio.ru/sunshinelive_hard-hi",
  },
  {
    name: "sunshine live - House",
    url: "https://str.pcradio.ru/sunshinelive_house-hi",
  },
  {
    name: "sunshine live - Lounge",
    url: "https://str.pcradio.ru/sunshinelive_lounge-hi",
  },
  {
    name: "sunshine live - Mayday",
    url: "https://str.pcradio.ru/sunshinelive_mayday-hi",
  },
  {
    name: "sunshine live - Nature One",
    url: "https://str.pcradio.ru/sunshinelive_natureone-hi",
  },
  {
    name: "sunshine live - Techno",
    url: "https://str.pcradio.ru/sunshinelive_techno-hi",
  },
  {
    name: "sunshine live - Time Warp",
    url: "https://str.pcradio.ru/sunshinelive_timewarp-hi",
  },
  {
    name: "sunshine live - Trance",
    url: "https://str.pcradio.ru/sunshinelive_trance-hi",
  },
  {
    name: "Super FM",
    url: "https://str.pcradio.ru/karnaval_com_superfm-hi",
  },
  {
    name: "Svensk Pop",
    url: "https://str.pcradio.ru/svensk_pop-hi",
  },
  {
    name: "Sveriges Radio P1 (SR P1)",
    url: "https://str.pcradio.ru/sveriges_p1-hi",
  },
  {
    name: "Sveriges Radio P2 Musik (SR P2)",
    url: "https://str.pcradio.ru/sveriges_p2-hi",
  },
  {
    name: "Sveriges Radio P3 (SR P3)",
    url: "https://str.pcradio.ru/sverige_p3-hi",
  },
  {
    name: "Sveriges Radio P4 (SR P4)",
    url: "https://str.pcradio.ru/sveriges_p4-hi",
  },
  {
    name: "SWH",
    url: "https://str.pcradio.ru/swh_main-hi",
  },
  {
    name: "SWH Gold",
    url: "https://str.pcradio.ru/swh_gold-hi",
  },
  {
    name: "SWH Rock",
    url: "https://str.pcradio.ru/swh_rock-hi",
  },
  {
    name: "SWH+",
    url: "https://str.pcradio.ru/swh_plus-hi",
  },
  {
    name: "Swiss Internet Radio - Classical",
    url: "https://str.pcradio.ru/swiss_classical-hi",
  },
  {
    name: "Swiss Pop",
    url: "https://str.pcradio.ru/swisspop_ch-hi",
  },
  {
    name: "SWR1 Baden-Wuerttemberg",
    url: "https://str.pcradio.ru/swr1_badden-hi",
  },
  {
    name: "SWR1 Rheinland-Pfalz",
    url: "https://str.pcradio.ru/swr1_rheinland-hi",
  },
  {
    name: "SWR2",
    url: "https://str.pcradio.ru/swr2_de-hi",
  },
  {
    name: "SWR3 Live",
    url: "https://str.pcradio.ru/swr3_live-hi",
  },
  {
    name: "SWR3 Lyrix",
    url: "https://str.pcradio.ru/swr3_lyrix-hi",
  },
  {
    name: "SWR3 Party",
    url: "https://str.pcradio.ru/swr3_party-hi",
  },
  {
    name: "SWR4 Baden-Württemberg",
    url: "https://str.pcradio.ru/swr4_baden-hi",
  },
  {
    name: "SWR4 Rheinland-Pfalz",
    url: "https://str.pcradio.ru/swr4_pfalz-hi",
  },
  {
    name: "SWRinfo",
    url: "https://str.pcradio.ru/swr_info-hi",
  },
  {
    name: "Synth Radio",
    url: "https://str.pcradio.ru/synth_radio_ru-hi",
  },
  {
    name: "System of a Down",
    url: "https://str.pcradio.ru/System_of_a_down-hi",
  },
  {
    name: "Szent Korona Rádió",
    url: "https://str.pcradio.ru/szent_korona_radio-hi",
  },
  {
    name: "Szépvíz Rádió",
    url: "https://str.pcradio.ru/szepviz_radio-hi",
  },
  {
    name: "Südtirol 1",
    url: "https://str.pcradio.ru/suedtirol1_it-hi",
  },
  {
    name: "T-Rock 103.8 FM",
    url: "https://str.pcradio.ru/t_rock_at-hi",
  },
  {
    name: "Talisman",
    url: "https://str.pcradio.ru/Talisman-hi",
  },
  {
    name: "Talk Radio Europe",
    url: "https://str.pcradio.ru/talkeurope_es-hi",
  },
  {
    name: "TalkRadio",
    url: "https://str.pcradio.ru/talkradio_co_uk-hi",
  },
  {
    name: "Tanz FM",
    url: "https://str.pcradio.ru/tanzfm_ru-hi",
  },
  {
    name: "Tanănana",
    url: "https://str.pcradio.ru/tananana_ro-hi",
  },
  {
    name: "Tapesh",
    url: "https://str.pcradio.ru/tapesh_com-hi",
  },
  {
    name: "Tarja Turunen",
    url: "https://str.pcradio.ru/Tarja_turunen-hi",
  },
  {
    name: "Tarkan",
    url: "https://str.pcradio.ru/tarkan-hi",
  },
  {
    name: "TDI Classic's",
    url: "https://str.pcradio.ru/tdi_classics-hi",
  },
  {
    name: "TDI Crna Gora",
    url: "https://str.pcradio.ru/tdi_crna_gora-hi",
  },
  {
    name: "TDI Domacica",
    url: "https://str.pcradio.ru/tdi_domacica-hi",
  },
  {
    name: "TDI House",
    url: "https://str.pcradio.ru/tdi_house-hi",
  },
  {
    name: "TDI Love",
    url: "https://str.pcradio.ru/tdi_love-hi",
  },
  {
    name: "TDI Radio",
    url: "https://str.pcradio.ru/tdi_radio-hi",
  },
  {
    name: "TDI Top40",
    url: "https://str.pcradio.ru/tdi_top40-hi",
  },
  {
    name: "Tech N9ne",
    url: "https://str.pcradio.ru/tech_n9ne-hi",
  },
  {
    name: "Techno.FM Live",
    url: "https://str.pcradio.ru/techno_fm_live-hi",
  },
  {
    name: "Technobase FM",
    url: "https://str.pcradio.ru/technobase_fm-hi",
  },
  {
    name: "Tel Aviv 102FM",
    url: "https://str.pcradio.ru/telaviv_102fm-hi",
  },
  {
    name: "Telstar Radio",
    url: "https://str.pcradio.ru/telstar_laut-hi",
  },
  {
    name: "TeluguOne Radio TORi",
    url: "https://str.pcradio.ru/telugu_one-hi",
  },
  {
    name: "TFM",
    url: "https://str.pcradio.ru/tfm_belarus-hi",
  },
  {
    name: "The 1920s Radio Network",
    url: "https://str.pcradio.ru/the1920s_radio-hi",
  },
  {
    name: "The Beat",
    url: "https://str.pcradio.ru/thebeat_no-hi",
  },
  {
    name: "The Beatles",
    url: "https://str.pcradio.ru/The_Beatles-hi",
  },
  {
    name: "The Big Joe 97.3",
    url: "https://str.pcradio.ru/bigjoe_973-hi",
  },
  {
    name: "The Chemodan 18+",
    url: "https://str.pcradio.ru/the_chemodan-hi",
  },
  {
    name: "The Corrs",
    url: "https://str.pcradio.ru/The_Corrs-hi",
  },
  {
    name: "The Current 89.3 (MPR)",
    url: "https://str.pcradio.ru/mpr_current_893-hi",
  },
  {
    name: "The Disco Palace",
    url: "https://str.pcradio.ru/thediscopalace_com-hi",
  },
  {
    name: "The Doors",
    url: "https://str.pcradio.ru/the_doors-hi",
  },
  {
    name: "The Gun Club",
    url: "https://str.pcradio.ru/The_Gun_Club-hi",
  },
  {
    name: "The Notorious",
    url: "https://str.pcradio.ru/The_Notorious-hi",
  },
  {
    name: "The Offspring",
    url: "https://str.pcradio.ru/the_offspring-hi",
  },
  {
    name: "The Prodigy",
    url: "https://str.pcradio.ru/The_Prodigy-hi",
  },
  {
    name: "The Rap MIXX",
    url: "https://str.pcradio.ru/rap_mixx-hi",
  },
  {
    name: "The Rasmus",
    url: "https://str.pcradio.ru/the_rasmus-hi",
  },
  {
    name: "The Rock Solid Radio",
    url: "https://str.pcradio.ru/rock_solidradio-hi",
  },
  {
    name: "The UK 1940s Radio",
    url: "https://str.pcradio.ru/the1940sukradio-hi",
  },
  {
    name: "This Is Radio",
    url: "https://str.pcradio.ru/this_is_radio-hi",
  },
  {
    name: "Three D Radio",
    url: "https://str.pcradio.ru/three_d_au-hi",
  },
  {
    name: "Tiesto",
    url: "https://str.pcradio.ru/Tiesto-hi",
  },
  {
    name: "Tilos Rádió",
    url: "https://str.pcradio.ru/tilos_hu-hi",
  },
  {
    name: "TIM FM 95.7",
    url: "https://str.pcradio.ru/timfm_online-hi",
  },
  {
    name: "Time To Relax",
    url: "https://str.pcradio.ru/timetorelax_vip-hi",
  },
  {
    name: "Today Dance Radio",
    url: "https://str.pcradio.ru/todaydance_it-hi",
  },
  {
    name: "Todo Éxito",
    url: "https://str.pcradio.ru/todoexito_net-hi",
  },
  {
    name: "Tok FM",
    url: "https://str.pcradio.ru/tokfm_pl-hi",
  },
  {
    name: "Tokio Hotel",
    url: "https://str.pcradio.ru/tokio_hotel-hi",
  },
  {
    name: "Tom Waits",
    url: "https://str.pcradio.ru/Tom_Waits-hi",
  },
  {
    name: "Tomorrowland One World Radio",
    url: "https://str.pcradio.ru/tomorrowland_owr-hi",
  },
  {
    name: "Tool Room",
    url: "https://str.pcradio.ru/tool_room_pcradio-hi",
  },
  {
    name: "Top 100 Russia",
    url: "https://str.pcradio.ru/TOP100RUS-hi",
  },
  {
    name: "Top 100 Station",
    url: "https://str.pcradio.ru/top100_station-hi",
  },
  {
    name: "Top 200",
    url: "https://str.pcradio.ru/Top_200-hi",
  },
  {
    name: "Top FM 106.4",
    url: "https://str.pcradio.ru/top_fm_de-hi",
  },
  {
    name: "TOPradio",
    url: "https://str.pcradio.ru/topradio_lv-hi",
  },
  {
    name: "TOPradio (Брюссель)",
    url: "https://str.pcradio.ru/topradio_be-hi",
  },
  {
    name: "Tori Amos",
    url: "https://str.pcradio.ru/Tori_Amos-hi",
  },
  {
    name: "Tormented Radio",
    url: "https://str.pcradio.ru/tormentedradio_com-hi",
  },
  {
    name: "Total FM Algarve",
    url: "https://str.pcradio.ru/totalfm_algarve-hi",
  },
  {
    name: "TotalRock Radio",
    url: "https://str.pcradio.ru/totalrock_uk-hi",
  },
  {
    name: "Toto Cutugno (Тото Кутуньо)",
    url: "https://str.pcradio.ru/Toto_Cutugno-hi",
  },
  {
    name: "Trance Athens Radio",
    url: "https://str.pcradio.ru/trance_athens-hi",
  },
  {
    name: "Trance Century Radio",
    url: "https://str.pcradio.ru/trancecentury_com-hi",
  },
  {
    name: "Trance Is Star",
    url: "https://str.pcradio.ru/tranceisstar_com-hi",
  },
  {
    name: "Trance.one Radio",
    url: "https://str.pcradio.ru/trance_one-hi",
  },
  {
    name: "TranceBase",
    url: "https://str.pcradio.ru/trancebase_fm-hi",
  },
  {
    name: "Trap FM",
    url: "https://str.pcradio.ru/trap_fm-hi",
  },
  {
    name: "Tre Raadio Rapla 91.3",
    url: "https://str.pcradio.ru/rapla_tre_ee-hi",
  },
  {
    name: "Trend FM",
    url: "https://str.pcradio.ru/trendfm_hu-hi",
  },
  {
    name: "Trik Trak Radio",
    url: "https://str.pcradio.ru/triktrak_ca-hi",
  },
  {
    name: "Triple R - Rock Rarity Radio",
    url: "https://str.pcradio.ru/triple_r_laut-hi",
  },
  {
    name: "Trnavské rádio 103.9 FM",
    url: "https://str.pcradio.ru/trnavske_radio-hi",
  },
  {
    name: "TRT Tamil Olli India",
    url: "https://str.pcradio.ru/trt_tamil_olli-hi",
  },
  {
    name: "Truckers FM",
    url: "https://str.pcradio.ru/truckers_fm-hi",
  },
  {
    name: "True Black Metal Radio",
    url: "https://str.pcradio.ru/true_black_metal-hi",
  },
  {
    name: "TSF Radio Noticias",
    url: "https://str.pcradio.ru/tsf_noticias-hi",
  },
  {
    name: "Tumar FM",
    url: "https://str.pcradio.ru/tumar_fm-hi",
  },
  {
    name: "Twisted Sister",
    url: "https://str.pcradio.ru/twisted_sister-hi",
  },
  {
    name: "U1 Radio Tirol",
    url: "https://str.pcradio.ru/u1_tirol-hi",
  },
  {
    name: "U105",
    url: "https://str.pcradio.ru/u105_com-hi",
  },
  {
    name: "U2",
    url: "https://str.pcradio.ru/u2-hi",
  },
  {
    name: "UAFM",
    url: "https://str.pcradio.ru/uafm_org-hi",
  },
  {
    name: "Ukrainian Radio in Chicago",
    url: "https://str.pcradio.ru/urcradio_com-hi",
  },
  {
    name: "Ulitka",
    url: "https://str.pcradio.ru/radio_ulitka-hi",
  },
  {
    name: "Ultima.FM",
    url: "https://str.pcradio.ru/ultima_fm-hi",
  },
  {
    name: "Ultimate spinach",
    url: "https://str.pcradio.ru/Ultimate-hi",
  },
  {
    name: "Ultra",
    url: "https://str.pcradio.ru/radio_ultra-hi",
  },
  {
    name: "ultRadio",
    url: "https://str.pcradio.ru/ultradio_ru-hi",
  },
  {
    name: "UltraPlay",
    url: "https://str.pcradio.ru/ultraplay_tk-hi",
  },
  {
    name: "Uma2rmaH (Уматурман)",
    url: "https://str.pcradio.ru/Uma2rmaH-hi",
  },
  {
    name: "4",
    url: "https://str.pcradio.ru/unicross_uni-hi",
  },
  {
    name: "Unika FM",
    url: "https://str.pcradio.ru/unika_fm-hi",
  },
  {
    name: "UniKid",
    url: "https://str.pcradio.ru/radio_unikid_ru-hi",
  },
  {
    name: "United FM Radio Jamz",
    url: "https://str.pcradio.ru/unitedfm_jamz-hi",
  },
  {
    name: "United FM Radio Rock and Metal 24.7",
    url: "https://str.pcradio.ru/unitedfm_rockmetal-hi",
  },
  {
    name: "Unity FM",
    url: "https://str.pcradio.ru/unityfm_nl-hi",
  },
  {
    name: "UnserDing 103.7",
    url: "https://str.pcradio.ru/unserding_1037-hi",
  },
  {
    name: "unserRadio",
    url: "https://str.pcradio.ru/unserradio_de-hi",
  },
  {
    name: "UOP - Radio Sertaneja",
    url: "https://str.pcradio.ru/uop_sertaneja-hi",
  },
  {
    name: "UP FM",
    url: "https://str.pcradio.ru/upfm_net-hi",
  },
  {
    name: "Ural Sound FM",
    url: "https://str.pcradio.ru/uralsound_fm-hi",
  },
  {
    name: "Urban Space Radio",
    url: "https://str.pcradio.ru/mjoy_urbansr-hi",
  },
  {
    name: "Uturn Radio - Drum and Bass",
    url: "https://str.pcradio.ru/uturn_dnb-hi",
  },
  {
    name: "UZIC - Techno Minimal",
    url: "https://str.pcradio.ru/uzic_techno-hi",
  },
  {
    name: "Vanessa-Mae",
    url: "https://str.pcradio.ru/Vanessa_Mae-hi",
  },
  {
    name: "Vangelis",
    url: "https://str.pcradio.ru/vangelis-hi",
  },
  {
    name: "Vanilla FM",
    url: "https://str.pcradio.ru/vanilla_fm-hi",
  },
  {
    name: "VCY America",
    url: "https://str.pcradio.ru/vcyamerica-hi",
  },
  {
    name: "Velvet Acid Christ",
    url: "https://str.pcradio.ru/Velvet_Acid_Christ-hi",
  },
  {
    name: "Vem Radio 91.1 FM",
    url: "https://str.pcradio.ru/vem_am-hi",
  },
  {
    name: "Venice Classic Radio Auditorium",
    url: "https://str.pcradio.ru/vcr_auditorium-hi",
  },
  {
    name: "Venice Classic Radio Live",
    url: "https://str.pcradio.ru/vcr_live-hi",
  },
  {
    name: "Verdure Station",
    url: "https://str.pcradio.ru/verdure_net-hi",
  },
  {
    name: "Versuz Radio",
    url: "https://str.pcradio.ru/versuz_radio-hi",
  },
  {
    name: "Vibe FM 88.7",
    url: "https://str.pcradio.ru/vibefm_malta-hi",
  },
  {
    name: "Vibe-in Radio",
    url: "https://str.pcradio.ru/vibe_in_com-hi",
  },
  {
    name: "Viberoom - Beats Radio",
    url: "https://str.pcradio.ru/viberoom_beats-hi",
  },
  {
    name: "Vibration Vintage",
    url: "https://str.pcradio.ru/vibration_vint-hi",
  },
  {
    name: "Virgin Radio France",
    url: "https://str.pcradio.ru/virgin_france-hi",
  },
  {
    name: "Virgin Radio Italia - '70",
    url: "https://str.pcradio.ru/virgin_it_70-hi",
  },
  {
    name: "Virgin Radio Italia - '80",
    url: "https://str.pcradio.ru/virgin_it_80-hi",
  },
  {
    name: "Virgin Radio Italia - Alternative",
    url: "https://str.pcradio.ru/virgin_it_alternative-hi",
  },
  {
    name: "Virgin Radio Italia - Hard Rock",
    url: "https://str.pcradio.ru/virgin_it_hard-hi",
  },
  {
    name: "Virgin Radio Italia - On-Air",
    url: "https://str.pcradio.ru/virgin_it_onair-hi",
  },
  {
    name: "Virgin Radio Italia - Rock Hits",
    url: "https://str.pcradio.ru/virgin_it_rohits-hi",
  },
  {
    name: "Virgin Radio Italia - Rock Party",
    url: "https://str.pcradio.ru/virgin_it_roparty-hi",
  },
  {
    name: "Virgin Radio Türkiye",
    url: "https://str.pcradio.ru/virgin_radio_turk-hi",
  },
  {
    name: "Vision Radio UK",
    url: "https://str.pcradio.ru/visionradio_uk-hi",
  },
  {
    name: "7 (Пьятра-Нямц)",
    url: "https://str.pcradio.ru/vivafm_ro-hi",
  },
  {
    name: "Vocal Chillout",
    url: "https://str.pcradio.ru/vocalchill_fm-hi",
  },
  {
    name: "Vocal Trance FM",
    url: "https://str.pcradio.ru/vocaltrance_fm-hi",
  },
  {
    name: "Vogtland Radio",
    url: "https://str.pcradio.ru/vogtland_radio-hi",
  },
  {
    name: "Voice of America",
    url: "https://str.pcradio.ru/voice_of_america-hi",
  },
  {
    name: "Voice of America Persian (VOA)",
    url: "https://str.pcradio.ru/voa_pers-hi",
  },
  {
    name: "Voice of Van",
    url: "https://str.pcradio.ru/voiceofvan_net-hi",
  },
  {
    name: "Volksmusikpur",
    url: "https://str.pcradio.ru/volksmusikpur_radio-hi",
  },
  {
    name: "Vox Rádió",
    url: "https://str.pcradio.ru/voxfm_ro-hi",
  },
  {
    name: "VRT Studio Brussel",
    url: "https://str.pcradio.ru/stubru_be-hi",
  },
  {
    name: "W Radio",
    url: "https://str.pcradio.ru/wradio_com_mx-hi",
  },
  {
    name: "W Radio México",
    url: "https://str.pcradio.ru/w_radio_mexico-hi",
  },
  {
    name: "Wacken Radio",
    url: "https://str.pcradio.ru/wacken_radio-hi",
  },
  {
    name: "WalconFM",
    url: "https://str.pcradio.ru/walcon_fm-hi",
  },
  {
    name: "Wargaming FM - Rock",
    url: "https://str.pcradio.ru/wargaming_fm_4-hi",
  },
  {
    name: "Wargaming FM - Trance",
    url: "https://str.pcradio.ru/wargaming_fm_3-hi",
  },
  {
    name: "Wargaming FM - Основной",
    url: "https://str.pcradio.ru/wargaming_fm_1-hi",
  },
  {
    name: "Wargaming FM - Основной (только музыка)",
    url: "https://str.pcradio.ru/wargaming_fm_2-hi",
  },
  {
    name: "Wartburg Radio 96.5 FM",
    url: "https://str.pcradio.ru/wartburg_radio-hi",
  },
  {
    name: "Wasteland Radio",
    url: "https://str.pcradio.ru/wasteland_radio-hi",
  },
  {
    name: "Waterstad FM",
    url: "https://str.pcradio.ru/waterstad_fm-hi",
  },
  {
    name: "Wave Radio Club",
    url: "https://str.pcradio.ru/waveradio_isr-hi",
  },
  {
    name: "WBCQ The Planet",
    url: "https://str.pcradio.ru/wbcq_planet-hi",
  },
  {
    name: "5 The Night",
    url: "https://str.pcradio.ru/wbjb_905-hi",
  },
  {
    name: "WBWC 88.3 FM - The Sting",
    url: "https://str.pcradio.ru/wbwc_883-hi",
  },
  {
    name: "WCSB 89.3",
    url: "https://str.pcradio.ru/wcsb_893-hi",
  },
  {
    name: "WDR 2",
    url: "https://str.pcradio.ru/wdr2_de-hi",
  },
  {
    name: "WDR 3",
    url: "https://str.pcradio.ru/wdr3_de-hi",
  },
  {
    name: "WDR 4",
    url: "https://str.pcradio.ru/wdr4radio-hi",
  },
  {
    name: "WDR 5",
    url: "https://str.pcradio.ru/wdr5_de-hi",
  },
  {
    name: "WDR COSMO",
    url: "https://str.pcradio.ru/wdr_cosmo-hi",
  },
  {
    name: "West Coast Golden Radio",
    url: "https://str.pcradio.ru/west_coast_golden-hi",
  },
  {
    name: "WFUV",
    url: "https://str.pcradio.ru/wfuv_live-hi",
  },
  {
    name: "WHUS 91.7 FM",
    url: "https://str.pcradio.ru/whus_917-hi",
  },
  {
    name: "WIDE radio",
    url: "https://str.pcradio.ru/itswide_com-hi",
  },
  {
    name: "WikiSpeak",
    url: "https://str.pcradio.ru/radio_wikispeak-hi",
  },
  {
    name: "Winter FM",
    url: "https://str.pcradio.ru/winterfm_ru-hi",
  },
  {
    name: "Within Temptation",
    url: "https://str.pcradio.ru/Within_Temptation-hi",
  },
  {
    name: "WJCU 88.7 FM",
    url: "https://str.pcradio.ru/wjcu_887-hi",
  },
  {
    name: "WKAR",
    url: "https://str.pcradio.ru/wkar_org-hi",
  },
  {
    name: "WLVR 91.3 FM",
    url: "https://str.pcradio.ru/wlvr_913-hi",
  },
  {
    name: "WMSC 90.3 FM",
    url: "https://str.pcradio.ru/wmsc_903-hi",
  },
  {
    name: "WMSE Radio 91.7 FM",
    url: "https://str.pcradio.ru/wmse_917-hi",
  },
  {
    name: "WNYC News station",
    url: "https://str.pcradio.ru/wnyc-hi",
  },
  {
    name: "WQXR Q2 Music",
    url: "https://str.pcradio.ru/wqxr_q2-hi",
  },
  {
    name: "WRN English Europe",
    url: "https://str.pcradio.ru/wrn_europe_eng-hi",
  },
  {
    name: "WUCF",
    url: "https://str.pcradio.ru/wucf-hi",
  },
  {
    name: "WXPN",
    url: "https://str.pcradio.ru/xpn_org-hi",
  },
  {
    name: "Wüste Welle",
    url: "https://str.pcradio.ru/wueste_welle-hi",
  },
  {
    name: "X-Clusief",
    url: "https://str.pcradio.ru/exclusieffmcom-hi",
  },
  {
    name: "Xanthi Deejay",
    url: "https://str.pcradio.ru/xanthi_radio_deejay-hi",
  },
  {
    name: "Xclusive One Drop Media",
    url: "https://str.pcradio.ru/xclusive_one_drop-hi",
  },
  {
    name: "xRadio",
    url: "https://str.pcradio.ru/xradio_lv-hi",
  },
  {
    name: "XS Manchester 106.1",
    url: "https://str.pcradio.ru/xs_manchester-hi",
  },
  {
    name: "Yanni",
    url: "https://str.pcradio.ru/Yanni-hi",
  },
  {
    name: "Yello",
    url: "https://str.pcradio.ru/Yello-hi",
  },
  {
    name: "Yerevan FM 101.9",
    url: "https://str.pcradio.ru/yerevanfm_am-hi",
  },
  {
    name: "Yerevan Nights",
    url: "https://str.pcradio.ru/erevan_nights-hi",
  },
  {
    name: "Yeridasartoutian Tsayne",
    url: "https://str.pcradio.ru/yeridasartoutian_tsayne-hi",
  },
  {
    name: "Yes Radio",
    url: "https://str.pcradio.ru/yesradio_it-hi",
  },
  {
    name: "Yesterday-Radio",
    url: "https://str.pcradio.ru/yesterdayradio_de-hi",
  },
  {
    name: "Yiruma",
    url: "https://str.pcradio.ru/Yurima-hi",
  },
  {
    name: "Yoga Chill",
    url: "https://str.pcradio.ru/yoga_chill-hi",
  },
  {
    name: "Yoga Radio",
    url: "https://str.pcradio.ru/yogaradio_fm-hi",
  },
  {
    name: "You FM",
    url: "https://str.pcradio.ru/youfm_de-hi",
  },
  {
    name: "Ysa Ferrer",
    url: "https://str.pcradio.ru/Ysa_Ferrer-hi",
  },
  {
    name: "Z Electro",
    url: "https://str.pcradio.ru/zelectro_pcradio-hi",
  },
  {
    name: "Z-Radio 106.1 FM (Житомир)",
    url: "https://str.pcradio.ru/zradio_zhyto-hi",
  },
  {
    name: "ZANJ Radio",
    url: "https://str.pcradio.ru/zanj_org-hi",
  },
  {
    name: "Zdob si Zdub",
    url: "https://str.pcradio.ru/Zdob_si_Zdub-hi",
  },
  {
    name: "Zikkurat-Radio",
    url: "https://str.pcradio.ru/zikkurat-hi",
  },
  {
    name: "Ziniu Radijas",
    url: "https://str.pcradio.ru/ziniur_lt-hi",
  },
  {
    name: "Zutokine",
    url: "https://str.pcradio.ru/Zutokine-hi",
  },
  {
    name: "Záhorácke Rádio",
    url: "https://str.pcradio.ru/zahoracke_rad-hi",
  },
  {
    name: "Zефир FM",
    url: "https://str.pcradio.ru/zefir_fm-hi",
  },
  {
    name: "А-Студио",
    url: "https://str.pcradio.ru/a_studio-hi",
  },
  {
    name: "Авсим Радио",
    url: "https://str.pcradio.ru/avsim_ru-hi",
  },
  {
    name: "АвтоРадио",
    url: "https://str.pcradio.ru/avtoradio-hi",
  },
  {
    name: "Авторадио (Красноярск)",
    url: "https://str.pcradio.ru/avto_krasno-hi",
  },
  {
    name: "АвтоРадио (Минск)",
    url: "https://str.pcradio.ru/avtoradio_by-hi",
  },
  {
    name: "Авторадио (Нижний Новгород)",
    url: "https://str.pcradio.ru/avtoradio_nn-hi",
  },
  {
    name: "Авторадио (Омск)",
    url: "https://str.pcradio.ru/avtoradio_omsk-hi",
  },
  {
    name: "Авторадио (Санкт-Петербург)",
    url: "https://str.pcradio.ru/avtoradio_spb-hi",
  },
  {
    name: "Авторадио Казахстан",
    url: "https://str.pcradio.ru/avtoradiokz-hi",
  },
  {
    name: "Авторадио Украина (Киев)",
    url: "https://str.pcradio.ru/avtoradio_ua-hi",
  },
  {
    name: "Агата Кристи",
    url: "https://str.pcradio.ru/Agata_Kristi-hi",
  },
  {
    name: "Азовская волна",
    url: "https://str.pcradio.ru/azovska_wave-hi",
  },
  {
    name: "Аквариум",
    url: "https://str.pcradio.ru/akvarium-hi",
  },
  {
    name: "Акула",
    url: "https://str.pcradio.ru/Akula-hi",
  },
  {
    name: "Акунин - История Российского государства",
    url: "https://str.pcradio.ru/akunin_history-hi",
  },
  {
    name: "Акунин - Приключения магистра",
    url: "https://str.pcradio.ru/akunin_magistr-hi",
  },
  {
    name: "Акунин - Приключения Э. Фандорина",
    url: "https://str.pcradio.ru/Akunin_Erast-hi",
  },
  {
    name: "Акунин - Провинціальный детективъ",
    url: "https://str.pcradio.ru/akunin_pelagia-hi",
  },
  {
    name: "Акунин - Смерть на брудершафт",
    url: "https://str.pcradio.ru/akunin_brudershaft-hi",
  },
  {
    name: "Акунин - цикл Жанры",
    url: "https://str.pcradio.ru/akunin_genres-hi",
  },
  {
    name: "Алания FM",
    url: "https://str.pcradio.ru/alania_fm-hi",
  },
  {
    name: "Александр Вертинский",
    url: "https://str.pcradio.ru/Aleksandr_Vertinskij-hi",
  },
  {
    name: "Александр Малинин",
    url: "https://str.pcradio.ru/Malinin-hi",
  },
  {
    name: "Александр Маршал",
    url: "https://str.pcradio.ru/alexandr_marshal-hi",
  },
  {
    name: "Александр Новиков",
    url: "https://str.pcradio.ru/Aleksandr_Novikov-hi",
  },
  {
    name: "Александр Розенбаум",
    url: "https://str.pcradio.ru/Aleksandr_Rozenbaum-hi",
  },
  {
    name: "Александр Серов",
    url: "https://str.pcradio.ru/alexandr_serov-hi",
  },
  {
    name: "Алексей Рыбников",
    url: "https://str.pcradio.ru/alexey_rybnikov-hi",
  },
  {
    name: "Алексин 18+",
    url: "https://str.pcradio.ru/Aleksin-hi",
  },
  {
    name: "Алена Апина (Комбинация)",
    url: "https://str.pcradio.ru/apina_kombinacia-hi",
  },
  {
    name: "Алиса",
    url: "https://str.pcradio.ru/Alisa-hi",
  },
  {
    name: "Алла Пугачева",
    url: "https://str.pcradio.ru/Alla_Pugacheva-hi",
  },
  {
    name: "Алсу",
    url: "https://str.pcradio.ru/Alsu-hi",
  },
  {
    name: "Анатолий Брусникин (Борис Акунин)",
    url: "https://str.pcradio.ru/brusnikin-hi",
  },
  {
    name: "Андрей Бандера",
    url: "https://str.pcradio.ru/Andrej_Bandera-hi",
  },
  {
    name: "Андрей Губин",
    url: "https://str.pcradio.ru/andrey_gubin-hi",
  },
  {
    name: "Андрей Князев (КняZz)",
    url: "https://str.pcradio.ru/knyazz-hi",
  },
  {
    name: "Ани Лорак",
    url: "https://str.pcradio.ru/Ani_Lorak-hi",
  },
  {
    name: "Анна Герман",
    url: "https://str.pcradio.ru/Anna_German-hi",
  },
  {
    name: "Ансамбль Мещерина (ЭМИ)",
    url: "https://str.pcradio.ru/ansambl_mesherina-hi",
  },
  {
    name: "Антонио Вивальди",
    url: "https://str.pcradio.ru/Vivaldi-hi",
  },
  {
    name: "Апекс-Радио",
    url: "https://str.pcradio.ru/apeks_radio-hi",
  },
  {
    name: "Апекс-Радио - Новогоднее",
    url: "https://str.pcradio.ru/apeks_newyear-hi",
  },
  {
    name: "Апекс-Радио - Реальное радио",
    url: "https://str.pcradio.ru/apeks_real-hi",
  },
  {
    name: "Аплюс Deep",
    url: "https://str.pcradio.ru/aplus_deep-hi",
  },
  {
    name: "Аплюс Rock",
    url: "https://str.pcradio.ru/aplus_rock-hi",
  },
  {
    name: "Аристократи",
    url: "https://str.pcradio.ru/aristocrats-hi",
  },
  {
    name: "Ария",
    url: "https://str.pcradio.ru/Aria-hi",
  },
  {
    name: "Аркадий Северный",
    url: "https://str.pcradio.ru/Arkadij_Severnyj-hi",
  },
  {
    name: "Армейские песни 18+",
    url: "https://str.pcradio.ru/Armejskie_pesni-hi",
  },
  {
    name: "Армик",
    url: "https://str.pcradio.ru/Armik-hi",
  },
  {
    name: "Армия FM",
    url: "https://str.pcradio.ru/armyfm_ukr-hi",
  },
  {
    name: "Архив Радио России",
    url: "https://str.pcradio.ru/radiorus_arc-hi",
  },
  {
    name: "АссА",
    url: "https://str.pcradio.ru/radioassa_ru-hi",
  },
  {
    name: "Атаман FM",
    url: "https://str.pcradio.ru/ataman_fm-hi",
  },
  {
    name: "Атмосфера",
    url: "https://str.pcradio.ru/atmoradio_ru-hi",
  },
  {
    name: "АукцЫон",
    url: "https://str.pcradio.ru/auktsyon-hi",
  },
  {
    name: "Ашкадар",
    url: "https://str.pcradio.ru/ashkadar-hi",
  },
  {
    name: "Балтийский Берег",
    url: "https://str.pcradio.ru/baltiyskiy_bereg-hi",
  },
  {
    name: "Балтком (Рига)",
    url: "https://str.pcradio.ru/baltkom_riga-hi",
  },
  {
    name: "Банд’Эрос",
    url: "https://str.pcradio.ru/BandJeros-hi",
  },
  {
    name: "0",
    url: "https://str.pcradio.ru/baranovichi_fm-hi",
  },
  {
    name: "Баста",
    url: "https://str.pcradio.ru/Basta-hi",
  },
  {
    name: "Белое Радио",
    url: "https://str.pcradio.ru/beloe_radio-hi",
  },
  {
    name: "Беломорканал",
    url: "https://str.pcradio.ru/Belomorkanal-hi",
  },
  {
    name: "Белый лебедь",
    url: "https://str.pcradio.ru/beliy_lebed-hi",
  },
  {
    name: "Бессмертный полк",
    url: "https://str.pcradio.ru/bessmert_polk-hi",
  },
  {
    name: "Би-2",
    url: "https://str.pcradio.ru/Bi_2-hi",
  },
  {
    name: "Бизнес FM (Алматы)",
    url: "https://str.pcradio.ru/businessfm_kz-hi",
  },
  {
    name: "8 FM",
    url: "https://str.pcradio.ru/bim_radio1028-hi",
  },
  {
    name: "Блат FM 10",
    url: "https://str.pcradio.ru/Blat_FM10-hi",
  },
  {
    name: "Блат FM 7",
    url: "https://str.pcradio.ru/Blat_FM7-hi",
  },
  {
    name: "Блат FM 8",
    url: "https://str.pcradio.ru/Blat_FM8-hi",
  },
  {
    name: "Блат FM 9",
    url: "https://str.pcradio.ru/Blat_FM9-hi",
  },
  {
    name: "Блатрадио",
    url: "https://str.pcradio.ru/Blatradio-hi",
  },
  {
    name: "Блестящие",
    url: "https://str.pcradio.ru/blestyashie-hi",
  },
  {
    name: "Блиск FM 106.6",
    url: "https://str.pcradio.ru/blyskfm_chern-hi",
  },
  {
    name: "Божья коровка",
    url: "https://str.pcradio.ru/Bozhja_Korovka-hi",
  },
  {
    name: "Большая Балашиха",
    url: "https://str.pcradio.ru/bigbalash-hi",
  },
  {
    name: "Большое радио",
    url: "https://str.pcradio.ru/big_radio_murmansk-hi",
  },
  {
    name: "Борис Моисеев",
    url: "https://str.pcradio.ru/Boris_Moiseev-hi",
  },
  {
    name: "Борнео",
    url: "https://str.pcradio.ru/borneo_ru-hi",
  },
  {
    name: "Браво",
    url: "https://str.pcradio.ru/Bravo-hi",
  },
  {
    name: "Брати Гадюкіни",
    url: "https://str.pcradio.ru/braty_gadyukiny-hi",
  },
  {
    name: "Братья Грим",
    url: "https://str.pcradio.ru/Bratja_Grim-hi",
  },
  {
    name: "Братья Карамазовы",
    url: "https://str.pcradio.ru/bratya_karamazovy-hi",
  },
  {
    name: "Бумбокс",
    url: "https://str.pcradio.ru/Bumboks-hi",
  },
  {
    name: "Бурлеск FM",
    url: "https://str.pcradio.ru/burlesquefm_com-hi",
  },
  {
    name: "Бутырка",
    url: "https://str.pcradio.ru/Butirka-hi",
  },
  {
    name: "БФМ Радио (Нью Йорк)",
    url: "https://str.pcradio.ru/bfmradio_us-hi",
  },
  {
    name: "Валерий Леонтьев",
    url: "https://str.pcradio.ru/valery_leontiev-hi",
  },
  {
    name: "Валерий Меладзе",
    url: "https://str.pcradio.ru/Valerij_Meladze-hi",
  },
  {
    name: "Валерия",
    url: "https://str.pcradio.ru/Valerija-hi",
  },
  {
    name: "Ванда FM",
    url: "https://str.pcradio.ru/wandafm_ukr-hi",
  },
  {
    name: "Варвара",
    url: "https://str.pcradio.ru/Varvara-hi",
  },
  {
    name: "Ватан",
    url: "https://str.pcradio.ru/vatan-hi",
  },
  {
    name: "Ватан Cедасы 99.5 FM",
    url: "https://str.pcradio.ru/vatan_sedasy-hi",
  },
  {
    name: "Вахтанг Кикабидзе",
    url: "https://str.pcradio.ru/Vahtang_Kikabidze-hi",
  },
  {
    name: "Веда-радио",
    url: "https://str.pcradio.ru/vedaradio-hi",
  },
  {
    name: "Вежа",
    url: "https://str.pcradio.ru/vezha_org-hi",
  },
  {
    name: "Верка Cердючка",
    url: "https://str.pcradio.ru/Verka_Serdjuchka-hi",
  },
  {
    name: "Вести FM",
    url: "https://str.pcradio.ru/radiovesti_ru-hi",
  },
  {
    name: "Вечерний Бриз",
    url: "https://str.pcradio.ru/vech_breeze-hi",
  },
  {
    name: "ВИА Гра",
    url: "https://str.pcradio.ru/Viagra-hi",
  },
  {
    name: "Виктор Королев",
    url: "https://str.pcradio.ru/Koroljov_Viktor-hi",
  },
  {
    name: "Виктор Петлюра",
    url: "https://str.pcradio.ru/Viktor_Petljura-hi",
  },
  {
    name: "Виктор Салтыков",
    url: "https://str.pcradio.ru/viktor_saltykov-hi",
  },
  {
    name: "Виктор Третьяков",
    url: "https://str.pcradio.ru/Viktor_Tretjakov-hi",
  },
  {
    name: "Виктор Цой (Кино)",
    url: "https://str.pcradio.ru/gr_Kino-hi",
  },
  {
    name: "Виктори Рок (Victoree)",
    url: "https://str.pcradio.ru/victoree_ru-hi",
  },
  {
    name: "Вилган",
    url: "https://str.pcradio.ru/vilgan_ru-hi",
  },
  {
    name: "Вилли Токарев",
    url: "https://str.pcradio.ru/villi_tokarev-hi",
  },
  {
    name: "Винтаж",
    url: "https://str.pcradio.ru/Vintazh-hi",
  },
  {
    name: "Винтаж",
    url: "https://str.pcradio.ru/Vintage-hi",
  },
  {
    name: "Вирус",
    url: "https://str.pcradio.ru/Virus-hi",
  },
  {
    name: "Витамин FM v.90",
    url: "https://str.pcradio.ru/vitamin_fm_v90-hi",
  },
  {
    name: "Витамин FM Танцевальный",
    url: "https://str.pcradio.ru/vitamin_fm_dance-hi",
  },
  {
    name: "Витас",
    url: "https://str.pcradio.ru/Vitas-hi",
  },
  {
    name: "Владивосток FM",
    url: "https://str.pcradio.ru/vladivostok_fm-hi",
  },
  {
    name: "Владимир Высоцкий",
    url: "https://str.pcradio.ru/Visotskiy-hi",
  },
  {
    name: "Владимир Кузьмин (Динамик)",
    url: "https://str.pcradio.ru/vladimir_kuzmin-hi",
  },
  {
    name: "1 FM (Таллинн)",
    url: "https://str.pcradio.ru/volna_tallinn-hi",
  },
  {
    name: "Волна FM",
    url: "https://str.pcradio.ru/volnafm_ru-hi",
  },
  {
    name: "Волна Счастья",
    url: "https://str.pcradio.ru/volna_schastia-hi",
  },
  {
    name: "Волхов-VFM",
    url: "https://str.pcradio.ru/volhov_vfm-hi",
  },
  {
    name: "Волшебное Радио",
    url: "https://str.pcradio.ru/volshebnoe_radio-hi",
  },
  {
    name: "Вопли Видоплясова",
    url: "https://str.pcradio.ru/vopli_vv-hi",
  },
  {
    name: "Воровайки",
    url: "https://str.pcradio.ru/Vorovaiki-hi",
  },
  {
    name: "Воскресение",
    url: "https://str.pcradio.ru/pravradioru-hi",
  },
  {
    name: "Восток России",
    url: "https://str.pcradio.ru/vostok_rossii-hi",
  },
  {
    name: "Всемирное Одесское радио",
    url: "https://str.pcradio.ru/world_odessa-hi",
  },
  {
    name: "3 (Костомукша)",
    url: "https://str.pcradio.ru/vtorayavolna_1023-hi",
  },
  {
    name: "Вячеслав Добрынин",
    url: "https://str.pcradio.ru/Dobrynin_Vjacheslav-hi",
  },
  {
    name: "Вячеслав Малежик",
    url: "https://str.pcradio.ru/Malegek-hi",
  },
  {
    name: "Гамаюн",
    url: "https://str.pcradio.ru/raga_rf-hi",
  },
  {
    name: "Гарик Сукачёв",
    url: "https://str.pcradio.ru/Garik_Sukachov-hi",
  },
  {
    name: "Гималаи",
    url: "https://str.pcradio.ru/himalaya24-hi",
  },
  {
    name: "Глаголъ",
    url: "https://str.pcradio.ru/glagoll-hi",
  },
  {
    name: "Говорит Майкоп",
    url: "https://str.pcradio.ru/govorit_maykop-hi",
  },
  {
    name: "Говорит Москва",
    url: "https://str.pcradio.ru/govoritmoskva_ru-hi",
  },
  {
    name: "Голос Бирмы",
    url: "https://str.pcradio.ru/golos_birmy-hi",
  },
  {
    name: "Голос Истины",
    url: "https://str.pcradio.ru/golos_istiny-hi",
  },
  {
    name: "Голос Надії",
    url: "https://str.pcradio.ru/golos_nadii-hi",
  },
  {
    name: "Голубые береты",
    url: "https://str.pcradio.ru/golubye_berety-hi",
  },
  {
    name: "Гомель FM",
    url: "https://str.pcradio.ru/gomelfm_by-hi",
  },
  {
    name: "7 FM",
    url: "https://str.pcradio.ru/gomelplus_by-hi",
  },
  {
    name: "4 FM",
    url: "https://str.pcradio.ru/gomel_city_1074-hi",
  },
  {
    name: "Город 312",
    url: "https://str.pcradio.ru/gorod_312-hi",
  },
  {
    name: "Город FM",
    url: "https://str.pcradio.ru/gorodfm_org-hi",
  },
  {
    name: "Город Кудрово",
    url: "https://str.pcradio.ru/gorod_kudrovo-hi",
  },
  {
    name: "Городская волна",
    url: "https://str.pcradio.ru/gorvolna_ru-hi",
  },
  {
    name: "Горячие головы",
    url: "https://str.pcradio.ru/Gorjachie_golovy-hi",
  },
  {
    name: "Гости из будущего",
    url: "https://str.pcradio.ru/Gosti_is_Budushego-hi",
  },
  {
    name: "Град Петров",
    url: "https://str.pcradio.ru/grad_petrov-hi",
  },
  {
    name: "Гражданская оборона",
    url: "https://str.pcradio.ru/Grazhdanskaja_oborona-hi",
  },
  {
    name: "Григорий Лепс",
    url: "https://str.pcradio.ru/Leps-hi",
  },
  {
    name: "Громадське радіо",
    url: "https://str.pcradio.ru/hromadske_radio-hi",
  },
  {
    name: "Группа Фабрика",
    url: "https://str.pcradio.ru/Fabrika-hi",
  },
  {
    name: "Дала FM",
    url: "https://str.pcradio.ru/dala_fm-hi",
  },
  {
    name: "ДДТ",
    url: "https://str.pcradio.ru/DDT-hi",
  },
  {
    name: "Дельфин 18+",
    url: "https://str.pcradio.ru/dolphin-hi",
  },
  {
    name: "Дельфины",
    url: "https://str.pcradio.ru/dolphins_radio-hi",
  },
  {
    name: "Денис Майданов",
    url: "https://str.pcradio.ru/denis_maydanov-hi",
  },
  {
    name: "Детское радио",
    url: "https://str.pcradio.ru/deti_fm-hi",
  },
  {
    name: "Детское христианское радио",
    url: "https://str.pcradio.ru/detskoe_christ-hi",
  },
  {
    name: "Децл",
    url: "https://str.pcradio.ru/Decl-hi",
  },
  {
    name: "Дж. Роулинг - Гарри Поттер",
    url: "https://str.pcradio.ru/harry_potter-hi",
  },
  {
    name: "Джаз Филармоник Радио",
    url: "https://str.pcradio.ru/jazz_philar-hi",
  },
  {
    name: "Джем FM (Киев)",
    url: "https://str.pcradio.ru/djemfm-hi",
  },
  {
    name: "Диалог",
    url: "https://str.pcradio.ru/radio_dialog_ru-hi",
  },
  {
    name: "Диана Арбенина (Ночные снайперы)",
    url: "https://str.pcradio.ru/nochnye_snaypery_arbenina-hi",
  },
  {
    name: "Дидюля",
    url: "https://str.pcradio.ru/Didulya-hi",
  },
  {
    name: "Дима Билан",
    url: "https://str.pcradio.ru/Dima_Bilan-hi",
  },
  {
    name: "Диполь FM",
    url: "https://str.pcradio.ru/dipol_fm_main-hi",
  },
  {
    name: "Диско 80-х",
    url: "https://str.pcradio.ru/e_80-hi",
  },
  {
    name: "Дискотека 90х",
    url: "https://str.pcradio.ru/diskoteka90_ucoz-hi",
  },
  {
    name: "Дискотека Авария",
    url: "https://str.pcradio.ru/Diskoteka_Avaria-hi",
  },
  {
    name: "Дискотека в стиле Руки вверх!",
    url: "https://str.pcradio.ru/Diskoteka_v_stile_ruki_v_verh-hi",
  },
  {
    name: "Дмитрий Маликов",
    url: "https://str.pcradio.ru/dmitry_malikov-hi",
  },
  {
    name: "Дон-ТР",
    url: "https://str.pcradio.ru/dontr_ru-hi",
  },
  {
    name: "Дорожное",
    url: "https://str.pcradio.ru/dorozhnoe-hi",
  },
  {
    name: "Дорожное (Омск)",
    url: "https://str.pcradio.ru/dorozhnoe_omsk-hi",
  },
  {
    name: "Дорожное (Оренбург)",
    url: "https://str.pcradio.ru/dorozhnoe_oren-hi",
  },
  {
    name: "Дорожное - Ностальгия",
    url: "https://str.pcradio.ru/dorozhnoe_nostalgia-hi",
  },
  {
    name: "Дорожное - Рок-клуб",
    url: "https://str.pcradio.ru/dorozhnoe_rockclub-hi",
  },
  {
    name: "Дорожное - Танцы по-русски",
    url: "https://str.pcradio.ru/dorozhnoe_rudance-hi",
  },
  {
    name: "Друга Ріка",
    url: "https://str.pcradio.ru/druga_rika-hi",
  },
  {
    name: "Другая Астрахань",
    url: "https://str.pcradio.ru/astrdr_com-hi",
  },
  {
    name: "Дуже радіо 104.3",
    url: "https://str.pcradio.ru/duzhe_fm-hi",
  },
  {
    name: "Душа Кавказа",
    url: "https://str.pcradio.ru/dusha_kavkaza-hi",
  },
  {
    name: "7 FM",
    url: "https://str.pcradio.ru/dushevnoeradio_by-hi",
  },
  {
    name: "Дэн Браун",
    url: "https://str.pcradio.ru/dan_brown-hi",
  },
  {
    name: "Дюна",
    url: "https://str.pcradio.ru/Djuna-hi",
  },
  {
    name: "Е! UA Radio",
    url: "https://str.pcradio.ru/eradio_ua-hi",
  },
  {
    name: "Европа (Волгоград)",
    url: "https://str.pcradio.ru/evropa_volgograd-hi",
  },
  {
    name: "Европа (Кемерово)",
    url: "https://str.pcradio.ru/evropa_kemerovo-hi",
  },
  {
    name: "Европа (Москва)",
    url: "https://str.pcradio.ru/europa_plus-hi",
  },
  {
    name: "Европа (Нижний Новгород)",
    url: "https://str.pcradio.ru/evropa_nnov-hi",
  },
  {
    name: "Европа (Омск)",
    url: "https://str.pcradio.ru/evropa_omsk-hi",
  },
  {
    name: "Европа (Самара)",
    url: "https://str.pcradio.ru/evropa_samara-hi",
  },
  {
    name: "Европа (СПб)",
    url: "https://str.pcradio.ru/evropa_spb-hi",
  },
  {
    name: "Европа Light",
    url: "https://str.pcradio.ru/evropa_light-hi",
  },
  {
    name: "Европа New",
    url: "https://str.pcradio.ru/evropa_new-hi",
  },
  {
    name: "Европа ResiDance",
    url: "https://str.pcradio.ru/evropa_residance-hi",
  },
  {
    name: "Европа RnB",
    url: "https://str.pcradio.ru/evropa_rnb-hi",
  },
  {
    name: "Европа Top40",
    url: "https://str.pcradio.ru/evropa_top40-hi",
  },
  {
    name: "Европа Казахстан",
    url: "https://str.pcradio.ru/evropa_kazakhstan-hi",
  },
  {
    name: "Европа Плюс Киев 107.0 FM",
    url: "https://str.pcradio.ru/europa_fm-hi",
  },
  {
    name: "ЕкоРадіо",
    url: "https://str.pcradio.ru/ekoradio_com_ua-hi",
  },
  {
    name: "Елена Ваенга",
    url: "https://str.pcradio.ru/Elena_Vaenga-hi",
  },
  {
    name: "Емігрантське радіо",
    url: "https://str.pcradio.ru/emradio_com_ua-hi",
  },
  {
    name: "Жека",
    url: "https://str.pcradio.ru/zheka-hi",
  },
  {
    name: "Железо FM 99.0",
    url: "https://str.pcradio.ru/fefm_ru-hi",
  },
  {
    name: "Женя Белоусов",
    url: "https://str.pcradio.ru/Zhenja_Belousov-hi",
  },
  {
    name: "Житомирська Хвиля",
    url: "https://str.pcradio.ru/zhyto_hvyl-hi",
  },
  {
    name: "Жулдыз FM",
    url: "https://str.pcradio.ru/zhuldyz_fm-hi",
  },
  {
    name: "5 FM",
    url: "https://str.pcradio.ru/zaoblakamiru-hi",
  },
  {
    name: "За облаками Relax",
    url: "https://str.pcradio.ru/zaoblakami_relax-hi",
  },
  {
    name: "Зайцев FM - Club",
    url: "https://str.pcradio.ru/electro_zaycev_fm-hi",
  },
  {
    name: "Зайцев FM - New Rock",
    url: "https://str.pcradio.ru/newrock_zaycev_fm-hi",
  },
  {
    name: "Зайцев FM - Relax",
    url: "https://str.pcradio.ru/relax_zaycev_fm-hi",
  },
  {
    name: "Зайцев FM - RnB",
    url: "https://str.pcradio.ru/rnb_zaycev_fm-hi",
  },
  {
    name: "Зайцев FM - Rus",
    url: "https://str.pcradio.ru/rus_zaycev_fm-hi",
  },
  {
    name: "Зайцев FM - Диско",
    url: "https://str.pcradio.ru/disco_zaycev_fm-hi",
  },
  {
    name: "Зайцев FM - Поп",
    url: "https://str.pcradio.ru/pop_zaycev_fm-hi",
  },
  {
    name: "Зайцев FM - Шансон",
    url: "https://str.pcradio.ru/zaycev_fm_shanson-hi",
  },
  {
    name: "Закарпатье",
    url: "https://str.pcradio.ru/zakarpattya_fm-hi",
  },
  {
    name: "Западный полюс",
    url: "https://str.pcradio.ru/zapadnyj_poljus-hi",
  },
  {
    name: "Зара",
    url: "https://str.pcradio.ru/Zara-hi",
  },
  {
    name: "Застольные по-новому",
    url: "https://str.pcradio.ru/Narodnie-hi",
  },
  {
    name: "Звери",
    url: "https://str.pcradio.ru/Zveri-hi",
  },
  {
    name: "Звуки Моря",
    url: "https://str.pcradio.ru/sea_song-hi",
  },
  {
    name: "Звуки природы - Nature",
    url: "https://str.pcradio.ru/Priroda-hi",
  },
  {
    name: "Здоровый сон",
    url: "https://str.pcradio.ru/healthy_sleep-hi",
  },
  {
    name: "Земля plus Club",
    url: "https://str.pcradio.ru/earthplus_club-hi",
  },
  {
    name: "Земфира",
    url: "https://str.pcradio.ru/Zemfira-hi",
  },
  {
    name: "Зенит",
    url: "https://str.pcradio.ru/zenit_sp-hi",
  },
  {
    name: "Золотой век",
    url: "https://str.pcradio.ru/zolotoy_setmedia-hi",
  },
  {
    name: "Иван Купала",
    url: "https://str.pcradio.ru/Ivan_Kupala-hi",
  },
  {
    name: "Иван Кучин",
    url: "https://str.pcradio.ru/Ivan_Kuchin-hi",
  },
  {
    name: "Иваново FM",
    url: "https://str.pcradio.ru/ivanovo_1067-hi",
  },
  {
    name: "Иванушки International",
    url: "https://str.pcradio.ru/Ivanushki_International-hi",
  },
  {
    name: "Игорь Крутой",
    url: "https://str.pcradio.ru/igor_krutoy-hi",
  },
  {
    name: "Игорь Николаев",
    url: "https://str.pcradio.ru/Igor_Nikolaev-hi",
  },
  {
    name: "Игорь Тальков",
    url: "https://str.pcradio.ru/igor_talkov-hi",
  },
  {
    name: "Игра слов",
    url: "https://str.pcradio.ru/Igra_Slov-hi",
  },
  {
    name: "Иезекииль 25:17",
    url: "https://str.pcradio.ru/twenty_five_seventeen-hi",
  },
  {
    name: "Импульс FM",
    url: "https://str.pcradio.ru/impuls_ru-hi",
  },
  {
    name: "Инструментал ФМ",
    url: "https://str.pcradio.ru/Instrumental_fm-hi",
  },
  {
    name: "9 FM (Челябинск)",
    url: "https://str.pcradio.ru/intervolna_che-hi",
  },
  {
    name: "Интерволна Next",
    url: "https://str.pcradio.ru/Intervolna_che_next-hi",
  },
  {
    name: "Интерра FM",
    url: "https://str.pcradio.ru/interra_fm-hi",
  },
  {
    name: "Инфинити",
    url: "https://str.pcradio.ru/Infiniti-hi",
  },
  {
    name: "Информатор FM",
    url: "https://str.pcradio.ru/informator_fm-hi",
  },
  {
    name: "Ирина Круг",
    url: "https://str.pcradio.ru/irina_krug-hi",
  },
  {
    name: "Искатель",
    url: "https://str.pcradio.ru/iskatel-hi",
  },
  {
    name: "Кабриолет",
    url: "https://str.pcradio.ru/Kabriolet-hi",
  },
  {
    name: "Кабриолет",
    url: "https://str.pcradio.ru/kabriolet_setmedia-hi",
  },
  {
    name: "Казак FM",
    url: "https://str.pcradio.ru/kazak_fm-hi",
  },
  {
    name: "Казахское радио",
    url: "https://str.pcradio.ru/kazradio_kz-hi",
  },
  {
    name: "Казки (Kazka Radio)",
    url: "https://str.pcradio.ru/kazky_ua-hi",
  },
  {
    name: "Кай Метов",
    url: "https://str.pcradio.ru/kay_metov-hi",
  },
  {
    name: "Калинов Мост",
    url: "https://str.pcradio.ru/Kalinov_most-hi",
  },
  {
    name: "Калуш FM 107.4",
    url: "https://str.pcradio.ru/kalush_1074-hi",
  },
  {
    name: "Кальян FM",
    url: "https://str.pcradio.ru/kalyan_fm-hi",
  },
  {
    name: "Канитель",
    url: "https://str.pcradio.ru/kanitelfm_ru-hi",
  },
  {
    name: "Кар-мэн (Car-Man)",
    url: "https://str.pcradio.ru/car_man-hi",
  },
  {
    name: "Карибу-Арт",
    url: "https://str.pcradio.ru/karibu_art-hi",
  },
  {
    name: "Карнавал FM 92.8",
    url: "https://str.pcradio.ru/carnavalfmru-hi",
  },
  {
    name: "Каста",
    url: "https://str.pcradio.ru/Kasta-hi",
  },
  {
    name: "Катя Огонёк 18+",
    url: "https://str.pcradio.ru/katya_ogonek-hi",
  },
  {
    name: "Кекс (Москва)",
    url: "https://str.pcradio.ru/keks_moscow-hi",
  },
  {
    name: "Кинозал.ТВ Радио",
    url: "https://str.pcradio.ru/kinozal_tv-hi",
  },
  {
    name: "Киномузыка",
    url: "https://str.pcradio.ru/Kino_music-hi",
  },
  {
    name: "Кипелов",
    url: "https://str.pcradio.ru/kipelov-hi",
  },
  {
    name: "Классное радио",
    url: "https://str.pcradio.ru/klass_ua-hi",
  },
  {
    name: "Клетка",
    url: "https://str.pcradio.ru/kletka_verhova-hi",
  },
  {
    name: "Комета",
    url: "https://str.pcradio.ru/kometa_radio-hi",
  },
  {
    name: "Комиссар",
    url: "https://str.pcradio.ru/komissar-hi",
  },
  {
    name: "Коммерсантъ FM",
    url: "https://str.pcradio.ru/kommersant_ru-hi",
  },
  {
    name: "Коммерсантъ FM (Нижний Новгород)",
    url: "https://str.pcradio.ru/kommersant_nn-hi",
  },
  {
    name: "Компот FM",
    url: "https://str.pcradio.ru/kompot_fm-hi",
  },
  {
    name: "Комсомольская правда",
    url: "https://str.pcradio.ru/kp_mscow-hi",
  },
  {
    name: "Комсомольская Правда Красноярск",
    url: "https://str.pcradio.ru/kpradio_kryar-hi",
  },
  {
    name: "Комсомольская правда Новосибирск",
    url: "https://str.pcradio.ru/kp_nsk-hi",
  },
  {
    name: "Комсомольская правда Санкт-Петербург",
    url: "https://str.pcradio.ru/kp_spb-hi",
  },
  {
    name: "Комсомольская правда Ставрополь",
    url: "https://str.pcradio.ru/kpradio_stavropol-hi",
  },
  {
    name: "Комсомольская Правда Челябинск",
    url: "https://str.pcradio.ru/chel_kp_ru-hi",
  },
  {
    name: "Континенталь",
    url: "https://str.pcradio.ru/radiocon_ru-hi",
  },
  {
    name: "Король и Шут",
    url: "https://str.pcradio.ru/Korol_i_Shut-hi",
  },
  {
    name: "Коррозия металла",
    url: "https://str.pcradio.ru/korrozia_metalla-hi",
  },
  {
    name: "Космический Шум",
    url: "https://str.pcradio.ru/cosmic_noise-hi",
  },
  {
    name: "Краски",
    url: "https://str.pcradio.ru/Kraski-hi",
  },
  {
    name: "Красная Армия",
    url: "https://str.pcradio.ru/redarmy_fm-hi",
  },
  {
    name: "Красная плесень 18+",
    url: "https://str.pcradio.ru/Krasnaja_plesen-hi",
  },
  {
    name: "Красноярск Главный FM 102.8",
    url: "https://str.pcradio.ru/krasno_glavny-hi",
  },
  {
    name: "Країна ФМ",
    url: "https://str.pcradio.ru/krainafm_comua-hi",
  },
  {
    name: "Крематорий",
    url: "https://str.pcradio.ru/krematoriy-hi",
  },
  {
    name: "КРОК радіо 102.2 FM",
    url: "https://str.pcradio.ru/krokradio_zt-hi",
  },
  {
    name: "Крым Точка",
    url: "https://str.pcradio.ru/krym_tochka-hi",
  },
  {
    name: "Кузбасс FM",
    url: "https://str.pcradio.ru/kuzbass_fm-hi",
  },
  {
    name: "Кукрыниксы",
    url: "https://str.pcradio.ru/Kukryniksy-hi",
  },
  {
    name: "Культура - Беларускае радыё",
    url: "https://str.pcradio.ru/culture_by-hi",
  },
  {
    name: "Кунел",
    url: "https://str.pcradio.ru/kunelradio_ru-hi",
  },
  {
    name: "Курортное радио Крыма (Евпатория)",
    url: "https://str.pcradio.ru/avtoradio_evpatoria-hi",
  },
  {
    name: "7 FM",
    url: "https://str.pcradio.ru/kurs_radio-hi",
  },
  {
    name: "Кухня",
    url: "https://str.pcradio.ru/Kuhnja-hi",
  },
  {
    name: "Кыргызстан Обондору FM 106.5",
    url: "https://str.pcradio.ru/obondorukg-hi",
  },
  {
    name: "Лада FM (Ладыжин)",
    url: "https://str.pcradio.ru/lada_fm-hi",
  },
  {
    name: "Лариса Черникова",
    url: "https://str.pcradio.ru/Larisa_Chernikova-hi",
  },
  {
    name: "Ласковый май",
    url: "https://str.pcradio.ru/Laskovyj_maj-hi",
  },
  {
    name: "Латино",
    url: "https://str.pcradio.ru/Latino-hi",
  },
  {
    name: "Легенды FM",
    url: "https://str.pcradio.ru/legendy_by-hi",
  },
  {
    name: "Легкие Люди",
    url: "https://str.pcradio.ru/legkieludi_ru-hi",
  },
  {
    name: "Лезги Радио",
    url: "https://str.pcradio.ru/lezgi_radio-hi",
  },
  {
    name: "Ленинград 18+",
    url: "https://str.pcradio.ru/Leningrad-hi",
  },
  {
    name: "Леонид Агутин",
    url: "https://str.pcradio.ru/Leonid_Agutin-hi",
  },
  {
    name: "Леонид Федоров",
    url: "https://str.pcradio.ru/leonid_fedorov-hi",
  },
  {
    name: "Леприконсы",
    url: "https://str.pcradio.ru/leprikonsy-hi",
  },
  {
    name: "Лесоповал",
    url: "https://str.pcradio.ru/Lesopoval-hi",
  },
  {
    name: "Линда",
    url: "https://str.pcradio.ru/Linda-hi",
  },
  {
    name: "7",
    url: "https://str.pcradio.ru/lipetsk_907-hi",
  },
  {
    name: "Литературное радио",
    url: "https://str.pcradio.ru/litradio_ru-hi",
  },
  {
    name: "Лихие 90е",
    url: "https://str.pcradio.ru/lihie90epcradio-hi",
  },
  {
    name: "Лицей",
    url: "https://str.pcradio.ru/Licej-hi",
  },
  {
    name: "Лолита",
    url: "https://str.pcradio.ru/Lolita-hi",
  },
  {
    name: "Лоре",
    url: "https://str.pcradio.ru/lore_asha-hi",
  },
  {
    name: "Львовская Волна",
    url: "https://str.pcradio.ru/wrcomua-hi",
  },
  {
    name: "Люба FM",
    url: "https://str.pcradio.ru/lubafmpcradio-hi",
  },
  {
    name: "Любимый город",
    url: "https://str.pcradio.ru/lyubimy_gorod-hi",
  },
  {
    name: "Любовь Успенская",
    url: "https://str.pcradio.ru/Ljubov_Uspenskaja-hi",
  },
  {
    name: "Любэ",
    url: "https://str.pcradio.ru/Lyube-hi",
  },
  {
    name: "Люкс ФМ",
    url: "https://str.pcradio.ru/luxfm_ua-hi",
  },
  {
    name: "Люкс ФМ 104.7 (Львов)",
    url: "https://str.pcradio.ru/luxfm_lviv-hi",
  },
  {
    name: "Ляпис Трубецкой",
    url: "https://str.pcradio.ru/Lyapis_Trubickoy-hi",
  },
  {
    name: "Лёгкое Радио",
    url: "https://str.pcradio.ru/legkoe_radio-hi",
  },
  {
    name: "Майк Науменко (Зоопарк)",
    url: "https://str.pcradio.ru/zoopark-hi",
  },
  {
    name: "МакSим",
    url: "https://str.pcradio.ru/MakSim-hi",
  },
  {
    name: "Макс FM",
    url: "https://str.pcradio.ru/max_fm_ru-hi",
  },
  {
    name: "Максим Леонидов",
    url: "https://str.pcradio.ru/maxim_leonidov-hi",
  },
  {
    name: "Максим Фадеев",
    url: "https://str.pcradio.ru/Maks_Fadeev-hi",
  },
  {
    name: "Максимум (Киев)",
    url: "https://str.pcradio.ru/maximum_fm_ua-hi",
  },
  {
    name: "МанифестЪ",
    url: "https://str.pcradio.ru/manifest_vk-hi",
  },
  {
    name: "Мантра",
    url: "https://str.pcradio.ru/radiomantra_ru-hi",
  },
  {
    name: "Марал Радиосу",
    url: "https://str.pcradio.ru/maralfm_kg-hi",
  },
  {
    name: "Мария FM (Киров)",
    url: "https://str.pcradio.ru/mariafm_kirov-hi",
  },
  {
    name: "Маруся FM",
    url: "https://str.pcradio.ru/marusya_fm-hi",
  },
  {
    name: "Матрешка",
    url: "https://str.pcradio.ru/matryoshka_fm-hi",
  },
  {
    name: "Машенька",
    url: "https://str.pcradio.ru/mashenka-hi",
  },
  {
    name: "Машина времени",
    url: "https://str.pcradio.ru/Mashina_Vremeni-hi",
  },
  {
    name: "Маяк",
    url: "https://str.pcradio.ru/radiomayak_ru-hi",
  },
  {
    name: "Маяк (Оренбург)",
    url: "https://str.pcradio.ru/radiomayak_oren-hi",
  },
  {
    name: "Мега Радио",
    url: "https://str.pcradio.ru/megaradio_pro-hi",
  },
  {
    name: "Мейдан FM",
    url: "https://str.pcradio.ru/meydan_fm-hi",
  },
  {
    name: "Мелодии века",
    url: "https://str.pcradio.ru/melodii_veka-hi",
  },
  {
    name: "Мелодия-Воронеж",
    url: "https://str.pcradio.ru/radiomelody_ru-hi",
  },
  {
    name: "Мелодія FM (Киев)",
    url: "https://str.pcradio.ru/radiomelodia_ua-hi",
  },
  {
    name: "Мелодія FM - Disco",
    url: "https://str.pcradio.ru/melodia_disco-hi",
  },
  {
    name: "Мелодія FM - Italiano",
    url: "https://str.pcradio.ru/melodia_italian-hi",
  },
  {
    name: "Мелодія FM - Romantic",
    url: "https://str.pcradio.ru/melodia_romantic-hi",
  },
  {
    name: "Мельница",
    url: "https://str.pcradio.ru/melnitsa-hi",
  },
  {
    name: "4 (Костомукша)",
    url: "https://str.pcradio.ru/mestnoe_1004-hi",
  },
  {
    name: "Микс (Луга)",
    url: "https://str.pcradio.ru/luga_rf-hi",
  },
  {
    name: "Милицейская Волна",
    url: "https://str.pcradio.ru/radiomv_ru-hi",
  },
  {
    name: "Минск",
    url: "https://str.pcradio.ru/radiominsk_by-hi",
  },
  {
    name: "Мир (Минск)",
    url: "https://str.pcradio.ru/mir_minsk-hi",
  },
  {
    name: "Мир Белогорья",
    url: "https://str.pcradio.ru/mir_belogorya-hi",
  },
  {
    name: "Мир Шансона",
    url: "https://str.pcradio.ru/mir_shansona-hi",
  },
  {
    name: "Мираж",
    url: "https://str.pcradio.ru/Mirazh-hi",
  },
  {
    name: "Михаил Боярский",
    url: "https://str.pcradio.ru/Mihail_Bojarskij-hi",
  },
  {
    name: "Михаил Круг",
    url: "https://str.pcradio.ru/Michail_Krug-hi",
  },
  {
    name: "Михаил Шуфутинский",
    url: "https://str.pcradio.ru/Michail_Shifutinsky-hi",
  },
  {
    name: "Многоточие 18+",
    url: "https://str.pcradio.ru/Mnogotochie-hi",
  },
  {
    name: "Модель для сборки 1 - MDS станция",
    url: "https://str.pcradio.ru/mdsst_ru_1-hi",
  },
  {
    name: "Модель для сборки 2 - MDS станция",
    url: "https://str.pcradio.ru/mdsst_ru_2-hi",
  },
  {
    name: "Модель для сборки 3 - MDS станция",
    url: "https://str.pcradio.ru/mdsst_ru_3-hi",
  },
  {
    name: "Модное Радио",
    url: "https://str.pcradio.ru/modnoeradio_ru-hi",
  },
  {
    name: "Монте-Карло (Москва)",
    url: "https://str.pcradio.ru/montecarlo_moscow-hi",
  },
  {
    name: "Монте-Карло (Санкт-Петербург)",
    url: "https://str.pcradio.ru/montecarlo_spb-hi",
  },
  {
    name: "Монте-Карло - Bossa Nova",
    url: "https://str.pcradio.ru/montecarlo_bossa-hi",
  },
  {
    name: "Монте-Карло - France",
    url: "https://str.pcradio.ru/montecarlo_france-hi",
  },
  {
    name: "Монте-Карло - Nights",
    url: "https://str.pcradio.ru/montecarlo_nights-hi",
  },
  {
    name: "Монте-Карло - Sweet",
    url: "https://str.pcradio.ru/montecarlo_sweet-hi",
  },
  {
    name: "Монте-Карло - Золотая коллекция",
    url: "https://str.pcradio.ru/montecarlo_gold-hi",
  },
  {
    name: "Монте-Карло - Музыка без слов",
    url: "https://str.pcradio.ru/montecarlo_instrumental-hi",
  },
  {
    name: "Монте-Карло - Песни о любви",
    url: "https://str.pcradio.ru/montecarlo_love-hi",
  },
  {
    name: "Моральный кодекс",
    url: "https://str.pcradio.ru/Moralniy_Kodeks-hi",
  },
  {
    name: "Море",
    url: "https://str.pcradio.ru/more_simferopol-hi",
  },
  {
    name: "0",
    url: "https://str.pcradio.ru/moskva920-hi",
  },
  {
    name: "1 FM",
    url: "https://str.pcradio.ru/moya_udmurt-hi",
  },
  {
    name: "Музком",
    url: "https://str.pcradio.ru/muzkom_ru-hi",
  },
  {
    name: "Музыка для массажа",
    url: "https://str.pcradio.ru/massage_music-hi",
  },
  {
    name: "Мульти-Пульти",
    url: "https://str.pcradio.ru/Kinder-hi",
  },
  {
    name: "Мумий Тролль",
    url: "https://str.pcradio.ru/Mumyi_Trol-hi",
  },
  {
    name: "Мурзилки Интернешнл",
    url: "https://str.pcradio.ru/Murzilki_International-hi",
  },
  {
    name: "Муслим Магомаев",
    url: "https://str.pcradio.ru/Muslim_Magomaev-hi",
  },
  {
    name: "На хвилі Корсуня (Рідне Радіо)",
    url: "https://str.pcradio.ru/nahvyli_korsun-hi",
  },
  {
    name: "На-На",
    url: "https://str.pcradio.ru/na_na-hi",
  },
  {
    name: "Надежда Кадышева",
    url: "https://str.pcradio.ru/Nadezhda_Kadysheva-hi",
  },
  {
    name: "НАИВ",
    url: "https://str.pcradio.ru/naiv-hi",
  },
  {
    name: "Найк Борзов 18+",
    url: "https://str.pcradio.ru/nayk_borzov-hi",
  },
  {
    name: "Народное радио",
    url: "https://str.pcradio.ru/narodnoeradio_ee-hi",
  },
  {
    name: "5 FM",
    url: "https://str.pcradio.ru/narodnoe_radio_1025-hi",
  },
  {
    name: "Народное Славянское радио",
    url: "https://str.pcradio.ru/slavmir_org-hi",
  },
  {
    name: "Натали",
    url: "https://str.pcradio.ru/natali-hi",
  },
  {
    name: "Наташа Королева",
    url: "https://str.pcradio.ru/natasha_koroleva-hi",
  },
  {
    name: "Наутилус Помпилиус",
    url: "https://str.pcradio.ru/Nautilus-hi",
  },
  {
    name: "Наше Радио (Киев)",
    url: "https://str.pcradio.ru/nashe_ua-hi",
  },
  {
    name: "Наше радио (Москва)",
    url: "https://str.pcradio.ru/nashe_moscow-hi",
  },
  {
    name: "Наше радио (Пермь)",
    url: "https://str.pcradio.ru/nashe_perm-hi",
  },
  {
    name: "Наше радио (СПб)",
    url: "https://str.pcradio.ru/nashe_spb-hi",
  },
  {
    name: "Наше Радио - Классик рок",
    url: "https://str.pcradio.ru/nashe_classic-hi",
  },
  {
    name: "Наше Радио - Панки хой!",
    url: "https://str.pcradio.ru/nashe_punks-hi",
  },
  {
    name: "Наше Радио - Щас спою",
    url: "https://str.pcradio.ru/nashe_songs-hi",
  },
  {
    name: "Наше радио 2.0",
    url: "https://str.pcradio.ru/nashe20-hi",
  },
  {
    name: "Нашествие",
    url: "https://str.pcradio.ru/nashestvie_ru-hi",
  },
  {
    name: "Незалежність",
    url: "https://str.pcradio.ru/nezalezhnist-hi",
  },
  {
    name: "Неслучайное Радио",
    url: "https://str.pcradio.ru/nes_rock_ru-hi",
  },
  {
    name: "Неформатное Радио",
    url: "https://str.pcradio.ru/neformatnoe_radio-hi",
  },
  {
    name: "Ника FM",
    url: "https://str.pcradio.ru/nika_fm-hi",
  },
  {
    name: "Никколо Паганини",
    url: "https://str.pcradio.ru/Paganini-hi",
  },
  {
    name: "Николай Басков",
    url: "https://str.pcradio.ru/Nikolaj_Baskov-hi",
  },
  {
    name: "Новая жизнь",
    url: "https://str.pcradio.ru/new_life-hi",
  },
  {
    name: "Новое (Вильнюс)",
    url: "https://str.pcradio.ru/russkoe_litva-hi",
  },
  {
    name: "Новое Вещание (Liquid Flash)",
    url: "https://str.pcradio.ru/new_veshanie-hi",
  },
  {
    name: "Новое Радио (Минск)",
    url: "https://str.pcradio.ru/novoeradio_by-hi",
  },
  {
    name: "Новое Радио (Молдавия)",
    url: "https://str.pcradio.ru/novoe_md-hi",
  },
  {
    name: "Новое Радио (Санкт-Петербург)",
    url: "https://str.pcradio.ru/novoe_spb-hi",
  },
  {
    name: "Новое Радио - Top100",
    url: "https://str.pcradio.ru/novoeradio_top-hi",
  },
  {
    name: "4",
    url: "https://str.pcradio.ru/novoe_radio98_4-hi",
  },
  {
    name: "Новый день",
    url: "https://str.pcradio.ru/novy_1019-hi",
  },
  {
    name: "Ногу свело!",
    url: "https://str.pcradio.ru/Nogu_Svelo-hi",
  },
  {
    name: "Нож для фрау Мюллер",
    url: "https://str.pcradio.ru/Noj_Frau_Muller-hi",
  },
  {
    name: "Норд FM",
    url: "https://str.pcradio.ru/nordfm_ru-hi",
  },
  {
    name: "Нэнси",
    url: "https://str.pcradio.ru/Njensi-hi",
  },
  {
    name: "Обозреватель - Лирика шансона",
    url: "https://str.pcradio.ru/obozrevatel_lyric_shans-hi",
  },
  {
    name: "Обозреватель - Прикольные песни 18+",
    url: "https://str.pcradio.ru/obozrevatel_prikolnye-hi",
  },
  {
    name: "Обозреватель - Русский рэп 18+",
    url: "https://str.pcradio.ru/obozrevatel_rusrap-hi",
  },
  {
    name: "Обозреватель - Шансон",
    url: "https://str.pcradio.ru/obozrevatel_shanson-hi",
  },
  {
    name: "Обозреватель - Эйсид джаз",
    url: "https://str.pcradio.ru/obozrevatel_acidjazz-hi",
  },
  {
    name: "Образ",
    url: "https://str.pcradio.ru/obraz_nn-hi",
  },
  {
    name: "Общественное радио Армении",
    url: "https://str.pcradio.ru/armradio_am-hi",
  },
  {
    name: "0",
    url: "https://str.pcradio.ru/odessa_mama-hi",
  },
  {
    name: "Океан Ельзи",
    url: "https://str.pcradio.ru/Okean_Elzy-hi",
  },
  {
    name: "Олег Газманов",
    url: "https://str.pcradio.ru/oleg_gazmanov-hi",
  },
  {
    name: "Олег Митяев",
    url: "https://str.pcradio.ru/oleg_mityaev-hi",
  },
  {
    name: "Ольга Арефьева (Ковчег)",
    url: "https://str.pcradio.ru/arefieva_kovcheg-hi",
  },
  {
    name: "Орену",
    url: "https://str.pcradio.ru/orenu_radio-hi",
  },
  {
    name: "Орфей",
    url: "https://str.pcradio.ru/orfey-hi",
  },
  {
    name: "Отличное Радио",
    url: "https://str.pcradio.ru/oneex_ru-hi",
  },
  {
    name: "Паустовский - Повесть о жизни",
    url: "https://str.pcradio.ru/paustovsky_povest_zhizn-hi",
  },
  {
    name: "Пение птиц",
    url: "https://str.pcradio.ru/song_bird-hi",
  },
  {
    name: "Первое портальное",
    url: "https://str.pcradio.ru/pervoe_portalnoe-hi",
  },
  {
    name: "1",
    url: "https://str.pcradio.ru/pervoe_891-hi",
  },
  {
    name: "Первое сетевое",
    url: "https://str.pcradio.ru/pervoesetevoe_ru-hi",
  },
  {
    name: "Первый канал Белорусского радио",
    url: "https://str.pcradio.ru/radio1_belarus-hi",
  },
  {
    name: "Перец FM",
    url: "https://str.pcradio.ru/perec_fm-hi",
  },
  {
    name: "Петлюра (Ю.Барабаш)",
    url: "https://str.pcradio.ru/petlyura_yuriy_barabash-hi",
  },
  {
    name: "Пи ФМ (Pi FM)",
    url: "https://str.pcradio.ru/pifm_ru-hi",
  },
  {
    name: "Пикник",
    url: "https://str.pcradio.ru/piknik-hi",
  },
  {
    name: "Пилот",
    url: "https://str.pcradio.ru/pilot-hi",
  },
  {
    name: "7 FM",
    url: "https://str.pcradio.ru/pilot_tver-hi",
  },
  {
    name: "Пионер FM (Златоуст)",
    url: "https://str.pcradio.ru/pionerfm_zlatoust-hi",
  },
  {
    name: "Пионер FM - Dance 9.0",
    url: "https://str.pcradio.ru/pionerfm_90-hi",
  },
  {
    name: "Пионер FM - Русская Волна",
    url: "https://str.pcradio.ru/pionerfm_ruwave-hi",
  },
  {
    name: "Питер FM 100.9",
    url: "https://str.pcradio.ru/piterfm_1009-hi",
  },
  {
    name: "Планка",
    url: "https://str.pcradio.ru/Planka-hi",
  },
  {
    name: "Пляж",
    url: "https://str.pcradio.ru/radio_beach_net-hi",
  },
  {
    name: "Подмосковные вечера",
    url: "https://str.pcradio.ru/podmoskov_setmedia-hi",
  },
  {
    name: "Потап и Настя",
    url: "https://str.pcradio.ru/potap_nastya-hi",
  },
  {
    name: "Правда Радио (Гомель)",
    url: "https://str.pcradio.ru/pravda_gomel-hi",
  },
  {
    name: "Правильное радио",
    url: "https://str.pcradio.ru/pravilnoe_radio-hi",
  },
  {
    name: "Православное Радио",
    url: "https://str.pcradio.ru/pravoslavnoe_radio_com-hi",
  },
  {
    name: "Православное радио (СПб)",
    url: "https://str.pcradio.ru/sprusk_spb_ru-hi",
  },
  {
    name: "Прибой",
    url: "https://str.pcradio.ru/priboy_fm-hi",
  },
  {
    name: "Приключения Электроников",
    url: "https://str.pcradio.ru/priklyuchenia_elektronikov-hi",
  },
  {
    name: "Приозерск FM",
    url: "https://str.pcradio.ru/priozersk_fm-hi",
  },
  {
    name: "Пропаганда",
    url: "https://str.pcradio.ru/Propaganda-hi",
  },
  {
    name: "Просто Ради.о - Киев",
    url: "https://str.pcradio.ru/prosto_radio_kiev-hi",
  },
  {
    name: "Просто Ради.о - Одесса",
    url: "https://str.pcradio.ru/prosto_radio_odessa-hi",
  },
  {
    name: "Просто Радио 108.0 (Лиепая)",
    url: "https://str.pcradio.ru/prosto_liepaja-hi",
  },
  {
    name: "8 FM",
    url: "https://str.pcradio.ru/puls_radio1038-hi",
  },
  {
    name: "Пурга",
    url: "https://str.pcradio.ru/radiopurga_org-hi",
  },
  {
    name: "Пятница",
    url: "https://str.pcradio.ru/radiopyatnica_com_ua-hi",
  },
  {
    name: "Радио - 90е",
    url: "https://str.pcradio.ru/eradiopcradio90_2-hi",
  },
  {
    name: "Радио 1 (Первое подмосковное)",
    url: "https://str.pcradio.ru/nashe_podmoscow-hi",
  },
  {
    name: "Радио 1 (Тирасполь)",
    url: "https://str.pcradio.ru/radio1_tiraspol-hi",
  },
  {
    name: "Радио 1 Рок (Radio 1 Rock)",
    url: "https://str.pcradio.ru/rock1_bg-hi",
  },
  {
    name: "Радио 10 (Петрозаводск)",
    url: "https://str.pcradio.ru/radio10_live-hi",
  },
  {
    name: "Радио 107",
    url: "https://str.pcradio.ru/radio107_ru-hi",
  },
  {
    name: "Радио 2 106.3 FM",
    url: "https://str.pcradio.ru/radio2_komsomol-hi",
  },
  {
    name: "Радио 21",
    url: "https://str.pcradio.ru/radio_21_ru-hi",
  },
  {
    name: " Архангельск)",
    url: "https://str.pcradio.ru/r29_arkh-hi",
  },
  {
    name: "1",
    url: "https://str.pcradio.ru/twobytwo-hi",
  },
  {
    name: "Радио 40",
    url: "https://str.pcradio.ru/radio_sorok-hi",
  },
  {
    name: "Радио 53 (Великий Новгород)",
    url: "https://str.pcradio.ru/radio53_vn-hi",
  },
  {
    name: "2 FM)",
    url: "https://str.pcradio.ru/radio54_1062fm-hi",
  },
  {
    name: "Радио 7",
    url: "https://str.pcradio.ru/radio7_ru-hi",
  },
  {
    name: "Радио 7 (Семей)",
    url: "https://str.pcradio.ru/radio7_kz-hi",
  },
  {
    name: "Радио 7 - Наедине с музыкой",
    url: "https://str.pcradio.ru/radio7_alone-hi",
  },
  {
    name: "Радио 7 - Настроение любить",
    url: "https://str.pcradio.ru/radio7_love-hi",
  },
  {
    name: "Радио 7 - Настроение счастья",
    url: "https://str.pcradio.ru/radio7_happy-hi",
  },
  {
    name: "Радио 80s Hits",
    url: "https://str.pcradio.ru/Hits80-hi",
  },
  {
    name: "Радио Best",
    url: "https://str.pcradio.ru/radiobest_media-hi",
  },
  {
    name: "Радио Disney",
    url: "https://str.pcradio.ru/radio_disney_ru-hi",
  },
  {
    name: "Радио Doodle",
    url: "https://str.pcradio.ru/Doodle-hi",
  },
  {
    name: "8 (Нижний Новгород)",
    url: "https://str.pcradio.ru/nrg_nn-hi",
  },
  {
    name: "Радио Jazz 89.1",
    url: "https://str.pcradio.ru/jazz_891-hi",
  },
  {
    name: "Радио Jazz 89.1 - Classic",
    url: "https://str.pcradio.ru/jazz_891_classic-hi",
  },
  {
    name: "Радио Jazz 89.1 - Legends",
    url: "https://str.pcradio.ru/jazz_891_legends-hi",
  },
  {
    name: "Радио Jazz 89.1 - Smooth",
    url: "https://str.pcradio.ru/jazz_891_smooth-hi",
  },
  {
    name: "Радио Jazz 89.1 - Vocals",
    url: "https://str.pcradio.ru/jazz_891_vocals-hi",
  },
  {
    name: "Радио mCm",
    url: "https://str.pcradio.ru/mcm_irkutsk-hi",
  },
  {
    name: "Радио New Age",
    url: "https://str.pcradio.ru/New_Age-hi",
  },
  {
    name: "Радио NS",
    url: "https://str.pcradio.ru/nskz-hi",
  },
  {
    name: "Радио Nu Jazz",
    url: "https://str.pcradio.ru/Nu_Jazz-hi",
  },
  {
    name: "Радио Premium",
    url: "https://str.pcradio.ru/rpfm_ru-hi",
  },
  {
    name: "Радио Record",
    url: "https://str.pcradio.ru/radiorecord_ru-hi",
  },
  {
    name: "Радио Relax (Украина)",
    url: "https://str.pcradio.ru/radiorelax_ua-hi",
  },
  {
    name: "Радио Relax - Relax International",
    url: "https://str.pcradio.ru/radiorelax_ua_nature-hi",
  },
  {
    name: "Радио Relax - Музыка без слов",
    url: "https://str.pcradio.ru/radiorelax_ua_instrumental-hi",
  },
  {
    name: "Радио VBC",
    url: "https://str.pcradio.ru/radiovbc_ru-hi",
  },
  {
    name: "Радио Zefirot",
    url: "https://str.pcradio.ru/zefirot_ru-hi",
  },
  {
    name: "Радио Ангелов",
    url: "https://str.pcradio.ru/angelsradio_ru-hi",
  },
  {
    name: "Радио АСТВ",
    url: "https://str.pcradio.ru/astv_sahalin-hi",
  },
  {
    name: "Радио Беларусь FM",
    url: "https://str.pcradio.ru/belarus_by_fm-hi",
  },
  {
    name: "Радио Беларусь Онлайн",
    url: "https://str.pcradio.ru/belarus_by_online-hi",
  },
  {
    name: "Радио Берег - Евангелие",
    url: "https://str.pcradio.ru/radiobereg_ru-hi",
  },
  {
    name: "Радио Берег - Песни",
    url: "https://str.pcradio.ru/radiobereg_pesni-hi",
  },
  {
    name: "Радио Берег - Повествования",
    url: "https://str.pcradio.ru/radiobereg_besedy-hi",
  },
  {
    name: "Радио Би Эй",
    url: "https://str.pcradio.ru/radio_ba-hi",
  },
  {
    name: "Радио Благо",
    url: "https://str.pcradio.ru/radioblago_ru-hi",
  },
  {
    name: "Радио Благовестие",
    url: "https://str.pcradio.ru/radio_blagovestie-hi",
  },
  {
    name: "Радио Благовещение",
    url: "https://str.pcradio.ru/radioblagoveshchenie_ru-hi",
  },
  {
    name: "Радио Болид 88.0 FM (Bolid)",
    url: "https://str.pcradio.ru/bolid_perm-hi",
  },
  {
    name: "8 FM",
    url: "https://str.pcradio.ru/radiobrest_by-hi",
  },
  {
    name: "Радио Булбул",
    url: "https://str.pcradio.ru/bulbul_kz-hi",
  },
  {
    name: "Радио Ваня (Иваново)",
    url: "https://str.pcradio.ru/radio_vanya-hi",
  },
  {
    name: "Радио Ваня (Москва)",
    url: "https://str.pcradio.ru/vanya_moscow-hi",
  },
  {
    name: "Радио Вера",
    url: "https://str.pcradio.ru/radiovera_ru-hi",
  },
  {
    name: "Радио ВТСУ (VTSU)",
    url: "https://str.pcradio.ru/vtsu_org_ua-hi",
  },
  {
    name: "Радио Вышка",
    url: "https://str.pcradio.ru/vyshka24_ru-hi",
  },
  {
    name: "Радио Германия",
    url: "https://str.pcradio.ru/radiogermanijade-hi",
  },
  {
    name: "Радио Глаголь",
    url: "https://str.pcradio.ru/radioglagol_ru-hi",
  },
  {
    name: "Радио Город (Владикавказ)",
    url: "https://str.pcradio.ru/kavkaz_radio-hi",
  },
  {
    name: "Радио Гродно",
    url: "https://str.pcradio.ru/radio_grodno-hi",
  },
  {
    name: "Радио Дагестан",
    url: "https://str.pcradio.ru/dagestan_005-hi",
  },
  {
    name: "Радио День",
    url: "https://str.pcradio.ru/radioday_fm-hi",
  },
  {
    name: "Радио Диджей",
    url: "https://str.pcradio.ru/DJ-hi",
  },
  {
    name: "Радио для двоих",
    url: "https://str.pcradio.ru/rddfm_ru-hi",
  },
  {
    name: "Радио для друзей",
    url: "https://str.pcradio.ru/radio4d_ru-hi",
  },
  {
    name: "Радио Инмедиа",
    url: "https://str.pcradio.ru/inmedia_site-hi",
  },
  {
    name: "Радио Инструментал",
    url: "https://str.pcradio.ru/Instrumental-hi",
  },
  {
    name: "Радио Кавказ",
    url: "https://str.pcradio.ru/kavkaz_005-hi",
  },
  {
    name: "Радио Канон",
    url: "https://str.pcradio.ru/radio_kanon-hi",
  },
  {
    name: "Радио Карл",
    url: "https://str.pcradio.ru/karl_ru-hi",
  },
  {
    name: "Радио Картина",
    url: "https://str.pcradio.ru/radio_kartina_tv-hi",
  },
  {
    name: "Радио Киев 98 FM",
    url: "https://str.pcradio.ru/radiokiev_98-hi",
  },
  {
    name: "Радио Классик",
    url: "https://str.pcradio.ru/radio_classic-hi",
  },
  {
    name: "Радио КН (Костанай)",
    url: "https://str.pcradio.ru/kn_kostanay-hi",
  },
  {
    name: "Радио Книга",
    url: "https://str.pcradio.ru/radiokniga_com-hi",
  },
  {
    name: "Радио Контур",
    url: "https://str.pcradio.ru/radiokontur_ru-hi",
  },
  {
    name: "Радио Крым",
    url: "https://str.pcradio.ru/crimea_1tv-hi",
  },
  {
    name: "Радио Культура",
    url: "https://str.pcradio.ru/rcult-hi",
  },
  {
    name: "Радио Лайн",
    url: "https://str.pcradio.ru/radioline24_info-hi",
  },
  {
    name: "Радио Линия",
    url: "https://str.pcradio.ru/radio_liniya-hi",
  },
  {
    name: "Радио Лисица",
    url: "https://str.pcradio.ru/lisitsa_myrh-hi",
  },
  {
    name: "Радио Мария",
    url: "https://str.pcradio.ru/radiomaria_ru-hi",
  },
  {
    name: "Радио Мария (Киев)",
    url: "https://str.pcradio.ru/radiomaria_org_ua-hi",
  },
  {
    name: "Радио Мегахит",
    url: "https://str.pcradio.ru/megahit_online-hi",
  },
  {
    name: "Радио Междугородье",
    url: "https://str.pcradio.ru/mgradio_ru-hi",
  },
  {
    name: "Радио Мир",
    url: "https://str.pcradio.ru/radiomir_fm-hi",
  },
  {
    name: "Радио Могилев",
    url: "https://str.pcradio.ru/mogilev_by-hi",
  },
  {
    name: "Радио Мост",
    url: "https://str.pcradio.ru/radiomost-hi",
  },
  {
    name: "Радио Мята",
    url: "https://str.pcradio.ru/myata_asha-hi",
  },
  {
    name: "Радио Надыма",
    url: "https://str.pcradio.ru/nadym_radio-hi",
  },
  {
    name: "Радио Нестандарт",
    url: "https://str.pcradio.ru/radionestandart_ru-hi",
  },
  {
    name: "Радио Новый Завет (совр. перевод)",
    url: "https://str.pcradio.ru/nov_zavet_ruwor-hi",
  },
  {
    name: "Радио Пассаж",
    url: "https://str.pcradio.ru/radio_passazh-hi",
  },
  {
    name: "Радио Петербург",
    url: "https://str.pcradio.ru/radio_peterburg-hi",
  },
  {
    name: "Радио Пилигрим - Библия",
    url: "https://str.pcradio.ru/piligrim_bible-hi",
  },
  {
    name: "Радио Пилигрим - Музыка",
    url: "https://str.pcradio.ru/piligrim_music-hi",
  },
  {
    name: "Радио Пилигрим - Онлайн вещание",
    url: "https://str.pcradio.ru/piligrim_online-hi",
  },
  {
    name: "Радио Прага (Radio Praha)",
    url: "https://str.pcradio.ru/praha_cz-hi",
  },
  {
    name: "Радио Приднестровья (Тирасполь)",
    url: "https://str.pcradio.ru/radio_pridnestr-hi",
  },
  {
    name: "Радио Природа",
    url: "https://str.pcradio.ru/nature_radio-hi",
  },
  {
    name: "Радио Проводач (Provodach)",
    url: "https://str.pcradio.ru/provoda_ch-hi",
  },
  {
    name: "Радио Радио",
    url: "https://str.pcradio.ru/radioradio_ru-hi",
  },
  {
    name: "Радио Рауан 104 FM",
    url: "https://str.pcradio.ru/rauan_104-hi",
  },
  {
    name: "Радио Рация (Радыё Рацыя)",
    url: "https://str.pcradio.ru/radio_racyja-hi",
  },
  {
    name: "Радио Рекорд (Саратов)",
    url: "https://str.pcradio.ru/record_saratov-hi",
  },
  {
    name: "Радио Родных Дорог",
    url: "https://str.pcradio.ru/rodnyh_dorog-hi",
  },
  {
    name: "Радио Рокс (Санкт-Петербург)",
    url: "https://str.pcradio.ru/roks_spb-hi",
  },
  {
    name: "Радио России",
    url: "https://str.pcradio.ru/radiorus_ru-hi",
  },
  {
    name: "Радио России (Иркутск)",
    url: "https://str.pcradio.ru/radiorus_irk-hi",
  },
  {
    name: "Радио России (Нижний Новгород)",
    url: "https://str.pcradio.ru/russiafm_nn-hi",
  },
  {
    name: "Радио России (Оренбург)",
    url: "https://str.pcradio.ru/radiorus_oren-hi",
  },
  {
    name: "Радио России (Санкт Петербург)",
    url: "https://str.pcradio.ru/gtrk_spb-hi",
  },
  {
    name: "Радио России (Тамбов)",
    url: "https://str.pcradio.ru/gtrk_tambov-hi",
  },
  {
    name: "Радио России (Хабаровск)",
    url: "https://str.pcradio.ru/gtrk_habar-hi",
  },
  {
    name: "Радио России (Чита)",
    url: "https://str.pcradio.ru/gtrkchita_rossia-hi",
  },
  {
    name: "Радио России - Южный Урал",
    url: "https://str.pcradio.ru/radiorus_uural-hi",
  },
  {
    name: "Радио России Башкортостан",
    url: "https://str.pcradio.ru/gtrk_bashkor-hi",
  },
  {
    name: "Радио России Урал",
    url: "https://str.pcradio.ru/gtrk_ural-hi",
  },
  {
    name: "Радио Ростова",
    url: "https://str.pcradio.ru/radio_rostova-hi",
  },
  {
    name: "Радио Русь",
    url: "https://str.pcradio.ru/radio_rus-hi",
  },
  {
    name: "Радио Сибирь (Томск)",
    url: "https://str.pcradio.ru/tomsk_radiosibir-hi",
  },
  {
    name: "Радио СССР",
    url: "https://str.pcradio.ru/SSSR-hi",
  },
  {
    name: "Радио Сталинград",
    url: "https://str.pcradio.ru/stalingrad-hi",
  },
  {
    name: "Радио Странствий",
    url: "https://str.pcradio.ru/stranstvy_ru-hi",
  },
  {
    name: "Радио Трасса",
    url: "https://str.pcradio.ru/rtrassa_ru-hi",
  },
  {
    name: "Радио Уфалея",
    url: "https://str.pcradio.ru/radio_ufaleya-hi",
  },
  {
    name: "Радио Фантастики",
    url: "https://str.pcradio.ru/radio_fantastiki-hi",
  },
  {
    name: "Радио ФМ Горный 101.6",
    url: "https://str.pcradio.ru/gorny_1016-hi",
  },
  {
    name: "Радио Хит (Орск)",
    url: "https://str.pcradio.ru/hit_radio_orsk-hi",
  },
  {
    name: "Радио Хиты 90х",
    url: "https://str.pcradio.ru/i_love_90_pcradio-hi",
  },
  {
    name: "Радио Чат Дыхание",
    url: "https://str.pcradio.ru/chat_breathing-hi",
  },
  {
    name: "Радио ШОК",
    url: "https://str.pcradio.ru/radioshockru-hi",
  },
  {
    name: "Радио Эрмитаж",
    url: "https://str.pcradio.ru/radio_hermitage-hi",
  },
  {
    name: "Радио Юность",
    url: "https://str.pcradio.ru/yunost_radio-hi",
  },
  {
    name: "Радио Юность - ЮFM (Москва)",
    url: "https://str.pcradio.ru/ufm_moscow_off-hi",
  },
  {
    name: "Радио Юность-ЮFM",
    url: "https://str.pcradio.ru/yunost_ufm-hi",
  },
  {
    name: "Радио Юрган",
    url: "https://str.pcradio.ru/yurgan_radio-hi",
  },
  {
    name: "Радио-3 (Омск)",
    url: "https://str.pcradio.ru/omsk_3-hi",
  },
  {
    name: "Радио-Витебск",
    url: "https://str.pcradio.ru/vtv_by-hi",
  },
  {
    name: "Радио-Ливны",
    url: "https://str.pcradio.ru/radio_livny-hi",
  },
  {
    name: "Радио-Н (Новочеркасск)",
    url: "https://str.pcradio.ru/nradio_ru-hi",
  },
  {
    name: "Радио-Радио",
    url: "https://str.pcradio.ru/radio_radio-hi",
  },
  {
    name: "Радиогазета Слово",
    url: "https://str.pcradio.ru/radioslovo_ru-hi",
  },
  {
    name: "РадиоГора",
    url: "https://str.pcradio.ru/gora_aldan-hi",
  },
  {
    name: "Радиоканал Мелодия",
    url: "https://str.pcradio.ru/melodia_spb-hi",
  },
  {
    name: "0 FM (Саратов)",
    url: "https://str.pcradio.ru/radiola_saratov-hi",
  },
  {
    name: "2 FM",
    url: "https://str.pcradio.ru/radiola_1062-hi",
  },
  {
    name: "3 FM (Самара)",
    url: "https://str.pcradio.ru/radiola_samara-hi",
  },
  {
    name: "4 (Нижний Новгород)",
    url: "https://str.pcradio.ru/radiola_964-hi",
  },
  {
    name: "Радиус FM",
    url: "https://str.pcradio.ru/radius_fm-hi",
  },
  {
    name: "Радонеж",
    url: "https://str.pcradio.ru/radonezh-hi",
  },
  {
    name: "РадыМузыке",
    url: "https://str.pcradio.ru/rady_muzyke-hi",
  },
  {
    name: "Радыё Relax",
    url: "https://str.pcradio.ru/relax_by-hi",
  },
  {
    name: "Радыё Свабода (Минск)",
    url: "https://str.pcradio.ru/svaboda_org-hi",
  },
  {
    name: "Радіо 10 (Чернівці) 103.2 FM",
    url: "https://str.pcradio.ru/radio10_ua-hi",
  },
  {
    name: "Радіо з Криївки (RzK)",
    url: "https://str.pcradio.ru/z_kryyivki-hi",
  },
  {
    name: "Радіо М",
    url: "https://str.pcradio.ru/radiom_ua-hi",
  },
  {
    name: "Радіо НВ",
    url: "https://str.pcradio.ru/nv_ua-hi",
  },
  {
    name: "Радіо Трек",
    url: "https://str.pcradio.ru/radiotrek_rv-hi",
  },
  {
    name: "Радіо Українська Пісня",
    url: "https://str.pcradio.ru/ukr_pisnya-hi",
  },
  {
    name: "Ранетки",
    url: "https://str.pcradio.ru/Ranetki-hi",
  },
  {
    name: "Рассветное радио",
    url: "https://str.pcradio.ru/rassvetnoe_ru-hi",
  },
  {
    name: "Редкие Рыбы 18+",
    url: "https://str.pcradio.ru/redkie_ryby-hi",
  },
  {
    name: "Ретро FM (Киев)",
    url: "https://str.pcradio.ru/retro_ua-hi",
  },
  {
    name: "Ретро FM (Москва)",
    url: "https://str.pcradio.ru/retrofm_ru-hi",
  },
  {
    name: "Ретро FM (Москва) - 70е",
    url: "https://str.pcradio.ru/retrofm_ru_70s-hi",
  },
  {
    name: "Ретро FM (Москва) - 80е",
    url: "https://str.pcradio.ru/retrofm_ru_80s-hi",
  },
  {
    name: "Ретро FM (Москва) - 90е",
    url: "https://str.pcradio.ru/retrofm_ru_90s-hi",
  },
  {
    name: "Ретро FM (Москва) - Вечеринка Ретро FM",
    url: "https://str.pcradio.ru/retrofm_mos_vech-hi",
  },
  {
    name: "Ретро FM (Москва) - Сан-ремо",
    url: "https://str.pcradio.ru/retrofm_mos_sanremo-hi",
  },
  {
    name: "Ретро FM (Омск)",
    url: "https://str.pcradio.ru/retrofm_omsk-hi",
  },
  {
    name: "Ретро FM (Санкт-Петербург)",
    url: "https://str.pcradio.ru/retrofm_spb-hi",
  },
  {
    name: "5 (Рига)",
    url: "https://str.pcradio.ru/retro_riga-hi",
  },
  {
    name: "Ретро FM Украина - Dance",
    url: "https://str.pcradio.ru/retrofm_ua_dance-hi",
  },
  {
    name: "Ретро FM Украина - Romantic Ballads",
    url: "https://str.pcradio.ru/retrofm_ua_rombal-hi",
  },
  {
    name: "Рефлекс",
    url: "https://str.pcradio.ru/Reflex-hi",
  },
  {
    name: "Рок Легенды",
    url: "https://str.pcradio.ru/Rock_Legend-hi",
  },
  {
    name: "Рок-Острова",
    url: "https://str.pcradio.ru/Rok_Ostrova-hi",
  },
  {
    name: "РОКС (Минск)",
    url: "https://str.pcradio.ru/roks_minsk-hi",
  },
  {
    name: "Роксана Радиосы",
    url: "https://str.pcradio.ru/roksana_radio-hi",
  },
  {
    name: "Роман Трахтенберг 18+",
    url: "https://str.pcradio.ru/Roman_Trakhtenberg-hi",
  },
  {
    name: "Руки Вверх",
    url: "https://str.pcradio.ru/Ruki_Vverh-hi",
  },
  {
    name: "Русская Волна",
    url: "https://str.pcradio.ru/ruvolna-hi",
  },
  {
    name: "Русская реклама",
    url: "https://str.pcradio.ru/rusrek_com-hi",
  },
  {
    name: "Русские Песни",
    url: "https://str.pcradio.ru/rusongsru-hi",
  },
  {
    name: "Русский Берлин",
    url: "https://str.pcradio.ru/russkij_berlin-hi",
  },
  {
    name: "Русский край",
    url: "https://str.pcradio.ru/russky_kray-hi",
  },
  {
    name: "Русский размер",
    url: "https://str.pcradio.ru/Russkij_Razmer-hi",
  },
  {
    name: "Русский Рок",
    url: "https://str.pcradio.ru/Rock-hi",
  },
  {
    name: "Русский рок",
    url: "https://str.pcradio.ru/russkiy_rock-hi",
  },
  {
    name: "Русский Рэп 18+",
    url: "https://str.pcradio.ru/Rap-hi",
  },
  {
    name: "Русское",
    url: "https://str.pcradio.ru/rusradio-hi",
  },
  {
    name: "Русское (Великий Новгород)",
    url: "https://str.pcradio.ru/russkoe_vn-hi",
  },
  {
    name: "Русское (Оренбург)",
    url: "https://str.pcradio.ru/russkoe_oren-hi",
  },
  {
    name: "Русское - Детский канал",
    url: "https://str.pcradio.ru/rusradio_deti-hi",
  },
  {
    name: "Русское - Золотой Граммофон",
    url: "https://str.pcradio.ru/russkoe_zg-hi",
  },
  {
    name: "Русское - Кино",
    url: "https://str.pcradio.ru/russkoe_kino-hi",
  },
  {
    name: "6 (Таллинн)",
    url: "https://str.pcradio.ru/russkoe_estonia-hi",
  },
  {
    name: "Русское FM",
    url: "https://str.pcradio.ru/russkoe_vk-hi",
  },
  {
    name: "Русское Кино",
    url: "https://str.pcradio.ru/russian_cinema-hi",
  },
  {
    name: "Русское Молдова",
    url: "https://str.pcradio.ru/ruradio_md-hi",
  },
  {
    name: "Русское Радио Азия",
    url: "https://str.pcradio.ru/rusradio_asia-hi",
  },
  {
    name: "Русское радио Украина (Киев)",
    url: "https://str.pcradio.ru/rusradio_ua-hi",
  },
  {
    name: "Русское радио Украина - Дискотека",
    url: "https://str.pcradio.ru/rusradio_ua_dance-hi",
  },
  {
    name: "Русское радио Украина - Золотой граммофон",
    url: "https://str.pcradio.ru/rusradio_ua_grammofon-hi",
  },
  {
    name: "Самара-Максимум",
    url: "https://str.pcradio.ru/samara_maksimum_1043-hi",
  },
  {
    name: "Самарское Губернское Радио (Губерния)",
    url: "https://str.pcradio.ru/guberniafm_ru-hi",
  },
  {
    name: "Света",
    url: "https://str.pcradio.ru/Sveta-hi",
  },
  {
    name: "Светлое радио Еммануил",
    url: "https://str.pcradio.ru/svitle_org-hi",
  },
  {
    name: "Свит FM (Світ ФМ)",
    url: "https://str.pcradio.ru/svit_fm-hi",
  },
  {
    name: "Свобода",
    url: "https://str.pcradio.ru/svoboda-hi",
  },
  {
    name: "Свое FM",
    url: "https://str.pcradio.ru/svoe_fm-hi",
  },
  {
    name: "Свое радио",
    url: "https://str.pcradio.ru/svoe_radio-hi",
  },
  {
    name: "Своя Волна",
    url: "https://str.pcradio.ru/sv_narod-hi",
  },
  {
    name: "Севастополь FM",
    url: "https://str.pcradio.ru/sevastopol_fm-hi",
  },
  {
    name: "5",
    url: "https://str.pcradio.ru/sever_fm-hi",
  },
  {
    name: "Секрет",
    url: "https://str.pcradio.ru/sekret-hi",
  },
  {
    name: "Сектор газа 18+",
    url: "https://str.pcradio.ru/Sector_Gaza-hi",
  },
  {
    name: "Сектор Газовой Атаки 18+",
    url: "https://str.pcradio.ru/sector_gazovoy_ataki-hi",
  },
  {
    name: "Сергей Бабкин (5’nizza)",
    url: "https://str.pcradio.ru/babkin_5nizza-hi",
  },
  {
    name: "Сергей Галанин (СерьГа)",
    url: "https://str.pcradio.ru/serga_galanin-hi",
  },
  {
    name: "Сергей Минаев",
    url: "https://str.pcradio.ru/sergey_minaev-hi",
  },
  {
    name: "Сергей Трофимов",
    url: "https://str.pcradio.ru/Sergej_trofimov-hi",
  },
  {
    name: "Серебро",
    url: "https://str.pcradio.ru/Serebro-hi",
  },
  {
    name: "Сити Эдем",
    url: "https://str.pcradio.ru/cityeden_info-hi",
  },
  {
    name: "Сказки для детей",
    url: "https://str.pcradio.ru/Skazki-hi",
  },
  {
    name: "9 FM (Орша)",
    url: "https://str.pcradio.ru/skif_orsha-hi",
  },
  {
    name: "Скрябин",
    url: "https://str.pcradio.ru/skryabin-hi",
  },
  {
    name: "Смысловые галлюцинации",
    url: "https://str.pcradio.ru/smyslovye_galuyc-hi",
  },
  {
    name: "Соликамск FM 100.5",
    url: "https://str.pcradio.ru/solikamsk_fm-hi",
  },
  {
    name: "Соль FM (Соликамск)",
    url: "https://str.pcradio.ru/sol_fm-hi",
  },
  {
    name: "София Ротару",
    url: "https://str.pcradio.ru/sofia_rotaru-hi",
  },
  {
    name: "Сплин",
    url: "https://str.pcradio.ru/Splin-hi",
  },
  {
    name: "Спокойное радио",
    url: "https://str.pcradio.ru/spokoinoeradioru-hi",
  },
  {
    name: "Справедливая Россия",
    url: "https://str.pcradio.ru/spravedlivo-hi",
  },
  {
    name: "Спутник",
    url: "https://str.pcradio.ru/sputnik_ria_ru-hi",
  },
  {
    name: "0 (Уфа)",
    url: "https://str.pcradio.ru/sputnik_ufa-hi",
  },
  {
    name: "Спутник в Крыму",
    url: "https://str.pcradio.ru/transmradio_ru-hi",
  },
  {
    name: "Сталіца",
    url: "https://str.pcradio.ru/radiostalica_by-hi",
  },
  {
    name: "Старое Доброе Радио",
    url: "https://str.pcradio.ru/staroedobroe_ru-hi",
  },
  {
    name: "Старое радио",
    url: "https://str.pcradio.ru/staroe_radio-hi",
  },
  {
    name: "Старое радио - Детское",
    url: "https://str.pcradio.ru/staroe_deti-hi",
  },
  {
    name: "Старое радио - Музыка",
    url: "https://str.pcradio.ru/staroe_music-hi",
  },
  {
    name: "Старт FM 104.5",
    url: "https://str.pcradio.ru/start_saransk-hi",
  },
  {
    name: "7 FM",
    url: "https://str.pcradio.ru/stvradio_ru-hi",
  },
  {
    name: "Стимул",
    url: "https://str.pcradio.ru/stimul_yur-hi",
  },
  {
    name: "Страна FM 102.0 (Санкт-Петербург)",
    url: "https://str.pcradio.ru/strana_spb-hi",
  },
  {
    name: "9",
    url: "https://str.pcradio.ru/strana_fm89_9-hi",
  },
  {
    name: "Стрелки",
    url: "https://str.pcradio.ru/strelki-hi",
  },
  {
    name: "Стрий FM",
    url: "https://str.pcradio.ru/stryi_fm-hi",
  },
  {
    name: "Стругацкие - Аудиоспектакли",
    url: "https://str.pcradio.ru/strugat_audioshows-hi",
  },
  {
    name: "Сябры",
    url: "https://str.pcradio.ru/syabry-hi",
  },
  {
    name: "Сяйво",
    url: "https://str.pcradio.ru/syaivo-hi",
  },
  {
    name: "Такт",
    url: "https://str.pcradio.ru/rradiotakt_com_ua-hi",
  },
  {
    name: "Танок на майдані Конґо (ТНМК)",
    url: "https://str.pcradio.ru/tnmk_tanok_na_maydani-hi",
  },
  {
    name: "Танцевальная Станция",
    url: "https://str.pcradio.ru/tds_my70_ru-hi",
  },
  {
    name: "Танцевальный рай",
    url: "https://str.pcradio.ru/Tancevalnyj_raj-hi",
  },
  {
    name: "Танцы Минус",
    url: "https://str.pcradio.ru/tancy_minus-hi",
  },
  {
    name: "Таня Буланова",
    url: "https://str.pcradio.ru/Bulanova-hi",
  },
  {
    name: "Тараканы!",
    url: "https://str.pcradio.ru/tarakany-hi",
  },
  {
    name: "5 (Казань)",
    url: "https://str.pcradio.ru/tatarradio-hi",
  },
  {
    name: "Тату (t.A.T.u.)",
    url: "https://str.pcradio.ru/Tatu-hi",
  },
  {
    name: "Твое радио (Львов)",
    url: "https://str.pcradio.ru/tvoeradio_com-hi",
  },
  {
    name: "Твой день",
    url: "https://str.pcradio.ru/tvoyden_myrh-hi",
  },
  {
    name: "Твоё радио",
    url: "https://str.pcradio.ru/clubraysl_ru-hi",
  },
  {
    name: "Твоё радио (Лида)",
    url: "https://str.pcradio.ru/tvoe_radio_lida-hi",
  },
  {
    name: "Теос",
    url: "https://str.pcradio.ru/radioteos-hi",
  },
  {
    name: "Теплое Радио",
    url: "https://str.pcradio.ru/teploe_net-hi",
  },
  {
    name: "Технология",
    url: "https://str.pcradio.ru/tehnologia-hi",
  },
  {
    name: "Тимати",
    url: "https://str.pcradio.ru/Timati-hi",
  },
  {
    name: "Типичное FM",
    url: "https://str.pcradio.ru/tipichnoe-hi",
  },
  {
    name: "Топ40",
    url: "https://str.pcradio.ru/Top_40-hi",
  },
  {
    name: "ТрансМировое радио Беларусь (TWR)",
    url: "https://str.pcradio.ru/twr_belarus-hi",
  },
  {
    name: "Трансмит (Вологда)",
    url: "https://str.pcradio.ru/transmit_vologda-hi",
  },
  {
    name: " TWR)",
    url: "https://str.pcradio.ru/twr_ua-hi",
  },
  {
    name: "Узбегим Таронаси",
    url: "https://str.pcradio.ru/ozbegim_taronasi-hi",
  },
  {
    name: "Украинское радио 1 - Перший",
    url: "https://str.pcradio.ru/nrcu_gov_ua1-hi",
  },
  {
    name: "Украинское радио 2 - Промінь",
    url: "https://str.pcradio.ru/nrcu_gov_ua2-hi",
  },
  {
    name: "Украинское радио 3 - Культура",
    url: "https://str.pcradio.ru/nrcu_gov_ua3-hi",
  },
  {
    name: "Украинское радио 4 - ВСРУ",
    url: "https://str.pcradio.ru/nrcu_gov_ua4-hi",
  },
  {
    name: "Унесенные ветром",
    url: "https://str.pcradio.ru/Unesennye_vetrom-hi",
  },
  {
    name: "Упоротая волна",
    url: "https://str.pcradio.ru/uporotaya-hi",
  },
  {
    name: "Фактор-2 18+",
    url: "https://str.pcradio.ru/Faktor_2-hi",
  },
  {
    name: "Феникс FM",
    url: "https://str.pcradio.ru/phoenixfm_ru-hi",
  },
  {
    name: "6 (Полезное радио)",
    url: "https://str.pcradio.ru/feo_fm-hi",
  },
  {
    name: "Филипп Киркоров",
    url: "https://str.pcradio.ru/Filpp_Kirkorov-hi",
  },
  {
    name: "ФМ-на-Дону",
    url: "https://str.pcradio.ru/fm_na_donu-hi",
  },
  {
    name: "Форум",
    url: "https://str.pcradio.ru/Forum-hi",
  },
  {
    name: "Французская музыка",
    url: "https://str.pcradio.ru/France-hi",
  },
  {
    name: "Фристайл",
    url: "https://str.pcradio.ru/Fristajl-hi",
  },
  {
    name: "Х_й Забей 18+",
    url: "https://str.pcradio.ru/Hui_Zabey-hi",
  },
  {
    name: "Хайп FM",
    url: "https://str.pcradio.ru/hypefm_net-hi",
  },
  {
    name: "Хамелеон",
    url: "https://str.pcradio.ru/Hameleon-hi",
  },
  {
    name: "Херсон FM 99.4",
    url: "https://str.pcradio.ru/kherson_fm-hi",
  },
  {
    name: "Хит FM (Златоуст)",
    url: "https://str.pcradio.ru/hitfm_zlatoust-hi",
  },
  {
    name: "Хит FM (Москва)",
    url: "https://str.pcradio.ru/hitfmfeelgood-hi",
  },
  {
    name: "Хит FM (Оренбург)",
    url: "https://str.pcradio.ru/hitfm_oren-hi",
  },
  {
    name: "2 (Сургут)",
    url: "https://str.pcradio.ru/hitfm_surgut-hi",
  },
  {
    name: "Хит FM Украина",
    url: "https://str.pcradio.ru/hitfm_ua-hi",
  },
  {
    name: "Хит FM Украина - Найбільші хіти",
    url: "https://str.pcradio.ru/hitfm_ua_greatest-hi",
  },
  {
    name: "Хит FM Украина - Сучасні хіти",
    url: "https://str.pcradio.ru/hitfm_ua_top-hi",
  },
  {
    name: "Хит FM Украина - Українські хіти",
    url: "https://str.pcradio.ru/hitfm_ua_ukrhits-hi",
  },
  {
    name: "Хит плюс",
    url: "https://str.pcradio.ru/Hit_plus-hi",
  },
  {
    name: "Хит!",
    url: "https://str.pcradio.ru/Pop-hi",
  },
  {
    name: "Хиты 90-х",
    url: "https://str.pcradio.ru/e_90-hi",
  },
  {
    name: "2 FM",
    url: "https://str.pcradio.ru/hity_rossii-hi",
  },
  {
    name: "Хиты шансона",
    url: "https://str.pcradio.ru/shanson_hits-hi",
  },
  {
    name: "Хорошее радио",
    url: "https://str.pcradio.ru/horoshee_fm-hi",
  },
  {
    name: "Христианское радио 123",
    url: "https://str.pcradio.ru/radio123_by-hi",
  },
  {
    name: "Центр FM",
    url: "https://str.pcradio.ru/centerfm_by-hi",
  },
  {
    name: "Чайф",
    url: "https://str.pcradio.ru/Chaif-hi",
  },
  {
    name: "Черный Обелиск",
    url: "https://str.pcradio.ru/cherny_obelisk-hi",
  },
  {
    name: "Чиж и Ко",
    url: "https://str.pcradio.ru/chizh_i_ko-hi",
  },
  {
    name: "Чипльдук",
    url: "https://str.pcradio.ru/chipelduk-hi",
  },
  {
    name: "Шалкар",
    url: "https://str.pcradio.ru/shalkar_kz-hi",
  },
  {
    name: "Шансон (Воронеж)",
    url: "https://str.pcradio.ru/shanson_voronezh-hi",
  },
  {
    name: "Шансон (г. Орск)",
    url: "https://str.pcradio.ru/shanson_orsk-hi",
  },
  {
    name: "Шансон (Москва)",
    url: "https://str.pcradio.ru/radioshanson_fm-hi",
  },
  {
    name: "Шансон (Москва) - Без цензуры",
    url: "https://str.pcradio.ru/radioshanson_fm_uncensored-hi",
  },
  {
    name: "Шансон (Москва) - Романтический",
    url: "https://str.pcradio.ru/radioshanson_fm_romance-hi",
  },
  {
    name: "Шансон (Санкт-Петербург)",
    url: "https://str.pcradio.ru/shanson_spb-hi",
  },
  {
    name: "Шансон - PC Radio",
    url: "https://str.pcradio.ru/Shanson_pc-hi",
  },
  {
    name: "Шансон 102.5 (Уфа)",
    url: "https://str.pcradio.ru/chansonufa-hi",
  },
  {
    name: "Шансон Волна",
    url: "https://str.pcradio.ru/Shanson_volna-hi",
  },
  {
    name: "Шансон онлайн",
    url: "https://str.pcradio.ru/shanson_online-hi",
  },
  {
    name: "Шансон Плюс",
    url: "https://str.pcradio.ru/shanson_plus-hi",
  },
  {
    name: "Шансон Украина",
    url: "https://str.pcradio.ru/shanson_ua-hi",
  },
  {
    name: "Шансон Хит",
    url: "https://str.pcradio.ru/Shanson_hit-hi",
  },
  {
    name: "Шансон шоферский",
    url: "https://str.pcradio.ru/Shanson_shoffersky-hi",
  },
  {
    name: "Шоколад",
    url: "https://str.pcradio.ru/chocoradio_ru-hi",
  },
  {
    name: "Шоу Голос",
    url: "https://str.pcradio.ru/Golos-hi",
  },
  {
    name: "Шура",
    url: "https://str.pcradio.ru/Shura-hi",
  },
  {
    name: "Шура Каретный 18+",
    url: "https://str.pcradio.ru/Shura_Karetniy-hi",
  },
  {
    name: "ЭкоРадио",
    url: "https://str.pcradio.ru/ekoradio_ru-hi",
  },
  {
    name: "Экспресс Радио (Орел)",
    url: "https://str.pcradio.ru/express_radio_orel-hi",
  },
  {
    name: "Электроклуб",
    url: "https://str.pcradio.ru/Jelektroklub-hi",
  },
  {
    name: "Эльдорадио",
    url: "https://str.pcradio.ru/eldoradio-hi",
  },
  {
    name: "Этническая музыка",
    url: "https://str.pcradio.ru/Etno-hi",
  },
  {
    name: "Эхо Москвы",
    url: "https://str.pcradio.ru/ehomsk-hi",
  },
  {
    name: "Эхо Москвы (Оренбург)",
    url: "https://str.pcradio.ru/echo_oren-hi",
  },
  {
    name: "Эхо Москвы (Пермь)",
    url: "https://str.pcradio.ru/ehomsk_perm-hi",
  },
  {
    name: "Югра",
    url: "https://str.pcradio.ru/ugra_ru-hi",
  },
  {
    name: "Южная Волна",
    url: "https://str.pcradio.ru/yuzhnaya_volna_rf-hi",
  },
  {
    name: "Юлдаш",
    url: "https://str.pcradio.ru/uldashfm_ru-hi",
  },
  {
    name: "Юлдаш Plus",
    url: "https://str.pcradio.ru/uldash_plus-hi",
  },
  {
    name: "Юлия Савичева",
    url: "https://str.pcradio.ru/Savicheva-hi",
  },
  {
    name: "Юмор FM",
    url: "https://str.pcradio.ru/yumor_fm-hi",
  },
  {
    name: "Юмор FM (Минск)",
    url: "https://str.pcradio.ru/humorfm_by-hi",
  },
  {
    name: "Юмор FM (Рига)",
    url: "https://str.pcradio.ru/yumor_riga-hi",
  },
  {
    name: "Юмор FM (Таллинн)",
    url: "https://str.pcradio.ru/jumorfm_ee-hi",
  },
  {
    name: "Юнитон FM 100.7",
    url: "https://str.pcradio.ru/unitonru-hi",
  },
  {
    name: "Юрий Антонов",
    url: "https://str.pcradio.ru/Jurij_Antonov-hi",
  },
  {
    name: "Юрий Визбор",
    url: "https://str.pcradio.ru/yuri_vizbor-hi",
  },
  {
    name: "Юрий Лоза",
    url: "https://str.pcradio.ru/Loza-hi",
  },
  {
    name: "Юрий Шатунов",
    url: "https://str.pcradio.ru/Jurij_Shatunov-hi",
  },
  {
    name: "Як 40",
    url: "https://str.pcradio.ru/Yak_40-hi",
  },
  {
    name: "ЯпаРадио",
    url: "https://str.pcradio.ru/yapa_radio-hi",
  },
  {
    name: "ЯсенБит 18+",
    url: "https://str.pcradio.ru/yasenbit_net-hi",
  },
  {
    name: "Яскраве Радіо",
    url: "https://str.pcradio.ru/yaskrave_radio-hi",
  },
  {
    name: "Яхт-Радио",
    url: "https://str.pcradio.ru/yacht_radio-hi",
  },
];

module.exports = rezerv;
