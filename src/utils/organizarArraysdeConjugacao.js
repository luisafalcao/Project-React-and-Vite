function criarArraydeObjetos(conteudo) {
    const array = Object.entries(conteudo).map(par => ({
        [par[0]]: par[1]
    }))

    return renomearKeys(organizarAlfabeticamente(array))
}

function renomearKeys(array) {
    return array.map((obj) => (
        {
            "conjugacao": Object.values(obj)[0]
        }
    ))
}

function organizarAlfabeticamente(array) {
    return array.sort((a, b) => {
        const keyA = Object.keys(a)[0];
        const keyB = Object.keys(b)[0];

        if (keyA < keyB) {
            return -1
        }
        if (keyA > keyB) {
            return 1
        }
        return 0
    })
}

export { criarArraydeObjetos, organizarAlfabeticamente }