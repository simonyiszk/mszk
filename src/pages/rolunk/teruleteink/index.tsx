import { OneField } from "@/components/fields/OneField";
import { InnerLayout } from "@/components/layouts/InnerLayout";

const mockdata = {
	description:
		"Szakmaiság, Gyakorlat, Közösség! A szakmai terület biztosítja az MSZK hármas alappillére közül az elsőt. Ez a csapat tervezi, szervezi és irányítja a képzési rendszerünk elemeit és tartja a kapcsolatot az előadókkal. Ezek finanszírozásáért együttműködik a Gazdasági területtel, valamint a mindenkori projektek kurzusainak minőségbiztosításért felel.",
	coverImg: "http://placekitten.com/g/200/300",
	title: "Szakmai Terület",
	personImg: "http://placekitten.com/g/200/300",
};

export default function FieldsPage() {
	return (
		<div>
			<div>
				<InnerLayout>
					<div className="my-16">
						<h1 className="mb-8 text-2xl lg:text-5xl font-light text-center uppercase">
							Területek az MSZK-ban
						</h1>
						<p className="lg:text-xl">
							Az MSZK 6 különböző területre épül – szakmai, gazdasági, PR,
							marketing, tehetséggondozás és operatív. Minden terület élén a
							területi vezetők állnak, akiknek a munkáját az elnök felügyeli, és
							a Vezetőség Operatív Támogatója segíti. Ők nyolcan alkotják az
							MSZK vezetőségét. A különböző területek más és más feladatot
							látnak el a szervezet életében, viszont minden egyes terület
							aktívan kiveszi a részét a projektek támogatásából. Az MSZK tagjai
							számára a területekre történő jelentkezések minden félév elején
							(Szeptemberben és februárban) történnek, míg a tagjelöltek a
							szakkollégiumba történő felvételt követő rövid integrációs
							folyamat után választanak területet (November eleje).
						</p>
					</div>
				</InnerLayout>
			</div>
			<OneField {...mockdata} />
			<OneField {...mockdata} />
			<OneField {...mockdata} />
		</div>
	);
}
