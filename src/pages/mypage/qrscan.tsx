/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/KxGrlMro387
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import { QrCode } from "../../../node_modules/lucide-react/dist/lucide-react";

/** Add fonts into your Next.js project:

import { Arimo } from 'next/font/google'
import { Cormorant_Garamond } from 'next/font/google'

arimo({
  subsets: ['latin'],
  display: 'swap',
})

cormorant_garamond({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
const QRScan = () => {
  return (
    <>
      {/* <main className="flex min-h-[100dvh] items-center justify-center bg-gray-100 dark:bg-gray-900 p-6"> */}
      {/* <main className="flex h-[100vh] p-6 items-center justify-center bg-gray-100 dark:bg-gray-900"> */}
      <div className="flex-col p-6 content-center max-w-md w-full space-y-4 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          QRコード
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          連携したいアカウントのQRコードをスキャンしてください
        </p>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
          <a href="#">
            <img
              alt="QR Code"
              className="mx-auto"
              height={256}
              src="/placeholder.svg"
              style={{
                aspectRatio: "256/256",
                objectFit: "cover",
              }}
              width={256}
            />
          </a>
        </div>
      </div>
      {/* </main> */}
    </>
  );
};

export default QRScan;