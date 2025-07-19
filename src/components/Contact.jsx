import React from 'react';

const Contact = () => {
  return (
    <section className="py-16 bg-stone-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-light text-stone-700 tracking-wide text-center mb-16">
          LET'S CONNECT - GET IN TOUCH WITH US!
        </h2>
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="text-center">
            <img
              src="/assets/images/carlo-acutis-ireland-logo.jpg"
              alt="Carlo Acutis Ireland Logo"
              className="w-32 h-32 mx-auto rounded-full mb-6 border-2 border-stone-200"
            />
            <div className="bg-white p-8 border border-stone-200 shadow-sm">
              <h3 className="font-light text-lg text-stone-700 tracking-wide mb-4 uppercase">
                National Director of Carlo Acutis Ireland
              </h3>
              <div className="space-y-2 text-stone-600">
                <p className="font-medium text-stone-700">Mary Ong</p>
                <p className="text-sm">+44 7300 866 444</p>
                <p className="text-sm">info@carloacutisireland.org</p>
                <p className="text-sm text-stone-500 italic">Based in Belfast</p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <img
              src="/assets/images/mary-eucharist_2.png"
              alt="Youth Directors"
              className="w-32 h-32 mx-auto rounded-full mb-6 border-2 border-stone-200"
            />
            <div className="bg-white p-8 border border-stone-200 shadow-sm">
              <h3 className="font-light text-lg text-stone-700 tracking-wide mb-4 uppercase">
                Directors of Carlo Acutis Youth Ireland
              </h3>
              <div className="space-y-2 text-stone-600">
                <p className="font-medium text-stone-700">Mary-Aoife and Séamus Ong</p>
                <p className="text-sm">+353 83 416 6687</p>
                <p className="text-sm">youth@carloacutisireland.org</p>
                <p className="text-sm text-stone-500 italic">Based in Dublin</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;