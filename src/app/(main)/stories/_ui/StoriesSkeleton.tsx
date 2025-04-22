import { Card, CardContent, CardHeader } from '@/shared/components/ui/card';
import { Skeleton } from '@/shared/components/ui/skeleton';

export default async function StoriesSkeleton() {
  return (
    <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 3 }).map((_, i) => (
        <Card key={i} className="h-full overflow-hidden">
          <CardHeader className="pb-2">
            <Skeleton className="h-6 w-3/4 rounded-md" />
          </CardHeader>
          <CardContent className="space-y-2">
            <Skeleton className="h-4 w-full rounded-md" />
            <Skeleton className="h-4 w-full rounded-md" />
            <Skeleton className="h-4 w-5/6 rounded-md" />
            <Skeleton className="mt-2 h-4 w-1/2 rounded-md" />
            <Skeleton className="h-4 w-2/3 rounded-md" />
          </CardContent>
        </Card>
      ))}
    </section>
  );
}
