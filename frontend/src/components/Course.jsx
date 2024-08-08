import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";
import { url } from "../main";
function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get(`${url}/book`);
        setBook(res.data);
        localStorage.setItem("Books", JSON.stringify(res.data));
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-slate-500"> Here! :)</span>
          </h1>
          <p className="mt-12">
            Paid books, unlike their free counterparts, involve a transaction
            where readers purchase or subscribe to access literary content. This
            model supports authors, publishers, and the broader book industry
            while offering readers a wide array of benefits and experiences.
          </p>
          <Link to="/">
            <button className="mt-6 bg-slate-500 text-white px-4 py-2 rounded-md hover:bg-slate-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
