import React from "react";
import {
  AlertTriangle,
  FileText,
  History,
  LayoutList,
  WandSparkles,
} from "lucide-react";

const Benchmarks = () => {
  const rows = [
    {
      factor: "Liability Cap",
      section: "Section 12.4 - Indemnification",
      yourTerm: "3x Annual Fees",
      market: "1x Annual Fees",
      status: "NEEDS NEGOTIATION",
      tone: "danger",
    },
    {
      factor: "Notice Period",
      section: "Section 4.2 - Termination",
      yourTerm: "90 Days",
      market: "30 - 60 Days",
      status: "FAVORABLE",
      tone: "good",
    },
    {
      factor: "Data Portability",
      section: "Section 8.1 - Confidentiality",
      yourTerm: "Standard JSON",
      market: "Standard JSON",
      status: "ALIGNED",
      tone: "neutral",
    },
    {
      factor: "IP Rights",
      section: "Section 5.3 - Ownership",
      yourTerm: "Restricted Use",
      market: "Mutual Ownership",
      status: "NEEDS NEGOTIATION",
      tone: "danger",
    },
  ];

  return (
    <div className="dj-workspace-layout">
      <aside className="dj-workspace-sidebar">
        <h4>Case Metadata</h4>
        <p>AI-generated insight</p>
        <nav>
          <button type="button" className="dj-side-link">
            <FileText size={16} />
            DOCUMENT METADATA
          </button>
          <button type="button" className="dj-side-link">
            <LayoutList size={16} />
            CLAUSE LIBRARY
          </button>
          <button type="button" className="dj-side-link active">
            <span className="dj-bang">!</span>
            RISK PROFILE
          </button>
          <button type="button" className="dj-side-link">
            <History size={16} />
            HISTORY
          </button>
          <button type="button" className="dj-side-link">
            EXPORT
          </button>
        </nav>
        <button type="button" className="dj-sidebar-action">
          New Analysis
        </button>
      </aside>

      <section className="dj-benchmark-panel">
        <header className="dj-benchmark-header">
          <div>
            <h1>Market Benchmarks</h1>
            <p>
              Comparing <strong>SaaS Agreement_v4.pdf</strong> against the
              Digital Jurist global corpus.
            </p>
          </div>
          <div className="dj-live-pill">LIVE CORPUS: 14.2 K DOCS</div>
        </header>

        <div className="dj-benchmark-top-grid">
          <div className="dj-readiness-card">
            <h3>Negotiation Readiness</h3>
            <div className="dj-readiness-stats">
              <div>
                <strong>84%</strong>
                <span>MARKET ALIGNMENT</span>
              </div>
              <div>
                <strong className="warn">3</strong>
                <span>CRITICAL OUTLIERS</span>
              </div>
              <div>
                <strong>High</strong>
                <span>LEVERAGE SCORE</span>
              </div>
            </div>
          </div>
          <div className="dj-reco-card">
            <h4>JURIST RECOMMENDATION</h4>
            <p>
              Your <strong>Liability Cap</strong> is significantly higher than
              92% of similar enterprise deals.
            </p>
            <p>
              Focus your negotiation here to reduce corporate exposure by an
              estimated
              <strong> $2.4M.</strong>
            </p>
          </div>
        </div>

        <div className="dj-benchmark-table-wrap">
          <table>
            <thead>
              <tr>
                <th>NEGOTIABLE FACTORS</th>
                <th>YOUR TERM</th>
                <th>MARKET STANDARD</th>
                <th>ASSESSMENT</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.factor}>
                  <td>
                    <strong>{row.factor}</strong>
                    <small>{row.section}</small>
                  </td>
                  <td>{row.yourTerm}</td>
                  <td>{row.market}</td>
                  <td>
                    <span className={`dj-status ${row.tone}`}>
                      {row.tone === "danger" ? (
                        <AlertTriangle size={11} />
                      ) : null}
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="dj-benchmark-bottom-grid">
          <div className="dj-region-card">
            <h4>REGIONAL STANDARDS</h4>
            <div className="dj-region-row">
              <span>North America (AMER)</span>
              <strong>High Alignment</strong>
            </div>
            <div className="dj-region-bar high" />
            <div className="dj-region-row">
              <span>European Union (EMEA)</span>
              <strong>Moderate Gap</strong>
            </div>
            <div className="dj-region-bar med" />
          </div>

          <div className="dj-playbook-card">
            <h4>NEGOTIATION PLAYBOOK</h4>
            <p>
              Generate a custom counter-proposal email based on these market
              discrepancies.
            </p>
            <button type="button" className="dj-primary-btn">
              <WandSparkles size={15} />
              Draft Counter-Proposal
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Benchmarks;
