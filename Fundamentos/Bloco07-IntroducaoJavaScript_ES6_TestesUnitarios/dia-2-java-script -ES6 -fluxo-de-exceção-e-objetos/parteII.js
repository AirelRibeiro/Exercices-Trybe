/* 
1 => Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
Note que o parâmetro da função já está sendo passado na chamada da função.
2 => Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
Modifique o nome da pessoa compradora.
Modifique o valor total da compra para R$ 50,00.
*/

const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};
/* Modelo de string a ser retornada:
"Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
*/
const customerInfo = (order) => {
  const deliveryPerson = order['order']['delivery']['deliveryPerson']; // Ana Silveira, pessoa entregadora
  const client = order['name']; // Rafael Andrade, pessoa que fez o pedido
  const phone = order['phoneNumber']; // Telefone
  const address = Object.values(order.address); // Endereço completo como array
  const street = address[0]; // Rua usando array de endereço
  const number = address[1]; // Numero da casa usando array de endereço
  const complement = address[2]; // Apartamento usando array de endereço
  console.log(`Olá ${deliveryPerson}, entrega para: ${client}, telefone: ${phone}, residente em ${street}, nº ${number}, apartamento ${complement}.`);
}

customerInfo(order);

/* String a ser retornada: "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
Modifique o nome da pessoa compradora.
Modifique o valor total da compra para R$ 50,00.
*/
const orderModifier = (order) => {
  const client = order['name'] = 'Luiz Silva';
  const pizzas = Object.keys(order.order.pizza);
  const drinks = order['order']['drinks']['coke']['type']
  const price = order['payment']['total'] = '50,00';
  console.log(`Olá ${client}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${drinks} é de R$ ${price}.`);
}

orderModifier(order);