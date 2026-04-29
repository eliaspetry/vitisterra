import { z } from "zod";

export const signupFormSchema = z
	.object({
		name: z
			.string("Introduce tu nombre")
			.min(2, "El nombre debe tener al menos 2 caracteres")
			.max(50, "El nombre no debe exceder los 50 caracteres"),
		lastName: z
			.string("Introduce tu(s) apellido(s)")
			.min(2, "El apellido debe tener al menos 2 caracteres")
			.max(100, "El apellido no debe exceder los 100 caracteres"),
		email: z.email("Introduce una dirección de correo válida"),
		password: z
			.string("Introduce tu contraseña")
			.min(8, "La contraseña debe tener al menos 8 caracteres")
			.max(50, "La contraseña no debe exceder los 50 caracteres"),
		confirmPassword: z
			.string("Confirma tu contraseña")
			.min(8, "La contraseña debe tener al menos 8 caracteres")
			.max(50, "La contraseña no debe exceder los 50 caracteres"),
		privacyPolicy: z.literal(true, "No podemos completar el registro sin tu consentimiento"),
		marketingOptIn: z.literal(true, "No podemos completar el registro sin tu consentimiento"),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Las contraseñas deben coincidir",
		path: ["confirmPassword"],
	});

export type SignupFormData = z.infer<typeof signupFormSchema>;
