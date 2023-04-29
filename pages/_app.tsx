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
  const isDev =
    process.env.VERCEL_ENV === 'development' ||
    process.env.NEXT_PUBLIC_ENVIRONMENT === 'development';
  const isProd =
    process.env.VERCEL_ENV === 'production' ||
    process.env.NEXT_PUBLIC_ENVIRONMENT === 'production';

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
