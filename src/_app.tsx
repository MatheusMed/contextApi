import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ContextProvider } from './store/contexts/provider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  );
}

export default MyApp
