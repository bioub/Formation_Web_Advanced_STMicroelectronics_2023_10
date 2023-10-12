// https://www.typescriptlang.org/docs/handbook/utility-types.html

type Coords3d = {
  x: number;
  y: number;
  z: number;
}

type Coords2d = Omit<Coords3d, 'z'>
type Coords2dOptional = Partial<Coords2d>

// Coords2d est Coords3d sans la clé z
// Coords2dOptional est Coords2d avec tout optionnel

const coords2d: Coords2dOptional = {

}
