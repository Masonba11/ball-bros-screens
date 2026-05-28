import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';

const PRICE_PER_SQ_FT = 8;
const PRICE_LABEL = '$8/sq ft — Standard Solar Screen';

const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 2,
});

function parsePositive(value) {
  const n = parseFloat(value);
  return Number.isFinite(n) && n > 0 ? n : 0;
}

function parseQuantity(value) {
  const n = parseInt(value, 10);
  return Number.isFinite(n) && n > 0 ? n : 0;
}

export default function SquareFootageCalculator() {
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [quantity, setQuantity] = useState('1');

  const { sqFt, estimatedPrice, avgPerWindow, hasInput } = useMemo(() => {
    const w = parsePositive(width);
    const h = parsePositive(height);
    const q = parseQuantity(quantity);

    const totalSqFt = (w * h * q) / 144;
    const totalPrice = totalSqFt * PRICE_PER_SQ_FT;
    const perWindow = q > 0 ? totalPrice / q : 0;
    const valid = w > 0 && h > 0 && q > 0;

    return {
      sqFt: valid ? totalSqFt : 0,
      estimatedPrice: valid ? totalPrice : 0,
      avgPerWindow: valid ? perWindow : 0,
      hasInput: valid,
    };
  }, [width, height, quantity]);

  const formatSqFt = (n) => (hasInput ? n.toFixed(2) : '—');
  const formatMoney = (n) => (hasInput ? currency.format(n) : '—');

  return (
    <section
      id="solar-screen-calculator"
      className="section bg-white"
      aria-labelledby="calculator-heading"
    >
      <div className="container">
        <div className="section-header text-center">
          <div className="section-tag">Estimate Your Project</div>
          <h2 id="calculator-heading">Solar Screen Square Footage Calculator</h2>
          <p className="calculator-intro">
            Enter your window width, height, and quantity to estimate your total solar screen
            square footage and rough project price. Final pricing may vary based on exact
            measurements, mesh type, frame color, second-story access, and oversized windows.
          </p>
        </div>

        <div className="calculator-card">
          <div className="calculator-grid">
            <div className="calculator-inputs">
              <p className="calculator-rate">{PRICE_LABEL}</p>

              <div className="form-grid calculator-form-grid">
                <div className="form-group">
                  <label htmlFor="calc-width">Window Width (inches)</label>
                  <input
                    type="number"
                    id="calc-width"
                    name="width"
                    min="1"
                    step="0.25"
                    placeholder="e.g. 36"
                    value={width}
                    onChange={(e) => setWidth(e.target.value)}
                    inputMode="decimal"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="calc-height">Window Height (inches)</label>
                  <input
                    type="number"
                    id="calc-height"
                    name="height"
                    min="1"
                    step="0.25"
                    placeholder="e.g. 48"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    inputMode="decimal"
                  />
                </div>
                <div className="form-group full">
                  <label htmlFor="calc-quantity">Quantity of Windows</label>
                  <input
                    type="number"
                    id="calc-quantity"
                    name="quantity"
                    min="1"
                    step="1"
                    placeholder="e.g. 8"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    inputMode="numeric"
                  />
                </div>
              </div>
            </div>

            <div className="calculator-results" aria-live="polite" aria-atomic="true">
              <h3>Your estimate</h3>
              <dl className="calculator-results-list">
                <div className="calculator-result-row">
                  <dt>Total square footage</dt>
                  <dd>{formatSqFt(sqFt)} sq ft</dd>
                </div>
                <div className="calculator-result-row calculator-result-highlight">
                  <dt>Estimated project price</dt>
                  <dd>{formatMoney(estimatedPrice)}</dd>
                </div>
                <div className="calculator-result-row">
                  <dt>Average price per window</dt>
                  <dd>{formatMoney(avgPerWindow)}</dd>
                </div>
              </dl>

              <Link to="/contact#quote-form" className="btn btn-primary btn-lg calculator-quote-btn">
                Get Free Quote
              </Link>
            </div>
          </div>

          <p className="calculator-disclaimer">
            Final pricing may vary based on mesh percentage, frame color, second-story access,
            oversized windows, and exact measurements.
          </p>
        </div>
      </div>
    </section>
  );
}
