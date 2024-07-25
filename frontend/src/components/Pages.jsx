import axios from "axios";
import React, { useEffect, useState } from "react";
import img from "../../public/Banner.png";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Pages = () => {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("https://bookapp-1-nuya.onrender.com/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <Navbar />
      {book.map((book) => (
        <div
          className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex justify-center items-center md:flex-row flex-col my-20"
          // style={{ maxHeight: "calc(80vh-10vh)" }}
        >
          <div className="md:w-1/2 w-full flex justify-center items-center mb-4">
            <img src={book.image} alt="" className="w-[500px]" />
          </div>
          <div className="md:w-1/2 w-full flex justify-center flex-col items-start md:space-y-10 space-y-1">
            <h1 className="text-4xl font-bold">{book.name}</h1>
            <p className="text-lg w-full">{book.title}</p>
            <div className="md:w-[19%] w-[33%] cursor-pointer px-5 py-3 rounded-full border-[2px] bg-slate-700 text-white hover:bg-white hover:text-slate-700 duration-200">
              Buy Now
            </div>
          </div>
        </div>
      ))}
      <Footer />
    </>
  );
};

export default Pages;
