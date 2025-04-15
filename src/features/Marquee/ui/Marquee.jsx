import React, { useEffect, useState } from "react";
import ReactMarquee from "react-fast-marquee";

import cls from "./Marquee.module.css";

const Marquee = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/api/futures")
      .then((resp) => resp.json())
      .then((data) => setData(data));
    console.log(data);
  }, []);
  return (
    <div className={cls.marquee}>
      {data.length > 0 && (
        <ReactMarquee gradient={false}>
          {data.map((item, index) => (
            <div className={cls.item} key={index}>
              Фьючерс на кофе {item.name} {' '} {item.price} {' '}$
            </div>
          ))}
        </ReactMarquee>
      )}
    </div>
  );
};

export default Marquee;
