import clsx from "clsx";
import { useState } from "react";

type DonationObject = {
	interval: "ONE_TIME" | "RECURRING";
	amount: number;
	surname: string;
	firstname: string;
	emailAddress: string;
	phoneNumber: string;
	comment: string;
};

export function PersonDetailsForm() {
	const [donation, setDonation] = useState<DonationObject>({
		interval: "ONE_TIME",
		amount: 1000,
		surname: "",
		firstname: "",
		emailAddress: "",
		phoneNumber: "",
		comment: "",
	});

	return (
		<div>
			<h2 className="text-2xl font-bold text-center">Bankkártyával</h2>
			<div>
				<div className="flex flex-row gap-4 justify-center my-8 text-2xl">
					<button
						type="button"
						className={clsx(
							"py-2 px-4 w-44 rounded-3xl shadow-mszk-sponsor",
							donation.interval === "ONE_TIME" && "text-white bg-mszk-blue",
						)}
						onClick={() => setDonation({ ...donation, interval: "ONE_TIME" })}
					>
						egyszeri
					</button>
					<button
						type="button"
						onClick={() => setDonation({ ...donation, interval: "RECURRING" })}
						className={clsx(
							"py-2 px-4 w-44 rounded-3xl shadow-mszk-sponsor",
							donation.interval === "RECURRING" && "text-white bg-mszk-blue",
						)}
					>
						rendszeres
					</button>
				</div>
				<div className="flex flex-col justify-center items-center px-2">
					<h3 className="mb-4 text-2xl font-medium">Összeg</h3>
					<div className="flex flex-row items-center p-1 lg:p-2 rounded-xl border-2">
						<input
							required
							value={donation.amount}
							onChange={(e) =>
								setDonation({
									...donation,
									amount: parseInt(e.target.value, 10),
								})
							}
							type="number"
							min="1000"
							step="1"
							className="py-2 px-4 text-xl rounded-xl border-transparent focus:border-transparent focus:ring-0 focus:outline-none"
						/>
						<span className="text-2xl">Ft</span>
					</div>
				</div>
				<div className="flex flex-col gap-y-8 items-center my-8">
					<div className="flex flex-col md:flex-row gap-1 gap-y-8 items-center">
						<div>
							<span>Vezetéknév*</span>
							<input
								required
								placeholder="Kovács"
								className="border-b border-black focus:outline-none"
								type="text"
								value={donation.surname}
								onChange={(e) =>
									setDonation({ ...donation, surname: e.target.value })
								}
							/>
						</div>
						<div>
							<span>Keresztnév*</span>
							<input
								required
								placeholder="Béla"
								className="border-b border-black focus:outline-none"
								type="text"
								value={donation.firstname}
								onChange={(e) =>
									setDonation({ ...donation, firstname: e.target.value })
								}
							/>
						</div>
					</div>
					<div className="flex flex-col md:flex-row gap-1 gap-y-8 items-center">
						<div>
							<span>Email cím*</span>
							<input
								required
								placeholder="pelda@gmail.com"
								className="border-b border-black focus:outline-none"
								type="email"
								value={donation.emailAddress}
								onChange={(e) =>
									setDonation({
										...donation,
										emailAddress: e.target.value,
									})
								}
							/>
						</div>
						<div>
							<span>Telefonszám*</span>
							<input
								required
								placeholder="36 30 000 0000"
								className="border-b border-black focus:outline-none"
								type="tel"
								value={donation.phoneNumber}
								onChange={(e) =>
									setDonation({
										...donation,
										phoneNumber: e.target.value,
									})
								}
							/>
						</div>
					</div>
					<div>
						<span>Megjegyzés</span>
						<input
							className="border-b border-black focus:outline-none"
							type="text"
							value={donation.comment}
							onChange={(e) =>
								setDonation({ ...donation, comment: e.target.value })
							}
						/>
					</div>
				</div>
				<div className="flex flex-row justify-center items-center my-8">
					<button
						type="submit"
						className="py-2 px-4 md:w-1/2 text-2xl text-white bg-black rounded-3xl"
					>
						támogatom
					</button>
				</div>
				<div className="px-4">
					<ul className="list-disc">
						<li>A (*)Csillaggal jelölt mezők kitöltése kötelező</li>
						<li>
							Az alábbi fizetés gomb megnyomásával elfogadom az általános
							szerződési feltételeket
						</li>
						<li>
							A Barionban beállított rendszeres támogatás összegét havonta vonja
							majd le a szolgáltató a számlájáról.
						</li>
						<li>Az egyszeri minimális támogatás értéke 1000 Ft</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
