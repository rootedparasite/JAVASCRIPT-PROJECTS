const user1 = {
  name: "Alex"
};

const user2 = {
  name: "John"
};

function greet() {
  console.log(this.name);
}

greet.call(user1);
greet.call(user2);