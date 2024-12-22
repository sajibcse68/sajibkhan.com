import Image from 'next/image';
import Link from 'next/link';

function HeroSection() {
  return (
    <div className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-white to-white dark:from-blue2-900 dark:to-blue2-900 transition-colors duration-300">
      {/** <!-- Animated Background Patterns --> */}
      <div className="absolute inset-0">
        {/** <!-- Gradient Overlay --> */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-gray-500/10 via-blue-500/10 to-gray-900/10 dark:from-gray-900/50 dark:via-blue-500/20 dark:to-gray-900/50 backdrop-blur-sm"></div> */}

        {/** <!-- Animated SVG Patterns --> */}
        <div className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-96 h-96 animate-[float_6s_ease-in-out_infinite]">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <path
              fill="currentColor"
              className="text-gray-500/20 dark:text-blue-500/20"
              d="M45.4,-51.6C58.3,-39.9,68,-24.7,71.1,-7.9C74.2,8.9,70.7,27.3,59.8,39.2C48.9,51.1,30.6,56.5,11.2,61.5C-8.2,66.5,-28.7,71.1,-43.5,63.3C-58.3,55.5,-67.4,35.4,-71.5,14.1C-75.6,-7.2,-74.7,-29.7,-63.3,-42.4C-51.9,-55.2,-30,-58.2,-10.7,-56.3C8.5,-54.4,32.5,-63.3,45.4,-51.6Z"
              transform="translate(100 100)"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 100 100"
                to="360 100 100"
                dur="20s"
                repeatCount="indefinite"
              />
            </path>
          </svg>
        </div>

        {/** <!-- Additional Decorative Elements --> */}
        <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-96 h-96 animate-[float_8s_ease-in-out_infinite]">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <path
              fill="currentColor"
              className="text-purple-500/20 dark:text-purple-400/20"
              d="M42.7,-62.2C50.9,-51.8,50.1,-34.5,51.7,-19.9C53.4,-5.3,57.4,7.6,54.9,19.1C52.4,30.6,43.2,40.8,32.1,47.9C21,55,7.9,59,-5.5,57.6C-18.9,56.2,-32.5,49.3,-43.5,39.2C-54.5,29,-62.9,15.5,-65.1,0.7C-67.3,-14.1,-63.3,-30.5,-52.8,-41.1C-42.3,-51.7,-25.4,-56.5,-8.2,-56.8C9,-57.1,34.5,-72.7,42.7,-62.2Z"
              transform="translate(100 100)"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="360 100 100"
                to="0 100 100"
                dur="15s"
                repeatCount="indefinite"
              />
            </path>
          </svg>
        </div>
      </div>

      {/** <!-- Main Content Container --> */}
      <div className="relative w-full max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/** <!-- Text Content --> */}
          <div
            className="space-y-8 text-center lg:text-left"
            data-aos="fade-right"
          >
            {/** <!-- Name Tag --> */}
            <div className="flex justify-center gap-4 lg:justify-start">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                👋 Hi, I&apos;m Sajib Khan
              </span>

              {/** <!-- Social Links --> */}
              <div className="flex gap-2 justify-center items-center">
                <Link
                  href="https://www.linkedin.com/in/sajibkhan"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                  target="_blank"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                  </svg>
                </Link>

                <Link
                  href="https://github.com/sajibcse68"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                  target="_blank"
                >
                  <span className="sr-only">GitHub</span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </Link>
              </div>
            </div>

            {/** <!-- Main Headline --> */}
            <h1 className="text-4xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white">
              <span className="block">Frontend Developer</span>
              <span className="text-2xl lg:text-[26px] xl:text-4xl block mt-2 text-gray-600 dark:text-slate-500">
                & Innovative Web Solutions Architect
              </span>
            </h1>

            {/** <!-- Sub-headline --> */}
            <p className="flex w-full mx-auto max-w-2xl flex-wrap justify-center gap-4 text-lg text-gray-600 dark:text-gray-300 sm:text-xl lg:justify-start">
              Passionate Frontend Architect with 10+ years of experience in
              transforming complex requirements into high-performance web
              solutions. Skilled in JavaScript, React, TypeScript, and Next.js,
              I deliver user-friendly applications with a focus on scalability
              and performance. Let&apos;s build something amazing! 🚀
            </p>

            {/** <!-- CTA Buttons --> */}
            {/* <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <button className="group relative px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-lg overflow-hidden transition-all duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                <span className="relative z-10">View Projects</span>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-blue-700 transition-transform duration-300"></div>
              </button>

              <button className="group px-6 py-3 text-lg font-medium text-blue-600 dark:text-blue-400 border-2 border-blue-600 dark:border-blue-400 rounded-lg transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-900/30">
                Contact Me
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div> */}
          </div>

          {/** <!-- Image/Illustration --> */}
          <div className="relative lg:block" data-aos="fade-left">
            {/** <!-- Profile Image with Decoration --> */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <Image
                src="/images/portrait.png"
                width="384"
                height="384"
                className="relative rounded-full w-64 h-64 sm:w-72 sm:h-72 lg:w-96 lg:h-96 object-cover mx-auto border-4 border-white dark:border-gray-800 shadow-xl"
                alt="sajib"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
