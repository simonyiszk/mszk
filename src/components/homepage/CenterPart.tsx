import { IconBubble } from "./IconBubble";

export function CenterPart() {
	return (
		<div className="overflow-hidden relative">
			<div className="flex flex-row gap-16 justify-center mx-auto">
				<IconBubble icon="heart" />
				<IconBubble icon="settings" />
				<IconBubble icon="chartUp" classnames="bg-mszk-blue" />
			</div>
			{/* https://dev.to/afozbek/how-to-rotate-background-image-35mi */}
			<div
				id="tilted-img"
				className="flex overflow-hidden relative flex-col justify-center h-96 text-white"
			>
				<div className="py-4" />
				<div className="mx-auto max-w-3xl">
					<h1 className="text-5xl text-center">Szakmaiság</h1>
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
