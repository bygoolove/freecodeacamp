const myPlants = [
    {
      type: "flowers",
      list: [
        "rose",
        "tulip",
        "dandelion"
      ]
    },
    {
      type: "trees",
      list: [
        "fir",
        "pine",
        "birch"
      ]
    }
  ];
  const secondTree = myPlants[1].list[1];


  const myArray = [];
for ( let i= 1; i<6;i++){
  myArray.push(i);
}


const myArray = [];
for (let i=1; i<11; i+=2){
myArray.push(i);
}

const myArray = [];
for ( let i=9; i>0; i-=2){
  myArray.push(i);
}

const myArr = [2, 3, 4, 5, 6];

// Only change code below this line
let total=0
for ( let i = 0; i<myArr.length; i++){
  total += myArr[i];
}
