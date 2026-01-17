// queries/getWorkPermit.ts
import { workPermit } from '../data/staticContent';
import { WorkPermit } from '../types';

export async function getWorkPermit(): Promise<WorkPermit> {
  return workPermit;
}
