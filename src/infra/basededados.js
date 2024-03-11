import { collection, getDocs, setDoc, doc, addDoc, QuerySnapshot } from "firebase/firestore";
import { db } from "./firebase";

export async function inserirIdioma(novosDados, idiomaNome) {
    const docRef = await setDoc(doc(db, "idiomas", idiomaNome), novosDados)
    return docRef
}

export async function inserirItem(novosDados, idioma, categoria, subColecaoNome) {
    if (categoria === "conjugacoes") {
        const verbosRef = collection(db, "idiomas", idioma, "verbos")
        const verbos = []
        let retorno

        // criar array dos verbos que já existem
        await getDocs(verbosRef)
            .then((QuerySnapshot) => {
                retorno = QuerySnapshot.docs.map(doc => {
                    verbos.push(doc.data())
                })
                return retorno
            })

        let verboExiste = verbos.find(item => item.infinitivoPt === novosDados.verboPt)

        if (!verboExiste) {
            let novoVerbo = { infinitivoPt: novosDados.verboPt, infinitivoId: novosDados.verboId }
            await setDoc(doc(db, "idiomas", idioma, "verbos", novoVerbo.infinitivoId.toLowerCase()), novoVerbo) //(db, idiomas > {lingua selecionada} > {tipo (vocabulario, gramatica, verbo)} > {nome do item}), {palavra/regra/verbo adicinado}
        }

        inserirConjugacao(idioma, subColecaoNome, novosDados.verboId, novosDados)
    } else {
        await setDoc(doc(db, "idiomas", idioma, categoria, subColecaoNome), novosDados) //(db, idiomas > {lingua selecionada} > {tipo (vocabulario, gramatica, verbo)} > {nome do item}), {palavra/regra/verbo adicinado}
    }

}

export async function inserirConjugacao(idioma, subColecaoNome, verbo, novosDados) {
    const subColecaoRef = collection(db, 'idiomas', idioma, 'conjugacoes', subColecaoNome, subColecaoNome); // Reference to the subcollection
    const verboDocRef = doc(subColecaoRef, verbo); // Reference to the document within the subcollection
    await setDoc(verboDocRef, novosDados, { merge: true });
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

export async function listarConjugacoes(id, verbo) {
    const verbos = []

    await getDocs(collection(db, "idiomas", id, "conjugacoes", "passado", "passado"))
        .then((QuerySnapshot) => {
            QuerySnapshot.docs.map(doc => {
                verbos.push(doc.data())
            })
        })

    await getDocs(collection(db, "idiomas", id, "conjugacoes", "presente", "presente"))
        .then((QuerySnapshot) => {
            QuerySnapshot.docs.map(doc => {
                verbos.push(doc.data())
            })
        })

    await getDocs(collection(db, "idiomas", id, "conjugacoes", "futuro", "futuro"))
        .then((QuerySnapshot) => {
            QuerySnapshot.docs.map(doc => {
                verbos.push(doc.data())
            })
        })

    const verbosFiltrados = verbos.filter(item => item.verboId === verbo)
    return [verbos, verbosFiltrados]
}

