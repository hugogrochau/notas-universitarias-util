/* MÉDIA = ( (G1*2) + (G2*3) ) / 5

 Se G2 < 3,
   então MÉDIA = ( (G1) + (G2*3) ) / 4
*/

import criterio from '../1';

describe('Criterio 1', () => {
  describe('Media', () => {
    const notas = {
      g1: 5,
      g2: 5,
    };
    it('Deve calcular uma média com g2 >= 3', () =>
      expect(criterio.media(notas)).to.equal(5)
    );
    it('Deve calcular uma média com g2 < 3', () =>
      expect(criterio.media({ ...notas, g2: 2 })).to.equal(2.8)
    );
  });
});
