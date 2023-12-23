import React from "react";
import Navigation from "./Navigation";

const Page1 = () => {
  return (
    <div className="page1">
      <Navigation />
      <div className="page1-container">
        <div className="page1-text">
          <h1>Villa Ty Klouyou</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
            dolorum, quibusdam fugit minus explicabo, quia quas exercitationem
            corrupti expedita tenetur perspiciatis nam. Cum, numquam aperiam.
          </p>
          <div className="button-bottom">
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-circle-arrow-down-filled"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#2c3e50"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-5 3.66a1 1 0 0 0 -1 1v5.585l-2.293 -2.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l4 4c.028 .028 .057 .054 .094 .083l.092 .064l.098 .052l.081 .034l.113 .034l.112 .02l.117 .006l.115 -.007l.114 -.02l.142 -.044l.113 -.054l.111 -.071a.939 .939 0 0 0 .112 -.097l4 -4l.083 -.094a1 1 0 0 0 -1.497 -1.32l-2.293 2.291v-5.584l-.007 -.117a1 1 0 0 0 -.993 -.883z"
                  stroke-width="0"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page1;