function choisirAge(age){
   if (age < 18){
    console.log('Trop jeune pour piloter');
   } else if ( age === 18 ) {
    console.log('Tu peux passer le brevet de pilote');
   } else if (  age > 18){
    console.log('Tu peux déjà piloter');
   } else {
    console.log('Je ne sais pas ');
   }
}

choisirAge(17);