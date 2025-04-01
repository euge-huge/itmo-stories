import { getAllStories } from '@/entities/story/api';

async function StoriesListServer() {
  const {items: stories} = await getAllStories();

  return (
    <div>
      {stories.map((story) => (
        <div key={story.id}>{story.text}</div>
      ))}
    </div>
  );
}

export { StoriesListServer };
