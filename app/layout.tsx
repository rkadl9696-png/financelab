import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'

export const metadata: Metadata = {
  title: '머니랩 | 재테크 금융 정보',
  description: '전세, 대출, 투자, 절세 등 돈이 되는 재테크 정보를 제공합니다.',
  keywords: '재테크, 금융, 부동산, 절세, 투자, 청약, 퇴직금, 실업급여',
  openGraph: {
    title: '머니랩 | 재테크 금융 정보',
    description: '전세, 대출, 투자, 절세 등 돈이 되는 재테크 정보를 제공합니다.',
    locale: 'ko_KR',
    type: 'website',
  },
}

const navLinks = [
  { href: '/#부동산', label: '부동산' },
  { href: '/#재테크', label: '재테크' },
  { href: '/#세금', label: '세금' },
  { href: '/#금융기초', label: '금융기초' },
]

const footerLinks = [
  { href: '/privacy', label: '개인정보처리방침' },
  { href: '/terms', label: '이용약관' },
  { href: '/about', label: '소개' },
]

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="flex flex-col min-h-screen bg-gray-50">
        {/* ── 헤더: 로고 좌측 고정, 네비 우측 정렬 ── */}
        <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
          <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-16">
            <Link
              href="/"
              className="flex items-center gap-1.5 font-bold text-xl text-blue-600 hover:text-blue-700 transition-colors shrink-0"
            >
              <span className="leading-none">💰</span>
              <span>머니랩</span>
            </Link>
            <nav className="flex items-center gap-4 sm:gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors whitespace-nowrap"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        {/* ── 푸터: 중앙 정렬 ── */}
        <footer className="bg-gray-800 text-gray-400 mt-16">
          <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col items-center gap-4 text-center">
            <p className="text-white font-bold text-lg">💰 머니랩</p>
            <p className="text-sm max-w-sm">
              돈이 되는 재테크·금융 정보를 쉽고 정확하게 제공합니다.
            </p>
            <nav className="flex items-center divide-x divide-gray-600 text-sm">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-3 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="border-t border-gray-700 w-full pt-6 text-xs text-gray-500 space-y-1">
              <p>© 2026 머니랩. All rights reserved.</p>
              <p>본 사이트의 정보는 투자 참고용이며, 투자 결과에 대한 책임은 본인에게 있습니다.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
