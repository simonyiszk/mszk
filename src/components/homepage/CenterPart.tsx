import { IconBubble } from "./IconBubble";

export function CenterPart() {
	return (
		<div className="my-64">
			<h1 className="my-16 text-5xl font-bold text-center text-mszk-blue uppercase">
				Alappilléreink
			</h1>
			<div className="flex flex-row gap-16 justify-center mx-auto">
				<IconBubble icon="heart" className="bg-white" />
				<IconBubble icon="settings" className="bg-white" />
				<IconBubble icon="chartUp" className="bg-mszk-blue" />
			</div>
			<div className="flex flex-col justify-center -mt-16 h-96 text-white bg-black">
				<div className="mx-auto max-w-3xl">
					<h1 className="my-8 text-5xl text-center">Szakmaiság</h1>
					<p className="text-2xl text-center">
						Mindig jut időnk arra, hogy ellátogassunk egy-egy kiállításra,
						színdarabra, csapjunk egy kertipartit. A szervezet mozgatórugója a
						színes közösségi élet: bulik, sportolás, éjszakába nyúló
						beszélgetések és persze a táborok, ahol kikapcsolódhatunk és jobban
						megismerhetjük egymást...
					</p>
				</div>
			</div>
		</div>
	);
}
