const firstName = "Daryl";
const age = "26";
const birthday = "February 31, 1995";
const pineapplePizza = true;
const lifeEvents = [
  { schoolEvent: "finished high school" },
  { carEvent: "got a car" },
  { jobEvent: "got a job" },
  { drumEvent: "got good at drums" }, // the array doesnt NEED a property
];
const hours = 50;
const wage = 10;

if (pineapplePizza) {
  console.log(
    `my name is ${firstName} and I love pineapple on pizza. I am ${age} years old and my birthday is on ${birthday}`
  );
} else {
  console.log(
    `my name is ${firstName} and I hate pineapple on pizza. I am ${age} years old and my birthday is on ${birthday}`
  );
}

for (let i = 0; i < lifeEvents.length; i++) {
  //i <= would do 1 more answer than the length if i starts at 0
  console.log(lifeEvents[i]);
}

let counter = 0; //cleaner to keep all variables at the top

while (true) {
  const randomNumber = Math.floor(Math.random() * 10) + 1; //not let because it is a brand new random number at the start of every loop (let, instead wants to revalue the declaration?)
  if (randomNumber !== 5) {
    counter++;
    console.log("randomNumber !== 5");
  } else {
    counter++;
    console.log(
      `5 === 5! it took ${counter} iterations to randomly generate the number 5`
    );
    break;
  }
}

if (hours <= 40) {
  let pay = hours * wage;
  const weeks = Math.floor(1000000 / pay);
  console.log(
    `Your paycheck comes out to ${pay}. it will take ${
      1000000 / pay //should make a separate formula to put this in Math.floor for a clean integer
    } weeks to become a millionaire`
  );
} else {
  pay = 40 * wage + (hours - 40) * (wage * 1.5);
  const weeks = Math.floor(1000000 / pay);
  console.log(
    `Your paycheck comes out to ${pay}. it will take ${weeks} weeks to become a thicc millionaire`
  );
}
