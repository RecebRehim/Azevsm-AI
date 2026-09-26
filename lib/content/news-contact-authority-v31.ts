import type { Locale } from "@/lib/i18n";

type Locale3 = "en" | "az" | "ru";

export const newsAuthority = {
  en: {
    title: "Developing the Technology Through Evidence, Research, and Validation",
    lead: "Product updates, research materials, control testing, and professional events.",
    intro: "This section publishes substantive updates from Azevsm Systems and AzevsmAI: product development, research materials, results of control testing, and verified participation in professional events.",
    items: [
      "material product changes and new client capabilities;",
      "research in structured assessment, systems analysis, and reproducibility;",
      "anonymized results of control series in a form that is safe for intellectual property;",
      "materials on methodology and semantic ontology at a publicly permissible level;",
      "talks, conferences, and professional events where participation is verified;",
      "research on efficiency, reproducibility, and analytical-cycle time as substantiated results become available.",
    ],
    noteTitle: "Technological analytical cycle",
    note: "AzevsmAI moves a substantial part of the lengthy manual analytical process into a structured technological cycle while maintaining a common methodological discipline across different objects and scenarios.",
  },
  az: {
    title: "Texnologiyanın faktlar, tədqiqat və yoxlama vasitəsilə inkişafı",
    lead: "Məhsul yenilikləri, tədqiqat materialları, nəzarət sınaqları və peşəkar tədbirlər.",
    intro: "Burada Azevsm Systems və AzevsmAI üzrə məzmunlu yeniliklər dərc olunur: məhsulların inkişafı, tədqiqat materialları, nəzarət sınaqlarının nəticələri və peşəkar tədbirlərdə təsdiqlənmiş iştirak.",
    items: [
      "məhsullarda əhəmiyyətli dəyişikliklər və yeni müştəri imkanları;",
      "strukturlaşdırılmış qiymətləndirmə, sistem təhlili və təkrarlana bilmə sahəsində tədqiqatlar;",
      "əqli mülkiyyət üçün təhlükəsiz formada anonimləşdirilmiş nəzarət seriyalarının nəticələri;",
      "metodologiya və semantik ontologiya haqqında ictimaiyyət üçün yol verilən səviyyədə materiallar;",
      "iştirakı təsdiqlənmiş çıxışlar, konfranslar və peşəkar tədbirlər;",
      "təsdiqlənmiş nəticələr yarandıqca analitik dövrün səmərəliliyi, təkrarlana bilməsi və müddəti üzrə tədqiqatlar.",
    ],
    noteTitle: "Texnoloji analitik dövr",
    note: "AzevsmAI uzunmüddətli əl ilə aparılan analitik prosesin əhəmiyyətli hissəsini strukturlaşdırılmış texnoloji dövrə keçirir və müxtəlif obyekt və ssenarilərlə iş zamanı vahid metodoloji intizamı qoruyur.",
  },
  ru: {
    title: "Развитие технологии через факты, исследования и проверку",
    lead: "Продуктовые обновления, исследовательские материалы, контрольные испытания и профессиональные события.",
    intro: "Здесь публикуются содержательные обновления Azevsm Systems и AzevsmAI: развитие продуктов, исследовательские материалы, результаты контрольных испытаний и подтвержденное участие в профессиональных событиях.",
    items: [
      "существенные изменения продуктов и новые клиентские возможности;",
      "исследования в области структурированной оценки, системного анализа и воспроизводимости;",
      "обезличенные результаты контрольных серий в безопасной для интеллектуальной собственности форме;",
      "материалы о методологии и семантической онтологии на публично допустимом уровне;",
      "выступления, конференции и профессиональные мероприятия, участие в которых подтверждено;",
      "исследования эффективности, воспроизводимости и времени аналитического цикла по мере появления подтвержденных результатов.",
    ],
    noteTitle: "Технологический аналитический цикл",
    note: "AzevsmAI переводит значительную часть длительного ручного аналитического процесса в структурированный технологический цикл, сохраняя единую методологическую дисциплину при работе с разными объектами и сценариями.",
  },
} as const;

