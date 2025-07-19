import React from 'react';
import DefaultLayout from '../layouts/DefaultLayout';

const Youth = () => {
  return (
    <DefaultLayout>
      {/* Hero Section */}
      <div
        className="relative h-[500px] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/assets/images/whatsapp-image-2024-06-29-at-17-41-41.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold italic mb-6">
            If everyone became like Carlo, the world would be a wonderful place!
          </h1>
          <p className="text-xl mt-4">
            Patrick Michael Quigley Aged 15, Fermanagh
          </p>
        </div>
      </div>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">So what's the scéal behind it all?</h2>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-2/3">
              <p className="text-gray-700 leading-relaxed">
                We are Mary-Aoife and Séamus Ong, brother and sister living in Dublin. In October 2023 after graduating from college, we took a trip to Assisi and discovered Carlo Acutis for the first time. Up to this point, we had always thought saints were from the past and never imagined it could be possible to be a saint in the ordinary things in life. Carlo changed our minds! We learnt how he was a totally normal boy who liked football, video games and hanging out with his friends yet when you took a closer look, you noticed he rarely argued with anyone, he was always calm in his judgments, generous and ready to help everyone.
                <br /><br />
                His plan was to live a life as close to God as possible but he was extraordinary in the everyday life of things. After we discovered Carlo we set off on a mission to tell our friends about him and it wasn't long before we were given the task to set up and manage Carlo Acutis Youth Ireland by Brenda Cleary and Archbishop Domenico Sorrentino. Our plan is to create a presence where we can represent the young people of Ireland, tell them about Carlo Acutis and help them to share Carlo's story with their friends.
                <br /><br />
                It is our dream to one day have lots of little Carlo hubs around Ireland, full of young people sharing Carlo's story with others and trying to live a life like he did through prayer, charity work, fun, and most importantly, the Eucharist which Carlo claimed was his highway to heaven! Lets follow Carlo :)
              </p>
            </div>
            <div className="md:w-1/3">
              <img src="/assets/images/whatsapp-image-2024-06-29-at-17-41-41.jpeg" alt="Carlo Acutis Youth Ireland" className="rounded-lg shadow-md w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section
        className="relative py-16 text-white bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400"
      >
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">What do we do (and want to start doing!)</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg text-white">
            <li className="flex items-start space-x-2">
              <svg className="w-6 h-6 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>School visits and talks</span>
            </li>
            <li className="flex items-start space-x-2">
              <svg className="w-6 h-6 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Support other young people in promoting Carlo</span>
            </li>
            <li className="flex items-start space-x-2">
              <svg className="w-6 h-6 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Organising trips to Assisi to see Carlo's tomb</span>
            </li>
            <li className="flex items-start space-x-2">
              <svg className="w-6 h-6 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Events for young people</span>
            </li>
            <li className="flex items-start space-x-2">
              <svg className="w-6 h-6 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Outreach charity work inspired by Carlo like homeless runs, litter picks</span>
            </li>
            <li className="flex items-start space-x-2">
              <svg className="w-6 h-6 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Creating online resources on Carlo Acutis for young people to use</span>
            </li>
          </ul>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default Youth;