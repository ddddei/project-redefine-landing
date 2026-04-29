import SectionCard from './components/SectionCard'

const concerns = [
  '쉬고 있는데도 마음은 계속 바쁜 느낌',
  '사람들과 조금 멀어진 듯한 감각',
  '다시 시작하고 싶은데 첫걸음이 막막함',
]

const quickFacts = [
  ['운영 기간', '2026년 5월 ~ 11월 (16주 프로그램)'],
  ['대상', '19~39세 청년 60명 (광명시 우선, 인근 지역 가능)'],
  ['운영 장소', '광명시 청년동 · 온라인(디스코드) · 관내 공간'],
]

const identityKeywords = ['관계', '일상', '감각', '표현', '시도']

const welcomeFor = [
  '고립·은둔 상태를 경험했거나 관계가 멀어졌다고 느끼는 청년',
  '준비중(구 쉬었음) 기간을 지나며 다음 단계를 고민하는 청년',
  '직장 생활 중이지만 회사 밖 관계 단절감을 느끼는 청년',
  '부담 없는 활동부터 천천히 시작하고 싶은 청년',
]

const flowSteps = [
  ['1~3주', '진입·방향 설정', '강점 기반 탐색과 트랙/랩 맛보기 후 나에게 맞는 경로 선택'],
  ['4~13주', '공동 창조', '경험 트랙 + Redefine Lab + 상시 프로그램으로 나만의 변화 축적'],
  ['14~16주', 'Redefine Day', '공연·전시·회고를 통해 변화 경험을 스스로 확인하고 공유'],
]

const tracks = [
  ['낭독극', '말로 다시 쓰기', '주 1회 × 10주'],
  ['무용극', '몸으로 다시 쓰기', '주 1회 × 12주'],
  ['TRPG', '선택으로 다시 쓰기', '주 1회 × 10주'],
]

const labs = ['Atelier', 'Art Journal', "Writer's Room", 'Band Session']
const alwaysOn = ['명상 (주 1회)', '자조모임 (격주)', '원데이 클래스 (총 5회)', '클럽 활동 (라이프·소셜·직장인 야간)']

const expected = [
  '혼자라는 감각이 완화되고 대화의 문턱이 낮아집니다.',
  '생활 리듬과 일상 루틴이 조금씩 회복됩니다.',
  '내 감정·강점·관심사를 더 명확히 이해하게 됩니다.',
  '작은 시도를 반복하며 다음 활동으로 이어질 자신감이 생깁니다.',
]

const partners = ['광명시 자살예방센터', '광명시 정신건강복지센터', '광명시립 하안종합사회복지관', '경기도미래세대재단']

const faqs = [
  ['낯을 많이 가려도 참여 가능한가요?', '네. 관찰자처럼 시작해도 괜찮습니다. 참여 속도는 본인이 정할 수 있습니다.'],
  ['직장인도 참여 가능한가요?', '가능합니다. 직장인 청년을 위한 저녁/야간 운영 경로를 함께 설계합니다.'],
  ['상담 프로그램인가요?', '상담 중심이 아닌 경험·표현·관계 회복 중심 프로그램입니다. 필요 시 전문기관 연계가 함께 이루어집니다.'],
  ['비용이 있나요?', '공공지원사업으로 운영되며, 상세 안내는 모집 공고에서 확인할 수 있습니다.'],
]

