import { getCourses } from "@/db/queries";
import { List } from "./list";
export default async function CoursesPage() {
	const courses = await getCourses();
	return (
		<>
			<div className="h-full max-w-[912px] mx-auto px-3">
				<h1 className="text-2xl font-bold text-neutral-700">
					<List 
						activeCourseId={1}
						courses={courses}
					/>
				</h1>
			</div>
		</>
	);
};