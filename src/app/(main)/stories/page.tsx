import Link from 'next/link';
import { Suspense } from 'react';

import { Button } from '@/shared/components/ui/button';
import CategoriesTabs from '@/app/(main)/stories/_ui/CategoriesTabs';
import Stories from '@/app/(main)/stories/_ui/Stories';
import CategoriesTabsSkeleton from '@/app/(main)/stories/_ui/CategoriesTabsSkeleton';
import StoriesSkeleton from '@/app/(main)/stories/_ui/StoriesSkeleton';

export default async function StoriesPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      {/* Хедер страницы */}
      <section className="mx-auto mb-12 max-w-3xl text-center">
        <h1 className="mb-4 text-4xl font-bold">Истории сообщества</h1>
        <p className="text-muted-foreground text-lg">
          Тысячи авторов делятся своими историями. Выберите жанр и погрузитесь в чтение.
        </p>
      </section>

      <Suspense fallback={<CategoriesTabsSkeleton />}>
        <CategoriesTabs />
      </Suspense>

      <Suspense fallback={<StoriesSkeleton />}>
        <Stories />
      </Suspense>

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
