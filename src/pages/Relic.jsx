import React from 'react';
import DefaultLayout from '../layouts/DefaultLayout';

const Relic = () => {
  return (
    <DefaultLayout>
      <section className="py-16 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">Relic Visit Information</h2>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed text-center">
          Learn how to request a visit of the primary relic of Carlo Acutis to your diocese or parish.
        </p>
      </section>
      <section className="bg-white">
        <div
          className="relative h-72 bg-center bg-cover mb-8"
          style={{ backgroundImage: "url('/assets/images/carlo-acutis-ireland-relic.jpg')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          <div className="relative h-full flex items-center justify-center">
            <h1 className="text-5xl font-bold text-white">Relic Visits</h1>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-2xl font-semibold text-gray-900">
              To arrange a visit of the Primary Relic to your parish, the Bishop of your diocese must make contact with Assisi to request the visitation of the relic.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div>
              <div className="text-justify">
                <p className="mb-4">
                  Once approval has been granted by Assisi to your Bishop, we can then help with the arrangements of the visit. This includes the following:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Producing a schedule for the relic visit subject to approval from your parish priest (suggested program can include mass, blessing of relics, adoration, talks, music ministry, invitation to local schools, Eucharistic miracle exhibition and life of Carlo, prayer etc.)
                  </li>
                  <li>Coordinating the logistics of bringing the relic over to Ireland from Assisi.</li>
                  <li>Arranging a meeting with your parish to confirm details beforehand.</li>
                  <li>Promoting the visitation on our website and social pages.</li>
                  <li>Providing assistance on the day of the relic visitation to your parish.</li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center items-start">
              <img
                src="/assets/images/carlo-acutis-ireland-relic.jpg"
                alt="Carlo Acutis Relic"
                className="max-w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-6">Upcoming Events</h2>
            <p className="text-center text-xl">
              27th April 2025 Offical Carlo Acutis Ireland Canonisation celebration in Dublin
            </p>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default Relic;