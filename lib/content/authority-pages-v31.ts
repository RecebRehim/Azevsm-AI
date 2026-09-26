import type { Locale } from "@/lib/i18n";

export type AuthorityLocale = "en" | "az" | "ru";
export type AuthorityPageKey =
  | "resultSystem"
  | "difference"
  | "indexField"
  | "validation"
  | "dataSecurity"
  | "legalCompliance";

type Action = { label: string; href: string };
type Block =
  | { type: "heading"; text: string; id?: string }
  | { type: "p"; text: string }
  | { type: "list"; items: string[] }
  | { type: "note"; title: string; body: string }
  | { type: "table"; rows: string[][]; header?: boolean };

export type AuthorityPage = {
  title: string;
  lead: string;
  blocks: Block[];
  actions: Action[];
};

export function isAuthorityLocale(locale: Locale): locale is AuthorityLocale {
  return locale === "en" || locale === "az" || locale === "ru";
}

export const authorityRouteLabels: Record<AuthorityLocale, Record<AuthorityPageKey, string>> = {
  en: {
    resultSystem: "Result System",
    difference: "How AzevsmAI Is Different",
    indexField: "Index Field & Investor Ecosystem",
    validation: "Validation & Reproducibility",
    dataSecurity: "Data Security",
    legalCompliance: "Legal & Compliance",
  },
  az: {
    resultSystem: "Nəticə sistemi",
    difference: "AzevsmAI nə ilə fərqlənir",
    indexField: "İndeks sahəsi və investor ekosistemi",
    validation: "Yoxlama və təkrarlana bilmə",
    dataSecurity: "Məlumatların təhlükəsizliyi",
    legalCompliance: "Hüquq və komplayens",
  },
  ru: {
    resultSystem: "Система результата",
    difference: "Чем отличается AzevsmAI",
    indexField: "Индексное поле и инвесторская экосистема",
    validation: "Проверка и воспроизводимость",
    dataSecurity: "Безопасность данных",
    legalCompliance: "Право и комплаенс",
  },
};

