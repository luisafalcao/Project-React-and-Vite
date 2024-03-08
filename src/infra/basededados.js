import { collection, getDocs, setDoc, doc } from "firebase/firestore";
import { db } from "./firebase";

export async function inserirIdioma(novosDados, idiomaNome) {
    const docRef = await setDoc(doc(db, "idiomas", idiomaNome), novosDados)
    return docRef
}

export async function inserirItem(novosDados, idioma, categoria, novoItem,) {
    const docRef = await setDoc(doc(db, "idiomas", idioma, categoria, novoItem), novosDados) //(db, idiomas > {lingua selecionada} > {tipo (vocabulario, gramatica, verbo)} > {nome do item}), {palavra/regra/verbo adicinado}
    console.log(novosDados.grupoInputs.tempoVerbal)
    return docRef
}

export async function listarIdiomas(databaseNome) {
    let retorno;
    await getDocs(collection(db, databaseNome))
        .then((QuerySnapshot) => {
            retorno = QuerySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        });
    return retorno
}

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