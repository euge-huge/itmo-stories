import Link from 'next/link';
import { Button } from '@/shared/components/ui/button';
import { cn } from '@/shared/lib/utils';

const navLinks = [
  { label: 'О проекте', href: '/about' },
  { label: 'Истории', href: '/stories' },
  { label: 'Создать', href: '/stories/create' },
];

export default function Header() {
  return (
    <header className="w-full border-b bg-white shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Логотип */}
        <Link href="/" className="text-primary text-xl font-bold">
          StoryHub
        </Link>

        {/* Навигация */}
        <nav className="hidden gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn('text-muted-foreground hover:text-foreground text-sm font-medium transition-colors')}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Кнопка входа / профиль */}
        <div>
          <Button variant="outline" size="sm">
            <Link href="/login">Войти</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
