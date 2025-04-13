import React from "react";

import cls from "./Title.module.css";

const Title = ({ title, italic, mw = 417, children }) => {
  return (
    <div className={cls.wrapper}>
      <h3 className={cls.title}>
        {title}
        {italic && <span className={cls.italic}>{" " + italic}</span>}
      </h3>
      {children && (
        <p className={cls.text} style={{ maxWidth: mw }}>
          {children}
        </p>
      )}
    </div>
  );
};

export default Title;
