// queries/getCertifications.ts
import { certifications } from '../data/staticContent';
import { Certification } from '../types';

export async function getCertifications(): Promise<Certification[]> {
  return certifications;
}
