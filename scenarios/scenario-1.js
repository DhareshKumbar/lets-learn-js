/*
Question: Lets say I have 3 API calls as below,
getUser(),
getOrders(),
getBasket(), 
I need to wait until all the 3 API calls are completed and then display the result on the dashboard
*/

/* API call: getUser() */

function getUser() {
  return new Promise(resolve => {
    setTimeout(() => resolve('User data is loaded!'), 1000);
  });
}

/* API call: getOrders() */

function getOrders() {
  return new Promise(resolve => {
    setTimeout(() => resolve('Orders data is loaded!'), 1500);
  });
}

/* API call: getBasket() */

function getBasket() {
  return new Promise(resolve => {
    setTimeout(() => resolve('Basket data is loaded!'), 500);
  });
}

/* Solution approach: User Promise.all() to ensure all apis get executed first and then perform the next action*/

Promise.all(
  [getUser(), getOrders(), getBasket()]
).then(
results => {
  console.log('All the APIs data has loaded!');
  //'User data is loaded!'
  //'Orders data is loaded!'
  //'Basket data is loaded!'
  console.log(results);
}
).catch(error => {
  console.error('Error, one of the API calls failed!', error);
});
