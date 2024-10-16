// entities/Team.ts
export class Team {
    id: number
    name: string
    status: string
    manager: number // This will be the employee's ID
  
    constructor(id: number, name: string, status: string, manager: number) {
      this.id = id
      this.name = name
      this.status = status
      this.manager = manager
    }
  
    updateStatus(status: string): void {
      this.status = status
    }
  
    setManager(managerId: number): void {
      this.manager = managerId
    }
  }
  