function generateRandomNumber(num) {
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random() * num)
  }

  const whichPokemon = {
    pokemonName: [Pikachu, Charmander, Bulbasaur, Squirtle],
    pokemonType: [Electric, Fire, Grass, Water],
    Weakness: [Ground, Water, Fire, Grass]
  }

  let yourPokemon= []

  