import React from "react";
import Page2Slider from "./Page2Slider";

const Page2 = () => {
  const dataSlider = [
    {
      title: "Une Villa au bord de la mer",
      img: "salon/interior-with-bid-dining-room-modern-private-house.jpg",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum tempora tenetur pariatur, ratione explicabo iste asperiores, labore facere  fugit, vel error veniam. Enim vero dolor adipisci, sunt impedit nostrum debitis.",
      btn: "voir Maps",
    },
    {
      title: "Un grand espace",
      img: "salon/interior-with-bid-dining-room-modern-private-house.jpg",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum tempora tenetur pariatur, ratione explicabo iste asperiores, labore facere  fugit, vel error veniam. Enim vero dolor adipisci, sunt impedit nostrum debitis.",
      btn: "voir Photos",
    },
    {
      title: "Une grande terrase avec vue sur mer",
      img: "extérieur/outdoor-balcony.jpg",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum tempora tenetur pariatur, ratione explicabo iste asperiores, labore facere  fugit, vel error veniam. Enim vero dolor adipisci, sunt impedit nostrum debitis.",
      btn: "voir Photos",
    },
  ];

  return (
    <div className="page2">
      <div className="page2-container">
        <div className="slider">
          {dataSlider.map((data, index) => (
            <Page2Slider data={data} key={index} />
          ))}
        </div>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-arrow-big-right-lines-filled"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="#000000"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M12.089 3.634a2 2 0 0 0 -1.089 1.78l-.001 2.585l-1.999 .001a1 1 0 0 0 -1 1v6l.007 .117a1 1 0 0 0 .993 .883l1.999 -.001l.001 2.587a2 2 0 0 0 3.414 1.414l6.586 -6.586a2 2 0 0 0 0 -2.828l-6.586 -6.586a2 2 0 0 0 -2.18 -.434l-.145 .068z"
              stroke-width="0"
              fill="currentColor"
            />
            <path
              d="M3 8a1 1 0 0 1 .993 .883l.007 .117v6a1 1 0 0 1 -1.993 .117l-.007 -.117v-6a1 1 0 0 1 1 -1z"
              stroke-width="0"
              fill="currentColor"
            />
            <path
              d="M6 8a1 1 0 0 1 .993 .883l.007 .117v6a1 1 0 0 1 -1.993 .117l-.007 -.117v-6a1 1 0 0 1 1 -1z"
              stroke-width="0"
              fill="currentColor"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default Page2;