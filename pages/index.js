import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>HOME | 제이키</title>
      </Head>
      create-next-app으로 설치하면
      <br/>
      1. 컴파일과 번들링이 자동 (webpack 과 babel)
      <br/>
      2. 자동 리프레쉬 기능으로 수정하면 화면에 바로 반영
      <br/>
      3. 서버사이드 렌더링 지원
      <br/>
      4. 정적 파일을 지원
    </div>
  )
}
