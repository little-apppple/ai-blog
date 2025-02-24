import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'
import { BlogPost } from '@/types'

/**
 * 获取所有博客文章
 * @returns Promise<BlogPost[]> 博客文章列表
 */
export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const postsDirectory = path.join(process.cwd(), 'posts')
    const fileNames = await fs.readdir(postsDirectory)
    
    const posts = await Promise.all(fileNames.map(async fileName => {
      const id = fileName.replace(/\.md$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = await fs.readFile(fullPath, 'utf8')
      const { data, content } = matter(fileContents)
      
      return {
        id,
        content,
        title: data.title || '',
        description: data.description || '',
        date: data.date || '',
        author: data.author || '',
        tags: data.tags || [],
      } as BlogPost
    }))
    
    return posts.sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()))
  } catch (error) {
    console.error('Error loading blog posts:', error)
    return []
  }
}

/**
 * 获取单篇博客文章
 * @param id 文章ID
 * @returns Promise<BlogPost | null> 博客文章内容
 */
export async function getBlogPost(id: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(process.cwd(), 'posts', `${id}.md`)
    const fileContents = await fs.readFile(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    
    return {
      id,
      content,
      title: data.title || '',
      description: data.description || '',
      date: data.date || '',
      author: data.author || '',
      tags: data.tags || [],
    } as BlogPost
  } catch (error) {
    console.error(`Error loading blog post ${id}:`, error)
    return null
  }
} 