/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/5y1NJjP3JV7
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { SelectValue, SelectTrigger, SelectItem, SelectGroup, SelectContent, Select } from "@/components/ui/select"

export function Post() {
  return (
    <>
      <main className="flex-1 p-4">
        <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-gray-100">記録</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="date">
              日時
            </label>
            <input
              className="block w-full rounded-md border border-gray-200 border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500 dark:border-gray-800"
              id="date"
              type="date"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="place">
              練習場所
            </label>
            <select
              className="block w-full rounded-md border border-gray-200 border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500 dark:border-gray-800"
              id="place"
            >
              <option value="">練習場所を選択</option>
              <option value="place1">新座市総合体育館</option>
              <option value="place2">所沢市民体育館</option>
              <option value="place3">東久留米スポーツセンター</option>
            </select>
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="menu">
              練習メニュー
            </label>
            <Select id="menu" multiple>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="練習メニューを選択" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="menu1">多球練習</SelectItem>
                  <SelectItem value="menu2">フォアバック2本2本</SelectItem>
                  <SelectItem value="menu3">フォア2/3</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="mt-4">
          <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="comments">
            コメント
          </label>
          <textarea
            className="block w-full rounded-md border border-gray-200 border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500 dark:border-gray-800"
            id="comments"
            placeholder="コメントを入力"
            rows={4}
          />
        </div>
        <div className="mt-4 flex justify-end">
          <button
            className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="submit"
          >
            登録
          </button>
        </div>
      </main>
    </>
  )
}
