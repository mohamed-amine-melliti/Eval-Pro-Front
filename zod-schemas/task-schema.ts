import { z } from 'zod';

const TaskSchema = z.object({
  // id: z.string().regex(/^TASK-\d{4}$/, "ID must be in the format 'TASK-XXXX'"),
  title: z.string().min(1, "Title is required").max(255, "Title must be less than 255 characters"),
  employeeID: z.number().positive("Employee ID must be a positive number"),
  status: z.enum(['Todo', 'In Progress', 'Done', 'Backlog', 'Canceled']),
  priority: z.enum(['Low', 'Medium', 'High']),
  type: z.enum(['Bug', 'Feature', 'Documentation']),
  description: z.string().min(1, "Description is required").max(255, "Description must be less than 255 characters"),
  
});

export default TaskSchema;