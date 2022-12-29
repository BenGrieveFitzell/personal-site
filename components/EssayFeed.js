import React from "react";
import Link from "next/link";

function EssayFeed() {
  return (
    <div>
      <div className="mt-20">
        <Link href={"/PatentEssay"}>
          <ul className="border p-5 text-lg font-medium">
            Should I file for a patent?
          </ul>
        </Link>
      </div>
    </div>
  );
}

export default EssayFeed;
