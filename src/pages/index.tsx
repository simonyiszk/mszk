import { CenterPart } from "@/components/homepage/CenterPart";
import { IndexUpper } from "@/components/introduction/IndexUpper";
import { InnerLayout } from "@/components/layouts/InnerLayout";
import { MemberCard } from "@/components/members/MemberCard";
import { SponsorCard } from "@/components/sponsors/SponsorCard";
import { OurValuesCard } from "@/components/values/OurValuesCard";

export default function Page() {
	return (
		<>
			<IndexUpper />
			<InnerLayout>
				<p>asd</p>
				<CenterPart />
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
				<div className="flex flex-col gap-8 lg:gap-32">
					<div className="flex flex-col lg:flex-row gap-8 justify-around items-center ">
						<OurValuesCard
							icon="levels"
							number={1}
							title="Aktivitás"
							description="Az MSZK számára érték a kezdeményezőkészség, az új ötletekért, az egyéni..."
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
					<div className="flex flex-col gap-8 lg:gap-32">
						<div className="flex flex-col lg:flex-row gap-8 justify-around items-center ">
							<OurValuesCard
								icon="levels"
								number={1}
								title="Aktivitás"
								description="Az MSZK számára érték a kezdeményezőkészség, az új ötletekért, az egyéni..."
							/>
							<OurValuesCard
								icon="idea"
								number={2}
								title="Csapatszellem"
								description="Az MSZK számára érték a kezdeményezőkészség, az új ötletekért, az egyéni..."
							/>
							<OurValuesCard
								icon="thumbsup"
								number={3}
								title="Hitelesség"
								description="Az MSZK számára érték a kezdeményezőkészség, az új ötletekért, az egyéni..."
							/>
						</div>
						<div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
							<OurValuesCard
								icon="idea"
								number={4}
								title="Csapatszellem"
								description="Az MSZK számára érték a kezdeményezőkészség, az új ötletekért, az egyéni..."
							/>
							<OurValuesCard
								icon="thumbsup"
								number={5}
								title="Hitelesség"
								description="Az MSZK számára érték a kezdeményezőkészség, az új ötletekért, az egyéni..."
							/>
						</div>
					</div>
				</div>
			</InnerLayout>
		</>
	);
}
