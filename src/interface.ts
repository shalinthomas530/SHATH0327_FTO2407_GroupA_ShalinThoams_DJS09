import { LoyaltyUser, Permissions } from "./enums";
import { Price } from "./types.ts";

export interface Review {
  name: string;
  stars: number;
  loyaltyUser: LoyaltyUser;
  date: string;
  description?: string;
}

export interface User {
  firstName: string;
  lastName: string;
  isReturning: boolean;
  permissions: Permissions;
  age: number;
  stayedAt: string[];
}

export interface Property {
  image: string;
  title: string;
  price: Price;
  location: {
    firstLine: string;
    city: string;
    code: number | string;
    country: string;
  };
  contact: [number, string];
  isAvailable: boolean;
}