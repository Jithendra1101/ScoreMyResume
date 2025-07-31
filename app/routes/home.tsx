import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ScoreMyResume" },
    { name: "description", content: "ScoreMyResume is a React-based web app that analyzes your resume against any job description and provides an ATS compatibility score. Instantly see how well your resume aligns and get insights to improve your chances of getting noticed." },
  ];
}

export default function Home() {
  return (
  <main className='bg-[url("/images/bg-main.svg")] bg-cover'>
    <Navbar/>
  <section className="main-section"> 
  <div className="page-heading">
    <h1>Apply smart. Track better. Win faster.</h1>
    <h2>Get smart insights on your resume, powered by AI</h2>
  </div>

  </section>


    </main>);
}
