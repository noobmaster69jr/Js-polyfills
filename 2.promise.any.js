function myPromiseAny(promiseList){
    return new Promise((resolve, reject) => {
         let errorList = [];
         errorRejectCount = 0;
        promiseList.forEach((promise) => {
            promise.then(value => resolve(value)).catch(error => {
                errorRejectCount += 1
                errorList.push(error)
                if(errorRejectCount == promiseList.length){
                    reject(errorList)
                }
            })
        })
    })
}

// Test Case 1
/*
const test1 = new Promise(function (resolve, reject) {
  setTimeout(reject, 500, 'one');
});
const test2 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 600, 'two');
});
const test3 = new Promise(function (resolve, reject) {
  setTimeout(reject, 200, 'three');
});

myPromiseAny([test1, test2, test3])
  .then(function (value) {
    // first and third fails, 2nd resolves
    console.log(value);
  })
  .catch(function (err) {
    console.log(err);
  });

*/

  //test case 2

  const test1 = new Promise(function (resolve, reject) {
    setTimeout(reject, 500, 'one');
  });
  const test2 = new Promise(function (resolve, reject) {
    setTimeout(reject, 600, 'two');
  });
  const test3 = new Promise(function (resolve, reject) {
    setTimeout(reject, 200, 'three');
  });
  
  myPromiseAny([test1, test2, test3])
    .then(function (value) {
      console.log(value);
    })
    .catch(function (err) {
      // all three fails
      console.log(err);
    });
