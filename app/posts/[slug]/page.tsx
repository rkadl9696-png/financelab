import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { getAllPosts, getPostBySlug, getRelatedPosts } from '@/lib/posts'

const categoryIcons: Record<string, string> = {
  부동산: '🏠',
  재테크: '📈',
  세금: '📋',
  금융기초: '💡',
}

function formatDate(dateStr: string) {
  const [y, m, d] = dateStr.split('-')
  return `${y}년 ${Number(m)}월 ${Number(d)}일`
}

function postHref(slug: string) {
  return `/posts/${encodeURIComponent(slug)}`
}

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return { title: '머니랩' }
  return {
    title: `${post.title} | 머니랩`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      locale: 'ko_KR',
      type: 'article',
    },
  }
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  // getRelatedPosts uses post.slug (canonical), not the URL slug
  const relatedPosts = getRelatedPosts(post.slug)

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      {/* 브레드크럼 */}
      <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2 flex-wrap">
        <Link href="/" className="hover:text-blue-600 transition-colors">
          홈
        </Link>
        <span>/</span>
        <Link
          href={`/#${post.category}`}
          className="hover:text-blue-600 transition-colors"
        >
          {post.category}
        </Link>
        <span>/</span>
        <span className="text-gray-700 truncate max-w-xs">{post.title}</span>
      </nav>

      {/* 포스트 헤더 */}
      <header className="mb-8">
        <span className="inline-block text-sm font-medium bg-blue-50 text-blue-600 px-3 py-1 rounded-full mb-3">
          {categoryIcons[post.category]} {post.category}
        </span>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight mb-3">
          {post.title}
        </h1>
        <p className="text-gray-500 text-sm">{formatDate(post.date)}</p>
        <p className="mt-4 text-gray-600 text-base leading-relaxed border-l-4 border-blue-400 pl-4 bg-blue-50 py-3 rounded-r-lg">
          {post.excerpt}
        </p>
      </header>

      {/* 본문 */}
      <article
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* 관련 글 */}
      {relatedPosts.length > 0 && (
        <section className="border-t border-gray-200 pt-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">관련 글</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedPosts.map((related) => (
              <Link
                key={related.slug}
                href={postHref(related.slug)}
                className="bg-white border border-gray-200 rounded-xl p-4 hover:border-blue-400 hover:shadow-md transition-all group"
              >
                <span className="text-xs font-medium bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full">
                  {categoryIcons[related.category]} {related.category}
                </span>
                <h3 className="mt-2 font-medium text-gray-900 group-hover:text-blue-600 transition-colors text-sm leading-snug line-clamp-2">
                  {related.title}
                </h3>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* 돌아가기 */}
      <div className="mt-10 text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
        >
          ← 전체 글 목록으로 돌아가기
        </Link>
      </div>
    </div>
  )
}
