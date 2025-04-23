'use client';

import Link from 'next/link';

import { Button } from '@/shared/components/ui/button';
import { useUser } from '@/app/AuthProvider';
import { logout } from '@/shared/lib/actions';
import { useRouter } from 'next/navigation';

export default function Profile() {
  const { user, setUser } = useUser();

  const router = useRouter();

  if (user) {
    return (
      <div className="flex items-center gap-2">
        {user.name}

        <Button
          variant="outline"
          size="sm"
          onClick={async () => {
            await logout();
            setUser(null);
            router.refresh();
          }}
        >
          Выйти
        </Button>
      </div>
    );
  } else {
    return (
      <div>
        <Button variant="outline" size="sm">
          <Link href="/login">Войти</Link>
        </Button>
      </div>
    );
  }
}
