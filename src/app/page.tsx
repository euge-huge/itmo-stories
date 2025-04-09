import Link from 'next/link';

import { Button } from '@/shared/components/ui/button';

export default function HomePage() {
  return (
    <main className="bg-background min-h-screen">
      <section className="container mx-auto max-w-3xl px-4 py-20 text-center">
        <h1 className="mb-6 text-5xl leading-tight font-bold">
          Делитесь историями, которые заслуживают быть услышанными
        </h1>
        <p className="text-muted-foreground mb-8 text-lg">
          StoryHub — это место, где слова оживают. Публикуйте фанфики, личные рассказы, поэзию или вдохновляющие эссе.
          Найдите свою аудиторию и станьте частью креативного сообщества.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild>
            <Link href="/stories">Читать истории</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/stories/create">Написать свою</Link>
          </Button>
        </div>
      </section>

      <section className="bg-muted/50 py-16">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-10 text-3xl font-semibold">Почему именно StoryHub?</h2>
          <div className="grid gap-8 text-left md:grid-cols-3">
            <div className="rounded-xl bg-white p-4 shadow-sm">
              <h3 className="mb-2 text-lg font-semibold">Простой редактор</h3>
              <p className="text-muted-foreground">
                Создавайте истории без технических сложностей. Наш редактор — как блокнот, только умнее.
              </p>
            </div>

            <div className="rounded-xl bg-white p-4 shadow-sm">
              <h3 className="mb-2 text-lg font-semibold">Аудитория, которая читает</h3>
              <p className="text-muted-foreground">
                Люди здесь действительно читают. Вы получите внимание, отклики и, возможно, поклонников.
              </p>
            </div>
            <div className="rounded-xl bg-white p-4 shadow-sm">
              <h3 className="mb-2 text-lg font-semibold">Категории и фильтры</h3>
              <p className="text-muted-foreground">
                Легко находите интересные темы — будь то романтика, фантастика, хоррор или юмор.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 text-center">
        <h2 className="mb-4 text-3xl font-bold">Готовы начать?</h2>
        <p className="text-muted-foreground mb-6">
          Регистрация займёт меньше минуты. Начните писать или просто читайте — вы сами выбираете.
        </p>
        <Button size="lg" asChild>
          <Link href="/register">Присоединиться</Link>
        </Button>
      </section>
    </main>
  );
}
