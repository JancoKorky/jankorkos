import '@/styles/index.scss';
import { Raleway } from '@next/font/google';
import type { AppProps } from 'next/app';
import { SSRProvider } from 'react-bootstrap';
import Container from '@/components/Container/Container';
import Navigation from '@/components/Navigation/Navigation';

const raleway = Raleway({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={raleway.className}>
      <SSRProvider>
        <Navigation />
        <Container fluid={'xxl'}>
          <Component {...pageProps} />
        </Container>
      </SSRProvider>
    </div>
  );
}
