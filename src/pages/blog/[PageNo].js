// This page is an example of Dynamic Routing https://youtu.be/jTACyV2Ow2o - Thapa Technical
// This page is an example of getStaticPaths() https://youtu.be/Cc31hjfZInE - Thapa Technical
import Navbar from "@/components/Navbar";
// import { useRouter } from "next/router";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const paths = data.map((curElement) => {
    return{
      params: {
        PageNo : curElement.id.toString()
      },
    };
  })
  
  return {
    paths,
    fallback: false,
  }
}; 

export const getStaticProps = async (context) => {
  const id = context.params.PageNo;
  const res =  await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const res_data = await res.json();

  return {
    props: {
      data: res_data, 
    }
  };
}

const PageNo = ({ data }) => {
    // const router = useRouter();
    // const pageNumber = router.query.PageNo;

  return (
    <div>
    <Navbar />
        <h1>My Blog Content Number: {data.id} </h1>
        <div className="blog__container">
          <h1 className="blog__container-id">{data.id}</h1>
          <h3 className="blog__container-title">{data.title}</h3>
          <p className="blog__container-content">{data.body}</p>
        </div>
    </div>
  )
}

export default PageNo;