import { StickyWrapper } from "@/components/sticky-wrapper";
import { FeedWrapper } from "@/components/feed-wrapper";
import { UserProgress } from "@/components/user-progress";
import {Header} from "@/app/(main)/learn/header"
import { getUserProgress } from "@/db/queries";
import { redirect } from "next/navigation";

export default async function LearnPage() {
	const userProgressPromise = getUserProgress();

	const [ userProgress ] = await Promise.all([
		userProgressPromise
	]);

	if(!userProgress || !userProgress.activeCourse){
		redirect("/courses");
	}
	return (
		<>
			<div className="flex flex-row-reverse gap-[48px] px-6">
				<StickyWrapper>
					<UserProgress
						activeCourse={{ title: "Japanese", imageSrc:"/images/JP.svg" }}
						hearts={5}
						points={100}
						hasActiveSubscription={true}
					>

					</UserProgress>
				</StickyWrapper>
				<FeedWrapper>
					<Header title="Japanese"/>
				</FeedWrapper>
			</div>
		</>
	);
}