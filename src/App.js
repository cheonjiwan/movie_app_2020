import React from "react";
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "nayeon",
    image:
      "https://asiatime.co.kr/news/data/20200101/p1065611065852687_939_thum.jpg",
    age: 26,
  },
  {
    id: 2,
    name: "suji",
    image:
      "https://img1.daumcdn.net/thumb/R720x0/?fname=https://t1.daumcdn.net/news/201904/19/moneytoday/20190419141606693hahz.jpg",
    age: 27,
  },
  {
    id: 3,
    name: "jenny",
    image:
      "https://pds.joins.com/news/component/newsis/201812/20/NISI20181220_0000248046_web.jpg",
    age: 25,
  },
  {
    id: 4,
    name: "jeongyeon",
    image:
      "https://pbs.twimg.com/profile_images/1193899336398073856/mzTWz7DN.jpg",
    age: 25,
  },
];

// props.fav == { name }
function Food({ name, picture, age }) {
  return (
    <div>
      <h2>I love {name}</h2>
      <h4>{age} years old</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};

function App() {
  return (
    <div className="App">
      {foodILike.map((item) => (
        <Food
          key={item.id}
          name={item.name}
          picture={item.image}
          age={item.age}
        />
      ))}
    </div>
  );
}

export default App;
