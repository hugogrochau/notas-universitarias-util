import criterio from '../4';

describe('Criterio 4', () => {
  describe('Media', () => {
    const notas = {
      g1: 6,
      g2: 6,
      g3: 6,
    };
    it('Deve calcular uma média simples', () =>
      expect(criterio.media(notas)).to.equal(6)
    );

    it('Deve reconhecer uma média incompleta sem uma das g1,g2,g3', () =>
      expect(criterio.media({ g1: 8, g2: 6 })).to.equal(-1)
    );

    it('Deve reconhecer uma média incompleta sem g4', () =>
      expect(criterio.media({ ...notas, g3: 2 })).to.equal(-1)
    );

    it('Deve reconhecer uma média incompleta com g4', () =>
      expect(criterio.media({ g1: 2, g4: 6 })).to.equal(-1)
    );

    it('Deve calcular corretamente o caso quando g4 < 3', () =>
      expect(criterio.media({ ...notas, g4: 2.8 })).to.equal(4.4)
    );

    it('Deve calcular corretamente quando g4 >= 3', () =>
      expect(criterio.media({ g1: 8, g2: 2, g3: 3, g4: 6 })).to.equal(5.7)
    );
  });
});
