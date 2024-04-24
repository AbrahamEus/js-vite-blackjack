import _ from 'underscore'


// export const minombre='Abraham';
/**
 * 
 * @param {Array<string>} tiposDeCarta   Ejemplo ['C','D','H','S'];
 * @param {Array<string>} tiposEspeciales  Ejemplo ['A','J','Q','K'];
 * @returns {Array} retorna un nuevo deck de cartas
 */
// Mejora la documentacion JSdocoments 

export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
if(!tiposDeCarta) throw new Error('Tipo de carta es obligatorio')
    let deck1=[];
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck1.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck1.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck1 = _.shuffle(deck1)
     return deck1;
}

export default crearDeck;