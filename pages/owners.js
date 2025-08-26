import Layout from '../components/Layout';
import ProtectedRoute from '../components/ProtectedRoute';
import { useLanguage } from '../lib/useLanguage';
import { getNews, getDocuments } from '../lib/googleSheets';
import { useState } from 'react';

export default function Owners() {
  const { t } = useLanguage();

  // Allowed HOA payment years (highest will be default)
  const YEARS = [2022, 2023, 2024, 2025];

  // Default to highest year
  const [yearIndex, setYearIndex] = useState(YEARS.length - 1);
  const year = YEARS[yearIndex];

  // Navigation
  const prevYear = () => {
    if (yearIndex > 0) setYearIndex(yearIndex - 1);
  };
  const nextYear = () => {
    if (yearIndex < YEARS.length - 1) setYearIndex(yearIndex + 1);
  };

  // Months (code + translation key)
  const MONTHS = [
    ['01','jan'], ['02','feb'], ['03','mar'], ['04','apr'],
    ['05','may'], ['06','jun'], ['07','jul'], ['08','aug'],
    ['09','sep'], ['10','oct'], ['11','nov'], ['12','dec']
  ];

  // Hard-coded availability by type → year → months
  // Fill these arrays with the months that are actually available per year.
  const AVAILABLE = {
    bank: {
      2022: ['11','12'],
      2023: ['01','02','03','04','05','06','07','08','09','10','11','12'],
      2024: ['01','02','03','04','10','11','12'],
      2025: ['01','02','03','04','05'], // Jan–May available
    },
    admin: {
      2022: ['11','12'],
      2023: ['01','02','03','04','05','06','07','08','09','10','11','12'],
      2024: ['01','02','03','04','05','10','11','12'],
      2025: ['01','02','03','04','05'],
    },
  };

  // Build URLs
  const hrefFor = (type, mm) => `/owners-docs/hoa/${type}_${year}-${mm}.pdf`;
  const hasAvail = (type, mm) => AVAILABLE[type]?.[year]?.includes(mm);

  // Reusable cell: link if available; otherwise "Not Available"
  function LinkCell({ type, mm }) {
    return hasAvail(type, mm) ? (
      <a href={hrefFor(type, mm)} target="_self">{t('td_link')}</a>
    ) : (
      <div className="no-hay-text">{t('td_not_avail')}</div>
    );
  }

  // Hardcoded sample data (will later pull from Google Sheets)
  const news = [
    { id: 1, text: 'This feature to be used in the future.' },
    { id: 2, text: 'Esta función se utilizará en el futuro..' },
  ];

  return (
    <Layout>
      <ProtectedRoute>
        <div style={{ padding: '20px' }}>

          {/* ------------------------------------- */}
          {/* New Section: Latest HOA News   */}
          {/* ------------------------------------- */}
          <div className="heading-band">
           <h2 style={{ textAlign: 'center' }}>{t('owners_news')}</h2>
          </div>

          <ul>
            {news.map((item) => (
              <li key={item.id}>{item.text}</li>
            ))}
          </ul>

          {/* ------------------------------------- */}
          {/* New Section: Documentos / Documents   */}
          {/* ------------------------------------- */}
          <br />
          <div className="heading-band">
           <h2 style={{ textAlign: 'center' }}>{t('owners_docs')}</h2>
          </div>

          <table className="responsive-table">
            <thead>
              <tr>
                <th rowSpan="2">
                  <strong>{t('tt_date')}</strong>{' '}
                  <span className="date-format">{t('tt_date_fmt')}</span>
                </th>
                <th rowSpan="2">{t('tt_doc_type')}</th>
                <th colSpan="2">{t('tt_links')}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label={t('tt_date')}>2024-09-07</td>
                <td data-label={t('tt_doc_type')}>
                  {t('td_bylaws')}
                </td>
                <td data-label={t('td_link')}>
                  <a href="/owners-docs/reglamentos.pdf">Español</a>
                </td>
                <td data-label={t('td_link')}>
                  <a href="/owners-docs/bylaws.pdf">English</a>
                </td>
              </tr>
              <tr>
                <td data-label={t('tt_date')}>2025-07-15</td>
                <td data-label={t('tt_doc_type')}>
                  {t('td_bank')}
                </td>
                <td data-label={t('td_link')}>
                  <a href="/owners-docs/bank.pdf">Español</a>
                </td>
                <td data-label={t('td_link')}>
                  <a href="/owners-docs/bank.pdf">English</a>
                </td>
              </tr>
            </tbody>
          </table>

          {/* ------------------------------------- */}
          {/* New Section: Asambleas / Assemblies   */}
          {/* ------------------------------------- */}
          <br />
          <div className="heading-band">
            <h2 style={{ textAlign: 'center' }}>{t('assemblies')}</h2>
          </div>

          <table className="responsive-table">
            <thead>
              <tr>
                <th rowSpan="2">
                  <strong>{t('tt_date')}</strong>{' '}
                  <span className="date-format">{t('tt_date_fmt')}</span>
                </th>
                <th rowSpan="2">{t('tt_meeting_type')}</th>
                <th colSpan="2">{t('tt_links')}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label={t('tt_date')}>2025-07-05</td>
                <td data-label={t('tt_meeting_type')}>
                  {t('td_agm')}
                </td>
                <td data-label={t('tt_links')}>
                  <a href="/owners-docs/combined-2025-07-05-esp.pdf">Español</a>
                  <div className="no-hay-text">No Hay Acta Todavia</div>
                </td>
                <td data-label={t('tt_links')}>
                  <a href="/owners-docs/no-english-available.pdf">English</a>
                  <div className="no-hay-text">No Minutes Available</div>
                </td>
              </tr>
              <tr>
                <td data-label={t('tt_date')}>2024-12-21</td>
                <td data-label={t('tt_meeting_type')}>
                  {t('td_agm')}
                </td>
                <td data-label={t('tt_links')}>
                  <a href="/owners-docs/combined-2024-12-21-esp.pdf">Español</a>
                </td>
                <td data-label={t('tt_links')}>
                  <a href="/owners-docs/no-english-available.pdf">English</a>
                </td>
              </tr>
              <tr>
                <td data-label={t('tt_date')}>2024-09-07</td>
                <td data-label={t('tt_meeting_type')}>
                  {t('td_ext')}
                </td>
                <td data-label={t('tt_links')}>
                  <a href="/owners-docs/combined-2024-09-07-esp.pdf">Español</a>
                </td>
                <td data-label={t('tt_links')}>
                  <a href="/owners-docs/no-english-available.pdf">English</a>
                </td>
              </tr>
              <tr>
                <td data-label={t('tt_date')}>2024-06-15</td>
                <td data-label={t('tt_meeting_type')}>
                  {t('td_agm')}
                </td>
                <td data-label={t('tt_links')}>
                  <a href="/owners-docs/combined-2024-06-15-esp.pdf">Español</a>
                </td>
                <td data-label={t('tt_links')}>
                  <a href="/owners-docs/no-english-available.pdf">English</a>
                </td>
              </tr>
              <tr>
                <td data-label={t('tt_date')}>2023-11-11</td>
                <td data-label={t('tt_meeting_type')}>
                  {t('td_agm')}
                </td>
                <td data-label={t('tt_links')}>
                  <a href="/owners-docs/combined-2023-11-11-esp.pdf">Español</a>
                </td>
                <td data-label={t('tt_links')}>
                  <a href="/owners-docs/no-english-available.pdf">English</a>
                </td>
              </tr>
            </tbody>
          </table>

          {/* ------------------------------------- */}
          {/* New Section: Cuotas / HOA Payments    */}
          {/* ------------------------------------- */}
          <br />
          <div className="heading-band">
            <h2 style={{ textAlign: 'center' }}>{t('hoa_payments')}</h2>

            <div className="year-instructions">
             {t('year_instructions')}
            </div>

            <div className="year-nav">
              <button onClick={prevYear} disabled={yearIndex === 0}>‹</button>
              <span className="year-value">{year}</span>
              <button onClick={nextYear} disabled={yearIndex === YEARS.length - 1}>›</button>
            </div>
          </div>

          <table className="responsive-table">
            <thead>
              <tr>
                <th>{year}</th>
                <th>{t('tt_bank')}</th>
                <th>{t('tt_admin')}</th>
              </tr>
            </thead>
            <tbody>
              {MONTHS.map(([mm, k]) => (
                <tr key={mm}>
                  <td data-label={String(year)}>{t(k)}</td>
                  <td data-label={t('tt_bank')}>
                    <LinkCell type="bank" mm={mm} />
                  </td>
                  <td data-label={t('tt_admin')}>
                    <LinkCell type="admin" mm={mm} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ProtectedRoute>

      <style jsx>{`
        .responsive-table {
          width: 85%;
          border-collapse: collapse;
          text-align: center;
          margin-top: 15px;
        }
        .responsive-table th,
        .responsive-table td {
          border: 1px solid #ccc;
          padding: 8px;
        }

        .date-format {
          font-size: 0.85em;
          color: #888;
          font-weight: normal;
        }

        .no-hay-text {
          font-size: 0.9em;
          color: #b94a48; /* muted red */
          margin-top: 4px;
        }
        @media (max-width: 768px) {
          .no-hay-text {
            font-size: 0.85em;
            color: #d77b78;
          }
        }

        .year-instructions {
          text-align: center;
          color: #6c757d; /* instructional muted color */
          font-weight: normal;
          font-size: 14px;
          margin-bottom: 6px;
        }
        .year-nav {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          margin: 8px 0;
        }
        .year-nav button {
          background: none;
          border: 1px solid #ccc;
          color: #333;
          cursor: pointer;
          font-size: 18px;
          padding: 2px 8px;
          border-radius: 6px;
        }
        .year-nav button:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }
        .year-value {
          font-weight: 700;
          font-size: 18px;
          letter-spacing: 0.5px;
        }

        @media screen and (max-width: 768px) {
          .responsive-table,
          .responsive-table thead,
          .responsive-table tbody,
          .responsive-table th,
          .responsive-table tr {
            display: block;
            width: 100%;
          }
          .responsive-table thead {
            display: none;
          }
          .responsive-table tr {
            margin-bottom: 15px;
            border: 1px solid #ccc;
            padding: 10px;
            border-radius: 8px;
            background: #f9f9f9;
          }
          .responsive-table td {
            display: block;
            text-align: right;
            border: none;
            padding: 6px;
            position: relative;
          }
          .responsive-table td::before {
            content: attr(data-label);
            position: absolute;
            left: 10px;
            font-weight: bold;
            text-align: left;
            white-space: pre-line;
          }
        }
      `}</style>
    </Layout>
  );
}
