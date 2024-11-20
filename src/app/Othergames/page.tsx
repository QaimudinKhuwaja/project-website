const Contact = () => {
    return (
      <div className="bg-gray-900 py-16">
        <div className="container mx-auto px-4">
  
          {/* Other Games Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  
            {/* Game 1 - PUBG */}
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">
              <img 
                id="image" 
                src="pubg.jpg" 
                alt="PUBG" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <button id="game-button" className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition">
                  Play PUBG
                </button>
              </div>
            </div>
  
            {/* Game 2 - Vice City */}
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">
              <img 
                id="image" 
                src="vicecity.png" 
                alt="Vice City" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <button id="game-button" className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition">
                  VICE CITY
                </button>
              </div>
            </div>
  
            {/* Game 3 - Cricket */}
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">
              <img 
                id="image" 
                src="circket.png" 
                alt="Cricket" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <button id="game-button" className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition">
                  CRICKET
                </button>
              </div>
            </div>
  
            {/* Game 4 - Car Race */}
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">
              <img 
                id="image" 
                src="cargame.png" 
                alt="Car Race" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <button id="game-button" className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition">
                  CAR RACE
                </button>
              </div>
            </div>
  
            {/* Game 5 - The War */}
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">
              <img 
                id="image" 
                src="battelgame.png" 
                alt="The War" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <button id="game-button" className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition">
                  THE WAR
                </button>
              </div>
            </div>
  
            {/* Game 6 - Subway */}
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">
              <img 
                id="image" 
                src="subaysuruf.png" 
                alt="Subway Surfer" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <button id="game-button" className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition">
                  SUBWAY
                </button>
              </div>
            </div>
  
          </div>
        </div>
      </div>
    );
  };
  
  export default Contact;
  