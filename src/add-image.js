import horse from "./horse.jpg";

function addImage() {
  const img = document.createElement("img");
  const body = document.querySelector("body");

  img.alt = "horse";
  img.width = 300;
  img.src = horse;

  body.appendChild(img);
}

export default addImage;
