# 🍿 MyFlix

**배포 URL** : https://myflix-jun.vercel.app

### 🙋‍♂️ 프로젝트 소개

인기 OTT 사이트 Netflix UI를 바탕으로 만든 영화 & TV프로그램들의 정보와 평점을 제공하는 사이트입니다.
<br>

### ⚙ 개발환경

<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=white"/> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white"/> <img src="https://img.shields.io/badge/Styled Components-DB7093?style=flat-square&logo=styledcomponents&logoColor=white"/> <img src="https://img.shields.io/badge/React Router-CA4245?style=flat-square&logo=reactrouter&logoColor=white"/> <img src="https://img.shields.io/badge/React Query-FF4154?style=flat-square&logo=reactquery&logoColor=white"/>
<br>

### 🔩 벡엔드 구성

[TheMovieDB API](https://developer.themoviedb.org/reference/intro/getting-started)를 통해 영화, Tv 프로그램 정보를 받아왔습니다.
<br>

### ⛓ node_modules

| 모듈명           | 용도               |
| ---------------- | ------------------ |
| axios            | 서버 통신          |
| framer-motion    | 애니메이션 효과    |
| react-query      | 서버 상태 관리 |
| react-rotuer-dom | 라우팅 구현        |
| react-hook-form  | 입력 폼 상태 관리  |

<br>

### 🛠 프로젝트 관리

- [GitHub Issue](https://github.com/junny97/myflix/issues)
  - 빠른 issue 생성을 위해 issue 템플릿을 만들어 사용하였습니다.
  - issue label을 생성하여 어떤 작업을 히는지 구분하였습니다.
  - issue를 통해 구현할 내용과 체크리스트를 만들어 어떤 작업을 할지 리스트 만들어 관리하였습니다.

![Github issue img](image.png)
<br>

### 📃 커밋 메시지 컨벤션

| 타입     | 설명                                                    |
| -------- | ------------------------------------------------------- |
| Feat     | 새로운 기능 추가                                        |
| Fix      | 버그 수정                                               |
| Style    | CSS 등 사용자 UI 디자인 변경                            |
| Refactor | 코드 리팩토링 (더 효율적인 코드로 변경 등)(기능은 동일) |
| Chore    | 라이브러리 설치, 패키지 매니저 수정                     |
| Docs     | 리드미 등 문서작업 수정                                 |

### Movie 페이지

### TV 페이지

### Search 페이지

### 주요 기능

- 상단의 nav bar를 통해 Moive Tv show 카테고리를 자유롭게 이동 가능합니다.

- 영화 &TV 프로그램 소개 시 상영중인 작품, 인기 작품, 평점이 높은 작품, 개봉 예정 작품으로 분류하여 원하는 카테고리에 접근하기 쉽게 구현하였습니다.

- React-Query에서 제공하는 **useQuery Hook** 을 사용해 API 요청시 Movie/TV 데이터를 받아옵니다.
  useQuery Hook을 이용하여 데이터를 요청하면 결과가 자동으로 캐싱되어, 동일한 쿼리가 여러 번 호출될 때 네트워크 요청을 반복하지 않고 첫 번째 호출에서 받은 데이터를 재사용함으로써 성능을 향상시켰습니다.

- 애니매이션 라이브러리 **framer-motion** 를 사용하여 기존 CSS로 애니매이션 작업을 할 떄 보다 직관적이며 가독성이 높은 방식으로 애니메이션을 구현할 수 있었으며 애니매이션 효과 또한 더 현실적이고 자연스럽게 구현할 수 있었습니다.
  <br/>
