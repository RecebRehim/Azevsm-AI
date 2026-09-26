import type { Locale } from "@/lib/i18n";
import type { AuthorityPage } from "@/lib/content/authority-pages-v31";

export type ProductAuthorityKey = "platform" | "products" | "index" | "institutional" | "plus";

const pages: Record<"en" | "az" | "ru", Record<ProductAuthorityKey, AuthorityPage>> = {
  "en": {
    "platform": {
      "title": "From Complex Materials to a Structured Analytical Result",
      "lead": "AzevsmAI helps startups, companies, investors, and institutional participants obtain a comparable analytical view in situations where manual analysis becomes slow, inconsistent, and difficult to scale.",
      "blocks": [
        {
          "type": "heading",
          "text": "I represent"
        },
        {
          "type": "p",
          "text": "Choose your scenario — the site will take you directly to the relevant product and type of result."
        },
        {
          "type": "table",
          "header": true,
          "rows": [
            [
              "Scenario",
              "Route"
            ],
            [
              "Startup / Founder",
              "Azevsm Index — preparation for external review, diagnostics, and investment context."
            ],
            [
              "Investor / Fund",
              "Azevsm Index and the investor ecosystem — initial structured analysis of a pipeline of opportunities."
            ],
            [
              "Company / Corporation",
              "Azevsm Index, Azevsm Institutional Index, or Azevsm Plus — depending on the task."
            ],
            [
              "Bank / Institution",
              "Azevsm Institutional Index — a single evidence-linked view for institutional decision-making."
            ],
            [
              "Government / Programme Organisation",
              "Azevsm Institutional Index and applicable specialized products for selection and programme scenarios."
            ]
          ]
        },
        {
          "type": "heading",
          "text": "The problem AzevsmAI solves"
        },
        {
          "type": "p",
          "text": "Investors, banks, funds, programmes, startups, and companies work with large volumes of material: presentations, public track records, stated potential, market data, team information, documents, and the limitations of the source information itself. Initial analysis takes time, and results are difficult to compare when data is incomplete, heterogeneous, or of uneven quality."
        },
        {
          "type": "p",
          "text": "AzevsmAI creates a common methodological framework for this analysis. It helps separate substantiated indicators from claims, identify strengths and areas requiring attention, record data limitations, and form a structured result. The platform is designed to scale analytical work without reducing a complex object to simplified mass scoring."
        },
        {
          "type": "heading",
          "text": "What AzevsmAI does"
        },
        {
          "type": "p",
          "text": "AzevsmAI turns fragmented materials into a structured analytical model, links that model to an evidence base, applies proprietary methodology and product mathematics, fixes the result, and then builds around it an authorized analytical layer and a client-facing system of materials."
        },
        {
          "type": "table",
          "header": true,
          "rows": [
            [
              "Element",
              "Meaning",
              "Element",
              "Meaning"
            ],
            [
              "Evidence",
              "Claims are separated from substantiated information and retain their link to sources.",
              "Structured model",
              "The object is treated not as a collection of files, but as a connected analytical structure."
            ],
            [
              "Proprietary methodology",
              "Assessment rules and analytical boundaries are defined by Azevsm Systems’ proprietary scientific-technical methodology and the applicable product, not by the unrestricted opinion of an individual operator.",
              "Product mathematics",
              "The result is formed by AzeVSM AI — Azevsm Systems’ proprietary VSM-class AI technology — within the applicable product and its product mathematics."
            ],
            [
              "Reproducible result",
              "The same validated input and the same version of the rules should lead to the same result.",
              "Result system",
              "The client receives not one document, but a coherent set of materials for different levels of use."
            ]
          ]
        },
        {
          "type": "heading",
          "text": "Depth of analysis. Comparability. Scale."
        },
        {
          "type": "p",
          "text": "A manual analytical process is difficult to apply consistently to a large flow of objects. AzevsmAI moves a substantial part of that work into a technological cycle that can be repeated under a common methodological discipline: preserving analytical depth, comparing different objects, and scaling initial review without shifting into arbitrary generation or a single simplistic rating number."
        }
      ],
      "actions": [
        {
          "label": "Find the right product",
          "href": "/products"
        },
        {
          "label": "View the result system",
          "href": "/result-system"
        }
      ]
    },
    "products": {
      "title": "Three Product Lines for Three Classes of Tasks",
      "lead": "One technological foundation, with different analytical models, depth, and use scenarios.",
      "blocks": [
        {
          "type": "table",
          "header": true,
          "rows": [
            [
              "Product",
              "Purpose"
            ],
            [
              "Azevsm Index",
              "For startups, projects, and companies that need a structured assessment before investment, external review, partnership, or internal diagnostics. It is also useful to investors for initial comparable analysis of a flow of opportunities."
            ],
            [
              "Azevsm Institutional Index",
              "For banks, funds, institutional investors, corporate bodies, and public-sector organisations where a single evidence-linked view is needed for a more complex decision-making process."
            ],
            [
              "Azevsm Plus",
              "Seven specialized products addressing specific questions: budget, investment, financial resilience, risk, governance, product rights, sustainability, and external impact."
            ]
          ]
        },
        {
          "type": "heading",
          "text": "How to choose"
        },
        {
          "type": "p",
          "text": "If the question is, “What does this startup or company look like within a structured assessment system?” the appropriate product is Azevsm Index. If the result must be used in an institutional environment by several levels of participants and supported by an expanded system of analytical objects, the appropriate product is Azevsm Institutional Index. If a deep analysis of a specific area of a business or organisation is required, the relevant Azevsm Plus product is selected."
        }
      ],
      "actions": [
        {
          "label": "Azevsm Index",
          "href": "/products/azevsm-index"
        },
        {
          "label": "Azevsm Institutional Index",
          "href": "/products/azevsm-institutional-index"
        },
        {
          "label": "Azevsm Plus",
          "href": "/products/azevsm-plus"
        }
      ]
    },
    "index": {
      "title": "View a Startup, Project, or Company Through an External Structured Assessment",
      "lead": "For founders and companies — preparation and diagnostics. For investors and funds — a comparable initial analytical layer.",
      "blocks": [
        {
          "type": "heading",
          "text": "If you are a founder, team, or company"
        },
        {
          "type": "p",
          "text": "You are preparing for investment, negotiations, partnership, or the next stage of growth. Inside a project, many things may seem obvious; an external party sees only what the materials substantiate. Azevsm Index helps show where the profile is genuinely strong, where the evidence lags behind the presentation, and which areas need attention before more serious external review."
        },
        {
          "type": "list",
          "items": [
            "preparation for an investment round or investor meetings;",
            "internal diagnostics before scaling or entering a partnership;",
            "checking which strengths are already substantiated and which remain claims;",
            "understanding structural weaknesses and areas likely to raise questions from an external party;",
            "working at the idea stage or before company registration where the relevant route applies."
          ]
        },
        {
          "type": "heading",
          "text": "If you are an investor, fund, or corporate participant"
        },
        {
          "type": "p",
          "text": "When a team faces a large flow of companies from different markets, conducting deep manual review of every company at the first stage is too resource-intensive. Azevsm Index creates a common structured layer for initial review and comparison, helping identify which cases require deeper examination."
        },
        {
          "type": "list",
          "items": [
            "initial analytics across a large flow of startups and companies;",
            "comparability of objects from different countries and with different quality of source materials;",
            "reduced dependence on individual intuition at the initial selection stage;",
            "preparation for more expensive expert or comprehensive due diligence;",
            "work with international deal flow and programme-based selection."
          ]
        },
        {
          "type": "heading",
          "text": "Maturity context matters"
        },
        {
          "type": "p",
          "text": "Azevsm Index does not assume that a more mature company is automatically stronger than an early-stage project. The assessment takes the stage of development into account but does not confuse maturity with quality of the result. Objects at different stages of development are therefore considered within a comparable but contextually appropriate analytical framework."
        },
        {
          "type": "heading",
          "text": "What the client receives"
        },
        {
          "type": "p",
          "text": "Depending on the package, this may include the core index result, an expanded analytical report, an executive brief, a navigator, an evidence and verifiability dossier, and a presentation of the result. The value lies not in the number of files, but in the fact that all of them represent the same fixed analytical result at different levels of depth."
        },
        {
          "type": "p",
          "text": "After the assessment, the authorized result may continue to exist within the AzevsmAI digital environment and, with the assessed party’s consent, participate in the controlled Index Field environment."
        },
        {
          "type": "note",
          "title": "Scope boundary",
          "body": "Azevsm Index helps structure preliminary review and preparation for deeper analysis. It does not replace an investment decision, a credit decision, or mandatory comprehensive due diligence."
        }
      ],
      "actions": [
        {
          "label": "Start an assessment",
          "href": "/contact"
        },
        {
          "label": "View an example of the result system",
          "href": "/result-system"
        }
      ]
    },
    "institutional": {
      "title": "One Structured View for Institutional Decision-Making",
      "lead": "For banks, funds, institutional investors, corporate structures, government organisations, and programme operators.",
      "blocks": [
        {
          "type": "heading",
          "text": "When an institutional level is required"
        },
        {
          "type": "p",
          "text": "An institutional decision is rarely made by one person. Material passes through analysts, executives, committees, legal functions, and specialist functions. If each participant reconstructs the picture independently, gaps emerge in meaning, evidence, and the version of the result."
        },
        {
          "type": "p",
          "text": "Azevsm Institutional Index forms a single evidence-linked analytical environment that can be used at different levels of review without creating different calculated versions for different participants."
        },
        {
          "type": "heading",
          "text": "Use cases"
        },
        {
          "type": "list",
          "items": [
            "structured review of a company or project by a bank, fund, or institutional investor;",
            "preparation of materials for an investment, credit, selection, or other authorized committee;",
            "analysis within corporate development, partnership, and strategic selection programmes;",
            "assessment in government, sovereign, and programme environments where a reproducible evidence base is required;",
            "a common analytical language for participants who need different levels of material depth."
          ]
        },
        {
          "type": "heading",
          "text": "IIT 4D"
        },
        {
          "type": "p",
          "text": "IIT 4D presents the institutional result through four institutional dimensions and helps users view it as a connected analytical picture. It is not decorative visualization and not a second calculation; it is a digital form for working with an already fixed result."
        },
        {
          "type": "heading",
          "text": "What the organisation receives"
        },
        {
          "type": "p",
          "text": "Depending on the package, the result system may include a full institutional report, an executive brief, an evidence and traceability dossier, a presentation, a result passport, an interactive navigator, an in-depth analytical dossier, the IIT 4D digital model, and White Box where that mode is authorized."
        },
        {
          "type": "heading",
          "text": "For sensitive data"
        },
        {
          "type": "p",
          "text": "For institutional scenarios, the architecture provides a minimized-retention mode. Its purpose is to reduce the retained volume of original and intermediate client materials to the minimum necessary after processing is complete, taking account of contractual requirements, mandatory legal retention, and security requirements. The exact composition of retained categories is determined by the applicable retention mode."
        }
      ],
      "actions": [
        {
          "label": "Discuss an institutional scenario",
          "href": "/contact"
        },
        {
          "label": "View the result system",
          "href": "/result-system"
        }
      ]
    },
    "plus": {
      "title": "Seven Specialized Products for Specific Business Questions",
      "lead": "Each product addresses a distinct problem and forms its own analytical result.",
      "blocks": [
        {
          "type": "p",
          "text": "Azevsm Plus is used when specialized analysis is required for a particular area of a business, project, or organisation. Each of the seven products has its own domain model, analytical task, and independent result."
        },
        {
          "type": "heading",
          "text": "1. Budget Analysis"
        },
        {
          "type": "p",
          "text": "Situation: An organisation is scaling, launching a programme, or reallocating resources and needs to understand whether the budget can withstand the actual load.\nValue: See the budget structure, pressure from commitments, completeness of planning, and resource readiness before the next decision is made.\nUsers: Owner, management, programme, investor, or authorized institutional party."
        },
        {
          "type": "heading",
          "text": "2. Investment Analysis"
        },
        {
          "type": "p",
          "text": "Situation: A company is preparing for a new financing phase or reviewing its investment programme.\nValue: Structure the investment position, dependence on future capital, allocation of funds, and substantiated readiness factors.\nUsers: Company, investor, fund, corporate partner."
        },
        {
          "type": "heading",
          "text": "3. Financial Resilience"
        },
        {
          "type": "p",
          "text": "Situation: Growth is accelerating, but it is unclear how well the current financial structure can withstand the load.\nValue: See liquidity, the pace of resource consumption, fixed payments, resilience buffer, and areas of financial pressure.\nUsers: Management, owner, investor, financial or institutional party."
        },
        {
          "type": "heading",
          "text": "Four More Specialized Areas"
        },
        {
          "type": "heading",
          "text": "4. Institutional Risk Contours"
        },
        {
          "type": "p",
          "text": "Situation: An object is preparing for partnership, institutional review, or a more complex operating environment.\nValue: Obtain a structured picture of substantiated risks, governance deviations, and operational vulnerabilities.\nUsers: Company, partner, fund, institution."
        },
        {
          "type": "heading",
          "text": "5. In-Depth Governance Analysis"
        },
        {
          "type": "p",
          "text": "Situation: An organisation is growing, becoming more complex, or preparing for external review, while the quality of its governance system is difficult to assess from within.\nValue: See the distribution of responsibility, maturity of decision-making processes, and areas of governance risk.\nUsers: Owner, board, investor, strategic partner."
        },
        {
          "type": "heading",
          "text": "6. Product Rights Integrity"
        },
        {
          "type": "p",
          "text": "Situation: Before investment, licensing, partnership, or scaling, it is necessary to understand how well the structure of rights to the product is substantiated and internally consistent.\nValue: Identify gaps in the chain of title, licences, and evidence of rights.\nUsers: Company, investor, partner, authorized legal or institutional party."
        },
        {
          "type": "heading",
          "text": "7. Sustainability and External Impact"
        },
        {
          "type": "p",
          "text": "Situation: An organisation needs a structured review of environmental, social, and other substantiated aspects of sustainability and external impact.\nValue: Bring fragmented facts into one domain-specific picture for internal or institutional review.\nUsers: Company, investor, programme, institutional participant."
        },
        {
          "type": "heading",
          "text": "What the client receives"
        },
        {
          "type": "p",
          "text": "Each product forms its own fixed result and, depending on the level, a set of reporting, evidence, navigation, and presentation materials. A deeper package expands understanding of the same result rather than creating a new calculation."
        }
      ],
      "actions": [
        {
          "label": "Discuss an analytical task",
          "href": "/contact"
        },
        {
          "label": "View the composition of the result",
          "href": "/result-system"
        }
      ]
    }
  },
  "az": {
    "platform": {
      "title": "Mürəkkəb materiallardan strukturlaşdırılmış analitik nəticəyə",
      "lead": "AzevsmAI startaplara, şirkətlərə, investorlara və institusional iştirakçılara əl ilə aparılan təhlilin yavaşladığı, qeyri-bərabər olduğu və çətin miqyaslandığı hallarda müqayisə edilə bilən analitik mənzərə əldə etməyə kömək edir.",
      "blocks": [
        {
          "type": "heading",
          "text": "Mən təmsil edirəm"
        },
        {
          "type": "p",
          "text": "Ssenarinizi seçin — sayt sizi dərhal uyğun məhsula və nəticə növünə yönəldəcək."
        },
        {
          "type": "table",
          "header": true,
          "rows": [
            [
              "Ssenari",
              "Marşrut"
            ],
            [
              "Startap / təsisçi",
              "Azevsm Index — xarici baxışa hazırlıq, diaqnostika və investisiya konteksti."
            ],
            [
              "İnvestor / fond",
              "Azevsm Index və investor ekosistemi — obyekt axınının ilkin strukturlaşdırılmış təhlili."
            ],
            [
              "Şirkət / korporasiya",
              "Azevsm Index, Azevsm Institutional Index və ya Azevsm Plus — tapşırıqdan asılı olaraq."
            ],
            [
              "Bank / institut",
              "Azevsm Institutional Index — institusional qərar üçün sübutlarla əlaqələndirilmiş vahid baxış."
            ],
            [
              "Dövlət / proqram qurumu",
              "Azevsm Institutional Index və seçim və proqram ssenariləri üçün tətbiq edilə bilən ixtisaslaşmış məhsullar."
            ]
          ]
        },
        {
          "type": "heading",
          "text": "AzevsmAI-nin həll etdiyi problem"
        },
        {
          "type": "p",
          "text": "İnvestorlar, banklar, fondlar, proqramlar, startaplar və şirkətlər böyük həcmdə materialla işləyirlər: təqdimatlar, açıq tarixçə, bəyan edilən potensial, bazar məlumatları, komanda haqqında məlumatlar, sənədlər və ilkin məlumatların məhdudiyyətləri. İlkin təhlil vaxt tələb edir; məlumatlar natamam, heterogen və ya müxtəlif keyfiyyətdə olduqda nəticələri müqayisə etmək çətinləşir."
        },
        {
          "type": "p",
          "text": "AzevsmAI belə təhlil üçün vahid metodoloji çərçivə yaradır: təsdiqlənmiş göstəriciləri bəyanatlardan ayırmağa, güclü tərəfləri və diqqət tələb edən sahələri görməyə, məlumat məhdudiyyətlərini qeydə almağa və strukturlaşdırılmış nəticə formalaşdırmağa kömək edir. Platforma mürəkkəb obyekti sadələşdirilmiş kütləvi skorinqə endirmədən analitikanın miqyaslanması üçün nəzərdə tutulub."
        },
        {
          "type": "heading",
          "text": "AzevsmAI nə edir"
        },
        {
          "type": "p",
          "text": "AzevsmAI ayrı-ayrı materialları strukturlaşdırılmış analitik modelə çevirir, onu sübut bazası ilə əlaqələndirir, öz metodologiyasını və məhsul riyaziyyatını tətbiq edir, nəticəni sabitləşdirir və daha sonra onun ətrafında icazə verilmiş analitik qat və müştəri materialları sistemi formalaşdırır."
        },
        {
          "type": "table",
          "header": true,
          "rows": [
            [
              "Element",
              "Mənası",
              "Element",
              "Mənası"
            ],
            [
              "Sübutlar",
              "Bəyanatlar təsdiqlənmiş məlumatlardan ayrılır və mənbələrlə əlaqəsini saxlayır.",
              "Strukturlaşdırılmış model",
              "Obyekt fayllar toplusu kimi deyil, əlaqəli analitik struktur kimi nəzərdən keçirilir."
            ],
            [
              "Öz metodologiyası",
              "Qiymətləndirmə qaydaları və analitik sərhədlər icraçının sərbəst rəyi ilə deyil, Azevsm Systems-in öz elmi-texniki metodologiyası və tətbiq olunan məhsul ilə müəyyən edilir.",
              "Məhsul riyaziyyatı",
              "Nəticə AzeVSM AI — Azevsm Systems-in VSM sinifli öz süni intellekt texnologiyası — vasitəsilə, tətbiq olunan məhsul və onun məhsul riyaziyyatı çərçivəsində formalaşdırılır."
            ],
            [
              "Təkrarlana bilən nəticə",
              "Eyni təsdiqlənmiş giriş və qaydaların eyni versiyası eyni nəticəyə gətirməlidir.",
              "Nəticə sistemi",
              "Müştəri tək bir sənəd deyil, müxtəlif istifadə səviyyələri üçün uzlaşdırılmış materiallar toplusu əldə edir."
            ]
          ]
        },
        {
          "type": "heading",
          "text": "Təhlilin dərinliyi. Müqayisəlilik. Miqyas."
        },
        {
          "type": "p",
          "text": "Əl ilə aparılan analitik prosesi böyük obyekt axınına eyni keyfiyyətlə tətbiq etmək çətindir. AzevsmAI bu işin əhəmiyyətli hissəsini vahid metodoloji intizam əsasında təkrarlana bilən texnoloji dövrə keçirir: təhlilin dərinliyini qorumaq, müxtəlif obyektləri müqayisə etmək və ilkin baxışı ixtiyari generasiyaya və ya sadə reytinq rəqəminə çevirmədən miqyaslandırmaq."
        }
      ],
      "actions": [
        {
          "label": "Məhsulu seçmək",
          "href": "/products"
        },
        {
          "label": "Nəticə sisteminə baxmaq",
          "href": "/result-system"
        }
      ]
    },
    "products": {
      "title": "Üç tapşırıq sinfi üçün üç məhsul xətti",
      "lead": "Vahid texnoloji əsas, lakin fərqli analitik modellər, dərinlik və istifadə ssenariləri.",
      "blocks": [
        {
          "type": "table",
          "header": true,
          "rows": [
            [
              "Məhsul",
              "Təyinatı"
            ],
            [
              "Azevsm Index",
              "İnvestisiyadan, xarici baxışdan, tərəfdaşlıqdan və ya daxili diaqnostikadan əvvəl strukturlaşdırılmış qiymətləndirməyə ehtiyacı olan startaplar, layihələr və şirkətlər üçün. Investor tərəfi üçün də obyekt axınının ilkin müqayisəli təhlilində faydalıdır."
            ],
            [
              "Azevsm Institutional Index",
              "Daha mürəkkəb qərarvermə prosesində sübutlarla əlaqələndirilmiş vahid baxış tələb olunan banklar, fondlar, institusional investorlar, korporativ və dövlət strukturları üçün."
            ],
            [
              "Azevsm Plus",
              "Konkret məsələlər üzrə yeddi ixtisaslaşmış məhsul: büdcə, investisiya, maliyyə dayanıqlılığı, risklər, idarəetmə, məhsul üzərində hüquqlar, dayanıqlılıq və xarici təsir."
            ]
          ]
        },
        {
          "type": "heading",
          "text": "Necə seçmək olar"
        },
        {
          "type": "p",
          "text": "Sual “startap və ya şirkət strukturlaşdırılmış qiymətləndirmə sistemində necə görünür?” şəklindədirsə, Azevsm Index uyğundur. Nəticə institusional mühitdə müxtəlif səviyyəli iştirakçılar tərəfindən istifadə olunmalı və genişləndirilmiş analitik obyektlər sistemi ilə müşayiət edilməlidirsə, Azevsm Institutional Index seçilir. Biznesin və ya təşkilatın konkret sahəsinin dərin təhlili tələb olunursa, uyğun Azevsm Plus məhsulu seçilir."
        }
      ],
      "actions": [
        {
          "label": "Azevsm Index",
          "href": "/products/azevsm-index"
        },
        {
          "label": "Azevsm Institutional Index",
          "href": "/products/azevsm-institutional-index"
        },
        {
          "label": "Azevsm Plus",
          "href": "/products/azevsm-plus"
        }
      ]
    },
    "index": {
      "title": "Startapa, layihəyə və ya şirkətə xarici strukturlaşdırılmış qiymətləndirmə gözü ilə baxmaq",
      "lead": "Təsisçilər və şirkətlər üçün — hazırlıq və diaqnostika. İnvestorlar və fondlar üçün — müqayisə edilə bilən ilkin analitik qat.",
      "blocks": [
        {
          "type": "heading",
          "text": "Əgər siz təsisçi, komanda və ya şirkətsinizsə"
        },
        {
          "type": "p",
          "text": "Siz investisiyaya, danışıqlara, tərəfdaşlığa və ya növbəti inkişaf mərhələsinə hazırlaşırsınız. Layihənin daxilində bir çox məqam aydın görünə bilər, lakin xarici tərəf yalnız materiallarla təsdiqlənənləri görür. Azevsm Index profilin harada həqiqətən güclü olduğunu, sübutların harada təqdimatdan geri qaldığını və daha ciddi xarici baxışdan əvvəl hansı sahələrin diqqət tələb etdiyini anlamağa kömək edir."
        },
        {
          "type": "list",
          "items": [
            "investisiya raunduna və ya investor görüşlərinə hazırlıq;",
            "miqyaslanma və ya tərəfdaşlıqdan əvvəl daxili diaqnostika;",
            "hansı güclü tərəflərin artıq təsdiqləndiyini, hansılarının isə hələ bəyanat olaraq qaldığını yoxlamaq;",
            "xarici tərəfdə sual yarada biləcək struktur zəiflikləri və sahələri anlamaq;",
            "uyğun marşrut tətbiq olunduqda ideya mərhələsində və ya şirkət qeydiyyatından əvvəl işləmək."
          ]
        },
        {
          "type": "heading",
          "text": "Əgər siz investor, fond və ya korporativ iştirakçısınızsa"
        },
        {
          "type": "p",
          "text": "Komandanın qarşısında müxtəlif bazarlardan böyük şirkət axını olduqda hər birini ilkin mərhələdə dərin əl ilə yoxlamaq həddən artıq resurs tələb edir. Azevsm Index ilkin baxış və müqayisə üçün vahid strukturlaşdırılmış qat yaradır və hansı halların daha dərin yoxlama tələb etdiyini anlamağa kömək edir."
        },
        {
          "type": "list",
          "items": [
            "böyük startap və şirkət axınının ilkin analitikası;",
            "müxtəlif ölkələrdən və müxtəlif keyfiyyətli ilkin materiallara malik obyektlərin müqayisəliliyi;",
            "ilkin seçim mərhələsində fərdi intuisiyadan asılılığın azaldılması;",
            "daha bahalı ekspert və ya kompleks yoxlamaya hazırlıq;",
            "beynəlxalq sövdələşmə axını və proqram seçimi ilə işləmək."
          ]
        },
        {
          "type": "heading",
          "text": "Yetkinlik konteksti əhəmiyyətlidir"
        },
        {
          "type": "p",
          "text": "Azevsm Index daha yetkin şirkətin avtomatik olaraq erkən mərhələli layihədən güclü olduğunu nəzərdə tutmur. Qiymətləndirmə inkişaf mərhələsinin kontekstini nəzərə alır, lakin yetkinliyi nəticənin keyfiyyəti ilə qarışdırmır. Buna görə müxtəlif inkişaf səviyyəsində olan obyektlər müqayisə edilə bilən, lakin kontekstə uyğun analitik çərçivədə nəzərdən keçirilir."
        },
        {
          "type": "heading",
          "text": "Müştəri nə əldə edir"
        },
        {
          "type": "p",
          "text": "Paketdən asılı olaraq bura əsas indeks nəticəsi, genişləndirilmiş analitik hesabat, qısa icmal, naviqator, sübut bazası və yoxlanıla bilmə dosyesi, eləcə də nəticənin təqdimatı daxil ola bilər. Dəyər faylların sayında deyil, onların hamısının eyni sabitləşdirilmiş analitik nəticəni müxtəlif dərinlik səviyyələrində təqdim etməsindədir."
        },
        {
          "type": "p",
          "text": "Qiymətləndirmədən sonra icazə verilmiş nəticə AzevsmAI-nin rəqəmsal mühitində mövcudluğunu davam etdirə və qiymətləndirilən tərəfin razılığı ilə nəzarət olunan İndeks sahəsi daxilində iştirak edə bilər."
        },
        {
          "type": "note",
          "title": "Tətbiq sərhədi",
          "body": "Azevsm Index ilkin baxışın strukturlaşdırılmasına və daha dərin təhlilə hazırlığa kömək edir. O, investisiya qərarını, kredit qərarını və ya məcburi kompleks yoxlamanı əvəz etmir."
        }
      ],
      "actions": [
        {
          "label": "Qiymətləndirməyə başlamaq",
          "href": "/contact"
        },
        {
          "label": "Nəticə sisteminin nümunəsinə baxmaq",
          "href": "/result-system"
        }
      ]
    },
    "institutional": {
      "title": "İnstitusional qərar üçün vahid strukturlaşdırılmış baxış",
      "lead": "Banklar, fondlar, institusional investorlar, korporativ strukturlar, dövlət və proqram təşkilatları üçün.",
      "blocks": [
        {
          "type": "heading",
          "text": "İnstitusional səviyyə nə zaman tələb olunur"
        },
        {
          "type": "p",
          "text": "İnstitusional qərarı nadir hallarda bir nəfər qəbul edir. Material analitiklərdən, rəhbərlərdən, komitələrdən, hüquq və ixtisaslaşmış funksiyalardan keçir. Hər tərəf mənzərəni yenidən ayrıca qurduqda məna, sübutlar və nəticənin versiyası arasında uyğunsuzluqlar yaranır."
        },
        {
          "type": "p",
          "text": "Azevsm Institutional Index müxtəlif iştirakçılar üçün ayrı-ayrı hesablama versiyaları yaratmadan müxtəlif baxış səviyyələrində istifadə oluna bilən vahid, sübutlarla əlaqələndirilmiş analitik mühit formalaşdırır."
        },
        {
          "type": "heading",
          "text": "Hansı tapşırıqlar üçün"
        },
        {
          "type": "list",
          "items": [
            "şirkət və ya layihənin bank, fond və ya institusional investor tərəfindən strukturlaşdırılmış baxışı;",
            "investisiya, kredit, seçim və ya digər səlahiyyətli komitə üçün materialların hazırlanması;",
            "korporativ inkişaf, tərəfdaşlıq və strateji seçim proqramlarında təhlil;",
            "təkrarlana bilən sübut bazasının tələb olunduğu dövlət, suveren və proqram mühitlərində qiymətləndirmə;",
            "müxtəlif dərinlikdə materiala ehtiyac duyan iştirakçılar üçün vahid analitik dil."
          ]
        },
        {
          "type": "heading",
          "text": "IIT 4D"
        },
        {
          "type": "p",
          "text": "IIT 4D institusional nəticəni dörd institusional ölçü üzrə təqdim edir və ona əlaqəli analitik mənzərə kimi baxmağa imkan verir. Bu, dekorativ vizuallaşdırma və ya ikinci hesablama deyil, artıq sabitləşdirilmiş nəticə ilə işləməyin rəqəmsal formasıdır."
        },
        {
          "type": "heading",
          "text": "Təşkilat nə əldə edir"
        },
        {
          "type": "p",
          "text": "Paketdən asılı olaraq nəticə sisteminə tam institusional hesabat, rəhbərlik üçün qısa icmal, sübutlar və izlənəbilərlik dosyesi, təqdimat, nəticə pasportu, interaktiv naviqator, dərinləşdirilmiş analitik dosye, IIT 4D rəqəmsal modeli və icazə verilən rejimlərdə White Box daxil ola bilər."
        },
        {
          "type": "heading",
          "text": "Həssas məlumatlar üçün"
        },
        {
          "type": "p",
          "text": "İnstitusional ssenarilər üçün arxitektura minimumlaşdırılmış saxlama rejimini nəzərdə tutur. Məqsəd emal başa çatdıqdan sonra ilkin və aralıq müştəri materiallarının saxlanılan həcmini müqavilə, məcburi hüquqi saxlanma və təhlükəsizlik tələbləri nəzərə alınmaqla zəruri minimuma endirməkdir. Saxlanılan kateqoriyaların dəqiq tərkibi müvafiq saxlama rejimi ilə müəyyən edilir."
        }
      ],
      "actions": [
        {
          "label": "İnstitusional ssenarini müzakirə etmək",
          "href": "/contact"
        },
        {
          "label": "Nəticə sisteminə baxmaq",
          "href": "/result-system"
        }
      ]
    },
    "plus": {
      "title": "Konkret biznes məsələləri üçün yeddi ixtisaslaşmış məhsul",
      "lead": "Hər məhsul ayrıca problemi həll edir və öz analitik nəticəsini formalaşdırır.",
      "blocks": [
        {
          "type": "p",
          "text": "Azevsm Plus biznesin, layihənin və ya təşkilatın konkret sahəsinin ixtisaslaşmış təhlili tələb olunduqda tətbiq edilir. Yeddi məhsulun hər birinin öz predmet modeli, analitik tapşırığı və müstəqil nəticəsi var."
        },
        {
          "type": "heading",
          "text": "1. Büdcə təhlili"
        },
        {
          "type": "p",
          "text": "Vəziyyət: Təşkilat miqyaslanır, proqram başladır və ya resursları yenidən bölüşdürür və büdcənin real yükə davam gətirib-gətirməyəcəyini anlamaq istəyir.\nDəyər: Növbəti qərardan əvvəl büdcənin strukturunu, öhdəliklərin təzyiqini, planlaşdırmanın tamlığını və resurs hazırlığını görmək.\nİstifadəçilər: Sahibkar, rəhbərlik, proqram, investor və ya səlahiyyətli institusional tərəf."
        },
        {
          "type": "heading",
          "text": "2. İnvestisiya təhlili"
        },
        {
          "type": "p",
          "text": "Vəziyyət: Şirkət maliyyələşmənin yeni mərhələsinə hazırlaşır və ya investisiya proqramına yenidən baxır.\nDəyər: İnvestisiya mövqeyini, gələcək kapitaldan asılılığı, vəsaitlərin bölgüsünü və təsdiqlənmiş hazırlıq amillərini strukturlaşdırmaq.\nİstifadəçilər: Şirkət, investor, fond, korporativ tərəfdaş."
        },
        {
          "type": "heading",
          "text": "3. Maliyyə dayanıqlılığı"
        },
        {
          "type": "p",
          "text": "Vəziyyət: Artım sürətlənir, lakin mövcud maliyyə strukturunun yükə nə dərəcədə davam gətirəcəyi aydın deyil.\nDəyər: Likvidliyi, resurs sərfiyyatının tempini, sabit ödənişləri, dayanıqlılıq ehtiyatını və maliyyə təzyiqi sahələrini görmək.\nİstifadəçilər: Rəhbərlik, sahibkar, investor, maliyyə və ya institusional tərəf."
        },
        {
          "type": "heading",
          "text": "Daha dörd ixtisaslaşmış istiqamət"
        },
        {
          "type": "heading",
          "text": "4. İnstitusional risk konturları"
        },
        {
          "type": "p",
          "text": "Vəziyyət: Obyekt tərəfdaşlığa, institusional baxışa və ya daha mürəkkəb əməliyyat mühitinə hazırlaşır.\nDəyər: Təsdiqlənmiş risklərin, idarəetmə sapmalarının və əməliyyat zəifliklərinin strukturlaşdırılmış mənzərəsini əldə etmək.\nİstifadəçilər: Şirkət, tərəfdaş, fond, institut."
        },
        {
          "type": "heading",
          "text": "5. Dərinləşdirilmiş idarəetmə təhlili"
        },
        {
          "type": "p",
          "text": "Vəziyyət: Təşkilat böyüyür, mürəkkəbləşir və ya xarici baxışa hazırlaşır, idarəetmə sisteminin keyfiyyətini isə daxildən qiymətləndirmək çətindir.\nDəyər: Məsuliyyət bölgüsünü, qərarvermə proseslərinin yetkinliyini və idarəetmə riski sahələrini görmək.\nİstifadəçilər: Sahibkar, şura, investor, strateji tərəfdaş."
        },
        {
          "type": "heading",
          "text": "6. Məhsul üzərində hüquqların bütövlüyü"
        },
        {
          "type": "p",
          "text": "Vəziyyət: İnvestisiyadan, lisenziyalaşdırmadan, tərəfdaşlıqdan və ya miqyaslanmadan əvvəl məhsul üzərində hüquqların strukturunun nə dərəcədə təsdiqləndiyini və ziddiyyətsiz olduğunu anlamaq lazımdır.\nDəyər: Hüquq sahibliyi zəncirində, lisenziyalarda və hüquqların təsdiqində boşluqları aşkar etmək.\nİstifadəçilər: Şirkət, investor, tərəfdaş, səlahiyyətli hüquqi və ya institusional tərəf."
        },
        {
          "type": "heading",
          "text": "7. Dayanıqlılıq və xarici təsir"
        },
        {
          "type": "p",
          "text": "Vəziyyət: Təşkilat dayanıqlılığın və xarici təsirin ekoloji, sosial və digər təsdiqlənmiş aspektlərini strukturlaşdırılmış şəkildə nəzərdən keçirməlidir.\nDəyər: Ayrı-ayrı faktları daxili və ya institusional baxış üçün vahid predmet mənzərəsində birləşdirmək.\nİstifadəçilər: Şirkət, investor, proqram, institusional iştirakçı."
        },
        {
          "type": "heading",
          "text": "Müştəri nə əldə edir"
        },
        {
          "type": "p",
          "text": "Hər məhsul öz sabitləşdirilmiş nəticəsini və səviyyədən asılı olaraq hesabat, sübut, naviqasiya və təqdimat materialları toplusunu formalaşdırır. Daha dərin paket yeni hesablama yaratmır, eyni nəticənin anlaşılmasını genişləndirir."
        }
      ],
      "actions": [
        {
          "label": "Analitik tapşırığı müzakirə etmək",
          "href": "/contact"
        },
        {
          "label": "Nəticənin tərkibinə baxmaq",
          "href": "/result-system"
        }
      ]
    }
  },
  "ru": {
    "platform": {
      "title": "От сложных материалов — к структурированному аналитическому результату",
      "lead": "AzevsmAI помогает стартапам, компаниям, инвесторам и институциональным участникам получать сопоставимую аналитическую картину там, где ручной анализ становится медленным, неоднородным и плохо масштабируется.",
      "blocks": [
        {
          "type": "heading",
          "text": "Я представляю"
        },
        {
          "type": "p",
          "text": "Выберите свой сценарий — сайт сразу ведет к релевантному продукту и типу результата."
        },
        {
          "type": "table",
          "rows": [
            [
              "Стартап / основатель\nAzevsm Index — подготовка к внешнему рассмотрению, диагностика и инвестиционный контекст.",
              "Инвестор / фонд\nAzevsm Index и инвесторская экосистема — первичный структурированный анализ потока объектов."
            ],
            [
              "Компания / корпорация\nAzevsm Index, Azevsm Institutional Index или Azevsm Plus — в зависимости от задачи.",
              "Банк / институт\nAzevsm Institutional Index — единый доказательно связанный взгляд для институционального решения."
            ],
            [
              "Государственная / программная структура\nAzevsm Institutional Index и применимые специализированные продукты для отборочных и программных сценариев.",
              ""
            ]
          ]
        },
        {
          "type": "heading",
          "text": "Проблема, которую решает AzevsmAI"
        },
        {
          "type": "p",
          "text": "Инвесторы, банки, фонды, программы, стартапы и компании работают с большим объемом материалов: презентациями, публичной историей, заявленным потенциалом, рыночными данными, сведениями о команде, документами и ограничениями исходной информации. Первичный анализ требует времени, а результаты трудно сопоставлять, когда данные неполные, неоднородные или разного качества."
        },
        {
          "type": "p",
          "text": "AzevsmAI создает единую методологическую рамку для такого анализа: помогает отделить подтвержденные признаки от заявлений, увидеть сильные стороны и зоны внимания, зафиксировать ограничения данных и сформировать структурированный результат. Платформа рассчитана на масштабирование аналитики без сведения сложного объекта к упрощенному массовому скорингу."
        },
        {
          "type": "heading",
          "text": "Что делает AzevsmAI"
        },
        {
          "type": "p",
          "text": "AzevsmAI превращает разрозненные материалы в структурированную аналитическую модель, связывает ее с доказательной базой, применяет собственную методологию и продуктовую математику, фиксирует результат и затем формирует вокруг него разрешенный аналитический слой и клиентскую систему материалов."
        },
        {
          "type": "table",
          "rows": [
            [
              "Доказательства\nЗаявления отделяются от подтвержденных сведений и сохраняют связь с источниками.",
              "Структурированная модель\nОбъект рассматривается не как набор файлов, а как связанная аналитическая структура."
            ],
            [
              "Собственная методология\nПравила оценки и аналитические границы задаются собственной научно-технической методологией Azevsm Systems и применимым продуктом, а не свободным мнением исполнителя.",
              "Продуктовая математика\nРезультат формируется AzeVSM AI — собственной технологией искусственного интеллекта Azevsm Systems класса VSM — в рамках применимого продукта и его продуктовой математики."
            ],
            [
              "Воспроизводимый результат\nОдин и тот же подтвержденный вход и одна и та же версия правил должны вести к одному результату.",
              "Система результата\nКлиент получает не один документ, а согласованный набор материалов для разных уровней использования."
            ]
          ]
        },
        {
          "type": "heading",
          "text": "Глубина анализа. Сопоставимость. Масштаб."
        },
        {
          "type": "p",
          "text": "Ручной аналитический процесс трудно одинаково применять к большому потоку объектов. AzevsmAI переводит значительную часть этой работы в технологический цикл, который можно повторять по единой методологической дисциплине: сохранять глубину анализа, сопоставлять разные объекты и масштабировать первичное рассмотрение без перехода к произвольной генерации или простой рейтинговой цифре."
        }
      ],
      "actions": [
        {
          "label": "Подобрать продукт",
          "href": "/products"
        },
        {
          "label": "Посмотреть систему результата",
          "href": "/result-system"
        }
      ]
    },
    "products": {
      "title": "Три продуктовые линии для трех классов задач",
      "lead": "Одна технологическая основа, но разные аналитические модели, глубина и сценарии использования.",
      "blocks": [
        {
          "type": "table",
          "rows": [
            [
              "Azevsm Index\nДля стартапов, проектов и компаний, которым нужна структурированная оценка перед инвестициями, внешним рассмотрением, партнерством или внутренней диагностикой. Также полезен инвесторской стороне для первичного сопоставимого анализа потока объектов."
            ],
            [
              "Azevsm Institutional Index\nДля банков, фондов, институциональных инвесторов, корпоративных и государственных структур, когда нужен единый доказательно связанный взгляд для более сложного процесса принятия решения."
            ],
            [
              "Azevsm Plus\nСемь специализированных продуктов для конкретных вопросов: бюджет, инвестиции, финансовая устойчивость, риски, управление, права на продукт, устойчивость и внешнее воздействие."
            ]
          ]
        },
        {
          "type": "heading",
          "text": "Как выбрать"
        },
        {
          "type": "p",
          "text": "Если вопрос звучит «как выглядит стартап или компания в структурированной системе оценки?» — нужен Azevsm Index. Если результат должен использоваться в институциональной среде несколькими уровнями участников и сопровождаться расширенной системой аналитических объектов — Azevsm Institutional Index. Если требуется глубокий разбор конкретной области бизнеса или организации — выбирается соответствующий продукт Azevsm Plus."
        }
      ],
      "actions": [
        {
          "label": "Azevsm Index",
          "href": "/products/azevsm-index"
        },
        {
          "label": "Azevsm Institutional Index",
          "href": "/products/azevsm-institutional-index"
        },
        {
          "label": "Azevsm Plus",
          "href": "/products/azevsm-plus"
        }
      ]
    },
    "index": {
      "title": "Посмотреть на стартап, проект или компанию глазами внешней структурированной оценки",
      "lead": "Для основателей и компаний — подготовка и диагностика. Для инвесторов и фондов — сопоставимый первичный аналитический слой.",
      "blocks": [
        {
          "type": "heading",
          "text": "Если вы основатель, команда или компания"
        },
        {
          "type": "p",
          "text": "Вы готовитесь к инвестициям, переговорам, партнерству или следующему этапу роста. Внутри проекта многое кажется очевидным, но внешняя сторона видит только то, что подтверждается материалами. Azevsm Index помогает понять, где профиль действительно силен, где доказательства отстают от презентации и какие зоны требуют внимания до более серьезного внешнего рассмотрения."
        },
        {
          "type": "list",
          "items": [
            "подготовка к инвестиционному раунду или встречам с инвесторами;",
            "внутренняя диагностика перед масштабированием или партнерством;",
            "проверка того, какие сильные стороны уже подтверждены, а какие пока остаются заявлением;",
            "понимание структурных слабостей и зон, которые могут вызвать вопросы у внешней стороны;",
            "работа на стадии идеи или до регистрации компании, когда применим соответствующий маршрут."
          ]
        },
        {
          "type": "heading",
          "text": "Если вы инвестор, фонд или корпоративный участник"
        },
        {
          "type": "p",
          "text": "Когда перед командой находится большой поток компаний из разных рынков, глубокая ручная проверка каждой на первом этапе слишком ресурсоемка. Azevsm Index создает единый структурированный слой для первичного рассмотрения и сопоставления объектов, помогая понять, какие кейсы требуют более глубокой проверки."
        },
        {
          "type": "list",
          "items": [
            "первичная аналитика большого потока стартапов и компаний;",
            "сопоставимость объектов из разных стран и с разным качеством исходных материалов;",
            "снижение зависимости от индивидуальной интуиции на первом этапе отбора;",
            "подготовка к более дорогой экспертной или комплексной проверке;",
            "работа с международным потоком сделок и программным отбором."
          ]
        },
        {
          "type": "heading",
          "text": "Контекст зрелости имеет значение"
        },
        {
          "type": "p",
          "text": "Azevsm Index не предполагает, что более зрелая компания автоматически сильнее раннего проекта. Оценка учитывает контекст стадии развития, но не смешивает зрелость с качеством результата. Поэтому объекты разного уровня развития рассматриваются в сопоставимой, но контекстно корректной аналитической рамке."
        },
        {
          "type": "heading",
          "text": "Что получает клиент"
        },
        {
          "type": "p",
          "text": "В зависимости от пакета это может быть основной индексный результат, расширенный аналитический отчет, краткий обзор, навигатор, досье доказательной основы и проверяемости, а также презентация результата. Ценность состоит не в количестве файлов, а в том, что все они представляют один и тот же зафиксированный аналитический результат на разной глубине."
        },
        {
          "type": "p",
          "text": "После оценки разрешенный результат может продолжать существовать в цифровой среде AzevsmAI и, при согласии оцениваемого объекта, участвовать в контролируемом контуре Индексного поля."
        },
        {
          "type": "note",
          "title": "Граница применения",
          "body": "Azevsm Index помогает структурировать предварительное рассмотрение и подготовку к более глубокому анализу. Он не заменяет инвестиционное решение, кредитное решение или обязательную комплексную проверку."
        }
      ],
      "actions": [
        {
          "label": "Начать оценку",
          "href": "/contact"
        },
        {
          "label": "Посмотреть пример системы результата",
          "href": "/result-system"
        }
      ]
    },
    "institutional": {
      "title": "Один структурированный взгляд для институционального решения",
      "lead": "Для банков, фондов, институциональных инвесторов, корпоративных структур, государственных и программных организаций.",
      "blocks": [
        {
          "type": "heading",
          "text": "Когда нужен институциональный уровень"
        },
        {
          "type": "p",
          "text": "Институциональное решение редко принимает один человек. Материал проходит через аналитиков, руководителей, комитеты, правовые и профильные функции. Если каждая сторона заново собирает свою картину, появляются разрывы в смысле, доказательствах и версии результата."
        },
        {
          "type": "p",
          "text": "Azevsm Institutional Index формирует единый доказательно связанный аналитический контур, который можно использовать на разных уровнях рассмотрения без создания разных расчетных версий для разных участников."
        },
        {
          "type": "heading",
          "text": "Для каких задач"
        },
        {
          "type": "list",
          "items": [
            "структурированное рассмотрение компании или проекта банком, фондом или институциональным инвестором;",
            "подготовка материалов для инвестиционного, кредитного, отборочного или иного уполномоченного комитета;",
            "анализ в корпоративных программах развития, партнерства и стратегического отбора;",
            "оценка в государственных, суверенных и программных контурах, где требуется воспроизводимая доказательная основа;",
            "единый аналитический язык между участниками, которым нужна разная глубина материала."
          ]
        },
        {
          "type": "heading",
          "text": "IIT 4D"
        },
        {
          "type": "p",
          "text": "IIT 4D представляет институциональный результат через четыре институциональных измерения и помогает рассматривать его как связанную аналитическую картину. Это не декоративная визуализация и не второй расчет, а цифровая форма работы с уже зафиксированным результатом."
        },
        {
          "type": "heading",
          "text": "Что получает организация"
        },
        {
          "type": "p",
          "text": "В зависимости от пакета система результата может включать полный институциональный отчет, краткий обзор для руководства, досье доказательств и прослеживаемости, презентацию, паспорт результата, интерактивный навигатор, углубленное аналитическое досье, цифровую модель IIT 4D и White Box в тех режимах, где он разрешен."
        },
        {
          "type": "heading",
          "text": "Для чувствительных данных"
        },
        {
          "type": "p",
          "text": "Для институциональных сценариев архитектура предусматривает режим минимизированного хранения. Его назначение — после завершения обработки сократить сохраняемый объем исходных и промежуточных клиентских материалов до минимально необходимого уровня с учетом договора, обязательного правового удержания и требований безопасности. Точный состав сохраняемых категорий определяется соответствующим режимом хранения."
        }
      ],
      "actions": [
        {
          "label": "Обсудить институциональный сценарий",
          "href": "/contact"
        },
        {
          "label": "Посмотреть систему результата",
          "href": "/result-system"
        }
      ]
    },
    "plus": {
      "title": "Семь специализированных продуктов для конкретных бизнес-вопросов",
      "lead": "Каждый продукт отвечает на отдельную проблему и формирует собственный аналитический результат.",
      "blocks": [
        {
          "type": "p",
          "text": "Azevsm Plus применяется, когда требуется специализированный анализ конкретной области бизнеса, проекта или организации. Каждый из семи продуктов имеет собственную предметную модель, аналитическую задачу и самостоятельный результат."
        },
        {
          "type": "heading",
          "text": "1. Бюджетный анализ"
        },
        {
          "type": "p",
          "text": "Ситуация: организация масштабируется, запускает программу или перераспределяет ресурсы и хочет понять, выдерживает ли бюджет фактическую нагрузку.\nЦенность: увидеть структуру бюджета, давление обязательств, полноту планирования и ресурсную готовность до принятия следующего решения.\nПользователи: собственник, руководство, программа, инвестор или уполномоченная институциональная сторона."
        },
        {
          "type": "heading",
          "text": "2. Инвестиционный анализ"
        },
        {
          "type": "p",
          "text": "Ситуация: компания готовится к новой фазе финансирования или пересматривает инвестиционную программу.\nЦенность: структурировать инвестиционную позицию, зависимость от будущего капитала, распределение средств и подтвержденные факторы готовности.\nПользователи: компания, инвестор, фонд, корпоративный партнер."
        },
        {
          "type": "heading",
          "text": "3. Финансовая устойчивость"
        },
        {
          "type": "p",
          "text": "Ситуация: рост ускоряется, но непонятно, насколько текущая финансовая структура выдержит нагрузку.\nЦенность: увидеть ликвидность, темп расходования ресурсов, фиксированные платежи, запас устойчивости и зоны финансового давления.\nПользователи: руководство, собственник, инвестор, финансовая или институциональная сторона."
        },
        {
          "type": "heading",
          "text": "Еще четыре специализированных направления"
        },
        {
          "type": "heading",
          "text": "4. Институциональные контуры риска"
        },
        {
          "type": "p",
          "text": "Ситуация: объект готовится к партнерству, институциональному рассмотрению или более сложной операционной среде.\nЦенность: получить структурированную картину подтвержденных рисков, управленческих отклонений и операционных уязвимостей.\nПользователи: компания, партнер, фонд, институт."
        },
        {
          "type": "heading",
          "text": "5. Углубленный анализ управления"
        },
        {
          "type": "p",
          "text": "Ситуация: организация растет, усложняется или готовится к внешнему рассмотрению, а качество управленческой системы трудно оценить изнутри.\nЦенность: увидеть распределение ответственности, зрелость процессов принятия решений и зоны управленческого риска.\nПользователи: собственник, совет, инвестор, стратегический партнер."
        },
        {
          "type": "heading",
          "text": "6. Целостность прав на продукт"
        },
        {
          "type": "p",
          "text": "Ситуация: перед инвестициями, лицензированием, партнерством или масштабированием нужно понять, насколько структура прав на продукт подтверждена и непротиворечива.\nЦенность: выявить пробелы в цепочке правообладания, лицензиях и подтверждении прав.\nПользователи: компания, инвестор, партнер, уполномоченная правовая или институциональная сторона."
        },
        {
          "type": "heading",
          "text": "7. Устойчивость и внешнее воздействие"
        },
        {
          "type": "p",
          "text": "Ситуация: организации нужно структурированно рассмотреть экологические, социальные и иные подтвержденные аспекты устойчивости и внешнего воздействия.\nЦенность: собрать разрозненные факты в единую предметную картину для внутреннего или институционального рассмотрения.\nПользователи: компания, инвестор, программа, институциональный участник."
        },
        {
          "type": "heading",
          "text": "Что получает клиент"
        },
        {
          "type": "p",
          "text": "Каждый продукт формирует собственный зафиксированный результат и, в зависимости от уровня, набор отчетных, доказательных, навигационных и презентационных материалов. Более глубокий пакет расширяет понимание того же результата, а не создает новый расчет."
        }
      ],
      "actions": [
        {
          "label": "Обсудить аналитическую задачу",
          "href": "/contact"
        },
        {
          "label": "Посмотреть состав результата",
          "href": "/result-system"
        }
      ]
    }
  }
};

export function getProductAuthorityPage(locale: Locale, key: ProductAuthorityKey): AuthorityPage | null {
  if (locale !== "en" && locale !== "az" && locale !== "ru") return null;
  return pages[locale][key];
}
