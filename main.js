let data = document.querySelector('#url');
let height = document.querySelector("#height");
let width = document.querySelector("#height");
let img = document.querySelector("[alt=QR]");
let loading = document.querySelector("div.load");

img.addEventListener("load",()=>{
  loading.style.display = "none";
  img.style.display = "inline";
});

data.addEventListener("input",()=>{
  img.src = `http://api.qrserver.com/v1/create-qr-code/?data=${data.value}`;
})