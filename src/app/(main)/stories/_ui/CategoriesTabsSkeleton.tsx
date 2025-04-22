import { Skeleton } from '@/shared/components/ui/skeleton';

export default async function CategoriesTabsSkeleton() {
  return (
    <section className="mb-10 flex flex-wrap justify-center gap-3">
      <Skeleton className="h-10 w-[70px] rounded-md" />
      <Skeleton className="h-10 w-[70px] rounded-md" />
      <Skeleton className="h-10 w-[70px] rounded-md" />
      <Skeleton className="h-10 w-[70px] rounded-md" />
      <Skeleton className="h-10 w-[70px] rounded-md" />
      <Skeleton className="h-10 w-[70px] rounded-md" />
    </section>
  );
}
