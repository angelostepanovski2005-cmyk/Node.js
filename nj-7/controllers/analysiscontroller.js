exports.getAnalysis = (req, res) => {
  res.render("analiza-forma");
};

exports.postAnalysis = (req, res) => {
  const inputText = req.body.text || "";

  const vkupnoKarakteri = inputText.length;

  const paragrafi = inputText.split(/\n+/).filter((p) => p.trim().length > 0);
  const vkupnoParagrafi = paragrafi.length;

  const zborovi = inputText
    .trim()
    .split(/\s+/)
    .filter((z) => z.length > 0);
  const vkupnoZborovi = zborovi.length;

  let pomaliOd5 = 0;
  let pogolemiOd5 = 0;
  let ednakviNa5 = 0;
  let pocнуваНаСамогласка = 0;

  const samoglaski = new Set([
    "a",
    "o",
    "u",
    "i",
    "e",
    "A",
    "O",
    "U",
    "I",
    "E",
  ]);

  zborovi.forEach((zbor) => {
    const cistZbor = zbor.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"']/g, "");
    const dolzina = cistZbor.length;

    if (dolzina > 0) {
      if (dolzina < 5) {
        pomaliOd5++;
      } else if (dolzina > 5) {
        pogolemiOd5++;
      } else if (dolzina === 5) {
        ednakviNa5++;
      }

      const prvKarakter = cistZbor.charAt(0);
      if (samoglaski.has(prvKarakter)) {
        pocнуваНаСамогласка++;
      }
    }
  });

  res.render("analiza-rezultat", {
    vnesenTekst: inputText,
    vkupnoKarakteri,
    vkupnoZborovi,
    pomaliOd5,
    pogolemiOd5,
    ednakviNa5,
    vkupnoParagrafi,
    pocнуваНаСамогласка,
  });
};
