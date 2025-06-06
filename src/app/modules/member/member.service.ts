import { Member } from "../../../generated/prisma";
import prisma from "../../../shared/prisma";

const createMember = async (data: Member) => {
  console.log(data);
  const r = await prisma.member.create({
    data,
  });

  return r;
};

const readAllMembers = async () => {
  const r = await prisma.member.findMany();

  return r;
};

const readMemberById = async (memberId: string) => {
  const r = await prisma.member.findUnique({
    where: {
      memberId,
    },
  });

  return r;
};

const updateMember = async () => {};
const deleteMember = async () => {};

export const memberService = {
  createMember,
  readAllMembers,
  readMemberById,
  updateMember,
  deleteMember,
};
