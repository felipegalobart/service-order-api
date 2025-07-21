

import { Request, Response } from "express";
import { AuthService } from "../services/AuthService";

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const result = await AuthService.login(email, password);
    if (!result) {
      return res.status(401).json({ error: "Invalid email or password" });
    }
    return res.json(result);
  } catch (error) {
    return res.status(500).json({ error: "Login failed", details: error });
  }
};