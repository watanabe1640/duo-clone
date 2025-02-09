"use client";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

type Props = {
	label: string;
	iconSrc: string;
	href: string;
};

export function SidebarItem(
	{label, iconSrc, href}: Props
) {
	const pathName = usePathname();
	const isActive = pathName === href;
	return (
		<>
			<Button
				variant={isActive ? "sidebarOutline" : "sidebar"}
				className="justify-start h-[52px]"
				asChild
			>
				<Link href={href}>
					<Image
						src={iconSrc}
						alt={label}
						width={32}
						height={32}
					/>
					{label}
				</Link>
			</Button>
		</>
	);
}