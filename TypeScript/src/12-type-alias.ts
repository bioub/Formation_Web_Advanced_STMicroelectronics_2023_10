type primitive = string | number | boolean;
type Coords = { x: number; y: number, z?: number };


function withUnion3(val: primitive) {}

const coordsC: Coords = {
  x: 1,
  y: 2,
};

coordsC.z = 3;


type myCallback1 = (val: string) => void;

function withCallback2(cb: myCallback1) {
  cb('ABC');
}

withCallback2((test) => {
  console.log(test.toUpperCase());
})
