import { useState, useMemo, useId } from 'react';
import { Link } from 'react-router-dom';
import { SITE } from '../data/site';
import {
  PRICE_PER_SQ_FT,
  SALES_TAX_RATE,
  currency,
  downloadEstimatePdf,
} from '../utils/estimatePdf';

const PRICE_LABEL = '$8/sq ft — Standard Solar Screen';

function parsePositive(value) {
  const n = parseFloat(value);
  return Number.isFinite(n) && n > 0 ? n : 0;
}

function parseQuantity(value) {
  const n = parseInt(value, 10);
  return Number.isFinite(n) && n > 0 ? n : 0;
}

function createWindowRow() {
  return {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
    width: '',
    height: '',
    quantity: '1',
  };
}

function rowSqFt(width, height, quantity) {
  const w = parsePositive(width);
  const h = parsePositive(height);
  const q = parseQuantity(quantity);
  if (!w || !h || !q) return 0;
  return (w * h * q) / 144;
}

export default function SquareFootageCalculator({ standalone = false }) {
  const baseId = useId();
  const [windows, setWindows] = useState([createWindowRow()]);

  const updateRow = (id, field, value) => {
    setWindows((prev) =>
      prev.map((row) => (row.id === id ? { ...row, [field]: value } : row))
    );
  };

  const addRow = () => {
    setWindows((prev) => [...prev, createWindowRow()]);
  };

  const removeRow = (id) => {
    setWindows((prev) => (prev.length > 1 ? prev.filter((row) => row.id !== id) : prev));
  };

  const {
    lineItems,
    totalSqFt,
    totalWindows,
    subtotal,
    taxAmount,
    estimatedPrice,
    potentialRebate,
    estimatedAfterRebate,
    avgPerWindow,
    hasInput,
  } = useMemo(() => {
    const items = windows.map((row) => {
      const sqFt = rowSqFt(row.width, row.height, row.quantity);
      const q = parseQuantity(row.quantity);
      const pretax = sqFt * PRICE_PER_SQ_FT;
      const price = pretax * (1 + SALES_TAX_RATE);
      const valid = sqFt > 0;

      return {
        id: row.id,
        width: row.width,
        height: row.height,
        quantity: q,
        sqFt,
        pretax,
        price,
        valid,
      };
    });

    const validItems = items.filter((item) => item.valid);
    const sqFtSum = validItems.reduce((sum, item) => sum + item.sqFt, 0);
    const windowCount = validItems.reduce((sum, item) => sum + item.quantity, 0);
    const pretaxSum = sqFtSum * PRICE_PER_SQ_FT;
    const tax = pretaxSum * SALES_TAX_RATE;
    const priceSum = pretaxSum + tax;
    const rebateEstimate = sqFtSum * SITE.srpRebatePerSqFt;
    const afterRebate = Math.max(priceSum - rebateEstimate, 0);
    const avg = windowCount > 0 ? priceSum / windowCount : 0;

    return {
      lineItems: items,
      totalSqFt: sqFtSum,
      totalWindows: windowCount,
      subtotal: pretaxSum,
      taxAmount: tax,
      estimatedPrice: priceSum,
      potentialRebate: rebateEstimate,
      estimatedAfterRebate: afterRebate,
      avgPerWindow: avg,
      hasInput: validItems.length > 0,
    };
  }, [windows]);

  const formatSqFt = (n) => (hasInput ? n.toFixed(2) : '—');
  const formatMoney = (n) => (hasInput ? currency.format(n) : '—');

  const handleDownloadPdf = () => {
    if (!hasInput) return;
    downloadEstimatePdf({
      site: SITE,
      lineItems: lineItems.filter((item) => item.valid),
      totalSqFt,
      totalWindows,
      subtotal,
      taxAmount,
      total: estimatedPrice,
      potentialRebate,
    });
  };

  return (
    <section
      id="solar-screen-calculator"
      className={`section ${standalone ? 'bg-tan' : 'bg-white'}`}
      aria-labelledby={standalone ? undefined : 'calculator-heading'}
      aria-label={standalone ? 'Solar screen square footage calculator' : undefined}
    >
      <div className="container">
        {!standalone && (
          <div className="section-header text-center">
            <div className="section-tag">Estimate Your Project</div>
            <h2 id="calculator-heading">Solar Screen Square Footage Calculator</h2>
            <p className="calculator-intro">
              Add each window size in your home — most homes have a mix of widths and heights.
              Enter width, height, and how many windows match that size, then add another row for
              the next size. We&apos;ll total your square footage and rough project price at{' '}
              {PRICE_LABEL.toLowerCase()}. Final pricing may vary based on exact measurements,
              mesh type, frame color, second-story access, and oversized windows.
            </p>
          </div>
        )}

        {standalone && (
          <p className="calculator-intro calculator-intro-standalone">
            Add each window size in your home — most homes have a mix of widths and heights.
            Enter width, height, and how many windows match that size, then add another row for
            the next size. We&apos;ll total your square footage and rough project price at{' '}
            {PRICE_LABEL.toLowerCase()}.
          </p>
        )}

        <div className="calculator-card">
          <div className="calculator-grid">
            <div className="calculator-inputs">
              <p className="calculator-rate">{PRICE_LABEL}</p>
              <p className="calculator-rate">
                ROC {SITE.roc} · Potential SRP rebate: ${SITE.srpRebatePerSqFt}/sq ft for
                qualifying customers
              </p>

              <div className="calculator-windows">
                {windows.map((row, index) => {
                  const item = lineItems.find((l) => l.id === row.id);
                  const rowLabel = `Window size ${index + 1}`;

                  return (
                    <div key={row.id} className="calculator-window-row">
                      <div className="calculator-window-row-head">
                        <span className="calculator-window-label">{rowLabel}</span>
                        {windows.length > 1 && (
                          <button
                            type="button"
                            className="calculator-remove-btn"
                            onClick={() => removeRow(row.id)}
                            aria-label={`Remove ${rowLabel}`}
                          >
                            Remove
                          </button>
                        )}
                      </div>

                      <div className="form-grid calculator-row-grid">
                        <div className="form-group">
                          <label htmlFor={`${baseId}-w-${row.id}`}>Width (inches)</label>
                          <input
                            type="number"
                            id={`${baseId}-w-${row.id}`}
                            min="1"
                            step="0.25"
                            placeholder="e.g. 36"
                            value={row.width}
                            onChange={(e) => updateRow(row.id, 'width', e.target.value)}
                            inputMode="decimal"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor={`${baseId}-h-${row.id}`}>Height (inches)</label>
                          <input
                            type="number"
                            id={`${baseId}-h-${row.id}`}
                            min="1"
                            step="0.25"
                            placeholder="e.g. 48"
                            value={row.height}
                            onChange={(e) => updateRow(row.id, 'height', e.target.value)}
                            inputMode="decimal"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor={`${baseId}-q-${row.id}`}>How many?</label>
                          <input
                            type="number"
                            id={`${baseId}-q-${row.id}`}
                            min="1"
                            step="1"
                            placeholder="1"
                            value={row.quantity}
                            onChange={(e) => updateRow(row.id, 'quantity', e.target.value)}
                            inputMode="numeric"
                          />
                        </div>
                      </div>

                      {item?.valid && (
                        <p className="calculator-row-subtotal" aria-live="polite">
                          {item.quantity} window{item.quantity !== 1 ? 's' : ''} ×{' '}
                          {item.sqFt.toFixed(2)} sq ft = {currency.format(item.price)}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>

              <button type="button" className="btn btn-outline-copper calculator-add-btn" onClick={addRow}>
                + Add another window size
              </button>
            </div>

            <div className="calculator-results" aria-live="polite" aria-atomic="true">
              <h3>Your estimate</h3>
              <dl className="calculator-results-list">
                <div className="calculator-result-row">
                  <dt>Total windows</dt>
                  <dd>{hasInput ? totalWindows : '—'}</dd>
                </div>
                <div className="calculator-result-row">
                  <dt>Total square footage</dt>
                  <dd>{formatSqFt(totalSqFt)} sq ft</dd>
                </div>
                <div className="calculator-result-row calculator-result-highlight">
                  <dt>Estimated project price</dt>
                  <dd>{formatMoney(estimatedPrice)}</dd>
                </div>
                <div className="calculator-result-row calculator-result-rebate">
                  <dt>Potential SRP rebate</dt>
                  <dd>{formatMoney(potentialRebate)}</dd>
                </div>
                <div className="calculator-result-row calculator-after-rebate">
                  <dt>Estimated after rebate</dt>
                  <dd>{formatMoney(estimatedAfterRebate)}</dd>
                </div>
                <div className="calculator-result-row">
                  <dt>Average price per window</dt>
                  <dd>{formatMoney(avgPerWindow)}</dd>
                </div>
              </dl>

              {hasInput && lineItems.some((item) => item.valid) && (
                <ul className="calculator-breakdown">
                  {lineItems
                    .filter((item) => item.valid)
                    .map((item, index) => (
                      <li key={item.id}>
                        Size {index + 1}: {item.quantity}× ({item.width}&quot; × {item.height}&quot;) —{' '}
                        {item.sqFt.toFixed(2)} sq ft
                      </li>
                    ))}
                </ul>
              )}

              {hasInput && (
                <button
                  type="button"
                  className="btn btn-outline-copper calculator-pdf-btn"
                  onClick={handleDownloadPdf}
                >
                  Download estimate PDF
                </button>
              )}

              <Link to="/contact#quote-form" className="btn btn-primary btn-lg calculator-quote-btn">
                Get a Free Quote
              </Link>
            </div>
          </div>

          <p className="calculator-disclaimer">
            Final pricing may vary based on mesh percentage, frame color, second-story access,
            oversized windows, and exact measurements. SRP rebate eligibility, approval, and
            amounts are determined by SRP.
          </p>
        </div>
      </div>
    </section>
  );
}
