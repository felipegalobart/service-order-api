

import { prisma } from '../libs/client';
import bcrypt from 'bcryptjs';

export class UserService {
  static async createUser({ name, email, password }: { name: string; email: string; password: string }) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
    const { password: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }

  static async getUsers() {
    return await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        status: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  static async getUserById(id: number) {
    const user = await prisma.user.findUnique({ where: { id } });
    if (!user) return null;
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }

  static async updateUser(id: number, data: { name?: string; email?: string; password?: string; status?: boolean }) {
    const updateData: any = { ...data };
    if (data.password) {
      updateData.password = await bcrypt.hash(data.password, 10);
    }
    const updatedUser = await prisma.user.update({
      where: { id },
      data: updateData,
    });
    const { password: _, ...userWithoutPassword } = updatedUser;
    return userWithoutPassword;
  }

  static async deleteUser(id: number) {
    await prisma.user.delete({ where: { id } });
  }
}