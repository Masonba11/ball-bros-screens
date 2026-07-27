/** Sales tax rate baked into calculator totals (shown only on PDF). */
export const SALES_TAX_RATE = 0.06;

const PRICE_PER_SQ_FT = 8;

const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 2,
});

function escapePdfText(value) {
  return String(value)
    .replace(/\\/g, '\\\\')
    .replace(/\(/g, '\\(')
    .replace(/\)/g, '\\)');
}

/**
 * Build a minimal single-page PDF (text only) and trigger a browser download.
 */
export function downloadEstimatePdf({
  site,
  lineItems,
  totalSqFt,
  totalWindows,
  subtotal,
  taxAmount,
  total,
  potentialRebate,
}) {
  const date = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const lines = [
    site.name,
    `Arizona ROC ${site.roc}`,
    site.phoneDisplay,
    site.email,
    '',
    'Solar Screen Estimate',
    date,
    '',
    `Rate: $${PRICE_PER_SQ_FT}/sq ft (standard solar screen)`,
    `Total windows: ${totalWindows}`,
    `Total square footage: ${totalSqFt.toFixed(2)} sq ft`,
    '',
    'Window breakdown:',
    ...lineItems.map(
      (item, index) =>
        `  Size ${index + 1}: ${item.quantity}x (${item.width}" x ${item.height}") — ${item.sqFt.toFixed(2)} sq ft`
    ),
    '',
    `Subtotal: ${currency.format(subtotal)}`,
    `Sales tax (6%): ${currency.format(taxAmount)}`,
    `Estimated total: ${currency.format(total)}`,
    '',
    `Potential SRP rebate: ${currency.format(potentialRebate)}`,
    `Estimated after rebate: ${currency.format(Math.max(total - potentialRebate, 0))}`,
    '',
    'This is a ballpark estimate only. Final pricing may vary based on mesh',
    'percentage, frame color, second-story access, oversized windows, and',
    'exact measurements. SRP rebate eligibility is determined by SRP.',
  ];

  const contentLines = lines.map((line, index) => {
    const y = 750 - index * 16;
    return `BT /F1 11 Tf 50 ${y} Td (${escapePdfText(line)}) Tj ET`;
  });

  const stream = contentLines.join('\n');
  const objects = [];
  objects.push('1 0 obj<< /Type /Catalog /Pages 2 0 R >>endobj');
  objects.push('2 0 obj<< /Type /Pages /Kids [3 0 R] /Count 1 >>endobj');
  objects.push(
    '3 0 obj<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>endobj'
  );
  objects.push(`4 0 obj<< /Length ${stream.length} >>stream\n${stream}\nendstream endobj`);
  objects.push('5 0 obj<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>endobj');

  let pdf = '%PDF-1.4\n';
  const offsets = [0];
  objects.forEach((obj) => {
    offsets.push(pdf.length);
    pdf += `${obj}\n`;
  });

  const xrefStart = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n`;
  pdf += '0000000000 65535 f \n';
  for (let i = 1; i < offsets.length; i += 1) {
    pdf += `${String(offsets[i]).padStart(10, '0')} 00000 n \n`;
  }
  pdf += `trailer<< /Size ${objects.length + 1} /Root 1 0 R >>\n`;
  pdf += `startxref\n${xrefStart}\n%%EOF`;

  const blob = new Blob([pdf], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `ball-bros-screens-estimate-${Date.now()}.pdf`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

export { PRICE_PER_SQ_FT, currency };
