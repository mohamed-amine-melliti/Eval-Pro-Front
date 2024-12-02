import { defineStore } from 'pinia'

type Team = {
  id: number
  name: string
  value: string
  manager: number // employee ID
}

type Department = {
  id: number
  label: string
  teams: Team[]
}


export const useDepartmentStore = defineStore('department', {
  state: () => ({
    departments: [
      {
        id: 1,
        label: 'Current Department',
        teams: [
          {
            id: 1,
            name: 'Department HR',
            value: 'hr',
            manager: 101, // manager's employee_id
          },
        ],
      },
      {
        id: 2,
        label: 'Teams',
        teams: [
          {
            id: 2,
            name: 'Department Financier',
            value: 'financier',
            manager: 102, // manager's employee_id
          },
          {
            id: 3,
            name: 'Department Development',
            value: 'dev',
            manager: 103, // manager's employee_id
          },
        ],
      },
    ] as Department[],
  }),
  getters: {
    getDepartments(state) {
      return state.departments
    },
  },
  actions: {
    addTeamToDepartment(departmentId: number, team: Team) {
      const department = this.departments.find(dep => dep.id === departmentId)
      if (department) {
        department.teams.push(team)
      }
    },
    addDepartment(department: Department) {
      const newDepartmentId = this.departments.length + 1
      department.id = newDepartmentId // Assign a new ID
      this.departments.push(department)
    },
  },
})
