import { defineStore } from 'pinia'
import { Employee } from '@/entities/Employee'

export const useEmployeeStore = defineStore('employee', {
  state: () => ({
    // Predefined static employee
    employees: [
      new Employee(
        1, // Static ID
        'fbh', // Username
        'feryel.benhassen@esprit.tn', // Email
        'Feryel', // First name
        'Ben Hassen', // Last name
        '123 Main St, Default City', // Address
        'Software Engineer', // Job Position
        'password123', // Password
        new Date('1985-07-10'), // Date of birth
        new Date('2023-06-23'), // Start date
        true // Active status
      )
    ] as Employee[],
  }),

  actions: {
    addEmployee(employeeData: Omit<Employee, 'id'>) {
      const newEmployee = new Employee(
        this.generateId(), // Generate unique ID
        employeeData.username,
        employeeData.email,
        employeeData.firstName,
        employeeData.lastName,
        employeeData.address,
        employeeData.jobPosition,
        employeeData.password,
        employeeData.dateOfBirth,
        employeeData.startDate,
        employeeData.active,
      )
      this.employees.push(newEmployee)
    },

    generateId(): number {
      // Generate a unique ID based on the current length of the employees array
      return this.employees.length > 0 ? Math.max(...this.employees.map(e => e.id)) + 1 : 1;
    },

    activateEmployee(employeeId: number) {
      const employee = this.employees.find(emp => emp.id === employeeId)
      if (employee) {
        employee.activate()
      }
    },
  },

  getters: {
    getEmployees: (state) => state.employees,
    getEmployeeById: (state) => (id: number) => state.employees.find(emp => emp.id === id),
  },
})
