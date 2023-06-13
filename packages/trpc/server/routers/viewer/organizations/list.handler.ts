import type { PrismaClient } from "@calcom/prisma/client";
import type { TrpcSessionUser } from "@calcom/trpc/server/trpc";

type ListHandlerInput = {
  ctx: {
    user: NonNullable<TrpcSessionUser>;
    prisma: PrismaClient;
  };
};

// This functionality is essentially the same as the teams/list.handler.ts but it's easier for SOC to have it in a separate file.
export const listHandler = async ({ ctx }: ListHandlerInput) => {
  if (!ctx.user.organization?.id) {
    return null;
  }

  const membership = await ctx.prisma.membership.findFirst({
    where: {
      userId: ctx.user.id,
      team: {
        id: ctx.user.organization.id,
      },
    },
    include: {
      team: true,
    },
  });

  return {
    user: {
      role: membership?.role,
      accepted: membership?.accepted,
    },
    ...membership?.team,
  };
};