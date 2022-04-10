
import { createStore } from 'vuex'

export default createStore({
  state: {
    id: 1,
    order: {
      id: 0,
      name: '',
      phone: '',
      email: '',
      description: '',
      price: 0,
      flavors: [],
      ornaments: []
    },
    // PASTELES
    cakes: [
      {
        type: 'Fluffy', background: 'purple-panel',
        features: [
          { img: require('@/assets/images/resources/Cakes/Spongy/chocolate.jpg'), flavor: 'Chocolate', price: 250, stock: 10 },
          { img: require('@/assets/images/resources/Cakes/Spongy/strawberry.jpg'), flavor: 'Strawberry', price: 220, stock: 10 },
          { img: require('@/assets/images/resources/Cakes/Spongy/vanilla.jpg'), flavor: 'Vanilla', price: 200, stock: 10 },
          { img: require('@/assets/images/resources/Cakes/Spongy/lemon.jpg'), flavor: 'Lemon', price: 230, stock: 10 },
          { img: require('@/assets/images/resources/Cakes/Spongy/orange.jpg'), flavor: 'Orange', price: 210, stock: 10 }
        ]
      },
      {
        type: 'Butter', background: 'red-panel',
        features: [
          { img: require('@/assets/images/resources/Cakes/Butter/vanilla_cream.jpg'), flavor: 'Vanilla Cream', price: 150, stock: 10 },
          { img: require('@/assets/images/resources/Cakes/Butter/brown_butter.jpg'), flavor: 'Brown Butter', price: 180, stock: 10 },
          { img: require('@/assets/images/resources/Cakes/Butter/chocolate_cream.jpg'), flavor: 'Chocolate Cream', price: 110, stock: 10 },
          { img: require('@/assets/images/resources/Cakes/Butter/orange_bath.jpg'), flavor: 'Orange Bath', price: 130, stock: 10 },
          { img: require('@/assets/images/resources/Cakes/Butter/caramel.jpg'), flavor: 'Caramel', price: 170, stock: 10 }
        ]
      },
      {
        type: 'Meringue', background: 'blue-panel',
        features: [
          { img: require('@/assets/images/resources/Cakes/Meringue/french_meringue.jpg'), flavor: 'French Meringue', price: 340, stock: 10 },
          { img: require('@/assets/images/resources/Cakes/Meringue/italian_meringue.jpg'), flavor: 'Italian Meringue', price: 380, stock: 10 },
          { img: require('@/assets/images/resources/Cakes/Meringue/swiss_meringue.jpg'), flavor: 'Swiss Meringue', price: 310, stock: 10 },
          { img: require('@/assets/images/resources/Cakes/Meringue/japanese_meringue.jpg'), flavor: 'Japanese Meringue', price: 330, stock: 10 },
          { img: require('@/assets/images/resources/Cakes/Meringue/chocolate_meringue.jpg'), flavor: 'Chocolate Meringue', price: 400, stock: 10 }
        ]
      },
/*
      {
        type: 'Oil', background: 'yellow-panel',
        features: [
          { img: require('@/assets/images/resources/Cakes/Oil/.jpg'), flavor: '', price: 100, stock: 10 },
          { img: require('@/assets/images/resources/Cakes/Oil/.jpg'), flavor: '', price: 100, stock: 10 },
          { img: require('@/assets/images/resources/Cakes/Oil/.jpg'), flavor: '', price: 100, stock: 10 },
          { img: require('@/assets/images/resources/Cakes/Oil/.jpg'), flavor: '', price: 100, stock: 10 },
          { img: require('@/assets/images/resources/Cakes/Oil/.jpg'), flavor: '', price: 100, stock: 10 }
        ]
      },
      {
        type: 'Fermented', background: 'green-panel',
        features: [
          { img: require('@/assets/images/resources/Cakes/Fermented/.jpg'), flavor: '', price: 100, stock: 10 },
          { img: require('@/assets/images/resources/Cakes/Fermented/.jpg'), flavor: '', price: 100, stock: 10 },
          { img: require('@/assets/images/resources/Cakes/Fermented/.jpg'), flavor: '', price: 100, stock: 10 },
          { img: require('@/assets/images/resources/Cakes/Fermented/.jpg'), flavor: '', price: 100, stock: 10 },
          { img: require('@/assets/images/resources/Cakes/Fermented/.jpg'), flavor: '', price: 100, stock: 10 }
        ]
      },
      {
        type: 'Custard', background: 'turquoise-panel',
        features: [
          { img: require('@/assets/images/resources/Cakes/Custard/.jpg'), flavor: '', price: 100, stock: 10 },
          { img: require('@/assets/images/resources/Cakes/Custard/.jpg'), flavor: '', price: 100, stock: 10 },
          { img: require('@/assets/images/resources/Cakes/Custard/.jpg'), flavor: '', price: 100, stock: 10 },
          { img: require('@/assets/images/resources/Cakes/Custard/.jpg'), flavor: '', price: 100, stock: 10 },
          { img: require('@/assets/images/resources/Cakes/Custard/.jpg'), flavor: '', price: 100, stock: 10 }
        ]
      }
*/
    ],
    ornaments: [
      {
        type: 'Candle 1', background: 'blue-panel',
        features: [
          { img: require('@/assets/images/resources/Decorations/candle_zero.png'), decoration: 'Candle Zero', price: 25, stock: 10 },
          { img: require('@/assets/images/resources/Decorations/candle_one.png'), decoration: 'Candle One', price: 25, stock: 10 },
          { img: require('@/assets/images/resources/Decorations/candle_two.png'), decoration: 'Candle Two', price: 25, stock: 10 },
          { img: require('@/assets/images/resources/Decorations/candle_three.png'), decoration: 'Candle Three', price: 25, stock: 10 },
          { img: require('@/assets/images/resources/Decorations/candle_four.png'), decoration: 'Candle Four', price: 25, stock: 10 },
        ]
      },
      {
        type: 'Candle 2', background: 'red-panel',
        features: [
          { img: require('@/assets/images/resources/Decorations/candle_five.png'), decoration: 'Candle Five', price: 25, stock: 10 },
          { img: require('@/assets/images/resources/Decorations/candle_six.png'), decoration: 'Candle Six', price: 25, stock: 10 },
          { img: require('@/assets/images/resources/Decorations/candle_seven.png'), decoration: 'Candle Seven', price: 25, stock: 10 },
          { img: require('@/assets/images/resources/Decorations/candle_eight.png'), decoration: 'Candle Eight', price: 25, stock: 10 },
          { img: require('@/assets/images/resources/Decorations/candle_nine.png'), decoration: 'Candle Nine', price: 25, stock: 10 },
        ]
      }
    ],
    orders: [

      {
        id: 0,
        name: 'Christian',
        phone: '2224656249',
        email: 'christian@mail.com',
        description: 'Quisiera un pastel muy bonito',
        price: 950,
        flavors: ['Strawberry', 'Lemon', 'Caramel'],
        ornaments: ['Candle Two', 'Candle Eight']
      }

    ],
  },
  getters: {
    getCakes(state) {
      return state.cakes;
    },
    getOrnaments(state) {
      return state.ornaments;
    },
    getOrders(state) {
      return state.orders;
    },
    getOrder(state) {
      return state.order;
    }
  },
  mutations: {
    changeName(state, name) {
      state.order.name = name;
    },
    changePhone(state, phone) {
      state.order.phone = phone;
    },
    changeEmail(state, email) {
      state.order.email = email;
    },
    changeDescription(state, description) {
      state.order.description = description;
    },
    changeFlavors(state, flavors) {
      state.order.flavors.push(flavors);
    },
    changeOrnaments(state, ornaments) {
      state.order.ornaments.push(ornaments);
    },
    saveOrder(state) {
      if(state.order.name != '' || state.order.phone != '' || state.order.email != '' || state.order.description != '') {
        state.order.id = state.id;
        for(let orderFlavor of state.order.flavors) {
          for(let cake of state.cakes) {
            for(let flavor of cake.features) {
              if(orderFlavor == flavor.flavor && flavor.stock > 0) {
                flavor.stock --;
                state.order.price += flavor.price;
              }
            }
          }
        }
        for(let orderOrnament of state.order.ornaments) {
          for(let ornament of state.ornaments) {
            for(let decoration of ornament.features) {
              if(orderOrnament == decoration.decoration && decoration.stock > 0) {
                decoration.stock --;
                state.order.price += decoration.price;
              }
            }
          }
        }
        this.state.orders.push(JSON.parse(JSON.stringify(state.order)));
        state.id ++;
        state.order.id = 0;
        state.order.name = '';
        state.order.phone = '';
        state.order.email = '';
        state.order.description = '';
        state.order.price = 0;
        state.order.flavors = [];
        state.order.ornaments = [];
      }
    }
  },
  actions: {
    changeName({commit}, name) {
      commit("changeName", name);
    },
    changePhone({commit}, phone) {
      commit("changePhone", phone);
    },
    changeEmail({commit}, email) {
      commit("changeEmail", email);
    },
    changeDescription({commit}, description) {
      commit("changeDescription", description);
    },
    changeFlavors({commit}, flavors) {
      commit("changeFlavors", flavors);
    },
    changeOrnaments({commit}, ornaments) {
      commit("changeOrnaments", ornaments);
    },
    saveOrder({commit}) {
      commit("saveOrder");
    }
  },
  modules: {
  }
});
