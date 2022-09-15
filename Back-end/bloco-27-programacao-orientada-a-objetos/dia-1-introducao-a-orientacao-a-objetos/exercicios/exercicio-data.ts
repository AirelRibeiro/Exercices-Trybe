// Exercício 5: Escreva uma classe Data cuja instância represente uma data. Esta classe deverá conter três atributos: o dia, o mês e o ano.

class Data {
  dia: number;
  mes: number;
  ano: number;

  constructor(d: number, m: number, a: number) {
    const dataInformada = `${a}-${m}-${d}`;

    if(new Date(dataInformada).getDate() !== d) {
      this.dia = 1;
      this.mes = 1;
      this.ano = 1900;
    } else {
      this.dia = d;
      this.mes = m;
      this.ano = a;
    }
  }

  getMonthName(): string{
    const meses = ['Janeiro', 'Fevereiro', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    return meses[this.mes - 1];
  }

  isLeapYear(): boolean{
    return this.ano % 4 === 0 ? true : false;
  }

  compare(data: Data): number {
    const essaData = `${this.ano}-${this.mes}-${this.dia}`;

    const outraData = `${data.ano}-${data.mes}-${data.dia}`;

    if (new Date(essaData) > new Date(outraData)) return 1;
    if (new Date(essaData) < new Date(outraData)) return -1;

    return 0;
  }
}

// Exercício 6: Vamos adicionar à nossa classe de Data do exercício anterior os comportamentos. Essa classe deverá conter os seguintes métodos:

// constructor: deverá verificar se a data passada por parâmetro é uma data válida, caso não esteja deverá criar uma data com valor “01/01/1900”;
// getMonthName: retorna o mês da data por extenso;
// isLeapYear: retorna verdadeiro se o ano é bissexto e falso caso não seja;
// compare: recebe como parâmetro um outro objeto da classe Data, compara com a data corrente e retorna:
// 0 se as datas forem iguais;
// 1 se a data corrente for posterior à data do parâmetro;
// -1 se a data do parâmetro for posterior à data corrente.
// format: recebe como parâmetro um formato de dia mês e ano e retorna a data formatada.
// Legenda:
// aaaa = ano com quatro dígitos
// aa = ano com dois dígitos
// mm = mês com 2 dígitos
// M = mês por extenso
// dd = dia com 2 dígitos
// Exemplos:
// “dd/mm/aaaa” = 01/01/1900
// “aaaa-mm-dd” = 1900-01-01
// “dd de M de aa” = 01 de janeiro de 90
// “dd, M de aaaa” = 01, janeiro de 1990
