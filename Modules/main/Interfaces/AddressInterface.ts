import { GeoInterface } from "./GeoInterface";

export interface AddressInterface{
  street : string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoInterface;
}
