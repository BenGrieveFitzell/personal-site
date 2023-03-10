import React from "react";
import Header from "../components/Header";
import Head from "next/head";

function Books() {
  return (
    <div>
      <Head>
        <title>Ben Grieve-Fitzell | Book Recommendations</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <div>
          <h1 className="p-5 text-2xl font-semibold">book recommendations</h1>
          <ul className="border p-5 mt-3">
            <h1 className="text-lg font-medium">
              The Almanack of Naval Ravikant
            </h1>
            <h2 className="text-gray-700">Eric Jorgenson</h2>
            <p className="text-gray-500">
              Timeless Principles, Wealth, Happiness{" "}
            </p>
          </ul>
          <ul className="border-b p-5">
            <h1 className="text-lg font-medium">The Personal MBA</h1>
            <h2 className="text-gray-700">Josh Kaufman</h2>
            <p className="text-gray-500">Entrepreneurship</p>
          </ul>
          <ul className="border-b p-5">
            <h1 className="text-lg font-medium">Meditations</h1>
            <h2 className="text-gray-700">Marcus Aurelius</h2>
            <p className="text-gray-500">Stoicism, Philosophy </p>
          </ul>
          <ul className="border-b p-5">
            <h1 className="text-lg font-medium">Wealth of Nations</h1>
            <h2 className="text-gray-700">Adam Smith</h2>
            <p className="text-gray-500">Economics</p>
          </ul>
          <ul className="border-b p-5">
            <h1 className="text-lg font-medium">The Beginning of Infinity</h1>
            <h2 className="text-gray-700">David Deutsch</h2>
            <p className="text-gray-500">Physics, Philosophy, Epistemology</p>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default Books;
