import React from "react";
import Sidebar from "@/components/sidebar";
import MobileHeader from "@/components/mobile-header";

type Props = {
	children: React.ReactNode;
};

export default function MainLayout({children}: Props) {
	return (
		<>
			<MobileHeader/>
			<Sidebar className="hidden lg:flex"/>
			<main className="lg:pl-[256px] pt-[50px] h-full lg:pt-0">
				<div className="h-full max-w-[1056px] mx-auto pt-6">
					{children}
				</div>
			</main>
		</>
	);
}