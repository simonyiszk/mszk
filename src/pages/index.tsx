import { CenterPart } from "@/components/homepage/CenterPart";
import { MembersPart } from "@/components/homepage/MembersPart";
import { OurValuesPart } from "@/components/homepage/OurValuesPart";
import { SponsorsPart } from "@/components/homepage/SponsorsPart";
import { IndexUpper } from "@/components/introduction/IndexUpper";
import { InnerLayout } from "@/components/layouts/InnerLayout";
import { members, sponsors } from "@/mock";

export default function Page() {
	return (
		<>
			<IndexUpper />
			<InnerLayout className="mb-64">
				<OurValuesPart />
				<CenterPart />
				<MembersPart members={members} />
				<SponsorsPart sponsors={sponsors} />
			</InnerLayout>
		</>
	);
}
