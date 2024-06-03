import React, { useEffect, useState } from 'react';
import appwriteService from "../appwrite/database";
import { Container, PostCard } from '../components';
import { useSelector } from 'react-redux';

function Home() {
    const authStatus = useSelector(state => state.auth.status);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        if (authStatus) {
            appwriteService.getAllPosts().then((allposts) => {
                if (allposts) {
                    console.log("Fetched posts:", allposts.documents);
                    setPosts(allposts.documents);
                } else {
                    console.log("No posts found or error occurred");
                }
            });
        }
    }, [authStatus]);

    if (!authStatus) {
        return (
            <div className="min-h-screen w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500 mt-8">
                                Login To See The Posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }

    if (posts.length === 0) {
        return (
            <div className="min-h-screen w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl mt-8 font-bold hover:text-gray-500">
                                Add A Post To Move Further!
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }

    return (
        <div className="min-h-screen w-full py-8">
            <Container>
                <div className="flex flex-wrap mt-8">
                    {posts.map((post) => (
                        <div key={post.$id} className="p-2 w-1/4">
                            <PostCard post={post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default Home;
