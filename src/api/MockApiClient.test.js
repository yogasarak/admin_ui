import MockApiClient from './MockApiClient'

describe('MockApiClient', () => {
  let client
  beforeEach(() => {
    client = new MockApiClient()
  })

  let mockData
  beforeAll(() => {
    mockData = [{ some: 'data' }]
  })

  describe('when fetching employees', () => {
    it('returns 3 employees (async/await)', async () => {
      const employees = await client.fetchEmployees()
      expect(employees).toHaveLength(3)
    })

    it('returns employees with valid ids', async () => {
      const employees = await client.fetchEmployees()
      expect(employees).toHaveLength(3)
    })
  })

  describe('when creating employees', () => {
    it('a new employee is added to the list', async () => {
      
      // Given
      const originalEmployeeCount = (await client.fetchEmployees()).length
      const newEmployee = {
        id: 4,
        firstName: 'Sam',
        middleInitial: 'R',
        lastName: 'Keyser',
        dateOfBirth: '01/01/2019',
        dateOfEmployment: '01/01/2019',
        status: 'active'
      }

      // When
      const employees = await client.createEmployee(newEmployee)

      // Then
      expect(originalEmployeeCount).toEqual(3)
      expect(employees).toHaveLength(4)
    })
  })
})
