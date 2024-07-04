export class Address {
  id?: number;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  person_id?: number;

  constructor(street: string, city: string, state: string, zipCode: string) {
    this.street = street;
    this.city = city;
    this.state = state;
    this.zipCode = zipCode;
  }
}
