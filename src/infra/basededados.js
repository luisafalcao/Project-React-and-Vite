import { collection, addDoc, getDocs, setDoc, doc, QuerySnapshot } from "firebase/firestore";
import { db } from "./firebase";

export async function inserirDocumento(novoItem, databaseNome, documentoNome) {
    const docRef = await setDoc(doc(db, databaseNome, documentoNome), novoItem)
    return docRef
}

// export async function inserirSubcolecao(novoItem, colecaoNome, subColecaoNome) {
//     const colRef = doc(db, "idiomas", colecaoNome)
//     console.log(colRef)

//     const docRef = await setDoc(doc(db, "idiomas", colecaoNome), novoItem)
//     return docRef
// }

export async function listarItens(databaseNome) {
    let retorno;
    await getDocs(collection(db, databaseNome))
        .then((QuerySnapshot) => {
            retorno = QuerySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        });
    return retorno
}