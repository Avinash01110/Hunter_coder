import React, { useState } from "react";

const Contact_us = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [desc, setdesc] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name, email, phone, desc };
    fetch("http://localhost:3000/api/postcontact", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success : ", data);
        setname("")
        setemail("")
        setphone("")
        setdesc("")
        alert("Form is submitted, we will contact you shortly")
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  
  const handleonChange = (e) => {
    if (e.target.name == "name") {
      setname(e.target.value);
    } else if (e.target.name == "email") {
      setemail(e.target.value);
    } else if (e.target.name == "phone") {
      setphone(e.target.value);
    } else if (e.target.name == "desc") {
      setdesc(e.target.value);
    }
  };
  return (
    <div
      className="flex flex-col gap-y-5 px-12 sm:px-36 lg:px-50 xl:px-72 pt-20 bg-white"
    >
      <h1 className="text-5xl font-sans font-semibold text-blue-500">
        Contact us
      </h1>

      <label className="text-xl font-semibold font-sans" htmlFor="name">
        Name :
      </label>
      <input
        className="border-blue-500 border-2 rounded-lg px-2"
        type="text"
        value={name}
        onChange={handleonChange}
        id="name"
        name="name"
      />

      <label className="text-xl font-semibold font-sans" htmlFor="email">
        Email :
      </label>
      <input
        className="border-blue-500 border-2 rounded-lg px-2"
        type="text"
        value={email}
        onChange={handleonChange}
        id="email"
        name="email"
      />

      <label className="text-xl font-semibold font-sans" htmlFor="phone">
        phone no :
      </label>
      <input
        className="border-blue-500 border-2 rounded-lg px-2"
        type="text"
        value={phone}
        onChange={handleonChange}
        id="phone"
        name="phone"
      />

      <label className="text-xl font-semibold font-sans" htmlFor="desc">
        Description :
      </label>
      <textarea
        className="border-blue-500 border-2 rounded-lg px-2 h-28 text-start"
        type="text"
        value={desc}
        onChange={handleonChange}
        id="desc"
        name="desc"
      />

      <div className="flex pb-4">
        <button
          type="submit"
          onClick={handleSubmit}
          className="flex font-semibold rounded-full bg-blue-500 text-white px-4 py-1"
        >
          submit
        </button>
      </div>
    </div>
  );
};

export default Contact_us;
