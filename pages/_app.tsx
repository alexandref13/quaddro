import type { AppProps } from 'next/app';
import { FeedProvider } from './contexts/Feed';
import { FormProvider } from './contexts/Form';
import { GlobalStyle } from './styles/GlobalStyle';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <FeedProvider>
        <FormProvider>
          <Component {...pageProps} />
        </FormProvider>
      </FeedProvider>
    </>
  );
}

export default MyApp;
