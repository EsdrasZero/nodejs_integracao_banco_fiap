import { IAddressRepository } from "@/repositories/address.repository.interface";
import { IAddress } from "@/entities/models/address.interface";
import { IPerson } from "@/entities/models/person.interface";

export class FindAdressByPersonUseCase {
  constructor(private addressRepository: IAddressRepository) {}

  async handler(
    personId: number,
    page: number,
    limit: number
  ): Promise<(IAddress & IPerson)[]> {
    return await this.addressRepository.findAdressByPersonId(
      personId,
      page,
      limit
    );
  }
}
