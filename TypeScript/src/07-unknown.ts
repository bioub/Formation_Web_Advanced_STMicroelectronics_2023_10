// unknown équivalent à any en version type safe (garantie sans erreur à l'exécution)

function testAny2(val: any) {

  console.log(val.toUpperCase());
}

// testAny2(123); // Erreur au runtime (à l'exécution) 123.toUppercase === undefined

function testUnknown(val: unknown) {
  if (typeof val === 'string') { // le type unknown oblige ce genre de test
    console.log(val.toUpperCase())
  }
}

testUnknown(123); // pas d'erreur grace au if (forcé par unknown)
testUnknown('abc');
