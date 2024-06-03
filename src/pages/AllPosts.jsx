import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/database";
import PostCard from "../components/PostCard";
import { Loader } from "../components";

function AllPost() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getAllPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []); // Add an empty dependency array to avoid infinite loop

  return ( posts.length > 0 ?
    (<div className="min-h-screen py-8 w-full mt-20">
      <div className="flex flex-wrap">
        {posts.map((post) => (
          <div key={post.$id} className="p-2 w-1/4">
            <PostCard post={post} />
          </div>
        ))}
      </div>
    </div>) : (<Loader />)
  );
}

export default AllPost;
