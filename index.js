var obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
  
const {numbers:{a,b}} = obj

console.log(a, b)

var arr = [1, 2];

[arr[0], arr[1]]=[arr[1], arr[0]]

console.log(arr)


const raceResults = ([first, second, third, ...rest]) =>({first, second, third, rest})

console.log(raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre']))

/*
  {
    first: "Tom",
    second: "Margaret",
    third: "Allison",
    rest: ["David", "Pierre"]
  }
*/