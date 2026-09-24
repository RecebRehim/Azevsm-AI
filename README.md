# AzevsmAI Systems

AzevsmAI Systems üçün korporativ sayt. Bu, ayrıca marketinq layihəsi deyil. O, AzevsmAI platformasının ilk xarici toxunuşudur və Institutional × Premium standartını özü göstərməlidir.

Sayt şirkəti, platformanı, məhsulları və AzeVSM AI arxitekturasını bir-birindən ayırır. Qiymətləndirməni tək skor və ya sərbəst söhbət kimi təqdim etmir. Nəticə sübutdan izaha gedən idarə olunan zəncir kimi izah olunur.

## Nə edildi

- Beş dildə korporativ sayt: Azərbaycan, English, العربية, 中文, Русский. Ərəb dili sağdan sola düzülür.
- Concept homepage: ağ header, dil seçimi, hero və loqo paneli.
- Ana səhifənin 11 bloku: problem, sistem, məhsullar, AzeVSM AI, White Box, standart, etibar, auditoriya, şirkət və bağlanış.
- Platform, üç məhsul ailəsi və Azevsm Plus-un 7 servisi. Servis kodları görünən ad əvəzinə istifadə olunmur.
- Technology, White Box / Standard, Trust, Company, Insights, Contact və hüquqi səhifələr.
- Payload CMS: beş dil, qaralama → yoxlama → təsdiq → nəşr, boş adın nəşrini bloklayan qayda.
- İctimai dəstək köməkçisi. Yalnız dərc olunmuş məlumatdan danışır. Formul, qiymət və qiymətləndirmə suallarında fakt uydurmur.
- Axtarış metadataları, sitemap, `hreflang`, təhlükəsizlik başlıqları, kuki bildirişi və xəta səhifələri.

Təsdiqlənməmiş qiymət, müştəri, sertifikat, hüquqi ünvan və platforma ünvanı uydurulmayıb.

## Ünvanlar

Bütün ictimai səhifələr dil prefiksi ilə açılır: `/az`, `/en`, `/ar`, `/zh`, `/ru`.

| Ünvan | Nə üçündür |
| --- | --- |
| `/[dil]` | Ana səhifə |
| `/[dil]/platform` | AzevsmAI platforması |
| `/[dil]/products` | Üç məhsul ailəsi |
| `/[dil]/products/azevsm-index` | Azevsm Index |
| `/[dil]/products/azevsm-institutional-index` | Azevsm Institutional Index |
| `/[dil]/products/azevsm-plus` | Azevsm Plus icmalı |
| `/[dil]/products/azevsm-plus/[servis]` | Plus servisinin tam ictimai adı |
| `/[dil]/technology` | AzeVSM AI arxitekturası |
| `/[dil]/white-box` | İzah və standart |
| `/[dil]/trust` | Etibar, idarəetmə və təhlükəsizlik sərhədi |
| `/[dil]/company` | Şirkət |
| `/[dil]/insights` | İctimai qeydlər |
| `/[dil]/contact` | Əlaqə və tərəfdaşlıq |
| `/[dil]/enter` | Platforma girişi. Ünvan təyin olunmayıbsa uydurulmur |
| `/[dil]/legal/privacy` | Məxfilik |
| `/[dil]/legal/terms` | Şərtlər |
| `/[dil]/legal/cookies` | Kukilər |
| `/[dil]/legal/security` | Təhlükəsizlik |
| `/[dil]/legal/accessibility` | Əlçatanlıq |
| `/admin` | Payload redaktor paneli |
| `/studio` | Nəşr və dil qapılarının yoxlaması |
| `/api/contact` | Əlaqə forması |
| `/api/assistant` | Sayt dəstək köməkçisi |

## Texnologiyalar və səbəb

| Texnologiya | Nə üçün |
| --- | --- |
| Next.js | Serverdə yığılan səhifə, beş dil, axtarış metadatası və sürətli ilk görüntü |
| React | Komponentlər, dil menyusu və köməkçi |
| Payload CMS | Beş dil sahəsi, nəşr axını və redaktor paneli layihənin içində qalsın |
| SQLite | Lokal və tək serverdə Payload bazası əlavə servis olmadan işləsin |
| TypeScript | Mətn, servis adı və nəşr qaydası səhv tipdə keçməsin |

İctimai səhifələr hazırda kodda duran təsdiqli mətndən oxunur. Payload həmin mətnin redaktor nüsxəsidir.

## İşə salmaq

```bash
npm install
npm run dev
```

Sayt `http://localhost:3000/en` ünvanında açılır. `npm run dev` eyni anda iki dəfə işə salınmamalıdır. İkinci proses `.next` keşini kilidləyir.

İstehsal yoxlaması:

```bash
npm run build
```

Məzmun qapısı:

```bash
npm run check:content
```

Redaktor bazasını doldurmaq üçün əvvəl development serveri açıq olmalıdır:

```bash
npm run seed
```

## Mühit dəyişənləri

Nümunə `.env.example` faylındadır.

| Dəyişən | Mənası |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Saytın ictimai ünvanı. İstehsalda localhost ola bilməz |
| `NEXT_PUBLIC_PLATFORM_URL` | AzevsmAI platformasının girişi. Boşdursa ünvan uydurulmur |
| `PAYLOAD_SECRET` | Admin sessiyasının sirri. İstehsalda məcburidir |
| `DATABASE_URL` | Payload bazası. Lokal nümunə: `file:./data/payload.db` |
