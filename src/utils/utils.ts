export function arredondarPersonalizado(valor: number | undefined): number {
  if(valor == undefined) return 0
  const inteiro = Math.floor(valor);
  const decimal = valor - inteiro;
  

  if (decimal >= 0.5) {
    return Math.ceil(valor);
  } else {
    return Math.floor(valor);
  }
}

export function msParaKmh(valor: number | undefined): number{
  if (valor == undefined) return 0
  const valorKmh = valor * 3.6
  return Math.round(valorKmh);
}

export function formatarData(dataString: string): string {
  const [data] = dataString.split(" "); // separa da hora
  const [ano, mes, dia] = data.split("-");

  return `${dia}/${mes}/${ano}`;
}