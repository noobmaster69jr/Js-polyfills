function myPromiseRace(promiseList){
    return new Promise((resolve, reject) => {
        promiseList.forEach(promise => {
              // we'll have to resolve  for case where passed value is not a promise so 
            // by resolving it we get a promise value => Promise.resolve()
            Promise.resolve(promise).then(resolve).catch(reject);
        } )
    })
}

//test case 1
/*
const test1 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 500, 'one');
});
const test2 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 100, 'two');
});
const test3 = new Promise(function (resolve, reject) {
  setTimeout(reject, 200, 'three');
});
myPromiseRace([test1, test2, test3])
  .then(function (value) {
    // first two resolve, 3rd fails, but promise2 is faster
    console.log(value);
  })
  .catch(function (err) {
    console.log(err);
  });

*/

const test1 = new Promise(function (resolve, reject) {
setTimeout(resolve, 500, 'one');
});
const test2 = new Promise(function (resolve, reject) {
setTimeout(resolve, 100, 'two');
});
const test3 = new Promise(function (resolve, reject) {
setTimeout(reject, 40, 'three');
});
myPromiseRace([1, test1, test2, test3])
  .then(function (value) {
    // first two resolve, 3rd fails, but promise3 is faster
    console.log(value);
  })
  .catch(function (err) {
    console.log(err);
  });