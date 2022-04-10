import clsx from "clsx";
import type { Dispatch, SetStateAction } from "react";
import { AiFillBank, AiFillCreditCard } from "react-icons/ai";

export type PaymentModeType = "card" | "bank";

type PaymentModeSwitchProps = {
	paymentMode: PaymentModeType;
	setPaymentMode: Dispatch<SetStateAction<PaymentModeType>>;
};

export function PaymentModeSwitch({
	paymentMode,
	setPaymentMode,
}: PaymentModeSwitchProps) {
	return (
		<div className="flex flex-row gap-8 justify-center items-center my-8 text-6xl">
			<button
				type="button"
				onClick={() => setPaymentMode("card")}
				className={clsx(
					paymentMode === "card" && "text-white bg-mszk-blue",
					"p-4 rounded-full shadow-lg",
				)}
			>
				<AiFillCreditCard />
			</button>
			<button
				type="button"
				onClick={() => setPaymentMode("bank")}
				className={clsx(
					"p-4 rounded-full shadow-lg",
					paymentMode === "bank" && "text-white bg-mszk-blue",
				)}
			>
				<AiFillBank />
			</button>
		</div>
	);
}
