import json
import random
import csv

# Exercício 1: Faça um programa que receba um nome
# e imprima o mesmo na vertical em escada invertida. Exemplo:

# Entrada:

# PEDRO

# Saída:

# PEDRO
# PEDR
# PED
# PE
# P


def print_name():
    name = input("Digite seu nome:")
    for index in range(len(name)):
        print(name[0:(len(name)-index):1])


print_name()

# Exercício 2: Jogo da palavra embaralhada.
# Desenvolva um jogo em que a pessoa usuária tenha que adivinhar
# uma palavra que será mostrada com as letras embaralhadas.
# O programa terá uma lista de palavras e escolherá uma aleatoriamente.
# O jogador terá três tentativas para adivinhar a palavra.
# Ao final, a palavra deve ser mostrada na tela,
# informando se a pessoa ganhou ou perdeu o jogo.

# 🦜 Para embaralhar uma palavra faça:
# scrambled_word = "".join(random.sample(word, len(word)))

# 🦜 O sorteio de uma palavra aleatória pode ser
# feito utilizando o método choice:
# random.choice(["word1", "word2", "word3"]) -> "word2".


words = [
    "leitura",
    "casamento",
    "cabaré",
    "candomblé",
    "duvidoso",
    "cachoeira",
    "ruidoso",
    "estranho",
]


def guess_the_word(words):
    maximum_attempts = 3
    word = random.choice(words)
    scrambled_word = "".join(random.sample(word, len(word)))
    for index in range(maximum_attempts):
        print(scrambled_word)
        tried_word = input("Que palavra é essa?\n")
        if tried_word == word:
            print(f"Você ganhou, a palavra é {word.upper()}")
            return
        elif tried_word != word and index < 2:
            print("Você errou. Tente novamente!")
        else:
            print(f"Você perdeuu, a palavra é {word.upper()}")


# guess_the_word(words)

# Exercício 3: Modifique o exercício anterior para que
# as palavras sejam lidas de um arquivo.
# Considere que o arquivo terá cada palavra em uma linha.

words = []

with open("words.txt") as words_file:
    for word in words_file:
        real_word = word.split("\n")[0]
        words.append(real_word)

guess_the_word(words)

# 🚀 Exercício 4: Dado o seguinte arquivo no formato JSON,
# leia seu conteúdo e calcule a porcentagem de livros
# em cada categoria em relação ao número total de livros.
# O resultado deve ser escrito em um arquivo no formato
# CSV como o exemplo abaixo.

# Saída:

# categoria, porcentagem
# Python,0.23201856148491878
# Java,0.23201856148491878
# PHP,0.23201856148491878

categories = {}
total_books = 0
header = ["Categoria", "Porcentagem"]
category_percentage = []

with open("books.json") as file:
    books = json.load(file)
    for book in books:
        for category in book["categories"]:
            if categories.get(category):
                categories[category] += 1
            else:
                categories[category] = 1
    total_books = sum(categories.values())
    category_percentage = [
        [category, (num_books / total_books)]
        for category, num_books in categories.items()
    ]


with open("report.csv", "w") as percentage_file:
    writer = csv.writer(percentage_file)
    writer.writerow(header)
    writer.writerows(category_percentage)

print(category_percentage)
