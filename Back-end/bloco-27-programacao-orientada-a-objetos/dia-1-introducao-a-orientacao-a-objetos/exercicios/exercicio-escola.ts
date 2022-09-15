// Exercício 1: Vamos modelar algumas partes de um software de uma escola. Escreva uma classe cujos objetos representarão pessoas estudantes matriculadas em uma disciplina. Cada objeto dessa classe deve conter os seguintes dados: matrícula, nome, 4 notas de prova, 2 notas de trabalho.

// Exercício 2: Agora vamos adicionar à nossa classe de pessoa estudante os comportamentos. Para isso adicione dois métodos: um que calcula a soma das notas da pessoa estudante e outro que calcula a média das notas da pessoa estudante.

class PessoaEstudante {
  matricula: number;
  nome: string;
  notasProva: number[];
  notasTrabalho: number[];

  constructor(mat: number, n: string, nP: number[], nT: number[]) {
    this.matricula = mat;
    this.nome = n;
    this.notasProva = nP;
    this.notasTrabalho = nT;
  }

  somaNotas() {
    const totalProva = this.notasProva.reduce((acc: number, curr: number) => acc += curr);
    const totalTrabalho = this.notasTrabalho.reduce((acc: number, curr: number) => acc += curr);
    console.log(`A soma das notas de ${this.nome} é:`, totalProva + totalTrabalho);
    return totalProva + totalTrabalho;
  }

  mediaNotas() {
    const media = this.somaNotas() / [...this.notasProva, ...this.notasTrabalho].length;
    console.log(`A média das notas de ${this.nome} é`, media);
    
  }
}
