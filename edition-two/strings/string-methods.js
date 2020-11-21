// Finding the length of a string:
let browserType = 'mozilla';
browserType.length;


// Retrieving a specific string character:
browserType[0];

// retrieve the last character of any string:
browserType[browserType.length-1];

// retrieve the last character of any string:
browserType.indexOf('zilla');

browserType.indexOf('vanilla');
// give you a result of -1 — this is returned when the substring, in this case 'vanilla',
// is not found in the main string.

// You could use this to find all instances of strings that don't contain the substring 'mozilla':

if(browserType.indexOf('mozilla') !== -1) {

}


// When you know where a substring starts inside a string, and you know at which character
// you want it to end, slice() can be used to extract it

browserType.slice(0,3);

//If you want to extract all of the remaining characters in a string after
 // a certain character, you don't have to include the second parameter!

 browserType.slice(2);

 // Changing case:
let radData = 'My NaMe Is MuD';
radData.toLowerCase();
radData.toUpperCase();

// Updating parts of a string:
browserType.replace('moz', 'van');

browserType = browserType.replace('moz', 'van');
