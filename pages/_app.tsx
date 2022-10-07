import type { AppProps } from 'next/app';
import { FeedProvider } from './contexts/Feed';
import { FormProvider } from './contexts/Form';
import { SearchProvider } from './contexts/Search';
import { GlobalStyle } from './styles/GlobalStyle';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <FeedProvider>
        <FormProvider>
          <SearchProvider>
            <Component {...pageProps} />
          </SearchProvider>
        </FormProvider>
      </FeedProvider>
    </>
  );
}

export default MyApp;
