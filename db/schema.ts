import { relations } from "drizzle-orm";;
import { integer, pgTable, pgEnum, serial, text, boolean } from "drizzle-orm/pg-core";

export const courses = pgTable("courses", {
	id: serial("id").primaryKey(),
	title: text("title").notNull(),
	imageSrc: text("imageSrc").notNull(),
});

export const units = pgTable("units", {
	id: serial("id").primaryKey(),
	title: text("title").notNull(),
	description: text("description").notNull(),
	courseId: integer("course_id").references(() => courses.id, {onDelete: "cascade"}).notNull(),
	order: integer("order").notNull(),
});

export const challengesEnum = pgEnum("type", ["SELECT", "ASSIST"]);

export const challenges = pgTable("challenges", {
	id: serial("id").primaryKey(),
	lessonsId: integer("lessonsId").references(() => lessons.id, {onDelete: "cascade"}).notNull(),
	type: challengesEnum("type").notNull(),
	question: text("question").notNull(),
	order: integer("order").notNull(),
});

export const challengeOptions = pgTable("challenges_options", {
	id: serial("id").primaryKey(),
	challengeId: integer("lessonsId").references(() => challenges.id, {onDelete: "cascade"}).notNull(),
	text: text("text").notNull(),
	correct: boolean("correct").notNull(),
	imageSrc: text("image_src"),
	audioSrc: text("audio_src"),
});

export const challengeProgress = pgTable("challenge_progress", {
	id: serial("id").primaryKey(),
	userId: text("userId").notNull(), // todo 壊れないようにする必要がある
	challengeId: integer("lessonsId").references(() => challenges.id, {onDelete: "cascade"}).notNull(),
	completed: boolean("completed").notNull().default(false),
});

export const lessons = pgTable("lessons", {
	id: serial("id").primaryKey(),
	title: text("title").notNull(),
	unitId: integer("unitId").references(() => units.id, {onDelete: "cascade"}).notNull(),
	order: integer("order").notNull(),
});

export const userProgress = pgTable("user_progress", {
	userId: text("user_id").primaryKey(),
	userName: text("user_name").notNull(),
	userImageSrc: text("user_image_src").notNull().default("/images/dino.svg"),
	activeCourseId: integer("active_course_id").references(() => courses.id, {onDelete: "cascade"}),
	hearts: integer("hearts").notNull().default(5),
	points: integer("points").notNull().default(0),
})

// ここからはリレーションの設定

export const lessonsRelations = relations( lessons, ({ one, many}) => ({
	unit: one(units, {
		fields: [lessons.unitId],
		references: [units.id]
	}),
	challenges: many(challenges)
}))

export const challengesRelations = relations( challengeOptions, ({ one, many}) => ({
	challenge: one(challenges, {
		fields: [challengeOptions.challengeId],
		references: [challenges.id]
	}),
	challengeOptions: many(challengeOptions),
	challengeProgress: many(challengeOptions),
}))

export const challengeProgressRelations = relations( challengeProgress, ({ one }) => ({
	challenge: one(challenges, {
		fields: [challengeProgress.challengeId],
		references: [challenges.id]
	}),
}))

export const challengeOptionsRelations = relations( challenges, ({ one }) => ({
	lessons: one(lessons, {
		fields: [challenges.lessonsId],
		references: [lessons.id]
	})
}))

export const unitsRelations = relations(units, ({ many, one }) => ({
	courses: one(courses,{
		fields: [units.courseId],
		references: [courses.id]
	}),
	lessons: many(lessons)
}))

export const coursesRelations = relations(courses, ({ many }) => ({
	userProgress: many(userProgress),
	units: many(units)
}));


export const userProgressRelations = relations(userProgress,  ({ one }) => ({
	activeCourse: one(courses, {
		fields: [userProgress.activeCourseId],
		references: [courses.id],
	})
}))