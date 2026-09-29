const projects = [
  {
    categories: ["internship"],
    featured: true,
    badge: "산학 인턴십 · 2026.07.27 ~ 09.30 · 홍익대 Fold팀",
    title: "리크 검사 대시보드 — 한일전기(주) 세종공장",
    role: "5인 팀 · 프론트엔드 메인 — 품질 분석 화면 6종과 알림 계산 계층 담당",
    summary:
      "펌프 리크 검사 결과가 일일보고서 엑셀로만 쌓여 추세를 볼 수 없던 것을, 모델별 불량률과 평소와 다른 변화를 짚어 주는 Windows 데스크톱 앱으로 만들었습니다. 저는 PySide6로 만든 품질 분석 화면 여섯과 알림을 만드는 계산 계층을 맡았습니다. 판정은 Laney p′ 관리도 원 공식을 그대로 쓰고, 앱은 표시만 하며 판단은 담당자가 합니다.",
    metrics: [
      { value: "6개", label: "PySide6 화면 구현" },
      { value: "8종", label: "항목별 관리도 판정" },
      { value: "766개", label: "전체 통과 시험" },
      { value: "108,124행", label: "기준선 재산출" },
    ],
    highlights: [
      "관리도는 QtCharts로 그리라고 명세에 적혀 있었지만 QPainter로 직접 그렸습니다. 중심선·주의선·관리상한 셋에 검사 수량 막대와 아직 안 끝난 주 표시까지 한 그림에서 맞춰야 하는데, 차트 위젯으로는 축이 따로 놀았습니다. 명세와 어긋나는 결정이라 개정 여부를 확인받는 항목으로 따로 적어 뒀습니다.",
      "현장 표시 화면은 집계를 한 줄도 하지 않습니다. 기본 화면이 이미 낸 주 판정과 모델별 실적을 받아 큰 글자로 다시 세우기만 합니다. 같은 값을 두 곳에서 만들면 현장 화면과 담당자 화면이 서로 다른 숫자를 말하게 됩니다.",
      "측정값 화면에서 절대값 999는 계측 한계 초과 코드라 값에서 빼되 건수는 반드시 적습니다. 리크 NG의 상당수가 거기 몰려 있어서 빼고 적지 않으면 화면이 NG를 실제보다 적게 보이는데, 음수는 계측 한계와 달리 실측값이라 그대로 둡니다.",
      "알림 등급이 주의에서 경고로 다시 판정되면 등급을 올리고 읽음을 되돌리게 했습니다. 명세에 없어서 제가 정한 규칙이고, 반대로 내려가는 쪽은 건드리지 않습니다. 한 번 경고로 본 주를 알림이 조용히 낮추면 담당자가 확인한 근거가 사라지기 때문이고, 이유를 모듈 첫머리에 적어 뒀습니다.",
      "알림은 스스로 판정하지 않고 관리도가 낸 결과를 옮기기만 합니다. 알림이 자기 기준을 가지면 헤더바 배지의 등급과 이상 경보 화면의 등급이 갈립니다.",
      "화면 점검용 데이터를 넣는 스크립트에서 판정 컬럼 하나만 싣고 돌렸다가, 이상 경보의 정상이 47건에서 40건으로 줄고 판정 불가가 6건 생기는 것을 보고 잡았습니다. 적재한 날짜는 기준선을 덮기 때문에 싣지 않은 항목은 그날 검사 0건이 됩니다. 여덟 항목을 모두 실어야 했습니다.",
    ],
    tags: ["Python", "PySide6", "QPainter", "SQLite", "pandas", "SPC", "unittest"],
    thumb: "leakdash",
  },
  {
    categories: ["ai", "competition"],
    featured: true,
    badge: "LG AI연구원 해커톤 · Phase Ⅱ",
    title: "LG Aimers 9기 — 야구 투구 제구 성공 확률 예측",
    role: "3인 팀 · 모델링 · 실험 설계 · 제출 파이프라인",
    summary:
      "KBO 리그 투구 데이터와 Trackman 측정 로그로 제구 성공 확률을 맞히는 이진 분류 과제입니다. 공식 Random Forest 베이스라인이 Public 900.7385였고, 210차례쯤 실험한 끝에 1083.2462까지 올렸습니다. 최종 구조는 6개 모델 가중 블렌드에 세그먼트 보정층을 얹은 것입니다.",
    metrics: [
      { value: "1083.2462", label: "최종 Public Score" },
      { value: "+182.5", label: "베이스라인 대비" },
      { value: "210회", label: "누적 실험 V1~V208" },
      { value: "6성분", label: "가중 블렌드 + 보정층" },
    ],
    highlights: [
      "Form(HistGradientBoosting) 0.32 · CatBoost 0.27 · 엔티티 임베딩 신경망 0.20 · Context 0.14 · Factorization 0.07로 블렌드 가중치를 잡았습니다. 그 위에 볼카운트·투수 경험 구간·좌우스플릿 축으로 잔차를 깎는 보정층을 얹었습니다.",
      "제일 크게 먹힌 단일 아이디어는 투수 좌우스플릿 × 2스트라이크 교차 세그먼트 보정이었습니다. 누적 +14.65점. 두 번이나 닫혔다고 봤던 보정층을 상호작용 세그먼트 전수 조사로 되살린 것입니다.",
      "확률적 성분 다섯 개를 여러 시드로 평균 내 배포 분산을 줄였습니다. 누적 +15.38점입니다. 성분별 폴드 편차만 보면 평균을 내서 얼마나 벌지 미리 가늠할 수 있었습니다.",
      "2022·2023·2024 시간순 폴드 검증을 리더보드와 짝지어 효과의 부호와 유의성을 오차막대로 쟀는데, 이렇게 만든 판정 규칙이 나중에 16번 중 14번 리더보드 방향을 맞혔습니다. 쓸 실험과 버릴 실험을 여기서 갈랐습니다.",
      "평가 서버와 같은 numpy 1.26.4 환경에서만 아티팩트를 저장하도록 게이트를 걸었습니다. 모델을 못 읽어서 제출이 통째로 날아가는 일을 막으려고 둔 장치입니다.",
    ],
    tags: ["Python", "CatBoost", "HistGradientBoosting", "Entity Embedding", "Ensemble", "Calibration", "Time-Series CV"],
    thumb: "aimers",
    links: [
      { label: "GitHub 레포", href: "https://github.com/Jeon-byeong-yoon/lg-aimers" },
      {
        label: "실험 기록 문서",
        href: "https://github.com/Jeon-byeong-yoon/lg-aimers/tree/main/docs",
      },
    ],
  },
  {
    categories: ["competition", "db"],
    featured: true,
    badge: "2026 세종 AX 해커톤 본선 · 5인 팀",
    title: "착용형 UWB 실내 낙상 관제 시스템",
    role: "SW 2명 중 측위 파이프라인 · 경보 상태 UX 담당",
    summary:
      "노인요양시설에 쓰는 실내 위치·낙상 관제 시스템입니다. 카메라 대신 착용형 UWB 태그가 위치를, 내장 가속도계가 낙상을 잡습니다. CCTV를 법으로 못 다는 화장실·목욕실까지 범위에 들어가고, 사생활 구역에서는 좌표를 버리고 낙상만 감지합니다. 저는 태그 프레임 수신부터 화면 경보까지 서버 측위 파이프라인과 경보 상태 관리를 맡았습니다.",
    metrics: [
      { value: "50Hz", label: "원시 거리·가속도 수신" },
      { value: "2앵커", label: "반평면 삼각측량" },
      { value: "1mm", label: "좌표 복원 오차 검증" },
      { value: "115개", label: "통과 테스트 (누적)" },
    ],
    highlights: [
      "실기기가 오기 전에 50Hz 원시 거리·가속도 생성기와 NDJSON 리플레이 하네스를 먼저 만들었습니다. 덕분에 하드웨어 일정과 상관없이 측위 파이프라인을 끝냈습니다.",
      "POST /ingest 수신부에서 스키마 검증을 떼어내고 오류 계약을 400·413·415·405로 나눴습니다. Content-Length가 없어도 실제로 받은 바이트를 세어 본문 크기를 막습니다.",
      "방향 센서 없이 두 앵커까지의 거리만으로 평면 좌표를 구하는 반평면 삼각측량을 짰고, 노이즈 때문에 두 원이 안 만나는 프레임은 기준선 위로 붙이고 앵커가 하나뿐이면 좌표를 아예 내보내지 않게 했습니다. 틀린 좌표보다 없는 좌표가 낫습니다.",
      "초당 50번 들어오는 좌표는 그대로 그리면 제자리에서 떱니다. 태그별 이동평균으로 눌렀고, 윈도우를 태그마다 따로 둬서 여러 사람의 좌표가 섞이지 않게 했습니다.",
      "경보 UX를 DOM과 떼어놓은 상태 저장소로 다시 짰습니다. 후보에서 확진으로 넘어가며 이벤트 ID가 바뀌어도 태그 ID로 한 lifecycle에 묶습니다. 경보를 끄는 권한은 관제사에게만 있습니다.",
      "서버 진입점을 TypeScript로 옮기고 앵커 설정을 환경변수에서 필수 실행 인자로 뺐는데, 값이 틀린 채로 돌면 사고 기록에 엉뚱한 층이 박히기 때문에 앵커 ID·거리·반평면이 하나라도 어긋나면 서버가 아예 뜨지 않게 했습니다.",
    ],
    tags: ["TypeScript", "Node.js", "UWB", "Trilateration", "SSE", "Signal Smoothing", "node:test"],
    thumb: "fallwatch",
  },
  {
    categories: ["ai"],
    featured: true,
    badge: "개인 프로젝트 · 운영 중",
    title: "KBO AI Brief — 야구 경기 정보 대시보드",
    role: "혼자 기획하고 개발",
    summary:
      "KBO 리그 경기를 실시간으로 따라가고, 2008년부터의 기록실과 우승 확률 예측까지 한 화면에서 보는 대시보드입니다. 경기 상세는 볼카운트와 주자 상황을 10초마다 갱신하고, 구장에서 측정한 투구 추적 데이터로 투수별 투구 분포를 스트라이크존 위에 그립니다. 데이터는 전부 네이버 스포츠의 비공개 API에서 오는데 문서가 없어서, 응답을 하나씩 열어 보며 맞췄습니다.",
    metrics: [
      { value: "20,000회", label: "우승 확률 시뮬레이션" },
      { value: "9/9", label: "2017~2025 예측 1순위 적중" },
      { value: "85개", label: "계산 함수 테스트" },
      { value: "15개", label: "API 라우트" },
    ],
    highlights: [
      "우승 확률 모델이 여섯 시즌 동안 조용히 망가져 있었습니다. 네이버가 WAR을 2017년부터만 주는데 없는 값이 0으로 와서, 2013년 이전에는 열 팀의 선수 뎁스가 전부 0.299로 같아졌습니다. 가중치 30%짜리 항이 팀을 구분하지 못한 겁니다. 이미 '과거 18시즌 검증'이라고 문서에 써 둔 뒤에 찾았고, 그 18시즌은 사실 서로 다른 세 모델이었습니다. 없는 항을 상수로 때우는 대신 남은 항끼리 가중치를 다시 정규화하게 고치고, 검증도 뎁스가 온전한 2017~2025 아홉 시즌으로 다시 냈습니다.",
      "정규시즌 순위를 승÷(승+패)로 계산하고 있었는데 2009년만 어긋났습니다. 그해는 무승부를 승률에 넣던 해라, 실제 1위는 KIA(81승 48패 4무, .609)인데 제 계산은 SK를 1위로 올리고 있었습니다. 연도별로 규정을 하드코딩하는 대신 두 규정을 모두 계산해 네이버가 준 값과 맞는 쪽을 고르게 했습니다.",
      "모든 네이버 요청에 브라우저인 척하는 User-Agent와 Referer를 붙이고 있었습니다. 정말 필요한지 재보니 헤더를 전부 빼도 200이 옵니다. 막혀 있지도 않은데 숨기고 있었던 겁니다. 13개 파일에 흩어져 있던 사본을 한 곳으로 모으고 앱 이름을 그대로 보내도록 바꿨습니다.",
      "계산 함수 테스트 85개를 쓰고 나서, 통과만 하는 테스트는 아닌지 보려고 앞서 겪은 버그 네 개를 코드에 다시 심어 봤습니다. 이닝 문자열을 Number로 파싱하기, 뎁스가 없을 때 재정규화 빼기, 2009년 승률 규정 빼기, 매직넘버를 승수 기준으로 두기. 네 개 전부 빨간불이 떴습니다.",
      "일정 API가 시범경기·정규시즌·포스트시즌을 구분해 주지 않습니다. 다 더하면 2026년 종료 경기가 694건인데 정규시즌은 634건이라, 순위표의 공식 승·패·무와 정확히 맞아떨어지는 연속 구간을 찾아 잘라냅니다. 못 찾으면 집계를 포기합니다. 틀린 숫자를 띄우는 것보다 낫습니다.",
      "선수 비교는 시대가 다른 기록을 그대로 맞대지 않고, 그 선수가 뛴 각 시즌의 리그 평균으로 보정한 ERA+와 OPS+를 함께 놓습니다. 다만 누가 더 나은 선수인지는 앱이 정하지 않는데, 종합 점수로 뭉뚱그리면 가중치를 제가 정한 셈이 되고 그럴 근거가 없기 때문입니다.",
    ],
    tags: ["Next.js 16", "React 19", "TypeScript", "Tailwind", "OpenAI API", "Monte Carlo", "Vitest"],
    thumb: "kbo",
    links: [
      { label: "라이브 데모", href: "https://kbo-ai-brief-three.vercel.app" },
      { label: "GitHub 레포", href: "https://github.com/Jeon-byeong-yoon/kbo-ai-brief" },
      {
        label: "예측 모델 문서",
        href: "https://github.com/Jeon-byeong-yoon/kbo-ai-brief/blob/main/docs/PREDICTION.md",
      },
    ],
  },
  {
    categories: ["ai"],
    title: "딥페이크 탐지 이진 분류 모델",
    summary:
      "실제 영상과 생성형 AI 영상을 가르는 모델입니다. 프레임을 분리하고 얼굴 영역만 크롭한 뒤 노이즈를 지워 학습 데이터 품질을 올렸습니다.",
    tags: ["Python", "AI", "Binary Classification"],
    thumb: "ai-detect",
  },
  {
    categories: ["ai"],
    title: "119 신고 건수 예측",
    summary:
      "소방 데이터에 기상청 날씨 데이터를 붙이고, 12개 지점마다 전처리를 따로 짜서 LSTM 시계열 예측 모델을 만들었습니다.",
    tags: ["TensorFlow", "Keras", "LSTM"],
    thumb: "forecast",
  },
  {
    categories: ["db"],
    title: "헬스케어 DB 설계",
    summary:
      "사용자, 신체 정보, 활동, 수면, 영양, 체중을 각각 엔터티로 나누고 PK/FK 관계를 잡아 관계형 데이터베이스를 설계했습니다.",
    tags: ["MySQL", "ERD", "SQL"],
    thumb: "database",
  },
  {
    categories: ["design"],
    featured: true,
    badge: "종합설계 캡스톤디자인 · 진행 중",
    title: "CodeVi — 코드 구조 시각화 플랫폼",
    role: "품질 메트릭 API와 상세 시각화 화면 담당",
    summary:
      "소스 코드에서 AST를 뽑아 디렉터리부터 함수까지의 계층을 인터랙티브 그래프로 그리고, 복잡도와 결합도 같은 품질 지표를 함께 얹는 플랫폼입니다. Jenkins가 빌드를 마치면 웹훅으로 스냅샷이 쌓입니다. 저는 백엔드의 품질 메트릭 API와, 그 결과를 그리는 상세 시각화 화면을 맡았습니다.",
    metrics: [
      { value: "4종", label: "AST 추출 언어" },
      { value: "9개", label: "코드 품질 메트릭" },
      { value: "2,600개", label: "검증한 노드 규모" },
      { value: "80노드", label: "초기 펼침 예산" },
    ],
    highlights: [
      "노드가 3,000개를 넘는 스냅샷에서 dagre가 형제를 전부 한 줄로 늘어놓아, 디렉터리 140개만으로도 폭이 수천 픽셀짜리 띠가 되고 화면을 맞추면 아무것도 읽히지 않았습니다. 자식 블록을 폭 기준으로 줄바꿈해 블록 비율을 2.4 대 1쯤으로 유지하는 레이아웃을 따로 짜서 갈아 끼웠습니다.",
      "전체 그래프는 스냅샷당 한 번만 계산하고 화면에는 펼쳐진 노드만 배치합니다. 처음에는 80노드 예산 안에서 디렉터리를 너비 우선으로 자동으로 펼쳐 두고, 노드의 +N 버튼이나 더블클릭으로 열고 닫습니다.",
      "검색은 접혀 있는 노드까지 포함해 전체 그래프를 훑습니다. 찾은 노드의 조상 경로를 자동으로 펼친 뒤 그 노드와 직계 자식이 화면에 꽉 차도록 맞춥니다. 접혀서 안 보이면 못 찾은 것이나 마찬가지입니다.",
      "처음 구현은 화면이 통째로 빈 채 Maximum update depth exceeded로 죽었습니다. React Flow가 prop의 identity가 바뀔 때마다 스토어를 동기로 갱신하는데, 페이지가 인라인 콜백을 넘기고 있어 렌더마다 순환이 돌았습니다. 넘기는 콜백을 전부 고정하고 객체 prop을 모듈 상수로 올려 끊었습니다.",
      "펼침이나 검색 직후 화면 맞추기가 빈 화면으로 가던 것은, 새로 추가된 노드가 아직 측정되기 전에 실행돼 경계가 어긋난 탓이었습니다. 맞추기 요청을 순번 상태로 두고 대상 노드의 폭이 채워진 뒤에만 소비하게 했습니다.",
      "백엔드에서는 API Key 인증 가드와 분석 실행·조회 API로 메트릭 서비스를 세우고, 에이전트가 같은 경로를 쓰도록 stdio 기반 MCP 래퍼까지 붙였습니다. 그 전에는 카카오 소셜 로그인과 전역 응답 포맷 통일, ZIP 업로드 분석 프록시를 맡았습니다.",
    ],
    tags: ["NestJS", "React 19", "TypeScript", "React Flow", "Tree-sitter", "MySQL", "MCP"],
    thumb: "codevi",
  },
  {
    categories: ["db"],
    title: "Java 객체지향 프로그래밍",
    summary:
      "클래스, 객체, 상속, 캡슐화를 써서 기능을 나누고, 나중에 고치기 쉬운 구조로 만드는 법을 익혔습니다.",
    tags: ["Java", "OOP", "System"],
    thumb: "java",
  },
];

