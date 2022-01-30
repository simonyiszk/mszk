import { MemberCard, MemberCardType } from "../members/MemberCard";

export type MembersPartProps = {
	members: MemberCardType[];
};

export function MembersPart({ members }: MembersPartProps) {
	return (
		<div className="my-16">
			<h1 className="my-16 text-4xl lg:text-5xl font-bold text-center text-mszk-blue uppercase">
				Vezetőségünk
			</h1>
			<div className="flex flex-row justify-center items-center my-8">
				{members
					.filter((e) => e.order === 1)
					.map((e) => (
						<MemberCard {...e} />
					))}
			</div>
			<div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-16">
				{members
					.filter((e) => e.order !== 1)
					.sort((a, b) => a.order - b.order)
					.map((e) => (
						<MemberCard key={`${e.name} ${e.position} ${e.order}`} {...e} />
					))}
			</div>
		</div>
	);
}
