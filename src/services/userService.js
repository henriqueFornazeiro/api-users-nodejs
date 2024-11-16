import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createUser = async (userData) => {
    return prisma.user.create({ data: userData });
};

export const getUsers = async (filters = {}) => {
    return prisma.user.findMany({ where: filters });
};

export const updateUser = async (id, userData) => {
    return prisma.user.update({ where: { id }, data: userData });
};

export const deleteUser = async (id) => {
    return prisma.user.delete({ where: { id } });
};
