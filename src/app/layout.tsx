import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { FC, PropsWithChildren } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Footer from '@/app/components/layout/footer';
import Header from '@/app/components/layout/header';

import './globals.css';

const zonaPro = localFont({
  src: [
    {
      path: '../../public/fonts/ZonaPro-Regular.woff2',

      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/ZonaPro-Bold.woff2',
      weight: '700',
      style: 'bold',
    },
    {
      path: '../../public/fonts/ZonaPro-SemiBold.woff2',
      weight: '600',
      style: 'bold',
    },
    {
      path: '../../public/fonts/ZonaPro-Black.woff2',
      weight: '900',
      style: 'black',
    },
  ],
  variable: '--font-zp',
});

const hisqaida = localFont({
  src: [
    {
      path: '../../public/fonts/hisqaida2018_bold.woff',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-hisqaida',
});

export const metadata: Metadata = {
  title: 'Citizen Web3 staking',
  description: 'Fast links to Citizen Web3 staking',
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en" className={`${zonaPro.variable} ${hisqaida.variable}`}>
      <head>
        <title>Citizen Web3 staking page</title>
        <script defer data-domain="staking.citizenweb3.com" src="https://plausible.io/js/script.js"></script>
      </head>
      <body className={`${zonaPro.className} scrollbar-track-scroll-bg scrollbar-thumb-scroll-item`}>
        <div className="flex min-h-screen w-full flex-col justify-between bg-black px-8 py-4 text-white">
          <Header />
          <main className="flex-1 pt-10">{children}</main>
          <Footer />
        </div>
        <ToastContainer
          position="top-right"
          autoClose={300}
          hideProgressBar
          closeOnClick
          pauseOnHover
          draggable
          theme="dark"
        />
      </body>
    </html>
  );
};

export default RootLayout;