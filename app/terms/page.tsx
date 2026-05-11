import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '이용약관 | 머니랩',
  description: '머니랩 이용약관입니다.',
}

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">이용약관</h1>
      <p className="text-sm text-gray-500 mb-8">최종 업데이트: 2026년 5월 11일</p>

      <div className="prose max-w-none space-y-8">
        <section>
          <h2>제1조 (목적)</h2>
          <p>
            본 약관은 머니랩(이하 "사이트")이 제공하는 재테크·금융 정보 서비스의 이용 조건 및 절차에 관한 사항을 규정함을 목적으로 합니다.
          </p>
        </section>

        <section>
          <h2>제2조 (서비스 내용)</h2>
          <p>사이트는 다음과 같은 서비스를 제공합니다:</p>
          <ul>
            <li>재테크, 금융, 부동산, 세금 관련 정보 제공</li>
            <li>투자 참고 정보 및 가이드</li>
            <li>금융 관련 용어 설명 및 계산 방법 안내</li>
          </ul>
        </section>

        <section>
          <h2>제3조 (면책 조항)</h2>
          <p>
            본 사이트에서 제공하는 모든 정보는 참고용으로만 제공됩니다.
            투자 결정에 따른 결과(이익 또는 손실)에 대한 법적 책임은 전적으로 이용자 본인에게 있으며,
            사이트 운영자는 이에 대한 책임을 지지 않습니다.
          </p>
          <p>
            세금, 법률 관련 정보는 법령 변경 등으로 달라질 수 있으므로, 중요한 결정 전에는
            반드시 공인된 전문가(세무사, 변호사, 공인중개사 등)와 상담하시기 바랍니다.
          </p>
        </section>

        <section>
          <h2>제4조 (지식재산권)</h2>
          <p>
            본 사이트의 모든 콘텐츠(텍스트, 이미지, 디자인 등)의 저작권은 머니랩에 귀속됩니다.
            무단 복제, 배포, 수정은 금지되며, 인용 시 출처를 명시해야 합니다.
          </p>
        </section>

        <section>
          <h2>제5조 (광고)</h2>
          <p>
            본 사이트는 구글 애드센스를 포함한 제3자 광고를 게재할 수 있습니다.
            광고 콘텐츠는 광고주의 책임이며, 사이트는 광고 내용에 대한 책임을 지지 않습니다.
          </p>
        </section>

        <section>
          <h2>제6조 (약관 변경)</h2>
          <p>
            사이트는 필요에 따라 본 약관을 변경할 수 있으며, 변경 시 사이트를 통해 공지합니다.
            변경된 약관은 공지 후 즉시 효력이 발생합니다.
          </p>
        </section>

        <section>
          <h2>제7조 (문의)</h2>
          <p>약관에 대한 문의사항은 아래 이메일로 연락주시기 바랍니다.</p>
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
