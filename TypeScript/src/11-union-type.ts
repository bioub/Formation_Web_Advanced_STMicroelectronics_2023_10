function withUnion(val: string | number | boolean) {

}

withUnion('ABC');
withUnion(123);
withUnion(false);

function withUnion2(val: string | number | boolean) {
  if (typeof val === 'string') {
    console.log(val.toUpperCase());
  }
}

withUnion2('ABC');
withUnion2(123);
withUnion2(false);

type UnionOfType = { a: string; b: string } | { b: string; c: string };

function withUnionOfType(obj: UnionOfType) {
  console.log(obj.b); // que ce qui est commun (ici b)
}

// une sorte d'héritage de type
type IntersectionOfType = { a: string; b: string } & { b: string; c: string };

function withIntersectionOfType(obj: IntersectionOfType) {
  console.log(obj.a, obj.b, obj.c);
}
