import { Member } from "../../../generated/prisma";
import AppError from "../../../helper/AppError";
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

const updateMember = async (memberId: string, data: Member) => {
  const isExits = await prisma.member.findUnique({
    where: {
      memberId,
    },
  });

  if (!isExits) {
    throw new AppError(404, "Member doesn't exits");
  }

  const r = await prisma.member.update({
    where: {
      memberId,
    },
    data,
  });

  return r;
};
const deleteMember = async (memberId: string) => {
  const isExits = await prisma.member.findUnique({
    where: {
      memberId,
    },
  });

  if (!isExits) {
    throw new AppError(404, "Member doesn't exits");
  }

  const r = await prisma.member.delete({
    where: {
      memberId,
    },
  });

  return r;
};

export const memberService = {
  createMember,
  readAllMembers,
  readMemberById,
  updateMember,
  deleteMember,
};
