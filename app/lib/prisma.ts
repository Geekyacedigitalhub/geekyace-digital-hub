import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

function createPrismaClient(): PrismaClient {
  return new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
  });
}

let prismaClient: PrismaClient | undefined;

function getPrismaClient(): PrismaClient {
  if (!prismaClient) {
    prismaClient = globalForPrisma.prisma ?? createPrismaClient();
    if (process.env.NODE_ENV !== "production") {
      globalForPrisma.prisma = prismaClient;
    }
  }
  return prismaClient;
}

// Proxy so importing `prisma` doesn't force engine initialization at build
// time (when the native engine binary is unavailable). Property accesses at
// request-time are forwarded to a real PrismaClient instance.
export const prisma = new Proxy({} as PrismaClient, {
  get(_target, prop, receiver) {
    return Reflect.get(getPrismaClient(), prop, receiver);
  },
  set(_target, prop, value, receiver) {
    return Reflect.set(getPrismaClient(), prop, value, receiver);
  },
  apply(_target, thisArg, argumentsList) {
    return Reflect.apply(getPrismaClient() as unknown as (...args: unknown[]) => unknown, thisArg, argumentsList);
  },
  construct(_target, argumentsList, newTarget) {
    return Reflect.construct(getPrismaClient() as unknown as new (...args: unknown[]) => unknown, argumentsList, newTarget);
  },
});
