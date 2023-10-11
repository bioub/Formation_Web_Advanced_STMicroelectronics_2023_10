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
