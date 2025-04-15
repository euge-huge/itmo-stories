import Link from 'next/link';

import { Button } from '@/shared/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/components/ui/card';
import { PaginationDto } from '@/shared/types/pagination';
import { StoryItem } from '@/entities/story/types';

const categories = ['Все', 'Романтика', 'Фантастика', 'Хоррор'];

export default async function StoriesPage() {
  const storiesResponse = await fetch('https://chatcore.online/api/stories');

  const storiesData: PaginationDto<StoryItem> = await storiesResponse.json();

  return (
    <main className="container mx-auto px-4 py-16">
      {/* Хедер страницы */}
      <section className="mx-auto mb-12 max-w-3xl text-center">
        <h1 className="mb-4 text-4xl font-bold">Истории сообщества</h1>
        <p className="text-muted-foreground text-lg">
          Тысячи авторов делятся своими историями. Выберите жанр и погрузитесь в чтение.
        </p>
      </section>

      {/* Фильтры по категориям */}
      <section className="mb-10 flex flex-wrap justify-center gap-3">
        {categories.map((cat) => (
          <Button key={cat} variant="default" size="sm" className="capitalize">
            {cat}
          </Button>
        ))}
      </section>

      {/* Сетка карточек */}
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

      {/* Call to Action */}
      <section className="mt-16 text-center">
        <h2 className="mb-4 text-2xl font-semibold">Хотите поделиться своей историей?</h2>
        <Button asChild>
          <Link href="/stories/create">Опубликовать</Link>
        </Button>
      </section>
    </main>
  );
}
