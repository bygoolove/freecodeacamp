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


