import Link from 'next/link';

import { Button } from '@/shared/components/ui/button';

export default function AboutPage() {
  return (
    <main className="container mx-auto max-w-3xl px-4 py-12">
      <section className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold">О проекте</h1>
        <p className="text-muted-foreground text-lg">
          StoryHub — это платформа, где каждый может поделиться своей историей, прочитать вдохновляющие рассказы других
          и найти единомышленников.
        </p>
      </section>

      <section className="mb-16 space-y-6">
        <h2 className="text-2xl font-semibold">Почему мы это делаем?</h2>
        <p className="text-muted-foreground text-base">
          Мы верим, что у каждого человека есть история, достойная быть услышанной. Наш проект создан для того, чтобы
          объединить авторов, читателей и просто любопытных людей, которые хотят вдохновения и эмоций.
        </p>

        <h2 className="text-2xl font-semibold">Что вы найдёте на StoryHub?</h2>
        <ul className="text-muted-foreground list-inside list-disc space-y-2">
          <li>Авторские рассказы, фанфики и заметки</li>
          <li>Интуитивно понятный редактор текста</li>
          <li>Комментарии и обратная связь от читателей</li>
          <li>Категории, фильтры и система тегов</li>
          <li>Поддержка любимых авторов</li>
        </ul>
      </section>

      <section className="bg-muted rounded-xl p-6 text-center shadow-sm">
        <h3 className="mb-2 text-xl font-medium">Готовы поделиться своей историей?</h3>
        <p className="text-muted-foreground mb-4">Зарегистрируйтесь и начните писать уже сегодня!</p>
        <Button asChild>
          <Link href="/register">Присоединиться</Link>
        </Button>
      </section>
    </main>
  );
}
