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

