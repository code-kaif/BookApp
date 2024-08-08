import { React, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { ClipLoader } from "react-spinners";
import { url } from "../main";

const MessegeMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  async function submitHandler(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(`${url}/email`, {
        name,
        email,
        message,
      });
      setName("");
      setEmail("");
      setMessage("");
      toast.success(data.message);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error("Plz fill all details");
      console.log(error);
    }
  }
  return (
    <>
      <div className="flex justify-center ">
        <form
          onSubmit={submitHandler}
          className="contact w-[40vw] h-[60vh] flex flex-col items-center justify-between absolute top-40"
        >
          <h1 className="text-3xl font-semibold">Contact</h1>
          <div>
            <div>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="input input-bordered w-[80vw] md:w-[30vw] my-3 dark:text-slate-800"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="input input-bordered w-[80vw] md:w-[30vw] my-3 dark:text-slate-800"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <textarea
                className="textarea textarea-bordered w-[80vw] md:w-[30vw] h-24 my-3 dark:text-slate-800"
                placeholder="Enter Your Messege"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="">
            <button
              type="submit"
              disabled={loading}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "15px",
              }}
              className="px-10 py-2 border font-semibold duration-300 border-slate-950 hover:bg-slate-950 hover:text-white dark:border-white"
            >
              {loading && <ClipLoader size={20} color="white" />}
              Send Messege
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default MessegeMe;
