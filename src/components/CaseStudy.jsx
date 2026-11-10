import { useEffect, useRef, useState } from 'react';
import { ArrowDown, FileText, House } from 'lucide-react';
import { Link } from 'react-router-dom';
import './CaseStudy.css';

const DOCUMENT_URL = '/case-studies/Case_Study_COA.docx';

export default function CaseStudy() {
  const documentContainer = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [documentAvailable, setDocumentAvailable] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();
    let isCurrent = true;

    async function loadDocument() {
      try {
        const response = await fetch(DOCUMENT_URL, { signal: controller.signal });
        if (!response.ok) {
          throw new Error(`The case study document could not be loaded (HTTP ${response.status}).`);
        }
        if (response.headers.get('content-type')?.includes('text/html')) {
          throw new Error('The original case study DOCX was not found at its configured public path.');
        }

        const documentData = await response.arrayBuffer();
        if (!documentContainer.current) return;

        const header = new Uint8Array(documentData, 0, Math.min(documentData.byteLength, 2));
        if (header.length !== 2 || header[0] !== 0x50 || header[1] !== 0x4b) {
          throw new Error('The case study file is not a valid DOCX document.');
        }

        const { renderAsync } = await import('docx-preview');
        await renderAsync(documentData, documentContainer.current, documentContainer.current);
        setDocumentAvailable(true);
      } catch (loadError) {
        if (controller.signal.aborted) return;
        if (isCurrent) {
          documentContainer.current?.replaceChildren();
          setError(loadError instanceof Error
            ? loadError.message
            : 'The case study document could not be rendered.');
        }
      } finally {
        if (isCurrent) setIsLoading(false);
      }
    }

    loadDocument();

    return () => {
      isCurrent = false;
      controller.abort();
    };
  }, []);

  return (
    <main className="section case-study-section" aria-labelledby="case-study-heading">
      <div className="container case-study-container">
        <div className="section-header">
          <span className="section-eyebrow case-study-eyebrow">
            <FileText size={15} /> CASE STUDY
          </span>
          <h1 id="case-study-heading" className="section-title">
            How Does a CPU Execute Instructions?
          </h1>
          <div className="section-divider" />
          <p className="section-subtitle">
            <strong>Subject:</strong> Computer Organization and Architecture
          </p>
          <p className="case-study-intro">
            An exploration of CPU instruction execution, covering the Fetch, Decode and Execute
            cycle and the interaction between the ALU, Control Unit, Registers and Program Counter.
          </p>
        </div>

        <div className="case-study-viewer">
          <div className="case-study-viewer-heading">
            <h2>Complete Document</h2>
            <span>Scroll to read the full case study</span>
          </div>
          <div className="case-study-document" aria-label="Complete case study document preview">
            {isLoading && (
              <p className="case-study-status" role="status">
                Loading the complete case study…
              </p>
            )}
            {error && <p className="case-study-error" role="alert">{error}</p>}
            <div ref={documentContainer} />
          </div>
        </div>

        <div className="case-study-actions">
          <Link to="/" className="btn btn-secondary case-study-home-link">
            <House size={16} />
            <span>Back to Home</span>
          </Link>
          <a
            href={DOCUMENT_URL}
            download
            aria-disabled={!documentAvailable}
            title={documentAvailable ? 'Download the original Word document' : 'The document must load before it can be downloaded'}
            onClick={(event) => {
              if (!documentAvailable) event.preventDefault();
            }}
            className="btn btn-primary"
          >
            <ArrowDown size={16} />
            <span>Download Case Study (.docx)</span>
          </a>
        </div>
      </div>
    </main>
  );
}
