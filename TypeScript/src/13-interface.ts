interface Loggable {
  log(val: string): void;
}

class UserService implements Loggable {
  login() {

  }

  logout() {

  }

  log(val: string) {
    console.log(val);
  }
}

const service = new UserService();

function useService(obj: UserService) {

}

useService(service);


function useService2(obj: Loggable) {
  obj.log('ABC');

  if (obj instanceof UserService) {
    obj.login();
  }
}

useService2(service);

function useService3(obj: unknown) {
  // ATTENTION au runtime (en JS) l'interface n'existe plus
  // if (obj instanceof Loggable) { // ERREUR on ne peut faire référence à une interface au runtime
  //   obj.log('ABC');
  // }
}

useService3(service);


interface User {
  name: string;
}

const romain1: User = {
  name: 'Romain'
};


interface MyCallback {
  (val: string): void;
}


function withCallback3(cb: MyCallback) {
  cb('ABC');
}

withCallback3((test) => {
  console.log(test.toUpperCase());
})
