import { Address } from "@/entities/adress.entity";
import { Person } from "@/entities/person.entity";

export interface IAddressRepository {
  findAdressByPersonId(personId: number, page: number, limit: number): Promise<(Address & Person)[]>;

  create(address: Address): Promise<Address | undefined>;}