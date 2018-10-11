"use strict";

/* let data = FooBar.getData();
                 let dataJSON = JSON.parse(data);
                 */
let customers = 0;

let time = new Date();
let h = time.getHours();
let m = time.getMinutes();
let s = time.getSeconds();
let hToSec = h * 3600;
let mToSec = m * 60;
let closingHour = 22 * 3600;
let currentHour = hToSec + mToSec;
let timeLeft = closingHour - currentHour;
let counter = 0;

function convertToHour(s) {
  let hours = Math.floor(s / 60 / 60);

  let hoursRemainderSec = s - hours * 60 * 60;

  let minutes = Math.floor(hoursRemainderSec / 60);

  let minutesRemainderSec = hoursRemainderSec - minutes * 60;
  let seconds = minutesRemainderSec;

  if (hours < 10) {
    hours = `0` + hours;
  }
  if (minutes < 10) {
    minutes = `0` + minutes;
  }
  if (seconds < 10) {
    seconds = `0` + seconds;
  }
  return hours + `:` + minutes + `:` + seconds;
}

function count() {
  counter++;
  document.querySelector(".closingTime").textContent = convertToHour(
    timeLeft - counter
  );
  if (timeLeft < 0) {
    document.querySelector(".closingTime").textContent = `Closed`;
  }
  setTimeout(count, 1000);
}
count();

console.log(JSON.parse(FooBar.getData()));
function init() {
  setInterval(update, 1000);
}
init();

function update() {
  let data = JSON.parse(FooBar.getData());
  handleBartenders(data.bartenders);
  handleTaps(data.taps);
  handleKegs(data.storage);
  handleQueue(data.queue);
  document.querySelector(".pplq").textContent = data.queue.length;
  console.log(data);
}

function handleQueue(queue) {
  if (queue.length > 0) {
    document.querySelector(".ppltotal").textContent =
      queue[queue.length - 1].id;
  } else {
  }
}

function handleBartenders(bartenders) {
  if (bartenders[0].status == "WORKING") {
    document.querySelector(".jonasText").textContent = "busy";
  } else {
    document.querySelector(".jonasText").textContent = "not busy";
  }

  if (bartenders[1].status == "WORKING") {
    document.querySelector(".peterText").textContent = "busy";
  } else {
    document.querySelector(".peterText").textContent = "not busy";
  }

  if (bartenders[2].status == "WORKING") {
    document.querySelector(".martinText").textContent = "busy";
  } else {
    document.querySelector(".martinText").textContent = "not busy";
  }
}

function handleKegs(storage) {
  storage.forEach(storage => {
    console.log("storage level of " + storage.name + ": " + storage.amount);
  });

  document
    .querySelector(".k0")
    .setAttribute("height", 133 - 13.3 * (10 - storage[1].amount));
  document
    .querySelector(".k0")
    .setAttribute("y", 72 + 13.3 * (10 - storage[1].amount));

  document
    .querySelector(".k1")
    .setAttribute("height", 133 - 13.3 * (10 - storage[9].amount));
  document
    .querySelector(".k1")
    .setAttribute("y", 72 + 13.3 * (10 - storage[9].amount));

  document
    .querySelector(".k2")
    .setAttribute("height", 133 - 13.3 * (10 - storage[4].amount));
  document
    .querySelector(".k2")
    .setAttribute("y", 72 + 13.3 * (10 - storage[4].amount));

  document
    .querySelector(".k3")
    .setAttribute("height", 133 - 13.3 * (10 - storage[7].amount));
  document
    .querySelector(".k3")
    .setAttribute("y", 66.5 + 13.3 * (10 - storage[7].amount));

  document
    .querySelector(".k4")
    .setAttribute("height", 133 - 13.3 * (10 - storage[3].amount));
  document
    .querySelector(".k4")
    .setAttribute("y", 66.5 + 13.3 * (10 - storage[3].amount));

  document
    .querySelector(".k5")
    .setAttribute("height", 133 - 13.3 * (10 - storage[9].amount));
  document
    .querySelector(".k5")
    .setAttribute("y", 68.5 + 13.3 * (10 - storage[9].amount));

  document
    .querySelector(".k6")
    .setAttribute("height", 133 - 13.3 * (10 - storage[0].amount));
  document
    .querySelector(".k6")
    .setAttribute("y", 0 + 13.3 * (10 - storage[0].amount));
}

function handleTaps(taps) {
  taps.forEach(taps => {
    console.log("Level of " + taps.beer + ": " + taps.level);
  });

  if (taps[0].inUse == true) {
    document
      .querySelector(".pipe-1")
      .setAttribute("fill", document.querySelector(".s0").getAttribute("fill"));
  }

  if (taps[1].inUse == true) {
    document
      .querySelector(".pipe-1")
      .setAttribute("fill", document.querySelector(".s1").getAttribute("fill"));
  }

  if (taps[2].inUse == true) {
    document
      .querySelector(".pipe-2")
      .setAttribute("fill", document.querySelector(".s2").getAttribute("fill"));
  }

  if (taps[3].inUse == true) {
    document
      .querySelector(".pipe-2")
      .setAttribute("fill", document.querySelector(".s3").getAttribute("fill"));
  }

  if (taps[4].inUse == true) {
    document
      .querySelector(".pipe-3")
      .setAttribute("fill", document.querySelector(".s4").getAttribute("fill"));
  }

  if (taps[5].inUse == true) {
    document
      .querySelector(".pipe-3")
      .setAttribute("fill", document.querySelector(".s5").getAttribute("fill"));
  }

  if (taps[6].inUse == true) {
    document
      .querySelector(".pipe-3")
      .setAttribute("fill", document.querySelector(".s6").getAttribute("fill"));
  }

  document.querySelector(".ppltotal").textContent = customers;

  document
    .querySelector(".s0")
    .setAttribute("y", 120.1 - taps[0].level / 20.83);
  document.querySelector(".s0").setAttribute("height", taps[0].level / 20.83);

  document
    .querySelector(".s1")
    .setAttribute("y", 120.1 - taps[1].level / 20.83);
  document.querySelector(".s1").setAttribute("height", taps[1].level / 20.83);

  document
    .querySelector(".s2")
    .setAttribute("y", 120.1 - taps[2].level / 20.83);
  document.querySelector(".s2").setAttribute("height", taps[2].level / 20.83);

  document
    .querySelector(".s3")
    .setAttribute("y", 120.1 - taps[3].level / 20.83);
  document.querySelector(".s3").setAttribute("height", taps[3].level / 20.83);

  document
    .querySelector(".s4")
    .setAttribute("y", 120.1 - taps[4].level / 20.83);
  document.querySelector(".s4").setAttribute("height", taps[4].level / 20.83);

  document
    .querySelector(".s5")
    .setAttribute("y", 120.1 - taps[5].level / 20.83);
  document.querySelector(".s5").setAttribute("height", taps[5].level / 20.83);

  document
    .querySelector(".s6")
    .setAttribute("y", 120.1 - taps[6].level / 20.83);
  document.querySelector(".s6").setAttribute("height", taps[6].level / 20.83);

  console.log(" --------------------------------------- ");
}
