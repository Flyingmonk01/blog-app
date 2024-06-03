import config from "../conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId)

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }


    async createPost({title, content, slug, status, featuredImage, userId}){
        try {
            return await this.databases.createDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content, 
                    status, 
                    featuredImage,
                    userId

                }
            )
        } catch (error) {
            console.log("Appwrite error :: createPost :: ", error);
        }
    }

    async updatePost(slug, {title, content, status, featuredImage}){
        try {
            return await this.databases.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,

            )
        } catch (error) {
            console.log("Appwrite service :: updatePost :: error", error);
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            )
            return true;
        } catch (error) {
            console.log("Appwrite service :: error :: ", error);
            return false;
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite service :: getPost :: ", error);
            return false;
        }
    }

    async getAllPosts(queries = [Query.equal("status", "equal")]) {
        try {
            const response = await this.databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                queries
            );
            // console.log("Appwrite service :: getAllPosts :: response", response);
            return response;
        } catch (error) {
            console.log("Appwrite service :: getAllPosts :: ", error);
            return false;
        }
    }
    

    // file upload service
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                config.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite uploadFile :: error :: ", error);
            return false;
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                config.appwriteBucketId,
                fileId,
            )
            return true;
        } catch (error) {
            console.log("Appwrite deleteFile :: error :: ", error);
            return false;
        }
    }

    getFilePreview(fileId){
        return  this.bucket.getFilePreview(
            config.appwriteBucketId,
            fileId
        )
    }

}

const service = new Service();

export default service;