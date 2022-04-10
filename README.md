# NextJS Tutorial

<br><br>

## 0. NextJS?
- React 기반 Framework
- 폴더 및 파일 기반 Routing 지원하고, Server Side Rendering 을 지원(SEO 적용이 수월)

<br><br>

## 1. create-next-app

1. 컴파일과 번들링이 자동 (webpack 과 babel)
2. 자동 리프레쉬 기능으로 수정하면 화면에 바로 반영
3. 서버사이드 렌더링 지원
4. 정적 파일을 지원

<br><br>

## 2. Dynamic Routes, next/link
- Axios 를 이용해 api 를 호출하고, 받아온 데이터를 화면에 그려줄 수 있다
- React hook(useEffect, useState)을 사용해 마운트 시점에 api를 호출하고, 상태관리를 할 수 있다
- Next.js 의 Dynamic Routes 를 이용해서 상품 ID가 달라도 하나의 페이지로 관리하고, next/link 를 이용해 새로고침 없이 페이지간 이동을 할 수 있다.

<br><br>

## 3. Server Side Rendering
1. Next js 모든 페이지를 사전 렌더링 (Pre-rendering)
    - 더 좋은 퍼포먼스
    - 검색엔진최적화(SEO)
<br><br>

2. 사전 렌더링 (Pre-rendering) 
    - '언제' html 을 생성하는가?
        - 정적 생성 (Static Generation)
            - 프로젝트가 '빌드하는 시점'에 html파일들이 생성
            - 모든 요청에 재사용
            - 퍼포먼스 이유로, Next js 는 정적 생성을 권고
            - 정적 생성된 페이지들은 CDN에 캐시
            - 활용
                - 마케팅 페이지
                - 블로그 게시물
                - 제품 목록
                - 도움말, 문서 등
            - getStaticProps / getStaticPaths
        - 서버 사이드 렌더링 (Server Side Rendering, SSR, Dynamic Rendering)
            - '매 요청마다' html 을 생성
            - 퍼포먼스 떨어짐
            - 활용
                - 항상 최신 상태 유지
                - 관리자 페이지
                - 분석차트
            - getServerSideProps

<br><br>

## 4. Environment Variables
1. 웹 애플리케이션을 만들 때, 환경 변수가 필요한 경우
    - 개발 모드(development mode)와 배포 모드(production mode)에 따라 다르게 코딩해야 할 때
    - 개발 및 테스트 중에 실제 결제 구현을 하지 않도록 테스트 API 키를 사용하려고 할 때
2. 사용법
    - [nodeJS] process.env.변수명
    - [browser] process.env.NEXT_PUBLIC_변수명
    - ⚠ .env 파일을 변경했으면 NextJS 개발 서버를 다시 시작하자