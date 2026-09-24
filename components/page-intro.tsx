export function PageIntro({ kicker, title, lead }: { kicker?: string; title: string; lead: string }) {
  return (
    <header className="page-hero wrap">
      {kicker ? <p className="kicker">{kicker}</p> : null}
      <h1>{title}</h1>
      <p className="lede">{lead}</p>
    </header>
  );
}
