import { NextResponse } from 'next/server';
import { PaginationDto } from '@/shared/types/pagination';
import { StoryItem } from '@/entities/story/types';

export async function GET() {
  const storiesResponse = await fetch('https://chatcore.online/api/stories');

  const storiesData: PaginationDto<StoryItem> = await storiesResponse.json();

  return NextResponse.json(storiesData.meta.itemCount);
}
