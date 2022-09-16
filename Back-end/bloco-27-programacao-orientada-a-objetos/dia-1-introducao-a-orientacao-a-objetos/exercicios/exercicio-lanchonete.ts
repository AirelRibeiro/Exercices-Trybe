// Exercício 3: Vamos mudar um pouco nosso contexto para um sistema de vendas de uma lanchonete. Crie uma classe que represente uma pessoa cliente da lanchonete, uma classe que represente um pedido e uma que represente um item do pedido.

// A pessoa cliente deverá conter o nome;
// O item do pedido deve conter o nome do pedido (ex. “Batatas fritas”; “Açaí”) e o preço;
// O pedido deve conter o cliente, os itens consumidos, a forma de pagamento (ex: “cartão”, “dinheiro”) e o percentual em decimal de desconto para o pedido (ex: 0.1 para 10%, 0.3 para 30%), o pedido pode ou não possuir desconto.

// Exercício 4: Agora vamos adicionar às nossas classes do exercício anterior os comportamentos. A classe que representa o pedido deverá ter dois métodos: um que calcula o total do pedido e outro que calcula o total aplicando o valor de desconto.

class PessoaCliente {
  nome: string;

  constructor(n: string) {
    this.nome = n;
  }
}

class ItemDePedido {
  nome: string;
  preco: number;

  constructor(n: string, p: number) {
    this.nome = n;
    this.preco = p;
  }
}

class Pedido {
  itens: ItemDePedido[];
  formaDePagamento: string;
  desconto?: number;

  constructor(i: ItemDePedido[], fP: string, d?: number) {
    this.itens = i;
    this.formaDePagamento = fP;
    this.desconto = d;
  }

  calculaDesconto(totalDoPedido: number) {
    const desconto = this.desconto ? this.desconto : 0;
    return desconto * totalDoPedido;
  }

  calculaPedido() {
    let total = this.itens.reduce((acc: number, curr: ItemDePedido) => {
      acc += curr.preco;
      return acc;
    }, 0);
    if(this.desconto) {
      total -= this.calculaDesconto(total);
    }
    console.log(`O preço total do pedido é:`, total);
    
  }
}
