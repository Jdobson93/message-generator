function generateRandomNumber(num) {
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random() * num)
  };

  const whichPokemon = {
    pokemonName: ['Pikachu', 'Charmander', 'Bulbasaur', 'Squirtle'],
    pokemonType: ['Electric', 'Fire', 'Grass', 'Water'],
    Weakness: ['Ground', 'Water', 'Fire', 'Grass']
  };

  let yourPokemon= []

  for(let prop in whichPokemon) {
    let optionIdx = generateRandomNumber(whichPokemon[prop].length)
  
    // use the object's properties to customize the message being added to personalWisdom  
    switch(prop) {
      case 'pokemonName':
        yourPokemon.push(`The Pokemon you have been assigned is "${whichPokemon[prop][optionIdx]}".`)
        break
      case 'pokemonType':
      yourPokemon.push(`They are a "${whichPokemon[prop][optionIdx]} type pokemon".`)
        break
      case 'Weakness':
        yourPokemon.push(`They are weak against "${whichPokemon[prop][optionIdx]}".`)
        break
      default:
        yourPokemon.push('There is not enough info.')
      }
    };

    function thePokemon(pokemon) {
      const finalPokemon = yourPokemon.join('\n')
      console.log(finalPokemon)};
      

      thePokemon(yourPokemon);


  
