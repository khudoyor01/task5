alert("Sonni toping o'yiniga xush kelibsiz. Sizda 20 ta imkoniyat bor");

let array = [];
array.push(Math.floor(Math.random() * 20));
alert(array);
for (let i = 1; i <= 20; i++) {
  let numbers = prompt("Sonni toping");
  if (numbers > array) {
    alert(
      `${i} - ta urinishda topib bilmadinngiz. Yozgan soninggizdan kichik `
    );
  } else if (numbers < array) {
    alert(`${i} - ta urinishda topib bilmadinngiz. Yozgan soninggizdan katta`);
  } else {
    alert(
      `${i} - ta urinishda topib bildinggiz. Javob-${array}.  Yozgan soninggiz bilan bir xil`
    );
  }
}
