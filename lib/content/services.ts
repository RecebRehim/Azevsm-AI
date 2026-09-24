import type { Locale } from "@/lib/i18n";

export type PublishStatus = "draft" | "review" | "approved" | "published";

export type ServiceRecord = {
  id: string;
  serviceCode: string;
  slug: string;
  status: PublishStatus;
  labels: Record<Locale, string>;
  summary: Record<Locale, string>;
  focus: Record<Locale, { forWhom: string; problem: string; evidence: string }>;
  sourceOwner: string;
  reviewDate: string;
};

export const services: ServiceRecord[] = [
  {
    id: "svc-pb",
    serviceCode: "PB",
    slug: "budget-analysis",
    status: "published",
    sourceOwner: "AzevsmAI Systems",
    reviewDate: "2026-09-16",
    labels: {
      ru: "Бюджетный анализ",
      en: "Budget analysis",
      az: "Büdcə təhlili",
      ar: "تحليل الميزانية",
      zh: "预算分析",
    },
    summary: {
      en: "A structured reading of budget evidence inside Azevsm Plus. It does not replace the platform and it is not a single score.",
      az: "Azevsm Plus daxilində büdcə sübutunun strukturlaşdırılmış oxunuşu. Platformanı əvəz etmir və tək skor deyil.",
      ar: "قراءة منظّمة لأدلة الميزانية داخل Azevsm Plus. لا يستبدل المنصة وليس درجة واحدة.",
      zh: "在 Azevsm Plus 内对预算证据进行结构化审阅。它不替代平台，也不是单一分数。",
      ru: "Структурированное чтение бюджетных свидетельств внутри Azevsm Plus. Это не замена платформы и не единый балл.",
    },
    focus: focus(
      ["Teams that need the budget contour separated from a general narrative.", "A single score does not show whether the budget evidence was validated.", "Budget evidence supplied for the engagement. Missing items stay unknown."],
      ["Büdcə konturunu ümumi nəqllən ayırmaq istəyən komandalar.", "Tək skor büdcə sübutunun yoxlanıb-yoxlanmadığını göstərmir.", "İş üçün təqdim olunan büdcə sübutu. Çatışmayanlar naməlum qalır."],
      ["فرق تريد فصل محيط الميزانية عن السرد العام.", "الدرجة الواحدة لا تُظهر هل فُحص دليل الميزانية.", "دليل الميزانية المقدّم للعمل. الناقص يبقى مجهولًا."],
      ["需要把预算轮廓从笼统叙述中分开的团队。", "单一分数看不出预算证据是否经过核验。", "为该项工作提供的预算证据。缺失项保持未知。"],
      ["Команды, которым нужно отделить бюджетный контур от общего рассказа.", "Единичный балл не показывает, проверены ли бюджетные свидетельства.", "Бюджетные свидетельства этой работы. Отсутствующее остаётся неизвестным."],
    ),
  },
  {
    id: "svc-ei",
    serviceCode: "EI",
    slug: "investment-analysis",
    status: "published",
    sourceOwner: "AzevsmAI Systems",
    reviewDate: "2026-09-16",
    labels: {
      ru: "Инвестиционный анализ",
      en: "Investment analysis",
      az: "İnvestisiya təhlili",
      ar: "التحليل الاستثماري",
      zh: "投资分析",
    },
    summary: {
      en: "A structured investment reading that stays inside governed evidence, validation and explanation.",
      az: "İdarə olunan sübut, yoxlama və izah daxilində qalan strukturlaşdırılmış investisiya oxunuşu.",
      ar: "قراءة استثمارية منظّمة تبقى داخل الأدلة والتحقق والتفسير المحكوم.",
      zh: "在受治理的证据、核验与解释之内进行的结构化投资审阅。",
      ru: "Структурированное инвестиционное чтение внутри управляемых свидетельств, проверки и объяснения.",
    },
    focus: focus(
      ["Readers who need an investment contour inside the platform, not a free-form opinion.", "Investment claims are hard to compare when each review invents its own frame.", "The investment evidence named for the engagement."],
      ["Platformanın içində sərbəst rəy deyil, investisiya konturu istəyənlər.", "Hər baxış öz çərçivəsini quranda investisiya iddialarını müqayisə etmək çətin olur.", "İş üçün adlandırılmış investisiya sübutu."],
      ["من يحتاج محيطًا استثماريًا داخل المنصة، لا رأيًا حرًا.", "يصعب مقارنة ادعاءات الاستثمار حين يخترع كل استعراض إطاره.", "دليل الاستثمار المحدد لذلك العمل."],
      ["需要平台内的投资轮廓，而不是自由意见的读者。", "每次审阅自定框架时，投资主张难以比较。", "该项工作指定的投资证据。"],
      ["Читатели, которым нужен инвестиционный контур внутри платформы, а не свободное мнение.", "Инвестиционные утверждения трудно сравнивать, если каждый обзор задаёт свою рамку.", "Инвестиционные свидетельства, названные для этой работы."],
    ),
  },
  {
    id: "svc-cf",
    serviceCode: "CF",
    slug: "financial-resilience",
    status: "published",
    sourceOwner: "AzevsmAI Systems",
    reviewDate: "2026-09-16",
    labels: {
      ru: "Финансовая устойчивость",
      en: "Financial resilience",
      az: "Maliyyə dayanıqlığı",
      ar: "المتانة المالية",
      zh: "财务稳健性",
    },
    summary: {
      en: "A resilience contour for financial evidence. The public name is the full service title, not an engineering code.",
      az: "Maliyyə sübutu üçün dayanıqlıq konturu. İctimai ad tam servis adıdır.",
      ar: "محيط متانة للأدلة المالية. الاسم العام هو العنوان الكامل للخدمة.",
      zh: "面向财务证据的稳健性轮廓。公开名称是完整服务名称。",
      ru: "Контур устойчивости для финансовых свидетельств. Публичное имя — полное название сервиса.",
    },
    focus: focus(
      ["Users who need financial resilience read as a contour, not as a headline ratio.", "A ratio without its evidence path cannot be traced.", "Financial evidence required for this contour."],
      ["Maliyyə dayanıqlığını başlıq nisbəti kimi deyil, kontur kimi oxumaq istəyənlər.", "Sübut yolu olmayan nisbət izlənilə bilmir.", "Bu kontur üçün tələb olunan maliyyə sübutu."],
      ["من يحتاج قراءة المتانة المالية كمحيط، لا كنسبة في العنوان.", "النسبة بلا مسار دليل لا تُتتبع.", "الدليل المالي المطلوب لهذا المحيط."],
      ["要把财务稳健性读成轮廓，而不是标题比率的使用者。", "没有证据路径的比率无法追溯。", "该轮廓所需的财务证据。"],
      ["Тем, кому нужна финансовая устойчивость как контур, а не как коэффициент в заголовке.", "Коэффициент без пути свидетельств нельзя проследить.", "Финансовые свидетельства, нужные этому контуру."],
    ),
  },
  {
    id: "svc-cr",
    serviceCode: "CR",
    slug: "institutional-risk-contours",
    status: "published",
    sourceOwner: "AzevsmAI Systems",
    reviewDate: "2026-09-16",
    labels: {
      ru: "Институциональные контуры риска",
      en: "Institutional risk contours",
      az: "İnstitusional risk konturları",
      ar: "محيطات المخاطر المؤسسية",
      zh: "机构风险轮廓",
    },
    summary: {
      en: "Institutional risk is described as contours of evidence, not as an opaque label.",
      az: "İnstitusional risk qeyri-şəffaf etiket kimi deyil, sübut konturları kimi təsvir olunur.",
      ar: "يُوصف الخطر المؤسسي كمحيطات أدلة، لا كتسمية مبهمة.",
      zh: "机构风险以证据轮廓来描述，而不是不透明标签。",
      ru: "Институциональный риск описывается как контуры свидетельств, а не как непрозрачная метка.",
    },
    focus: focus(
      ["Institutions that need risk described as evidence contours.", "An opaque risk label cannot be compared or explained.", "The risk evidence the engagement actually contains."],
      ["Riskin sübut konturları kimi təsvirini istəyən institutlar.", "Qeyri-şəffaf risk etiketini müqayisə və izah etmək olmur.", "İşin həqiqətən saxladığı risk sübutu."],
      ["مؤسسات تحتاج وصف الخطر كمحيطات أدلة.", "لا يمكن مقارنة تسمية خطر مبهمة أو شرحها.", "دليل الخطر الذي يحتويه العمل فعلًا."],
      ["需要把风险写成证据轮廓的机构。", "不透明的风险标签无法比较，也无法解释。", "该项工作实际包含的风险证据。"],
      ["Институтам, которым риск нужен как контуры свидетельств.", "Непрозрачную метку риска нельзя сравнить или объяснить.", "Свидетельства риска, которые работа действительно содержит."],
    ),
  },
  {
    id: "svc-gov",
    serviceCode: "GOV+",
    slug: "advanced-governance-analysis",
    status: "published",
    sourceOwner: "AzevsmAI Systems",
    reviewDate: "2026-09-16",
    labels: {
      ru: "Углублённый анализ управления",
      en: "Advanced governance analysis",
      az: "İdarəetmənin dərin təhlili",
      ar: "التحليل المتعمق للحوكمة",
      zh: "治理深度分析",
    },
    summary: {
      en: "A deeper governance reading inside Azevsm Plus. Authority to assess remains with the platform's governed process.",
      az: "Azevsm Plus daxilində daha dərin idarəetmə oxunuşu. Qiymətləndirmə səlahiyyəti platformanın idarə olunan prosesində qalır.",
      ar: "قراءة أعمق للحوكمة داخل Azevsm Plus. تبقى صلاحية التقييم في العملية المحكومة للمنصة.",
      zh: "Azevsm Plus 内更深入的治理审阅。评估权仍属于平台受治理的流程。",
      ru: "Более глубокое чтение управления внутри Azevsm Plus. Полномочие оценки остаётся у управляемого процесса платформы.",
    },
    focus: focus(
      ["Readers who need governance examined without turning AI into the authority.", "A narrative about management is not a governed reading.", "Governance evidence supplied for the service."],
      ["AI-ni səlahiyyətə çevirmədən idarəetməni incələmək istəyənlər.", "İdarəetmə haqqında nəql idarə olunan oxunuş deyil.", "Servis üçün təqdim olunan idarəetmə sübutu."],
      ["من يحتاج فحص الحوكمة من دون جعل الذكاء سلطة.", "السرد عن الإدارة ليس قراءة محكومة.", "دليل الحوكمة المقدّم للخدمة."],
      ["需要审查治理，而不把人工智能变成权威的读者。", "关于管理的叙述不是受治理的阅读。", "为该服务提供的治理证据。"],
      ["Читателям, которым нужно управление без передачи полномочия AI.", "Рассказ об управлении не является управляемым чтением.", "Свидетельства управления, представленные для сервиса."],
    ),
  },
  {
    id: "svc-ip",
    serviceCode: "IP+",
    slug: "product-rights-integrity",
    status: "published",
    sourceOwner: "AzevsmAI Systems",
    reviewDate: "2026-09-16",
    labels: {
      ru: "Целостность прав на продукт",
      en: "Product rights integrity",
      az: "Məhsul hüquqlarının bütövlüyü",
      ar: "سلامة حقوق المنتج",
      zh: "产品权利完整性",
    },
    summary: {
      en: "A structured look at product-rights evidence. It does not publish protected legal mechanics.",
      az: "Məhsul hüquqları sübutuna strukturlaşdırılmış baxış. Qorunan hüquqi mexanikləri dərc etmir.",
      ar: "نظرة منظّمة إلى أدلة حقوق المنتج. لا ينشر الآليات القانونية المحمية.",
      zh: "对产品权利证据的结构化查看。不公布受保护的法律机制。",
      ru: "Структурированный взгляд на свидетельства прав на продукт. Защищённые юридические механики не публикуются.",
    },
    focus: focus(
      ["Teams checking whether product-rights evidence is present and traceable.", "A rights claim without its sources cannot be explained in public.", "Product-rights evidence. Protected legal mechanics stay unpublished."],
      ["Məhsul hüquqları sübutunun mövcud və izlənilə bilən olub-olmadığını yoxlayan komandalar.", "Mənbəyi olmayan hüquq iddiası ictimai izah oluna bilmir.", "Məhsul hüquqları sübutu. Qorunan hüquqi mexanika dərc olunmur."],
      ["فرق تتحقق من حضور دليل حقوق المنتج وإمكان تتبعه.", "ادعاء حقوق بلا مصادر لا يُشرح علنًا.", "دليل حقوق المنتج. الآليات القانونية المحمية لا تُنشر."],
      ["核验产品权利证据是否存在且可追溯的团队。", "没有来源的权利主张无法公开解释。", "产品权利证据。受保护的法律机制不予公布。"],
      ["Команды, проверяющие, есть ли свидетельства прав на продукт и можно ли их проследить.", "Утверждение о правах без источников нельзя объяснить публично.", "Свидетельства прав на продукт. Защищённые юридические механики не публикуются."],
    ),
  },
  {
    id: "svc-esg",
    serviceCode: "ESG+",
    slug: "sustainability-external-impact",
    status: "published",
    sourceOwner: "AzevsmAI Systems",
    reviewDate: "2026-09-16",
    labels: {
      ru: "Контур устойчивости и внешнего воздействия",
      en: "Sustainability and external impact contour",
      az: "Dayanıqlıq və xarici təsir konturu",
      ar: "محيط الاستدامة والأثر الخارجي",
      zh: "可持续性与外部影响轮廓",
    },
    summary: {
      en: "A contour for sustainability and external-impact evidence, kept separate from other Azevsm Plus services.",
      az: "Dayanıqlıq və xarici təsir sübutu üçün kontur. Digər Azevsm Plus servislərindən ayrı saxlanılır.",
      ar: "محيط لأدلة الاستدامة والأثر الخارجي، منفصل عن خدمات Azevsm Plus الأخرى.",
      zh: "可持续性与外部影响证据的轮廓，与其他 Azevsm Plus 服务分开。",
      ru: "Контур свидетельств устойчивости и внешнего воздействия, отдельно от других сервисов Azevsm Plus.",
    },
    focus: focus(
      ["Readers who need sustainability and external impact kept as its own contour.", "Mixing this evidence into another service hides what was actually checked.", "Sustainability and external-impact evidence for this contour only."],
      ["Dayanıqlıq və xarici təsiri öz konturu kimi saxlamaq istəyənlər.", "Bu sübutu başqa servisə qatmaq nəyin yoxlandığını gizlədir.", "Yalnız bu kontur üçün dayanıqlıq və xarici təsir sübutu."],
      ["من يحتاج إبقاء الاستدامة والأثر الخارجي كمحيط مستقل.", "خلط هذا الدليل بخدمة أخرى يخفي ما فُحص فعلًا.", "دليل الاستدامة والأثر الخارجي لهذا المحيط فقط."],
      ["需要把可持续性与外部影响保持为独立轮廓的读者。", "把这份证据混进其他服务会掩盖实际核验的内容。", "仅用于该轮廓的可持续性与外部影响证据。"],
      ["Читателям, которым устойчивость и внешнее воздействие нужны отдельным контуром.", "Смешение этих свидетельств с другим сервисом скрывает, что именно проверено.", "Свидетельства устойчивости и внешнего воздействия только для этого контура."],
    ),
  },
];

function focus(
  en: [string, string, string],
  az: [string, string, string],
  ar: [string, string, string],
  zh: [string, string, string],
  ru: [string, string, string],
): ServiceRecord["focus"] {
  const pack = (item: [string, string, string]) => ({ forWhom: item[0], problem: item[1], evidence: item[2] });
  return { en: pack(en), az: pack(az), ar: pack(ar), zh: pack(zh), ru: pack(ru) };
}

export function publicServices(locale: Locale) {
  return services.filter((service) => {
    const label = service.labels[locale]?.trim();
    return service.status === "published" && Boolean(label) && label !== service.serviceCode;
  });
}

export function serviceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
