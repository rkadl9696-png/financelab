import Link from 'next/link'
import { getAllPosts, getPostsByCategory, categories } from '@/lib/posts'

const categoryIcons: Record<string, string> = {
  부동산: '🏠',
  재테크: '📈',
  세금: '📋',
  금융기초: '💡',
}

const categoryDescriptions: Record<string, string> = {
  부동산: '전세·월세·청약·대출 정보',
  재테크: '적금·예금·펀드·ETF 전략',
  세금: '절세·공제·환급 가이드',
  금융기초: '연봉·퇴직금·실업급여 정보',
}

function formatDate(dateStr: string) {
  const [y, m, d] = dateStr.split('-')
  return `${y}년 ${Number(m)}월 ${Number(d)}일`
}

function postHref(slug: string) {
  return `/posts/${encodeURIComponent(slug)}`
}

export default function HomePage() {
  const latestPosts = getAllPosts().slice(0, 6)

  return (
    <>
      {/* ── 히어로 ── */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center text-white">
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-5">
            돈이 되는 재테크 정보,
            <br />
            머니랩에서 찾아보세요
          </h1>
          <p className="text-blue-100 text-base sm:text-lg leading-relaxed mb-8 max-w-md mx-auto">
            부동산·투자·절세·금융 정보를 쉽고 정확하게 알려드립니다.
          </p>
          {/* 앵커 링크 — 아래 섹션으로 스크롤 */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <Link
                key={cat}
                href={`/#${cat}`}
                className="bg-white/20 hover:bg-white/35 border border-white/30 text-white text-sm font-medium px-4 py-1.5 rounded-full transition-colors"
              >
                {categoryIcons[cat]} {cat}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6">

        {/* ── 카테고리 카드 ── */}
        <section className="py-10">
          <h2 className="text-lg font-bold text-gray-900 mb-4">카테고리별 정보</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {categories.map((cat) => {
              const count = getPostsByCategory(cat).length
              return (
                <Link
                  key={cat}
                  href={`/#${cat}`}
                  className="flex flex-col bg-white rounded-xl border border-gray-200 p-5 hover:border-blue-400 hover:shadow-md transition-all group"
                >
                  <span className="text-3xl mb-3">{categoryIcons[cat]}</span>
                  <span className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors text-sm sm:text-base">
                    {cat}
                  </span>
                  <span className="text-xs text-gray-500 mt-1 leading-relaxed flex-1">
                    {categoryDescriptions[cat]}
                  </span>
                  <span className="text-xs text-blue-500 font-semibold mt-3">
                    글 {count}개
                  </span>
                </Link>
              )
            })}
          </div>
        </section>

        {/* ── 최신 글 ── */}
        <section className="pb-12">
          <h2 className="text-lg font-bold text-gray-900 mb-4">최신 글</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {latestPosts.map((post) => (
              <Link
                key={post.slug}
                href={postHref(post.slug)}
                className="flex flex-col bg-white rounded-xl border border-gray-200 p-5 hover:border-blue-400 hover:shadow-md transition-all group"
              >
                <span className="self-start text-xs font-medium bg-blue-50 text-blue-600 px-2.5 py-0.5 rounded-full mb-3">
                  {categoryIcons[post.category]} {post.category}
                </span>
                <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-snug mb-2 line-clamp-2 flex-1">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">
                  {post.excerpt}
                </p>
                <p className="mt-3 text-xs text-gray-400">{formatDate(post.date)}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* ── 카테고리별 전체 목록 ── */}
        {/* id를 붙여 헤더 앵커 링크 목적지로 사용, scroll-mt-20으로 고정 헤더 높이 보정 */}
        {categories.map((cat) => {
          const catPosts = getPostsByCategory(cat)
          return (
            <section key={cat} id={cat} className="pb-10 scroll-mt-20">
              <h2 className="flex items-center gap-2 text-lg font-bold text-gray-900 mb-4">
                <span>{categoryIcons[cat]}</span>
                {cat}
              </h2>
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden divide-y divide-gray-100">
                {catPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={postHref(post.slug)}
                    className="flex items-center justify-between gap-4 px-5 py-4 hover:bg-blue-50 transition-colors group"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors truncate">
                        {post.title}
                      </p>
                      <p className="text-sm text-gray-500 mt-0.5 truncate">
                        {post.excerpt}
                      </p>
                    </div>
                    <span className="text-xs text-gray-400 shrink-0 ml-2">
                      {formatDate(post.date)}
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )
        })}

        <div className="pb-6" />
      </div>
    </>
  )
}
