import cls from "./FlexSection.module.css";

import image from "../assets/image.png";

const ImageBlock = () => {
  return (
    <div>
      <img className={cls.img} src={image} alt="image" />
    </div>
  );
};

export default ImageBlock;
