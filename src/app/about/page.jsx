import Link from "next/link";
import React from "react";

const AboutPage = () => {
  return (
    <div>
      <h2 className="bg-yellow-400 text-black">This is About page</h2>
      <nav>
        <ul className="flex gap-4 p-4 bg-white text-black font-bold">
          <Link href={"/about/mission"}>Mission</Link>
          <Link href={"/about/history"}>History</Link>
        </ul>
      </nav>
    </div>
  );
};

export default AboutPage;
