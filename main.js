const qr = qrcode(0, "L")

const input = document.querySelector("input")
const button = document.querySelector("button")

button.addEventListener("click", () => {
  const url = input.value

//Agrega data al QR
qr.addData(url);

//Crea QR
qr.make()

//Generar imagen QR
const imageQR = qr.createDataURL()
document.querySelector('img').src = qr.createDataURL();

console.log(imageQR)



})