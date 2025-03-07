"use server"
import { auth, currentUser } from "@clerk/nextjs/server";
import { getCourseById, getUserProgress } from "@/db/queries";
import { userProgress } from "@/db/schema";
import db from "@/db/drizzle";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function upsertUserProgress(courseId: number) {
	const { userId } = await auth();
	const user = await currentUser();

	if(!userId || !user){
		throw new Error("Unauthorized");
	}
	
	const course = await getCourseById(courseId);
	
	if(!course){
		throw new Error("Course not found")
	}
	// レッスンとユニットを以下でやりたい
	
	const existingUserProgress = await getUserProgress();

	if(existingUserProgress) {
		await db.update(userProgress).set({
			activeCourseId: courseId,
			userName: user.firstName || "User",
			userImageSrc:user.imageUrl || "/images/dino.svg",
		})
		revalidatePath("/courses");
		revalidatePath("/learn");
		redirect("/learn");
	}
	await db.insert(userProgress).values({
		userId,
		activeCourseId:courseId,
		userName:user.firstName || "User",
		userImageSrc:user.imageUrl || "/images/dino.svg",
	})

	revalidatePath("/courses");
	revalidatePath("/learn");
	redirect("/learn");
}