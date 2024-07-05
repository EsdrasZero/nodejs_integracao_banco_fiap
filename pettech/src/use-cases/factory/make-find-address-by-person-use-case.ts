import { AddressRepository } from "@/repositories/pg/adress.repository";
import { FindAdressByPersonUseCase } from "../find-address-by-person";

export function makeFindAddressByPersonUseCase() {
  const addressRepository = new AddressRepository();
  const findAddressByPersonUseCase = new FindAdressByPersonUseCase(
    addressRepository
  );
  return findAddressByPersonUseCase;
}
