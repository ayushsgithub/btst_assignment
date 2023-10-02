import React from "react";
import BlogList from "../components/BlogList";

const page = async () => {
  const res = await fetch(
    `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${process.env.API_KEY}`,
    { next: { revalidate: 3600 } }
  );
  const posts = await res.json();
  // console.log(posts)
  return (
    <div>
      <BlogList posts={posts} />
    </div>
  );
};

export default page;
