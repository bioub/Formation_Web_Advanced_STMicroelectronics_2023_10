// for (var i = 0; i < 3; i++) {
//   // si i est déclaré avec var
//   // le for ne créé pas de portée, donc i est :
//   // - soit global
//   // - soit dans la portée de module si module
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }

// ^
// |
// |                                        [lg][lg][lg]
// |for { [st][st][st] } i=3                [cb][cb][cb]
// +----------------------------------------1s-------------

for (let i = 0; i < 3; i++) {
  // (RECOMMANDE) avec let ou const, une portée est créée au niveau du bloc
  // donc i n'est plus global ou dans module mais local au bloc
  // le i dans une seconde sera le i du passage de la boucle
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
