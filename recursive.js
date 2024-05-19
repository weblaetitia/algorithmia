function eatCake1(bites) {
  if (bites === 0) {
    console.log("The cake is finished!");
  } else {
    console.log(`Yum! ${bites} bites of cake left.`);
    eatCake1(bites - 1);
  }
}
// eatCake1(3);
// Yum! 3 bites of cake left.
// Yum! 2 bites of cake left.
// Yum! 1 bites of cake left.
// The cake is finished!

function eatCake2(bites) {
  if (bites === 0) {
    console.log("The cake is finished!");
  } else {
    eatCake2(bites - 1);
    console.log(`Yum! ${bites} bites of cake left.`);
  }
}
// eatCake2(3);
// The cake is finished!
// Yum! 1 bites of cake left.
// Yum! 2 bites of cake left.

function eatCake3(bites) {
  if (bites === 0) {
    return "The cake is finished!";
  } else {
    const message = eatCake3(bites - 1);
    console.log(`Returning ${message}`);

    return `Yum! ${bites} bites of cake left. ${message}`;
  }
}

const cakeMessage = eatCake3(3);
console.log(cakeMessage);
