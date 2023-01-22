import '@/styles/index.scss';
import type { AppProps } from 'next/app';
import { SSRProvider } from 'react-bootstrap';
import Container from '@/components/Container/Container';
import Navigation from '@/components/Navigation/Navigation';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <Container fluid={'xl'}>
        <Navigation />
        <Component {...pageProps} />
      </Container>
    </SSRProvider>
  );
}
