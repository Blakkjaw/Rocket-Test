import { AddressInterface } from "./AddressInterface";
import { CompanyInterface } from "./CompanyInterface";

export interface UserInterface {
  id: number;
  name: string;
  username: string;
  email: string;
  adress: AddressInterface;
  phone: string;
  website: string;
  company: CompanyInterface;
}
