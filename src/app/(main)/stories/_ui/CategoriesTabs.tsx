import { Button } from '@/shared/components/ui/button';
import { Category } from '@/entities/category/types';

export default async function CategoriesTabs() {
  const categoriesResponse = await fetch('https://chatcore.online/api/categories');

  const categoriesData: Category[] = await categoriesResponse.json();

  return (
    <section className="mb-10 flex flex-wrap justify-center gap-3">
      {categoriesData.map((category) => (
        <Button key={category.id} variant="default" size="sm" className="capitalize">
          {category.name}
        </Button>
      ))}
    </section>
  );
}
