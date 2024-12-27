import { quotes } from '../data';
import { NextResponse } from 'next/server';

// GET /api/quotes/[id] - Returns a specific quote by index
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);
  const { searchParams } = new URL(request.url);

  // Check if id is a valid number
  if (isNaN(id)) {
    return NextResponse.json(
      { error: "Invalid ID format" },
      { status: 400 }
    );
  }

  // Check if quote exists
  if (id < 0 || id >= quotes.length) {
    return NextResponse.json(
      { error: "Quote not found" },
      { status: 404 }
    );
  }

  // Handle field selection
  if (searchParams.has('quote')) {
    return new Response(quotes[id].quote, {
      headers: { 'Content-Type': 'text/plain' }
    });
  }

  if (searchParams.has('author')) {
    return new Response(quotes[id].author, {
      headers: { 'Content-Type': 'text/plain' }
    });
  }

  // Default: return full quote object as JSON
  return NextResponse.json(quotes[id]);
} 