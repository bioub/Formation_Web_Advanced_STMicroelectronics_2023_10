// les types de base (primitif) sont les mêmes qu'en JS
// string, number, boolean

function createUser(username: string, age: number, isActive: boolean) {
  return {
    username,
    age,
    isActive,
  };
}

const user = createUser('romain', 38, true);

console.log(user.username); // romain

// les types spéciaux aussi
// undefined et null

function testUndefined(val: undefined) {

}

testUndefined(undefined);

function testNull(val: null) {

}

testNull(null);
