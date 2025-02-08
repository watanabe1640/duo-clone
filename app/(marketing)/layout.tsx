import React from "react";
import Header from "./Header";
import Footer from "./Fotter";

type Props = {
	children: React.ReactNode;
};

export default function MarketingLayout({children}: Props) {
	return (
		<div className="min-h-screen flex flex-col">
			<Header />
			<main className="flex-1 flex flex-col justify-center items-center">
				{children}
			</main>
			<Footer />
		</div>
	);
}