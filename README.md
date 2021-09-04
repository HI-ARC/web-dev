# 👨‍👩‍👧‍👦 하이아크 웹사이트 개발 프로젝트 

## 기술 스택

typescript, graphql, reactjs, gatsbyjs, emotion.js, font awesome, material ui

## 참여진

| 이름 |github|블로그|
|------|---|---|
|김예임|https://github.com/KIMYEIM | https://velog.io/@kyaeim |
|권예빈|테스트2|테스트3|
|김종호|테스트2|테스트3|
|장희지|테스트2|테스트3|

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
