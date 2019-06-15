// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file
// only for global adjustments like css, google fonts, etc.
// only way to get access to the body directly

// ./pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <title>Next.js App</title>
          <style>{`  body {
              margin: 0;
            }
            footer {
              margin-top: 5rem;
            }`}</style>
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
