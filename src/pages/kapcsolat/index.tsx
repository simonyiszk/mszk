import clsx from "clsx";
import Image from "next/image";

import { InnerLayout } from "@/components/layouts/InnerLayout";

export default function ContactPage() {
	const phone = "36-1-463-1095";
	const address =
		"1111 Budapest, Műegyetem rakpart 3. (K épület) 3. emelet 84.";
	const fb = "https://www.facebook.com/MSZKofficial";
	return (
		<div className="mb-16">
			<div className="relative w-full">
				<div className="relative z-0 w-full h-72 bg-cover bg-contact-img" />
				{/* card */}
				<div className="flex absolute z-10 flex-col gap-4 p-8 -mt-16 bg-white rounded-lg shadow-lg">
					<div className="flex flex-col">
						<span className="text-sm text-mszk-blue uppercase">Címünk</span>
						<a
							target="_blank"
							rel="noopener noreferrer"
							className="text-lg font-bold cursor-pointer"
							href={`https://maps.google.com/?=${address}`}
						>
							{address}
						</a>
					</div>
					<div className="flex flex-col">
						<span className="text-sm text-mszk-blue uppercase">
							Telefonszámunk
						</span>
						<a
							href={`tel:${phone}`}
							className="text-lg font-bold cursor-pointer"
						>
							{phone}
						</a>
					</div>
					<div className="flex flex-col">
						<span className="text-sm text-mszk-blue uppercase">
							Facebook oldalunk
						</span>
						<a
							href={fb}
							target="_blank"
							className="text-lg font-bold cursor-pointer"
							rel="noreferrer"
						>
							{fb.replace("https://www.facebook.com/", "@")}
						</a>
					</div>
				</div>
			</div>

			<InnerLayout>
				<div className="mt-64">
					<div className="my-8">
						<h1 className="text-2xl font-light text-center uppercase">
							Miért érdemes velünk együttműködni?
						</h1>
						<p className={clsx(true && "my-8")}>
							Az EVK Szakkollégium a legjobb magyar business szakkollégiumként
							kiemelt kapcsolatot ápol a hazai üzleti szféra jeles
							képviselőivel. Fontos célunk, hogy vállalati együttműködéseink
							eredményeként értéket teremtsünk a partnereink számára és közben
							tagjaink tudását és üzleti jártasságát is fejlesszük.
						</p>
					</div>
					<div>
						<h1 className="my-4 text-2xl font-light text-center uppercase">
							Találkozzunk!
						</h1>
						<div className="relative h-64">
							<Image
								src="http://placekitten.com/g/200/300"
								layout="fill"
								objectFit="cover"
							/>
						</div>
						<p className="my-4">
							Ha személyesen beszélgetnél velünk, akkor a BME K épületében járva
							nyugodtan gyere be K384-es számú irodánkba! Viszont ha gyorsan
							üzennél nekünk, akkor ezt is megteheted akár Facebookon, akár
							emailben. Az MSZK minden vezetője és tagja elérhető személyesen a
							saját vezeteknev.keresztnev@mszk.bme.hu címén.
						</p>
					</div>
				</div>
			</InnerLayout>
		</div>
	);
}
