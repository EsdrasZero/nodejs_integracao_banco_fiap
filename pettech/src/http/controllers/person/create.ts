import { makeCreatePersonUserUseCase } from "@/use-cases/factory/make-create-person-user-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    cpf: z.string(),
    name: z.string(),
    birth: z.coerce.date(),
    email: z.string().email(),
    user_id: z.coerce.number(),
  });

  const { cpf, name, birth, email, user_id } = registerBodySchema.parse(
    request.body
  );

  const createPersonUseCase = makeCreatePersonUserUseCase();

  const person = await createPersonUseCase.handler({
    cpf,
    name,
    birth,
    email,
    user_id,
  });

  reply.code(201).send(person);
}
