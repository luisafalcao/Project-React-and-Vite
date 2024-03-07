import { collection, getDocs, setDoc, doc, query, QuerySnapshot } from "firebase/firestore";
import { db } from "./firebase";

export async function inserirDocumento(novoItem, databaseNome, documentoNome) {
    const docRef = await setDoc(doc(db, databaseNome, documentoNome), novoItem)
    return docRef
}

export async function inserirSubColecao(novoItem, documentoNome, document, subColecaoNome,) {
    const docRef = await setDoc(doc(db, "idiomas", documentoNome, document, subColecaoNome), novoItem) //(db, idiomas > {lingua selecionada} > {tipo (vocabulario, gramatica, verbo)} > {nome do item}), {palavra/regra/verbo adicinado}
    return docRef
}

// export async function listarItens(databaseNome) {
//     let retorno;
//     await getDocs(collection(db, databaseNome))
//         .then((QuerySnapshot) => {
//             retorno = QuerySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
//         });
//     return retorno
// }

export async function listarItens(databaseNome, id) {
    let retorno;
    await getDocs(collection(db, "idiomas", id, databaseNome))
        .then((QuerySnapshot) => {
            retorno = QuerySnapshot.docs.map(doc => {
                return {
                    ...doc.data(),
                    id: doc.id
                }
            })
        })
    return retorno
}