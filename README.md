# 👨‍👩‍👧‍👦 HI-ARC 웹사이트 개발 프로젝트 

## 기술 스택

typescript, graphql, reactjs, gatsbyjs, emotion.js, font awesome, material ui

## 참여진

| 이름 |github|블로그|
|------|---|---|
|김예임|https://github.com/KIMYEIM |  |
|권예빈|테스트2|테스트3|
|김종호|테스트2|테스트3|
|장희지|https://github.com/huiji0315|https://blog.naver.com/huiji0315|

## 구현 내용

### 1️⃣ 메인 페이지 - 예임
#### 담당한 파트

- Index Page
    - Banner
    - ActivityCard
    - ICPC
- 공통 컴포넌트
    - Header
    - Footer
    - 슬로건, 메뉴, 사이드바

#### 구현물 설명

- 반응형 웹 구현
- Header
    - 하이아크 로고, 슬로건, 메뉴 컴포넌트
    - 스크롤 감지 → 아래로 스크롤 시 사라짐, 위로 스크롤 시 다시 나타남
    - 일정 너비 이하 & 모바일 화면에서 메뉴 사라지고 사이드바로 대체됨
    - 사이드바 버튼으로 토글 가능
- Footer
- Index Page
    - Banner
        - 대표 이미지 & 소개 영역
    - ActivityCard
        - GraphQl을 이용해 활동 내역 fetch
    - ICPC

### 4️⃣ 친목 페이지 - 희지
#### 담당한 파트

1. Communication Page
2. page 별 공통 template

+) 이미지 깨짐 오류 해결, 폰트 적용 오류 해결

#### 구현물 설명

1. **Communication Page**

    → `react-fullpage`를 활용하여 `section #1`은 설명 부분, `section #2`는 사진 부분으로 분리하여 구현하였다.

    - Header2 (기존 header 적용시 fullpage 기능상 windowscroll을 인식하지 못해 section #2에서 발생하는 오류가 있어서 header2로 임시적으로 적용해둔 상태다. → 유사하게 sidebar를 통한 menubar가 헤더에서 살짝 띄워진 상태로 보여지는 오류로 section #1에서 분리해놓은 상태다.)
    - section #1 : PageTitle, Description, MoveToDetail
    - section #2 : PostList`(graphql)`, MoveToTop, Footer

    → 이 페이지만 별도 react-fullpage로 구현되어있기 때문에, page 별 공통 template을 사용할 수가 없어서 해당 template에 사용되는 컴포넌트들을 따로 가져와 section별로 분리해 배치하였다.

    → section #2의 경우, PostList들을 한 섹션에 모두 보여주는 것이 더 적절한 것 같다고 판단하여 scrollOverflow 옵션을 통해 활용가능한 섹션의 크기를 늘렸다.

2. **page 별 공통 template**

    → 각 페이지마다 공통으로 적용하기 위해 `props`로 `title과 나머지 값들(children)`을 `graphql`을 통해 받아서 렌더링해주도록 구현하였다. 

    - Header
    - PageTitle title ={title}
    - {children}
    - Scroll(TopButton)
    - BackButton
    - Footer
