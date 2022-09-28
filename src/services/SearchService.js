import { get } from '../utils/Utils'
const baseUrl = 'https://pokeapi.co/api/v2/pokemon/'

const SearchAPI = (search) =>{
  let url = baseUrl + search
    return get(url)
}


export {SearchAPI}