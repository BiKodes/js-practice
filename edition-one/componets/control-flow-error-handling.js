function checkData() {
  if (document.form1.threeChar.value.length == 3) {
    return true;
  } else {
    alert(
      'Enter exactly three characters.' +
      `${document.form1.threeChar.value} is not valid.`);
    return false;
    )
  }
}


// switch statement:

switch(fruittype) {
  case 'Oranges':
   console.log('Oranges are $0.59 a pound.');
   break;

 case 'Apples':
  console.log('Apples are $0.32 a pound.');
  break;

 case 'Bananas':
  console.log('Bananas are $0.48 a pound.');
  break;

 case 'Cherries':
  console.log('Cherries are $3.00 a pound.');
  break;

 case 'Mangoes':
  console.log('Mangoes are $0.56 a pound.');
  break;

 case 'Papayas':
  console.log('Mangoes and papayas are $2.79 a pound.');
  break;

 default:
  console.log(`Sorry, we are out of ${fruittype}.`);
}

console.log("Is there anything else you'd like?");


// throw statement:
throw 'Error2';
throw 42;
throw true;
throw {toString: function() {return "I'm an object!"}};


// Create an object type UserException:
function UserException(message) {
  this.message = message;
  this.name = 'UserException';
}

// Make the exception convert to a pretty string when used as a string
// (e.g., by the error console)

UserException.prototype.toString = function() {
  return `${this.name}: "${this.message}"`;
}

// Create an instance of the object type and throw it:
throw new UserException('value too high');


// try...catch statement:
function getMonthName(mo) {
  mo = mo - 1;
  let months = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
                'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  if (months[mo]) {
    return months[mo];
  } else {
    throw 'InvalidMonthNo';
  }
}

try {
  monthName = getMonthName(myMonth);
}

catch (e) {
  monthName = 'unknown';
  logMyErrors(e);
}

// The catch block:

try {
  throw 'myException';
}

catch (err) {
  logMyErrors(err);
  console.error(); //For Debbuging
}

// The finally block:

openMyFile();

try {
  writeMyFile(theData);
} catch(e) {
  handleError(e);
} finally {
  closeMyFile();
}

// If the finally block returns a value, this value becomes the return value of the
// entire try…catch…finally production, regardless of any return statements in the try and catch blocks:
function f() {
  try {
    console.log(0);
    throw 'bogus';
  } catch(e) {
    console.log(1);
    return true;

    console.log(2);  //not reachable
  } finally{
    console.log(3);
    return false;   // overwrites the previous "return"

    console.log(4) //not reachable

  }

  // "return false" is executed now
  console.log(5) // not reachable
}

console.log(f()) // 0, 1, 3, false


// Overwriting of return values by the finally block also applies to exceptions thrown
// or re-thrown inside of the catch block:

function f() {
  try {
    throw 'bogus';
  } catch(e) {
    console.log('caught inner "bogus"');
    throw e;
  } finally {
    return false;  // overwrites the previous "throw"
  }
  // "return false" is executed now
}


try {
console.log(f());
} catch(e) {
  // this is never reached!
  // while f() executes, the `finally` block returns false,
  // which overwrites the `throw` inside the above `catch`
  console.log('caught outer "bogus"');
}

// Utilizing Error objects:
function doSomethingErrorProne() {
  if (ourCodeMakesAMistake()) {
    throw (new Error('The message'));
  } else {
    doSomethingToGetAJavascriptError();
  }
}

try {
  doSomethingErrorProne();
} catch(e) {                    // NOW, we actually use `console.error()`
  console.error(e.name);       // logs 'Error'
  console.error(e.message);    // logs 'The message', or a JavaScript error message
}



// Nested try-blocks:

try {
  try {
    throw new Error('oops');
  }

  finally {
    console.log('finally');
  }
}

catch (ex) {
  console.error('outer', ex.message);
}

try {
  try {
    throw new Error('oops');
  }
  catch(ex) {
    console.error('inner', ex.message);
  }
  finally {
    console.log('finally');
  }
}

catch (ex) {
  console.error('outer', ex.message);
}


try {
  try {
    throw new Error('oops');
  }
  catch (ex) {
    console.error('inner', ex.message);
    throw ex;
  }
  finally {
    console.log('finally');
  }
}
catch (ex) {
  console.error('outer', ex.message);
}
