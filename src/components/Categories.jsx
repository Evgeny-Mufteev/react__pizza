import React from "react";

function Categories() {
  const [activeIdex, setActiveIdex] = React.useState(0);

  const categories = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];

  // const onClickCategory = (index) => {
  //   setActiveIdex(index);
  // };

  return (
    <div className="categories">
      <ul>
        {categories.map((value, i) => (
          <li key={i} onClick={() => setActiveIdex(i)} className={activeIdex === i ? "active" : ""}>
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
