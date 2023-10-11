function withCallback(cb: (val: string) => void) {
  cb('ABC');
}

withCallback((test) => {
  console.log(test.toUpperCase());
})
