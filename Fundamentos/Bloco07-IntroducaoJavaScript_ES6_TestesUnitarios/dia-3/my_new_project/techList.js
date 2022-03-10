// Construção da função a partir dos testes.

const techList = (arrayOfTechnologies, name) => {
  let alphabeticalOrder = arrayOfTechnologies.sort();
  let finaleArray = [];
  if (alphabeticalOrder.length == 0) {
    return "Vazio!"
  } else {
    for (let index = 0; index < alphabeticalOrder.length; index += 1) {
      finaleArray.push({"tech": alphabeticalOrder[index], name});
    }
  } return finaleArray;
}

module.exports = techList;
