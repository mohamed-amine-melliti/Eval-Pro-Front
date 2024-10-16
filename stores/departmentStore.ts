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
        label: 'Main Account',
        teams: [
          {
            id: 1,
            name: 'Department HR',
            value: 'personal',
            manager: 101, // manager employee_id
          },
        ],
      },
      {
        id: 2,
        label: 'Teams',
        teams: [
          {
            id: 2,
            name: 'Acme Inc.',
            value: 'acme-inc',
            manager: 102,
          },
          {
            id: 3,
            name: 'Monsters Inc.',
            value: 'monsters',
            manager: 103,
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
