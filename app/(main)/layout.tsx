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
			<main className="lg:pl-[256px]  h-full bg-white">
				<div className="bg-red-400 h-full pt-[50px] lg:pt-0">
					{children}
				</div>
			</main>
		</>
	);
}