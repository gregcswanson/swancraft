import '../styles/globals.css'
import "../styles/custom.scss"
import type { AppProps } from 'next/app'
import { useEffect } from "react"
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("bootstrap");
  }, []);

  return <>
    <Script strategy="afterInteractive" src="/site.js" />
    <Component {...pageProps} />
  </>
}
export default MyApp
