import Image from "next/image";
import { getRuCorporateContent } from "@/lib/corporate-cms";

const technicalLeadershipPreview = [
  {
    id: "technical-leadership-preview",
    name: "Технический preview карточки руководителя",
    role: "Непубличные технические данные",
    profile: "Проверка компоновки блока. Реальные имя, должность, биография и фото публикуются только из утверждённой записи Payload CMS.",
    photoUrl: null,
    photoAlt: "",
    publicProfileUrl: null,
  },
];

const technicalPartnerPreview = [
  {
    id: "technical-partner-preview",
    name: "Технический preview карточки партнёра",
    description: "Проверка компоновки блока. Реальные партнёр, логотип и описание публикуются только из утверждённой записи Payload CMS.",
    logoUrl: null,
    logoAlt: "",
    publicUrl: null,
  },
];

export async function RuCompanyCorporateSections() {
  const content = await getRuCorporateContent();
  const acceptancePreview = process.env.CORPORATE_ACCEPTANCE_PREVIEW === "1" || process.env.VERCEL_ENV === "preview";
  const leadership =
    content.leadershipEnabled && content.leadership.length
      ? content.leadership
      : acceptancePreview ? technicalLeadershipPreview : [];
  const partners =
    content.partnersEnabled && content.partners.length
      ? content.partners
      : acceptancePreview ? technicalPartnerPreview : [];

  if (!leadership.length && !partners.length) return null;

  return (
    <div className="ru-company-corporate-sections">
      {leadership.length ? (
        <section className="ru-company-managed-block ru-company-leadership" aria-labelledby="ru-company-leadership-title">
          <div className="ru-company-managed-heading">
            <h2 id="ru-company-leadership-title">Руководство компании</h2>
            {acceptancePreview && !content.leadership.length ? (
              <p className="ru-company-preview-label">Технический preview для visual acceptance — не публичный факт</p>
            ) : null}
          </div>
          <div className="ru-company-leadership-grid">
            {leadership.map((item) => (
              <article className="ru-company-leadership-card" key={item.id}>
                {item.photoUrl ? (
                  <Image src={item.photoUrl} alt={item.photoAlt} width={320} height={240} unoptimized />
                ) : (
                  <div className="ru-company-media-placeholder" aria-hidden="true" />
                )}
                <div>
                  <h3>{item.name}</h3>
                  {item.role ? <p className="ru-company-card-role">{item.role}</p> : null}
                  {item.profile ? <p>{item.profile}</p> : null}
                  {item.publicProfileUrl ? (
                    <a href={item.publicProfileUrl} rel="noreferrer">Публичный профиль</a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {partners.length ? (
        <section className="ru-company-managed-block ru-company-partners" aria-labelledby="ru-company-partners-title">
          <div className="ru-company-managed-heading">
            <h2 id="ru-company-partners-title">Наши партнёры</h2>
            {acceptancePreview && !content.partners.length ? (
              <p className="ru-company-preview-label">Технический preview для visual acceptance — не публичный факт</p>
            ) : null}
          </div>
          <div className="ru-company-partners-grid">
            {partners.map((item) => (
              <article className="ru-company-partner-card" key={item.id}>
                {item.logoUrl ? (
                  <Image src={item.logoUrl} alt={item.logoAlt} width={220} height={120} unoptimized />
                ) : (
                  <div className="ru-company-logo-placeholder" aria-hidden="true" />
                )}
                <div>
                  <h3>{item.name}</h3>
                  {item.description ? <p>{item.description}</p> : null}
                  {item.publicUrl ? <a href={item.publicUrl} rel="noreferrer">Сайт партнёра</a> : null}
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
