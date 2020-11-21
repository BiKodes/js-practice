// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// 2. RAW TEXT STRINGS
let storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."

let insertX = [
  'Willy the Goblin',
  'Big Daddy',
  'Father Christmas']

let insertY = [
  'the soup kitchen',
  'Disneyland',
  'the White House']

let insertZ = [
  'spontaneously combusted',
  'melted into a puddle on the sidewalk',
  'turned into a slug and crawled away']

// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION
randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;
  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);
  console.log(xItem)
  console.log(yItem)
  console.log(zItem)
  newStory = newStory.replace(":insertx", xItem);
  newStory = newStory.replace(":insertx", xItem);
  newStory = newStory.replace(":inserty", yItem);
  newStory = newStory.replace(":insertz", zItem);

  console.log(newStory)

  if(customName.value !== '') {
    newStory.replace("Bob", customName.value);
  }

  if(document.getElementById("uk").checked) {
    let weight_calc = Math.round(300*0.07142857) + 'stone';
    let temperature_calc = Math.round(94*-17.22222) + 'centigrade';

    weight_str = '300 pounds'
    temperature_str = '94 fahrenheit'


    weight = weight_str.replace('300 pounds', weight_calc);
    temperature = temperature_str.replace('94 fahrenheit', temperature_calc);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
