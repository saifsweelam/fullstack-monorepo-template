import { betterAuth } from "better-auth";
import { type PrismaConfig, prismaAdapter } from "better-auth/adapters/prisma";

export { fromNodeHeaders, toNodeHandler } from "better-auth/node";

export const createAuth = (
    prisma: object,
    provider: PrismaConfig["provider"],
) => {
    return betterAuth({
        database: prismaAdapter(prisma, { provider }),
        emailAndPassword: {
            enabled: true,
        },
        socialProviders: {
            github: {
                clientId: process.env.GITHUB_CLIENT_ID as string,
                clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
            },
        },
    } as const);
};
