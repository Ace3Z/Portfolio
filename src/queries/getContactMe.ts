// queries/getContactMe.ts
import { contactMe } from '../data/staticContent';
import { ContactMe } from '../types';

export async function getContactMe(): Promise<ContactMe> {
  return contactMe;
}
