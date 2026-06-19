const projects = [
  {
    category: "ai",
    title: "딥페이크 탐지 이진 분류 모델",
    summary:
      "실제 영상과 생성형 AI 영상을 구분하기 위해 프레임 분리, 얼굴 영역 크롭, 노이즈 제거를 거쳐 학습 데이터 품질을 개선했습니다.",
    tags: ["Python", "AI", "Binary Classification"],
    thumb: "ai-detect",
  },
  {
    category: "ai",
    title: "119 신고 건수 예측",
    summary:
      "소방 데이터와 기상청 날씨 데이터를 결합하고 12개 지점별 전처리를 구성해 LSTM 기반 시계열 예측 모델을 구현했습니다.",
    tags: ["TensorFlow", "Keras", "LSTM"],
    thumb: "forecast",
  },
  {
    category: "db",
    title: "헬스케어 DB 설계",
    summary:
      "사용자, 신체 정보, 활동, 수면, 영양, 체중 엔터티를 분리하고 PK/FK 관계를 설정한 관계형 데이터베이스를 설계했습니다.",
    tags: ["MySQL", "ERD", "SQL"],
    thumb: "database",
  },
  {
    category: "design",
    title: "프로젝트 리팩토링 가시화",
    summary:
      "현재 진행 중인 캡스톤 디자인 프로젝트로, 기능 흐름과 데이터 흐름을 정리하고 오류와 비효율을 개선 지점으로 가시화합니다.",
    tags: ["Refactoring", "Visualization", "Team Project"],
    thumb: "refactor",
  },
  {
    category: "db",
    title: "Java 객체지향 프로그래밍",
    summary:
      "클래스, 객체, 상속, 캡슐화 개념을 활용해 기능을 모듈화하고 유지보수하기 쉬운 애플리케이션 구조를 학습했습니다.",
    tags: ["Java", "OOP", "System"],
    thumb: "java",
  },
];

const projectGrid = document.querySelector("#projectGrid");
const categoryButtons = [...document.querySelectorAll(".tab")];

function createProjectCard(project) {
  const card = document.createElement("article");
  card.className = "project-card";
  card.dataset.category = project.category;

  const thumb = document.createElement("div");
  thumb.className = `project-thumb ${project.thumb}`;
  thumb.setAttribute("aria-hidden", "true");

  const content = document.createElement("div");
  content.className = "project-content";

  const title = document.createElement("h3");
  title.textContent = project.title;

  const tags = document.createElement("div");
  tags.className = "project-tags";
  tags.replaceChildren(
    ...project.tags.map((tag) => {
      const item = document.createElement("span");
      item.textContent = tag;
      return item;
    }),
  );

  const summary = document.createElement("p");
  summary.textContent = project.summary;

  content.replaceChildren(title, tags, summary);
  card.replaceChildren(thumb, content);

  return card;
}

function renderProjects(category = "all") {
  const visibleProjects =
    category === "all" ? projects : projects.filter((project) => project.category === category);

  projectGrid.replaceChildren(...visibleProjects.map(createProjectCard));
}

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    categoryButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    renderProjects(button.dataset.category);
  });
});

renderProjects();
