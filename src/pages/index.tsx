import { MemberCard } from "@/components/members/MemberCard";
import { SponsorCard } from "@/components/sponsors/SponsorCard";
import {
	OurValuesCard,
	OurValuesIconType,
} from "@/components/values/OurValuesCard";

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
				<div className="flex flex-col gap-8 lg:gap-32">
					<div className="flex flex-col lg:flex-row gap-8 justify-between items-center">
						<OurValuesCard
							icon={OurValuesIconType.LEVELS}
							number={1}
							title="Aktivitás"
							description="Az MSZK számára érték a kezdeményezőkészség, az új ötletekért, az egyéni..."
						/>
						<OurValuesCard
							icon={OurValuesIconType.IDEA}
							number={2}
							title="Csapatszellem"
							description="Az MSZK számára érték a kezdeményezőkészség, az új ötletekért, az egyéni..."
						/>
						<OurValuesCard
							icon={OurValuesIconType.THUMBSUP}
							number={3}
							title="Hitelesség"
							description="Az MSZK számára érték a kezdeményezőkészség, az új ötletekért, az egyéni..."
						/>
					</div>
					<div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
						<OurValuesCard
							icon={OurValuesIconType.IDEA}
							number={4}
							title="Csapatszellem"
							description="Az MSZK számára érték a kezdeményezőkészség, az új ötletekért, az egyéni..."
						/>
						<OurValuesCard
							icon={OurValuesIconType.THUMBSUP}
							number={5}
							title="Hitelesség"
							description="Az MSZK számára érték a kezdeményezőkészség, az új ötletekért, az egyéni..."
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
