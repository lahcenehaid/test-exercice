function dessinerCarre(n) {
  if (n < 2) {
    console.log("n doit être au moins égal à 2");
    return;
  }
  
  const bord = "#";
  const vide = " ";
  

  const ligneHaut = bord.repeat(n);
  console.log(ligneHaut);
  

  for (let i = 0; i < n - 2; i++) {
    const ligneMilieu = bord + vide.repeat(n - 2) + bord;
    console.log(ligneMilieu);
  }
    if (n > 1) {
    console.log(ligneHaut);
  }
}
