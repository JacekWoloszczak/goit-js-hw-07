import { galleryItems } from "./gallery-items.js";
// Change code below this line

const div = document.createElement("div");
div.classList.add("gallery__item");
console.log(div);
const galleryUl = document.querySelector(".gallery");
div.append(galleryUl);
// const list = document.createElement("li");
// galleryUl.append(list);
// const link = document.createElement("a");
// link.href = "";
// link.classList.add(".gallery__link");

// list.append(link);
// const img = document.createElement("img");
// img.src = "";
// img.alt = "";
// img.setAttribute("data-source", "");
// link.append(img);

galleryItems.forEach((i) => {
  //   console.log(i.preview);
  //   console.log(i.description);
  //   console.log(i.original);
  const list = document.createElement("li");
  galleryUl.append(list);
  const link = document.createElement("a");
  link.href = i.original;
  link.classList.add("gallery__link");

  list.append(link);
  const img = document.createElement("img");
  img.src = i.preview;
  img.alt = i.description;
  img.setAttribute("data-source", i.original);
  link.append(img);
});
