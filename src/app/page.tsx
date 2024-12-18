import FirstPage from '../components/FirstPage';
import { headers } from 'next/headers';

export const runtime = 'edge';

export default async function Home() {
  const nonce = (await headers()).get('x-nonce');
  
  return (
    <div>
      <FirstPage nonce={nonce || undefined} />
    </div>
  );
}
