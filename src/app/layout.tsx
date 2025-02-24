import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

/**
 * 根布局组件
 * @param props 包含children的属性对象
 * @returns 渲染的布局内容
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}

export const metadata = {
  title: 'AI 科技博客',
  description: '探索人工智能的前沿科技和应用',
} 