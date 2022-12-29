import React from "react";
import Link from "next/link";

function Body() {
  return (
    <div className="grid justify-items-center space-y-10 mt-[150px] text-center">
      <Link href={"/Essays"}>
        <ul className="text-lg font-medium">essays</ul>
      </Link>
      <Link href={"/Books"}>
        <ul className="text-lg font-medium">books</ul>
      </Link>
      <Link href={"https://twitter.com/GrieveFitzell"}>
        <ul className="text-lg font-medium">twitter</ul>
      </Link>
      <Link href={"/Email"}>
        <ul className="text-lg font-medium">email</ul>
      </Link>
    </div>
  );
}

export default Body;
