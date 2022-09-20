// Exercício 5: Você se lembra daquele pequeno software de uma lanchonete que nós começamos a construir no primeiro dia? Então, vamos retomá-lo agora. A nossa escola possui uma lanchonete e, pra fazer a gerência da mesma, vamos adicionar ao nosso sistema escolar um módulo de lanchonete. Para isso precisamos transportar nossas classes referentes a lanchonete para dentro dele, fazendo algumas alterações para alinhá-lo melhor com a realidade da nossa escola.

// Toda pessoa da nossa escola passa a ser uma pessoa cliente da nossa lanchonete. Sendo assim, não precisamos mais da nossa classe de pessoa cliente, e precisamos mudar o tipo de cliente no pedido para o tipo pessoa. Então, vamos alterar nossas classes do módulo de lanchonete para que contemple isso. Nossa modelagem inicial será essa:

// `Class`: OrderItem
// `Attributes`:
//     - name: nome do produto
//     - price: preco do produto
// `Methods`:
//     - Getters/Setters
//     - constructor: deve receber como parâmetro o nome do produto e o preço.
// `Validations`:
//     - O nome do produto deve conter pelo menos 3 caracteres
//     - O preço não pode ser negativo

// `Class`: Order
//   `Attributes`:
//     - client: pessoa cliente
//     - items: os itens consumidos
//     - paymentMethod: a forma de pagamento (ex: “cartão”, “dinheiro”)
//     - discount: o percentual em decimal de desconto para o pedido (ex: 0.1 para 10%, 0.3 para 30%), o pedido pode ou não possuir desconto
//   `Methods`:
//     - Getters/Setters
//     - constructor: deve receber como parâmetro a pessoa cliente, os itens do pedido, a forma de pagamento, e o disconto caso exista
//     - calculateTotal: retorna o valor total do pedido
//     - calculateTotalWithDiscount: retorna o valor total do pedido aplicando o desconto.
//   `Validations`:
//     - A pessoa cliente deve ser uma instância da nossa classe pessoa
//     - O pedido deve ter pelo menos um item
//     - A forma de pagamento só pode ser uma dessas três: "dinheiro", "cartão", "vale"
//     - O disconto não pode ser negativo