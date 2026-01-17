// queries/getTimeline.ts
import { skills } from '../data/staticContent';
import { Skill } from '../types';

export async function getSkills(): Promise<Skill[]> {
  return skills;
}
