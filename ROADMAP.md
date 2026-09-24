# Sonrakı işlər

Bu fayl hazırkı saytdan sonra edilməli və edilməsi daha yaxşı olan işləri saxlayır. İctimai saytın davranışı `README.md` faylındadır.

## Edilməlidir

- İctimai səhifələr Payload-dan oxumalıdır. İndi ziyarətçi kodda duran mətni görür, admin paneldə dəyişən mətn sayta özü keçmir.
- İlk admin hesabının rolu standart olaraq `admin` olmalıdır. İndi forma `editor` təklif edir və bu rol istifadəçini silə bilmir.
- `/admin` ilk açılışda Payload üslubu olmadan xam forma kimi görünə bilər. Admin CSS-in həmişə yükləndiyini yoxlamaq lazımdır.
- Əlaqə forması mesajı yalnız lokal `data/inquiries.jsonl` faylına yazır. Serverless hostda bu fayl qalıcı deyil. Təsdiqlənmiş poçt qutusu və ya qalıcı saxlama lazımdır.
- `NEXT_PUBLIC_PLATFORM_URL` şirkət ünvanı verəndə `Enter AzevsmAI` həmin ünvana açılmalıdır.
- Hüquqi ünvan, yurisdiksiya və rəhbərlik yalnız şirkət təsdiqləyəndə dərc olunmalıdır. İndi bu sahələr boş saxlanılır.
- Beş dildəki Plus adları işlək tərcümədir. Hüquq və məzmun yoxlanışından keçməyən ad istehsal nəşrinə çıxmamalıdır.
- İstehsal hostu `http` ünvanını `https`-ə yönəltməli, HSTS yalnız HTTPS-də açılmalıdır.
- `payload.db` və əlaqə jurnalının gündəlik nüsxəsi alınmalıdır. Bərpa bir dəfə yoxlanmalıdır.
- Əvvəlki deploy-a qayıtma addımı hostda bilinməlidir.

## Etsək daha yaxşı olar

- Sorğu limiti indi proses yaddaşındadır. Birdən çox server nüsxəsində limit paylaşılmır. Host miqyaslananda ortaq limit lazımdır.
- Açıq qrafik şəkli statikdir. Səhifəyə görə ayrıca, amma səliqəli kart daha düzgün paylaşım verir.
- Hero şəkli concept-dən kəsilib və köhnə yazı bulanıqlaşdırılıb. Yazısız orijinal ofis şəkli daha təmiz olar.
- Loqo verilən faylın SVG izidir. Rəsmi vektor fayl gələndə onunla əvəz olunmalıdır.
- Köməkçi açar sözlə işləyir. Bu, faktı modelə həvalə etməmək üçün düzgündür. Sual örtüyü genişləndikcə cavablar yenə yalnız dərc olunmuş mənbədən gəlməlidir.
- Xəta izləmə və analitika spesifikasiyaya görə təsdiqsiz qoşulmamalıdır. Lazım olanda əvvəl məxfilik baxışı keçməlidir.
- `npm run dev` iki dəfə işə salınanda `.next/trace` kilidlənir. Bir development prosesi kifayətdir.

## Texnologiya

Next.js qalmalıdır. Beş dil, axtarış və server yoxlaması üçün uyğundur.

Payload qala bilər, çünki nəşr axını və beş dil sahəsi layihənin içindədir. Onu Sanity və ya Contentful ilə dəyişmək yalnız ayrıca redaktor komandası hər gün paneldə işləyəcəksə məna daşıyır.

SQLite lokal və tək server üçündür. Vercel kimi çox nüsxəli hostda admin bazası qalıcı olmur. Admin orada işləyəcəksə eyni Payload qalmalı, baza Postgres olmalıdır.

Köməkçiyə ümumi söhbət modeli bağlamaq düzgün deyil. Model yalnız təsdiqlənmiş mətnin cümləsini qura bilər, faktın mənbəyi ola bilməz.

## Düzəliş gözləyənlər

- Development keşi yarımçıq silinəndə `prerender-manifest.json` və ya boş JSON xətası çıxır. `.next` qovluğu silinib server bir dəfə yenidən açılmalıdır.
- Windows bayraq emojisini hərf kodu kimi göstərir. Dil seçicisində buna görə SVG bayraq istifadə olunur. Yeni əməliyyat sistemində də SVG qalmalıdır.
- Ana səhifənin qalan bloklarında kart hündürlüyü və düymə aralığı yoxlanmalıdır. Sistem zənciri, məhsul kartları və bağlanış bloku artıq bir dəfə düzəldilib.
- `next build` lokal mühitdə Google şriftini yükləyə bilməyəndə bir dəfə yenidən işə salınmalıdır. İstehsal hostunda şriftin yığıldığını yoxlamaq lazımdır.
