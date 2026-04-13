import { quotes } from './data';
import { NextResponse } from 'next/server';

// GET /api/quotes - Returns all quotes
export async function GET() {
  return NextResponse.json(quotes);
} 