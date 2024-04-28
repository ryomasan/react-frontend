/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/cnHrcA3LgFl
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import Link from "../../../node_modules/next/link";

export function EmailVerification() {
  return (
    <div className="flex h-screen bg-[#f7f7f7] justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full m-4">
        <h1 className="text-xl font-bold mb-6">パスワード再設定メールを送信</h1>
        <form className="space-y-4">
          <div>
            <label className="sr-only" htmlFor="email">
              メールアドレス
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-200 rounded-md dark:border-gray-800"
              id="email"
              placeholder="メールアドレス"
              required
              type="email"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="w-full px-3 py-2 bg-blue-600 text-white rounded-md"
              type="submit"
            >
              送信
            </button>
          </div>
          <div className="flex items-center">
            <Link className="text-blue-600 hover:underline ml-4 flex justify-end" href="#">
              ログインページへ戻る
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
