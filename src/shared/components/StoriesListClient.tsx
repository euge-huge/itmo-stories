'use client';

import { getAllStories, StoryItem } from '@/entities/story/api';
import { cookies } from 'next/headers';
import React, { useEffect, useState } from 'react';

function StoriesList() {
  const [stories, setStories] = useState<StoryItem[]>([]);

  useEffect(() => {
    cookies().then(cookie => {
      console.log(cookie);
    })

    getAllStories().then((data) => {
      setStories(data.items);
    });
  }, []);



  return (
    <div>
      {stories.map((story) => (
        <div key={story.id}>{story.text}</div>
      ))}
    </div>
  );
}

export { StoriesList };
