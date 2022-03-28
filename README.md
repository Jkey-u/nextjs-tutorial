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