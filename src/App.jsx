import "./App.css";
import { useState } from "react";
import Navbar from "./Componant/Navbar/Navbar";
import Bgimg2 from "./Componant/BackgroundIMG/Bgimg2";
import Card2 from "./Componant/BackgroundIMG/Card2";
import Maincard from "./Componant/New-Product/Maincard";
import About from "./Componant/About/About";
import Footer2 from "./Componant/Footer/Footer2";
import * as React from "react";
import { Sidebar } from "primereact/sidebar";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import Mi140d from "./Componant/New-Product/CustomCard/MI-140D/Mi140d";
import Mi912nd from "./Componant/New-Product/CustomCard/MI-912ND/Mi912nd";
import Mi140gc from "./Componant/New-Product/CustomCard/MI-140GC/Mi140gc";
import Mi912gc from "./Componant/New-Product/CustomCard/MI-912GC/Mi912gc";
import Mi121dlx from "./Componant/New-Product/CustomCard/MI-121DLX/Mi121dlx";
import Mi141e from "./Componant/New-Product/CustomCard/MI-141E/Mi141e";
import Mi512gc from "./Componant/New-Product/CustomCard/MI-512GC/Mi512gc";
import Mi556n from "./Componant/New-Product/CustomCard/MI-556N/Mi556n";
import Mi512gt from "./Componant/New-Product/CustomCard/Mi-512GT/Mi512gt";
import Mi837 from "./Componant/New-Product/CustomCard/MI-837/Mi837";
import Mi888n from "./Componant/New-Product/CustomCard/MI-888N/Mi888n";
import Mi913vs from "./Componant/New-Product/CustomCard/MI-913VS/Mi913vs";
import Mi847 from "./Componant/New-Product/CustomCard/MI-847/Mi847";
import Mi786n from "./Componant/New-Product/CustomCard/MI-786N/Mi786n";
import Mimj120d from "./Componant/New-Product/CustomCard/MI-MJ-120/Mimj120d";
import Mi513wt from "./Componant/New-Product/CustomCard/MI-513WT/Mi513wt";
import Mi912vs from "./Componant/New-Product/CustomCard/MI-912/Mi912vs";
import Mi82ms from "./Componant/New-Product/CustomCard/MI-FX-82MS/Mi82ms";
import Mi201n from "./Componant/New-Product/CustomCard/MI-201N/Mi201n";

