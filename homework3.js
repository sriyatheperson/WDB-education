
//Question 1
  function max(iterable, key) {
    var maximum = iterable[0];
    for (var i in iterable) {
      var current = iterable[i];
      if (key(current) >= key(maximum)) {
        maximum = current;
      }
    }
    return maximum;
  }


//Question 2
const reverser = (number) => (-number);

//Question 4
function changer(object, key, value) {
    var prev = JSON.parse(object)[key];
    if (Array.isArray(prev)) {
      return [...prev, value];
    } else if (typeof prev == 'object' && prev != null) {
      prev[key] = value;
    } else {
      return value;
    }
    return null;
  }
//do we assume that key is a string, do we use . or []
// in the else case 
// how do we even update the original json
//Question 5
async function promise_me(truthy) {
    const a = new Promise((resolve, reject) => {
        console.log(1)
        resolve(5)
    })
    console.log(2)
    console.log(3)
    console.log(4)
    const five = await a;
    console.log(five)
    return five
}

