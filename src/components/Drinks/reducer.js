const initialState = {
  sectionName: 'Cervezas',
  list: [{
    title: '[name]',
    description: ['[descripción]'],
    details: 'Ideal para combinar con: [food_pairing]',
    label: '[ABV]',
    level: '',
    srcImage: '/media/image 1.jpg',
  }, {
    title: '[name]',
    description: ['Our flagship beer that kick started the craft beer revolution. This is James and Martin\'s original take on an American IPA, subverted with punchy New Zealand hops. Layered with new world hops to create an all-out riot of grapefruit, pineapple and lychee before a spiky, mouth-puckering bitter finish.'],
    details: 'Ideal para combinar con:  Gingerbread Man, Feta And Tomato Salad With Balsamic Dressing y Raspberry Parfait.',
    label: '6.0',
    level: 'medium',
    srcImage: '/media/image 2.jpg',
  }, {
    title: 'Small Batch: Cranachan Cream Ale',
    description: ['A cream ale, brewed with raspberry and milk sugars, balancing sweet and tart summer berry with soft bitterness and a full bodied smooth mouthfeel.'],
    details: 'Ideal para combinar con:  Sriracha infused shredded beef, Chipotle steak tacos y Chilli chocolate fondant.',
    label: '16.1',
    level: 'high',
    srcImage: '/media/image 4.jpg',
  }, {
    title: 'Small Batch: Cranachan Cream Ale',
    description: ['A cream ale, brewed with raspberry and milk sugars, balancing sweet and tart summer berry with soft bitterness and a full bodied smooth mouthfeel.'],
    details: 'Ideal para combinar con:  Sriracha infused shredded beef, Chipotle steak tacos y Chilli chocolate fondant.',
    label: '16.1',
    level: 'high',
    srcImage: '/media/image 4.jpg',
  }],
};

export default function drinks(state = initialState, action) {
  switch (action.type) {
    case '@drinks/list':
      return {
        ...state,
        list: action.list,
      };
    default:
      return state;
  }
}
