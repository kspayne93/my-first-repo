  var arr1 = [15, 17, 22, 4, 3, 35, 11, 12, 38, 8];
  // Create a function that will average all the even or odd numbers in an array.
  function averageArray(array, evensOrOdds) {
    var total = 0;
    var count = 0;
    for (var i = 0; i < array.length; i++) {
      if (evensOrOdds == "evens") {
        if (array[i] % 2 == 0) {
          total += array[i];
          count++;
        };
      } else if (evensOrOdds == "odds") {
        if (array[i] % 2 != 0) {
          total += array[i];
          count++;
        };
      };
    };
    return total / count
  };
  console.log(averageArray(arr1, "odds"));
