import React, { useState, useEffect, useRef } from "react"
import Button from "../components/Button"
import Layout from "../components/Layout"
import CompanyLandscape from "../components/CompanyLandscape"
import Testimonials from "../components/Testimonials"
import { Link } from "gatsby"
import Seo from "../components/Seo"
import heroPlaceholder from "../images/Hero-Placeholder.jpg"
import LogoSlider  from "../components/LogoSlider"
const Index = ({ location }) => {
  const [isLoaded, setIsLoaded] = useState(false)
  return (
    <Layout location={location}>
      <section className="flex flex-col py-40">
        <div>
          {!isLoaded && (
            <img
              src={heroPlaceholder}
              alt="Placeholder"
              className="absolute top-0 left-0 w-full h-full object-cover object-center -z-10"
            />
          )}
        </div>
        <div className="absolute left-0 top-0 w-full h-full bg-sky-900/30 -z-10" />
        <div className="container mx-auto px-8 lg:flex">
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none text-white">
              Unlock Your Healing Potential
            </h1>
            <p className="text-xl lg:text-xl mt-6 text-gray-300 font-light">
              i-WAC or India-Wound Accelerated Closure is a dynamic wound
              management therapy built upon the undamental principles of NPWT
              (Negative Pressure Wound Therapy).
            </p>
            <p className="mt-8 md:mt-12">
              <Button size="lg">Get in Touch</Button>
            </p>
          </div>
          {/* <div className="lg:w-1/2"><HeroImage /></div> */}
        </div>
      </section>

      <section id="features" className="pb-20 lg:pb-40 bg-white ">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-5xl ">
            explore our <br />{" "}
            <span className="underline decoration-blue-500">Services</span>
          </h1>

          <p className="mt-4 text-gray-500 xl:mt-6 dark:text-gray-900">
            Explore our exceptional services, incorporating NPWT solutions.
          </p>

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
              <span className="inline-block text-blue-500 dark:text-blue-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 512 512"
                  fill="#4388fe"
                  stroke="currentColor"
                >
                  <path d="M96 352V96c0-35.3 28.7-64 64-64H416c35.3 0 64 28.7 64 64V293.5c0 17-6.7 33.3-18.7 45.3l-58.5 58.5c-12 12-28.3 18.7-45.3 18.7H160c-35.3 0-64-28.7-64-64zM272 128c-8.8 0-16 7.2-16 16v48H208c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h48v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V256h48c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H320V144c0-8.8-7.2-16-16-16H272zm24 336c13.3 0 24 10.7 24 24s-10.7 24-24 24H136C60.9 512 0 451.1 0 376V152c0-13.3 10.7-24 24-24s24 10.7 24 24l0 224c0 48.6 39.4 88 88 88H296z" />
                </svg>
              </span>

              <h1 className="text-2xl font-semibold text-gray-700 capitalize ">
                dressing services
              </h1>

              <p className="text-gray-500 dark:text-gray-900">
                "Delivering personalized dressing services for optimal wound
                care and accelerated healing."
              </p>

              <Link
                to="/services"
                className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-200 transform bg-blue-100 rounded-full dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </Link>
            </div>

            <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
              <span className="inline-block text-blue-500 dark:text-blue-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 640 512"
                  fill="#4388fe"
                  stroke="currentColor"
                >
                  <path d="M0 48C0 21.5 21.5 0 48 0H368c26.5 0 48 21.5 48 48V96h50.7c17 0 33.3 6.7 45.3 18.7L589.3 192c12 12 18.7 28.3 18.7 45.3V256v32 64c17.7 0 32 14.3 32 32s-14.3 32-32 32H576c0 53-43 96-96 96s-96-43-96-96H256c0 53-43 96-96 96s-96-43-96-96H48c-26.5 0-48-21.5-48-48V48zM416 256H544V237.3L466.7 160H416v96zM160 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm368-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM176 80v48l-48 0c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h48v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V192h48c8.8 0 16-7.2 16-16V144c0-8.8-7.2-16-16-16H240V80c0-8.8-7.2-16-16-16H192c-8.8 0-16 7.2-16 16z" />
                </svg>
              </span>

              <h1 className="text-2xl font-semibold text-gray-700 capitalize ">
                Distribution
              </h1>

              <p className="text-gray-500 dark:text-gray-900">
                "Efficiently distributing NPWT products and medical supplies for
                seamless access to critical resources."
              </p>

              <Link
                to="/services"
                className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-200 transform bg-blue-100 rounded-full dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </Link>
            </div>

            <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
              <span className="inline-block text-blue-500 dark:text-blue-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="#4388fe"
                  stroke="currentColor"
                  viewBox="0 0 512 512"
                >
                  <path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zm96 152c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h48c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H288v48c0 8.8-7.2 16-16 16H240c-8.8 0-16-7.2-16-16V320H176c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h48V208z" />
                </svg>
              </span>

              <h1 className="text-2xl font-semibold text-gray-700 capitalize ">
                Hospital Supplies
              </h1>

              <p className="text-gray-500 dark:text-gray-900">
                "Supplying a comprehensive range of high-quality hospital
                supplies for exceptional patient care."
              </p>

              <Link
                to="/services"
                className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-200 transform bg-blue-100 rounded-full dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div className="mt-4 p-2 w-full flex justify-center items-center bg-slate-300 rounded-lg">
            <Link to="/services">
              <Button>Explore all of our Services</Button>
            </Link>
          </div>
        </div>
      </section>
      <section className="mx-auto text-center">
        <CompanyLandscape />
        
      </section>
      <div className=" py-24 ">
        <Testimonials />
      </div>
      <section className="">
        <LogoSlider />
      </section>
    </Layout>
  )
}

export default Index

export const Head = () => <Seo title="Home" />
