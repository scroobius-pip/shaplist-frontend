import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'
function MyApp({ Component, pageProps }: AppProps) {
  return <>
  <Script src='https://www.googletagmanager.com/gtag/js?id=G-ZC04SLV29Y'/>
  <Script>
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-ZC04SLV29Y');
    `}
  </Script>
  <Component {...pageProps} />
  </>
}
export default MyApp
