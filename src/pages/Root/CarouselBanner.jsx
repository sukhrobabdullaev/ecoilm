import { Carousel } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";

const contentStyle = {
  height: "87vh",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
};

const CarouselBanner = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://45.55.194.72:8000/api/images/main"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Carousel autoplay>
      {data.map((el) => (
        <div key={el.title}>
          <img
            style={contentStyle}
            className="object-cover w-full h-[87vh]"
            src={el.image}
            alt={el.title}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselBanner;
