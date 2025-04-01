
export interface StoriesData {
  items: StoryItem[];
}

export interface StoryItem {
  createdAt: string;
  id: string;
  updatedAt: string;
  owner: any;
  text: string;
}

export const getAllStories = async (): Promise<StoriesData> => {
  const storiesResponse = await fetch('https://chatcore.online/api/stories');

  setTimeout(() => {
    console.log('Close timeout');
  }, 50000);

  if (storiesResponse.ok) {
    return storiesResponse.json();
  }

  return {
    items: []
  };
};
