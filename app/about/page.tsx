import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '소개 | 머니랩',
  description: '머니랩은 재테크·금융 정보를 쉽게 제공하는 정보 블로그입니다.',
}

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">머니랩 소개</h1>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
        <p className="text-blue-800 text-lg font-medium">
          💰 돈이 되는 재테크 정보를 쉽고 정확하게
        </p>
        <p className="text-blue-700 mt-2">
          머니랩은 복잡한 금융·세금·부동산 정보를 누구나 이해할 수 있도록
          쉽게 풀어서 제공하는 정보성 블로그입니다.
        </p>
      </div>

      <div className="prose max-w-none space-y-8">
        <section>
          <h2>머니랩을 만든 이유</h2>
          <p>
            재테크, 세금, 부동산 정보는 우리 삶에 매우 중요하지만 대부분의 정보가
            너무 어렵고 복잡하게 제공됩니다. 머니랩은 이런 정보들을
            실생활에 바로 적용할 수 있는 형태로 정리하여 제공하고자 합니다.
          </p>
        </section>

        <section>
          <h2>다루는 주제</h2>
          <ul>
            <li>
              <strong>🏠 부동산:</strong> 전세·월세 비교, 청약 전략, 부동산 세금, 대출 정보
            </li>
            <li>
              <strong>📈 재테크:</strong> 적금·예금 비교, 펀드·ETF 투자, 절약 노하우
            </li>
            <li>
              <strong>📋 세금:</strong> 연말정산, 절세 방법, 증여세, 양도소득세
            </li>
            <li>
              <strong>💡 금융기초:</strong> 실수령액 계산, 퇴직금, 실업급여, 금융 용어
            </li>
          </ul>
        </section>

        <section>
          <h2>주의사항</h2>
          <p>
            머니랩에서 제공하는 모든 정보는 참고용입니다. 투자, 세금, 법률 관련 중요한 결정은
            반드시 공인된 전문가(세무사, 변호사, 공인중개사, 금융 전문가 등)와 상담하시기 바랍니다.
            세법이나 금융 규정은 자주 변경되므로, 중요 사안은 항상 최신 정보를 확인하세요.
          </p>
        </section>

        <section>
          <h2>문의하기</h2>
          <p>
            콘텐츠 관련 문의, 오류 제보, 광고 문의는 아래로 연락주세요.
          </p>
          <ul>
            <li>
              이메일:{' '}
              <a
                href="mailto:rkadl96@gmail.com"
                className="text-blue-600 hover:underline"
              >
                rkadl96@gmail.com
              </a>
            </li>
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
