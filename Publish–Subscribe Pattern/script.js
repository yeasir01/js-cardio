const input = document.getElementById('input');
const displayOneElement = document.getElementById('display-1');
const displayTwoElement = document.getElementById('display-2');
const displayThreeElement = document.getElementById('display-3');

class Event {
  constructor() {
    this.events = {};
  }

  subscribe(evtName, func) {
    this.events[evtName] = this.events[evtName] || [];
    this.events[evtName].push(func);
  }

  unSubscribe(evtName, func) {
    if (evtName in this.events) {
      this.events[evtName] = this.events[evtName].filter(fn => fn !== func);
    }
  }

  publish(evtName, data) {
    if (evtName in this.events) {
      const funcArray = this.events[evtName];

      for (let func of funcArray) {
        func(data)
      }
    }
  }
}

const test = new Event();

function updateDisplayOne(data){
  displayOneElement.innerText = "Display: " + data;
};

function updateDisplayTwo(data){
  displayTwoElement.innerText = "Containes A Number: " + /\d/.test(data);
};

function updateDisplayThree(data){
  const count = data.length;
  displayThreeElement.innerText = "Character Count: " + count;
};

test.subscribe('update-input', updateDisplayOne);
test.subscribe('update-input', updateDisplayTwo);
test.subscribe('update-input', updateDisplayThree);

input.addEventListener("keyup", (e) => {
    const value = e.target.value;
    test.publish('update-input', value);
})

test.publish('update-input', "");


console.log(test.events);


// Unsubscribe from a registered event

/* test.unSubscribe('update-input', updateDisplayThree);

console.log(test.events); */