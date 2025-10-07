function carreVide(n) {
  if (n < 2) {
    console.log("n doit être >= 2");
    return;
  }


  let bord = "";
  for (let i = 0; i < n; i++) {
    bord += "#";
  }


  let milieu = "#";
  for (let i = 0; i < n - 2; i++) {
    milieu += " ";
  }
  milieu += "#";


  console.log(bord);
  for (let i = 0; i < n - 2; i++) {
    console.log(milieu);
  }
  console.log(bord);
}