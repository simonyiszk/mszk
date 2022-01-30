import Link from "next/link";

import { IconBubble } from "./IconBubble";

export function CenterPart() {
	return (
		<div className="my-64">
			<h1 className="my-16 text-4xl lg:text-5xl font-bold text-center text-mszk-blue uppercase">
				Alappilléreink
			</h1>
			<div className="flex relative z-10 flex-row gap-16 justify-center mx-auto">
				<IconBubble icon="heart" className="bg-white" />
				<IconBubble icon="settings" className="bg-white" />
				<IconBubble icon="chartUp" className="bg-mszk-blue" />
			</div>
			<div className="flex flex-col justify-center lg:py-32 lg:-mt-36 xl:-mt-48 w-full text-white bg-cover bg-professionalism-img lg:-skew-y-2">
				<div className="mx-auto lg:mt-32 max-w-3xl lg:rotate-2">
					<h1 className="my-8 text-4xl text-center">Szakmaiság</h1>
					<p className="text-xl text-center">
						Mindig jut időnk arra, hogy ellátogassunk egy-egy kiállításra,
						színdarabra, csapjunk egy kerthipartit. A szervezet mozgatórugója a
						színes közösségi élet: bulik, sportolás, éjszakába nyúló
						beszélgetések és persze a táborok, ahol kikapcsolódhatunk és jobban
						megismerhetjük egymást...
					</p>
					<div className="flex flex-row justify-center mt-8">
						<Link href="/rolunk/alappillereink">
							<a
								title="Alappilléreink"
								aria-label="Alappilléreink megtekintése"
							>
								<div className="flex flex-row gap-2 text-2xl bg-mszk-blue rounded-xl focus:ring-1 cursor-pointer">
									<div className="py-4 pr-4 pl-8">
										<span>Olvass tovább!</span>
									</div>
									<span className="flex justify-center items-center w-16 h-auto text-5xl font-bold bg-gray-800 rounded-xl">
										+
									</span>
								</div>
							</a>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
