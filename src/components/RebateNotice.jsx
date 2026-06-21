import { SITE } from '../data/site';

export default function RebateNotice({ compact = false }) {
  return (
    <div className={`rebate-notice${compact ? ' rebate-notice-compact' : ''}`}>
      <div className="rebate-notice-label">Registered Contractor · ROC {SITE.roc}</div>
      <h3>SRP Solar Screen Rebate Support</h3>
      <p>
        Because Ball Bros Screens is a registered contractor, we can help qualifying SRP
        customers get approved for the SRP solar screen rebate when it is available. The rebate
        is typically <strong>${SITE.srpRebatePerSqFt} per square foot</strong>, so a project with
        200 square feet of installed solar screens could save about <strong>$200</strong>.
      </p>
      <p className="rebate-notice-disclaimer">
        Rebate eligibility, approval, and final amounts are determined by SRP and may depend on
        current program rules, your utility account, and final installed measurements.
      </p>
    </div>
  );
}
