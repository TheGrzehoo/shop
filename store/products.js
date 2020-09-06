const state = () => ({
  products: [
    {
      id: 1,
      name: 'Playstation1',
      price: 100,
      sizes: [
        {
          value: 'X',
          text: '250 GB',
          availability: 'available',
        },
        {
          value: 'Y',
          text: '500 GB',
          availability: 'unavailable',
        },
      ],
      icon:
        'https://demo227-pl.yourtechnicaldomain.com/pol_pm_Playstation-4-Slim-7_1.jpg',
    },
    {
      id: 2,
      name: 'Playstation2',
      price: 200,
      sizes: [
        {
          value: 'X',
          text: '250 GB',
          availability: 'available',
        },
        {
          value: 'Y',
          text: '500 GB',
          availability: 'unavailable',
        },
      ],
      icon:
        'https://demo227-pl.yourtechnicaldomain.com/pol_pm_Playstation-4-Slim-7_1.jpg',
    },
    {
      id: 3,
      name: 'Playstation3',
      price: 300,
      sizes: [
        {
          value: 'X',
          text: '250 GB',
          availability: 'available',
        },
        {
          value: 'Y',
          text: '500 GB',
          availability: 'unavailable',
        },
      ],
      icon:
        'https://demo227-pl.yourtechnicaldomain.com/pol_pm_Playstation-4-Slim-7_1.jpg',
    },
    {
      id: 4,
      name: 'Playstation4',
      price: 400,
      sizes: [
        {
          value: 'X',
          text: '250 GB',
          availability: 'available',
        },
        {
          value: 'Y',
          text: '500 GB',
          availability: 'unavailable',
        },
      ],
      icon:
        'https://demo227-pl.yourtechnicaldomain.com/pol_pm_Playstation-4-Slim-7_1.jpg',
    },
  ],
})

const getters = {
  allProducts: (state) => state.products,
  product: (state) => (id) =>
    state.products.find((product) => product.id === id),
  getProducts: (state) => (idArray) =>
    state.products.filter((item) => idArray.includes(item.id)),
}

export default {
  state,
  getters,
}
