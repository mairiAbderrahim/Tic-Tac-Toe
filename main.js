const personFactory = (name, age) => {
    const sayHello = () => console.log('hello!');
    return { name, age, sayHello };
  };
  
  const name = "Maynard";
  const color = "red";
  const number = 34;
  const food = "rice";

  personFactory(name, age)