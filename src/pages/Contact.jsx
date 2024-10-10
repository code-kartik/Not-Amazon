import React, { useEffect, useState } from "react";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");

  const changeTitle = () => {
    document.title = "Contact";
  }

  useEffect(()=>{
    changeTitle();
  }, []);

  return (
    <>
      <div>
        <h1 className="flex justify-center font-bold text-[24px]">
          Contact Us
        </h1>
      </div>
      <div className="px-3 py-2 max-w-md mb-0">
        <h3 className="font-semibold">First Name</h3>
        <form className="rounded ">
          <input
            onChange={(fname) => {
              setFirstName(fname.target.value);
            }}
            value={firstName}
            type="text"
            className="border-black border rounded w-full p-1"
            placeholder="Enter your first name"
          ></input>
        </form>
      </div>
      <div className="px-3 py-2 max-w-md mb-0">
        <h3 className="font-semibold">Last Name</h3>
        <form className="rounded ">
          <input
            onChange={(lname) => {
              setLastName(lname.target.value);
            }}
            value={lastName}
            type="text"
            className="border-black border rounded w-full p-1"
            placeholder="Enter your last name"
          ></input>
        </form>
      </div>
      <div className="px-3 py-2 max-w-md mb-0">
        <h3 className="font-semibold">Email</h3>
        <form className="rounded ">
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            type="text"
            className="border-black border rounded w-full p-1"
            placeholder="Enter primary email"
          ></input>
        </form>
      </div>
      <div className="px-3 py-2 max-w-md mb-0">
        <label className="font-semibold">Query</label>
        <form className="rounded ">
          <textarea
            onChange={(q) => {
              q.target.value;
            }}
            value={query}
            rows="5"
            className="border-black border rounded w-full p-1 resize-none"
            placeholder="What can we help you with?"
          ></textarea>
          <button className="w-full bg-blue-500 text-white rounded p-2 mt-5">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
