import { firestore } from "./firebase";

export const addDocumentToCollection = async (collectionName, documentData) => {
    try {
        const docRef = await firestore.collection(collectionName).add(documentData);
        return docRef.id;
    } catch (error) {
        console.error("Error adding document: ", error);
        return null;
    }
}


export const getDocumentsFromCollection = async (collectionName) => {
    try {
        const querySnapshot = await firestore.collection(collectionName).get();
        const documents = querySnapshot.docs.map(doc => doc.data());
        return documents;
    } catch (error) {
        console.error("Error getting documents: ", error);
        return null;
    }
}

// to use these functions in other files, import them like this:
// import { addDocumentToCollection, getDocumentsFromCollection } from './firestoreService';
// then call them like this:
// addDocumentToCollection('myCollection', { name: 'Test' });

// Update or delete documents later..