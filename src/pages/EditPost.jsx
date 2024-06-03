import React, { useEffect, useState } from 'react'
import appwriteService from "../appwrite/database";
import { useNavigate, useParams } from 'react-router-dom';
import { PostForm } from '../components';

function EditPost() {

    const [posts, setPosts] = useState(null);;
    const {slug} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        if(slug){
            appwriteService.getPost(slug).then((post) =>{
                if(post){
                    setPosts(post)
                }
            })
        }else{
            navigate("/")
        }
    }, [slug, navigate])

  return ( posts ? 
    <div className='py-8'>
        <PostForm post={posts}/>
    </div> : null
  )
}

export default EditPost
