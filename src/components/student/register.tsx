/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/PrBW4Arwi8l
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/
export function Register() {
  return (
    <div className="flex h-screen bg-[#f7f7f7] justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full m-4">
        <h1 className="text-2xl font-bold mb-6">新規登録</h1>
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
          <div>
            <label className="sr-only" htmlFor="password">
              パスワード
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-200 rounded-md dark:border-gray-800"
              id="password"
              placeholder="パスワード"
              required
              type="password"
            />
          </div>
          <div>
            <label className="sr-only" htmlFor="confirmation_password">
              確認用パスワード
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-200 rounded-md dark:border-gray-800"
              id="confirmation_password"
              placeholder="確認用パスワード"
              required
              type="password"
            />
          </div>
          <div>
            <button className="w-full px-3 py-2 bg-blue-600 text-white rounded-md" type="submit">
              登録
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
