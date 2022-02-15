import { useState } from "react";

type FormInputValuesObjectType = {
	email: string;
	name: string;
	topic: string;
	message: string;
};

export function EmailFormInputs() {
	const baseInputFieldClasses =
		"my-2 py-3 px-4 w-full leading-tight rounded-xl border border-gray-400 focus:border-mszk-blue focus:outline-none";

	const [inputValues, setInputValues] = useState<FormInputValuesObjectType>({
		email: "",
		message: "",
		name: "",
		topic: "Válassz egy témát!",
	});

	const sendMessage = () => {
		// TODO
	};

	return (
		<div>
			<form className="flex flex-col lg:text-xl">
				<div className="flex flex-col lg:flex-row gap-x-8 justify-evenly">
					<div className="w-full">
						<label htmlFor="form-email">
							Email cím
							<input
								id="form-email"
								name="email"
								type="email"
								placeholder="pelda@gmail.com"
								pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
								className={baseInputFieldClasses}
								value={inputValues.email}
								onChange={(e) =>
									setInputValues({ ...inputValues, email: e.target.value })
								}
							/>
						</label>
					</div>
					<div className="w-full">
						<label htmlFor="form-name">
							Név
							<input
								id="form-name"
								name="name"
								type="text"
								minLength={3}
								maxLength={64}
								placeholder="Kiss András"
								className={baseInputFieldClasses}
								value={inputValues.name}
								onChange={(e) =>
									setInputValues({ ...inputValues, name: e.target.value })
								}
							/>
						</label>
					</div>
				</div>
				<div>
					<label htmlFor="form-topic">
						Téma
						<select
							className="py-1 px-2 m-4 font-medium text-white bg-mszk-blue rounded-xl"
							value={inputValues.topic}
							onChange={(e) =>
								setInputValues({ ...inputValues, topic: e.target.value })
							}
						>
							<option disabled hidden>
								Válassz egy témát!
							</option>
							<option>Projektek</option>
							<option>Felvételi</option>
							<option>Egyéb</option>
						</select>
					</label>
				</div>
				<div>
					<label htmlFor="form-message">
						Üzenet
						<textarea
							id="form-message"
							name="message"
							className={baseInputFieldClasses}
							minLength={5}
							maxLength={2000}
							rows={10}
							value={inputValues.message}
							onChange={(e) =>
								setInputValues({ ...inputValues, message: e.target.value })
							}
						/>
					</label>
				</div>
				<div>
					<button
						className="py-1 px-4 w-full text-2xl text-white bg-mszk-blue rounded-3xl"
						type="button"
						onClick={() => sendMessage()}
					>
						Küldés
					</button>
				</div>
			</form>
		</div>
	);
}
