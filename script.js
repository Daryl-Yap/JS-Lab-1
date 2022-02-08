const firstName = "Daryl";
const age = "26";
const birthday = "February 31, 1995";
const pineapplePizza = true;
const lifeEvents = [
  { schoolEvent: "finished high school" },
  { carEvent: "got a car" },
  { jobEvent: "got a job" },
  { drumEvent: "got good at drums" },
];

if (pineapplePizza) {
  console.log(
    `my name is ${firstName} and I love pineapple on pizza. I am ${age} years old and my birthday is on ${birthday}`
  );
} else {
  console.log(
    `my name is ${firstName} and I hate pineapple on pizza. I am ${age} years old and my birthday is on ${birthday}`
  );
}

for (let i = 0; i <= lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}

let counter = 0;

while (true) {
  let randomNumber = Math.floor(Math.random() * 10) + 1;
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
