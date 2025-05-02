'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import type { UrlObject } from 'url';
import Image from 'next/image';
import { useWindowWidth } from '@react-hook/window-size';
import { FaLinkedin, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

type Testimonial = {
  img: string;
  name: string;
  designation: string;
  caption: string;
  text: string;
  linkedinLink: string | UrlObject;
};

const testimonials: Testimonial[] = [
  {
    name: 'Håkan Höglund',
    img: '/images/people/håkan-höglund.jpeg',
    designation: 'Chief Technology Officer at Goava',
    caption: 'May 16, 2022, Håkan managed 𝐒𝐚𝐣𝐢𝐛 directly',
    text: "I have had the privilege of working with Sajib Khan in his role as Lead Software Engineer at Goava Sales Intelligence AB. Sajib reports to me directly. Sajib joined Goava in July 2019 as Senior Software Engineer leading the front-end development team. Sajib is a very talented engineer and a dedicated and hard working employee. He is highly skilled in technologies such as JavaScript, React.js, Next.js, TypeScript, Redux, etc. Sajib is also a very capable project lead and well-versed in agile methodologies. He is a key employee at Goava and I'm certain he would perform well in any similar role.",
    linkedinLink: 'https://www.linkedin.com/in/h%C3%A5kan-h%C3%B6glund-03ba622',
  },
  {
    name: 'Anton Weihard',
    img: '/images/people/anton-weihard.jpeg',
    designation: 'CEO & Co-Founder at Goava',
    caption: 'April 24, 2022, Anton worked with 𝐒𝐚𝐣𝐢𝐛 on the same team',
    text: 'I’m really happy to be working with Sajib. He’s a great leader with an fantastic eye for solving problems and with a strong commitment to the work he puts in. With a good understanding of user stories he helps me as a product manager to solve problems for our customers and making the product better in each and every sprint. He is also a very kind and caring person which makes him appreciate by me and his other colleagues.',
    linkedinLink: 'https://www.linkedin.com/in/anton-weihard',
  },
  {
    name: 'Vanna Pettersson',
    img: '/images/people/vanna-pettersson.jpeg',
    designation:
      'Product Manager | eCommerce and Transportation | Posten Bring Group',
    caption: 'October 10, 2021, Vanna worked with 𝐒𝐚𝐣𝐢𝐛 but on different teams',
    text: "Sajib plays a key role in the development of the Goava platform. He accelerated my technical understanding by providing technical matters and relevant data which deepened my understanding and how to reach set goals and OKR's. He has an ability to explain complex problems into understandable solutions In a calm and clear manner that includes the whole scrum team. Great developer, great teammate, great pedagogical skills. I look forward to working with Sajib again soon, definitely!",
    linkedinLink: 'https://www.linkedin.com/in/vanna-pettersson-b4020b128',
  },
  {
    name: 'Arman Bhuiyan',
    img: '/images/people/arman-bhuiyan.png',
    designation:
      'Smart Contract Security Researcher. Previously CTO @wind.app, CTO @Concourse Open Community',
    caption: 'September 21, 2019, Arman worked with 𝐒𝐚𝐣𝐢𝐛 on the same team',
    text: "Sajib has a very strong understanding on frontend and backend software developments. I have worked with him on several projects. He's great at troubleshooting new problems, overcoming obstacles in his endeavours and loves to help others. He has deep knowledge in core JavaScript and always pushes himself to learn new state-of-the-art technologies. He is a good leader and a great teammate who brings positive attitude to work everyday! He is the perfect candidate for any company to recruit and is also great with management.",
    linkedinLink: 'https://www.linkedin.com/in/arman-bhuiyan',
  },
  {
    name: 'Sadlil Rhythom',
    img: '/images/people/sadlil-rhythom.jpeg',
    designation: 'Senior Software Engineer, Tech Lead @ Google',
    caption: 'May 29, 2019, Sadlil worked with 𝐒𝐚𝐣𝐢𝐛 on the same team',
    text: 'Sajib is a really talented and organised guy. He is also a great team player, always pushing himself to learn and grow in his career.  He posses deep knowledge and expert skills in various frontend technologies like javascript, react, vue.js etc. I had the opportunity to work with him for several projects. The professionalism and quality of his work is very impressive.',
    linkedinLink: 'https://www.linkedin.com/in/sadlil',
  },
  {
    name: 'Anwarul Azim Shishir',
    img: '/images/people/anwarul-azim-shishir.jpeg',
    designation: 'Business Operations & SCM',
    caption:
      'February 28, 2017, Anwarul Azim worked with 𝐒𝐚𝐣𝐢𝐛 on the same team',
    text: "I know Sajib Khan for over a year. He is a very good Front End Developer... proficient with JavaScript, Backbone JS, Gulp and GIt. I've seen him not only excel at the core elements of his job, but also he is very friendly, pious and intellectual. I wish him all the best for his career in future.",
    linkedinLink: 'https://www.linkedin.com/in/anwarul-azim-s-21b20682/',
  },
  {
    name: 'Anindya Roy Chowdhury',
    img: '/images/people/anindya-roy-chowdhury.jpeg',
    designation: 'Graduate Teaching Assistant',
    caption:
      'July 18, 2021, Anindya Roy worked with 𝐒𝐚𝐣𝐢𝐛 but on different teams',
    text: "I've worked with Sajib while working at Goava and I must say Sajib had been instrumental in establishing the UI/UX team with his knowledge and expertise. He is always passionate about learning new technologies and supportive of his team members. After joining Goava, he redesigned and implemented the whole UI with Cutting-edge technologies. He also set up the standard processes and approaches of Javascript Based Application development which was undoubtedly rewarding to other members. I highly recommend working with a professional like Sajib without a second thought.",
    linkedinLink: 'https://www.linkedin.com/in/anindya83',
  },
  {
    name: 'Mustakimur Rahman Khandaker',
    img: '/images/people/mustakimur-rahman-khandaker.jpeg',
    designation: 'Assistant Professor at The University of Georgia',
    caption: 'February 4, 2013, Mustakimur Rahman and 𝐒𝐚𝐣𝐢𝐛 studied together',
    text: 'Mr. Sajib Khan is a good programmer and contestant and I wish his bright future.',
    linkedinLink: 'https://www.linkedin.com/in/mrk15e/',
  },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselItems, setCarouselItems] = useState(1);
  const width = useWindowWidth();

  useEffect(() => {
    if (width < 768) {
      setCarouselItems(1);
    } else if (width < 1024) {
      setCarouselItems(2);
    } else {
      setCarouselItems(3);
    }

    setCurrentIndex(0);
  }, [width]);

  // Display three testimonials at a time
  const displayedTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + carouselItems
  );

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      currentIndex + carouselItems >= testimonials.length
        ? 0
        : prevIndex + carouselItems
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      currentIndex - carouselItems < 0
        ? testimonials.length - carouselItems
        : prevIndex - carouselItems
    );
  };

  return (
    <section className="min-h-screen py-20 md:py-20">
      <div className="max-w-7xl mx-auto text-center">
        <div className="text-center mb-12">
          <h2 className="text-carouselItems text-2xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            LinkedIn Recommendations
          </h2>

          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Trusted by Industry Leaders
          </p>
        </div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="grid grid-cols-1 gap-4 px-5  md:grid-cols-2 lg:grid-cols-3 1.5xl:px-0">
            {displayedTestimonials.map((testimonial) => (
              <div
                className="transform rounded-lg border border-gray-300 bg-white p-6 shadow-lg transition-transform hover:scale-105 dark:border-white2-80 dark:bg-white2-40"
                key={testimonial.name}
              >
                <Link
                  href="https://www.linkedin.com/in/sajibkhan/details/recommendations"
                  target="_blank"
                >
                  <div className="flex flex-col items-center">
                    <div className="flex flex-col items-center sm:flex-row sm:items-start justify-start mb-4">
                      <div className="shrink-0 relative w-fit h-fit">
                        <Image
                          src={testimonial.img}
                          alt={testimonial.name}
                          className="w-24 h-24 mt-0 sm:mt-1 rounded-full shadow-md border-4 border-white dark:border-gray-700"
                          width="96"
                          height="96"
                        ></Image>

                        <Link
                          href={testimonial.linkedinLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors duration-300"
                        >
                          <FaLinkedin className="w-5 h-5" />
                        </Link>
                      </div>
                      <div className="ml-0 mt-2 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                          {testimonial.name}
                        </h3>
                        <p className="text-[1rem] text-gray-600 dark:text-gray-400">
                          {testimonial.designation}
                        </p>
                        <p className="text-xs text-center md:text-left text-gray-600 dark:text-gray-400">
                          {testimonial.caption}
                        </p>
                      </div>
                    </div>
                    <p
                      className="text-[1rem] text-left text-gray-800 dark:text-white mb-4"
                      dangerouslySetInnerHTML={{ __html: testimonial.text }}
                    ></p>

                    {/* <a
                    href={testimonial.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-2"
                  >
                    View on LinkedIn <FaLinkedin className="w-5 h-5" />
                  </a> */}
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="absolute left-[1.5rem] 1.5xl:left-0 top-[42%] -translate-x-12 w-[calc(100%+3rem)] 1.5xl:w-[calc(100%+6rem)] flex justify-between px-6">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-white dark:bg-gray-700 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-transform transform hover:scale-110"
            >
              <FaChevronLeft className="text-gray-800 dark:text-white w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-white dark:bg-gray-700 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-transform transform hover:scale-110"
            >
              <FaChevronRight className="text-gray-800 dark:text-white w-6 h-6" />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {new Array(Math.ceil(testimonials.length / carouselItems))
              .fill('')
              .map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i * carouselItems)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentIndex / carouselItems === i
                      ? 'bg-blue-600'
                      : 'bg-gray-400 dark:bg-gray-600'
                  }`}
                ></button>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
