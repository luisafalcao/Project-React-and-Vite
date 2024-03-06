import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";

export async function inserirColecao(novoItem, database) {
    const docRef = await addDoc(collection(db, database), novoItem, database);
    return docRef.id;
}
