import { Member } from "../../../generated/prisma";
import prisma from "../../../shared/prisma";

const createMember = async (data: Member) => {
  const r = await prisma.member.create({
    data,
  });

  return r;
};

const readAllBooks = async () => {
  const r = await prisma.book.findMany();

  return r;
};
const readAllMembers = () => {};
const readMemberById = () => {};
const updateMember = () => {};
const deleteMember = () => {};

export const memberService = {
  createMember,
  readAllMembers,
  readMemberById,
  updateMember,
  deleteMember,
};
