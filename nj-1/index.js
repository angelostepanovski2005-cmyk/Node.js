let prosekPoGrad = [];
let unikatniGradovi = [];
for (let i = 0; i < studenti.length; i++) {
  if (!unikatniGradovi.includes(studenti[i].grad)) {
    unikatniGradovi.push(studenti[i].grad);
  }
}

for (let i = 0; i < unikatniGradovi.length; i++) {
  let grad = unikatniGradovi[i];
  let sumaProsek = 0;
  let brojStudenti = 0;

  for (let j = 0; j < studenti.length; j++) {
    if (studenti[j].grad === grad) {
      sumaProsek += studenti[j].prosek;
      brojStudenti++;
    }
  }

  prosekPoGrad.push({ grad: grad, prosek: sumaProsek / brojStudenti });
}

const sorted = prosekPoGrad.sort((a, b) => {
  if (a.prosek < b.prosek) return -1;
  if (a.prosek > b.prosek) return 1;
  return 0;
});
