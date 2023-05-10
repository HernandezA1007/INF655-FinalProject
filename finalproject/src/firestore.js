// to add a new document to a collection
import { firestore } from "./firebase";

const documentData = {
    // your document data
};

firestore.collection('yourCollection').add(documentData) // documentData instead of yourCollection
    .then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
})
    .catch((error) => {
    console.error("Error adding document: ", error);
});

// to get documents from a collection
firestore.collection("yourCollection").get().then((querySnapshot) => { 
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
});

// to get real-time updates, use onSnapshot
firestore.collection("yourCollection").onSnapshot((querySnapshot) => {
    const documents = [];
    querySnapshot.forEach((doc) => {
        documents.push(doc.data());
    });
    console.log(documents);
});