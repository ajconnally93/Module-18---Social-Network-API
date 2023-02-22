const names = [
    "Jay",
    "Andrew",
    "Brandon",
    "Kevin",
    "McFee",
    "Rodriguez",
    "Connally",
    "Roman",
    "Matthew",
    "Mark",
    "Luke",
    "John",
    "Solomon",
    "Elijah",
    "Mary",
    "Augustine",
    "Tertullian",
    "Irenaeus",
    "Ignatius",
    "Ambrose",
    "Paul",
    "Peter",
  ];


  
const thoughts = [
    "Therefore do not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own.",
    "Do to others as you would have them do to you.",
    "Let your light shine before others, that they may see your good deeds and glorify your Father in heaven.",
    "The Lord is my shepherd, I lack nothing.",
    "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters.",
    "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.",
    "And now these three remain: faith, hope and love. But the greatest of these is love.",
    "Trust in the Lord with all your heart and lean not on your own understanding.",
    "The Lord is my strength and my shield; my heart trusts in him, and he helps me. My heart leaps for joy, and with my song I praise him.",
    "Folly brings joy to one who has no sense, but whoever has understanding keeps a straight course.",
    "A gentle answer turns away wrath, but a harsh word stirs up anger.",
    "Whoever conceals hatred with lying lips and spreads slander is a fool.",
    "Lazy hands make for poverty, but diligent hands bring wealth.",
    "The righteous care for the needs of their animals, but the kindest acts of the wicked are cruel.",
    "A cheerful heart is good medicine, but a crushed spirit dries up the bones.",
    "A faithful friend is a sturdy shelter; he who finds one finds a treasure.",
    "The wicked put up a bold front, but the upright give thought to their ways.",
    "Pride goes before destruction, a haughty spirit before a fall.",
];


  
const reactions = [
    "Like",
    "Amazement",
    "Joy",
    "Excitement",
    "Unsettled",
    "Intrigued",
    "Attentive",
    "Happy",
    "Content",
    "Pleased",
    "Relaxed",
    "Proud",
    "Inspired",
    "Surprised"
];



  
// have to use math.floor and math.random to get a random element from a list.
// Python has a built in .random function, unfortunately Javascript does not
const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
  

// have to use getRandomItem instead of .random, because again, this is not Python
const getRandomUsername = () =>
    `${getRandomItem(names)}.${getRandomItem(names)}`;
  


const getRandomThoughts = (int) => {

    // will push into empty results array
    let results = [];

    for (let i = 0; i < int; i++) {
      results.push({
        thoughtText: getRandomItem(thoughts),
        username: getRandomUsername(),
        reactions: [...getRandomReactions(5)],
      });
    }

    return results;
};
  
  // Function to generate random reactions
const getRandomReactions = (int) => {
    
    if (int === 1) {
      return getRandomItem(reactions);
    }

    let results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        reactionBody: getRandomItem(reactions),
        username: getRandomUsername(),
      });
    }

    return results;
}
  


// will use in the seed.js file
module.exports = { getRandomUsername, getRandomThoughts, getRandomReactions };