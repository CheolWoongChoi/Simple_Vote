# Simple Vote

### 설명
투표 기능이 가능한 웹 어플리케이션

<br />

### 데모 사이트
https://simple-vote-e0794.web.app

<br />

### 프로젝트 명령어
```
npm install : 프로젝트를 설치합니다.
npm start (또는 npm run dev) : 로컬 서버를 실행합니다.
npm run build : 배포 파일을 생성합니다.
npm test : 테스트 파일을 실행합니다.
``` 

<br />

### 개발 스택
- TypeScript
- React (Hooks)
- Redux
- Redux-thunk
- Material-UI
- Sass
- CSS-Module
- PostCSS (autoprefixer)

<br />

### 화면(pages) 설명
- Login : 로그인
- Main : 메인
  - Add : 투표생성
  - List : 투표목록
    - Home : 투표목록 홈
    - Edit : 투표수정
    - Vote : 투표하기
    - Result : 투표결과 
<br />

### 컴포넌트(components) 설명
- VoteEdit : 투표 생성/수정 화면에서 투표를 생성/수정할 때 사용
- VoteExecute : 투표하기 화면에서 투표를 진행할 때 사용 
- VoteFront : 목록 화면에서 각 투표의 정보를 보여줌
- VoteResult : 결과 화면에서 투표결과를 보여줌

<br />


