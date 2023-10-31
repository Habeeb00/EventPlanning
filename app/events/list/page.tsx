import Link from "@/node_modules/next/link";
import React from "react";

const page = () => {
  return (
    <div>
        <h1>eventname</h1>
      <ul>
        <li>
          <Link href="/events/1">1</Link>
        </li>
        <li>
          <Link href="/events/2">2</Link>
        </li>
        <li>
          <Link href="/events/3">3</Link>
        </li>
      </ul>
    </div>
  );
};

export default page;
