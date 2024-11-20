

const Page = () => {
  return (
     <>

      <div id="main" className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">

        {/* Image Section and Text Section for Medium Screens and Above */}
        <div className="flex flex-col sm:flex-row items-center justify-center w-full sm:px-8 md:px-16 space-y-6 sm:space-y-0 sm:space-x-8 py-8 ">

          {/* Image Section */}
          <div className="w-full sm:w-1/2 md:w-1/3">
            <img src="/spider.png" alt="Spider Black Games" className="md:w-[360px] w-[320px] md:h-[360px] h-[320px] object-cover opacity-75" />
          </div>

          {/* Text Section */}
          <div id="main-div-of-text" className="text-center sm:text-left w-full sm:w-1/2">
            <div id="heading-text" className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 mb-4">
              <span>SPIDER</span> BLACK <br />GAMES
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold mb-4">I am Qaimudin Khuwaja</h2>

            <p id="small-text" className="text-sm sm:text-base text-gray-300 mb-6">
              Get ready to level-up your gaming experience. <br />
              Latest gaming news and updates, game reviews and walkthroughs, <br />
              Community forums to connect and share, exclusive giveaways and tournaments. <br />
              Join our community today and level up your gaming experience! Explore our latest game reviews, news, and community discussions.
            </p>

            <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition duration-300">
              Play Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
