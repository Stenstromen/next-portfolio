import { quotes } from '../data';
import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET(
  request: Request
) {
  // Handle readme request
  if (request.url.includes('/quotes/readme')) {
    const readme = `Quotes API Usage:

/api/quotes          - Get all quotes (JSON)
/api/quotes/random   - Get a random quote (JSON)
/api/quotes/{id}     - Get a specific quote by ID (JSON)

Query Parameters:
?quote   - Get only the quote text (plain text)
?author  - Get only the author (plain text)
?full    - Get "QUOTE - AUTHOR" format (plain text)

Examples:
/api/quotes/0        - Get first quote as JSON
/api/quotes/0?quote  - Get first quote text only
/api/quotes/0?author - Get first quote author only
/api/quotes/0?full   - Get first quote in "QUOTE - AUTHOR" format`;

    return new Response(readme, {
      headers: { 'Content-Type': 'text/plain' }
    });
  }

  const id = parseInt(request.url.split('/').pop()!);
  const searchParams = new URL(request.url).searchParams;

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

  if (searchParams.has('full')) {
    return new Response(`${quotes[id].quote} - ${quotes[id].author}`, {
      headers: { 'Content-Type': 'text/plain' }
    });
  }

  // Default: return full quote object as JSON
  return NextResponse.json(quotes[id]);
} 