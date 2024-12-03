import { defineStore } from 'pinia';
import Task from '@/entities/Task';
import TaskSchema from '~/zod-schemas/task-schema';

let taskCounter = 0; // Counter to increment task IDs
function generateIncrementalId(): string {
  taskCounter += 1;
  return `TASK-${taskCounter.toString().padStart(4, '0')}`;
}

// Define the Pinia store
export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [
      new Task(1, 'In Progress', 'Medium', 'Documentation', "You can't compress the program without quantifying the open-source S..."),
      new Task(2, 'Backlog', 'Medium', 'Documentation', 'Try to calculate the EXE feed; maybe it will index the multi-byte pixel!'),
      new Task(3, 'Todo', 'High', 'Bug', 'We need to bypass the neural TCP card!'),
      new Task(4, 'Backlog', 'Medium', 'Feature', 'The SAS interface is down, bypass the open-source project so we can bac...'),
      new Task(5, 'Canceled', 'Medium', 'Feature', "I'll parse the wireless SSL protocol, that should drive the API panel!"),
      new Task(6, 'Done', 'High', 'Bug', 'Use the digital TLS panel, then you can transmit the haptic system!'),
      new Task(7, 'Todo', 'High', ' ', 'The UTF8 application is down, parse the neural back-end so we can ba...'),
      new Task(8, 'In Progress', 'Medium', 'Feature', "Generating the driver won't do anything; we need to copy the 1080p ..."),
      new Task(9, 'Todo', 'Low', 'Feature', 'We need to program the back-end THX pixel!')
    ]
  }),

 
  // Actions to add, remove, and update tasks
  actions: {
    addTask(employeeID: number, status: string, priority: string, type: string, title: string) {
      // Validate the new task data before creating a Task instance
      const taskData = {
        id: `TASK-${S()}`,
        employeeID,
        status,
        priority,
        type,
        title
      };
      
      try {
        // Use TaskSchema to validate the task data
        const validatedTask = TaskSchema.parse(taskData);
        const newTask = new Task(
          validatedTask.employeeID,
          validatedTask.status,
          validatedTask.priority,
          validatedTask.type,
          validatedTask.title
        );
        this.tasks.push(newTask);
      } catch (error) {
        console.error("Validation error while adding task:", error.errors);
      }
    },

    removeTask(taskId: string) {
      this.tasks = this.tasks.filter(task => task.id !== taskId);
    },

    updateTaskStatus(taskId: string, status: string) {
      const task = this.tasks.find(task => task.id === taskId);
      if (task) task.status = status;
    }
  },

  getters: {
    getTaskById: (state) => (id: string) => {
      return state.tasks.find(task => task.id === id);
    }
  }
});
