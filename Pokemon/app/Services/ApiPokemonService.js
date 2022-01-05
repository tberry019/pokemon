import { ProxyState } from "../AppState.js"
import { PokeApiPokemon } from "../Models/Pokemon.js"
import { SandboxPokemon } from "../Models/Pokemon.js"
import { pokeApi } from "./AxiosService.js"

class PokeApiPokemon {
  async getAllPokeApiPokemon() {
    const res = await pokeApi.get('')
    console.log(res.data.results)
    ProxyState.pokeApi = res.data.results
  }


  async getSandBoxPokemon(SandboxPokemon) {
    const res = await pokeApi.get(SandboxPokemon)
    console.log(res.data)

    ProxyState.SandboxPokemon = new Pokemon(res.data)
  }
}


export const apiPokemonService = new ApiPokemonService()
export const myPokemonService = new MyPokemonService()