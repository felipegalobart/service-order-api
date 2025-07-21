import { Request, Response } from 'express';
import { UserService } from '../services/UserService';
import { createUserSchema, updateUserSchema } from '../validations/userSchema';

export const createUser = async (req: Request, res: Response) => {
  try {
    const parsed = createUserSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: 'Validation error', issues: parsed.error.format() });
    }
    const user = await UserService.createUser(parsed.data);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar usuário', details: error });
  }
};

export const getUsers = async (_req: Request, res: Response) => {
  try {
    const users = await UserService.getUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar usuários' });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await UserService.getUserById(parseInt(req.params.id));
    if (!user) return res.status(404).json({ error: 'Usuário não encontrado' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar usuário' });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const parsed = updateUserSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: 'Validation error', issues: parsed.error.format() });
    }
    const user = await UserService.updateUser(parseInt(req.params.id), parsed.data);
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao atualizar usuário' });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    await UserService.deleteUser(parseInt(req.params.id));
    return res.sendStatus(204);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao deletar usuário' });
  }
};