class Parent {
    parentMethod() {
      console.log("This is a method from the parent.");
    }
  }
  
  class Child extends Parent {
    childMethod() {
      console.log("This is a method from the child.");
    }
  }
  
  const childInstance = new Child();
  childInstance.parentMethod();
  childInstance.childMethod();
  