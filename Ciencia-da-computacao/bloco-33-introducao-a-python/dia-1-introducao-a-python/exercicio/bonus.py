# Exercício 1: Dada uma lista, descubra o menor elemento.
# Por exemplo, [5, 9, 3, 19, 70, 8, 100, 2, 35, 27] deve retornar 2.


def bigger_number(numbers: list):
    return min(numbers)


print(bigger_number([5, 9, 3, 19, 70, 8, 100, 2, 35, 27]))

# Exercício 2: Faça um programa que, dado um valor n qualquer, tal que n > 1,
# imprima na tela um triângulo retângulo com n asteriscos de base.
# Por exemplo, para n = 5 o triângulo terá 5 asteriscos na base:


def print_n(n):
    for index in range(n):
        print((index + 1) * "*")


print_n(5)

# Exercício 3: Crie uma função que receba um número inteiro N
# e retorne o somatório de todos os números de 1 até N.
# Por exemplo, para N = 5, o valor esperado será 15.


def sum(n):
    total = 0
    for index in range(n + 1):
        total += index
    return total


print(sum(10))

# Exercício 4: Um posto está vendendo combustíveis
# com a seguinte tabela de descontos:

# Álcool:
#   - Até 20 litros, desconto de 3% por litro;
#   - Acima de 20 litros, desconto de 5% por litro.
# Gasolina:
#   - Até 20 litros, desconto de 4% por litro;
#   - Acima de 20 litros, desconto de 6% por litro.

# Escreva uma função que receba o número de litros vendidos, o tipo de
# combustível (codificado da seguinte forma: A - álcool, G - gasolina),
# e retorne o valor a ser pago pelo cliente,
# sabendo-se que o preço do litro da gasolina é R$ 2,50,
# e o preço do litro do álcool é R$ 1,90.


def calculates_fuel_price(type, quantity):
    price = 0
    if type == "G":
        if quantity <= 20:
            price = 2.50 - (2.50 * 0.04)
        else:
            price = 2.50 - (2.50 * 0.06)
    else:
        if quantity <= 20:
            price = 1.90 - (1.90 * 0.03)
        else:
            price = 1.90 - (1.90 * 0.05)
    return quantity * price


print(calculates_fuel_price("A", 10))
