import json
import random

# Exercício 5: Utilizando o arquivo pokemons.json,
# vamos escrever um programa que sorteie um pokemon aleatoriamente.
# O programa deve perguntar à pessoa usuária “Quem é esse pokemon?”
# até que ela o acerte. A cada erro, apresente um
# número de letras do nome daquele pokemon igual ao número de erros.

# Exemplo: O pokemon sorteado pelo programa é butterfree;
# a pessoa usuária chuta charizard; o programa deve exibir b.
# Em seguida, a pessoa chuta blastoise; o programa deve exibir bu;
# e assim por diante até a pessoa acertar.

# 🦜 Você pode utilizar o método choice do modulo
# random para sortear aleatoriamente um pokemon.
# Ex: random.choice(pokemon) -> {"name": "Pikachu" }.

pokemon_name = ""

with open("pokemons.json") as pokemons_file:
    pokemons = json.load(pokemons_file)["results"]
    pokemon = random.choice(pokemons)
    pokemon_name = pokemon["name"]


def guess_the_pokemon(name):
    for index in range(len(name)):
        shot = input("Quem é esse pokemon?\n")
        if shot.upper() == name.upper():
            print(f"Parabéns, você acertou!!! O pokemon é {name.upper()}")
            return
        elif shot.upper() != name.upper() and index + 1 < len(name):
            print(f"Dica: {name[0:index + 1:1]}")
        else:
            print(f"Você errou,o pokemon é {name.upper()}")
            return


guess_the_pokemon(pokemon_name)
