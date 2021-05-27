import React, { useState } from "react";
import "./App.css";
// .............. contact ...............

export default function Contact() {
  const [data, setdata] = useState({
    fullname: "",
    phone: "",
    email: "",
    message: "",
  });
  //  .................... inputevent ..............

  const inputEvent = (event) => {
    const { name, value } = event.target;
    setdata((prevalue) => {
      return {
        ...prevalue,
        [name] : value,
      }; 
    });
  };
  // ..... onsubmit ................

  const onsubmit = (e) => {
    e.preventDefault();
    alert(
      `my name is ${data.fullname} my phone is ${data.phone} my email is  ${data.email} my message is ${data.message}`
    );
  };

  // .................. return ...............

  return (
    <>
      <div className="sectioncontact">
        <div className="container">
          <div className="row col-10 mx-auto">
            <h1 className="text-center my-3"> Contact </h1>
            <form onSubmit={onsubmit}>
              <div class="mb-3">
                {/* ...................... inputs .............  */}

                <label for="fname" class="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="fname"
                  name="fullname"
                  value={data.fullname}
                  onChange={inputEvent}
                  placeholder="Enter name"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="phone" class="form-label">
                  Phone
                </label>

                <input
                  type="text"
                  class="form-control"
                  id="phone"
                  name="phone"
                  value={data.phone}
                  onChange={inputEvent}
                  placeholder="Enter Phone"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  name="email"
                  value={data.email}
                  onChange={inputEvent}
                  placeholder=" Enter Email"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="message" class="form-label">
                  Message
                </label>
                <textarea
                  class="form-control"
                  id="message"
                  rows="3"
                  name="message"
                  value={data.message}
                  onChange={inputEvent}
                  placeholder="Any Message"
                  required
                ></textarea>
              </div>
              <div class="col-12">
                <button class="btn btn-outline-primary" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
