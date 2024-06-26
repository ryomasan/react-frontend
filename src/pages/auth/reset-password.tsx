/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/6ZsdSetgTul
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
const ResetPassword = () => {
  return (
    <div className="flex h-full bg-[#f7f7f7] justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full m-4">
        <h1 className="text-2xl font-bold mb-6">パスワード再設定</h1>
        <form className="space-y-4">
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
            <label className="sr-only" htmlFor="password_confirmation">
              確認用パスワード
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-200 rounded-md dark:border-gray-800"
              id="password_confirmation"
              placeholder="確認用パスワード"
              required
              type="password"
            />
          </div>
          <div>
            <button
              className="w-full px-3 py-2 bg-blue-600 text-white rounded-md"
              type="submit"
            >
              再登録
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ResetPassword;