const pages: Record<AuthorityLocale, Record<AuthorityPageKey, AuthorityPage>> = {
  en: {
    resultSystem: {
      title: "One Assessment. A System of Results.",
      lead: "The client receives not only a final document, but a coherent environment of materials built around one fixed analytical result.",
      blocks: [
        { type: "p", text: "In a traditional project, the outcome often ends with a single report. In AzevsmAI, the calculated result becomes the basis for several client-facing representations, each serving a different purpose: quickly understanding the outcome, examining the evidence base, presenting conclusions to management, navigating the structure of the result, or working with a digital model." },
        { type: "heading", text: "What the result system may include", id: "result-system-components" },
        { type: "table", header: true, rows: [
          ["Component", "Purpose", "Component", "Purpose"],
          ["Fixed result", "The core analytical outcome linked to a specific rules version and execution.", "Analytical report", "An expanded presentation of the result, observations, limitations, and authorized analytical conclusions."],
          ["Executive brief", "A concise representation for management, a committee, or another decision-maker who needs the substance without the full volume of materials.", "Evidence and traceability dossier", "Materials showing the substantiated basis on which the result was formed."],
          ["Result passport", "Compact identification of the result, its version, context, and applicable boundaries.", "Presentation and navigator", "Formats for discussion, internal communication, and convenient navigation through the result structure."],
          ["Digital analytical model", "An interactive representation of the result structure in products and packages where this is provided.", "White Box", "Controlled explanation of the authorized part of an already obtained result without disclosure of protected methodology or AzeVSM AI internal technology."],
        ]},
        { type: "heading", text: "Why this matters" },
        { type: "p", text: "The same result may be used in different ways: a founder needs a readiness review, an investor needs comparable screening, an executive needs a concise picture, an analytical team needs evidence depth, and a committee needs material for discussion. AzevsmAI does not create a different version of the truth for each audience: the different representations remain tied to the same calculation." },
        { type: "p", text: "Depending on the product, the result system may continue in the client cabinet, the digital model, and the controlled Index Field ecosystem." },
      ],
      actions: [
        { label: "Find the right product", href: "/products" },
        { label: "View the composition of the result system", href: "#result-system-components" },
      ],
    },
    difference: {
      title: "Not More Text. More Analytical Structure.",
      lead: "AzevsmAI differs from generative and LLM-based approaches in how the analytical result is formed and fixed: AzeVSM AI belongs to the VSM class, while the calculated outcome is governed by evidence, methodology, and product mathematics rather than free-form text generation.",
      blocks: [
        { type: "p", text: "The market includes many useful tools: databases, ratings, generative systems, expert assessment, and consulting. AzevsmAI does not attempt to replace all of them with one universal category. It addresses a different layer: structured, reproducible, evidence-linked assessment that can be scaled and used as a basis for subsequent decisions." },
        { type: "heading", text: "Two different classes of result" },
        { type: "table", header: true, rows: [
          ["Approach", "Result logic"],
          ["Conventional generative workflow", "Input → free-form language-model generation → generated output"],
          ["AzevsmAI", "Evidence-linked structured input → governed methodology and calculation → fixed, verifiable analytical result"],
        ]},
        { type: "table", header: true, rows: [
          ["Approach", "Strength of the category", "What AzevsmAI adds"],
          ["General-purpose generative system", "Fast summarization, formulation, and text work.", "A VSM-class AzeVSM AI calculated result that is not an LLM-generated output."],
          ["Database or information platform", "Search, storage, and organisation of large volumes of information.", "Assessment of a specific object and formation of an analytical state based on substantiated data."],
          ["Rating", "Fast comparison on a simple scale.", "A deeper result structure, evidence base, and system of client materials."],
          ["Traditional consulting", "Deep expert work with context and an individual task.", "A standardized technological analytical cycle, reproducibility, and the ability to scale initial analysis."],
          ["Manual expert assessment", "Specialist experience and professional judgement.", "Reduced dependence of the result on who performs the first analytical pass."],
        ]},
        { type: "heading", text: "The key difference" },
        { type: "p", text: "The AzeVSM AI calculation result is not generated by an LLM and does not depend on free-form language-model generation. The client receives a fixed, reproducible, evidence-linked analytical result formed within the methodology and product mathematics and then presented at authorized levels of depth." },
      ],
      actions: [
        { label: "Find the right product", href: "/products" },
        { label: "View the result system", href: "/result-system" },
      ],
    },
    indexField: {
      title: "The Result Can Continue to Work After the Assessment Is Complete",
      lead: "A controlled digital environment for authorized representation of assessed objects and interaction with the investor side.",
      blocks: [
        { type: "heading", text: "Index Field" },
        { type: "p", text: "After the assessment is complete, the result may continue to operate within the controlled AzevsmAI digital environment. With the assessed party’s consent, it may be used for authorized representation to investors and institutional participants while preserving established visibility and access boundaries." },
        { type: "heading", text: "What this gives the assessed object" },
        { type: "p", text: "A startup or company can use the result not only as an internal document, but also as part of a governed external representation. Visibility and the ability to make contact are determined by platform rules and by the assessed party’s own consent." },
        { type: "heading", text: "What this gives the investor side" },
        { type: "p", text: "For authorized participants, Azevsm Index can serve as an additional layer of structured screening. The investor sees not a promotional showcase, but only the scope of representation permitted by the applicable mode." },
        { type: "heading", text: "Who is part of the ecosystem" },
        { type: "list", items: ["private participants and business angels in applicable routes;", "institutional investors and funds;", "corporate strategic participants;", "government, sovereign, and programme organisations in authorized modes."] },
        { type: "heading", text: "Contact only by permission" },
        { type: "p", text: "Contact is possible only within an authorized mode and with the assessed party’s consent. The Index Field is not a public rating, brokerage platform, investment catalogue, or system of investment recommendations." },
      ],
      actions: [
        { label: "Discuss an investor scenario", href: "/contact" },
        { label: "View Azevsm Index", href: "/products/azevsm-index" },
      ],
    },
    validation: {
      title: "The Result Should Depend on the Data and Rules, Not on the Name of the Operator",
      lead: "Control series test repeatability of the calculation, sensitivity to input data, and independence of the result from the execution environment.",
      blocks: [
        { type: "p", text: "Controlled historical tests were conducted for Azevsm Index using fixed input packages. Independent execution environments received the same materials and the same version of the rules. The purpose was to test whether the calculated result remained stable when the operator changed and whether the system identified input-data problems instead of silently smoothing them over." },
        { type: "heading", text: "What the tests showed" },
        { type: "list", items: ["reproducibility of the calculation process across independent environments;", "the ability to independently identify the same defect in an input package;", "separation of maturity stage, quality, and risk;", "the ability to follow a structured evidence picture rather than brand recognition or market narrative."] },
      ],
      actions: [
        { label: "Request a demonstration", href: "/contact" },
        { label: "View the technology", href: "/technology" },
      ],
    },
    dataSecurity: {
      title: "Client Materials Do Not Become Subject to Arbitrary Internal Review",
      lead: "Processing, storage, and access are organized through protected and role-based environments.",
      blocks: [
        { type: "heading", text: "Controlled processing" },
        { type: "p", text: "Uploaded documents, responses, and derived data remain within the platform’s protected environment. Operational access is limited by role and task; an ordinary employee does not receive the right to read raw client materials at will or use them to manually adjust the result." },
        { type: "heading", text: "Protection of storage and transmission" },
        { type: "p", text: "The architecture provides for encryption of data at rest and in transit, role-based access control, prohibition of public access to internal storage, and separation of client files, reporting artifacts, logs, and backups." },
        { type: "heading", text: "Two approaches to the data lifecycle" },
        { type: "p", text: "The standard mode retains data under the established retention, archiving, and deletion policy. For sensitive institutional scenarios, a minimized-retention mode is provided: after processing is complete, the volume of source and intermediate client materials is reduced to the minimum necessary, while only the required final and mandatory records are retained within the applicable contractual, legal, security, and audit framework." },
        { type: "heading", text: "Payment data" },
        { type: "p", text: "Raw card details, security codes, banking passwords, and confirmation codes do not enter the internal AzevsmAI environment. Where card payments are used, payment data is entered on the protected side of the payment provider." },
        { type: "note", title: "Controlled access and audit", body: "Access to client materials is limited by role and task, and significant access and security events are subject to logging. Client data is not a generally accessible internal company resource." },
      ],
      actions: [
        { label: "Discuss data requirements", href: "/contact" },
        { label: "View the principles of trust", href: "/trust" },
      ],
    },
    legalCompliance: {
      title: "Compliance Is Built Into the Service Route, Not Added After the Calculation",
      lead: "The platform takes account of legal status, jurisdiction, authority, consent, and grounds for processing where they apply.",
      blocks: [
        { type: "heading", text: "Why this matters to an institutional client" },
        { type: "p", text: "For a bank, fund, company, or government organisation, strong analytics alone are not enough: the route by which those analytics are obtained must also be compatible with applicable legal and contractual requirements. AzevsmAI links access to the service with the relevant legal and authority conditions." },
        { type: "heading", text: "Representative authority" },
        { type: "p", text: "If a user acts on behalf of a company or institution, the platform takes account of verified authority to act within the relevant scope. The form and sufficiency of the evidence are determined by the applicable mode, jurisdiction, and nature of the requested service." },
        { type: "heading", text: "Early stage" },
        { type: "p", text: "For Azevsm Index, the existence of a registered legal entity is not a universal precondition. An applicable route may be available to an individual, a founder before registration, or an applicant at the idea stage." },
        { type: "heading", text: "Jurisdictional logic" },
        { type: "p", text: "Applicable law, the country of the client, payer, and user, and the place where the service is supplied are not automatically treated as the same thing. Legal rules must be applied to the substantiated context, not to an assumption or a convenient default market." },
      ],
      actions: [
        { label: "Discuss institutional access", href: "/contact" },
        { label: "View data security", href: "/data-security" },
      ],
    },
  },
  az: {
    resultSystem: {
      title: "Bir qiymətləndirmə. Nəticələr sistemi.",
      lead: "Müştəri yalnız yekun sənəd deyil, bir sabitləşdirilmiş analitik nəticənin ətrafında qurulmuş uzlaşdırılmış materiallar mühiti əldə edir.",
      blocks: [
        { type: "p", text: "Ənənəvi layihədə nəticə çox vaxt bir hesabatla başa çatır. AzevsmAI-də hesablama nəticəsi bir neçə müştəri təqdimatının əsasına çevrilir və onların hər biri ayrıca vəzifəni həll edir: yekunu tez anlamaq, sübut bazasını öyrənmək, nəticələri rəhbərliyə təqdim etmək, nəticənin strukturu üzrə hərəkət etmək və ya rəqəmsal modellə işləmək." },
        { type: "heading", text: "Nəticə sisteminə nələr daxil ola bilər", id: "result-system-components" },
        { type: "table", header: true, rows: [
          ["Komponent", "Təyinatı", "Komponent", "Təyinatı"],
          ["Sabitləşdirilmiş nəticə", "Qaydaların konkret versiyası və konkret icra ilə əlaqələndirilmiş əsas analitik yekun.", "Analitik hesabat", "Nəticənin, müşahidələrin, məhdudiyyətlərin və icazə verilmiş analitik qənaətlərin geniş təqdimatı."],
          ["Rəhbərlik üçün qısa icmal", "Materialların tam həcmi olmadan əsas məğzi görməli olan rəhbərlik, komitə və ya digər qərarverici üçün yığcam təqdimat.", "Sübutlar və izlənəbilərlik dosyesi", "Nəticənin hansı təsdiqlənmiş əsas üzərində formalaşdığını anlamağa imkan verən materiallar."],
          ["Nəticə pasportu", "Nəticənin, onun versiyasının, kontekstinin və tətbiq olunan sərhədlərinin yığcam identifikasiyası.", "Təqdimat və naviqator", "Müzakirə, daxili kommunikasiya və nəticənin strukturu üzrə rahat keçid üçün formatlar."],
          ["Rəqəmsal analitik model", "Nəzərdə tutulduğu məhsul və paketlərdə nəticə strukturunun interaktiv təqdimatı.", "White Box", "Qorunan metodologiya və AzeVSM AI-nin daxili texnologiyası açıqlanmadan artıq əldə olunmuş nəticənin icazə verilmiş hissəsinin nəzarət olunan izahı."],
        ]},
        { type: "heading", text: "Bunun dəyəri nədir" },
        { type: "p", text: "Eyni nəticə müxtəlif məqsədlərlə istifadə oluna bilər: təsisçiyə hazırlığın təhlili, investora müqayisə edilə bilən skrininq, rəhbərə qısa mənzərə, analitik komandaya sübut dərinliyi, komitəyə isə müzakirə materialı lazımdır. AzevsmAI onların hər biri üçün ayrıca “həqiqət versiyası” yaratmır: müxtəlif təqdimatlar eyni hesablamaya bağlı qalır." },
        { type: "p", text: "Məhsuldan asılı olaraq nəticə sistemi müştəri kabinetində, rəqəmsal modeldə və nəzarət olunan İndeks sahəsi ekosistemində davam edə bilər." },
      ],
      actions: [
        { label: "Məhsulu seçmək", href: "/products" },
        { label: "Nəticə sisteminin tərkibinə baxmaq", href: "#result-system-components" },
      ],
    },
    difference: {
      title: "Daha çox mətn deyil. Daha çox analitik struktur.",
      lead: "AzevsmAI generativ və LLM əsaslı yanaşmalardan analitik nəticənin necə formalaşdırılması və sabitləşdirilməsi ilə fərqlənir: AzeVSM AI VSM sinfinə aiddir, hesablama nəticəsi isə sərbəst mətn generasiyası ilə deyil, sübutlar, metodologiya və məhsul riyaziyyatı ilə müəyyən olunur.",
      blocks: [
        { type: "p", text: "Bazarda müxtəlif faydalı alətlər mövcuddur: məlumat bazaları, reytinqlər, generativ sistemlər, ekspert qiymətləndirilməsi və konsaltinq. AzevsmAI onların hamısını bir universal kateqoriya ilə əvəz etməyə çalışmır. O, başqa bir qatı əhatə edir — miqyaslandırıla və sonrakı qərar üçün əsas kimi istifadə oluna bilən strukturlaşdırılmış, təkrarlana bilən və sübutlarla əlaqələndirilmiş qiymətləndirmə." },
        { type: "heading", text: "Nəticənin iki fərqli sinfi" },
        { type: "table", header: true, rows: [
          ["Yanaşma", "Nəticənin məntiqi"],
          ["Adi generativ sxem", "Giriş → dil modelinin sərbəst generasiyası → generasiya edilmiş çıxış"],
          ["AzevsmAI", "Sübutlarla əlaqələndirilmiş strukturlaşdırılmış giriş → idarə olunan metodologiya və hesablama → sabitləşdirilmiş, yoxlanıla bilən analitik nəticə"],
        ]},
        { type: "table", header: true, rows: [
          ["Yanaşma", "Kateqoriyanın güclü tərəfi", "AzevsmAI nə əlavə edir"],
          ["Universal generativ sistem", "Sürətli ümumiləşdirmə, ifadə formalaşdırma və mətnlə iş.", "LLM tərəfindən generasiya edilmiş çıxış olmayan, VSM sinifli AzeVSM AI hesablama nəticəsi."],
          ["Məlumat bazası və ya informasiya platforması", "Böyük həcmdə məlumatın axtarışı, saxlanması və təşkili.", "Konkret obyektin qiymətləndirilməsi və təsdiqlənmiş məlumatlar əsasında analitik vəziyyətin formalaşdırılması."],
          ["Reytinq", "Sadə şkala üzrə sürətli müqayisə.", "Nəticənin daha dərin strukturu, sübut bazası və müştəri materialları sistemi."],
          ["Klassik konsaltinq", "Kontekst və fərdi tapşırıqla dərin ekspert işi.", "Standartlaşdırılmış texnoloji analitik dövr, təkrarlana bilmə və ilkin təhlili miqyaslandırmaq imkanı."],
          ["Əl ilə ekspert qiymətləndirilməsi", "Mütəxəssisin təcrübəsi və peşəkar mülahizəsi.", "Nəticənin ilk analitik keçidi kimin yerinə yetirməsindən daha az asılı olması."],
        ]},
        { type: "heading", text: "Əsas fərq" },
        { type: "p", text: "AzeVSM AI-nin hesablama nəticəsi LLM tərəfindən generasiya edilmir və dil modelinin sərbəst generasiyasından asılı deyil. Müştəri metodologiya və məhsul riyaziyyatı çərçivəsində formalaşdırılan, sabitləşdirilmiş, təkrarlana bilən və sübutlarla əlaqələndirilmiş analitik nəticə əldə edir; nəticə daha sonra icazə verilmiş dərinlik səviyyələrində təqdim olunur." },
      ],
      actions: [
        { label: "Məhsulu seçmək", href: "/products" },
        { label: "Nəticə sisteminə baxmaq", href: "/result-system" },
      ],
    },
    indexField: {
      title: "Nəticə qiymətləndirmə başa çatdıqdan sonra da işləməyə davam edə bilər",
      lead: "Qiymətləndirilmiş obyektlərin icazə verilmiş təqdimatı və investor tərəfi ilə qarşılıqlı əlaqə üçün nəzarət olunan rəqəmsal mühit.",
      blocks: [
        { type: "heading", text: "İndeks sahəsi" },
        { type: "p", text: "Qiymətləndirmə başa çatdıqdan sonra nəticə AzevsmAI-nin nəzarət olunan rəqəmsal mühitində işləməyə davam edə bilər. Qiymətləndirilmiş tərəfin razılığı ilə o, müəyyən edilmiş görünürlük və giriş sərhədləri qorunmaqla investor və institusional tərəfə icazə verilmiş təqdimat üçün istifadə oluna bilər." },
        { type: "heading", text: "Bu, qiymətləndirilmiş obyektə nə verir" },
        { type: "p", text: "Startap və ya şirkət nəticədən yalnız daxili sənəd kimi deyil, həm də idarə olunan xarici təqdimatın bir hissəsi kimi istifadə edə bilər. Görünürlük və əlaqə imkanı platforma qaydaları və qiymətləndirilən tərəfin öz razılığı ilə müəyyən edilir." },
        { type: "heading", text: "Bu, investor tərəfinə nə verir" },
        { type: "p", text: "İcazəli iştirakçılar üçün Azevsm Index strukturlaşdırılmış skrininqin əlavə qatı kimi istifadə oluna bilər. Investor reklam vitrini deyil, yalnız müvafiq rejimlə icazə verilmiş təqdimat həcmini görür." },
        { type: "heading", text: "Ekosistemə kimlər daxildir" },
        { type: "list", items: ["tətbiq olunan marşrutlarda özəl iştirakçılar və biznes mələkləri;", "institusional investorlar və fondlar;", "korporativ strateji iştirakçılar;", "icazə verilmiş rejimlərdə dövlət, suveren və proqram strukturları."] },
        { type: "heading", text: "Əlaqə yalnız icazə ilə" },
        { type: "p", text: "Əlaqə yalnız icazə verilmiş rejimdə və qiymətləndirilən tərəfin razılığı ilə mümkündür. İndeks sahəsi açıq reytinq, broker platforması, investisiya kataloqu və ya investisiya tövsiyələri sistemi deyil." },
      ],
      actions: [
        { label: "Investor ssenarisini müzakirə etmək", href: "/contact" },
        { label: "Azevsm Index-ə baxmaq", href: "/products/azevsm-index" },
      ],
    },
    validation: {
      title: "Nəticə icraçının adından deyil, məlumatlardan və qaydalardan asılı olmalıdır",
      lead: "Nəzarət seriyaları hesablamanın təkrarlanmasını, giriş məlumatlarına həssaslığı və nəticənin icra mühitindən asılı olmamasını yoxlayır.",
      blocks: [
        { type: "p", text: "Azevsm Index üçün sabitləşdirilmiş giriş paketləri əsasında nəzarət olunan tarixi sınaqlar aparılıb. Müstəqil icra mühitləri eyni materialları və qaydaların eyni versiyasını alıb. Məqsəd icraçı dəyişdikdə hesablama nəticəsinin qorunub-qorunmadığını və sistemin giriş məlumatlarındakı problemləri gizli şəkildə hamarlamaq əvəzinə aşkar edib-etmədiyini yoxlamaq idi." },
        { type: "heading", text: "Sınaqlar nə göstərdi" },
        { type: "list", items: ["hesablama prosesinin müstəqil mühitlərdə təkrarlana bilməsi;", "giriş paketində eyni qüsurun müstəqil şəkildə aşkarlanması qabiliyyəti;", "yetkinlik mərhələsi, keyfiyyət və riskin ayrılması;", "brend tanınmasına və ya bazar hekayəsinə deyil, strukturlaşdırılmış sübut mənzərəsinə əsaslanmaq qabiliyyəti."] },
      ],
      actions: [
        { label: "Demonstrasiya tələb etmək", href: "/contact" },
        { label: "Texnologiyaya baxmaq", href: "/technology" },
      ],
    },
    dataSecurity: {
      title: "Müştəri materialları ixtiyari daxili baxış obyektinə çevrilmir",
      lead: "Emal, saxlama və giriş qorunan və rol əsaslı mühitlər vasitəsilə qurulur.",
      blocks: [
        { type: "heading", text: "Nəzarət olunan emal" },
        { type: "p", text: "Yüklənmiş sənədlər, cavablar və törəmə məlumatlar platformanın qorunan mühitində saxlanılır. Əməliyyat girişi rol və tapşırıqla məhdudlaşdırılır; adi əməkdaş xam müştəri materiallarını istədiyi kimi oxumaq və ya nəticəni əl ilə düzəltmək üçün onlardan istifadə etmək hüququ əldə etmir." },
        { type: "heading", text: "Saxlama və ötürmənin qorunması" },
        { type: "p", text: "Arxitektura məlumatların saxlanma və ötürülmə zamanı şifrələnməsini, rol əsaslı giriş nəzarətini, daxili saxlama mühitinə açıq girişin qadağan edilməsini, müştəri fayllarının, hesabat artefaktlarının, jurnalların və ehtiyat nüsxələrin ayrılmasını nəzərdə tutur." },
        { type: "heading", text: "Məlumatların həyat dövrünə iki yanaşma" },
        { type: "p", text: "Standart rejim məlumatları müəyyən edilmiş saxlama, arxivləşdirmə və silmə siyasətinə uyğun qoruyur. Həssas institusional ssenarilər üçün minimumlaşdırılmış saxlama rejimi nəzərdə tutulur: emal tamamlandıqdan sonra ilkin və aralıq müştəri materiallarının həcmi zəruri minimuma endirilir, yalnız müqavilə, hüquq, təhlükəsizlik və audit çərçivəsində nəzərdə tutulan yekun və məcburi qeydlər saxlanılır." },
        { type: "heading", text: "Ödəniş məlumatları" },
        { type: "p", text: "Xam kart rekvizitləri, təhlükəsizlik kodları, bank parolları və təsdiq kodları AzevsmAI-nin daxili mühitinə daxil olmur. Kart ödənişinin tətbiq edildiyi hallarda ödəniş məlumatları ödəniş provayderinin qorunan tərəfində daxil edilir." },
        { type: "note", title: "Nəzarət olunan giriş və audit", body: "Müştəri materiallarına giriş rol və tapşırıqla məhdudlaşdırılır, əhəmiyyətli giriş və təhlükəsizlik hadisələri isə jurnallaşdırılır. Müştəri məlumatları şirkətin hamı üçün açıq daxili resursu deyil." },
      ],
      actions: [
        { label: "Məlumat tələblərini müzakirə etmək", href: "/contact" },
        { label: "Etimad prinsiplərinə baxmaq", href: "/trust" },
      ],
    },
    legalCompliance: {
      title: "Komplayens hesablamadan sonra əlavə edilmir, xidmət marşrutuna daxil edilir",
      lead: "Platforma tətbiq olunduğu hallarda hüquqi statusu, yurisdiksiyanı, səlahiyyətləri, razılıqları və emal əsaslarını nəzərə alır.",
      blocks: [
        { type: "heading", text: "Bu, institusional müştəri üçün nə üçün vacibdir" },
        { type: "p", text: "Bank, fond, şirkət və ya dövlət qurumu üçün güclü analitika əldə etmək kifayət deyil — analitikanın əldə olunması marşrutunun özü də tətbiq olunan hüquqi və müqavilə tələbləri ilə uyğun olmalıdır. AzevsmAI xidmətə girişi müvafiq hüquqi və səlahiyyət şərtləri ilə əlaqələndirir." },
        { type: "heading", text: "Nümayəndənin səlahiyyətləri" },
        { type: "p", text: "İstifadəçi şirkət və ya institut adından çıxış edirsə, platforma onun müvafiq həcmdə fəaliyyət göstərmək üçün təsdiqlənmiş səlahiyyətini nəzərə alır. Təsdiqin forması və yetərliliyi tətbiq olunan rejim, yurisdiksiya və tələb olunan xidmətin xarakteri ilə müəyyən edilir." },
        { type: "heading", text: "Erkən mərhələ" },
        { type: "p", text: "Azevsm Index üçün qeydiyyatdan keçmiş hüquqi şəxsin mövcudluğu universal ilkin şərt deyil. Tətbiq olunan marşrut fiziki şəxs, qeydiyyatdan əvvəl təsisçi və ya ideya mərhələsində olan müraciətçi üçün əlçatan ola bilər." },
        { type: "heading", text: "Yurisdiksiya məntiqi" },
        { type: "p", text: "Tətbiq olunan hüquq, müştərinin, ödəyicinin və istifadəçinin ölkəsi, eləcə də xidmətin göstərildiyi yer avtomatik olaraq eyniləşdirilmir. Hüquqi qaydalar fərziyyəyə və ya rahat “standart bazara” deyil, təsdiqlənmiş kontekstə əsasən tətbiq edilməlidir." },
      ],
      actions: [
        { label: "İnstitusional girişi müzakirə etmək", href: "/contact" },
        { label: "Məlumat təhlükəsizliyinə baxmaq", href: "/data-security" },
      ],
    },
  },
  ru: {
    resultSystem: {
      title: "Одна оценка. Система результатов.",
      lead: "Клиент получает не только итоговый документ, а согласованную среду материалов вокруг одного зафиксированного аналитического результата.",
      blocks: [
        { type: "p", text: "В традиционном проекте результат часто заканчивается одним отчетом. В AzevsmAI расчетный результат становится основой для нескольких клиентских представлений, каждое из которых решает свою задачу: быстро понять итог, изучить доказательную базу, представить выводы руководству, пройти по структуре результата или работать с цифровой моделью." },
        { type: "heading", text: "Что может входить в систему результата", id: "result-system-components" },
        { type: "table", header: false, rows: [
          ["Зафиксированный результат\nОсновной аналитический итог, связанный с конкретной версией правил и запуском.", "Аналитический отчет\nРазвернутое представление результата, наблюдений, ограничений и разрешенных аналитических выводов."],
          ["Краткий обзор для руководителя\nСжатое представление для руководства, комитета или другого лица, которому нужен смысл без полного объема материалов.", "Досье доказательств и прослеживаемости\nМатериалы, позволяющие понять, на какой подтвержденной основе сформирован результат."],
          ["Паспорт результата\nКомпактная идентификация результата, его версии, контекста и применимых границ.", "Презентация и навигатор\nФорматы для обсуждения, внутренней коммуникации и удобного перехода по структуре результата."],
          ["Цифровая аналитическая модель\nИнтерактивное представление структуры результата в тех продуктах и пакетах, где оно предусмотрено.", "White Box\nКонтролируемое объяснение разрешенной части уже полученного результата без раскрытия защищенной методологии или внутренней технологии AzeVSM AI."],
        ]},
        { type: "heading", text: "Почему это ценно" },
        { type: "p", text: "Один и тот же результат может использоваться по-разному: основателю нужен разбор готовности, инвестору — сопоставимый скрининг, руководителю — краткая картина, аналитической команде — доказательная глубина, комитету — материал для обсуждения. AzevsmAI не создает для каждого из них новую версию истины: разные представления остаются связаны с одним и тем же расчетом." },
        { type: "p", text: "В зависимости от продукта система результата может продолжаться в клиентском кабинете, цифровой модели и контролируемой экосистеме Индексного поля." },
      ],
      actions: [
        { label: "Подобрать продукт", href: "/products" },
      ],
    },
    difference: {
      title: "Не больше текста. Больше аналитической структуры.",
      lead: "AzevsmAI отличается от генеративных и LLM-подходов тем, как формируется и фиксируется аналитический результат: AzeVSM AI относится к классу VSM, а расчетный исход задается доказательствами, методологией и продуктовой математикой, а не свободной генерацией текста.",
      blocks: [
        { type: "p", text: "На рынке существуют разные полезные инструменты: базы данных, рейтинги, генеративные системы, экспертная оценка и консалтинг. AzevsmAI не пытается заменить их одной универсальной категорией. Она закрывает другой слой — структурированную, воспроизводимую и доказательно связанную оценку, которую можно масштабировать и использовать как основу для дальнейшего решения." },
        { type: "heading", text: "Два разных класса результата" },
        { type: "table", header: true, rows: [
          ["Подход", "Логика результата"],
          ["Обычная генеративная схема", "Вход → свободная генерация языковой модели → сгенерированный вывод"],
          ["AzevsmAI", "Доказательно связанный структурированный вход → управляемая методология и расчет → зафиксированный проверяемый аналитический результат"],
        ]},
        { type: "table", header: true, rows: [
          ["Подход", "Сильная сторона категории", "Что добавляет AzevsmAI"],
          ["Универсальная генеративная система", "Быстрое обобщение, формулирование и работа с текстом.", "Расчетный результат AzeVSM AI класса VSM, который не является LLM-генерированным выводом."],
          ["База данных или информационная платформа", "Поиск, хранение и организация большого объема сведений.", "Оценка конкретного объекта и формирование аналитического состояния на основе подтвержденных данных."],
          ["Рейтинг", "Быстрое сравнение по простой шкале.", "Более глубокая структура результата, доказательная основа и система клиентских материалов."],
          ["Классический консалтинг", "Глубокая экспертная работа с контекстом и индивидуальной задачей.", "Стандартизированный технологический аналитический цикл, воспроизводимость и возможность масштабировать первичный анализ."],
          ["Ручная экспертная оценка", "Опыт и профессиональное суждение специалиста.", "Меньшая зависимость результата от того, кто именно выполняет первый аналитический проход."],
        ]},
        { type: "heading", text: "Ключевая разница" },
        { type: "p", text: "Расчетный результат AzeVSM AI не генерируется LLM и не зависит от свободной генерации языковой модели. Клиент получает зафиксированный, воспроизводимый и доказательно связанный аналитический результат, сформированный в рамках методологии и продуктовой математики, а затем представленный на разрешенных уровнях глубины." },
      ],
      actions: [
        { label: "Подобрать продукт", href: "/products" },
        { label: "Посмотреть систему результата", href: "/result-system" },
      ],
    },
    indexField: {
      title: "Результат может продолжать работать после завершения оценки",
      lead: "Контролируемая цифровая среда для разрешенного представления оцененных объектов и взаимодействия с инвесторской стороной.",
      blocks: [
        { type: "heading", text: "Индексное поле" },
        { type: "p", text: "После завершения оценки результат может продолжить работать в контролируемой цифровой среде AzevsmAI. С согласия оцененного объекта он может использоваться для разрешенного представления инвесторской и институциональной стороне, сохраняя установленные границы видимости и доступа." },
        { type: "heading", text: "Что это дает оцененному объекту" },
        { type: "p", text: "Стартап или компания может использовать результат не только как внутренний документ, но и как часть управляемого внешнего представления. Видимость и возможность контакта определяются правилами платформы и согласием самого оцениваемого объекта." },
        { type: "heading", text: "Что это дает инвесторской стороне" },
        { type: "p", text: "Для разрешенных участников Azevsm Index может служить дополнительным слоем структурированного скрининга. Инвестор видит не рекламную витрину, а только тот объем представления, который разрешен соответствующим режимом." },
        { type: "heading", text: "Кто входит в экосистему" },
        { type: "list", items: ["частные участники и бизнес-ангелы в применимых маршрутах;", "институциональные инвесторы и фонды;", "корпоративные стратегические участники;", "государственные, суверенные и программные структуры в разрешенных режимах."] },
        { type: "heading", text: "Контакт только по разрешению" },
        { type: "p", text: "Контакт возможен только в разрешенном режиме и с согласия оцениваемого объекта. Индексное поле не является публичным рейтингом, брокерской площадкой, инвестиционным каталогом или системой инвестиционных рекомендаций." },
      ],
      actions: [
        { label: "Обсудить инвесторский сценарий", href: "/contact" },
        { label: "Посмотреть Azevsm Index", href: "/products/azevsm-index" },
      ],
    },
    validation: {
      title: "Результат должен зависеть от данных и правил, а не от имени исполнителя",
      lead: "Контрольные серии проверяют повторяемость расчета, чувствительность к входным данным и независимость результата от среды исполнения.",
      blocks: [
        { type: "p", text: "Для Azevsm Index проводились контролируемые исторические испытания на зафиксированных входных пакетах. Независимые среды исполнения получали одинаковые материалы и одинаковую версию правил. Цель — проверить, сохраняется ли расчетный результат при смене исполнителя и выявляет ли система проблемы входных данных вместо их скрытого сглаживания." },
        { type: "heading", text: "Что показали испытания" },
        { type: "list", items: ["воспроизводимость расчетного процесса в независимых средах;", "способность независимо выявлять один и тот же дефект входного пакета;", "разделение стадии зрелости, качества и риска;", "способность следовать структурированной доказательной картине, а не узнаваемости бренда или рыночному рассказу."] },
      ],
      actions: [
        { label: "Запросить демонстрацию", href: "/contact" },
        { label: "Посмотреть технологию", href: "/technology" },
      ],
    },
    dataSecurity: {
      title: "Клиентские материалы не становятся объектом произвольного внутреннего просмотра",
      lead: "Обработка, хранение и доступ строятся через защищенные и ролевые контуры.",
      blocks: [
        { type: "heading", text: "Контролируемая обработка" },
        { type: "p", text: "Загруженные документы, ответы и производные данные находятся в защищенном контуре платформы. Операционный доступ ограничивается ролью и задачей; обычный сотрудник не получает права произвольно читать сырые клиентские материалы или использовать их для ручной корректировки результата." },
        { type: "heading", text: "Защита хранения и передачи" },
        { type: "p", text: "Архитектура предусматривает шифрование данных при хранении и передаче, ролевой контроль доступа, запрет публичного доступа к внутреннему хранилищу, разделение клиентских файлов, отчетных артефактов, журналов и резервных копий." },
        { type: "heading", text: "Два подхода к жизненному циклу данных" },
        { type: "p", text: "Стандартный режим сохраняет данные по установленной политике хранения, архивирования и удаления. Для чувствительных институциональных сценариев предусмотрен режим минимизированного хранения: после завершения обработки объем исходных и промежуточных клиентских материалов сокращается до минимально необходимого, а сохраняются только предусмотренные итоговые и обязательные записи в рамках договора, права, безопасности и аудита." },
        { type: "heading", text: "Платежные данные" },
        { type: "p", text: "Необработанные карточные реквизиты, защитные коды, банковские пароли и коды подтверждения не поступают во внутренний контур AzevsmAI. Там, где применяется карточный платеж, ввод платежных данных выполняется на защищенной стороне платежного провайдера." },
        { type: "note", title: "Контролируемый доступ и аудит", body: "Доступ к клиентским материалам ограничивается ролью и задачей, а значимые события доступа и безопасности подлежат журналированию. Клиентские данные не являются общедоступным внутренним ресурсом компании." },
      ],
      actions: [
        { label: "Обсудить требования к данным", href: "/contact" },
        { label: "Посмотреть принципы доверия", href: "/trust" },
      ],
    },
    legalCompliance: {
      title: "Комплаенс встроен в маршрут сервиса, а не добавляется после расчета",
      lead: "Платформа учитывает юридический статус, юрисдикцию, полномочия, согласия и основания обработки там, где они применимы.",
      blocks: [
        { type: "heading", text: "Почему это важно институциональному клиенту" },
        { type: "p", text: "Для банка, фонда, компании или государственной структуры недостаточно получить сильную аналитику — важно, чтобы сам маршрут ее получения был совместим с применимыми правовыми и договорными требованиями. AzevsmAI связывает доступ к сервису с соответствующими правовыми и полномочными условиями." },
        { type: "heading", text: "Полномочия представителя" },
        { type: "p", text: "Если пользователь действует от имени компании или института, платформа учитывает подтвержденное право действовать в соответствующем объеме. Форма и достаточность подтверждения определяются применимым режимом, юрисдикцией и характером запрашиваемого сервиса." },
        { type: "heading", text: "Ранняя стадия" },
        { type: "p", text: "Для Azevsm Index наличие зарегистрированного юридического лица не является универсальным предварительным условием. Применимый маршрут может быть доступен физическому лицу, основателю до регистрации или заявителю на стадии идеи." },
        { type: "heading", text: "Юрисдикционная логика" },
        { type: "p", text: "Применимое право, страна клиента, плательщика, пользователя и место оказания сервиса не смешиваются автоматически. Правовые правила должны применяться по подтвержденному контексту, а не по догадке или удобному рынку по умолчанию." },
      ],
      actions: [
        { label: "Обсудить институциональный доступ", href: "/contact" },
        { label: "Посмотреть безопасность данных", href: "/data-security" },
      ],
    },
  },
};

export function getAuthorityPage(locale: Locale, key: AuthorityPageKey): AuthorityPage | null {
  if (!isAuthorityLocale(locale)) return null;
  return pages[locale][key];
}
