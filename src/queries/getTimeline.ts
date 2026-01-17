// queries/getTimeline.ts
import { timeline } from '../data/staticContent';
import { TimelineItem } from '../types';

export async function getTimeline(): Promise<TimelineItem[]> {
  return timeline;
}
