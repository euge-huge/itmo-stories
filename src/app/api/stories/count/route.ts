import { getCount } from '@/app/api/stories/count/action';

export async function GET() {
  return getCount();
}
