import { Member } from "../../../generated";
import AppError from "../../../helper/AppError";
import prisma from "../../../shared/prisma";

/**
 * Member Service
 * Contains business logic for member management operations
 */

// Create a new member record in the database
const createMember = async (data: Member) => {
  const r = await prisma.member.create({
    data,
  });

  return r;
};

// Retrieve all members from the database
const readAllMembers = async () => {
  const r = await prisma.member.findMany();

  return r;
};

// Find a specific member by their ID
const readMemberById = async (memberId: string) => {
  const r = await prisma.member.findUnique({
    where: {
      memberId,
    },
  });

  return r;
};

// Update member information with validation
const updateMember = async (memberId: string, data: Member) => {
  // Check if member exists before updating
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

// Delete a member with existence validation
const deleteMember = async (memberId: string) => {
  // Verify member exists before deletion
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
