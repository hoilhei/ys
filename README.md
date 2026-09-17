# 영신교회 React 웹사이트

GitHub Pages 배포용으로 정리한 Vite + React 프로젝트입니다.

## 로컬 실행

```bash
npm install
npm run dev
```

## GitHub Pages 배포

1. GitHub에서 Public 저장소를 만듭니다.
2. 이 폴더 안의 모든 파일과 폴더를 저장소에 올립니다.
3. 저장소에서 `Settings > Pages`로 이동합니다.
4. `Build and deployment > Source`를 `GitHub Actions`로 선택합니다.
5. `Actions` 탭에서 `Deploy React site to GitHub Pages`가 완료될 때까지 기다립니다.
6. 완료된 작업의 `deploy` 단계 또는 `Settings > Pages`에 표시되는 주소를 엽니다.

기본 주소 형식은 `https://사용자아이디.github.io/저장소이름/`입니다.

## 포함하지 않은 폴더

- `node_modules`: `npm install`로 다시 생성됩니다.
- `dist`: `npm run build` 또는 GitHub Actions에서 다시 생성됩니다.

## 이미지 경로

정적 이미지는 `public/images`에 들어 있습니다. GitHub의 대소문자 구분에 맞게 `.jpg` 확장자를 정리했습니다.

## 스타일과 반응형 규칙

- `src/index.css`: 공통 서체·컴포넌트 스타일 다음에 반응형 규칙을 모아 관리합니다.
- `src/components/faith-journey.css`: 신앙 여정 컴포넌트 전용 스타일입니다.
- 모바일은 767px 이하, 태블릿 공통은 768px 이상, 데스크톱은 1024px 이상입니다. 1024–1366px의 터치 기기는 기존 디자인에 맞춰 태블릿 규칙도 적용합니다.
- 본문 글자 크기는 `rem`, 화면에 따라 변해야 하는 큰 여백과 제목은 `clamp()`를 사용합니다. 공통 콘텐츠 폭과 섹션 간격은 `:root`의 `--content-max`, `--section-space` 등으로 관리합니다.
- 글자 크기는 8·10·12·14·16·18·20·24·28·32·36·40·48·60px에 대응하는 공통 토큰만 사용합니다. 화면에 따라 변하는 제목과 본문은 `--font-size-fluid-*` 역할 토큰을 사용하고 임의의 소수 크기를 추가하지 않습니다.
- 미디어쿼리 기준점, 1px 테두리와 그림자, 아이콘 및 최소 터치 영역처럼 물리적으로 고정되어야 하는 값만 `px`로 유지합니다.
- Tailwind 유틸리티는 CSS 레이어 안에 있으므로, 레이어 밖의 사이트 CSS로 우선 적용할 수 있습니다. `!important`를 추가하기 전에 컴포넌트 선택자와 선언 순서를 확인합니다.
- 같은 화면 조건은 기존 미디어 쿼리에 추가하고, 여러 기기에 공통인 값은 공유 규칙으로 관리합니다. 메인 이미지의 스크롤 상태는 `data-scrolled`로 전달합니다.
