import { DocumentData } from "@firebase/firestore";
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import { ProjectModel } from "../models/project_model";

export function initializeFirebase() {
    const firebaseConfig = {
        apiKey: `${process.env.SECRET_API_KEY}`,
        authDomain: `${process.env.SECRET_AUTH_DOMAIN}`,
        projectId: `${process.env.SECRET_PROJECT_ID}`,
        storageBucket: `${process.env.SECRET_STORAGE_BUCKET}`,
        messagingSenderId: `${process.env.SECRET_MESSAGING_SENDER_ID}`,
        appId: `${process.env.SECRET_APP_ID}`
    }

    console.log(firebaseConfig);
    console.log(process.env.NEXT_PUBLIC_API_KEY);

    firebase.initializeApp(firebaseConfig);
}

export async function getProjects() {
    const firestore = firebase.firestore();
    const collection = firestore.collection("projects");
    const snapshot = await collection.get();
    
    const data: ProjectModel[] = [];

    snapshot.forEach((doc) => {
        data.push(doc.data() as ProjectModel);
    });
    return data;
}