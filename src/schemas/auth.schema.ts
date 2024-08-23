import { z } from 'zod';

export const registerSchema = z.object({
    name: z
        .string(
            { required_error: "El nombre de usuario es requerido" }
        )
        .min(3, { message: "El nombre de usuario debe tener al menos 3 caracteres" })
        .max(25, { message: "El nombre de usuario debe tener máximo 25 caracteres" }),
    email: z
        .string(
            { required_error: "El email es requerido" }
        ).email(
            { message: "El email es inválido" }
        ),
    password: z
        .string(
            { required_error: "La contraseña es requerida" }
        )
        .min(6, { message: "La contraseña debe tener al menos 6 caracteres" })
        .max(12, { message: "La contraseña debe tener máximo 12 caracteres" })
});

export const loginSchema = z.object({
    email: z
        .string(
            { required_error: "El email es requerido" }
        ).email(
            { message: "El email es inválido" }
        ),
    password: z
        .string(
            { required_error: "La contraseña es requerida" }
        )
        .min(6, { message: "La contraseña debe tener al menos 6 caracteres" })
        .max(12, { message: "La contraseña debe tener máximo 12 caracteres" })
});