import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import * as schema from "@/db/schema";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql, { schema });

const main = async () => {
	try {
		console.log("seeding database");

		await db.delete(schema.courses);
		await db.delete(schema.userProgress);
		await db.delete(schema.units);
		await db.delete(schema.lessons);
		await db.delete(schema.challengeOptions);
		await db.delete(schema.challengeProgress);
		await db.delete(schema.challenges);

		await db.insert(schema.courses).values([
			{
				id: 1,
				title: "Japanese",
				imageSrc: "/images/JP.svg",
			},
			{
				id: 2,
				title: "Spanish",
				imageSrc: "/images/AR.svg",
			},
			{
				id: 3,
				title: "English",
				imageSrc: "/images/GB.svg",
			}
		]);

		await db.insert(schema.units).values([
			{
				id: 1,
				courseId: 1,
				title: "unit 1",
				description: "Learn the basics of Japanese",
				order: 1,

			}
		]);

		await db.insert(schema.lessons).values([
			{
				id: 1,
				unitId: 1, //"Learn the basics of Japanese"
				title: "Nouns",
				order: 1,
			},
			{
				id: 2,
				unitId: 1, //"Learn the basics of Japanese"
				title: "Verbs",
				order: 2,
			},
			{
				id: 3,
				unitId: 1, //"Learn the basics of Japanese"
				title: "Verbs",
				order: 3,
			},
			{
				id: 4,
				unitId: 1, //"Learn the basics of Japanese"
				title: "Verbs",
				order: 4,
			},
			{
				id: 5,
				unitId: 1, //"Learn the basics of Japanese"
				title: "Verbs",
				order: 5,
			},
		]);
		
		await db.insert(schema.challenges).values([
			{
				id: 1,
				lessonsId: 1, //Nouns
				type: "SELECT",
				question: "Which one of these is the 'りんご'?",
				order: 1,
			},
			{
				id: 2,
				lessonsId: 1, //Nouns
				type: "SELECT",
				question: "Which one of these is the 'さかな'?",
				order: 2,
			},
			{
				id: 3,
				lessonsId: 2, //Verbs
				type: "SELECT",
				question: "Which of these is a 'はしる'?",
				order: 1,
			},
			{
				id: 4,
				lessonsId: 2, //Verbs
				type: "SELECT",
				question: "Which of these is a 'はねる'?",
				order: 2,
			}
		]);

		await db.insert(schema.challengeOptions).values([
			{
				id: 1,
				challengeId: 1,
				text: "りんご",
				correct: true,
			},
			{
				id: 2,
				challengeId: 1,
				text: "ばなな",
				correct: false,
			},
			{
				id: 3,
				challengeId: 2,
				text: "さかな",
				correct: true,
			},
			{
				id: 4,
				challengeId: 2,
				text: "くるま",
				correct: false,
			},
			{
				id: 5,
				challengeId: 3,
				text: "run",
				correct: true,
			},
			{
				id: 6,
				challengeId: 3,
				text: "push",
				correct: false,
			},
			{
				id: 7,
				challengeId: 4,
				text: "jump",
				correct: true,
			},
			{
				id: 8,
				challengeId: 4,
				text: "sit",
				correct: false,
			}
		])

		console.log("seeding finished");
	}catch(error){
		console.error(error);
		throw new Error("Failed to seed database");
	}
}
main(); 