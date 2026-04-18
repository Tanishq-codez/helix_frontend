import React from "react";
import { FileUp, Plus, Shield, Zap } from "lucide-react";

const Upload = () => {
  return (
    <div className="dj-page dj-page-upload">
      <div className="dj-page-inner">
        <section className="dj-upload-hero">
          <div>
            <h1>Contract Intake</h1>
            <p>
              Upload your legal documents for comprehensive AI-driven analysis.
              Our preprocessing layer identifies risk profiles and redacts
              sensitive data with architectural precision.
            </p>
          </div>
          <div className="dj-current-workspace">
            <span>CURRENT WORKSPACE</span>
            <strong>Pre-processing Node 01</strong>
          </div>
        </section>

        <section className="dj-upload-grid">
          <div className="dj-upload-zone-wrap">
            <div className="dj-upload-zone">
              <div className="dj-upload-icon-box">
                <FileUp size={28} />
              </div>
              <h3>Drop Contract Here</h3>
              <p>
                PDF, DOCX, or scanned images. Max file size 50MB for deep neural
                processing.
              </p>
              <button className="dj-primary-btn" type="button">
                <Plus size={16} />
                Select File
              </button>

              <div className="dj-upload-mini-cards">
                <div className="dj-upload-mini-card">
                  <Shield size={14} />
                  <div>
                    <span>SECURITY</span>
                    <strong>End-to-End Encryption</strong>
                  </div>
                </div>
                <div className="dj-upload-mini-card">
                  <Zap size={14} />
                  <div>
                    <span>SPEED</span>
                    <strong>Instant Pre-scan Active</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <aside className="dj-upload-side">
            <div className="dj-side-card">
              <h4>DOCUMENT CLASSIFICATION</h4>
              <label htmlFor="domain">CONTRACT DOMAIN</label>
              <select id="domain" defaultValue="Commercial Business Agreement">
                <option>Commercial Business Agreement</option>
                <option>Residential Lease</option>
                <option>Employment Contract</option>
              </select>

              <label htmlFor="party">USER PARTY IDENTITY</label>
              <select id="party" defaultValue="Landlord / Lessor">
                <option>Landlord / Lessor</option>
                <option>Tenant / Lessee</option>
                <option>Service Provider</option>
              </select>

              <div className="dj-toggle-row">
                <div>
                  <strong>Privacy Redaction</strong>
                  <p>
                    Automatically redact names, addresses, and financial values
                    before AI processing for maximum confidentiality.
                  </p>
                </div>
                <div
                  className="dj-toggle on"
                  aria-label="Privacy redaction enabled"
                />
              </div>
            </div>

            <div className="dj-recommend-card">
              <h4>AI Recommendation</h4>
              <p>
                Based on current legal trends, we recommend enabling clause
                comparison for multi-jurisdiction compliance.
              </p>
            </div>

            <button className="dj-wide-btn" type="button">
              Process Analysis
            </button>
          </aside>
        </section>

        <section className="dj-upload-footer-cards">
          <div>
            <h5>INSTITUTIONAL SECURITY</h5>
            <p>
              SOC2 Type II compliant storage with zero-knowledge encryption
              protocols.
            </p>
          </div>
          <div>
            <h5>LEGAL INTEGRITY</h5>
            <p>
              Models trained on 10M+ curated judicial precedents and federal
              statutes.
            </p>
          </div>
          <div>
            <h5>DOCUMENT LIFECYCLE</h5>
            <p>
              Automated versioning and audit trails for every revision made.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Upload;
