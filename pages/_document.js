import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
       <Head>
        <title>Earthcorp - Fastest web app hosting provider</title>
        <meta name="description" content="Fastest web app hosting provider" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument