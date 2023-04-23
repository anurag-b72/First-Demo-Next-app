// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'

// const inter = Inter({ subsets: ['latin'] })

// export default function index() {
//   return (
//     <>
//       <div>
//         <h1>Hello World</h1>
//       </div>
//     </>
//   )
// }

import Head from 'next/head'
import Navbar from "@/components/Navbar";
import style from "../styles/index.module.css"

export default function index() {
  return (
    <>
      <Head>          
        <title>Home Page</title>
      </Head> 
      <Navbar />
      <header className={style.header}>
        <div className={style.brand_box}></div>

        {/* <div className={style.text-box}> */}
          <h1 className={style.heading_primary}>
            <span className={style.heading_primary_main}>
              Welcome to the world of NextJS
            </span>
            <span>Love the JavaScript</span>
          </h1>
          <a href="#" className={`${style.btn}, ${style.btn_white}, ${style.btn_animated}`}>By Anurag Biswal</a>
        {/* </div> */}
      </header>
    </>
  );
}
