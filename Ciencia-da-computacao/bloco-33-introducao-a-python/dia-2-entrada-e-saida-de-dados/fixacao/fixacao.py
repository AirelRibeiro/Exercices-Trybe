# Exercício 1: Faça um programa que solicite o nome de uma pessoa usuária e imprima-o na vertical. Exemplo:
# F
# U
# L
# A
# N
# O

def print_name():
    name = input("Digite seu nome:")
    for letter in name:
        print(letter)

print_name()

# Exercício 2: Escreva um programa que receba vários números naturais e calcule a soma desses valores. Caso algum valor da entrada seja inválido (por exemplo uma letra), uma mensagem deve ser exibida na saída de erros no seguinte formato: “Erro ao somar valores, {valor} é um valor inválido”. Ao final, você deve imprimir a soma dos valores válidos.

def print_sum():
    numbers = input("Insira seus números aqui, separando-os por espaço: ").split(" ")
    total_sum = 0
    for num in numbers:
        if not num.isdigit():
            print(f"Erro ao somar valores, {num} não é um dígito.")
        else:
            total_sum += int(num)

    print(f"A soma dos valores válidos é: {total_sum}")

print_sum()

# Exercício 3: Dado um arquivo contendo estudantes e suas respectivas notas, escreva um programa que:

# lê todas essas informações;
# aplique um filtro, mantendo somente as pessoas que estão reprovadas;
# escreva seus nomes em outro arquivo.
# Considere que a nota miníma para aprovação é 6.

def disapproved():
    disapproved_students = []
    with open("students.txt") as students_file:
        for line in students_file:
            student_grade = line
            student_grade = student_grade.split(" ")
            if int(student_grade[1]) < 6:
                disapproved_students.append(student_grade[0] + "\n")
    with open("disapproved_students.txt", mode="w") as disapproved_studentsFile:
        disapproved_studentsFile.writelines(disapproved_students)

disapproved()