const addElementListaFavorite = (listaFavorite, titlu, explicatie, url, data) => {
    const newListaFavorite = [...listaFavorite]
    newListaFavorite.push(
        {
            "titlu" : titlu, 
            "explicatie"   : explicatie,
            "url" : url,
            "data" : data
        }
    )
    return newListaFavorite 
}

const removeElementListaFavorite = (listaFavorite, dataAleasa) => {
    const newListaFavorite = [...listaFavorite]
    newListaFavorite.splice(findIndexFavorita(listaFavorite, dataAleasa), 1)
    return newListaFavorite
}

const findIndexFavorita = (listaFavorite, dataAleasa) => {
    const newDataAleasa = new Date(dataAleasa)
    const index = listaFavorite.findIndex(item => {
        const itemDate = new Date(item.data);
        return itemDate.getTime() === newDataAleasa.getTime();
    })
    return index !== -1 ? index : -1
}



export{
    addElementListaFavorite,
    findIndexFavorita,
    removeElementListaFavorite
}