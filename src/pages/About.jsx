import React from 'react';
import DefaultLayout from '../layouts/DefaultLayout';

const About = () => {
  return (
    <DefaultLayout>
      <section
        className="bg-cover bg-no-repeat bg-center min-h-screen py-16">
        <h2 className="text-3xl font-light text-stone-700 tracking-wide text-center mb-4">ABOUT US</h2>
        <div className="w-24 h-px bg-stone-300 mx-auto mb-12"></div>
        <section
          className="bg-cover bg-center h-64 flex items-center justify-center"
          style={{ backgroundImage: "url('/assets/images/113150502.jpg')" }}
        >
          <div className="text-center bg-black bg-opacity-80 shadow-lg rounded-lg px-6 py-4">
            <p className="text-white text-xl italic font-serif">
              "Everyone is born as an Original but many die as Photocopies"
            </p>
            <span className="text-gray-300 text-lg mt-2 block">Carlo Acutis</span>
          </div>
        </section>
        {/* Who is Carlo Acutis */}
        <section className="bg-white py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-6">Who is Carlo Acutis?</h2>
            <div className="mb-8 text-justify text-lg leading-relaxed">
              Carlo Acutis was a young website designer born in London to Andrea Acutis and Antonio Salazano in 1991. Carlo grew up in Milan and had huge interest in video games, football, films, and animals, particularly his own pets. At first appearance he seemed like an ordinary boy. However, what separated Carlo from so many people was his constant pursuit of holiness. Although Carlo’s parents Andrea and Antonio were not religious, Carlo’s grandparents had great faith and from a very young age Carlo became deeply invested in serving a life for Jesus. He had many questions for his parents growing up and eventually he brought his parents back to their faith. Carlo was a shining example for his friends in school, and on his football team showing them that Jesus was the way to go in life. He also had a deep interest in the Eucharist and desire to spread awareness that Jesus was truly present in the Eucharist. One of the ways Carlo attempted to do this was by undertaking a school project to design a website highlighting all the Eucharistic miracles.  Carlo also had a huge devotion to our lady and often looked after the homeless, the bullied, and marginalized of society. In 2006 at the tender age of 15 Carlo became extremely ill with galloping leukemia. Although extremely ill, Carlo always remained positive saying ‘there are so many people suffering much more than I am’. Carlo died on 12th October 2006. Since then, hundreds of thousands of pilgrims visit his tomb every year in Assisi. Two miracles have been contributed to his name and he is currently awaiting canonization in Rome. You can find out more about Carlo Acutis and his Eucharistic miracle project{' '}
              <a
                href="http://www.carloacutis.com/en/association/mostra-miracoli-eucaristici"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                here
              </a>
              {' '}or hear about what it was like to grow up with Carlo Acutis from his childhood friend Federico Oldani{' '}
              <a
                href="https://www.chiesadimilano.it/news/chiesa-diocesi/il-mio-amico-carlo-acutis-straordinario-nella-quotidianita-336028.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                here
              </a>.
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex justify-center">
                <img
                  src="/assets/images/carlo-dog.jpg"
                  alt="Carlo with dog"
                  className="rounded shadow max-w-full h-auto"
                />
              </div>
              <div className="flex justify-center">
                <img
                  src="/assets/images/carlo-football.jpg"
                  alt="Carlo playing football"
                  className="rounded shadow max-w-full h-auto"
                />
              </div>
              <div className="flex justify-center">
                <img
                  src="/assets/images/carlo-acutis-red-t-shirt.jpeg"
                  alt="Carlo in red t-shirt"
                  className="rounded shadow max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Carlo Acutis Ireland */}
        <section className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-6">About Carlo Acutis Ireland</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
              <div className="text-justify text-lg leading-relaxed">
                ​In January 2023, Brenda Cleary visited the tomb of Carlo Acutis on a day trip visit to Assisi from Rome. Although she had not heard about the young saint prior to the trip, she was totally captivated by him resting in the tomb and was determined to find out more about him. A few months later in collaboration with Archbishop Eamon Martin and Archbishop Domenico Sorrentino in Assisi, Brenda set off with a mission to bring the primary relic of Carlo Acutis to every diocese on the island of Ireland from Assisi. It was at this point Carlo Acutis Ireland came to life. Since then thousands of people have gathered in churches across Ireland to learn more about Carlo Acutis and to venerate and be blessed by the relic. Brenda continues to spread the word of Carlo Acutis with her good friend Maureen, bringing his story to as many people as she can in the country all while following the guidance of Archbishop Eamon Martin as Prelate of Ireland, and providing regular updates to Assisi.
              </div>
              <div className="flex justify-end">
                <img
                  src="/assets/images/whatsapp-image-2024-06-24-at-16-08-11.jpeg"
                  alt="Brenda Cleary in Assisi"
                  className="rounded shadow max-w-full h-auto"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="flex justify-start">
                <img
                  src="/assets/images/whatsapp-image-2024-05-22-at-13-47-51.jpeg"
                  alt="Ong family in Assisi"
                  className="rounded shadow max-w-full h-auto"
                />
              </div>
              <div className="text-justify text-lg leading-relaxed">
                In October 2023, the Ong family visited Assisi for the first time after being inspired by two young Italian Capuchin friars who had been studying in Ireland. Like Brenda, upon arrival, the Ong family knew nothing about Carlo Acutis but after visiting his tomb, they too were greatly moved and inspired by his story and had a desire to share it with others. A month later back in Dublin, they met Brenda when the primary relic of Carlo was visiting St. Mary of the Angels Parish in Church Street, Dublin. The two families connected and it wasn't long before the Ong family became a part of the Carlo Acutis Ireland team! In May 2024, the Ong family made a second visit to Assisi to update Archbishop Domenico Sorrentino on the progress of Carlo Acutis Ireland. The Ong family continue to work with Brenda and Maureen to help spread the story of Carlo so others can be inspired to live a life like Carlo and his story and legacy can be spread all across the country.
              </div>
            </div>
          </div>
        </section>

        {/* Quotes Section */}
        <section
          className="bg-cover bg-center py-12"
          style={{ backgroundImage: "url('/assets/images/332865935.jpg')" }}
        >
          <div className="container mx-auto px-4">
            <blockquote className="bg-black bg-opacity-60 rounded-lg p-8 text-white max-w-2xl mx-auto text-lg font-serif">
              <p className="mb-4 font-bold text-xl">“There are people who suffer much more than me.”</p>
              <p className="mb-4 font-bold">"To always be close to Jesus, that’s my life plan”</p>
              <p className="mb-4 font-bold">“Sadness is looking at ourselves, happiness is looking towards God.”</p>
              <p className="mb-4 font-bold">"Not me, but God.”</p>
              <p className="mb-4 font-bold">“The Eucharist is the highway to heaven.”</p>
              <span className="block mt-6 text-gray-300 font-bold">Carlo Acutis.</span>
            </blockquote>
          </div>
        </section>
      </section>
    </DefaultLayout>
  );
};

export default About;