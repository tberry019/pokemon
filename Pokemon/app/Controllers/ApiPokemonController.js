

import { ProxyState } from "../AppState.js"
import { apiPokemonService } from "../Services/ApiPokemonService.js"

function _drawAllPokemon() {
  const apiPokemon = ProxyState.apiPokemon
  let template = ''
  apiPokemon.forEach(p => template += `<li class="selectable p-1" onclick="app.apiPokemonController.getActivePokeman('${p.name}')">${p.weight}</li>`)
  document.getElementById('api-pokemon').innerHTML = template
}

function _drawActivePokemon() {
  const pokemon = ProxyState.activePokemon
  if (!pokemon) {
    document.getElementById('active-pokemon').innerHTML = ''
    return
  }
  document.getElementById('active-pokemon').innerHTML = pokeman.Template
}

async function _getAllPokemon() {
  try {
    await apiPokemonService.getAllApiPokemon()
  } catch (error) {
    console.error(error)
  }
}

export class ApiPokemonController {
  constructor() {
    ProxyState.on('apiPokemon', _drawAllPokemon)
    ProxyState.on('activePokemon', _drawActivePokemon)


    _getAllPokemon()
  }

  async getActivePokemon(pokemonName) {
    try {
      await apiPokemonService.getActivePokeman(pokemonName)
    } catch (error) {
      console.error(error)
    }
  }

}