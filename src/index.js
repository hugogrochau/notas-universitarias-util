import c4 from './4';

const criterios = {
  4: c4,
};

export default (criterio) => ({
  media: (notas) => criterios[criterio].media(notas),
  aprovado: (media) => criterios[criterio].aprovado(media),
});
