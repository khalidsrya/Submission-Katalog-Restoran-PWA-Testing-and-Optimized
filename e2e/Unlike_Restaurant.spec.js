const assert = require('assert');

Feature('Unlike Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.dontSeeElement('.restaurant-item');
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.dontSeeElement('.restaurant-item');

  I.amOnPage('/');

  I.waitForElement('.restaurant-item-content__name a', 5);
  I.seeElement('.restaurant-item-content__name a');
  const firstRestaurant = locate('.restaurant-item-content__name a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');
  const unlikedRestaurantName = await I.grabTextFrom('.restaurant-item-content__name');

  assert.strictEqual(firstRestaurantName, unlikedRestaurantName);

  I.seeElement('.restaurant-item-content__name a');
  await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.dontSeeElement('.restaurant-item');
});
