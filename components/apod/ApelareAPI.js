import axios from "axios"

const apeleazaApi = async (dataAleasa) => {
    const raspuns = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=j6fwEkbTDG2bH4fPUXahYgmhlYBMGMevQFiIhBs6&date=${dataAleasa}`)
    return raspuns.data
}

const formatDate = (date) => {
    let d       = new Date(date),
        month   = '' + (d.getMonth() + 1),
        day     = '' + d.getDate(),
        year    = d.getFullYear();
    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;
    return [year, month, day].join('-');
}

export { apeleazaApi, formatDate } 