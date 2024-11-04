import type { AppProps } from 'next/app'
import "../styles/globals.css";
import { Oxanium} from 'next/font/google'

const oxanium = Oxanium({subsets:['latin']});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <body className={`${oxanium.className} antialiased text-gray-200 bg-[#0d1117]`}>
      <Component {...pageProps} />
    </body>
)
}