class Contact1 {
  protected name: string; // il faut déclarer les propriétés

  constructor(name: string) {
    this.name = name;
  }
  hello() {
    return `Hello ${this.name}`;
  }
}

class User1 extends Contact1 {

}

interface Test1 {
  name: string;
}

interface Test2 {

}

interface Test3 extends Test1 {

}

class User2 implements Test1, Test2 {
  name = 'test'
}

abstract class AbstractUser {
  hello() {
    return 'Hello'
  }

  abstract login(): void;
}



class Contact2 {
  // protected name: string;
  // constructor(name: string) {
  //   this.name = name;
  // }
  constructor(protected name: string) {} // équivalent à déclarer la propriété, le param et affecter le param à la propriété
  hello() {
    return `Hello ${this.name}`;
  }
}
