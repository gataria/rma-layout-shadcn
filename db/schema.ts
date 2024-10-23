import {
    integer,
    pgTable,
    serial,
    text,
    timestamp
} from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

/* Tables */
export const usersTable = pgTable('users_table', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    email: text('email').notNull().unique(),
});

export const advisorsTable = pgTable('advisors_table', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
});

export const institutionsTable = pgTable('institutions_table', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
});

// Do we want to track the "unit" that an advisor belongs to, or the type of advisor they are?
// Some institutions may not have discrete "units" that advisors belong to --
// -- it's possible the person advising CS students also advises PoliSci in some smaller institutions.
export const advisorTypeTable = pgTable('advisor_type_table', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
});

/* Relations */
// Can advisors be part of multiple institutions? Some university systems are more tightly-knit (e.g., UofH System in TX, USA)
// One institution -> Many advisors
// IDEA: have institutions in subdomains? e.g., utsa.ratemyadvisor.com once the user picks their institution. Makes bookmarking easier.
// Then, institutions from other countries can avoid collisions by using [ccTLD].[initialism/short name].ratemyadvisor.com
// e.g., mex.unam.ratemyadvisor.com, cn.fudan.ratemyadvisor.com, etc.
export const institutionsRelations = relations(institutionsTable, ({ many }) => ({
    advisors: many(advisorsTable),
}));