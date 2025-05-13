import { NextResponse } from 'next/server';

export async function GET() {
  // const a = fetch()

  return NextResponse.json({
    message: 'Hello World!',
  });
}