function App() {
  const [visibleRight, setVisibleRight] = useState(false);
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Navbar />
          <Bgimg2 />
          <Card2 />
          <Footer2 />
        </div>
      ),
    },
    {
      path: "product",
      element: (
        <div>
          <Navbar />
          <Maincard />
        </div>
      ),
    },
    {
      path: "event",
      element: (
        <div>
          <Navbar />
          {/* <Footer2 /> */}
        </div>
      ),
    },
    {
      path: "about",
      element: (
        <div>
          <Navbar />
          <About />
          <Footer2 />
        </div>
      ),
    },
    {
      path: "card140",
      element: (
        <div>
          <Navbar />
          <Mi140d />
          <Footer2 />
        </div>
      ),
    },
    {
      path: "card912nd",
      element: (
        <div>
          <Navbar />
          <Mi912nd/>
          <Footer2 />
        </div>
      ),
    },
    {
      path: "card140gc",
      element: (
        <div>
          <Navbar />
          <Mi140gc/>
          <Footer2 />
        </div>
      ),
    },
    {
      path: "card912gc",
      element: (
        <div>
          <Navbar />
          <Mi912gc/>
          <Footer2 />
        </div>
      ),
    },
    {
      path: "card121dlx",
      element: (
        <div>
          <Navbar />
          <Mi121dlx/>
          <Footer2 />
        </div>
      ),
    },
    {
      path: "card141e",
      element: (
        <div>
          <Navbar />
          <Mi141e/>
          <Footer2 />
        </div>
      ),
    },
    {
      path: "card512gc",
      element: (
        <div>
          <Navbar />
          <Mi512gc/>
          <Footer2 />
        </div>
      ),
    },
    {
      path: "card556n",
      element: (
        <div>
          <Navbar />
          <Mi556n/>
          <Footer2 />
        </div>
      ),
    },
    {
      path: "card512gt",
      element: (
        <div>
          <Navbar />
          <Mi512gt/>
          <Footer2 />
        </div>
      ),
    },
    {
      path: "card837n",
      element: (
        <div>
          <Navbar />
          <Mi837/>
          <Footer2 />
        </div>
      ),
    },
    {
      path: "card888n",
      element: (
        <div>
          <Navbar />
          <Mi888n/>
          <Footer2 />
        </div>
      ),
    },
    {
      path: "card913vs",
      element: (
        <div>
          <Navbar />
          <Mi913vs/>
          <Footer2 />
        </div>
      ),
    },
    {
      path: "card847",
      element: (
        <div>
          <Navbar />
          <Mi847/>
          <Footer2 />
        </div>
      ),
    },
    {
      path: "card786n",
      element: (
        <div>
          <Navbar />
          <Mi786n/>
          <Footer2 />
        </div>
      ),
    },
    {
      path: "card120d",
      element: (
        <div>
          <Navbar />
          <Mimj120d/>
          <Footer2 />
        </div>
      ),
    },
    {
      path: "card513",
      element: (
        <div>
          <Navbar />
          <Mi513wt/>
          <Footer2 />
        </div>
      ),
    },
    {
      path: "card912",
      element: (
        <div>
          <Navbar />
          <Mi912vs/>
          <Footer2 />
        </div>
      ),
    },
    {
      path: "card82ms",
      element: (
        <div>
          <Navbar />
          <Mi82ms/>
          <Footer2 />
        </div>
      ),
    },
    {
      path: "card201",
      element: (
        <div>
          <Navbar />
          <Mi201n/>
          <Footer2 />
        </div>
      ),
    },
  ]);

  return (
    <>
      <Sidebar
        visible={visibleRight}
        position="right"
        onHide={() => setVisibleRight(false)}
        className="sidebar-final"
      >
        <div className="modal-body ">
          <form
            action="https://formspree.io/f/mwpeojew"
            method="POST"
            className="contact-inputs"
          >
            <div className="pt-3 hero-subHeading text-center d-flex">
              <h3>
                {" "}
                &nbsp;&nbsp;<u className="text-black">Tell Us</u> Your Query
              </h3>
            </div>
            <div className="px-4 pb-4">
              <input
                type="text"
                className="form-control"
                name="Name"
                placeholder="Your Name"
                aria-label="Last name"
              />
            </div>
            <div className="px-4 pb-4">
              <input
                type="text"
                className="form-control"
                name="Email"
                placeholder="Your Email"
                aria-label="Last name"
              />
            </div>
            <div className="px-4 pb-4">
              <input
                type="text"
                className="form-control"
                name="Phone"
                placeholder="Your Phone"
                aria-label="Last name"
              />
            </div>
            <div className="px-4 pb-4">
              <select
                className="form-select form-select-sm"
                name="Quiry"
                aria-label="Small select example"
              >
                <option selected>--Please choose an option--</option>
                <option value="1">Corporate Enquiry</option>
                <option value="2">Domestic Enquiry</option>
                <option value="3">Export Enquiry</option>
              </select>
            </div>
            <div className="px-4 pb-4">
              <input
                type="text"
                className="form-control"
                name="Location"
                placeholder="Your Location"
                aria-label="Last name"
              />
            </div>
            <div className="px-4 pb-4">
              <textarea
                className="form-control"
                placeholder="Leave a comment here"
                name="Comment"
                id="floatingTextarea"
              ></textarea>
            </div>
            <div className="px-4 pb-4">
              <button type="button submit" className="btn btn-primary">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </Sidebar>
      <div
        onClick={() => setVisibleRight(true)}
        className="hi"
        style={{ zIndex: "6", left: "initial" }}
      >
        <p>
          <span>Reach Us</span>
        </p>
      </div>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
