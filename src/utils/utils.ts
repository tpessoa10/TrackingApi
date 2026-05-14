export function arredondarPersonalizado(valor: number): number {
  const inteiro = Math.floor(valor);
  const decimal = valor - inteiro;

  if (decimal >= 0.5) {
    return Math.ceil(valor);
  } else {
    return Math.floor(valor);
  }
}