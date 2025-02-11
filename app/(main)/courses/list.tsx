'use client'
import { courses, userProgress } from "@/db/schema"
import { Card } from "./card";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { upsertUserProgress } from "@/actions/user-progress";
import { toast } from "sonner";


type Props = {
	courses: typeof courses.$inferSelect[];
	activeCourseId?: typeof userProgress.$inferSelect.activeCourseId;
}

export function List({ courses, activeCourseId }: Props) {
	const router = useRouter();
	const [pending, startTransition] = useTransition();

	function onClick(id: number) {
		if(pending) return;

		if (id === activeCourseId) {
			return router.push("/learn");
		}
		startTransition(() => {
			upsertUserProgress(id)
				.catch(() => toast.error("Failed to update course"));
		})
	}

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
								disabled={pending}
								active={activeCourseId === course.id}
								onClick={(id) => onClick(id)}
							/>
						</div>
					);
				})}
			</div>
		</>
	);
};