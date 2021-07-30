import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'
import Head from 'next/head'
import {extractStyles} from 'evergreen-ui'
function MyApp({ Component, pageProps }: AppProps) {
 
  return <>
  <Head>

  <script async src='https://www.googletagmanager.com/gtag/js?id=G-ZC04SLV29Y'/>
    <script dangerouslySetInnerHTML={{
      __html:`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
 fbq('init', '199928112062800'); 
fbq('track', 'PageView');`
      }}
      
      />
  <script dangerouslySetInnerHTML={{
    __html:`  window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    
    gtag('config', 'G-ZC04SLV29Y');`
  }}/>
  </Head>
 
  <Component {...pageProps} />
  </>
}
export default MyApp