export default function App() {
  return (
    <div className="min-h-screen bg-redefine-background text-redefine-text">
      <main className="mx-auto w-full max-w-6xl space-y-7 px-4 py-6 sm:space-y-9 sm:px-6 sm:py-10 lg:px-8">
        <section className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-gradient-to-br from-[#f9efe3] via-[#fffaf2] to-[#edf7f2] px-6 py-10 shadow-card sm:px-10 sm:py-14">
          <div aria-hidden className="pointer-events-none absolute -right-14 -top-14 h-44 w-44 rounded-full bg-[#f3d8be]/60 blur-2xl" />
          <div aria-hidden className="pointer-events-none absolute -left-16 -bottom-16 h-40 w-40 rounded-full bg-[#d8ece3]/70 blur-2xl" />
          <p className="text-xs font-semibold tracking-[0.16em] text-redefine-green sm:text-sm">광명시 청년동 · 2026 지역특화 청년사업</p>
          <h1 className="mt-4 text-3xl font-extrabold leading-[1.22] tracking-[-0.01em] sm:text-5xl">멈춘 시간이 실패가 되지 않도록</h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-stone-700 sm:text-lg">
            Project Redefine은 준비중·고립 청년이 자기만의 속도로 다시 연결을 시작하는 16주 자기 재정의 여정입니다.
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-stone-600 sm:text-base">치료가 아니라 경험으로, 조언이 아니라 선택으로 나를 다시 써 내려갑니다.</p>
          <div className="mt-8 grid gap-3 sm:flex sm:flex-row sm:gap-4">
            <a href="#program" className="inline-flex w-full min-h-12 items-center justify-center rounded-full bg-redefine-green px-6 py-3 font-semibold text-white shadow-[0_8px_18px_rgba(63,127,111,0.28)] transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-redefine-green focus-visible:ring-offset-2 sm:w-auto">
              프로그램 살펴보기
            </a>
            <a href="#apply" className="inline-flex w-full min-h-12 items-center justify-center rounded-full border-2 border-redefine-orange bg-white px-6 py-3 font-semibold text-redefine-orange shadow-[0_8px_18px_rgba(234,139,69,0.18)] transition hover:bg-redefine-orange hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-redefine-orange focus-visible:ring-offset-2 sm:w-auto">
              참여 신청하기
            </a>
          </div>
        </section>

        <SectionCard title="한눈에 보는 사업 개요">
          <ul className="grid gap-3 sm:grid-cols-3 sm:gap-4">
            {quickFacts.map(([label, value]) => (
              <li key={label} className="rounded-2xl border border-white/80 bg-gradient-to-b from-stone-50 to-[#fffdf9] p-4 shadow-sm sm:p-5">
                <p className="text-xs font-semibold text-redefine-green sm:text-sm">{label}</p>
                <p className="mt-2 text-sm leading-relaxed text-stone-700 sm:text-base">{value}</p>
              </li>
            ))}
          </ul>
        </SectionCard>

        <SectionCard title="이런 마음, 낯설지 않아요" description="충분히 자연스러운 신호입니다.">
          <ul className="grid gap-3 sm:grid-cols-3 sm:gap-4">
            {concerns.map((item) => (
              <li key={item} className="rounded-2xl border border-white/80 bg-gradient-to-b from-stone-50 to-[#fffdf9] p-4 text-sm leading-relaxed text-stone-700 shadow-sm sm:p-5 sm:text-base">
                {item}
              </li>
            ))}
          </ul>
        </SectionCard>

        <SectionCard title="리디파인(REDEFINE)이라는 이름" description="나를 다시 정의하는 시간입니다.">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {identityKeywords.map((word) => (
              <div key={word} className="rounded-2xl border border-stone-200/80 bg-white/90 p-4 text-center shadow-sm sm:p-5">
                <p className="text-xs text-stone-500 sm:text-sm">회복 키워드</p>
                <p className="mt-1 text-lg font-bold text-redefine-green sm:mt-2 sm:text-xl">{word}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="이런 분을 기다립니다" description="낙인 없이, 나의 속도로 시작할 수 있어요.">
          <ul className="grid gap-3 sm:grid-cols-2 sm:gap-4">
            {welcomeFor.map((item) => (
              <li key={item} className="rounded-2xl border border-white/80 bg-gradient-to-b from-stone-50 to-[#fffdf9] p-4 text-sm leading-relaxed text-stone-700 shadow-sm sm:p-5 sm:text-base">
                {item}
              </li>
            ))}
          </ul>
        </SectionCard>

        <SectionCard id="program" title="16주 진행 구조" description="진입 → 공동 창조 → 공유의 3단계">
          <ol className="grid gap-3 sm:gap-4 lg:grid-cols-3">
            {flowSteps.map(([period, title, desc]) => (
              <li key={period} className="rounded-2xl border border-stone-200/80 bg-white/90 p-4 shadow-sm sm:p-5">
                <p className="text-xs font-semibold text-redefine-orange sm:text-sm">{period}</p>
                <h3 className="mt-1 text-base font-bold sm:mt-2 sm:text-lg">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-stone-600 sm:mt-2">{desc}</p>
              </li>
            ))}
          </ol>
        </SectionCard>

        <SectionCard title="경험 트랙">
          <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
            {tracks.map(([name, way, schedule]) => (
              <div key={name} className="rounded-2xl border border-white/80 bg-gradient-to-b from-stone-50 to-[#fffdf9] p-4 shadow-sm sm:p-5">
                <h3 className="text-base font-bold sm:text-lg">{name}</h3>
                <p className="mt-1 text-sm text-stone-700">{way}</p>
                <p className="mt-2 text-xs font-medium text-redefine-green sm:text-sm">{schedule}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Redefine Lab & 상시 프로그램">
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-white/80 bg-gradient-to-b from-stone-50 to-[#fffdf9] p-4 shadow-sm sm:p-5">
              <h3 className="text-base font-bold sm:text-lg">Redefine Lab (복수 참여 가능)</h3>
              <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-stone-700 sm:text-base">
                {labs.map((item) => (
                  <li key={item} className="rounded-xl bg-white px-3 py-2 text-center">{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-white/80 bg-gradient-to-b from-stone-50 to-[#fffdf9] p-4 shadow-sm sm:p-5">
              <h3 className="text-base font-bold sm:text-lg">상시 프로그램 (자유 참여)</h3>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-stone-700 sm:text-base">
                {alwaysOn.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </SectionCard>

        <SectionCard title="기대 변화">
          <ul className="grid gap-3 sm:grid-cols-2 sm:gap-4">
            {expected.map((item) => (
              <li key={item} className="rounded-2xl border border-stone-200/80 bg-white/95 p-4 text-sm leading-relaxed shadow-sm sm:p-5 sm:text-base">
                {item}
              </li>
            ))}
          </ul>
        </SectionCard>

        <SectionCard title="협력 기관 안내" description="필요 시 전문기관과 자연스럽게 연계합니다.">
          <ul className="grid gap-3 sm:grid-cols-2 sm:gap-4">
            {partners.map((item) => (
              <li key={item} className="rounded-2xl border border-white/80 bg-gradient-to-b from-stone-50 to-[#fffdf9] p-4 text-sm font-medium text-stone-700 shadow-sm sm:p-5 sm:text-base">
                {item}
              </li>
            ))}
          </ul>
        </SectionCard>

        <SectionCard title="자주 묻는 질문">
          <div className="space-y-3">
            {faqs.map(([q, a]) => (
              <details key={q} className="rounded-2xl border border-white/80 bg-gradient-to-b from-stone-50 to-[#fffdf9] p-4 shadow-sm sm:p-5">
                <summary className="cursor-pointer list-none pr-6 text-base font-semibold leading-relaxed sm:text-lg">{q}</summary>
                <p className="mt-2 text-sm leading-relaxed text-stone-700 sm:mt-3 sm:text-base">{a}</p>
              </details>
            ))}
          </div>
        </SectionCard>

        <section id="apply" className="rounded-[2rem] border border-white/20 bg-gradient-to-br from-[#3f7f6f] to-[#356e60] px-6 py-10 text-center text-white shadow-card sm:px-10 sm:py-12">
          <h2 className="text-2xl font-bold leading-tight sm:text-4xl">지금의 나를 다시 정의하는 시간</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/90 sm:text-base">2026년 5월~11월, 광명시 청년동에서 진행됩니다. 부담 없는 첫 연결을 지금 시작해보세요.</p>
          <a href="#apply" className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-redefine-orange px-8 py-3 font-semibold text-white shadow-[0_10px_20px_rgba(234,139,69,0.35)] transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#356e60]">
            참여 신청하기
          </a>
          <p className="mt-5 text-xs text-white/80 sm:text-sm">문의: 광명시 청년동</p>
        </section>
      </main>
    </div>
  )
}
