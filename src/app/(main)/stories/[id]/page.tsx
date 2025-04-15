import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

import { StoryItem } from '@/entities/story/types';
import { PaginationDto } from '@/shared/types/pagination';
import { Badge } from '@/shared/components/ui/badge';

export async function generateStaticParams() {
  const storiesData: PaginationDto<StoryItem> = await fetch('https://chatcore.online/api/stories').then((res) =>
    res.json()
  );

  return storiesData.items.map((story) => ({
    id: story.id,
  }));
}

export default async function StoryPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const storiesResponse = await fetch(`https://chatcore.online/api/stories/` + id);
  const story: StoryItem = await storiesResponse.json();

  return (
    <main className="container m-auto space-y-10 px-4 py-16">
      <div>
        <Link
          href="/stories"
          className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 text-sm transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Назад ко всем историям
        </Link>
      </div>

      <header className="space-y-3">
        <h1 className="text-5xl leading-snug font-bold tracking-tight">{story.title}</h1>
        <div className="text-muted-foreground flex flex-wrap items-center gap-3 text-sm">
          <span>
            Автор: <span className="font-medium">{story.owner.name}</span>
          </span>
          <span>·</span>
          <span>{new Date(story.createdAt).toLocaleDateString('ru-RU')}</span>
          {story.category && <Badge variant="outline">{story.category.name}</Badge>}
        </div>
      </header>

      {/* Контент */}
      <article className="prose prose-lg prose-p:leading-relaxed prose-headings:mt-6 prose-headings:mb-2 max-w-none">
        {story.text
          .trim()
          .split('\n\n')
          .map((para, i) => (
            <p key={i}>{para.trim()}</p>
          ))}
      </article>
    </main>
  );
}
