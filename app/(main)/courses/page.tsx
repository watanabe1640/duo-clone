import { getCourses, getUserProgress } from "@/db/queries";
import { List } from "./list";
export default async function CoursesPage() {
	const coursesPromise = getCourses();
	const userProgressPromise = getUserProgress();

	const [ courses, userProgress ] = await Promise.all([
		coursesPromise,
		userProgressPromise
	])

	return (
		<>
			<div className="h-full max-w-[912px] mx-auto px-3">
				<h1 className="text-2xl font-bold text-neutral-700">
					<List 
						activeCourseId={userProgress?.activeCourseId}
						courses={courses}
					/>
				</h1>
			</div>
		</>
	);
};