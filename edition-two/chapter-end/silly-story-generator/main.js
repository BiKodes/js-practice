// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// 2. "RAW TEXT STRINGS"

let storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

let insertX = [
  'Willy the Goblin',
  'Big Daddy',
  'Father Christmas'];

let insertY = [
  'the soup kitchen',
  'Disneyland',
  'the White House'];

let insertZ = [
  'spontaneously combusted',
  'melted into a puddle on the sidewalk',
  'turned into a slug and crawled away'];

  // 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

  randomize.addEventListener('click', result);

  function result() {

    let newStory = storyText;

    let xItem = insertX;
    let yItem = insertY;
    let zItem = insertZ;

    newStory.replace(':insertx:', xItem);
    newStory.replace(':inserty:', yItem);
    newStory.replace(':insertz:', zItem);

    if(customName.value !== '') {
      let name = customName.value;

      newStory.replace(name, 'Biko');

    }

    if(document.getElementById("uk").checked) {
      let weight = Math.round(300 * 0.07142857 ) + 'stone';
      let temperature =  Math.round(94 * -17.22222 ) + 'centigrade';

      weight = 21 + 'stone';
      temperature = -1619 + 'centigrade'

    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
  }
