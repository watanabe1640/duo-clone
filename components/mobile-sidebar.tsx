import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "./ui/sheet"
import { Menu } from "lucide-react";
import Sidebar from "./sidebar";

export default function MobileSidebar() {
	return (
		<>
			<Sheet>
				<SheetTitle className="text-white"></SheetTitle>
				<SheetTrigger>
					<Menu className="text-white"/>
				</SheetTrigger>
				<SheetContent className="p-0 z-[100]" side="left" >
					<Sidebar />
				</SheetContent>
			</Sheet>
		</>
	);
}