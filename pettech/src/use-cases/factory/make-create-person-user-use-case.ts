import { PersonRepository } from "@/repositories/pg/person.repository";
import { CreatePersonUseCase } from "../create-person";

export function makeCreatePersonUserUseCase() {
  const personRepository = new PersonRepository();
  const createPersonUserUseCase = new CreatePersonUseCase(personRepository);

  return createPersonUserUseCase;
}
