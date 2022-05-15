import Document, { Head, Html, Main, NextScript } from 'next/document';

// 서버에서 한 번만 실행
// 페이지를 렌더링하는데 사용하는 html 및 body를 업데이트 할 수 있음
class CustomDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang='ko'>
        <Head>
          <link
            href='//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css'
            rel='stylesheet'
            type='text/css'
          />
          <link
            href='//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-jp.css'
            rel='stylesheet'
            type='text/css'
          />
        </Head>
        <body className='font-spoqa text-grey-11'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
