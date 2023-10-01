// import Image from "next/image";
// import React from "react";
// import { ArrowUpRightIcon } from "@heroicons/react/24/solid"

// const BlogList = ({ posts }) => {
//   return (


//     <div>
//       <hr className="border-[#F7AB0A] mb-10" />

//       <div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24">
//         {posts.articles.map((post) => {
//           <div key={post.id} className="flex flex-col cursor-pointer group">
//             <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200">
//               <Image
//                 className="object-cover origin-left lg:object-center"
//                 // src={urlFor(post?.mainImage).url()}
//                 src={post?.articles?.urlToImage}
//                 // alt={post?.author.name}
//                 alt={post?.articles?.author}
//                 fill
//               />

//               <div className="absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between">
//                 <div>
//                   <p className="font-bold">{post?.title}</p>

//                   <p className="font-bold">
//                     {new Date(post?.createdAt).toLocaleDateString("en-US", {
//                       day: "numeric",
//                       month: "long",
//                       year: "numeric",
//                     })}
//                   </p>
//                 </div>

//                 <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center">
//                   {/* {post?.categories.map((category) => { */}
//                   {posts?.articles?.map((category) => {
//                     <div className="bg-orange-400 text-center text-black px-3 py-1 rounded-full text-sm font-semibold">
//                       <p>{category.title}</p>
//                     </div>;
//                   })}
//                 </div>
//               </div>
//             </div>

//             <div className="mt-5 flex-1">
//                 <p className="underline text-lg font-bold">{post?.articles?.title}</p>
//                 <p className="text-gray-500 line-clamp-2">{post?.articles?.content}</p>
//             </div>

//             <p className=" mt-5 font-bold flex items-center group-hover:underline">
//                 Read Post 
//                 <ArrowUpRightIcon className="ml-2 h-4 w-4" />
//             </p>
//           </div>;
//         })}
//       </div>
//     </div>

//   );
// };

// export default BlogList;



import Image from "next/image";
import React from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const BlogList = ({ posts }) => {
  return (
    <div>
      <hr className="border-[#F7AB0A] mb-10" />

      <div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24">
        {posts.articles.map((post) => (
          <div key={post.id} className="flex flex-col cursor-pointer group">
            <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200">
              
              {post.urlToImage && 
              
              <Image
                className="object-cover origin-left lg:object-center"
                src={post?.urlToImage}
                alt={post?.author}
                fill
              />}

              <div className="absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between">
                <div>
                  <p className="font-bold">{post?.title}</p>

                  <p className="font-bold">
                    {new Date(post?.createdAt).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>

                <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center">
                  {post?.articles?.map((category) => (
                    <div key={category.id} className="bg-orange-400 text-center text-black px-3 py-1 rounded-full text-sm font-semibold">
                      <p>{category.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-5 flex-1">
                <p className="underline text-lg font-bold">{post?.title}</p>
                <p className="text-gray-500 line-clamp-2">{post?.content}</p>
            </div>

            <Link href={post?.url} target="_blank" className="mt-5 font-bold flex items-center group-hover:underline">
                Read Post 
                <ArrowUpRightIcon className="ml-2 h-4 w-4" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;