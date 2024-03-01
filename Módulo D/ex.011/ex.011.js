var país = ''
console.log(`Vivendo em ${país}`)

switch (país) {
  case 'Brasil':
    console.log('Brasileiro!')
    break;
    
  case 'EUA':
    console.log('Americano!')
    break;

  case 'Reino Unido':
  case 'Grã-Bretanha':
    console.log('Inglês!')
    break;

  default:
    console.log('Estrangeiro!');
}