// Task.ts
let taskCounter = 0; // Counter to increment task IDs

export default class Task {
  id: string;
  employeeID: number;
  status: string;
  priority: string;
  type: string;
  title: string;

  constructor(employeeID: number, status: string, priority: string, type: string, title: string) {
    this.id = `TASK-${this.generateIncrementalId()}`; // Generates ID in TASK-XXXX format
    this.employeeID = employeeID; // Foreign key
    this.status = status;
    this.priority = priority;
    this.type = type;
    this.title = title;
  }

  private generateIncrementalId(): string {
    taskCounter += 1;
    return taskCounter.toString().padStart(4, '0'); // Pads ID with zeros to ensure 4 digits
  }
}
