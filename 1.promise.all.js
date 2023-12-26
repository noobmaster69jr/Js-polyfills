

function myPromiseAll(promiseList){
    return new Promise((resolve, reject) => {
        let promiseResolveCount = 0
        let result = []
        promiseList.forEach(promise => {
            promise.then(
              value => {
                promiseResolveCount += 1;
                result.push(value)
                if(promiseList.length == promiseResolveCount){
                    resolve(result)
                }
              }

            ).catch(error =>  reject(error))
        })
    })
}


// function task(time) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve(time);
//     }, time);
//   });
// }


// test case 1

// const promiseList = [task(2000), task(1000), task(3000) ];
// //run promise.all
// myPromiseAll(promiseList)
//   .then((results) => {
//     console.log('got results', results);
//   })
//   .catch(console.error);


  //test case 2

function task(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (time < 3000) {
        reject('Rejected');
      } else {
        resolve(time);
      }
    }, time);
  });
}
const promiseList2 = [task(1000), task(5000), task(3000)];
//run promise.all
myPromiseAll(promiseList2)
  .then((results) => {
    console.log('got results', results);
  })
  .catch(console.error);