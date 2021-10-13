import React from "react";
import Btn from "./Btn";
import Loading from "./Loading";
import Character from "./Character";

const Homepage = ({ prev, next, data }) => {
  return (
    <div>
      <h1 className="title">Rick and Morty</h1>
      {!data.isLoading ? (
        <div>
          <Btn next={next} prev={prev} />
          <br />
          <Loading />
        </div>
      ) : (
        <div>
          <Btn next={next} prev={prev} />
          <p className="pages" style={{ marginLeft: "1rem" }}>
            {data.page}/{data.info}
          </p>
          <Character data={data} />
          <Btn next={next} prev={prev} />
        </div>
      )}
    </div>
  );
};

export default Homepage;
