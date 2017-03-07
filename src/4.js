import _ from 'lodash';

export default {

  media(notas) {
    const { g1, g2, g3, g4 } = notas;

    if (!g4) {
      if (!g1 || !g2 || !g3) {
        // em progresso
        return -1;
      }
      // 'toFixed(1)' arredonda ao primeiro digito fracionário e '/ 1' converte de string para float
      const media = ((g1 + g2 + g3) / 3).toFixed(1) / 1;

      if (media >= 5 && g1 >= 3 && g2 >= 3 && g3 >= 3) {
        return media;
      }

      // ficou de g4 mas ainda não fez
      return -1;
    }

    // deve ter feito pelo menos 2 das 3 provas
    if (_(notas).pick(['g1', 'g2', 'g3']).keys().value().length < 2) {
      return -1;
    }

    if (g4 < 3) {
      return ((g1 + g2 + g3 + (g4 * 3)) / 6).toFixed(1) / 1;
    }

    const menorNota = _(notas)
      .pick(['g1', 'g2', 'g3'])
      .toPairs()
      // transforma [['g1', 5],['g2', 6]] em [{ key: 'g1', val: 5 }, { key: 'g2', val: 6 }]
      .map(([key, val]) => ({ key, val }))
      // seleciona a nota com o menor 'val'
      .minBy('val')
      .key;

    const somaDasMaiores = _(notas)
      .pick(['g1', 'g2', 'g3'])
      .omit(menorNota)
      .reduce((acc, n) => acc + n, 0)

    return ((somaDasMaiores + g4) / 3).toFixed(1) / 1;
  },

  aprovado(media) {
    return media >= 5;
  },

};
