import { Loader } from "lucide-react";

export default function Loading() {
	return (
		<div className="h-full w-full flex items-center justify-center">
			<Loader className="j-6 w-6 text-muted-foreground animate-spin"/>
		</div>
	);
}