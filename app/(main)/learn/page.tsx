import { StickyWrapper } from "@/components/sticky-wrapper";
import { FeedWrapper } from "@/components/feed-wrapper";
import { UserProgress } from "@/components/user-progress";
import {Header} from "@/app/(main)/learn/header"

export default function LearnPage() {
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
					<Header title="title"/>
				</FeedWrapper>
			</div>
		</>
	);
}