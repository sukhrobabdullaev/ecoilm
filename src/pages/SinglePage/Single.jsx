import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Userprofile() {
  const paramss = useParams();
  let ppeople = paramss.id;
  console.log(ppeople);

  const [single, setSingle] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://45.55.64.16:8001/api/${ppeople}`,
    })
      .then((res) => {
        setSingle(res?.data);
        console.log("data : " + res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <>
        {!!single ? (
          <>
            {
              <div className="card">
                <p>{single.title}</p>
              </div>
            }
          </>
        ) : (
          <>
            <h1>Loading...</h1>
          </>
        )}
      </>
    </div>
  );
}
