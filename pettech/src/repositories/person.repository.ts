import { Person } from '@/entities/person.entity';

export class PersonRepository{

  async findbyId(id: number): Promise<Person>{
    return {
      id,
      cpf : '12345678901',
      name : 'John Doe',
      birth : new Date('1990-01-01'),
      email : 'teste@gmail.com',
      user_id : 1
    }
  }

  async create(person: Person): Promise<Person>{
    return person;
  }

}
