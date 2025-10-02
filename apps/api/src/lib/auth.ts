import { createAuth } from "@repo/auth/server";
import { prisma } from "./db.js";

export const auth = createAuth(prisma, "postgresql");
