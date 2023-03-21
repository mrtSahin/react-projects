25:
login için validation eklendi(locale storage dan alınan veri ile)
formik ile form kontrolü ve yup ile validation eklendi
private route eklendi artık olcale storage da user değeri tanımlıysa(daha önceden login yapılmışsa) direkt dashboardı açıyor. eğer önceden giriş yapılmamışsa direkt login ekranına yönlendiriyor
26:
normalde api bize sadece 10 tane veri yolluyodu. O page ve pageSize ile çözüldü
çıkış butonu menuye geçirildi
menuye kullanıcı ismi eklendi
characters Characters componentine yollandı
28:
menu de bug çözüldü(locale storage da kullanıcı olmadığı halde split yaptığından sekmeyi hiç açmıyordu. varlığı sorgulandıktan sonra yapılıyor artık)
kullanıcı giriş yaptıktan sonra geri tuşuna basarak login ekranına gelebilir. bir kişi login ekranına gelmişse giriş yapmak için gelmiştir.
	biz çıkış butonu ile localeStorage dan giriş yapmış olan kullanıcının bilgilerini kaldırıyoruz ama geri tuşu ile login ekranına gelince localestorage da hala bir kullanıcı bilgisi yer almaktadır.
	bunu silmek için login ekranı ilk kez render edildiğinde bu işlemi yapıyoruz.
	bu durumda çıkış tuşuna basınca hem Menu cpmponentindeki cikisButtonHandle medodunda hem de Login ekranı ilk kez render edildiğinde bir silme işlemi gerçekleşmiş oluyor bunun için de Menu componentinde bu işlemi yapmıyoruz.
Characters de kullanıcı isimleri axios.all ile alındı. ve CharacterDetails a Link açılıp url ve name gitti
Characters e kullanıcı BooksDetails dan da gidebiliyor Characters butonu ile de gidebiliyor. Characters butonu ile gittiğinde BooksDetails dan geldiği gibi karakterler gelmiyor. Bunun için Charactersilk render eildiğinde
	BooksDetails dan veri gelip gelmediğ kontrol ediliyor ve buna göre fetch işlemi BooksDetails den gelen karakter url dizisi ile ya da apinin verdiği characters apisiyle yapılıyor
Sayfalara Yükleniyor kısmı eklendi
PrivateRoute ile localeStorage dan kullanıcının daha önceden giriş yapıp yapmadığına bakarak; eğer yapmamışsa login sayfasına yönlendiriyoruz. normalde index sayfa olarak George componenti olduğu için Bu sayfayı PrivateRoute 
	içine almıştım ama kullanıcı Books sayfasındayken çıkış yaptıktan sonra gerş tuşuna basınca Books sayfasına geri yönlendiriyordu. çünkü sadece George saysafında kullanıcının daha öne giriş yapıp yapmadığı kontrol ediliyordu. 
	Bu kontrolün diğer sayfalarıda  kapsaması için Dashboar layoutunu Privateroute içerisine aldık.
05.03:
kullanıcı BookkDetails dan geldiğinde bir karkter dizisi dönüyor. BU listedeki elemanları gösteriyor. Eğer direkt Characters butonu ile gelmişsa 
	BookDetails dan bir dizi gelmediği için tüm karakterleri gösterecektir. AMA KULLANICI BOOKDETAİLS DAN GELDİKTEN SONRA CHARACTERS BUTONUNA BASINCA 
	CHARACTERS ELEMANININ İÇİ BOŞALMIYOR BUNU BOŞALTMAMIZ LAZIM.
	HALLEDİLDİ: 
Characters butonu ile girişte pageId kontrolü eklendi. Artık önceki ve sonraki butonları ile tüm karakterlere sayfa bazında ulaşılabiliyor.
önceki ve sonraki butonlarına pageId sayı sınırlandırması getirildi. sayfa sayısını aşmaması için
Characters sekmesinde hangi kitabın karakterlerinin gösterildiği bilgisi eklendi. BookDetails ve Menu den state te bookName ile eklendi
auth layoutuna css eklendi  YÜKSEKLİK AYARI YAPILACAK VH YAPINCA KÜÇÜLTÜNCE SIKINIT ÇIKYOR
