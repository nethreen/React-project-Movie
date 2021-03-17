import * as actionTypes from "../actions/cart-types";

const INITIAL_STATE = {
  movies: [
    {
    name: "Kayıp Aranıyor (2018)",
    rating: "7.6",
      imageURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pk9R56ZFlofbBzfwBnHlDyg5DMs.jpg",
      overview: "Film kaybolan kızını bulmak için bilgisayar üzerinden araştırmaya başlayan bir babanın yaşadıklarını konu ediyor. David Kim’in 16 yaşındaki kızı kaybolunca, yerel soruşturma açılıp davaya dedektif atanmıştır. Dedektiflerin araştırmaya başlamasından 37 saat sonra David kimsenin bakmadığı bir yeri araştırmaya karar verir. Bütün sırların saklandığı yer kızının bilgisayarıdır. Kızının bilgisayarı kurcalayan çaresiz baba, kızının kişisel dünyasına da giriş yapar. Bilmediği sırlarla karşılaşan adam, tamamen yok olmadan önce kızını bulmak için onun geride bıraktığı dijital ipuçlarını takip etmelidir...",
      price: "10",
      id: 1
    },
    {
      name: "Bal Ülkesi (2019)",
      rating: "8.1",
      imageURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6JfuTYYMB2Af6Iw5cEmpIOx5OSW.jpg",
      overview: "Filmde arıcılık ile uğraşan Hatice'nin hikayesi anlatılıyor. Hatice Muratova Makedonya'da nüfusunun çoğunu göç nedeniyle kaybetmiş bir köyde yaşamakta. Kent hayatı ile arasına mesafe koyan Hatice'nin yaşamı, istemese de dahil olmak istemediği piyasa dinamikleri ile kesişiyor. Çekimleri üç yıl süren film, günümüz koşullarında insan ve doğa arasındaki bağın nasıl olabileceğini yeniden yorumluyor.",
      price: "27",
      id: 2
    },
    {
      name: "Ayin (2018)",
      rating: "7.2",
      imageURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/5Bz0u7xEyOUnGi4ov3rZKqKYCuH.jpg",
      overview: "Graham ailesinin en büyüğü Ellen öldüğünde, ailenin geri kalan üyeleri kökleriyle ilgili korkutucu sırlardan haberdar olmaya başlarlar. Daha fazlasını öğrendikçe, kendilerine miras kalan bu kaderden kurtulabilmek için daha da umutsuzca çabalamaya başlarlar. Kendini dış dünyaya fazla açmamış annelerinin sakladıkları sırlar, ölümcül sonuçlar doğuracaktır.",
      price: "15",
      id: 3
    },
    {
      name: "Locke (2014)",
      rating: "6.9",
      imageURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fMotwVtyUr833goyv7EzgAp0bCR.jpg",
      overview: "Bir inşaat şirketinde başarılı bir kariyeri olan Ivan Locke, işin en önemli gününde kimseye açıklamadığı bir işi tamamlamak üzere şantiyeden ayrılmak durumunda kalır. Yaptığı ufak bir hata hayatına mal olmak üzeredir. Locke, şimdi hayatı boyunca yüzleşmek ve üstesinden gelmek zorunda olduğu sorunlar yüzünden kapana kısılmıştır.\n\n\"Şark Vaatleri\",\" Kirli Tatlı Şeyler\"in senaryolarına imza atan Steven Knight'ın yazıp yönettiği; Tom Hardy'nin başrolünde olduğu, gerçek zamanlı bu son derece sıra dışı gerilim, bu yılın en çok beklenen filmleri arasında..",
      id: 4
    },
    {
      name: "The Platform (2019)",
      rating: "7",
      imageURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1s4MJNW9nLssAzyHvFt8M14O0yT.jpg",
      overview: "İzleyiciyi distopik bir geleceğe götüren The Platform, her katta bir hücrenin, her hücrede iki kişinin olduğu dikey bir hapishanede geçiyor. Her gün sadece iki dakika bu dikey hapishanenin en üst katından aşağı yiyecek gönderiliyor. Üst kattakiler yiyecekleri ele geçirmek için zamana karşı yarışırken, en alt kattakiler açlık içinde her geçen gün biraz daha vahşi, biraz daha radikal hâle geliyor. Filmde üst kattakilerin alttakilere göre daha iyi beslendiği bu hapishanedeki bir mahkûmun, herkese yeterince yemek ulaşması için sistemde değişiklik yapmaya başlamasıyla yaşanan olayları konu alıyor.",
      price: "43",
      id: 5
    },
    {
      name: "Truman Şov (1998)",
      rating: "81",
      imageURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/dOmxN9xhLITi43j2xGFEcsgv7QM.jpg",
      overview: "Truman Burbank, kartpostalları aratmayacak güzellikte bir adada yaşamaktadır. Bir işi, evi ve çok sevdiği karısı vardır. Ancak Truman dışında herkes tüm bunların düzmece olduğunu bilmektedir. Truman’ın yaşamı gerçek zannettiği bu stüdyolarda tam otuz yıldır, 24 saat boyunca canlı olarak bütün dünyaya yayınlanmaktadır. Truman bundan hiç şüphelenmemiştir, ta ki öldü zannettiği babasını bir gün caddeden geçen figüranlar arasında görünceye kadar… Alacakaranlık Kuşağı adlı kült televizyon dizisinin bir bölümünden esinlenerek yaratılan Truman Show, Batı dünyasında on yıllardır süregelen toplumsal eleştirilere bir örnek olarak yerini alıyor. Peter Weir’in filminde söylemeye çalıştıkları ve Truman’ın trajedisi, kimi zaman beklendiği üzere gözlerinizi doldurmasa da, başı ve sonu olan eliyüzü düzgün bir Jim Carrey filmine kim hayır diyebilir.",
      id: 6
    },
    {
      name: "Ay (2009)",
      rating: "7.6",
      imageURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/cJ6JnuLwCNbiAAOBuHDjRTP7bQJ.jpg",
      overview: "Astronot Sam Bell, Lunar Industries şirketi ile üç senelik bir kontrata imza atmıştır. Sözleşme gereği gezegenimizi besleyen önemli enerji kaynaklarından olan Helium-3 madenini Ay'ın yüzeyinden çıkaracak tesisin tek sorumlusu olacaktır. Bu meşakkatli görevde tek yardımcısı Gerty adındaki bir robottur. Sam Ay’da kendine ait bir rutin yaratmıştır. Günlerini sessizlik içinde geçiren Sam eve dönmesine üç hafta kala bir kaza geçirir. Uyandığında yalnız olmadığını fark edecektir.",
      id: 7
    },
    {
      name: "Oyuncak Hikayesi (1995)",
      rating: "7.9",
      imageURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg",
      overview: "Buzz Lightyear adlı yeni çıkan oyuncak, Andy'e hediye edilir. Oyuncağı çok seven Andy, eski gözdesi Şerif Woody'e olan ilgisini yitirir. Bir gün Buzz yanlışlıkla pencereden aşağı uçunca, herkes Woody'nin onu öldürdüğüne inanır. Woody, kendisini kurtarabilmek için Buzz'ın arkasından giderek onu geri getirmeye karar verir. Fakat ikiliyi dış dünyada büyük tehlikelerle dolu maceralar beklemektedir.\n\n",
      id: 8
    },
    {
      name: "Yırtıcı Kuşlar (ve Muhteşem Harley Quinn) (2020)",
      rating: "7.1",
      imageURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ZB3EBbF3HHywU7jfcwP8eDnUwn.jpg",
      overview: "Joker'den ayrılan Harley Quinn, bir suç lordundan nadir bir elmas çaldıktan sonra üzerine ödül koyulan genç bir kıza yardım etmek için bir şarkıcı, bir suikastçı ve bir polis dedektifiyle güçlerini birleştiriyor.",
      price: "33",
      id: 9
    },
    {
      name: "Arakçılar (2018)",
      rating: "7.9",
      imageURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hlztmzyysBIGFF9qf1fOQgOzLN5.jpg",
      overview: "Shibata ailesi hem ufak gündelik işlerden hem de süpermarketlerden hırsızlık yaparak geçimini sağlayan geniş bir ailedir. Bir gün, hırsızlık yaptıktan sonra baba Osamu ve oğlu, dondurucu soğukta bir barakaya terk edilmiş küçük bir kıza rastlar. İlk önce Osamu’nun eşi, kızı kabul etmekte gönülsüz olsa da küçük kızın yaşadığı zorlukları öğrendikten sonra kızla ilgilenmeyi kabul eder. Hayatta kalmak için geçimini zar zor sağlayan bu aile birlikte yaşadıkları için mutludur ancak öngörülemeyen bir olay, gizli sırları açığa çıkartacak ve onları birleştiren aile bağlarının sarsılmasına neden olacaktır.\n\n",
      id: 10
    },
    {
      name: "Yıldız Savaşları: İmparator'un Dönüşü (1980)",
      rating: "8.4",
      imageURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7BuH8itoSrLExs2YZSsM01Qk2no.jpg",
      overview: "Darth Vader'ın da yardımıyla İmparator, asileri ezerek evreni hakimiyeti altına almaya çalışmaktadır. Gönderdikleri casus robotlar sayesinde asilerin merkezinin Hoth gezegeninde olduğunu öğrenir ve birlikleri oraya gönderirler. Luke Skywalker, Han Solo ve Prenses Lea, son anda Bulut Şehri'ne kaçarlar. Luke bu arada Yoda'yı bulmak ve Jedi eğitimini tamamlamak üzere yola çıkar. Kahramanlarımız bir araya gelip İmparator'u yenebilecekler midir?\n\n",
      price: "54",
      id: 11
    },
    {
      name: "Coco (2017)",
      rating: "8.2",
      imageURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/f9Ro5x36UTDdHFrhnHeXqlhBVRF.jpg",
      overview: "12 yaşındaki Miguel'in en büyük kahramanı efsanevi Meksikalı gitarist Ernesto de la Cruz'dur. Ancak Cruz hayatını kaybetmiştir ve Miguel'in onunla tanışma imkanı yoktur. Her gün onun şarkılarını dinleyen Miguel günün birinde ünlü müzisyenin gitarını bulur. Ancak gitarı çalması onu bir anda Ölüler Diyarı'na götürüverir. Çıkış yolunu arayan Miguel, Yaşayanlar Diyarı'na gitmek için her türlü numarayı çeken Hector'la karşılaşır ve birlikte Miguel'in aile tarihinin ardındaki gerçek hikayeyi keşfetmek için olağanüstü bir yolculuğa çıkarlar.\n\n",
      id: 12
    },
    {
      name: "Schindler'in Listesi (1993)",
      rating: "8.6",
      imageURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xx4JCtIkUj31PJbPFRLhuBc1PRl.jpg",
      overview: "Gerçek bir hayat hikayesinden uyarlanan film, Oskar Schindler adlı bir Alman işadamının 2. Dünya Savaşı sırasında Polonya'da kurduğu fabrikada Yahudi işçileri çalıştırmaya başlaması ve bu sayede 1100 Yahudi'nin hayatını kurtarmasını konu alıyor. Steven Spielberg'in en önemli yapıtları arasında sayılan ve ünlü yönetmene Oscar kazandıran film, 1994 yılında 12 dalda Oscar'a aday olmuş ve 7 dalda kazanmıştı. Filmin kazandığı Oscar'lar : En İyi Film, Yönetim, Kurgu, Sanat Yönetimi, Görüntü, Özgün Müzik ve Senaryo Uyarlaması.\n\n",
      price: "49",
      id: 13
    },
    {
      name: "Mucize 2 : Aşk (2019)",
      rating: "7.4",
      imageURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gsKYWasTNaZYQru4LiBx614Gk1R.jpg",
      overview: "Aziz, bir dağ köyünde yaşayan engelli bir gençtir. Görücü usülü ile evlendiği Mızgün ile birlikte yaşayan Aziz, köydeki önyargılardan ötürü zor bir hayat sürdürmektedir. Günün birinde Aziz ile Mızgin bu zorluklar nedeniyle daha kolay bir hayat süreceklerini düşündükleri başka bir kasabaya yerleşir. Ancak Aziz ve Mızgün, çok geçmeden önyargı ve saldırganlığın sadece geldikleri yere ait olmadığını deneyimleyecektir...\n\n",
      price: "12",
      id: 14
    },
    {
      name: "Alevlerin Ardından (2019)",
      rating: "7.4",
      imageURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3iwIoZDKX2XJf6L892e5DfbAswJ.jpg",
      overview: "1897 Parisi'nde yaşanan yıkıcı bir yangının ardından üç kadının hayatı ihanetler, aldatmacalar ve romantik çalkantılarla altüst olur. Gerçek olaylardan esinlendi.",
      price: "249.90",
      id: 15
    },
    {
      name: "The Spy (2019)",
      rating: "7.5",
      imageURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/bCGC6cAEKzm45J7SPsApAnp9mNx.jpg",
      overview: "1960'larda memurken gizli ajana dönüşen Eli Cohen, yıllar sürecek tehlikeli bir görevde Mossad için casusluk yapmak üzere gizli bir kimlikle Suriye'ye sızar.\n\n",
      price: "299",
      id: 16
    },
    {
      name: "Kan Dökülecek (2007)",
      rating: "8.1",
      imageURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/4HaeMedO6VQKtcxidDA5U1aZs5x.jpg",
      overview: "Upton Sinclair’in “Petrol-Oil!” adlı romanından uyarlanan filmin konusu, 20. yüzyılın başlarında geçer. Aile çiftliği arazisinde petrol çıkartma haklarını almasıyla birlikte servetini hızla katlayan bir işadamı ile (Daniel Day-Lewis), kısa sürede gelişip kalkınan kasabanın karizmatik genç rahibinin (Paul Dano) paralel öyküsü anlatılır. Güney Kaliforniya’da petrol bulunmasının ardından ortaya çıkan tablo, daha önceki yıllardaki “Altına Hücum” olgusunun eşdeğeridir. İşadamının Amerikan Rüyası kavramının farkına varması ve Amerikan Rüyası tarafından yok edilmesiyle birlikte filmin öyküsü hırs ve inançların irdelemesine dönüşür.\n\n",
      id: 17
    },
    {
      name: "Hiçbir Zaman Burada Değildin (2017)",
      rating: "6.6",
      imageURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/jz6cGaWTwxUB9o1lLeTDHsCBc7i.jpg",
      overview: "Mesleğinde bir ömre yetecek kadar şiddete tanık olan Joe (Joaquin Phoenix), geride kalan hayatını, seks ticareti için kaçırılan kızları kurtararak kazanmaya başlamıştır. New York senatörünün kızını kurtarması için kiralandığı zaman ise bir komplo ağının içine sürüklenir. Joe kısa sürede, kendisini ölü görmek isteyen düşmanlarıyla savaşmak zorunda olduğunu kavrayacaktır.\n\n",
      id: 18
    },
    {
      name: "See (2019)",
      rating: "8",
      imageURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/g3JsScc7mQCfc3e5e5rXwu7xVVP.jpg",
      overview: "See, günümüzden uzak bir gelecekte geçiyor. Dizide, görme yetisini yitiren insanlığın , hayatta kalmak için yeni yollar aramasını konu ediniyor. Ne var ki yeni hayata gelen ikiz bebeklerin görme yetisiyle doğması işleri karıştırıyor. Dizinin başrolünü Game of Thrones’ta canlandırdığı Kahl Drogo karakteri ile dikkatleri çeken Jason Momoa üstleniyor. Momoa’nın korkusuz savaşçı Baba Voss rolünü üstlendiği See’nin senaryosunu Peaky Blinders’ın yaratıcısı Steven Knight ile Açlık Oyunları serisinin son üç filminin yönetmen koltuğunda oturan Francis Lawrence birlikte kaleme alıyor. 10 bölümden oluşan See’nin yürütücü yapımcılığını Knight, Lawrence, Peter Chernin, Jenno Topping ve Kristen Campo üstleniyor.\n\n",
      price: "999.50",
      id: 19
    },
    {
      name: "Büyük Patlama Teorisi (2007)",
      rating: "7.6",
      imageURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ooBGRQBdbGzBxAVfExiO8r7kloA.jpg",
      overview: "En büyük zevkleri kuantum fiziğine kafa yormak olan üstün zekalı iki arkadaş, güzel bir kızla karşılaşınca ne yaparlar? The Big Bang Theory, işte o karşılaşma anında gerçekleşen büyük patlama ve sonrasını anlatan bir komedi dizisi. Leonard ve Sheldon adlarındaki iki arkadaşın oturdukları apartmanda yan dairelerine yeni bir komşu taşınır. Adı Penny olan bu komşu güzeller güzeli bir sarışındır. Üstelik maceralı bir ilişkiden daha yeni sapasağlam ayakta çıkmıştır. Penny, zekaları gereğinden fazla ilerlemiş, ancak kızlar konusunda oldukça geri kalmış bu yeni iki komşusuna hayat hakkında öğretebileceği bir şeyleri olduğunu düşünmektedir. Yaşanacak olanlar da zaman içinde onun ne kadar haklı olduğunu gösterecektir.\n\n",
      price: "509.90",
      id: 20
    },
    {
      name: "Düzenbaz (2013)",
      rating: "6.8",
      imageURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/cgwOUnJwUDVrhkwwb0OcsOD8ih2.jpg",
      overview: "1970'lerde geçen gerçek bir hikayeden uyarlanan filmde usta dolandırıcı Irving Rosenfeld (Christian Bale) ve ortağı İngiliz Sydney Prosser (Amy Adams) genç ve yetenekli bir FBI ajanı olan Richie DiMaso (Bradley Cooper) tarafından yakalanır. Hüküm giymemelerinin ise tek bir yolu vardır: FBI için çalışmak... FBI'ın üst kademeli yöneticilerinden gelen bu teklifi kabul ederler; görevleri ise kendileri gibi usta bir şekilde dolandırıcılık yapan bazı insanları ortaya çıkarmaktır. Ajan DiMaso ve çalışma arkadaşları tarafından hazırlanan plana göre, bir kumar cenneti olan Arap Şeyhi’nin yönettiği Atlantic City'de ünlü kumarcıların katıldığı geniş çaplı bir oyun organize edeceklerdir. Başlarda son derece masumane ve zekice görünen bu plan, zamanla değişime uğramaya başlar.\n\n",
      price: "33",
      id: 21
    },
    {
      name: "Bojack Horseman (2014)",
      rating: "8.6",
      imageURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/e01pnpeEsTzb1e6YVmedY6EBpAp.jpg",
      overview: "Oynadığı dizinin yayından kaldırılmasının üstünden 18 yıl geçtikten sonra, yani günümüzde, Hollywood’da yaşayan BoJack Horseman eski şöhretini kaybetmiş, her şeyden şikayet eden ve renkli renkli kazaklar giyen biri haline gelmiştir. Kendi kişisel buhranlarını insan olan arkadaşı Todd ve bir kedi olan eski sevgilisi Prenses Caroline ile beraber atlatmaya çalışmaktadır.\n\n",
      price: "409.99",
      id: 22
    },
    {
      name: "Yargıç (2014)",
      rating: "7.3",
      imageURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tefUxj4Gg9hgQNgfEYd7kJQrIlD.jpg",
      overview: "Film, Downey'in canlandıracağı başarılı bir avukatın, annesinin cenazesi için memleketine dönmesinden sonra yaşananları anlatacak. Babasıyla arası pek de iyi olmayan avukat, Alzheimer hastası babasının, yıllar önce davasına baktığı bir adamın ölümüyle bağlantısı olup olmadığını araştırırken, unuttuğu kökleriyle ve babasıyla da tekrar karşılaşacak.\n\n",
      id: 23
    },
    {
      name: "Soul (2020)",
      rating: "8.3",
      imageURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/vvPVGZzlu8QYkAy0BsPQmuGlDsi.jpg",
      overview: "Küçük bir yanlış adım, şehrin en iyi caz kulübünde çalmak üzere hayatının şansını yakalayan ortaokul müzik öğretmeni Joe Gardner'nı New York sokaklarından, yeni ruhların dünyaya gitmeden önce kişiliklerini, tuhaflıklarını ve ilgi alanlarını edindikleri fantastik bir yer olan Önceki Dünya’ya götürür. Joe, insan olmanın cazibesini hiç kavrayamamış olan, erken büyümüş ruh 22’nin yardımıyla dünyadaki hayatına geri dönmeye çalışacaktır.\n\n",
      price: "59",
      id: 24
    },
    {
      name: "Parazit (2019)",
      rating: "8.5",
      imageURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zzxXFDSRYXnPFXWOJakPEoIOaWo.jpg",
      overview: "Film, birbirinden yapı olarak tamamen farklı iki aileyi konu ediniyor. Ki-taek ve ailesi komple işsizdir ve varoşlarda yaşamaktadırlar. Ki-taek’in oğlu Ki-woo, bir arkadaşının referansı ile çok zengin, bir o kadar da saf olan Park ailesinin kızına İngilizce için özel ders vermeye başlar. Ancak bu onlara yeterli gelmez ve maaile Park ailesinin evdeki çalışanlarının adım adım kuyusunu kazarak çeşitli üçkağıtçılıklarla kapağı Park ailesine atmayı başarırlar. Ancak fazla açgözlülükleri ve beleşçilikleri günün birinde başlarına bela olacaktır.\n\n",
      price: "119.99",
      id: 25
    },
    {
      name: "Alive Yaşamak İçin (1993)",
      rating: "6.8",
      imageURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uQACcCZqd7WCTRin9xRIW5gr1bd.jpg",
      overview: "Uruguaylı bir rugby takımının oyuncuları bulunan uçak And dağlarına çakılır. Bu çarpışma esnasında yolcuların bir kısmı ölür ama çoğunluğu da sağ olarak kurtulur. Sekiz gün boyunca uçağın enkazında oturup kurtarılmayı beklerler. Ancak yardım bir türlü gelmez. Bu arada radyodan da arama çabalarının sonuç vermemesi ve çok soğuk ortamda bu kadar zaman yaşamalarının artık söz konusu olamayacağı üzerine arama çalışmalarına son verildiğini duyarlar. Sıfırın altındaki soğuk bir ortamda on hafta boyunca hayatta kalma çabaları inanılmaz boyutlara ulaşır ve sonunda gençlerden üçü yardım bulmak amacıyla yola çıkarlar.\n\n",
      id: 26
    },
    {
      name: "Büyüt Yarından Sonra (2004)",
      rating: "6.5",
      imageURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/mr1GBm0CXFA2lBKvl4voCYfkfL0.jpg",
      overview: "Dünya, doğanın gazabına uğramaktadır. Şiddetli kasırgalar Los Angeles'ı haritadan silmiş, Yeni Delhi karlar altına gömülmüş, Tokyo devasa dolu yağışıyla yıkılırken New York ani iklim değişikliği ile dev dalgaların tehditi altında kalmıştır. Bir iklim bilim uzmanı olan Jack Hall, dünyayı, küresel ısınmanın tetiklediği bu felaketten kurtarmak için çözüm arayışındadır.Kurtuluş Günü'nün yaratıcısı Roland Emmerich, dünyayı bu kez uzaylılar tarafından değil, bizzat doğanın kendisi tarafından yokediyor. Devasa doğal felaketler, büyük paralar harcanarak ve bilgisayar teknolojisinin de katkısıyla nefes kesen gerçekçilikte sahnelere dönüştürülmüş. Denis Quaid, Jake Gyllenhaal ve Ian Holm'un da katılımıyla filmin kadrosu da en az efektleri kadar dikkat çekiyor.\n\n",
      id: 27
    },
    {
      name: "Hotel Mumbai (2019)",
      rating: "7.6",
      imageURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/4UM3WBgWvAXi9CaBXJjwAMnEY05.jpg",
      overview: "Bir süredir işsiz olan Arjun, ailesini geçindirmek için şehrin en ünlü oteli olan Taj Mahal’de garson olarak işe girer. Sabahın erken saatlerinde işinin başına geçen Arjun, ünlü şef Hemant Oberoi yönetiminde otelin değerli konukları için hazırlıklara başlarlar ancak çıkan terör saldırısı otel çalışanları ve konuklarının keyifli günlerini kabusa çevirir. Otel yakınlarında birçok yer havaya uçunca, insanlar korku içerisinde otele doluşmaya başlar. Ancak otele girenler arasında teröristler de vardır ve çok geçmeden oteli de ele geçirirler. Kaçma şansı olmasına rağmen otel misafirlerinin yanından ayrılmayı reddeden şef Hemant ve otelin garsonu Arjun, herkesi güvende tutmak için hayatını riske atar. Çeşitli sınıflardan, farklı ırklardan ve inançlardan olan otel konukları, yaşadıkları bu korkunç saldırı karşısında örgütlenerek birlikte mücadele etmek zorundadırlar...\n\n",
      price: "14.99",
      id: 28
    },
    {
      name: "Sevgili (1992)",
      rating: "6.6",
      imageURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/15Q9jqr50QLtDlJ9ClfqjARvbdV.jpg",
      overview: "1920li yılların sonunda Hindiçin Liseli bir Fransız kız, Mekong nehrindeki bir vapurda zengin bir Çinli ile tanışır ve onun birlikte yolculuk etme teklifini kabul eder. Sonrasında genç kız, adamın garsoniyerine gidecek ve ilk aşkı orada yaşayacaktır. Irklar arası sürtüşmenin, para ve statü gibi değerlerin şekillendirdiği bu tutku dolu ilişki, Çinli adam için ömür boyu unutulmayacak gerçek aşk anlamını taşıyacaktır. Ünlü yazar Marguerite Durasın Fransanın en önemli edebiyat ödülü Prix Goncourta layık görülen ve kendi yaşam öyküsünden izler taşıyan romanından, baş döndürücü güzellikte bir uyarlama.\n\n",
      id: 29
    },
    {
      name: "İtiraf: Bölüm 2 (2013)",
      rating: "6.8",
      imageURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/iAWJCAZTYiXXcmtzGX1sGEAPWwk.jpg",
      overview: "Danimarkalı aktör yönetmen Lars Von Trier'in Deccal (Antichrist) and Melankoli ile sürdürdüğü aykırı filmler serisine Nymphomaniac ile devam ediyor. Nemfomanyak bir kadın olan Joe'yu merkezine alan film, baş karakterinin doğumundan 50 yaşına kadar olan hayatına, özellikle de cinsel serüvenlerine odaklanıyor. Soğuk bir kış gecesi yakışıklı bir bekar olan Seligman, yolda dövülmüş halde Joe'yu bulur. Onu evine getirip, yaralarını sarar. Joe bu adamın evinde dinlenirken kendi hikayesini de anlatmaya başlar... Filmin oyuncu kadrosu ise Charlotte Gainsbourg, Stellan Skarsgård, Stacy Martin, Shia LaBeouf, Jamie Bell, Christian Slater, Uma Thurman ve Willem Dafoe gibi pek çok sürpriz ismi bir araya getiriyor.\n\n",
      price: "95",
      id: 30
    },
    {
      name: "First Reformed (2018)",
      rating: "7.1",
      imageURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/p2UylV0hPefEuWPFMo1r56vu2nb.jpg",
      overview: "Eski bir askeri papaz olan Ernst Toller, oğlunun ölümü yüzünden dağılmış durumdadır. Kendini toparlamak için çalışmaya başladığı yeni kilisesinin üyelerinden biri de Mary ve takıntılı derecede radikal çevreci eşi Michael’dir. Mary, Michael’ı da ilgilendiren önemli bir konu hakkında Toller'ın danışmanlığını ve yardımını ister. Toller, Michael’a danışmanlık yapmaya başladıktan sonra hayata farklı bir gözle bakmaya başlar. Köklü bir geçmişi olan kilisesinin şüpheli işlerini inceler ve bazı \"sırlarını\" keşfeder. Film bir tabuya dokunarak dini, daha doğrusu dini temsil eden kilisenin (kurum olarak) iş ve siyaset dünyasıyla olan ilişkilerini ve çevre gibi duyarlılık gerektiren konulardaki tutumunu sorgulamaktadır.\n\n",
      price: "19",
      id: 31
    },
    {
      name: "Cennnetin Kapısında (2009)",
      rating: "6.1",
      imageURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/mpwp8rqHDIOhCNzIn6Li8I3OKL4.jpg",
      overview: "Gangster filmleri üçlemesi Pusher ile tanınan yönetmen Nicolas Winding Refn, Pusher filmlerinin yıldızı (ve Ateş ve Citroen, Casino Royale, Prag, Düğünden Sonra filmlerinin oyuncusu) Mads Mikkelsen'le, bu kez henüz Ağustos ayında Venedik Film Festivali'nde ilk kez izleyiciyle buluşan epik bir Viking filminde buluşuyor. MS 1000 yılında geçen filmde Mikkelsen, Tek Göz adında dilsiz bir savaşçıyı canlandırıyor. Yıllarca bir Norman'ın tutsağı olan Tek Göz, on bir yaşındaki köle Are'nin yardımıyla kaçar. İskandinavya'ya dönmek için bir Viking gemisine binerler ama tanımadıkları bir ülkede karaya çıkarlar. Vikinglerin sonu, görünmeyen düşmanlarının elinde kanlı olur; Tek Göz ise bu vahşi ülkede gerçek kimliğini bulacaktır. , adını Kuzey mitolojisinde savaşçıların gittiğine inanılan cennetten alıyor.\n\n",
      id: 32
    },
    {
      name: "İtiraf: Bölüm 1 (2013)",
      rating: "6.9",
      imageURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/mxNG0RZp0IFO4fKDVMmkZ0dWuSE.jpg",
      overview: "Danimarkalı aktör yönetmen Lars Von Trier'in Deccal (Antichrist) and Melankoli ile sürdürdüğü aykırı filmler serisine Nymphomaniac ile devam ediyor. Nemfomanyak bir kadın olan Joe'yu merkezine alan film, baş karakterinin doğumundan 50 yaşına kadar olan hayatına, özellikle de cinsel serüvenlerine odaklanıyor. Soğuk bir kış gecesi yakışıklı bir bekar olan Seligman, yolda dövülmüş halde Joe'yu bulur. Onu evine getirip, yaralarını sarar. Joe bu adamın evinde dinlenirken kendi hikayesini de anlatmaya başlar... Filmin oyuncu kadrosu ise Charlotte Gainsbourg, Stellan Skarsgård, Stacy Martin, Shia LaBeouf, Jamie Bell, Christian Slater, Uma Thurman ve Willem Dafoe gibi pek çok sürpriz ismi bir araya getiriyor.\n\n",
      price: "79",
      id: 33
    },
    {
      name: "40 Yıllık Bekar (2005)",
      rating: "6.3",
      imageURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3icIClFrD37kitxy7YqlNQQYHEx.jpg",
      overview: "Andy, hayatında çoğu şeyi halletmiş 40 yaşında bir adamdır. Rahat bir işe, görkemli bir çizgi roman koleksiyonuna, güzel bir eve ve iyi arkadaşlara sahiptir. Ama onun yaşındaki çoğu kişinin birçok kez yapmış olduğu bir şeyi henüz gerçekleştirememiştir. Andy şimdiye kadar kimseyle seks yapmamıştır. Andy'nin iş arkadaşları bu işi çözmeye karar verirler ve onu bu durumdan kurtarmayı görev edinirler. Andy'e nasıl daha iyi görüneceğini, kendine güvenmesini öğretmeye çalışırlar, ama bunların hiçbiri işe yaramaz. Ta ki Andy 40 yaşındaki, 3 çocuk annesi Trish ile karşılaşana kadar...\n\n",
      id: 34
    },
    {
      name: "Felekten Bir Gece 2 (2011)",
      rating: "6.4",
      imageURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pq52kvSzjrMr1d38suticnyesJa.jpg",
      overview: "Filmde, Phil (Bradley Cooper), Stu (Ed Helms), Alan (Zach Galifianakis) ve Doug (Justin Bartha), Stu'nun düğünü için Taylan'a giderler. Las Vegas'taki unutulmaz bekarlığa veda partisinden sonra Stu işini şansa bırakmayıp sakin bir düğün öncesi kahvaltısı yapmayı tercih eder. Ancak her zaman herşey planlandığı gibi gitmeyebilir... Vegas'ta olan Vegas'ta kalabilir ama Bangkok'ta olanlar hayal bile edilemez.\n\n",
      price: "9.99",
      id: 35
    },
    {
      name: "Muhteşem Gatsby (2013)",
      rating: "7.4",
      imageURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/nimh1rrDDLhgpG8XAYoUZXHYwb6.jpg",
      overview: "Yazar olma basamaklarını tırmanan Nick Carraway (Tobey Maguire) 1920’lerde eğlence hayatının gözdesi konumuna yükselen New York’a gelir. Kendi Amerikan Rüyası'nın peşinden giden Nick, Jay Gatsby (Leonardo DiCaprio) adındaki gizemli ve sürekli partiler veren bir milyonerin evinin yanındaki, kuzeni Daisy (Carey Mulligan) ve onun asil bir aileden gelen çapkın kocası Tom Buchanan'ın (Joel Edgerton) evlerinin karşısındaki eve taşınır. Nick de böylece süper zenginlerin hayallerinin, aşklarının ve yalanlarının büyüleyici dünyasına girmiş olur. Yaşadığı dünyaya, hem içinden hem de dışından tanıklık eden Nick imkansız bir aşkı, dürüst hayalleri ve büyük bir trajediyi anlatan bir hikaye yazmaya başlar. Hikayesinde, modern zamanlara ve o dönemde yaşanan mücadelelere ayna tutar.\n\n",
      price: "5",
      id: 36
    },
    {
      name: "İhtiyar Delikanlı (2003)",
      rating: "8.3",
      imageURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xpa9ybm6tYGna5LseqSXvKpSSJn.jpg",
      overview: "Oh Dae-su, bir gün kendisini küçük karanlık bir hücrede bulur. Oraya kimler tarafından ve niye kapatıldığını bilmeyen adamın dünyayla bağlantısı sadece hücresindeki küçük televizyondur. Haberlerde karısının öldürüldüğünü duyunca olayla bağlantısı olduğu düşünüldüğü için kapatıldığını anlar. 15 yıl sonra, serbest bırakılan adam, ailesini öldüren kişileri bulmaya ve kendisini oraya kapatanlardan intikam almaya karar verir.\n\n",
      id: 37
    },
    {
      name: "Temel İçgüdü (1992)",
      rating: "6.8",
      imageURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/76Ts0yoHk8kVQj9MMnoMixhRWoh.jpg",
      overview: "San Francisco polisi cinayet masasından dedektif Nick Curran, bir cinayet dosyasını araştırırken davanın şüphelisi olan Catherine Trammel'le yakınlaşır. Yazar olan ve cinsellik konusunda son derece serbest davranan Catherine, son kitabında Nick'in davasındaki cinayetin bir benzerini detaylı şekilde anlatmıştır. Catherine, çekiciliğiyle Nick'i etkisi altına alır ve ikili ihtiras dolu bir ilişkinin içine sürüklenirler.Cinayetlerin devamı geldiğinde Nick'in psikiyatristi Elisabeth ve ortağı, onu Catherine'le olan yakınlığı nedeni ile uyarırlar ancak Catherine'in kıskanç lezbiyen sevgilisi Roxy'nin onu öldürmeye çalışması bile Nick'in kadına olan tutkusunu engelleyemez..\n\n",
      id: 39
    },
    {
      name: "50 İlk Öpücük (2004)",
      rating: "6.8",
      imageURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zm9dfA5iwq4vGopD86WPoHXO40T.jpg",
      overview: "Dr. Henry Roth, Hawaii'nin ünlü playboylarından birisidir. Fakat Lucy ile tanışınca farklı duygular hissetmeye başlar. Kalbini çalan bu kadının dünyada çok az rastlanan bir rahatsızlığı vardır. Her gün bir önceki gün yaşadıklarını unutarak uyanan Lucy, sürekli yenilenen bir hafıza kaybı yaşamaktadır. Henry her yeni günde yeniden kendisini tanıtmak ve yeniden kendisinden etkilenmesini sağlamak zorundadır. Bu durum Henry'nin işini zorlaştırmanın yanında, aslında daha da fazla bağlanmasına sebep olacaktır.Adam Sandler ve Drew Barrymore'un uyumlu bir ikili oldukları 50 İlk Öpücük, hoş bir romantik-komedi olarak hafızalarda yer ediyor.\n\n",
      id: 40
    },
    {
      name: "Aşk Tarifi (2014)",
      rating: "7.3",
      imageURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/edKOeARVyYY0ZUvPHZ9v1alleqq.jpg",
      overview: "Bombay’da yaşayan Hassan Haji, dedesinin işlettiği restoran sayesinde mutfakla çocuk yaşta tanışmış, bu ilgisini yeteneğiyle pekiştirmiştir. Şimdilerde genç bir adam olan Hassan, dedesinden kalan müesseseyi başarıyla işletirken beklenmedik bir trajedi nedeniyle Bombay’dan taşınmak durumunda kalır. Ailesiyle birlikte Fransa’nın bir kasabasına yerleşir ve işini burada devam ettirmek için hazırlıklara başlar, restoranını açar. Böylece bu yeni restoranın sunduğu egzotik Hint mutfağı kısa sürede bölge halkının dikkatini çeker. Bu nedenle de bölgenin prestijli restoranı Le Saule Pleureur’de bir telaş başlar. Şef Madame Mallory, yeni rakibi Hassan’ın kendinden daha yetenekli olduğunu fark etmiştir ve bu durum, aralarında esaslı bir rekabetin doğmasına neden olur..\n\n",
      id: 41
    },
    {
      name: "Cinayet Günlüğü (2003)",
      rating: "8.1",
      imageURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sujAihJHmNMfeMNQ004KYIPvrGA.jpg",
      overview: "1986 yılında Güney Kore, askeri bir diktatörlük altındadır. Ülkede yasaklar ve baskılar tüm sıkılığı ile devam ederken bir gün, tecavüze uğrayarak vahşice bir cinayete kurban giden bir kadın bulunur. Hemen başlayan soruşturmanın başına, yerel polis dedektifi Park Doo-man getirilir. Fakat olayı çözmek için kullandığı yöntemler, herşeyi berbat etmekten başka bir işe yaramayacaktır.Başarısızlıkla sonuçlanan soruşturma yöntemleri nedeni ile bir çok tanığın zarar görmesi sonucu, Seul’dan yeni bir dedektif olan Seo göreve atanır. Zeki, kurnaz ve işini bilir tavırlarına rağmen Seo’nun da soruşturmada son derece başarısız olması, olayları iyice sarpa sardıracaktır.Fetişist özellikler taşıyan gizemli bir cinayet hikayesini gerilim, mizah ve dramatik öğelerle birlikte etkili bir şekilde anlatan yönetmen Joon-ho Bong, Cinayet Günlüğü ile pek çok festivelden ödüllerle döndü.\n\n",
      price: "22",
      id: 42
    },
    {
      name: "Yasak Bölge 9 (2009)",
      rating: "7.4",
      imageURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/cXCqYER9eGZNH8O0JzE2xmcjsQI.jpg",
      overview: "1982 yılında hayatta kalan son uzaylılar, hayatta kalabilmek için dünyayı seçerler. Güney Afrika'nın bir gölgesine yerleşen uzaylılar çok geçmeden bir araştırma ekibi tarafından keşfedilirler. MNU isimli özel bir şirketin gözetimi altında tutulan uzaylılar, District 9 isimli bir bölgeye yerleştirilirler. Bu şirketin yetkilileri uzaylıların teknolojisinin sırlarını öğrenip uygulamayı, böylece de muazzam paralar kazanma peşindedir. Bunun için gerekli olan şey ise uzaylı DNA'sıdır. MNU çalışanı Wikus van der Merwe esrarengiz bir virüs tarafından saldırıya uğrar ve uzaylılara benzemeye başlar. Şirket şimdi kendi çalışanının peşine düşecek, Merwe ise tek sığınabileceği yer olan District 9'a doğru yola çıkacaktır...\n\n",
      price: "3",
      id: 43
    },
    {
      name: "Ocean's Thirteen (2007)",
      rating: "6.7",
      imageURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/l21Sfhfg5YgNkOEsMaO5HJWtWiM.jpg",
      overview: "Danny Ocean ve ekibinin macera arayışları bitmek bilmiyor. En büyük soygun çetelerinden biri haline gelen bu ekibin artık kendi kumarhaneleri de vardır. Fakat şimdi, yapacakları soygun kadar, kendi kumarhanelerini korumak da önemli hale gelmiştir.Dünyanın en acımasız kumarhane sahiplarinden biri olan Willie Banks, Ocean'ın ekibinden Reuben Tishkoff'a büyük bir kazık atmıştır. Bunun sonucu, Danny ve ekibinin yeniden bir araya gelerek belki de şimdiye kadar giriştikleri en tehlikeli soyguna hazırlanma vakitleri gelmiştir.\n\n",
      id: 44
    },
    {
      name: "Ocean's Twelve (2004)",
      rating: "6.5",
      imageURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/v0ogdW7JfrssGTk2ugn0IS0kLVj.jpg",
      overview: "Danny Ocean ve -iş bitirici Rusty Ryan'ın başını çektiği , yankesici Linus Caldwell , patlayıcı uzmanı Basher Tarr ve kasa hırsızı Frank Catton'tan oluşan- ekibinin, acımasız işadamı Terry Benedict'in ulaşılamaz Las Vegas kasasındaki her kuruşu çalarak, tarihin en cüretkâr ve kârlı soygununu gerçekleştirmesinden bu yana 3 yıl geçmştir. Ocean'ın ünlü ekibi 160 milyon dolarlık vurgunu paylaştıktan sonra, düzgün, gözlerden uzak ve yasalara uygun yaşamaya çalışır... ama, bunu sürdürmek oldukça zordur. Biri, Bir Numaralı Kural'ı ihlal ederek, onları Benedict'e gammazladığında, düzgün yaşamak bir seçenek olmaktan çıkar. Benedict 160 milyon dolarını, faiziyle birlikte geri istemektedir; yoksa kötü olacaktır. Ve, çetenin de çarçabuk keşfettiği gibi, Ocean'ın Onbiri'nin peşindeki tek güçlü kişi Benedict değildir...\n\n",
      id: 45
    },
    {
      name: "Ocean's Eleven (2001)",
      rating: "7.4",
      imageURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/v5D7K4EHuQHFSjveq8LGxdSfrGS.jpg",
      overview: "Danny Ocean hapisten yeni çıkmış bir soyguncudur. Ancak Danny’nin hapisten çıkınca giriştiği ilk şey tarihin en büyük kumarhane soygununu gerçekleştirmeye çalışmak olacaktır. Danny, rakiplerine karşı acımasızlığı ile ünlü Terry Benedict isimli adamın Las Vegas’ta ki 3 kumarhanesini birden aynı gecede soymayı planlamaktadır.Bunun için eski ortağı Rusty ile temasa geçer. Rusty ve Danny bu imkansız gereken soygunu gerçekleştirebilmek için her biri işinde uzman olan isimlerden oluşan bir takım oluştururlar. 11 kişiden oluşan bu takım soygunu başarıyla gerçekleştirirse her biri hayatının sonuna kadar yetecek paraya sahip olacaktır. Ancak başarısız olur da yakalanırlarsa Terry Benedict’in hışmına uğrayacaklardır.\n\n",
      id: 46
    },
    {
      name: "Yıldız Savaşları: Bölüm III - Sith'in İntikamı (2005)",
      rating: "7.3",
      imageURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/mNEdsxnEGJk0pUn4ESgmeVfo7dO.jpg",
      overview: "Kahraman ve bilge Jedi'ler fazlasıyla uzayan savaştan dolayı oldukça yorgundur. Asıl sorun ise savaşı bahane göstererek demokrasiyi gözardı eden şansölyenin gizli planlarıdır. Artık klon savaşlarındaki son dönemeçtir ve acımasız komutan Grievious başkentte tozu dumana katmaktadır. Palpatine'i rehin alarak kaçmaya koyulan Grevious, Obi-Wan Kenobi ve genç Anakin Skywalker tarafından takip edilecektir. Öte yandan Anakin Skywalker'ın tek derdi bu durum da değildir. Anakin, büyük Jedi ustalarından beklediği ilgi ve saygıyı göremediğini düşünüp hırslanmaktadır.\n\n",
      price: "29.90",
      id: 47
    },
    {
      name: "Yıldız Savaşları: Bölüm III - Sith'in İntikamı (2005)",
      rating: "7.3",
      imageURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/mNEdsxnEGJk0pUn4ESgmeVfo7dO.jpg",
      overview: "Kahraman ve bilge Jedi'ler fazlasıyla uzayan savaştan dolayı oldukça yorgundur. Asıl sorun ise savaşı bahane göstererek demokrasiyi gözardı eden şansölyenin gizli planlarıdır. Artık klon savaşlarındaki son dönemeçtir ve acımasız komutan Grievious başkentte tozu dumana katmaktadır. Palpatine'i rehin alarak kaçmaya koyulan Grevious, Obi-Wan Kenobi ve genç Anakin Skywalker tarafından takip edilecektir. Öte yandan Anakin Skywalker'ın tek derdi bu durum da değildir. Anakin, büyük Jedi ustalarından beklediği ilgi ve saygıyı göremediğini düşünüp hırslanmaktadır.\n\n",
      price: "33",
      id: 48
    },
    {
      name: "Yıldız Savaşları: Bölüm II - Klonlar'ın Saldırısı (2002)",
      rating: "6.5",
      imageURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/covs4Duoua7BWpdAaBvck9tWxvQ.jpg",
      overview: "Açgözlü Ticaret Federasyonunun Naboo'ya karşı giriştiği işgalin yenilgiyle sonuçlanmasının üzerinden 10 sene geçmiştir. Naboo Kraliçesi Padme Amidala, görevini halefi Jamillia'ya devretmiş ve bir senatör olarak Naboo'yu Galaktik Senatoda temsil etmeye başlamıştır. Bu sırada Galaksi yine büyük bir savaşın eşiğine gelmiştir. Jedi düzenini kendi isteğiyle terkeden eski Jedi Ustası Count Dooku, gizlice Darth Sidious'la çalışmaya başlayarak Ayrılıkçılar grubunun başına geçmiştir ve galakside huzursuzluk yaratmaktadır. Yüce Başkan Palpatine, kötü gidişe dur demek için bir klon ordusu hazırlama önerisini getirir ve Senatoda oylamaya sunar. Oylamaya katılmak üzere Coruscant'a gelen Senatör Amidala, bir suikast girişiminden kılpayı kurtulur. Bunun üzerine Palpatine, Obi Wan ve Anakin Skywalker’ı Amidala’yı korumakla görevlendirir.\n\n",
      price: "24",
      id: 49
    },
    {
      name: "Yıldız Savaşları: Bölüm I - Gizli Tehlike (1999)",
      rating: "6.5",
      imageURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/njvYovI7hE19OjHsaWBjWNW2wpj.jpg",
      overview: "Genç Luke Skywalker'ın içindeki gücü keşfedip galaksinin zalim imparatoruna başkaldırmasına henüz on yıllar vardır. Hatta Luke henüz doğmamıştır. Barış içindeki galakside Cumhuriyet hüküm sürmektedir.Barışçıl bir gezegen olan Naboo, iyi yürekli genç Kraliçe Amidala tarafından yönetilmektedir. Gizli Sith Lordu ve onun şampiyonu Darth Maul'un maşası olan Ticaret Federasyonu, barışı sarsacak girişimler ve adil olmayan müzakere taktikleriyle Amidala'yı köşeye sıkıştırmaktadır. Jedi şövalyesi Qui-Gon Jinn ve çömezi Obi-Wan Kenobi durumu incelemek için Naboo'ya gönderilirler.\n\n",
      price: "33",
      id: 50
    },
    {
      name: "Yıldız Savaşları: Jedi'nin Dönüşü (1983)",
      rating: "7.9",
      imageURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/yBkzyb8fmd6WfB6R2vv4of63Bqk.jpg",
      overview: "Darth Vader ve İmparatorluk, yepyeni ve durdurulamaz bir Ölüm Yıldızı yapmaktadır. Bu arada Han Solo, ödül avcısı Bobba Fett tarafından yakalanmış ve Jabba The Hutt'a teslim edilmiştir. Luke, R2D2 ve C3PO'yu onu kurtarmaları için gönderir. Bu arada ödül avcısı kılığına giren Prenses Lea ve Chewbacca da Han Solo'yu kurtarmayı denerler.Son savaş, Endor gezegeninin ayında gerçekleşecektir. İmparatorluğun karanlık güçlerine karşı isyancıların yanında bu kez gezegenin sahipleri Ewoklar da taraf olacaktır.\n\n",
      price: "16",
      id: 51
    },
    {
      name: "Yıldız Savaşları: Yeni Umut (1977)",
      rating: "8.3",
      imageURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/4eBxpbab6wjtcHiR4ATf3cQ8tu4.jpg",
      overview: "Yıldız Kruvazörü Diplomatik görevle yolalan Korvet'i kıstırır. Bu küçük gemide aslında Senato üyesi olan ancak asilerle işbirliği içinde de bulunan, Eski Cumhuriyet'in savunucularından Prenses Leia da bulunmaktadır. İmparatorluk gemisinde ise hem Leia'yı hem de asi casusların kaçırmış olduğu \"Ölüm Yıldızı'nın planlarını\" geri isteyen kötü Lord Vader. Bu arada sevimli droid R2-D2 ve ortağı C3-PO ise Tatooine gezegeninde, tesadüfler eseri Luke Skywalker isimli genç pilot adayına satılırlar. Droidlerin amacı yüklü olan mesajı Obi Wan Kenobi isimli yaşlı bir keşişe iletmektir.\n\n",
      price: "15",
      id: 52
    },
    {
      name: "Brokeback Dağı (2005)",
      rating: "7.8",
      imageURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/cVqlDC4UUWx8sZB7MMLwzfFQtZS.jpg",
      overview: "Genelde kadınlarla vakit geçirmeyi seven iki sert erkek, Brokeback Dağı civarında bir çiftlikte tanışır ve birlikte vakit geçirmeye başlar. Zamanla aralarındaki ilişki, dikkat çekici bir derinlik ve duygusal bir boyut kazanır.Biri çiftçi, diğeri ise rodeo kovboyu, farklı karakterlerine rağmen birbirlerine bağlanırlar. Yaşam boyu sürecek olan bu ilişki, kimi zaman kopmalar ve ayrılıklar yaşayacak fakat yeniden iki aşığı buluşturacaktır. Ortaya, kulaktan kulağa yayılacak, aşka dair güçlü tonlar barındıran efsanevi bir hikaye çıkacaktır.\n\n",
      price: "3",
      id: 53
    },
    {
      name: "Patch Adams (1998)",
      rating: "7.3",
      imageURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6klP1qJMo7UWbbjxoebumpMhfAc.jpg",
      overview: "Yaşanmış bir hayat hikayesinden alınmıştır. İntihar eğilimli biri olarak girdiği akıl hastanesinde gördüklerinden sonra Hunter 'Patch' Adams (Robin Williams), çıktıktan sonra tıp fakültesine öğrenci olarak girer. Okulda başarılı bir öğrenci olmasına karşın, ideallerinden dolayı hocalarından tepki görür. Amacı 'hayata renk katarak' mizah yoluyla tedaviye katkıda bulunmaktır. Daha sonra yoksul hastalar için kendi parası ve bağışlarla özel bir klinik açmaya kadar girişimlerini sürdüren Adams, film sürecinde sevgilisi Carin Fisher'in (Monica Potter) öldürülmesiyle ve lisanssız klinik açmakla darbeler yese de, tedavi hizmetlerinde yaptıklarıyla ünü ülke çapına yayılır ve bir anlamda amacına ulaşır.\n\n",
      id: 54
    },
    {
      name: "Tanrı'nın Kitabı (2010)",
      rating: "6.8",
      imageURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1H1y9ZiqNFaLgQiRDDZLA55PviW.jpg",
      overview: "Güneş patlaması sonrası kavrulmuş dünyada sağ kalanların yaşam mücadelesinde Eli (Denzel Washington) adlı bir adamın yok olmanın eşiğine gelen insanlığı kurtaracak olan bir kitabı koruma mücadelesini anlatıyor.\n\n",
      id: 55
    },
    {
      name: "Kar Küreyici (2013)",
      rating: "7.3",
      imageURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9JPx09Rr0Txq2eSQfjq1DEBR5cx.jpg",
      overview: "Hikaye gezegendeki neredeyse tüm insanları öldüren küresel ısınmayı durdurmak için yapılan başarısız bir deney nedeniyle gerçekleşen buz çağında geçiyor. Hayatta kalan insanlar Snowpiercer isimli bir trende yaşamaktadır. Bu insanlar aynı zamanda trende uygulanan sınıf sistemiyle de mücadele etmektedir. Filmle ilgili gayet açıklayıcı bilgiler verilmiş. Filmin arkasında Koreli senarist/yönetmen Bong Joon-ho bulunuyor. Bong son iki filmi Mother ve The Host’ta ne kadar yetenekli olduğunu gösterdi. İlk İngilizce dilindeki filmi olacak Snowpiercer için seçtiği oyuncu kadrosu da harika görünüyor: Chris Evans, Song Kangho, Tilda Swinton, Jamie Bell, Octavia Spencer, Ewen Bremner, Alison Pill, John Hurt ve Ed Harris...\n\n",
      price: "14",
      id: 56
    },
    {
      name: "Köpek Adası (2018)",
      rating: "7.9",
      imageURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/yEbJDQdNKVgaC6V2CLGWx2NXcTJ.jpg",
      overview: "Film, köpeklerin “köpek gribi” nedeniyle çok uzaklarda isimsiz bir adada karantina altına alındıkları distropik geleceğin Japonya’sında geçiyor. Bu adanın yerlileri olan beş köpek – Chief, Rex, Boss, Duke ve King– izole olmuş bir hayatta yalnızlıklarından bezmişlerdir. Ta ki Atari Kobayashi adında bir çocuk kaybolan köpeği Spots’u aramak için adaya gelene kadar… Atari köpeğini bulmaya çalışırken bu beş köpekten yardım isteyecek ve onlar da Atari’yi onu almaya gelen Japon yetkililerden koruyacaklardır. Yönetmen Wes Anderson, filmi çekerken Akira Kurosawa’dan ilham aldığını açıklamıştır.\n\n",
      price: "22",
      id: 57
    },
    {
      name: "Orman (2017)",
      rating: "6.5",
      imageURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/58WkVBfNNri4HMyZ1NPQJDE4HZq.jpg",
      overview: "Gezgin Yossi Ghinsberg'in kendi yaşam hikayesinden yola çıkılarak çekilmiş olan Jungle gerçek bir hayatta kalma öyküsü anlatmakta. '80'lerin ilk yıllarında, o sıralar 22 yaşında olan İsrailli seyyah Yossi, İsviçreli öğretmen Marcus ve Amerikalı fotoğraf sanatçısı Kevin, Bolivya'nın La Paz kentine doğru yola çıkarlar. Meraklı gezginler bu yolculuğun hayatlarının en heyecanlı serüveni olacağından emindirler. Amazon'un derinliklerine giden yolda rehberleri, Bolivya'da yeni tanıştıkları Avusturyalı Karl Ruprechter'dir. Hayatlarının macerası olarak çıktıkları yolculuk, hayatlarını karartacaktır.\n\n",
      price: "22",
      id: 58
    },
    {
      name: "Büyük Budapeşte Oteli (2014)",
      rating: "8",
      imageURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1WicOAzPkpBWajjvcFazPLIuu0A.jpg",
      overview: "20.yy. başları..Gustave H, Büyük Budapeşte Oteli’nin işleyişini büyük bir profesyonellikle idare eden, müşterilerini dahi en ince ayrıntılarına kadar tanıyan bir konsiyerj görevlisidir. Bir gün otele bellboy ve komi görevlisi olarak Zero Mustafa adında genç bir adam gelir ve kısa zamanda aralarında yakın bir arkadaşlık başlar. İkili birbirlerinin sırdaşı olurken yaşadıkları şehir de büyük bir savaşa doğru sürüklenmektedir. Bu esnada Gustave’ın yaşlı sevgilisi Madame D. esrarengiz bir şekilde hayata veda eder, ikili Madame D.’ye veda etmek için yola çıkar. Bir asilzade olan Madame D.’nin şatosuna vardıklarında miras bölüşümünün yapıldığı toplantıya denk gelirler. Madame D., Gustave’a miras olarak paha biçilmez bir Rönesans tablosu bırakmıştır ve bunun açıklanmasıyla aile içerisinde büyük bir karmaşa çıkar. Bu andan itibaren belalarla dolu bir maceraya atılan Gustave ve Zero, gerçeklerin peşinde koşarken dışarıda da bir çağ değişmektedir…\n\n",
      price: "13",
      id: 59
    },
    {
      name: "Yağmur Adam (1988)",
      rating: "7.8",
      imageURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/jcHdP9VsTEZbMTBAGPkRd3bfYTg.jpg",
      overview: "Bir ithal araba satıcısı olan Charlie, başkalarının düşüncelerine saygı duymayan bencil ve fırlama bir şehir çocuğudur. Babasının öldüğünü haber alan Charlie, cenazesine gittiğinde, babasının 49 model bir Buick Roadmaster hariç tüm mirasını bir vakfa bıraktığını öğrenir. Kendi hakkı olduğunu düşündüğü bu paradan bir pay alabilmek için bu vakfı ziyaret eden Charlie, buranın özürlülerle ilgilenen bir kurum olduğunu öğrenir.\n\n",
      id: 60
    },
    {
      name: "Salgın (2011)",
      rating: "6.5",
      imageURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qL0IooP0bjXy0KXl9KEyPo22ll0.jpg",
      overview: "Hava ve solunum yoluyla rahatlıkla geçen ve insanları birkaç gündür içinde öldüren, ölümcül bir virüs salgın şeklinde yayılmaktadır. Dünya çapında uzmanlardan oluşan medikal bir ekip, hem salgına çare bulmaya çalışır hem de insanlarda virüsten daha da hızlı yayılan panik halin kontrol altına almaya çalışırlar. İnsanlar şimdi hem canlarını kurtarmaya çalışırken hem de dağılmanın eşiğine gelen toplumsal hayata tutunma mücadelesi verirler...\n\n",
      price: "2.50",
      id: 61
    },
    {
      name: "Diriliş (2015)",
      rating: "7.5",
      imageURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/dSNlnUeB06UnxCNrErn1Gsndz1Y.jpg",
      overview: "Hugh Glass kürkleri için hayvanları avlayan bir kuruluş için çalışan deneyimli bir tuzakçıdır. Fakat avlandıkları bölgelerde kendilerinden başka hem yerli Kızılderililer hem de Fransız birlikleri kol gezmektedir. Bir av ertesinde bir boz ayı tarafından ölümcül bir biçimde yaralanan Glass'ı, ekibi yavaşlamamak adına ölüme terk eder. Fakat bölgeyi herkesten iyi bilen avcı Glass hayata tutunur ve yavaş da olsa yaraları iyileşir. Zira yaşama tutunması için oldukça geçerli bir sebebi vardır.\n\n",
      id: 62
    },
    {
      name: "13 Günah (2014)",
      rating: "6.2",
      imageURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/k5H3zLwKJZv5ehhUWqCwmhkMQvY.jpg",
      overview: "Amerikan Sineması, Uzakdoğu’yu sömürmekten vazgeçmiyor. Chookiat Sakveerakul’un yönettiği, 2006 yılı Tayland yapımı “13: Game of Death/13 game sayawng”, İngilizce olarak yeniden çekildi...\n\n",
      price: "23",
      id: 63
    },
    {
      name: "Sessiz Bir Yer (2018)",
      rating: "7.4",
      imageURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/nAU74GmpUk7t5iklEp3bufwDq4n.jpg",
      overview: "İki çocuklu bir aile, izole bir kırsalda sakin bir yaşam sürmektedir. Henüz büyüme çağlarında olan çocuklar da, ebeveynleri de hiçbir şekilde konuşmamakta, işaret diliyle anlaşmaktadır. Ancak bunun sebebi konuşamıyor olmaları değildir. Aile ses çıkaracak her türlü adım ve hareketten uzak durmaktadır. Ancak günün birinde bu sakin hayat, küçük çocukların oyun oynarken bir lambayı devirmeleri ile tepetaklak olur. Durgun sessizliğin içinde çıkan bu ses, ailenin peşindeki varlığın dikkatini hemen çekecek ve aile sessizliklerini bozmanın bedelini ağır ödeyecektir.\n\n",
      id: 64
    },
    {
      name: "Yol (2009)",
      rating: "7",
      imageURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xq6RC9dM0d7t0245kHhFanxB5XQ.jpg",
      overview: "Gelecekteki kıyamet günlerini anlatan bir kitabın uyarlaması olan film, güçlü oyuncu kadrosuyla, en iyi satanlar listesindeki kitabın (The Road) gölgesinde kalmayacak gibi gözüküyor.Kıyamet sonrası atmosferinde Amerika yangın yeridir. Bir baba ve oğlunun istikameti Amerika kıyılarıdır. Amerika’yı bir uçtan bir uca geçerken ellerindeki basit tüfekle yaşadıkları macerada esas problem zor hava koşullarında nereye gittiklerini bilmemeleri ve yollarına çıkan haydutlardır. Film bilim kurgu türünde olmasına rağmen Western türünde de öğeler taşımaktadır.\n\n",
      price: "11",
      id: 65
    },
    {
      name: "Sihirbaz (2006)",
      rating: "7.3",
      imageURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/4I1oOPHNrHLcvz3wTMuETJLws9z.jpg",
      overview: "Marangoz bir ailenin oğlu olan Eisenheim (Edward Norton), aristokrat bir ailenin kızı Sophia'ya (Jessica Biel) aşık olur; ancak sosyal konumları nedeniyle ilişkilerinin yasaklanması sonucu Avusturya'yı terk ederek dünyayı keşfe çıkar. Eisenheim15 yıl sonra ünlü bir illüzyonist olarak isim yapmıştır; ülkesine döndüğünde eski sevgilisi Sophie Avusturya-Macaristan veliaht prensi Leopold (Rufus Sewell) ile nişanlanmak üzeredir.\n\n",
      price: "6.7",
      id: 66
    },
    {
      name: "Vol-i (2008)",
      rating: "8",
      imageURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hbhFnRzzg6ZDmm8YAmxBnQpQIPh.jpg",
      overview: "Harap edilmiş, kirli ve kuru bir dünyadayız. Yüz yıllar önce bütün insanlar, çevrenin kesintisiz suistimali yüzünden yaşanamaz hale gelen dünyayı BnL isimli bir mega şirketin inşa ettiği uzay gemileri ile terk etmiştir.Bu dünyayı temizlemekle yükümlü robotların halen çalışan tek üyesi Wall-E’nin (Waste Allocation Load Lifter – Earth class) çöp toplamak ve düzenlemekle dolu monoton iş gününü izliyoruz. Geçen 700 sene içinde kendine ait bir kişilik üreten Wall-E, günün sıkıcılığını ilginç bulduğu eşyaları toplayarak ve tek arkadaşı hamam böceği ile oynayarak dindirir. Wall-E, işten dönünce akşamlarını Hello Dolly’nin VHS kopyasını izleyerek ve umutlu gözlerle (veya dürbünlerle) uzaya bakarak geçirmektedir. Amacı, bir gün başka bir robota aşık olmak ve filmde gördüğü el tutuşma sahnesini o robotta denemektir...\n\n",
      price: "3",
      id: 67
    },
    {
      name: "Hayat Güzeldir (1997)",
      rating: "8.5",
      imageURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6giY0DEGQ1Jbf6vLGQsHgi6gBh8.jpg",
      overview: "1930’ların İtalya’sında geçen filmde hayat dolu bir Yahudi muhasebeci olan Guido Orefice (Roberto Benigni), güzeller güzeli öğretmen Dora’ya (Nicoletta Braschi) vurulur ve tüm engellere rağmen evlenirler. Ardından bir de çocuk sahibi olan çiftin hayatlarındaki tüm pürüzler ortadan kalktığında İkinci Dünya Savaşı patlak verir ve Almanlar İtalya’yı esir alır. Yahudi oldukları için toplama kampına götürüldüklerinde Guido, oğlu Giosué’ye (Giorgio Cantarini) esir kampının ve savaşın bir oyun olarak söyleyecek; oğlu, oyunu başarıyla tamamlarsa ödül olarak çok istediği bir oyuncak tankı hediye edecektir.\n\n",
      id: 68
    },
    {
      name: "Umudunu Kaybetme (2006)",
      rating: "7.9",
      imageURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/f6l9rghSHORkWLurUGJhaKAiyjY.jpg",
      overview: "The Pursuit of Happyness/Umudunu Kaybetme’de, Chris Gardner iki yakasını bir araya getirmeye çalışan bir aile babasıdır. Ailesini ayakta tutmak için cesurca çabalamasına rağmen, beş yaşındaki oğlu Christopher’ın annesi maddi zorlukların yarattığı sürekli baskı altında direncini kaybetmek üzeredir. Artık dayanamayacağını anlayınca, istemeye istemeye evi terk eder...Artık bekar bir baba olan Chris, yılmadan, bildiği tüm satış becerilerini kullanarak daha iyi kazandıran bir işin peşine düşer. Prestijli bir borsa şirketinde stajyerlik bulur ve ücret almasa da programın sonunda iş ve parlak bir gelecek elde edeceğini umarak kabul eder. Parasal güvencesi olmayan Chris ve oğlu, kısa süre sonra oturdukları daireden çıkartılırlar ve düşkünler evi, otobüs durağı, tuvalet; geceyi geçirmek için bulabildikleri her yerde kalırlar.\n\n",
      price: "40",
      id: 69
    },
    {
      name: "Aşk (2014)",
      rating: "8",
      imageURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/yk4J4aewWYNiBhD49WD7UaBBn37.jpg",
      overview: "Theodore Twombly (Joaquin Phoenix) hayatını, yakın gelecekte nadir bulunan bir şeye dönüşmüş olan el yazımı mektuplar yazarak kazanmaktadır. Ve bu yıllarda insanların işlerini artık bilgisayar programları yerine getirmektedir. Theodore, karısından boşandıktan sonra bir apartman dairesinde tek başına yaşamaya başlar ve bir gün karşılaştığı bir teknoloji reklamıyla birlikte hayatı değişir. Kusursuz bir yapay zeka programı sunan yeni bir işletim sistemi, onu son derece çekici bir kadın olan Samantha (Scarlett Johansson) ile tanıştırır. Sanal bir varlık olan ve sadece bir sesten ibaret olan Samantha, Theodore'u dünya ve hayat üzerine sorduğu sorularla birlikte bambaşka bir gerçeklikle tanıştırır. Ağır bir depresyonun içerisinde olan Theodore, yavaş yavaş hayatın keyifli yanlarını fark etmeye başlarken yapay zeka programıyla arasındaki ilişki de gitgide tuhaflaşır.\n\n",
      price: "14.99",
      id: 70
    },
    {
      name: "Mary ve Max (2009)",
      rating: "7.8",
      imageURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/jcjCbXWUk4cxXG7k7yvgXKwprb4.jpg",
      overview: "Avusturalyalı 8 yaşındaki küçük Mary, alkolik bir anne ile ilgisiz bir babanın meraklı ve bir o kadar da yalnız kızıdır. Amerikalı Max ise 44 yaşında ve muzdarip olduğu Asperger sendromundan ötürü dış dünyayı anlamakta ve çevresiyle iletişim kurmakta zorluk yaşayan bir diğer yalnız insandır. Bir mektup arkadaşlığı, bu iki insanın birbirlerini tanımasını ve birbirlerinin hayatlarını değiştirmesini sağlar.\n\n",
      id: 71
    },
    {
      name: "Don't F**k with Cats: Hunting an Internet Killer (2019)",
      rating: "7.8",
      imageURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/Crc4XkhLddMTNJfj1iLca0w1Bb.jpg",
      overview: "Türkçe'ye çevrilmiş bir özet henüz bulunmuyor. Film için bir tane ekleyerek katkıda bulunabilirsiniz.\n\n",
      price: "34",
      id: 72
    },
    {
      name: "tom and jerry",
      rating: "9",
      imageURL: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6KErczPBROQty7QoIsaa6wJYXZi.jpg",
      overview: "tehmine and Nezrin",
      price: "12",
      id: 73
    }
  ],
  cart: [],
  currentItem: null,
}


const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // case "SET_CURRENT_CART":
    //   return {
    //     ...state,
    //     cart: action.payload
    //   };
      case actionTypes.ADD_TO_CART:
        // Great Item data from products array
        const item = state.movies.find(
          (movie) => movie.id === action.payload.id
        );
        // Check if Item is in cart already
        const inCart = state.cart.find((item) =>
          item.id === action.payload.id ? true : false
        );
  
        return {
          ...state,
          cart: inCart
            ? state.cart.map((item) =>
                item.id === action.payload.id
                  ? { ...item, qty: item.qty + 1 }
                  : item
              )
            : [...state.cart, { ...item, qty: 1 }],
        };
      case actionTypes.REMOVE_FROM_CART:
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload.id),
        };
      case actionTypes.ADJUSTY_QTY:
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, qty: + action.payload.qty }
              : item
          ),
        };
      case actionTypes.LOAD_CURRENT_ITEM:
        return {
          ...state,
          currentItem: action.payload,
        };
      default:
        return state;
  }
}

export default cartReducer;