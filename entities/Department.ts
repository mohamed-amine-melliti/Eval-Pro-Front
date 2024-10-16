// entities/Department.ts
import { Team } from './Team'

export class Department {
  id: number
  name: string
  teams: Team[] = []

  constructor(id: number, name: string) {
    this.id = id
    this.name = name
  }

  addTeam(team: Team): void {
    this.teams.push(team)
  }

  getTeams(): Team[] {
    return this.teams
  }
}
