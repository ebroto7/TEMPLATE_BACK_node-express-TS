import { z } from 'zod';

export const createTaskSchema = z.object({
    title: z
        .string(
            { required_error: "El título es requerido" }
        )
        .min(5, { message: "El título debe tener al menos 5 caracteres" })
        .max(25, { message: "El título debe tener máximo 25 caracteres" }),
    description: z
        .string(
            { required_error: "La descripción es requerida" }
        )
        
        .optional(),
    
    date: z
        .string()
        .date()
        .optional()
});


export const updateTaskSchema = z.object({
    title: z
        .string(
            { required_error: "El título es requerido" }
        )
        .min(5, { message: "El título debe tener al menos 5 caracteres" })
        .max(25, { message: "El título debe tener máximo 25 caracteres" }),
    description: z
        .string(
            { required_error: "La descripción es requerida" }
        )
      
        .optional(),
    date: z
        .string()
        .date()
        .optional()
});

