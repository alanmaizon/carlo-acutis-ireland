import React from 'react';
import DefaultLayout from '../layouts/DefaultLayout';

const Resources = () => {
    return (
        <DefaultLayout>
            {/* Prayer Section */}
            <section className="bg-cover bg-no-repeat bg-center min-h-screen py-16">
                <h2 className="text-3xl font-light text-stone-700 tracking-wide text-center mb-4">PRAY TO BLESSED CARLO</h2>
                <div className="w-24 h-px bg-stone-300 mx-auto mb-12"></div>
                <div className="flex flex-col md:flex-row items-center md:justify-center mb-6">
                    <img src="/assets/images/831936928.jpg" alt="Carlo Acutis" className="w-full md:w-1/3 rounded shadow-md mb-4 md:mb-0 md:mr-8" />
                    <div className="text-gray-700 text-lg leading-relaxed">
                        <strong>OFFICIAL CARLO ACUTIS PRAYER</strong><br />
                        O God our Father,<br />
                        we thank you for giving us Carlo,<br />
                        a model of life for young people,<br />
                        and a message of love for all.<br />
                        You made him fall in love with your son Jesus,<br />
                        making the Eucharist his “highway to heaven.”<br />
                        You gave him Mary as a beloved mother,<br />
                        and you made him, through the Rosary,<br />
                        a cantor of her tenderness.<br />
                        Receive his prayer for us.<br />
                        Look above all upon the poor, whom he loved and assisted.<br />
                        Grant me too, through his intercession, the grace<br />
                        that I need (mention your intention).<br />
                        And make our joy full, raising Carlo among<br />
                        the saints of your Church,<br />
                        so that his smile shines again for us<br />
                        to the glory of your name. Amen.
                    </div>
                </div>
            </section>

            {/* Music Ministry Section */}
            <section className="bg-teal-900 rounded-lg p-8 mb-8 text-white">
                <h2 className="text-3xl font-bold text-center mb-4">Music Ministry</h2>
                <hr className="border-gray-400 my-4 w-1/2 mx-auto" />
                <p className="text-lg mb-6">
                    We are delighted to announce that John Emmanuel has released Carlo Acutis and the Living Bread, a powerful tribute to Blessed Carlo Acutis, who will be canonized on September 7, 2025. The song, now available on all major streaming platforms, has been hailed as the official tribute to Carlo Acutis in Ireland and the UK, inspiring listeners with its profound message about the Eucharist and Carlo’s unwavering faith. The song has touched many hearts across Ireland and was performed throughout the relic tours leaving a lasting impact on those who hear it. The song was also performed by John Emmanuel on Carlo Acutis’ feast day in Assisi, where it received approval from Carlo’s mother, Antonia Salzano.
                    <br /><br />
                    To encourage young people to learn about Carlo Acutis’ story and devotion to the Eucharist, free sheet music for Carlo Acutis and the Living Bread is available for schools, parishes, and pupils in the lead-up to his canonisation on April 27, 2025. John Emmanuel says “I hope young people will connect with Carlo’s story and recognize that their lives have great purpose. Like Carlo, they can use their gifts—even technology—to bring people closer to Jesus.”
                    <br /><br />
                    You can download the free sheet music below or listen to the official song on{' '}
                    <a href="https://open.spotify.com/track/4dRjfG1aIlWNdcF1QCG8k3" target="_blank" rel="noopener noreferrer" className="underline text-green-200">Spotify</a>,{' '}
                    <a href="https://www.youtube.com/watch?v=RzoFB4UkBJ4" target="_blank" rel="noopener noreferrer" className="underline text-green-200">YouTube</a>
                    {' '}or{' '}
                    <a href="https://music.apple.com/gb/album/carlo-acutis-and-the-living-bread-single/1793840301" target="_blank" rel="noopener noreferrer" className="underline text-green-200">iTunes</a>.
                </p>
                <div classname="flex-1 flex flex-col items-center justify-center">
                    <a href="/assets/images/pdf.pdf" target="_blank" class="bg-green-700 text-white px-6 py-3 rounded shadow hover:bg-green-800 font-bold mb-4">DOWNLOAD HERE</a>
                    <div class="w-full h-96 rounded shadow-md bg-white">
                        <embed src="/assets/images/pdf.pdf" type="application/pdf" class="w-full h-full" />
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="bg-white rounded-lg p-8 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <img src="/assets/images/whatsapp-image-2024-06-24-at-16-18-12.jpeg" alt="Gallery 1" className="rounded shadow-md w-full" />
                    <img src="/assets/images/whatsapp-image-2025-02-15-at-15-11-52.jpeg" alt="Gallery 2" className="rounded shadow-md w-full" />
                    <img src="/assets/images/whatsapp-image-2024-04-16-at-11-15-06.jpeg" alt="Gallery 3" className="rounded shadow-md w-full" />
                </div>
            </section>

            {/* Outreach Section */}
            <section className="bg-teal-700 rounded-lg p-8 mb-8 text-white text-center">
                <h2 className="text-3xl font-bold mb-4">Outreach - Spread the message of Carlo!</h2>
                <p className="text-lg italic">
                    Want to help others get to know Carlo or start a Carlo Acutis youth group in your parish but not sure how to begin? Reach out to us on email or phone number and we will be more than happy to help and point you in the right direction.<br />
                    Contact Brenda on +44 7300 966 444 or email info@carloacutisireland.org
                </p>
            </section>
        </DefaultLayout>
    );
};

export default Resources;