 const initialState = {
  numStars: 4,
  hotelName: 'Mieres del Camín Apartamentos',
  options: [{
    title: 'Solo Alojamiento',
    list: [
      'Sin régimen',
      'Botella de agua de bienvenida',
    ],
    button: {
      label: 'Elegir régimen',
    },
  }, {
    title: 'Alojamiento y Desayuno',
    list: [
      'Desayuno buffet completo',
    ],
    button: {
      label: 'Elegir régimen',
    },
  }, {
    title: 'Media Pensión',
    list: [
      'Desayuno buffet completo',
      'Cena buffet',
      'No incluye',
    ],
    button: {
      label: 'Elegir régimen',
    },
  }, {
    title: 'Todo incluido',
    list: [
      'Dispondrás de comida y bebida todo el día y durante toda tu estancia.',
      'Restaurante buffet',
      'Snack Bar',
      'Servicio de bares (marcas nacionales)',
    ],
    button: {
      label: 'Elegir régimen',
    },
  }, {
    title: 'Unlimited Services',
    list: [
      'Restaurante buffet con bebidas Premium',
      'Restaurante a la carta (una cena por estancia)',
      'Snack Bar con bebidas Premium',
      'Minibar incluido',
      'Acceso a SPA y 45 minutos de masaje por persona',
      'Actividades deportivas (acuáticas sin motor)',
      'Caja fuerte',
      'Parking gratuito',
      'Lavandería',
    ],
    button: {
      label: 'Elegir régimen',
    },
  }]
}

export default function packages(state = initialState, action) {
  switch (action.type) {
    case '@packages/optionSelected':
      return {
        ...state,
        optionSelected: action.title,
      };
    default:
      return state;
  }
}
