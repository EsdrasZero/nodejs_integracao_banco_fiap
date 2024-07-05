import { CreateAddressUseCase } from "./../create-address";
import { AddressRepository } from "@/repositories/pg/adress.repository";

export function makeCreateAddressUseCase() {
  const addressRepository = new AddressRepository();

  const createAddressUseCase = new CreateAddressUseCase(addressRepository);

  return createAddressUseCase;
}
