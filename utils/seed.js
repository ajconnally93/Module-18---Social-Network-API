const connection = require('../config/connection');
const { User, Thought } = require('../models');

// created from data.js file
const { getRandomUsername, getRandomThoughts, getRandomReactions } = require('./data');



// throw error
connection.on('error', (err) => err);

// console.log("TESTING 1");



connection.once('open', async () => {


    // ASYNC FUNCTIONS

  // delete  all existing users
  await User.deleteMany({});
  // delete all existing thoughts
  await Thought.deleteMany({});

  // creates empty array to store users in. will push into later
  let allUsers = [];
  for (let i = 0; i < 5; i++) {
    
    const username = getRandomUsername();
    const userEmail = `${username}@email.com`;

    // pushes into users empty array
    allUsers.push({
      username,
      email: userEmail,
    });
  }

  


  await User.collection.insertMany(allUsers);

  // data which will appear in database
  console.table(allUsers);





  // let allThoughts = [];
  // for (let i = 0; i < 5; i++) {
    
  //   const thought = getRandomThoughts();
  //   // const userEmail = `${thought}@email.com`;

  //   // pushes into allThoughts empty array
  //   allThoughts.push({
  //     username: thought,
  //     // email: userEmail,
  //   });
  // console.table(allThoughts);
  // }


  // let allReactions = [];
  // for (let i = 0; i < 5; i++) {
    
  //   const reaction = getRandomReactions();
  //   // const userEmail = `${thought}@email.com`;

  //   // pushes into users empty array
  //   allReactions.push({
  //     username: reaction,
  //     // email: userEmail,
  //   });
  // console.table(allReactions);
  // }



  process.exit(0);
});

// console.log("TEST AT END OF SEED.JS FILE");



// add thoughts seeds