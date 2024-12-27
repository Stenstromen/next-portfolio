import { quotes } from '../data';
import { NextResponse } from 'next/server';

// GET /api/quotes/random - Returns a random quote
export async function GET() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return NextResponse.json(quotes[randomIndex]);
} 