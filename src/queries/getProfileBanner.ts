// queries/getProfileBanner.ts
import { profileBanner } from '../data/staticContent';
import { ProfileBanner } from '../types';

export async function getProfileBanner(): Promise<ProfileBanner> {
  return profileBanner;
}
