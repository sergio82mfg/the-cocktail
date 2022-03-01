const initialState = {
  sections: [{
    sectionName: 'Mejora tu estancia',
    optional: true,
    list: [{
      srcImage: '/media/relax.jpg',
      title: 'Olvídese de la rutina',
      description: [
        'Cras vehicula vestibulum dapibus. Pellentesque auctor dolor et purus facilisis maximus. Mauris eget urna luctus, imperdiet neque nec, aliquet lorem.',
      ],
      note: 'Más información y condiciones',
      details: [
        'Baño javanés Mandi Susu tradicional: evocación de los baños que tomaban las princesas de las cortes y palacios de Java Central, en Indonesia, con antiguas recetas en las que se mezclaba la leche y las especias.',
        'Baño floral balinés: con aceite de almendra dulce y aromas de jazmín.',
        'Baño oceánico: con sal marina y gajos de mandarina o lima.',
        'Baño de pies floral: baño aromático de pies, con pétalos y aromas.',
        'Baño de vapor herbal: baño de vapor con hierbas del sudeste asiático.',
        'Rain shower.'
      ]
    }, {
      srcImage: '/media/spa.jpg',
      title: 'Experiencias y programas SPA con agua',
      description: [
        'Las experiencias spa de agua tienen una presencia muy especial en SPA Sensations. No es extraño si consideramos que la mayor parte del planeta, así como del propio cuerpo humano, están compuestos de agua.',
        'El arte de recrear experiencias de agua en variaciones ilimitadas es la base de la propuesta de SPA Sensations a sus clientes, aportando el refinamiento al baño y a la hidratación en todas sus formas. Un mundo mágico de posibilidades, más allá de la terapia y del que ahora usted, también podrá disfrutar.'
      ],
      note: 'Más información y condiciones',
      details: [
        'Baño javanés Mandi Susu tradicional: evocación de los baños que tomaban las princesas de las cortes y palacios de Java Central, en Indonesia, con antiguas recetas en las que se mezclaba la leche y las especias.',
        'Baño floral balinés: con aceite de almendra dulce y aromas de jazmín.',
        'Baño oceánico: con sal marina y gajos de mandarina o lima.',
        'Baño de pies floral: baño aromático de pies, con pétalos y aromas.',
        'Baño de vapor herbal: baño de vapor con hierbas del sudeste asiático.',
        'Rain shower.'
      ]
    }],
  }, {
    sectionName: 'Servicios de habitación',
    optional: true,
    list: [{
      srcImage: '/media/relax.jpg',
      title: 'Olvídese de la rutina',
      description: [
        'Cras vehicula vestibulum dapibus. Pellentesque auctor dolor et purus facilisis maximus. Mauris eget urna luctus, imperdiet neque nec, aliquet lorem.',
      ],
      note: 'Más información y condiciones',
      details: [
        'Baño javanés Mandi Susu tradicional: evocación de los baños que tomaban las princesas de las cortes y palacios de Java Central, en Indonesia, con antiguas recetas en las que se mezclaba la leche y las especias.',
        'Baño floral balinés: con aceite de almendra dulce y aromas de jazmín.',
        'Baño oceánico: con sal marina y gajos de mandarina o lima.',
        'Baño de pies floral: baño aromático de pies, con pétalos y aromas.',
        'Baño de vapor herbal: baño de vapor con hierbas del sudeste asiático.',
        'Rain shower.'
      ]
    }],
  }],
};

export default function information(state = initialState, action) {
  switch (action.type) {
    case '@information/sections':
      return {
        ...state,
        sections: action.sections,
      };
    default:
      return state;
  }
}
