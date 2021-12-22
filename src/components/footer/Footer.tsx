import { FooterSection } from "./FooterSection";

export function Footer() {
	return (
		<div className="w-full bg-gray-400">
			<footer className="flex flex-col justify-center py-8 mx-auto w-full max-w-7xl">
				<div className="flex flex-row gap-16 justify-center items-center w-full">
					<FooterSection title="Elérhetőségek">
						<p>1126 Budapest, Tartsay Vilmos utca 20. II. em. 1.a.</p>
						<p>Bankszámlaszám: K&H 10400164-01600249-00000000</p>
						<p>Adószám: 19020824-1-43</p>
						<p className="my-2 text-left">
							BME Management Szakkollégium {new Date().getFullYear()}
						</p>
					</FooterSection>
					<FooterSection title="Dokumentumok">
						{/* TODO data from cms, https://github.com/simonyiszk/mszk/issues/12 */}
						<ul>
							<li>Alapszabály Szervezeti és Működési</li>
							<li>2018 Adó 1% felhasználás</li>
							<li>2016 NTP SZKOLL beszámoló</li>
						</ul>
					</FooterSection>
				</div>
			</footer>
		</div>
	);
}
