import React from 'react';
import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript
} from 'next/document';

import { ServerStyleSheet } from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyle';

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }

  // Usar a fonte dentro do Head

  render(): JSX.Element {
    return (
      <Html lang="pt">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
          <meta name="description" content="" />
        </Head>
        <body>
          <GlobalStyle />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
