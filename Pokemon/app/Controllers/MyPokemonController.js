import { ProxyState } from '../AppState.js'
import { myPokemonService } from '../Services/MyPokemonService.js'

function _drawMyPokemon() {
  const pokemon = ProxyState.myPokemon
  console.log(pokemon)


  document.getElementById('my-pokemon').innerHTML = template
}

async function _getMyPokemon() {
  try {
    await myPokemonService.getMyPokemon()
  } catch (error) {
    console.error(error)
  }
}

export class MyPokemonController {
  constructor() {
    ProxyState.on('myPokemon', _drawMyPokemon)

    _getMyPokemon()
  }

  async addPokemon() {
    try {
      await myPokemonService.addPokemon()
    } catch (error) {
      console.error(error)
    }
  }

  setActivePokemon(id) {
    myPokemonService.setActivePokemon(id)

  }

  async removePokeman() {
    try {
      await myPokemonService.removePokeman()
    } catch (error) {
      console.error(error)
    }
  }


  async preparePokeman() {
    try {
      await myPokemonService.preparePokeman()
    } catch (error) {
      console.error(error)
    }
  }

}