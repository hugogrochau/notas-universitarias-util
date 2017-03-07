/* MÉDIA = ( (G1*2) + (G2*3) ) / 5

 Se G2 < 3,
 então MÉDIA = ( (G1) + (G2*3) ) / 4
 */

export default {

  media(notas) {
    const { g1, g2 } = notas;

    if (!g1 || !g2) {
        // em progresso
      return -1;
    }

    let media;
    if (g2 >= 3) {
      media = ((g1 * 2) + (g2 * 3)) / 5;
    } else {
      media = (g1 + (g2 * 3)) / 4;
    }

    return media.toFixed(1) / 1;
  },

  aprovado(media) {
    return media >= 5;
  },

};
