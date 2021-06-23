const SEED_EMPLOYEES = [
  {
    firstName: 'Sara',
    middleInitial: 'M',
    lastName: 'Hall',
    dateOfBirth: '2017-05-24',
    dateOfEmployment: '2017-05-24',
    status: 'active'
  },
  {
    firstName: 'Finn',
    middleInitial: 'T',
    lastName: 'Human',
    dateOfBirth: '2017-05-24',
    dateOfEmployment: '2017-05-24',
    status: 'active'
  },
  {
    firstName: 'Jake',
    middleInitial: 'T',
    lastName: 'Laker',
    dateOfBirth: '2017-05-24',
    dateOfEmployment: '2017-05-24',
    status: 'active'
  }
]

export class MockApiClient {

  constructor(employees) {
    this.currentEmployeeId = 0
    if (!employees) {
      employees = SEED_EMPLOYEES.map((employee) => {
        employee.id = this.nextId()
        return employee
      })
    }
    this.employees = employees
  }

  nextId() {
    this.currentEmployeeId = this.currentEmployeeId + 1
    return `${this.currentEmployeeId}`
  }

  async signIn() {
    return Promise.resolve('1')
  }

  async fetchEmployees() {
    return Promise.resolve([...this.employees])
  }

  async updateEmployee(employee) {
    this.employees = this.employees.map(existingEmployee => {
      if (existingEmployee.id === employee.id) {
        return employee
      } else {
        return existingEmployee
      }
    })

    return Promise.resolve(employee)
  }

  async createEmployee(employee) {
    employee.id = this.nextId()
    this.employees.push(employee)
    return Promise.resolve(employee)
  }

  async deleteEmployee(employeeId) {
    this.employees = this.employees.filter(existingEmployee => {
      return existingEmployee.id !== employeeId
    })

    return Promise.resolve(employeeId)
  }
}

export default new MockApiClient()
