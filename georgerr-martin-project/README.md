router<br/>
useParams<br/>
useNavigate<br/>
useLocation<br/>

layout<br/>

axios<br/>

https://anapioficeandfire.com/api/<br/>
	{<br/>
	"books": "https://anapioficeandfire.com/api/books",<br/>
	"characters": "https://anapioficeandfire.com/api/characters",<br/>
	"houses": "https://anapioficeandfire.com/api/houses"<br/>
	}<br/>
<br/>

karakter bilgisi<br/>
	name<br/>
	gender<br/>
	aliases - takma ad<br/>
	titles - ünvan<br/>
<br/>
YAPILDI çıkış yaptıktan sonra geri tuşuna basınca dashboarda girmemeli. giriş yapılmasını istemeli<br/>
dashboard da nerden geri geldiğini sorgulayarak if ile tekrar login ekranına yönlendirebiliriz.<br/>

25:
login için validation eklendi(locale storage dan alınan veri ile)-
formik ile form kontrolü ve yup ile validation eklendi-
private route eklendi artık olcale storage da user değeri tanımlıysa(daha önceden login yapılmışsa) direkt dashboardı açıyor. eğer önceden giriş yapılmamışsa direkt- login ekranına yönlendiriyor
<br/>
26:
normalde api bize sadece 10 tane veri yolluyodu. O page ve pageSize ile çözüldü-
çıkış butonu menuye geçirildi-
menuye kullanıcı ismi eklendi-
characters Characters componentine yollandı
<br/>
28:
menu de bug çözüldü(locale storage da kullanıcı olmadığı halde split yaptığından sekmeyi hiç açmıyordu. varlığı sorgulandıktan sonra yapılıyor artık)-
kullanıcı giriş yaptıktan sonra geri tuşuna basarak login ekranına gelebilir. bir kişi login ekranına gelmişse giriş yapmak için gelmiştir.
	biz çıkış butonu ile localeStorage dan giriş yapmış olan kullanıcının bilgilerini kaldırıyoruz ama geri tuşu ile login ekranına gelince localestorage da -hala bir kullanıcı bilgisi yer almaktadır.
	bunu silmek için login ekranı ilk kez render edildiğinde bu işlemi yapıyoruz.
	bu durumda çıkış tuşuna basınca hem Menu cpmponentindeki cikisButtonHandle medodunda hem de Login ekranı ilk kez render edildiğinde bir silme işlemi gerçekleşmiş oluyor bunun için de Menu componentinde bu işlemi yapmıyoruz.-
Characters de kullanıcı isimleri axios.all ile alındı. ve CharacterDetails a Link açılıp url ve name gitti-
Characters e kullanıcı BooksDetails dan da gidebiliyor Characters butonu ile de gidebiliyor. Characters butonu ile gittiğinde BooksDetails dan geldiği gibi karakterler gelmiyor. Bunun için Charactersilk render eildiğinde
	BooksDetails dan veri gelip gelmediğ kontrol ediliyor ve buna göre fetch işlemi BooksDetails den gelen karakter url dizisi ile ya da apinin verdiği characters apisiyle yapılıyor-
Sayfalara Yükleniyor kısmı eklendi
PrivateRoute ile localeStorage dan kullanıcının daha önceden giriş yapıp yapmadığına bakarak; eğer yapmamışsa login sayfasına yönlendiriyoruz. normalde index sayfa olarak George componenti olduğu için Bu sayfayı PrivateRoute 
	içine almıştım ama kullanıcı Books sayfasındayken çıkış yaptıktan sonra gerş tuşuna basınca Books sayfasına geri yönlendiriyordu. çünkü sadece George saysafında kullanıcının daha öne giriş yapıp yapmadığı kontrol ediliyordu. 
	Bu kontrolün diğer sayfalarıda  kapsaması için Dashboar layoutunu Privateroute içerisine aldık.
<br/>
05.03:
kullanıcı BookkDetails dan geldiğinde bir karkter dizisi dönüyor. BU listedeki elemanları gösteriyor. Eğer direkt Characters butonu ile gelmişsa 
	BookDetails dan bir dizi gelmediği için tüm karakterleri gösterecektir. AMA KULLANICI BOOKDETAİLS DAN GELDİKTEN SONRA CHARACTERS BUTONUNA BASINCA 
	CHARACTERS ELEMANININ İÇİ BOŞALMIYOR BUNU BOŞALTMAMIZ LAZIM.
	HALLEDİLDİ: 
Characters butonu ile girişte pageId kontrolü eklendi. Artık önceki ve sonraki butonları ile tüm karakterlere sayfa bazında ulaşılabiliyor.-
önceki ve sonraki butonlarına pageId sayı sınırlandırması getirildi. sayfa sayısını aşmaması için
Characters sekmesinde hangi kitabın karakterlerinin gösterildiği bilgisi eklendi. BookDetails ve Menu den state te bookName ile eklendi
auth layoutuna css eklendi  


![login](https://github.com/mrtSahin/react-projects/assets/92647890/30445ee0-f6d8-4967-9b9d-3769938ba3cb)
![signin](https://github.com/mrtSahin/react-projects/assets/92647890/a561cdef-07c1-4c52-a28a-41c88fd5a005)
![books](https://github.com/mrtSahin/react-projects/assets/92647890/61c3f4df-f40e-4dde-b1c0-90aa8c36c4f2)
![books2](https://github.com/mrtSahin/react-projects/assets/92647890/36abe674-3fc2-4fcc-a8fa-fff6efa14655)
![karakters](https://github.com/mrtSahin/react-projects/assets/92647890/2c69312e-8b95-4594-b28a-30d1e5f3da83)
![karakter details](https://github.com/mrtSahin/react-projects/assets/92647890/ebb12721-0f7a-450d-b2c1-2bb879f85028)
