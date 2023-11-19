// Sukuriamas masyvas su paveikslėliais.
const images_array = ['car1.jpg', 'car2.jpg', 'car3.jpg', 'car4.jpg', 'car5.jpg', 'car6.jpg', 'car7.jpg', 'car8.jpg', 'car9.jpg', 'car10.jpg'];

  // Funkcija pirmajam mygtukui.
  function firstButton() {
    let button = document.getElementById("rodyti");
    // Paspaudus mygtuka rodyti, jis pranyksta.
    button.style.display = "none";

    const myList = document.getElementById("myList");
    // Išvalome turinį, kad nepridėtų daug kartų tų pačių paveikslėlių.
    myList.innerHTML = "";

    // Pridedame 10 li elementų ir kiekviename li elemente img elementas.
    for (let i = 0; i < images_array.length; i++) {
      // Sukuriamas li elementas.
      const li = document.createElement("li");
      // Sukuriamas img elementas.
      const img = document.createElement("img");
      // Priskiriame img elementui reikšmes iš masyvo.
      img.src = `./images/${images_array[i]}`;
      // Suteikiame img elementui pavadinimaą.
      img.alt = `Image ${i + 1}`;
      // Nustatomas paveikslo stilius.
      img.style.width = '100%';
      img.style.height = '100%';
      img.style.objectFit = 'cover';
      // Nustatomas li elemento stilius.
      li.style.height = '250px'
      li.style.margin="5px";
      li.style.width="24%";
      li.style.display='inline-block';
      li.style.boxSizing="border-box";
      // Pridedame nuotrauką prie li elemento.
      li.appendChild(img);
      // Pridedame li elementą prie ul (myList) elemento.
      myList.appendChild(li);
    }
  }
  // Funkcija antram mygtului.
  function mixButton() {
    // Sumaišomi paveikslėliai esantys masyve.
    const selectedImages = [...images_array].sort(() => Math.random() - 0.5);

    const myList = document.getElementById("myList");
    // Išvalome turinį, kad nepridėtų daug kartų tų pačių paveikslėlių.
    myList.innerHTML = ""; 

    // Pridedame 10 li elementų ir kiekviename li elemente img elementas.
    for (let i = 0; i < images_array.length; i++) {
      const li = document.createElement("li");
      const img = document.createElement("img");
      img.src = `./images/${selectedImages[i]}`;
      img.alt = `Image ${i + 1}`;
      img.style.width = '100%';
      img.style.height = '100%';
      img.style.objectFit = 'cover';
      li.style.height = '250px'
      li.style.margin="5px";
      li.style.width="24%";
      li.style.display='inline-block';
      li.style.boxSizing="border-box";
      li.appendChild(img);
      myList.appendChild(li);

      // Pridedame event listener, kuris pakeis paveikslėlį, paspaudus ant jo du kart.
      img.addEventListener("dblclick", function () {
      img.src = "./images/car.jpg";
      img.alt = "Mini cooper";
      });
    }
  }