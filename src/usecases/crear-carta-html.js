
/**
 * 
 * @param {String} carta 
 * @returns {HTMLImageElement} imagen de retorno
 */

export const crearCarta= (carta)=>{

    if(!carta) throw new Error('La carta es un argumento obligatorio')
    const imgCarta = document.createElement('img');
    imgCarta.src = `cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');
    return imgCarta;
}
