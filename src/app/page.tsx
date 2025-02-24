import Link from 'next/link'
import { getBlogPosts } from '@/utils/posts'
import { BlogPost } from '@/types'

/**
 * 博客首页组件
 * @returns 渲染的首页内容
 */
export default async function Home() {
  // 使用 try-catch 处理可能的错误
  let posts: BlogPost[] = [];
  try {
    posts = await getBlogPosts();
  } catch (error) {
    console.error('Failed to fetch blog posts:', error);
  }
  
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">AI 科技博客</h1>
      
      <div className="grid gap-6">
        {posts && posts.map(post => (
          <article key={post.id} className="p-6 bg-white rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-2">
              <Link href={`/posts/${post.id}`} prefetch={false}>
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-600 mb-4">{post.description}</p>
            <div className="flex items-center text-sm text-gray-500">
              <time dateTime={post.date}>{post.date}</time>
              <span className="mx-2">•</span>
              <span>{post.author}</span>
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}

// 添加静态生成配置
export const dynamic = 'force-static'
export const revalidate = 3600 // 每小时重新验证一次 