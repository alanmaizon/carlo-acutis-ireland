import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DefaultLayout from '../layouts/DefaultLayout';


const Home = () => {

  const galleryImages = [
    "/assets/images/carlo-mother.jpg",
    "/assets/images/img-2260_1.jpeg",
    "/assets/images/dsc-0108_1.jpeg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically advance the slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [galleryImages.length]);

  return (
    <DefaultLayout>
      <section id="home" className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            National Representation<br />
            for<br />
            Carlo Acutis in Ireland
          </h2>
        </div>
      </section>
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl text-center text-gray-700 mb-12 leading-relaxed">
            We are a small group of families who have been deeply moved and inspired by the life of Carlo Acutis. Working directly with the Archbishop of Assisi and Bishops of Ireland, we want to share Carlo's story with as many people as we can!
          </h2>
          <img
            src="/assets/images/whatsapp-image-2024-08-27-at-14-59-49.jpeg"
            alt="Carlo Acutis Event"
            className="w-full max-w-2xl mx-auto rounded-lg mb-8"
          />
          <hr className="border-2 border-gray-300 mb-8" />
          
          {/* Canonisation Event Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <div className="text-center mb-8">
            <img
              src="/assets/images/gemini.png"
              alt="Canonization Event"
              className="mx-auto mb-6 rounded-lg w-full max-w-xs sm:max-w-sm md:max-w-md h-auto"
            />
            </div>
            <h3 className="text-2xl font-bold text-center mb-6 text-blue-800 underline">
              Join us Carlo Acutis Canonization Celebrations in Dublin
            </h3>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <p className="mb-2"><strong>DATE:</strong> September 7, 2025</p>
                <p><strong>LOCATION:</strong> Phoenix Park, Archdiocese of Dublin, Cityquay Parish</p>
              </div>
            </div>
            <p className="mb-6 text-gray-700">
              Join us for this special event as we celebrate the life and legacy of <strong>Carlo Acutis</strong>. Witness the official recognition of his sainthood by the Catholic Church, live-streamed from <strong>St. Paul's Church, Arran Quay</strong>. This in-person event will be a memorable experience for all attendees. Don't miss out on this opportunity to be part of history. Come and be inspired by the remarkable story of Carlo Acutis.
            </p>
            <h4 className="text-xl font-bold mb-4 underline">Event Schedule:</h4>
            <div className="space-y-4 mb-8">
              <div className="border-l-4 border-blue-500 pl-4">
                <p><strong>7AM - 9AM Pilgrim Walk</strong> from the Papal Cross (Phoenix Park) to St. Paul's Church, Arran Quay, Dublin (Archdiocese of Dublin) - <em>ALL WELCOME</em></p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <p><strong>9AM - 11AM Canonization Event</strong> at St. Paul's Church, Archdiocese of Dublin Including live-stream of the Canonization in Rome - <em>Ticketed Event Only - Limited Tickets Available</em></p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <p><strong>11AM-1PM Celebrations in St. Paul's Church, Arran Quay, Dublin</strong> Live Music, Testimonies, Blessings, Eucharistic Miracles Exhibition, Refreshments, Carlo Acutis Official Song - <em>ALL WELCOME</em></p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <p><strong>3PM-5PM Celebratory Mass</strong> at the Immaculate Heart of Mary Catholic Church, City Quay with live music provided afterward to celebrate - <em>ALL WELCOME</em></p>
              </div>
            </div>
            <div className="text-center">
              <a
                href="https://www.eventbrite.ie/e/canonisation-of-carlo-acutis-celebrations-dublin-tickets-1272872839929?aff=oddtdtcreator"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                TICKETS HERE
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">WHAT WE DO:</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Relic Visits */}
            <div className="text-center">
              <img
                src="/assets/images/whatsapp-image-2024-08-01-at-17-40-38.jpeg"
                alt="Relic Visits"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-4">Relic Visits</h3>
              <p className="text-gray-600 mb-6">
                In the past year, the primary relic of Carlo Acutis has made a number of visits to dioceses in Ireland from Assisi.
                Interested in finding out more about a relic visit for your parish?
              </p>
              <Link to="/relic" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors">
                LEARN MORE
              </Link>
            </div>
            {/* Resources & Outreach */}
            <div className="text-center">
              <img
                src="/assets/images/carlo-bread-cover_orig.jpg"
                alt="Resources & Outreach"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-4">Resources &amp; Outreach</h3>
              <p className="text-gray-600 mb-6">
                We want to support others to spread awareness of Carlo Acutis in their parish and everyday life.
                We have a number of resources and supports to help.
              </p>
              <Link to="/resources" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors">
                LEARN MORE
              </Link>
            </div>
            <div className="text-center">
              <img
                src="/assets/images/lithuanian-friends.jpg"
                alt="School Visits & Workshops"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-4">School Visits &amp; Workshops</h3>
              <p className="text-gray-600 mb-6">
                Want to organise a Carlo Acutis workshop in your school or parish? We are more than happy to help.
                We also organise outreach events as part of our Carlo Acutis Youth Ireland.
              </p>
              <Link to="/schools" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors">
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="aspect-video">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/UqB35uJ-JjU"
                frameBorder="0"
                allowFullScreen
                title="Carlo Acutis Video 1"
              ></iframe>
            </div>
            <div className="aspect-video">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/JlwM4QSh1EA"
                frameBorder="0"
                allowFullScreen
                title="Carlo Acutis Video 2"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      {/* Prayer Request Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Have a prayer request for Carlo Acutis?</h2>
          <p className="text-center text-lg text-gray-700 mb-8">
            Submit it here to be prayed for with the relic of Carlo.
          </p>

          <form className="bg-white shadow-md rounded-lg p-6 space-y-6">
            {/* Comment Field */}
            <div>
              <label htmlFor="comment" className="block text-gray-800 font-semibold mb-2">
                Comment <span className="text-red-600">*</span>
              </label>
              <textarea
                id="comment"
                name="comment"
                required
                rows="4"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                placeholder="Enter your prayer request here..."
              ></textarea>
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-gray-800 font-semibold mb-2">
                Email <span className="text-red-600">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com"
              />
              <p className="text-sm text-gray-600 mt-2">
                If you would like to receive newsletters on Carlo Acutis Ireland and information about events, relic visits, and pilgrimages to Assisi, include your email address here.
              </p>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Submit Prayer Request
              </button>
            </div>
          </form>
        </div>
      </section>
      {/* Photo Gallery Slider */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Carlo Acutis Event Gallery</h2>
          <div className="relative flex items-center justify-center">
            <img
              src={galleryImages[currentIndex]}
              alt={`Carlo Event ${currentIndex + 1}`}
              className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg transition-all duration-500 max-w-full"
            />
          </div>
          <div className="flex justify-center mt-4 space-x-2">
            {galleryImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-colors duration-300 ${
                  idx === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default Home;
