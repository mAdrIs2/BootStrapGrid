import React from "react";
import { useState, useEffect } from "react";

const Content = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos?albumId=100")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);

  return (
    <>
      {data &&
        data.map((e) => (
          <div className="col p-2" key={e.id}>
            <div className="card m-auto" style={{ width: "15rem",height:"25rem"}}>
              <img src={e.url} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{e.id}</h5>
                <p className="card-text">{e.title}</p>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default Content;
