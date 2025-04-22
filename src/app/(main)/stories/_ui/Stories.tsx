import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/components/ui/card';
import { PaginationDto } from '@/shared/types/pagination';
import { StoryItem } from '@/entities/story/types';

export default async function Stories() {
  const storiesResponse = await fetch('https://chatcore.online/api/stories');

  const storiesData: PaginationDto<StoryItem> = await storiesResponse.json();

  return (
    <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {storiesData.items.map((story) => (
        <Link key={story.id} href={`/stories/${story.id}`}>
          <Card className="h-full overflow-hidden transition-shadow hover:shadow-lg">
            <CardHeader className="pb-2">
              <CardTitle className="line-clamp-1 text-xl">{story.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-1">
              <p className="text-muted-foreground line-clamp-3 text-sm">{story.text}</p>
              <div className="text-muted-foreground mt-2 text-xs">
                Автор: <span className="font-medium">{story.owner.name}</span>
              </div>
              {story.category && (
                <div className="text-muted-foreground text-xs">
                  Категория: <span className="font-medium">{story.category.name}</span>
                </div>
              )}
            </CardContent>
          </Card>
        </Link>
      ))}
    </section>
  );
}
