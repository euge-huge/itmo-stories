export interface StoryItem {
  createdAt: string;
  id: string;
  updatedAt: string;
  owner: {
    name: string;
  };
  text: string;
}
