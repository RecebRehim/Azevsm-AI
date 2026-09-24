import { claims, canTransition, serviceGateIssues } from "@/lib/cms/gate";
import { services } from "@/lib/content/services";

export const dynamic = "force-dynamic";

const entities = ["Page", "Product", "Service", "TechnologyClaim", "TrustClaim", "Insight", "News", "Person", "CompanyInfo", "LegalPage", "CTA"];

export default function StudioPage() {
  const issues = serviceGateIssues();
  return (
    <main className="section">
      <div className="wrap prose">
        <h1>Content governance</h1>
        <p>Publish permission is restricted to records whose status is published and whose five locale fields are complete. The allowed path is draft, then review, then approved, then published.</p>
        <p>Transition draft to review: {canTransition("draft", "review") ? "allowed" : "blocked"}. Skip from draft to published: {canTransition("draft", "published") ? "allowed" : "blocked"}.</p>
        <h2>Entities</h2>
        <ul>{entities.map((entity) => <li key={entity}>{entity}</li>)}</ul>
        <h2>Services</h2>
        <table className="data">
          <thead><tr><th>Public name</th><th>Status</th><th>Review</th><th>Owner</th></tr></thead>
          <tbody>
            {services.map((service) => (
              <tr key={service.id}>
                <td>{service.labels.en}</td>
                <td>{service.status}</td>
                <td>{service.reviewDate}</td>
                <td>{service.sourceOwner}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h2>Claims</h2>
        <ul>{claims.map((claim) => <li key={claim.id}>{claim.kind}: {claim.statement.en}</li>)}</ul>
        <h2>Locale gate</h2>
        {issues.length === 0 ? <p>No missing locale fields and no engineering code used as a public label.</p> : <ul>{issues.map((issue) => <li key={issue}>{issue}</li>)}</ul>}
      </div>
    </main>
  );
}
