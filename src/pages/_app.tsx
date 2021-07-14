import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'
import Head from 'next/head'
import {extractStyles} from 'evergreen-ui'
function MyApp({ Component, pageProps }: AppProps) {
  const {css,hydrationScript} = extractStyles()
  return <>
  <Head>

  <script async src='https://www.googletagmanager.com/gtag/js?id=G-ZC04SLV29Y'/>
  <script dangerouslySetInnerHTML={{
    __html:`  window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    
    gtag('config', 'G-ZC04SLV29Y');`
  }}/>
 <style dangerouslySetInnerHTML={{__html:css}}></style>
  </Head>
  {hydrationScript }
  <Component {...pageProps} />
  </>
}
export default MyApp
