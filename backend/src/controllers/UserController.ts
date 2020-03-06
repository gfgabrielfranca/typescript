import { Request, Response } from "express";
import EmailService from "../services/EmailService";

const users = [
  {
    name: "Gabriel",
    email: "dev.gabrielfranca@gmail.com"
  },
  {
    name: "Diego",
    email: "diego@rocketseat.com.br"
  }
];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.sendMail({
      to: {
        name: "Gabriel França",
        email: "dev.gabrielfranca@gmail.com"
      },
      message: {
        subject: "Bem-vindo ao sistema",
        body: "Seja bem-vindo"
      }
    });

    return res.send();
  }
};
