export interface StoryItem {
  createdAt: string;
  id: string;
  updatedAt: string;
  owner: {
    id: string;
    name: string;
  };
  category?: {
    id: string;
    name: string;
  };
  title: string;
  text: string;
}
