import FavoriteRestaurantIdb from '../../data/favorite-resto-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

/* eslint-disable indent */
const Favorite = {
  async render() {
    return `
            <div class="content">
            <h2 class="content__heading">Favorite Restaurant</h2>
            <div id="restaurants" class="restaurants">
        
            </div>
            </div>
        `;
  },

  async afterRender() {
    document.querySelector('#hero').style.display = 'none';
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favorite;
