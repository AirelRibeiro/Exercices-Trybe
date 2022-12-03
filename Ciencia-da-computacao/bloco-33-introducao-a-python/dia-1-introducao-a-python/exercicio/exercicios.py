import math

# 🚀 Ex. 1: Crie uma função que receba dois números e retorne o maior deles


def bigger(a, b):
    if a > b:
        return a
    elif b > a:
        return b
    else:
        return "Os números são iguais!"


print(bigger(1, 2))
print(bigger(2, 2))
print(bigger(3, 2))

# 🚀 Ex. 2: Calcule a média aritmética dos valores contidos em uma lista.


def average(values: list):
    avg = 0
    for value in values:
        avg += value
    return avg // len(values)


print(average([1, 2, 3, 4, 5]))

# Exercício 3: Faça um programa que, dado um valor n qualquer, tal que n > 1,
# imprima na tela um quadrado feito de asteriscos de lado de tamanho n.


def print_n(n):
    for index in range(n):
        print(n * "*")


print_n(5)


# 🚀 Exercício 4: Crie uma função que receba uma lista de nomes
# e retorne o nome com a maior quantidade de caracteres.
# Por exemplo, para ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"],
# o retorno deve ser "Fernanda".


def bigger_name(names: list):
    biggest_name = "A"
    for name in names:
        if len(name) > len(biggest_name):
            biggest_name = name
    return biggest_name


print(bigger_name(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]))

# Exercício 5: Considere que a cobertura da tinta é de 1 litro para cada
# 3 metros quadrados e que a tinta é vendida em latas de 18 litros,
# que custam R$ 80,00. Crie uma função que retorne dois valores
# em uma tupla contendo a quantidade de latas de tinta a serem compradas
# e o preço total a partir do tamanho de uma parede (em m²).


def how_many_paints(area: int):
    liters: float = area / 3
    paint_cans: int = math.ceil(liters / 18)
    total: tuple = (paint_cans, paint_cans * 80)
    return total


print(how_many_paints(110))

# Exercício 6: Crie uma função que receba os três lado de um triângulo
# e informe qual o tipo de triângulo formado ou "não é triangulo",
# caso não seja possível formar um triângulo.


def is_triangle(a, b, c):
    triangle = a + b > c and a + c > b and b + c > a

    if not triangle:
        return "Não é um triângulo"
    elif a == b == c:
        return "Triângulo equilátero"
    elif a == b or a == c or b == c:
        return "Triângulo isóceles"
    else:
        return "Triângulo escaleno"


print(is_triangle(10, 4, 5))
print(is_triangle(10, 10, 10))
print(is_triangle(10, 10, 9))
print(is_triangle(10, 8, 9))
