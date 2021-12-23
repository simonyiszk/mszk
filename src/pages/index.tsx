import { MemberCard } from "@/components/members/MemberCard";

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
		</div>
	);
}
