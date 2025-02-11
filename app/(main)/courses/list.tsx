'use client'
import { courses, userProgress } from "@/db/schema"
import { Card } from "./card";


type Props = {
	courses: typeof courses.$inferSelect[];
	activeCourseId?: typeof userProgress.$inferSelect.activeCourseId;
}

export function List({ courses, activeCourseId }: Props) {
	return (
		<>
			<div className="pt-6 grid grid-cols-2 lg:grid-cols-[repeat(auto-fill, minmax(210px,1fr))] gap-4">
				{courses.map((course) => {
					return (
						<div key={course.id}>
							<Card
								title={course.title}
								id={course.id}
								imageSrc={course.imageSrc}
								disabled={false}
								active={activeCourseId === course.id}
								onClick={(id) => console.log(id)}
							/>
						</div>
					);
				})}
			</div>
		</>
	);
};