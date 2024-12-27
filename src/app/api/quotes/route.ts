import { quotes } from './data';
import { NextResponse } from 'next/server';

export const runtime = 'edge';
// GET /api/quotes - Returns all quotes
export async function GET() {
  return NextResponse.json(quotes);
} 