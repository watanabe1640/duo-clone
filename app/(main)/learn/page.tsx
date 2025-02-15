import { StickyWrapper } from "@/components/sticky-wrapper";
import { FeedWrapper } from "@/components/feed-wrapper";
import { UserProgress } from "@/components/user-progress";
import {Header} from "@/app/(main)/learn/header"
import { getUserProgress, getUnits } from "@/db/queries";
import { redirect } from "next/navigation";
import { Unit } from "./unit";

export default async function LearnPage() {
	const userProgressPromise = getUserProgress();
	const unitPromise = getUnits();

	const [
		userProgress, units
	] = await Promise.all([
		userProgressPromise,unitPromise
	]);

	if(!userProgress || !userProgress.activeCourse){
		redirect("/courses");
	}
	return (
		<>
			<div className="flex flex-row-reverse gap-[48px] px-6">
				<StickyWrapper>
					<UserProgress
						activeCourse={{ 
							id: userProgress.activeCourse.id,
							title: userProgress.activeCourse.title, imageSrc:userProgress.activeCourse.imageSrc 
						}}
						hearts={userProgress.hearts}
						points={userProgress.points}
						hasActiveSubscription={false}
					>
					</UserProgress>
				</StickyWrapper>
				<FeedWrapper>
					<Header title={userProgress.activeCourse.title}/>
					{units.map((unit) => (
						<div key={unit.id} className="mb-10">
							<Unit 
								id={unit.id}
								order={unit.order}
								title={unit.title}
								description={unit.description}
								lessons={unit.lessons}
								activeLesson={undefined}
								activeLessonPercentage={0}
							/>
						</div>
					))}
				</FeedWrapper>
			</div>
		</>
	);
}