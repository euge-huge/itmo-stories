import { PaginationDto } from '@/shared/types/pagination';
import { StoryItem } from '@/entities/story/types';
import { createEmptyList } from '@/shared/lib/utils';

export const getAllStories = async (): Promise<PaginationDto<StoryItem>> => {
  const storiesResponse = await fetch('https://chatcore.online/api/stories');

  if (storiesResponse.ok) {
    return storiesResponse.json();
  }

  return createEmptyList();
};

export const getStory = async (id: string): Promise<StoryItem | null> => {
  const storyResponse = await fetch(`https://chatcore.online/api/stories/${id}`);

  if (storyResponse.ok) {
    return storyResponse.json();
  }

  return null;
};
