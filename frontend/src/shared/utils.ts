export function formatMoney(value: number) {
  if (!value) return value;
  return (
    'R$ ' +
    value
      .toFixed(4)
      .replace('.', ',')
      .replace(/(\d)(?=((\d){3})+\,)/g, '$1.')
  );
}
