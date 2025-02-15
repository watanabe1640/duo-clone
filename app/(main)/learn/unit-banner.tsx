import Link from "next/link";
import { Button } from "@/components/ui/button";
import { NotebookText } from "lucide-react";

type Props = {
	title:string;
	description:string;
}

export function UnitBanner({title,description}:Props){
	return(
		<div className="w-full bg-green-500 rounded-xl p-5 text-white flex items-center justify-between">
			<div className="space-y-2.5">
				<h1 className="text-2xl font-bold">{title}</h1>
				<p className="text-lg">{description}</p>
			</div>
			<Link href="/lesson">
				<Button className="hidden xl:flex border-r-2 border-b-4 active:border-b-2">
					<NotebookText />
					Continue
				</Button>
			</Link>
		</div>
	);
}