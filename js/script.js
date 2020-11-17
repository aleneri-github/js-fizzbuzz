// NOTE: GENERO UNA LISTA DI NUMERI DA 1 A 100
for (var i = 1; i < 100 + 1; i++) {

// NOTE: AI multipli di 3 e 5 stampo FIZZBUZZ
  if ((i % 3 == 0) && (i % 5 == 0)) {
    document.getElementById('listanumeri').innerHTML += "<li class = red>" +"FIZZBUZZ" + "</li>";
  }
// NOTE: Ai multipli di 3 stampo FIZZ
  else if(i % 3 == 0) {
    document.getElementById('listanumeri').innerHTML += "<li class= green>" +"FIZZ" + "</li>";
  }
// NOTE: Ai multipli di 5 stampo BUZZ
  else if(i % 5 == 0) {
    document.getElementById('listanumeri').innerHTML += "<li class = orange>" +"BUZZ" + "</li>";
  }
// NOTE: Numeri che non sono multipli di 3 o 5
  else {
    document.getElementById('listanumeri').innerHTML += "<li>" + i + "</li>";
  }

}
