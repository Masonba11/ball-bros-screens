/**
 * Outline icons for benefit cards (24×24 viewBox, stroke-based).
 * Names map to benefit topics — keep in sync with data `icon` fields.
 */
const svgProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
  width: 26,
  height: 26,
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.65,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export default function BenefitIcon({ name }) {
  switch (name) {
    case 'heat':
      return (
        <svg {...svgProps} aria-hidden>
          <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
        </svg>
      );
    case 'sun':
      return (
        <svg {...svgProps} aria-hidden>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      );
    case 'glare':
      return (
        <svg {...svgProps} aria-hidden>
          <rect x="2" y="4" width="20" height="13" rx="2" />
          <path d="M8 21h8M12 17v4" />
        </svg>
      );
    case 'privacy':
      return (
        <svg {...svgProps} aria-hidden>
          <rect x="3" y="5" width="18" height="14" rx="1" />
          <path d="M6 8v9M10 8v9M14 8v9M18 8v9" />
        </svg>
      );
    case 'furniture':
      return (
        <svg {...svgProps} aria-hidden>
          <path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3" />
          <path d="M2 16v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2" />
          <path d="M4 11v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4" />
        </svg>
      );
    case 'ac':
      return (
        <svg {...svgProps} aria-hidden>
          <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2" />
          <path d="M16.54 7.46A2.5 2.5 0 0 1 19.5 12H2" />
        </svg>
      );
    case 'house':
      return (
        <svg {...svgProps} aria-hidden>
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <path d="M9 22V12h6v10" />
        </svg>
      );
    case 'measure':
      return (
        <svg {...svgProps} aria-hidden>
          <path d="M21.73 18L12 8.27V3H3v18h18v-9.73z" />
          <path d="M7 16v4M11 12v8M15 8v12" />
        </svg>
      );
    case 'shield':
      return (
        <svg {...svgProps} aria-hidden>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    default:
      return null;
  }
}
