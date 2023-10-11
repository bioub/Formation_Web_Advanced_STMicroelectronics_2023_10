const coordsA = {
  x: 1,
  y: 2,
};

function withCoords(obj: { x: number; y: number }) {

}


withCoords(coordsA);

function withCoordsOpt(obj: { x: number; y: number; z?: number }) {

}


withCoordsOpt(coordsA);
withCoordsOpt({ x: 1, y: 2, z: 0 });


function withCoordsReadonly(obj: { readonly x: number; readonly y: number }) {
  // obj.x = 12; ERREUR
}


withCoordsReadonly(coordsA);


function withCoordsExtensible(obj: { x: number; y: number; [key: string]: number }) {
  // obj.x = 12; ERREUR
}

withCoordsExtensible({x: 1, y: 2, a: 3, b: 4, c: 5})

const coordsB: { x: number; y: number; [key: string]: number } = {
  x: 1,
  y: 2,
};

coordsB.z = 3;
