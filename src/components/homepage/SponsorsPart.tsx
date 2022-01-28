import { SponsorCard, SponsorCardProps } from "../sponsors/SponsorCard";

type SponsorsPartProps = {
	sponsors: SponsorCardProps[];
};

export function SponsorsPart({ sponsors }: SponsorsPartProps) {
	return (
		<div className="my-16">
			<h1 className="my-16 text-5xl font-bold text-center text-mszk-blue uppercase">
				Támogatóink
			</h1>
			<div className="grid md:grid-cols-3 gap-4">
				{sponsors.map((e) => (
					<SponsorCard key={e.name} {...e} />
				))}
			</div>
		</div>
	);
}
