import Nav from "./components/Nav";
import WaveMotion from "./components/WaveMotion";
import MalusLaw from "./components/MalusLaw";
import BrewsterReflection from "./components/BrewsterReflection";
import BrewsterDipole from "./components/BrewsterDipole";
import { Explain } from "./components/Explain";
import { Tex, TexBlock } from "./components/Tex";

export default function Home() {
  return (
    <div className="shell">
      <Nav />
      <main className="content">
        {/* ===== HERO ===== */}
        <header className="hero" id="intro">
          <p className="eyebrow">인터랙티브 물리 가이드</p>
          <h1>빛 · 파동 · 편광</h1>
          <p>
            진동과 진행의 관계라는 한 가지 질문에서 출발해, 말뤼스 법칙과
            반사·굴절의 기하를 지나 브루스터 각과 쌍극자 복사까지 — 편광이라는
            현상을 하나의 논리적 흐름으로 따라갑니다. 슬라이더를 직접 움직이며
            확인해 보세요.
          </p>
        </header>

        {/* ===== 1 ===== */}
        <section className="sec" id="sec1">
          <h2>1. 토대: 파동의 분류</h2>
          <p className="lead">진동 방향과 진행 방향의 관계로 나뉜다.</p>

          <p>
            모든 파동을 가르는 첫 질문은 단순합니다. <strong>매질의 입자가
            어느 쪽으로 흔들리는가?</strong> 진행 방향과 수직이면 횡파, 나란하면
            종파입니다. 이 한 가지 차이가 편광이 가능한지 아닌지를 결정합니다.
          </p>

          <WaveMotion />
          <p className="cap">
            같은 방향으로 나아가는 세 파동에서 입자의 궤도만 다릅니다. 위에서부터
            수직(횡파) · 수평(종파) · 원(표면파).
          </p>

          <h3>1.1 — 1.2 횡파와 종파</h3>
          <ul>
            <li>
              <strong>횡파</strong> — 진동 ⊥ 진행. 빛(전자기파), 줄의 파동,
              지진 S파. 진동이 진행축에 수직인 평면 안에서 <em>어느 방향이든</em>
              될 수 있으므로 <strong>편광이 가능</strong>합니다.
            </li>
            <li>
              <strong>종파</strong> — 진동 ∥ 진행. 소리, 용수철의 소밀파, 지진
              P파. 진동 방향이 진행 방향 하나로 고정돼 있어 고를 자유가 없습니다.
              그래서 <strong>편광이 불가능</strong>합니다.
            </li>
          </ul>

          <h3>1.3 두 종류뿐인가?</h3>
          <p>
            아닙니다. 횡파와 종파는 <strong>이상화된 양 끝</strong>일 뿐입니다.
            실제 자연에는 두 운동이 섞인 파동이 흔합니다.
          </p>
          <ul>
            <li>
              <strong>표면파</strong> — 수면파나 지진 레일리파처럼 입자가
              원·타원 궤도를 그립니다(수직 성분과 수평 성분이 합쳐진 결과).
            </li>
            <li>
              <strong>복합파 · 비틀림파</strong> — 막대의 비틀림 진동처럼 어느
              한쪽으로 깔끔히 분류되지 않는 운동도 있습니다.
            </li>
          </ul>

          <h3>1.4 매질이 결정한다</h3>
          <p>
            횡파는 <strong>전단 탄성(shear)</strong>, 즉 어긋남에 저항하는
            성질을 가진 매질에서만 전달됩니다. 액체와 기체는 전단 응력을 견디지
            못하므로 횡파를 통과시키지 못합니다.
          </p>
          <div className="callout green">
            <span className="tag">지구 내부의 증거</span>
            지진의 S파(횡파)는 지구 <strong>외핵</strong>을 통과하지 못합니다.
            이 “S파 그림자”가 바로 외핵이 <strong>액체</strong>라는 결정적
            증거입니다. 반면 P파(종파)는 액체도 통과하므로 그림자가 다르게
            나타납니다.
          </div>
        </section>

        {/* ===== 2 ===== */}
        <section className="sec" id="sec2">
          <h2>2. 편광: 횡파만이 가진 자유도</h2>
          <p className="lead">
            진동 방향을 “고를 수 있다”는 것 — 그것이 편광의 본질이다.
          </p>

          <h3>2.1 비편광 vs 편광</h3>
          <p>
            전구나 태양에서 나오는 자연광은 진동 방향이 매 순간 <strong>무작위</strong>로
            바뀝니다(비편광). 이 진동 방향이 <strong>한 방향으로 정렬</strong>되면
            편광된 빛입니다.
          </p>

          <h3>2.2 편광을 만드는 4가지 방식</h3>
          <ul>
            <li><strong>선택 흡수</strong> — 편광판이 특정 방향 성분만 통과시키고 나머지를 흡수.</li>
            <li><strong>반사</strong> — 경계면에서 반사될 때 한 성분이 더 잘 반사됨(→ 4장 브루스터 각).</li>
            <li><strong>산란</strong> — 대기 분자에 의한 산란으로 하늘빛이 부분 편광됨.</li>
            <li><strong>복굴절</strong> — 방해석 같은 결정에서 두 편광이 다른 굴절률을 가짐.</li>
          </ul>

          <h3>2.3 편광의 종류</h3>
          <p>
            진동의 끝점이 그리는 모양에 따라 <strong>선편광</strong>(직선),
            <strong> 원편광</strong>(원), <strong>타원편광</strong>(타원)으로
            나뉩니다. 원·타원편광은 서로 수직인 두 선편광이 위상차를 두고 더해진
            결과입니다.
          </p>

          <h3>2.4 말뤼스 법칙</h3>
          <p>
            투과축이 각도 <Tex>{"\\theta"}</Tex>만큼 어긋난 두 편광판을 빛이
            지날 때, 투과 세기는 다음을 따릅니다.
          </p>
          <TexBlock>{"I = I_0 \\cos^2\\theta"}</TexBlock>

          <MalusLaw />
          <p className="cap">
            검광자 B를 돌리면 투과광 밝기가 <Tex>{"\\cos^2\\theta"}</Tex>로
            변합니다. 0° → 100%, 45° → 50%, 90° → 0%(교차 소광).
          </p>

          <Explain q="왜 cosθ가 아니라 cos²θ 인가요?">
            <p>
              두 단계를 곱하기 때문입니다.
            </p>
            <p>
              <strong>① 벡터 사영 (cosθ).</strong> 첫 편광판을 지난 빛의 전기장
              진폭을 <Tex>{"E_0"}</Tex>라 하면, 검광자의 투과축 방향으로
              실제로 통과하는 성분은 사영된 값{" "}
              <Tex>{"E = E_0\\cos\\theta"}</Tex> 입니다.
            </p>
            <p>
              <strong>② 세기는 진폭의 제곱 (다시 한 번 제곱).</strong> 빛의
              세기는 진폭의 제곱에 비례합니다{" "}
              <Tex>{"\\big(I \\propto E^2\\big)"}</Tex>. 따라서
            </p>
            <TexBlock>{"I = E^2 = (E_0\\cos\\theta)^2 = I_0\\cos^2\\theta."}</TexBlock>
            <p>
              사영에서 한 번, 진폭→세기 변환에서 또 한 번, 모두 두 번의 곱이
              겹쳐 <Tex>{"\\cos^2"}</Tex>가 됩니다.
            </p>
            <div className="callout">
              <span className="tag">주의</span>
              <strong>자연광</strong>이 <em>첫</em> 편광판을 지날 때는 각도와
              무관하게 항상 세기가 절반으로 줄어듭니다(모든 방향에 대한
              <Tex>{"\\cos^2"}</Tex>의 평균이 <Tex>{"1/2"}</Tex>이기 때문).
              <Tex>{"\\cos^2\\theta"}</Tex> 법칙은 <em>이미 편광된</em> 빛이
              두 번째 편광판을 만날 때 적용됩니다.
            </div>
          </Explain>

          <h3>2.5 응용</h3>
          <ul>
            <li><strong>편광 선글라스</strong> — 수평으로 편광된 노면·수면 반사광을 수직 투과축으로 차단.</li>
            <li><strong>LCD 디스플레이</strong> — 두 편광판 사이 액정이 편광을 회전시켜 화소를 켜고 끔.</li>
            <li><strong>CPL 필터</strong> — 사진에서 반사를 줄이고 하늘을 진하게.</li>
            <li><strong>3D 영화</strong> — 좌·우 눈에 서로 다른(원)편광 영상을 분리해 전달.</li>
          </ul>
        </section>

        {/* ===== 3 ===== */}
        <section className="sec" id="sec3">
          <h2>3. 경계면에서의 빛: 반사·굴절의 기하</h2>
          <p className="lead">
            브루스터 각으로 가기 전에, 먼저 순수한 기하부터.
          </p>

          <h3>3.1 반사광과 굴절광 사이의 각 φ</h3>
          <p>
            빛이 경계면에 입사각 <Tex>{"\\theta_1"}</Tex>로 들어오면 반사광은
            같은 각으로 튕기고, 굴절광은 스넬 법칙{" "}
            <Tex>{"n_1\\sin\\theta_1 = n_2\\sin\\theta_2"}</Tex>를 따라 꺾입니다.
            이때 반사광과 굴절광이 이루는 각은
          </p>
          <TexBlock>{"\\varphi = 180^\\circ - (\\theta_1 + \\theta_2)"}</TexBlock>
          <p>
            입니다. 흔한 오해와 달리 이 각은 <strong>항상 90°가 아니라</strong>,
            입사각에 따라 연속적으로 변합니다.
          </p>

          <BrewsterReflection />
          <p className="cap">
            입사각을 바꾸면 <Tex>{"\\varphi"}</Tex>가 계속 달라집니다. 매질을
            바꿔 보면 브루스터 각도 함께 바뀝니다.
          </p>

          <h3>3.2 단 하나의 각 — φ = 90°</h3>
          <p>
            입사각을 키우다 보면 <Tex>{"\\varphi"}</Tex>가 정확히 90°가 되는
            지점이 <strong>딱 한 번</strong> 나타납니다. 즉 반사광과 굴절광이
            서로 수직이 되는 순간입니다. 바로 이 각이 다음 장의{" "}
            <strong>브루스터 각</strong>이며, 여기서 기하와 편광이 만납니다.
          </p>
        </section>

        {/* ===== 4 ===== */}
        <section className="sec" id="sec4">
          <h2>4. 브루스터 각: 기하와 편광이 만나는 지점</h2>

          <h3>4.1 정량 조건</h3>
          <p>
            <Tex>{"\\varphi = 90^\\circ"}</Tex> 조건{" "}
            <Tex>{"(\\theta_1 + \\theta_2 = 90^\\circ)"}</Tex>을 스넬 법칙에
            넣으면 <Tex>{"\\sin\\theta_2 = \\cos\\theta_1"}</Tex>이 되어,
          </p>
          <TexBlock>{"\\tan\\theta_B = \\frac{n_2}{n_1}"}</TexBlock>
          <p>
            라는 깔끔한 결과가 나옵니다. 공기→유리(<Tex>{"n_2=1.5"}</Tex>)면{" "}
            <Tex>{"\\theta_B \\approx 56.3^\\circ"}</Tex>입니다.
          </p>

          <h3>4.2 그 각에서 반사광은 완전 선편광</h3>
          <p>
            브루스터 각에서 반사된 빛은 <strong>s편광</strong>(입사면에 수직인
            성분)만 남아 완전히 선편광됩니다. p편광 성분은 반사되지 않습니다.
          </p>

          <h3>4.3 왜 그런가 — 쌍극자 복사 메커니즘</h3>
          <p>
            반사광의 정체는 사실 <strong>유리 속 전자들의 재방출</strong>입니다.
            입사한 빛의 전기장이 매질의 전자를 흔들면, 전자는 작은
            <strong> 쌍극자 안테나</strong>가 되어 빛을 다시 내보냅니다 — 이
            재방출이 곧 반사광입니다.
          </p>
          <p>
            그런데 쌍극자는 <strong>자신의 진동축 방향으로는 복사하지
            않습니다</strong>(복사 세기 ∝ <Tex>{"\\sin^2\\Theta"}</Tex>, 축
            방향에서 0). 전자는 굴절파의 전기장 방향으로 진동하는데, 브루스터
            각에서는 그 <strong>p편광 쌍극자의 축이 반사 방향과 정확히
            일치</strong>합니다. 그래서 그 방향으로는 p성분이 전혀 나가지 못하고
            소멸합니다.
          </p>

          <BrewsterDipole />
          <p className="cap">
            노란 잎 모양이 쌍극자의 <Tex>{"\\sin^2"}</Tex> 복사 패턴입니다.
            브루스터 각에서 반사 방향(파란 점)이 쌍극자 축의 영점에 닿아 p편광
            복사가 0이 됩니다.
          </p>

          <Explain q="이 쌍극자 직관과 정확한 프레넬 식은 어떤 관계인가요?">
            <p>
              쌍극자 그림은 반사된 p편광 세기가{" "}
              <Tex>{"\\cos^2(\\theta_1+\\theta_2)"}</Tex>에 비례한다는 직관을
              줍니다. <Tex>{"\\theta_1+\\theta_2 = 90^\\circ"}</Tex>일 때
              <Tex>{"\\cos90^\\circ = 0"}</Tex> 이므로 반사가 사라진다는 것이죠.
            </p>
            <p>
              엄밀한 전자기 동역학(프레넬 방정식)은 p편광 반사계수를 이렇게
              줍니다.
            </p>
            <TexBlock>{"r_p = \\frac{\\tan(\\theta_1-\\theta_2)}{\\tan(\\theta_1+\\theta_2)}"}</TexBlock>
            <p>
              <Tex>{"\\theta_1+\\theta_2 \\to 90^\\circ"}</Tex>이면 분모{" "}
              <Tex>{"\\tan(\\theta_1+\\theta_2) \\to \\infty"}</Tex>이므로{" "}
              <Tex>{"r_p \\to 0"}</Tex> — 두 그림이 같은 결론에 도달합니다.
            </p>
            <p>
              차이는 <strong>“세기 0”의 위치는 같지만 그 부근의 모양은 다르다</strong>는
              점입니다. <Tex>{"\\cos^2(\\theta_1+\\theta_2)"}</Tex>는 정성적
              직관, 프레넬 식은 모든 각에서의 정확한 진폭을 줍니다. 쌍극자
              그림은 <em>왜 0이 되는가</em>를, 프레넬 식은 <em>정확히 얼마인가</em>를
              설명합니다.
            </p>
          </Explain>
        </section>

        {/* ===== 5 ===== */}
        <section className="sec" id="sec5">
          <h2>5. 개념 정리: 브루스터 “법칙”의 위상</h2>

          <h3>5.1 법칙의 본체</h3>
          <p>
            브루스터 법칙의 실험적 본체는 <Tex>{"\\tan\\theta_B = n_2/n_1"}</Tex>{" "}
            하나입니다. 브루스터가 측정으로 발견한 관계죠.
          </p>

          <h3>5.2 세 동치 조건과 연결 고리</h3>
          <p>
            브루스터 각을 규정하는 세 가지 진술은 동치이지만, 서로를 잇는 데에는
            <strong> 각기 다른 물리</strong>가 필요합니다.
          </p>
          <div className="tri">
            <div className="node">
              <b><Tex>{"\\tan\\theta_B = n_2/n_1"}</Tex></b>
              브루스터의 실험식
            </div>
            <div className="arrow">↕ 스넬 법칙이 연결 — 순수한 방향 기하만 사용</div>
            <div className="node">
              <b>반사 ⊥ 굴절 (<Tex>{"\\theta_1+\\theta_2=90^\\circ"}</Tex>)</b>
              기하학적 조건
            </div>
            <div className="arrow">
              ↓ 프레넬 / 전자기 동역학이 추가 — 스넬 법칙에는 없는 정보
            </div>
            <div className="node">
              <b>반사광이 완전 선편광</b>
              물리적 결과 (쌍극자 복사)
            </div>
          </div>
          <p>
            즉 위쪽 두 칸은 <strong>방향의 기하</strong>(스넬 법칙)만으로 오가지만,
            “완전 편광”이라는 결론은 기하만으로는 나오지 않고{" "}
            <strong>전자기 동역학</strong>이 더해져야 비로소 따라옵니다.
          </p>

          <h3>5.3 오해 교정</h3>
          <div className="callout">
            <span className="tag">자주 하는 오해</span>
            “브루스터 각에서만 반사광이 편광된다”는 말은 부정확합니다. 반사광은
            <strong> 모든 입사각에서 부분 편광</strong>되어 있고, 브루스터
            각에서만 <strong>편광도가 100%</strong>(완전 편광)에 도달할 뿐입니다.
            “편광 ON/OFF”가 아니라 “<strong>편광도가 최대가 되는 각</strong>”으로
            이해해야 합니다.
          </div>
        </section>

        <footer className="foot">
          <p>
            빛·파동·편광 인터랙티브 가이드 · 4개의 시뮬레이션은 슬라이더와 매질
            선택으로 직접 조작할 수 있습니다.
          </p>
        </footer>
      </main>
    </div>
  );
}
