	
import axios from 'axios'
//const osnovniUrl = 'http://localhost:3001/api/poruke'
//const osnovniUrl = '/api/poruke'
const osnovniUrl = `https://aj04-poruke.herokuapp.com/api/poruke`

const dohvatiSve = () => {   
    const promise = axios.get(osnovniUrl);
    return promise.then( response => response.data)
}
 
const stvori = noviObjekt => {
    return axios.post(osnovniUrl, noviObjekt)
}
 
const osvjezi = (id, noviObjekt) => {
    return axios.put(`${osnovniUrl}/${id}`, noviObjekt)
}

const brisi = id => {
    return axios.delete(`${osnovniUrl}/${id}`)
}
 
export default { dohvatiSve, stvori, osvjezi, brisi}
/* export default {
    dohvatiSve: dohvatiSve,
    stvori: stvori,
    osvjezi: osvjezi
} */