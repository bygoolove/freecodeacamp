function testStrict(val) {
  if (val === 7) {
    // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);

function compareEquality(a, b) {
  if (a === b) {
    // Change this line
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");

function testNotEqual(val) {
  if (val != 99) {
    // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);

function testStrictNotEqual(val) {
  if (val !== 17) {
    // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);

function testGreaterThan(val) {
  if (val > 100) {
    // Change this line
    return "Over 100";
  }

  if (val > 10) {
    // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);

function testGreaterOrEqual(val) {
  if (val >= 20) {
    // Change this line
    return "20 or Over";
  }

  if (val >= 10) {
    // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);

function testLessThan(val) {
  if (val < 25) {
    // Change this line
    return "Under 25";
  }

  if (val < 55) {
    // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);

function testLessOrEqual(val) {
  if (val <= 12) {
    // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {
    // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);


function testLogicalAnd(val) {
  if (val > 24 && val <= 50) {
    return "Yes";
  }

  return "No";
}

testLogicalAnd(10);



function testLogicalOr(val) {
  if (val > 20 || val < 10) {
    return "Outside";
  }

  return "Inside";
}

testLogicalOr(15);


function testElse(val) {
  var result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  } 
  else {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

testElse(4);




function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }

  else if (val < 5) {
    return "Smaller than 5";
  }else{
    
  }

  return "Between 5 and 10";
}

testElseIf(7);



function testSize(num) {
  // Only change code below this line
if(num<5){
  return "Tiny"
}else if (num<10){
  return "Small"
}else if (num<15){
  return "Medium"
}else if(num<20){
  return "Large"
  }else if(num>=20){
    return"Huge"
  }

  return "Change Me";
  // Only change code above this line
}

testSize(7);


function switchOfStuff(val) {
  var answer = "";
 
switch(val){
  case "a":
  answer= "apple";
  break;
  case "b":
  answer="bird";
  break
  case"c":
  answer="cat";
  break;
  default:
  answer="stuff";
  break;
}

  return answer;
}

switchOfStuff(1);



function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line
switch(val){
  case 1:
  case 2:
  case 3:
  answer="Low";
  break;
  case 4:
  case 5:
  case 6:
  answer="Mid"
  break;
  case 7:
  case 8:
  case 9:
  answer="High";
  break;
}


  // Only change code above this line
  return answer;
}

sequentialSizes(1);



function chainToSwitch(val) {
  var answer = "";
  // Only change code below this line
switch(val){
  case "bob":
    answer = "Marley";
    break;
  case 42:
    answer = "The Answer";
    break;
   case 1:
    answer = "There is no #1";
    break;
   case 99:
    answer = "Missed me by this much!";
    break;
    case "John":
    answer="";
    break;
    case 156:
    answer="";
    break;
  default:
    answer = "Ate Nine";
  }

  // Only change code above this line
  return answer;
}

chainToSwitch(7);


function isLess(a, b) {
  // Only change code below this line
  return(a < b) 
   
  // Only change code above this line
}

isLess(10, 15);

var myDog = {
  // Only change code below this line
  name: "Jassy",
  legs: 4,
  tails:1,
  friends:[1,3]
  
  // Only change code above this line
  };

  var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
  };
  
  // Only change code below this line
  
  var hatValue = testObj.hat;      // Change this line
  var shirtValue = testObj.shirt;    // Change this line

  ar testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
  };
  
  // Only change code below this line
  
  var entreeValue = testObj["an entree"];   // Change this line
  var drinkValue = testObj ["the drink"];    // Change this line

  var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
  };
  
  // Only change code below this line
  
  var playerNumber = 16;       // Change this line
  var player = testObj[playerNumber]

  var myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  
  // Only change code below this line
  myDog.name = "Happy Coder"


  var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  
  myDog.bark = "woof"


  var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
  };
  
  // Only change code below this line
  delete myDog.tails;