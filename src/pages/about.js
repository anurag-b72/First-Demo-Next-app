import Head from "next/head";
import Navbar from "@/components/Navbar";

export default function about() {
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>
      <Navbar />
      <div>
        <h1>Hello World to my About</h1>
      </div>
      <section className="about-section">
        <h1>About Us</h1>
        <p>
          We are a company that provides top-quality services to our clients.
          Our mission is to deliver excellent results and exceed our clients'
          expectations.
        </p>
        <p>
          We have a team of highly skilled professionals who are dedicated to
          providing the best possible solutions to our clients. We work closely
          with our clients to understand their needs and requirements and
          provide tailored solutions that meet their specific needs.
        </p>
      </section>
      <section className="about-section">
        <h2>Our Team</h2>
        <ul>
          <li>
            <img src="john-doe.jpg" alt="John Doe" />
            <h3>John Doe</h3>
            <p>CEO</p>
          </li>
          <li>
            <img src="jane-doe.jpg" alt="Jane Doe" />
            <h3>Jane Doe</h3>
            <p>CTO</p>
          </li>
          <li>
            <img src="jim-smith.jpg" alt="Jim Smith" />
            <h3>Jim Smith</h3>
            <p>Lead Developer</p>
          </li>
        </ul>
      </section>
    </>
  );
}
