// import Swiper from "swiper";

// import "swiper/css";

import Swiper from "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs";

const start = async () => {
  const data = await fetch("https://quantoo.pl/jobs/api/swiper/list.json");
  //   console.log(await data.json());
  const betterData = await data.json();
  console.log(betterData);
  const swiperWraper = document.getElementsByClassName("swiper-wrapper")[0];
  console.log(swiperWraper);
  betterData.items.forEach((ele) => {
    console.log(ele);
    const div = document.createElement("div");
    div.classList.add("swiper-slide");
    div.style.display = "flex";
    div.style.flexDirection = "column";
    div.style.alignItems="center"

    const img = document.createElement("img");
    img.src = ele.img;
    img.width = "385";
    img.height = "325";

    div.appendChild(img);

    const h2 = document.createElement("h2");
    h2.innerText = `${ele.id}.${ele.name}`;
    div.appendChild(h2);

    const p = document.createElement("p");
    p.innerHTML = `${ele.lead}`;
    div.appendChild(p);

    const button = document.createElement("button");
    button.innerHTML = "Czytaj";

    div.appendChild(button);

    swiperWraper.appendChild(div);
  });

  swiperFunction();
};

const swiperFunction = async () => {
  const swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    // Optional parameters
    direction: "horizontal",
    loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
};

start();
