import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '개인정보처리방침 | 머니랩',
  description: '머니랩 개인정보처리방침입니다.',
}

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">개인정보처리방침</h1>
      <p className="text-sm text-gray-500 mb-8">최종 업데이트: 2026년 5월 11일</p>

      <div className="prose max-w-none space-y-8">
        <section>
          <h2>1. 개인정보 수집 항목 및 수집 방법</h2>
          <p>
            머니랩(이하 "사이트")은 별도의 회원가입 없이 이용 가능하며, 현재 개인정보를 직접 수집하지 않습니다.
            다만, 구글 애드센스 등 제3자 광고 서비스가 쿠키 등을 통해 방문자 정보를 수집할 수 있습니다.
          </p>
        </section>

        <section>
          <h2>2. 개인정보 이용 목적</h2>
          <p>
            수집된 정보는 서비스 개선 및 통계 분석 목적으로만 활용되며, 별도의 동의 없이 제3자에게 제공되지 않습니다.
          </p>
        </section>

        <section>
          <h2>3. 쿠키(Cookie) 사용</h2>
          <p>
            본 사이트는 구글 애드센스 및 구글 애널리틱스를 사용할 수 있으며, 이 서비스들은 쿠키를 사용합니다.
            쿠키는 사용자의 방문 패턴을 분석하고 관련 광고를 표시하는 데 사용됩니다.
            브라우저 설정에서 쿠키를 거부하거나 삭제할 수 있습니다.
          </p>
        </section>

        <section>
          <h2>4. 제3자 광고 서비스</h2>
          <p>
            본 사이트는 구글 애드센스(Google AdSense)를 통해 광고를 게재합니다.
            구글은 쿠키를 사용하여 사용자의 이전 방문 기록을 바탕으로 광고를 표시할 수 있습니다.
            구글의 개인정보처리방침은{' '}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              여기
            </a>
            에서 확인할 수 있습니다.
          </p>
        </section>

        <section>
          <h2>5. 개인정보 보유 및 이용 기간</h2>
          <p>
            본 사이트가 직접 수집하는 개인정보는 없으며, 제3자 서비스의 데이터 보유 기간은 해당 서비스의 정책을 따릅니다.
          </p>
        </section>

        <section>
          <h2>6. 개인정보 관련 문의</h2>
          <p>
            개인정보 관련 문의사항은 아래 이메일로 연락주시기 바랍니다.
          </p>
          <ul>
            <li>이메일: rkadl96@gmail.com</li>
          </ul>
        </section>
      </div>

      <div className="mt-10">
        <Link href="/" className="text-blue-600 hover:text-blue-700 font-medium">
          ← 메인으로 돌아가기
        </Link>
      </div>
    </div>
  )
}
