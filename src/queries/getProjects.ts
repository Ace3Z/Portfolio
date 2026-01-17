// queries/getProjects.ts
import { projects } from '../data/staticContent';
import { Project } from '../types';

export async function getProjects(): Promise<Project[]> {
  return projects;
}
