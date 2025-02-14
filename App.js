import React from "react";

const HomePage = () => {
  return (
    <div className="font-sans">
      
      <section className="relative">
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white bg-black/40">
          <h1 className="text-4xl font-bold">Find Your Perfect Rental</h1>
          <div className="mt-4 bg-white p-3 rounded-lg w-[80%] md:w-[50%] shadow-lg">
            <input
              type="text"
              placeholder="Search for cars..."
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        </div>
      </section>

      
      <section className="p-10">
        <h2 className="text-2xl font-semibold mb-6">Featured Vehicles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="border rounded-lg p-4 shadow-lg">
              
              <h3 className="text-lg font-semibold mt-2">Ford Ecosport</h3>
              <p className="text-gray-600">GHS 750/d</p>
              <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
                View Details
              </button>
              <h3 className="text-lg font-semibold mt-2">volkswagen Vitrus</h3>
              <p className="text-gray-600">GHS 750/d</p>
              <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
                View Details
              </button>
            </div>
          ))}
        </div>
      </section>

      
      <section className="p-10">
        <h2 className="text-2xl font-semibold mb-6">Popular Car Rental Destinations</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {["Accra", "Cape Coast", "Kumasi", "Volta", "Ada Foah", "Busua"].map((place) => (
            <div
              key={place}
              className="relative bg-gray-200 rounded-lg overflow-hidden h-32 flex items-center justify-center text-white text-lg font-bold"
            >
              <div className="absolute bg-black/50 w-full h-full flex items-center justify-center">
                {place}
              </div>
            </div>
          ))}
        </div>
      </section>

      
      <section className="p-10 bg-gray-100">
        <h2 className="text-2xl font-semibold mb-6 text-center">Our Clients' Feedback</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-lg text-center">
              <p className="text-gray-600 italic">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              </p>
              <h3 className="mt-2 font-bold">- Client Name</h3>
            </div>
          ))}
        </div>
      </section>

      
      <section className="p-10 text-center">
        <h2 className="text-2xl font-semibold">Join our weekly Newsletter</h2>
        <div className="mt-4 flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 border border-gray-300 rounded-l-lg w-1/3"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-r-lg">SIGN UP</button>
        </div>
      </section>

     
      <footer className="bg-gray-800 text-white p-6 text-center">
        <p>© 2025 Car Rental, Inc. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
