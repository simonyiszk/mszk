import { MemberCard } from "@/components/members/MemberCard";
import { SponsorCard } from "@/components/sponsors/SponsorCard";

export default function Page() {
	return (
		<div>
			<p>asd</p>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				<MemberCard
					image="http://placekitten.com/200/300"
					name="Kiss József"
					position="elnök"
				/>
				<MemberCard
					image="http://placekitten.com/200/300"
					name="Kiss József"
					position="elnök"
				/>
				<MemberCard
					image="http://placekitten.com/200/300"
					name="Kiss József"
					position="elnök"
				/>
			</div>
			<div className="grid md:grid-cols-3 gap-4">
				<SponsorCard
					image="http://placekitten.com/200/300"
					name="Univer"
					description="asd asdasd asd"
				/>
				<SponsorCard
					image="http://placekitten.com/200/300"
					name="Univer"
					description="asd asdasd asd"
				/>
				<SponsorCard
					image="http://placekitten.com/200/300"
					name="Univer"
					description="asd asdasd asd"
				/>
			</div>
		</div>
	);
}
