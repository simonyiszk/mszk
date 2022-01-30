import clsx from "clsx";
import { useState } from "react";

import { BankInfo } from "@/components/donatepage/BankInfo";
import {
	PaymentModeSwitch,
	PaymentModeType,
} from "@/components/donatepage/PaymentModeSwitch";
import { PersonDetailsForm } from "@/components/donatepage/PersonDetailsForm";
import { InnerLayout } from "@/components/layouts/InnerLayout";

export default function DonatePage() {
	const [paymentMode, setPaymentMode] = useState<PaymentModeType>("card");
	return (
		<InnerLayout>
			<div>
				<div className="p-8 my-16 mx-auto w-full xl:w-1/2 rounded-2xl md:shadow-mszk-sponsor">
					<h1 className="mb-16 text-5xl font-bold text-center">
						Támogass minket!
					</h1>
					<PaymentModeSwitch
						paymentMode={paymentMode}
						setPaymentMode={setPaymentMode}
					/>
					{paymentMode === "card" && <PersonDetailsForm />}
					{paymentMode === "bank" && (
						<div>
							<h2 className="text-2xl font-bold text-center">Átutalással</h2>
							<BankInfo />
						</div>
					)}
				</div>
			</div>
		</InnerLayout>
	);
}
