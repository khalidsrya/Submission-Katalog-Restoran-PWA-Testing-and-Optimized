/* eslint-disable max-len */
import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant__title">${restaurant.name}</h2>
  <img class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="restaurant__info">
    <h3>Informasi Terkait Restauran</h3>
    <h4>Nama Resto :</h4>
    <p>${restaurant.name}</p>
    <h4>Kota :</h4>
    <p>${restaurant.city}</p>
    <h4>Alamat :</h4>
    <p>${restaurant.address} minutes</p>
    <h4>Rating :</h4>
    <p>${restaurant.rating} ⭐️</p>
    <h4>Menu Makanan :</h4>
    <p>${restaurant.menus.foods.map((food) => food.name)}</p>
    <h4>Menu Minuman :</h4>
    <p>${restaurant.menus.drinks.map((drink) => drink.name)}</p>
  </div>
  <div class="restaurant__overview">
    <h3>Overview</h3>
    <p>${restaurant.description}</p>
  </div>
  <div class="review">
  <h3>Reviews</h3>
  <p>${restaurant.customerReviews
    .map(
      (review) => `
    <div class="review-head">
    <p class="reviewer-name">${review.name} •</p>
    <p class="review-date">${review.date}</p>
    </div>
    <p class="reviewer-review">${review.review}</p>

    `,
    )
    .join('<br>')}
  </div>
`;

const createRestaurantItemTemplate = (restaurants) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
    <img class="restaurant-item__header__poster lazyload" data-src="${CONFIG.BASE_IMAGE_URL + restaurants.pictureId}" alt="${restaurants.name}">
      <div class="restaurant-item__header__rating">
        <p>⭐️<span class="restaurant-item__header__rating__score">${restaurants.rating}</span></p>
      </div>
    </div>
    <div class="restaurant-item__content">
      <h3 class="restaurant-item-content__name"><a href="/#/detail/${restaurants.id}">${restaurants.name}</a></h3>
      <h4 class="restaurant-item-content__city">Kota: ${restaurants.city}</h4>
      <p class="restaurant-item-content__description">${restaurants.description}</p>
    </div>
  </div>
`;
const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate, createRestaurantDetailTemplate, createLikeRestaurantButtonTemplate, createUnlikeRestaurantButtonTemplate,
};
