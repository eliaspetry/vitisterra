import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupFormSchema, type SignupFormData } from "../../schema/landing/signup";

export function RegisterForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<SignupFormData>({
		resolver: zodResolver(signupFormSchema),
	});

	/**
	 * Submit event handler
	 * @param data The raw form data
	 */
	function onSubmit(data: SignupFormData) {
		window.alert(
			`¡Ya casi lo tienes, ${capitalize(data.name.trim())}! Revisa tu bandeja de entrada para confirmar el correo y completar tu registro.`,
		);
	}

	/**
	 * Capitalizes the first letter of a string
	 * @param value The string to capitalize
	 * @returns The capitalized string
	 */
	function capitalize(value: string): string {
		if (!value.length) return "";

		if (value.length === 1) return value.toUpperCase();

		return `${value.charAt(0).toUpperCase()}${value.slice(1)}`;
	}

	return (
		<div className="flex flex-col items-center justify-start h-full w-full bg-linear-to-b from-[#d7d0d785] to-[#cdc1ce] p-10 border-mauve-600 border-2 rounded-xl">
			<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full gap-4">
				<input {...register("name")} placeholder="Nombre" className="border p-2 w-full rounded-md bg-white" />
				{errors.name && <p className="text-[#ac3354]">{errors.name.message}</p>}

				<input
					{...register("lastName")}
					placeholder="Apellidos"
					className="border p-2 w-full rounded-md bg-white"
				/>
				{errors.lastName && <p className="text-[#ac3354]">{errors.lastName.message}</p>}

				<input
					{...register("email")}
					placeholder="Correo electrónico"
					className="border p-2 w-full rounded-md bg-white"
				/>
				{errors.email && <p className="text-[#ac3354]">{errors.email.message}</p>}

				<input
					{...register("password")}
					type="password"
					placeholder="Contraseña"
					className="border p-2 w-full rounded-md bg-white"
				/>
				{errors.password && <p className="text-[#ac3354]">{errors.password.message}</p>}

				<input
					{...register("confirmPassword")}
					type="password"
					placeholder="Confirmar contraseña"
					className="border p-2 w-full rounded-md bg-white"
				/>
				{errors.confirmPassword && <p className="text-[#ac3354]">{errors.confirmPassword.message}</p>}

				<label className="flex flex-row items-center gap-4">
					<input type="checkbox" className="transform scale-175" {...register("privacyPolicy")} />
					He leído y acepto la
					<span className="text-mauve-500 font-bold hover:text-mauve-400 hover:cursor-pointer -ml-3">
						Política de Privacidad
					</span>
				</label>
				{errors.privacyPolicy && <p className="text-[#ac3354]">{errors.privacyPolicy.message}</p>}

				<label className="flex flex-row items-center gap-4">
					<input type="checkbox" className="transform scale-175" {...register("marketingOptIn")} />
					Deseo recibir noticias y comunicaciones comerciales o con fines de marketing por correo electrónico
				</label>
				{errors.marketingOptIn && <p className="text-[#ac3354]">{errors.marketingOptIn.message}</p>}

				<p className="text-sm text-mauve-600">
					* Al marcar esta casilla y finalizar el registro, consientes el tratamiento de tus datos de contacto
					facilitados por Vitisterra, S.L. para comunicaciones comerciales y/o con fines de marketing, por
					correo electrónico, sobre nuestros productos y servicios. Tus datos nunca serán cedidos a terceros
					salvo en caso de obligación legal y a nuestros proveedores de servicios indicados en la{" "}
					<span className="text-mauve-500 font-bold hover:text-mauve-400 hover:cursor-pointer">
						Política de Privacidad
					</span>
					. Podrás acceder a tus datos, rectificarlos o darte de baja en cualquier momento enviando un correo
					a soporte@vitisterra.es con el asunto "BAJA", o utilizando los enlaces integrados al final de los
					correos recibidos.
				</p>
				<button
					type="submit"
					className="bg-[#457c6a] hover:bg-[#3a8d71] hover:cursor-pointer text-white px-3 py-4 text-lg rounded-2xl w-full"
				>
					Crear cuenta
				</button>
			</form>
		</div>
	);
}
