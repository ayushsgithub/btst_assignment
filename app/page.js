import Link from "next/link";

export default async function Home() {

  return (
      <div className="bg-gray-100 md:h-[450px] flex justify-center items-center mb-2 md:mb-6 rounded-lg">
      <div className="max-w-3xl p-6 bg-white rounded-lg shadow-xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Welcome to My Blog</h1>
        <p className="text-gray-700 mb-4">
          Welcome to my personal blog, where I share my thoughts and experiences on various topics, including technology, travel, and lifestyle.
        </p>
        <p className="text-gray-700 mb-4">
          Whether you're a tech enthusiast, an avid traveler, or simply looking for some inspiration, you'll find something here that interests you.
        </p>
        <Link href="/blogs" className="text-orange-400 hover:underline">Explore the Blogs</Link>
      </div>
    </div>
    )
}
