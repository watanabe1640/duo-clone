import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Footer() {
	return (
		<footer className="h-20 w-full border-t-2 border-slate-200 p-2 hidden lg:block">
			<div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
				<Button>
					<Image
						src="/images/AR.svg"
						alt="AR"
						height={30}
						width={30}
						className="mr-4 rounded-md"
					 />
					 Argentina
				</Button>
				<Button>
					<Image
						src="/images/AR.svg"
						alt="AR"
						height={30}
						width={30}
						className="mr-4 rounded-md"
					 />
					 Argentina
				</Button>
				<Button>
					<Image
						src="/images/AR.svg"
						alt="AR"
						height={30}
						width={30}
						className="mr-4 rounded-md"
					 />
					 Argentina
				</Button>
			</div>
		</footer>
	);
}