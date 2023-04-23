import Head from 'next/head'
import Navbar from "@/components/Navbar";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Error404 = () => {
    const router = useRouter();

    const handleClick = () => {
        router.push("/")
    } 

    useEffect(() => {
        setTimeout(() => {
            router.push("/")
        }, 2000)
    })
  return (
    <div>
      <Head>    
        <link rel="stylesheet" href="../styles/navbar.css" />
        <title>Error 404</title>
      </Head> 
      <Navbar />
      <h1>This is customized Error 404 Page.</h1>
      <button onClick={handleClick}>Back to Homepage</button>
    </div>
  );
};

export default Error404;
