import React from 'react';
import DefaultLayout from '../layouts/DefaultLayout';

const Schools = () => {
  return (
    <DefaultLayout>
      <section
        className="bg-cover bg-no-repeat bg-center min-h-screen py-16"
      >
        <div className="container mx-auto py-12 px-4">
          <section className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
                We organise interactive fun workshops suitable for young people in schools, parishes and retreats. Here is all you need to do.
              </h2>
              <ul className="list-disc list-inside text-lg space-y-3">
                <li>Inform your school principal or teacher that you would like to host a visit or workshop to your school, parish or retreat.</li>
                <li>
                  Consider what you would like included as part of the visit. We offer interactive workshops on Carlo, quiz events, exhibition of eucharistic miracles, and Carlo’s life and Q&amp;A sessions. We are also very happy to take on any suggestions you might have for the visit!
                </li>
                <li>Contact us on <a href="mailto:info@carloacutisireland.org" className="text-blue-700 underline">info@carloacutisireland.org</a> or complete our application form below and a member our Carlo team will be in touch!</li>
                <li>
                  From there, the directors of Carlo Acutis Youth Ireland are happy to volunteer their time to run a school visit or workshop on an arranged date and time.
                </li>
              </ul>
            </div>
            <div className="md:w-1/3 flex justify-center mt-6 md:mt-0">
              <img src="/assets/images/whatsapp-image-2024-06-22-at-12-28-25.jpeg" alt="Workshop" className="rounded shadow-lg max-w-xs border border-gray-200" />
            </div>
          </section>
          <section className="mb-12">
            <div className="bg-blue-900 rounded text-white p-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Complete our application form for school, parish or retreat visit or workshop
              </h2>
              <a
                href="https://forms.gle/3qJTtvDY62Ne1Hpk6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-blue-900 font-semibold px-6 py-2 rounded shadow hover:bg-blue-100 transition"
              >
                Application form
              </a>
            </div>
          </section>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default Schools;