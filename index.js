// ADD CODE HERE
function subtractTwo(num) {
    //   return the value of num -2
      return num-2;
      
    }
    
    function map(array, callback) {
    //   create new array - newArray
      const result = [];
    //   iterate over the input array
      for( let i = 0; i< array.length; i++){
        // 			 apply callback funtion and store the result in the new array 
          result.push(callback(array[i]));
      } 
    // return the new array 
      return result;
    }
    
    
    // Uncomment these to check your work!
    // console.log(typeof subtractTwo); // should log: 'function'
    // console.log(typeof map); // should log: 'function'
    console.log(map([3,4,5], subtractTwo)); // should log: [ 1, 2, 3 ]