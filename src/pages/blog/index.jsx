import Navbar from "@/components/Navbar";
import Link from "next/link";

export const getStaticProps = async () => {
  const res =  await fetch('https://jsonplaceholder.typicode.com/posts');
  const res_data = await res.json();

  return {
    props: {
      data: res_data, 
    }
  };
}

export default function blog({data}) {
    return (
      <>
      <Navbar />
        <div>
          <h1>Blog Page</h1>
          {data.slice(0,5).map((curElement)=>{
            return (
              <Link href={`/blog/${curElement.id}`}>
                <div key={curElement.id} className="blog__container">
                  <h1 className="blog__container-id">{curElement.id}</h1>
                  <h3 className="blog__container-title">{curElement.title}</h3>
                  <p className="blog__container-content">{curElement.body}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </>
    )
  }
  