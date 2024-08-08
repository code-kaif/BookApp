import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { url } from "../main";

const Pages = () => {
  const [bookO, setBookO] = useState({});
  const param = useParams();
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get(`${url}/book/${param.id}`);
        setBookO(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <Navbar />

      <div
        className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex justify-center items-center md:flex-row flex-col my-20"
        // style={{ maxHeight: "calc(80vh-10vh)" }}
      >
        <div className="md:w-1/2 w-full flex justify-center items-center mt-5">
          <img src={bookO.image} alt="Book Image" className="w-[500px]" />
        </div>
        <div className="md:w-1/2 w-full flex justify-center flex-col items-start md:space-y-5 space-y-3">
          <h1 className="text-4xl font-bold">{bookO.name}</h1>
          <p className="text-lg w-full">{bookO.title}</p>
          <div className="md:w-[19%] w-[35%] cursor-pointer px-5 py-3 rounded-full border-[2px] bg-slate-700 text-white hover:bg-white hover:text-slate-700 duration-200">
            Buy Now
          </div>
        </div>
      </div>
    </>
  );
};

export default Pages;
