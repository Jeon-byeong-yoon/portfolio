const projects = [
  {
    categories: ["ai", "competition"],
    featured: true,
    badge: "LG AI연구원 해커톤 · Phase 2",
    title: "LG Aimers 9기 — 야구 투구 제구 성공 확률 예측",
    role: "3인 팀 · 모델링 · 실험 설계 · 제출 파이프라인",
    summary:
      "KBO 리그 실제 투구 데이터와 Trackman 측정 로그로 투구의 제구 성공 확률을 예측하는 이진 분류 과제입니다. 공식 Random Forest 베이스라인(Public 900.7385)에서 출발해 약 210차례의 실험을 거쳐, 6개 모델 가중 블렌드 위에 세그먼트 보정층을 얹은 구조로 Public 1083.2462에 도달했습니다.",
    metrics: [
      { value: "1083.2462", label: "최종 Public Score" },
      { value: "+182.5", label: "베이스라인 대비" },
      { value: "210회", label: "누적 실험 V1~V208" },
      { value: "6성분", label: "가중 블렌드 + 보정층" },
    ],
    highlights: [
      "Form(HistGradientBoosting) 0.32 · CatBoost 0.27 · 엔티티 임베딩 신경망 0.20 · Context 0.14 · Factorization 0.07로 가중 블렌드를 구성하고, 볼카운트·투수 경험 구간·좌우스플릿 축으로 잔차를 교정하는 보정층을 설계했습니다.",
      "투수 좌우스플릿 × 2스트라이크 교차 세그먼트 보정이 단일 아이디어 최대 이득(누적 +14.65점)이었습니다. 두 번 닫혔다고 판단했던 보정층을 상호작용 세그먼트 전수 조사로 되살린 결과입니다.",
      "확률적 성분 다섯 개를 여러 시드로 평균해 배포 분산을 줄여 누적 +15.38점을 얻었고, 성분별 폴드 편차로 평균화의 기대 이득을 사전에 예측하는 규칙을 세웠습니다.",
      "2022·2023·2024 시간순 폴드 검증을 리더보드와 짝지어 효과의 부호와 유의성을 오차막대로 측정했고, 이 판정 규칙이 16번 중 14번 리더보드 방향을 맞혔습니다.",
      "평가 서버와 동일한 numpy 1.26.4 환경에서만 아티팩트를 저장하도록 호환성 게이트를 두어, 모델 로드 실패로 제출이 무효화되는 문제를 사전에 차단했습니다.",
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
    badge: "해커톤 2차 본선 · 5인 팀",
    title: "착용형 UWB 실내 낙상 관제 시스템",
    role: "SW 2명 중 측위 파이프라인 · 경보 상태 UX 담당",
    summary:
      "노인요양시설을 대상으로 한 실내 위치·낙상 관제 시스템입니다. 카메라 대신 착용형 UWB 태그가 실내 위치를, 내장 가속도계가 낙상을 감지합니다. CCTV가 법으로 금지된 화장실·목욕실까지 관제 범위에 넣고, 사생활 구역에서는 좌표를 폐기해 낙상만 감지합니다. 저는 태그 프레임 수신부터 화면 경보까지의 서버 측위 파이프라인과 경보 상태 관리를 맡았습니다.",
    metrics: [
      { value: "50Hz", label: "원시 거리·가속도 수신" },
      { value: "2앵커", label: "반평면 삼각측량" },
      { value: "1mm", label: "좌표 복원 오차 검증" },
      { value: "115개", label: "통과 테스트 (누적)" },
    ],
    highlights: [
      "실기기가 없는 동안에도 백엔드를 개발할 수 있도록 50Hz 원시 거리·가속도 생성기와 NDJSON 리플레이 하네스를 먼저 만들었습니다. 하드웨어 일정과 분리해 측위 파이프라인을 완성할 수 있었습니다.",
      "POST /ingest 수신부에서 스키마 검증을 분리하고 오류 계약을 400·413·415·405로 구분했습니다. Content-Length가 없어도 실제 수신 바이트를 세어 본문 크기를 제한합니다.",
      "방향 센서 없이 두 앵커까지의 거리만으로 평면 좌표를 구하는 반평면 삼각측량을 구현했습니다. 측정 노이즈로 두 원이 만나지 않는 프레임은 기준선 위로 클램프하고, 앵커가 하나뿐이면 좌표를 방출하지 않습니다.",
      "초당 50회 들어오는 좌표의 제자리 떨림을 태그별 이동평균으로 억제했습니다. 태그마다 윈도우를 격리해 여러 대상의 좌표가 섞이지 않게 했습니다.",
      "경보 UX를 DOM과 분리된 상태 저장소로 재구성했습니다. 후보에서 확진으로 넘어가며 이벤트 ID가 바뀌어도 태그 ID로 한 lifecycle에 묶고, 경보를 종료하는 권한은 관제사에게만 두었습니다.",
      "서버 진입점을 TypeScript로 전환하고, 앵커 설정을 환경변수에서 필수 실행 인자로 옮겼습니다. 잘못된 앵커 ID·거리·반평면은 서버가 기동하기 전에 거부합니다.",
    ],
    tags: ["TypeScript", "Node.js", "UWB", "Trilateration", "SSE", "Signal Smoothing", "node:test"],
    thumb: "fallwatch",
  },
  {
    categories: ["ai"],
    title: "딥페이크 탐지 이진 분류 모델",
    summary:
      "실제 영상과 생성형 AI 영상을 구분하기 위해 프레임 분리, 얼굴 영역 크롭, 노이즈 제거를 거쳐 학습 데이터 품질을 개선했습니다.",
    tags: ["Python", "AI", "Binary Classification"],
    thumb: "ai-detect",
  },
  {
    categories: ["ai"],
    title: "119 신고 건수 예측",
    summary:
      "소방 데이터와 기상청 날씨 데이터를 결합하고 12개 지점별 전처리를 구성해 LSTM 기반 시계열 예측 모델을 구현했습니다.",
    tags: ["TensorFlow", "Keras", "LSTM"],
    thumb: "forecast",
  },
  {
    categories: ["db"],
    title: "헬스케어 DB 설계",
    summary:
      "사용자, 신체 정보, 활동, 수면, 영양, 체중 엔터티를 분리하고 PK/FK 관계를 설정한 관계형 데이터베이스를 설계했습니다.",
    tags: ["MySQL", "ERD", "SQL"],
    thumb: "database",
  },
  {
    categories: ["design"],
    title: "프로젝트 리팩토링 가시화",
    summary:
      "현재 진행 중인 캡스톤 디자인 프로젝트로, 기능 흐름과 데이터 흐름을 정리하고 오류와 비효율을 개선 지점으로 가시화합니다.",
    tags: ["Refactoring", "Visualization", "Team Project"],
    thumb: "refactor",
  },
  {
    categories: ["db"],
    title: "Java 객체지향 프로그래밍",
    summary:
      "클래스, 객체, 상속, 캡슐화 개념을 활용해 기능을 모듈화하고 유지보수하기 쉬운 애플리케이션 구조를 학습했습니다.",
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
