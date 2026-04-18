import React from "react";
import {
  Clock3,
  Download,
  ExternalLink,
  FileText,
  History,
  LayoutList,
  MoreHorizontal,
  Printer,
  Search,
  Shield,
  ZoomIn,
} from "lucide-react";

const Analysis = () => {
  const sideLinks = [
    { icon: <FileText size={16} />, label: "DOCUMENT METADATA" },
    { icon: <LayoutList size={16} />, label: "CLAUSE LIBRARY" },
    {
      icon: <span className="dj-bang">!</span>,
      label: "RISK PROFILE",
      active: true,
    },
    { icon: <History size={16} />, label: "HISTORY" },
    { icon: <Download size={16} />, label: "EXPORT" },
  ];

  return (
    <div className="dj-workspace-layout">
      <aside className="dj-workspace-sidebar">
        <h4>Case Metadata</h4>
        <p>AI-generated insight</p>
        <nav>
          {sideLinks.map((item) => (
            <button
              type="button"
              key={item.label}
              className={`dj-side-link${item.active ? " active" : ""}`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>
        <button type="button" className="dj-sidebar-action">
          NEW ANALYSIS
        </button>
      </aside>

      <section className="dj-analysis-board">
        <div className="dj-doc-column">
          <div className="dj-doc-toolbar">
            <div className="dj-doc-meta">
              <div className="dj-doc-meta-icon">
                <FileText size={16} />
              </div>
              <div>
                <h3>Master_Service_Agreement_v4.pdf</h3>
                <p>Modified 2 hours ago • 24 Pages</p>
              </div>
            </div>
            <div className="dj-doc-tools">
              <ZoomIn size={15} />
              <Printer size={15} />
              <MoreHorizontal size={15} />
            </div>
          </div>

          <div className="dj-doc-sheet">
            <h2>MASTER SERVICES AGREEMENT</h2>
            <p>
              This Master Services Agreement ("Agreement") is entered into as of
              October 12, 2023, by and between Nexus Global Corp ("Client") and
              Stratos Solutions Ltd ("Provider").
            </p>

            <div className="dj-risk-highlight">
              <h4>Section 4. Limitation of Liability</h4>
              <p>
                4.1. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO
                EVENT SHALL EITHER PARTY BE LIABLE FOR ANY INDIRECT, PUNITIVE,
                INCIDENTAL, SPECIAL, CONSEQUENTIAL OR EXEMPLARY DAMAGES...
              </p>
            </div>

            <h4>Section 7. Indemnification</h4>
            <p>
              7.2. Provider shall indemnify, defend, and hold harmless Client
              and its officers and employees from and against any and all
              claims, costs and liabilities...
            </p>

            <p className="dj-dim-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>

        <aside className="dj-ai-column">
          <div className="dj-ai-header">
            <strong>AI ANALYSIS ENGINE</strong>
            <span>LIVE SCANNING</span>
          </div>

          <div className="dj-ai-score-card">
            <div className="dj-ai-score-ring">
              <svg viewBox="0 0 100 100" aria-hidden="true">
                <circle cx="50" cy="50" r="42" className="track" />
                <circle cx="50" cy="50" r="42" className="value" />
              </svg>
              <div>
                <b>68</b>
                <span>SCORE</span>
              </div>
            </div>
            <div>
              <h3>Moderate Risk Detected</h3>
              <p>
                Multiple clauses contain non-standard indemnity terms and
                aggressive limitation of liability caps.
              </p>
              <div className="dj-ai-bars">
                <span />
                <span />
              </div>
            </div>
          </div>

          <h5>FLAGGED CLAUSES</h5>

          <div className="dj-clause-card high">
            <div className="dj-clause-top">
              <span>HIGH RISK</span>
              <small>Section 4.1 • Liability</small>
              <ExternalLink size={13} />
            </div>
            <h4>Uncapped indirect damages for Provider&apos;s negligence.</h4>
            <div className="dj-clause-meaning">
              <strong>Simplified Meaning</strong>
              <p>
                This clause suggests that Stratos Solutions can be held liable
                for unlimited monetary losses if they make a mistake.
              </p>
            </div>
          </div>

          <div className="dj-clause-card medium">
            <div className="dj-clause-top">
              <span>MEDIUM RISK</span>
              <small>Section 7.2 • IP Indemnity</small>
              <ExternalLink size={13} />
            </div>
            <h4>Narrow definition of third-party IP rights.</h4>
            <div className="dj-clause-meaning">
              <strong>Simplified Meaning</strong>
              <p>
                The protection is standard, but the clause misses key references
                to trade secrets and may favor the client excessively.
              </p>
            </div>
          </div>

          <div className="dj-ai-actions">
            <button type="button" className="dj-ghost-btn">
              Generate Report
            </button>
            <button type="button" className="dj-primary-btn">
              Request Redline
            </button>
          </div>
        </aside>
      </section>
    </div>
  );
};

export default Analysis;
