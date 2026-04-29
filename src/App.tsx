import SectionCard from './components/SectionCard'

const concerns = [
  '쉬고 있는데도 마음은 계속 바쁜 느낌',
  '사람들과 조금 멀어진 듯한 감각',
  '다시 시작하고 싶은데 첫걸음이 막막함',
]

const identityKeywords = ['관계', '일상', '감각', '표현', '시도']

const targets = [
  '고립·은둔 상태를 경험한 청년',
  '쉬었음 상태에 있는 청년',
  '관계 단절감을 느끼는 직장인 청년',
  '부담 없이 새로운 연결을 시작하고 싶은 청년',
]

const flowSteps = [
  ['1단계', '안전한 진입', '천천히 시작할 수 있는 첫 만남'],
  ['2단계', '나를 이해하기', '지금의 감정과 리듬을 살펴보기'],
  ['3단계', '관계·표현 회복', '작은 대화와 창작으로 연결감 회복'],
  ['4단계', '작은 실행 확장', '일상에서 가능한 시도를 이어가기'],
  ['5단계', '다음 단계 설계', '프로그램 이후의 나를 구체화하기'],
]

const activities = ['자기 이해 워크숍', '관계 회복형 커뮤니티 활동', '창작·표현 활동', '일상 회복 미션', '스타일링/외적 변화 경험', '최종 공유회']

const expectedChanges = ['혼자라는 감각 완화', '생활 리듬 회복', '자기 이해 향상', '관계 경험 회복', '다음 활동으로 이어질 자신감']

const faqs = [
  ['낯을 많이 가려도 참여 가능한가요?', '가능합니다. 처음에는 관찰자처럼 참여해도 괜찮고, 본인 속도에 맞춰 천천히 적응할 수 있어요.'],
  ['직장인도 참여 가능한가요?', '네. 일정은 참여자 상황을 고려해 저녁/주말 회차를 함께 운영할 수 있습니다.'],
  ['매주 참여가 어려우면 어떻게 되나요?', '결석이 생겨도 괜찮습니다. 담당자와 함께 현실적인 참여 계획을 조정합니다.'],
  ['상담 프로그램인가요?', '치료·상담 중심이 아니라, 활동과 관계 경험을 통해 회복을 돕는 참여형 프로그램입니다.'],
  ['비용이 있나요?', '청년센터 공공 지원 범위에서 운영되며, 자세한 내용은 모집 공고에서 안내됩니다.'],
]

export default function App() {
  return (
    <div className="min-h-screen bg-redefine-background text-redefine-text">
      <main className="mx-auto w-full max-w-6xl space-y-6 px-4 py-6 sm:space-y-8 sm:px-6 sm:py-10 lg:px-8">
        <section className="rounded-3xl bg-gradient-to-br from-[#f8efe2] via-[#fff9f1] to-[#eef7f2] px-6 py-10 shadow-card sm:px-10 sm:py-14">
          <p className="text-xs font-semibold tracking-[0.16em] text-redefine-green sm:text-sm">PROJECT REDEFINE · 청년 연결 회복 프로그램</p>
          <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-5xl">멈춘 시간이 실패가 되지 않도록</h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-stone-700 sm:text-lg">
            프로젝트 리디파인은 잠시 사회와 거리를 둔 청년들이 자기만의 속도로 다시 연결을 시작하는 16주 여정입니다.
          </p>
          <p className="mt-3 max-w-2xl text-sm text-stone-600 sm:text-base">문제를 고치기보다, 지금의 나를 이해하고 다음을 함께 그려갑니다.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a href="#program" className="inline-flex items-center justify-center rounded-full bg-redefine-green px-6 py-3 font-semibold text-white transition hover:brightness-110">
              프로그램 살펴보기
            </a>
            <a href="#apply" className="inline-flex items-center justify-center rounded-full border-2 border-redefine-orange bg-white px-6 py-3 font-semibold text-redefine-orange transition hover:bg-redefine-orange hover:text-white">
              참여 신청하기
            </a>
          </div>
        </section>

        <SectionCard title="지금 이런 마음이라면" description="충분히 자연스러운 신호입니다.">
          <ul className="grid gap-3 sm:grid-cols-3 sm:gap-4">
            {concerns.map((item) => (
              <li key={item} className="rounded-2xl bg-stone-50 p-4 text-sm leading-relaxed text-stone-700 sm:p-5 sm:text-base">
                {item}
              </li>
            ))}
          </ul>
        </SectionCard>

        <SectionCard title="리디파인의 의미" description="나를 다시 정의하는 시간.">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {identityKeywords.map((word) => (
              <div key={word} className="rounded-2xl border border-stone-200 bg-white p-4 text-center sm:p-5">
                <p className="text-xs text-stone-500 sm:text-sm">회복 키워드</p>
                <p className="mt-1 text-lg font-bold text-redefine-green sm:mt-2 sm:text-xl">{word}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="이런 분을 기다립니다">
          <ul className="grid gap-3 sm:grid-cols-2 sm:gap-4">
            {targets.map((item) => (
              <li key={item} className="rounded-2xl bg-stone-50 p-4 text-sm leading-relaxed text-stone-700 sm:p-5 sm:text-base">
                {item}
              </li>
            ))}
          </ul>
        </SectionCard>

        <SectionCard id="program" title="16주 진행 흐름" description="작게 시작해, 나의 다음을 설계합니다.">
          <ol className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-5">
            {flowSteps.map(([step, title, desc]) => (
              <li key={step} className="rounded-2xl bg-white p-4 ring-1 ring-stone-200 sm:p-5">
                <p className="text-xs font-semibold text-redefine-orange sm:text-sm">{step}</p>
                <h3 className="mt-1 text-base font-bold sm:mt-2 sm:text-lg">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-stone-600 sm:mt-2">{desc}</p>
              </li>
            ))}
          </ol>
        </SectionCard>

        <SectionCard title="주요 활동">
          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            {activities.map((item) => (
              <div key={item} className="rounded-2xl bg-stone-50 p-4 text-sm font-medium text-stone-700 sm:p-5 sm:text-base">
                {item}
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="기대 변화">
          <ul className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-5">
            {expectedChanges.map((item) => (
              <li key={item} className="rounded-2xl bg-white p-4 text-center text-sm font-medium ring-1 ring-stone-200 sm:p-5 sm:text-base">
                {item}
              </li>
            ))}
          </ul>
        </SectionCard>

        <SectionCard title="자주 묻는 질문">
          <div className="space-y-3">
            {faqs.map(([q, a]) => (
              <details key={q} className="rounded-2xl bg-stone-50 p-4 sm:p-5">
                <summary className="cursor-pointer list-none pr-6 text-base font-semibold leading-relaxed sm:text-lg">{q}</summary>
                <p className="mt-2 text-sm leading-relaxed text-stone-700 sm:mt-3 sm:text-base">{a}</p>
              </details>
            ))}
          </div>
        </SectionCard>

        <section id="apply" className="rounded-3xl bg-redefine-green px-6 py-10 text-center text-white shadow-card sm:px-10 sm:py-12">
          <h2 className="text-2xl font-bold leading-tight sm:text-4xl">지금의 나를 다시 정의하는 시간</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/90 sm:text-base">
            완벽한 준비보다, 작은 연결 하나면 충분합니다. 프로젝트 리디파인에서 첫걸음을 시작해보세요.
          </p>
          <a href="#apply" className="mt-7 inline-flex items-center justify-center rounded-full bg-redefine-orange px-8 py-3 font-semibold text-white transition hover:brightness-110">
            참여 신청하기
          </a>
        </section>
      </main>
    </div>
  )
}
