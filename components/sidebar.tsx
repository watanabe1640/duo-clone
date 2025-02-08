import { cn } from "@/lib/utils";
import Image from "next/image";

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
			</div>
		</>
	);
}