import Document, { Html, Head, Main, NextScript } from 'next/document'
// помогает взаимодействовать с html структурой в рамках всего приложения

export default class MyDocument extends Document {

// применяем стилиф, добавляя их в нашу html структуру
  render() {
    return (
      <Html>
        <Head>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap" rel="stylesheet"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
