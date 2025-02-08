import MobileSidebar from "@/components/mobile-sidebar";

export default function MobileHeader() {
	return (
		<nav className="lg:hidden bg-green-500 h-[50px] flex px-6 items-center border-b fixed top-0 w-full z-50">
			<MobileSidebar/>
		</nav>
	);
}