export const contactAuthority = {
  en: {
    title: "Discuss a Task, Product, or Institutional Scenario",
    lead: "A single point of entry for startups, companies, investors, banks, funds, programmes, and partners.",
    intro: "Choose the type of task — assessment of a startup or company, an investor scenario, institutional analysis, a specialized Azevsm Plus product, a demonstration, partnership, or support. The enquiry will be directed to the appropriate route.",
    items: ["assessment of a startup, project, or company;","investor or fund scenario;","institutional assessment;","one of the seven Azevsm Plus products;","platform demonstration;","partnership or research collaboration;","support for an existing client."],
    formTitle: "Text next to the form",
    formText: "Briefly describe the task, type of organisation, and desired result. If the enquiry concerns assessment of a company on behalf of an organisation or third party, the appropriate authority and access procedure will be clarified separately.",
    warning: "Do not send confidential documents, passwords, payment details, or sensitive personal data through the general form. A separate protected route is used for working materials.",
  },
  az: {
    title: "Tapşırığı, məhsulu və ya institusional ssenarini müzakirə etmək",
    lead: "Startaplar, şirkətlər, investorlar, banklar, fondlar, proqramlar və tərəfdaşlar üçün vahid giriş nöqtəsi.",
    intro: "Tapşırığın növünü seçin — startapın və ya şirkətin qiymətləndirilməsi, investor ssenarisi, institusional təhlil, Azevsm Plus-un ixtisaslaşmış məhsulu, demonstrasiya, tərəfdaşlıq və ya dəstək. Müraciət uyğun marşruta yönləndiriləcək.",
    items: ["startapın, layihənin və ya şirkətin qiymətləndirilməsi;","investor və ya fond ssenarisi;","institusional qiymətləndirmə;","Azevsm Plus-un yeddi məhsulundan biri;","platformanın nümayişi;","tərəfdaşlıq və ya tədqiqat əməkdaşlığı;","mövcud müştəriyə dəstək."],
    formTitle: "Formanın yanında mətn",
    formText: "Tapşırığı, təşkilat növünü və arzu olunan nəticəni qısa şəkildə təsvir edin. Müraciət təşkilat və ya üçüncü tərəf adından şirkətin qiymətləndirilməsi ilə bağlıdırsa, uyğun səlahiyyət və giriş qaydası ayrıca dəqiqləşdiriləcək.",
    warning: "Ümumi forma vasitəsilə məxfi sənədlər, parollar, ödəniş rekvizitləri və həssas fərdi məlumatlar göndərməyin. İş materialları üçün ayrıca qorunan marşrut istifadə olunur.",
  },
  ru: {
    title: "Обсудить задачу, продукт или институциональный сценарий",
    lead: "Единая точка входа для стартапов, компаний, инвесторов, банков, фондов, программ и партнеров.",
    intro: "Выберите тип задачи — оценка стартапа или компании, инвесторский сценарий, институциональный анализ, специализированный продукт Azevsm Plus, демонстрация, партнерство или поддержка. Обращение будет направлено в соответствующий контур.",
    items: ["оценка стартапа, проекта или компании;","инвесторский или фондовый сценарий;","институциональная оценка;","один из семи продуктов Azevsm Plus;","демонстрация платформы;","партнерство или исследовательское сотрудничество;","поддержка текущего клиента."],
    formTitle: "Текст рядом с формой",
    formText: "Кратко опишите задачу, тип организации и желаемый результат. Если запрос связан с оценкой компании от имени организации или третьей стороны, подходящий порядок полномочий и доступа будет уточнен отдельно.",
    warning: "Не отправляйте через общую форму конфиденциальные документы, пароли, платежные реквизиты или чувствительные персональные данные. Для рабочих материалов используется отдельный защищенный маршрут.",
  },
} as const;

export function getNewsAuthority(locale: Locale) {
  return locale === "en" || locale === "az" || locale === "ru" ? newsAuthority[locale as Locale3] : null;
}
export function getContactAuthority(locale: Locale) {
  return locale === "en" || locale === "az" || locale === "ru" ? contactAuthority[locale as Locale3] : null;
}
