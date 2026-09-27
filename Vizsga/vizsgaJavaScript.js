// Megvizsgálja, hogy az n paraméterként kapott egész szám prímszám-e.
function isPrime(n) {
  // Az 1 és az annál kisebb számok nem prímszámok.
  if (n <= 1) return false;
  // A fennmaradó számok közül a 2 és a 3 prímszám.
  if (n <= 3) return true;
  // A 2-vel vagy 3-mal osztható, 3-nál nagyobb számok nem prímszámok.
  if (n % 2 === 0 || n % 3 === 0) return false;

  // Elég a négyzetgyökig keresni osztót. A 3-nál nagyobb prímek
  // 6k - 1 vagy 6k + 1 alakúak, ezért hatosával lépünk, és két jelöltet vizsgálunk.
  for (let i = 5; i * i <= n; i += 6) {
    // Ha bármelyik jelölt osztója n-nek, a szám nem prím.
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  // Nem találtunk osztót, tehát a szám prím.
  return true;
}

// Példa használat
const szam = 37;
console.log(`${szam} prímszám?`, isPrime(szam));

// A számlálót 1-ről indítjuk.
let i = 1;

// Elöltesztelő ciklus: addig ismétel, amíg i legfeljebb 5.
while (i <= 5) {
  // Kiírja az aktuális értéket, majd eggyel növeli a számlálót.
  console.log(i);
  i++;

}

// Figyelem: az i ugyanebben a hatókörben már szerepel let deklarációval.
// Ez az ismételt deklaráció szintaktikai hibát okoz a teljes fájl futtatásakor.
let i = 1;

// Hátultesztelő ciklus: a törzs legalább egyszer lefut, a feltételt utána vizsgálja.
// Önálló példaként, 1-es kezdőértékkel az 1-től 5-ig terjedő számokat írja ki.
do {
  // Kiírja a számlálót, majd eggyel növeli az értékét.
  console.log(i);
  i++;
} while (i <= 5);

// Az osszefuz függvény visszatérési értékét az eredmeny változóba menti.
// Figyelem: az osszefuz nincs definiálva ebben a fájlban; külső definíció nélkül
// ez a hívás futásidejű hibát okozna a fenti deklarációs hiba javítása után.
let eredmeny = osszefuz("Hello ", "Világ!");
// Kiírja a függvény által visszaadott értéket a konzolra.
console.log(eredmeny);

// Tömb létrehozása különböző típusú elemekkel: szám, szöveg és logikai érték.
const tomb = [42, "szöveg", true];
console.log(tomb); // [42, "szöveg", true]

// Egy tanuló adatait tároló objektum: név, életkor és ország.
// A const megakadályozza a változó újraértékadását, de a tulajdonságok módosíthatók.
const STUDENT = {
  name: "Ádám",
  age: 25,
  country: "Magyarország"
};
// Kiírja a teljes objektumot a konzolra.
console.log(STUDENT);
