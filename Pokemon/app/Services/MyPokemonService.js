import { ProxyState } from "../AppState.js"
import { Pokemon } from "../Models/Pokemon.js"
import { sandboxApi } from "./AxiosService.js"

class MyPokemonService {

  async getMyPokemon() {
    const res = await sandboxApi.get('')
    console.log(res.data)
    ProxyState.myPokemon = res.data.map(p => new Pokemon(p)).sort((a, b) => {
      return a.name > b.name ? 1 : (a.name === b.name) ? 0 : -1
    })
  }

  setActivePokemon(id) {
    let pokeman = ProxyState.myPokemon.find(p => p.id == id)
    if (!pokeman) {
      console.error("invalid id")
      return
    }
    ProxyState.activePokemon = pokemon
  }

  async addPokemon() {
    const found = ProxyState.myPokemon.find(p => p.name === ProxyState.activePokemon.name)
    if (found) {
      alert('You already have that pokemon')
      return
    }


    const res = await sandboxApi.post('', ProxyState.activePokemon)
    console.log(res.data)
    // Adds the new spell to the list of spells as a 'Spell' object as opposed to a pojo
    // this triggers the 'listeners'
    const pokeman = new Pokemon(res.data)
    ProxyState.myPokemon = [...ProxyState.myPokemon, pokeman].sort((a, b) => {
      return a.name > b.name ? 1 : (a.name === b.name) ? 0 : -1
    })
    ProxyState.activePokemon = pokeman
  }

  async preparePokemon() {
    const pokeman = ProxyState.activePokemon
    //change locally
    pokeman.prepared = !pokeman.prepared
    // save change to server
    const res = await sandboxApi.put(pokeman.id, pokeman)
    ProxyState.myPokemon = ProxyState.myPokemon
  }

  async removePokemon() {
    let pokeman = ProxyState.activePokemon
    const res = await sandboxApi.delete(pokeman.id)
    console.log(res.data)
    ProxyState.myPokemon = ProxyState.myPokemon.filter(p => p.id !== pokeman.id)
    ProxyState.activePokemon = null
  }

}


export const myPokemonService = new MyPokemonService()