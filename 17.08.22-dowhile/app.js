// ! ODEV1: Klavyeden Q veya q karakteri girilene kadar not girişi yapan ve bu karakterlerden birisi girildiğinde O ana kadar girilen tüm notların ortalamasını hesaplayarak konsola ortalamayı bastıran uygulamayı yazınız.




//* ODEV2: Program 0*100 arasında rasgele bir sayı tutacak ve kullanıcının bu sayıyı 5 kere(hak) de bilmesini isteyecektir. Her yanlışta hakkını bir düşürecek ve ARTTIR/AZALT diyerek kullanıcıyı yönlendirecektir.Sonuç olarak kullanıcının hakkı 0 olursa "Üzgünüz bilemediniz" eğer bildi ise "Tebrikler ... denemede bildiniz" yazacaktır.


let chance = 5;
const number = Math.round(Math.random() * 100);
console.log(number);

let guess;
do {
  guess = Number(prompt("Type a number beteween 0 and 100:"));
  chance -= 1;
  if (guess === number) {
    console.log(`Congrats! you won for the ${5 - chance}th try!`);
    break;
  } else if (guess < number) {
    console.log("Try a higher number.");
  } else {
    console.log("Try a lower number.");
  }
} while (chance > 0);

if (guess !== number) {
  console.log("Sorry, you lost the game like you did with everything 👌🏻");
}