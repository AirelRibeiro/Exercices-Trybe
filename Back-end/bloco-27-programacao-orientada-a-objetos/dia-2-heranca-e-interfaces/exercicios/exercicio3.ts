// `Interface`: Employee
// `Attributes`:
//     - registration: número do registro
//     - salary: valor do salário
//     - admissionDate: data de admissão
// `Methods`:
//     - generateRegistration: retorna uma string única gerada como registro

interface Employee {
  registration: string;
  salary: number;
  admissionDate: Date;
  generateRegistration(): string;
}

export default Employee;
