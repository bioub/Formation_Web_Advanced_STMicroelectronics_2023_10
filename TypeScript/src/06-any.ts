// le type any correspond à l'absence de type
// typer any revient à faire du JS

// let value = 'ABC';
// value = 123; // ERREUR par défaut elle est typé à partir de 'ABC' (string)

let value: any = 'ABC';
value = 123; // n'importe quel type

// Peut être pratique de type any pour rendre le code dynamique
// on peut forcer le type à any
// à utiliser si pas d'autre autre possibilité
(Math as any).sum = (a: number, b: number) => a + b;
(Math as any).sum(1, 2);

function testAny(param: any) {

}

testAny(123);
testAny([]);
testAny(null);
