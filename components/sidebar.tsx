import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { SidebarItem } from "./sidebar-itmes";
import { ClerkLoading, ClerkLoaded, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";

type Props = {
	className?: string;
}

export default function Sidebar({className}: Props) {
	return (
		<>
			<div className={cn(
				"flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
				className,
				)}>
				<Link href="/learn">
					<div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
						<Image
							src="/logo.png"
							alt="Logo"
							width={40}
							height={40}
						/>
						<h1 className='text-green-600 font-extrabold text-xl tracking-tight'>
							Duo-Clone
						</h1>
					</div>
				</Link>
				<div className="flex flex-col gap-y-2 flex-1">
					<SidebarItem
						label="Learn"
						href="/learn"
						iconSrc="/logo.png"
					/>
					<SidebarItem
						label="ranking"
						href="/ranking"
						iconSrc="/logo.png"
					/>
					<SidebarItem
						label="quests"
						href="/quests"
						iconSrc="/logo.png"
					/>
					<SidebarItem
						label="shop"
						href="/shop"
						iconSrc="/logo.png"
					/>
				</div>
				<div className="p-4">
					<ClerkLoading>
						<Loader className="h-5 w-5 text-muted-foreground animate-spin"/>
					</ClerkLoading>
					<ClerkLoaded>
						<UserButton afterSwitchSessionUrl="/" />
					</ClerkLoaded>
				</div>
			</div>
		</>
	);
}