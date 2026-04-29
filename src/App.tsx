import SectionCard from './components/SectionCard'

const flowSteps = [
  ['1단계', '안전한 진입', '부담 없는 첫 만남과 오리엔테이션으로 속도를 맞춥니다.'],
  ['2단계', '나를 이해하기', '감정, 에너지, 생활 패턴을 관찰하며 지금의 나를 이해합니다.'],
  ['3단계', '관계와 표현 회복', '작은 대화와 창작 활동으로 연결 감각을 다시 깨웁니다.'],
  ['4단계', '작은 실행과 확장', '일상에서 가능한 행동을 시도하고 경험을 쌓아갑니다.'],
  ['5단계', '나만의 다음 단계 설계', '프로그램 이후 이어갈 나만의 계획을 구체화합니다.'],
]

const faqs = [
  ['낯을 많이 가려도 참여 가능한가요?', '네. 처음부터 적극적인 참여를 요구하지 않으며, 편안한 관찰자 모드로 시작할 수 있습니다.'],
  ['직장인도 참여 가능한가요?', '가능합니다. 일부 회차는 저녁/주말 운영을 고려하며, 참여자 상황에 맞춰 조율합니다.'],
  ['매주 참여가 어려우면 어떻게 되나요?', '출석이 완벽하지 않아도 괜찮습니다. 담당자와 함께 참여 계획을 조정할 수 있습니다.'],
  ['상담 프로그램인가요?', '상담 중심 프로그램이 아니라, 회복적 활동과 연결 경험을 돕는 참여형 프로그램입니다.'],
  ['비용이 있나요?', '참여비는 청년센터 지원 범위 안에서 운영되며, 세부 기준은 모집 공고에서 안내됩니다.'],
]

export default function App() {
  return (
    <div className="min-h-screen bg-redefine-background text-redefine-text">
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-8 sm:gap-10 sm:px-6 sm:py-12 lg:px-8">
        <section className="rounded-3xl bg-gradient-to-br from-[#f9f1e4] via-[#fff9f0] to-[#f1f8f4] p-8 shadow-card sm:p-12">
          <p className="text-sm font-semibold tracking-[0.2em] text-redefine-green">PROJECT REDEFINE</p>
          <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-5xl">멈춘 시간이 실패가 되지 않도록</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-stone-700">
            프로젝트 리디파인은 잠시 사회와 거리를 둔 청년들이 자기만의 속도로 다시 연결을 시작하는 16주 여정입니다.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#program" className="rounded-full bg-redefine-green px-6 py-3 font-semibold text-white transition hover:brightness-110">
              프로그램 살펴보기
            </a>
            <a href="#apply" className="rounded-full border-2 border-redefine-orange px-6 py-3 font-semibold text-redefine-orange transition hover:bg-redefine-orange hover:text-white">
              참여 신청하기
            </a>
          </div>
        </section>

        <SectionCard title="이런 마음, 낯설지 않아요" description="잠시 멈춘 시간은 게으름이 아니라, 다시 시작을 준비하는 시간일 수 있습니다.">
          <ul className="grid gap-4 sm:grid-cols-3">
            {['쉬고 있지만 쉬는 것 같지 않아요.', '관계가 끊어진 듯한 고립감을 느껴요.', '다시 시작하고 싶지만 어디서부터 할지 막막해요.'].map((item) => (
              <li key={item} className="rounded-2xl bg-stone-50 p-5 text-stone-700">{item}</li>
            ))}
          </ul>
        </SectionCard>

        <SectionCard title="리디파인(REDEFINE)이라는 이름" description="무언가를 고치는 과정이 아니라, 나를 다시 정의하고 회복해 가는 여정입니다.">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {['관계', '일상', '감각', '표현', '시도'].map((word) => (
              <div key={word} className="rounded-2xl border border-stone-200 bg-white p-5 text-center">
                <p className="text-sm text-stone-500">회복의 키워드</p>
                <p className="mt-2 text-xl font-bold text-redefine-green">{word}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="이런 청년에게 열려 있습니다">
          <ul className="grid gap-4 sm:grid-cols-2">
            {[
              '고립·은둔 상태를 경험한 청년',
              '쉬었음 상태에 있는 청년',
              '관계 단절감을 느끼는 직장인 청년',
              '새로운 연결과 활동을 부담 없이 시작하고 싶은 청년',
            ].map((item) => (
              <li key={item} className="rounded-2xl bg-stone-50 p-5 text-stone-700">{item}</li>
            ))}
          </ul>
        </SectionCard>

        <SectionCard id="program" title="16주 프로그램 흐름">
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {flowSteps.map(([step, title, desc]) => (
              <li key={step} className="rounded-2xl bg-white p-5 ring-1 ring-stone-200">
                <p className="text-sm font-semibold text-redefine-orange">{step}</p>
                <h3 className="mt-2 text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">{desc}</p>
              </li>
            ))}
          </ol>
        </SectionCard>

        <SectionCard title="핵심 활동">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {['자기 이해 워크숍', '관계 회복형 커뮤니티 활동', '창작/표현 활동', '일상 회복 미션', '스타일링 또는 외적 변화 경험', '최종 공유회'].map((item) => (
              <div key={item} className="rounded-2xl bg-stone-50 p-5 font-medium text-stone-700">{item}</div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="기대할 수 있는 변화">
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {['혼자라는 감각 완화', '생활 리듬 회복', '자기 이해 향상', '관계 경험 회복', '다음 활동으로 이어질 자신감'].map((item) => (
              <li key={item} className="rounded-2xl bg-white p-5 text-center font-medium ring-1 ring-stone-200">{item}</li>
            ))}
          </ul>
        </SectionCard>

        <SectionCard title="자주 묻는 질문 (FAQ)">
          <div className="space-y-3">
            {faqs.map(([q, a]) => (
              <details key={q} className="rounded-2xl bg-stone-50 p-5">
                <summary className="cursor-pointer list-none text-lg font-semibold">{q}</summary>
                <p className="mt-3 leading-relaxed text-stone-700">{a}</p>
              </details>
            ))}
          </div>
        </SectionCard>

        <section id="apply" className="rounded-3xl bg-redefine-green p-8 text-center text-white shadow-card sm:p-12">
          <h2 className="text-2xl font-bold sm:text-4xl">지금의 나를 다시 정의하는 시간</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/90">부담 없는 첫걸음으로, 나에게 맞는 속도로 다시 연결을 시작해보세요.</p>
          <a href="#apply" className="mt-8 inline-block rounded-full bg-redefine-orange px-8 py-3 font-semibold text-white transition hover:brightness-110">
            참여 신청하기
          </a>
        </section>
      </main>
    </div>
  )
}