const projectGrid = document.querySelector("#projectGrid");
const categoryButtons = [...document.querySelectorAll(".tab")];

function createMetricList(metrics) {
  const list = document.createElement("dl");
  list.className = "project-metrics";

  metrics.forEach((metric) => {
    const item = document.createElement("div");
    const value = document.createElement("dt");
    value.textContent = metric.value;
    const label = document.createElement("dd");
    label.textContent = metric.label;
    item.replaceChildren(value, label);
    list.append(item);
  });

  return list;
}

function createHighlightList(highlights) {
  const list = document.createElement("ul");
  list.className = "project-highlights";
  list.replaceChildren(
    ...highlights.map((text) => {
      const item = document.createElement("li");
      item.textContent = text;
      return item;
    }),
  );

  return list;
}

function createLinkList(links) {
  const list = document.createElement("div");
  list.className = "project-links";
  list.replaceChildren(
    ...links.map((link) => {
      const anchor = document.createElement("a");
      anchor.href = link.href;
      anchor.target = "_blank";
      anchor.rel = "noopener noreferrer";
      anchor.textContent = link.label;

      const arrow = document.createElement("span");
      arrow.textContent = "↗";
      anchor.append(" ", arrow);

      return anchor;
    }),
  );

  return list;
}

function createProjectCard(project) {
  const card = document.createElement("article");
  card.className = project.featured ? "project-card is-featured" : "project-card";
  card.dataset.category = project.categories.join(" ");

  const thumb = document.createElement("div");
  thumb.className = `project-thumb ${project.thumb}`;
  thumb.setAttribute("aria-hidden", "true");

  const content = document.createElement("div");
  content.className = "project-content";

  const blocks = [];

  if (project.badge) {
    const badge = document.createElement("p");
    badge.className = "project-badge";
    badge.textContent = project.badge;
    blocks.push(badge);
  }

  const title = document.createElement("h3");
  title.textContent = project.title;
  blocks.push(title);

  if (project.role) {
    const role = document.createElement("p");
    role.className = "project-role";
    role.textContent = project.role;
    blocks.push(role);
  }

  const tags = document.createElement("div");
  tags.className = "project-tags";
  tags.replaceChildren(
    ...project.tags.map((tag) => {
      const item = document.createElement("span");
      item.textContent = tag;
      return item;
    }),
  );
  blocks.push(tags);

  const summary = document.createElement("p");
  summary.textContent = project.summary;
  blocks.push(summary);

  if (project.metrics) {
    blocks.push(createMetricList(project.metrics));
  }

  if (project.highlights) {
    blocks.push(createHighlightList(project.highlights));
  }

  if (project.links) {
    blocks.push(createLinkList(project.links));
  }

  content.replaceChildren(...blocks);
  card.replaceChildren(thumb, content);

  return card;
}

function renderProjects(category = "all") {
  const visibleProjects =
    category === "all"
      ? projects
      : projects.filter((project) => project.categories.includes(category));

  projectGrid.replaceChildren(...visibleProjects.map(createProjectCard));
}

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    categoryButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    renderProjects(button.dataset.category);
  });
});

renderProjects();
