import { Prisma, PrismaClient } from "@/generated/prisma";
import { withAccelerate } from '@prisma/extension-accelerate'

type clientType = keyof PrismaClient<Prisma.PrismaClientOptions, never | undefined>;


const prismaClientSingleton = () => {
    return new PrismaClient().$extends(withAccelerate())
}

declare const globalThis: {
    prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma

export class DataAccessClient {
    client = prisma;
}

const dataAccess = new DataAccessClient();
export default dataAccess;