import '@/styles/index.scss';
import process from 'process';
import { Raleway } from '@next/font/google';
import type { AppProps } from 'next/app';
import { SSRProvider } from 'react-bootstrap';
import Container from '@/components/Container/Container';
import Maintenance from '@/components/Maintenance/Maintenance';
import Navigation from '@/components/Navigation/Navigation';

const raleway = Raleway({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
});
export default function App({ Component, pageProps }: AppProps) {
  let isDev, isProd;

  if (process.env.NEXT_PUBLIC_ENVIRONMENT) {
    isDev = process.env.NEXT_PUBLIC_ENVIRONMENT === 'development';
    isProd = process.env.NEXT_PUBLIC_ENVIRONMENT === 'production';
  } else {
    isDev = process.env.VERCEL_ENV === 'development';
    isProd = process.env.VERCEL_ENV === 'production';
  }

  return (
    <div className={raleway.className}>
      <SSRProvider>
        {isDev && (
          <>
            <Navigation />
            <Container fluid={'xxl'}>
              <Component {...pageProps} />
            </Container>
          </>
        )}
        {isProd && <Maintenance />}
      </SSRProvider>
    </div>
  );
}
