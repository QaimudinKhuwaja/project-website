const Contact = () => {
    return (
      <div id="contact-section" className="bg-gray-900 text-white py-16">
        <div id="contactimgandwritingflex" className="container mx-auto flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-12">
          
          {/* Text Section */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 id="contacth1" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 mb-6">
              Get in Touch
            </h1>
  
            <h3 className="text-lg sm:text-xl lg:text-2xl mb-2">Email: 
              <a id="email" href="mailto:farazahmedkhuwaja171@gmail.com" className="text-purple-400 hover:underline">
                farazahmedkhuwaja171@gmail.com
              </a>
            </h3>
  
            <h3 className="text-lg sm:text-xl lg:text-2xl mb-2">LinkedIn: 
              <a id="linkdin" href="https://www.linkedin.com/in/qaimudin-khuwaja/" className="text-purple-400 hover:underline">
                Qaimudin Khuwaja
              </a>
            </h3>
  
            <h3 className="text-lg sm:text-xl lg:text-2xl mb-2">Facebook: 
              <a id="facebook" href="https://www.facebook.com/faraz.ahmed.37" className="text-purple-400 hover:underline">
                Faraz Ahmed
              </a>
            </h3>
  
            <h3 className="text-lg sm:text-xl lg:text-2xl mb-2">WhatsApp: 
              <a id="Whatsapp" href="tel:+923113906067" className="text-purple-400 hover:underline">
                03113906067
              </a>
            </h3>
          </div>
  
          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <img 
              id="contactimg" 
              src="/contactimg.png" 
              alt="Contact Image" 
              className="w-full h-auto object-cover rounded-lg shadow-lg" 
            />
          </div>
          
        </div>
      </div>
    );
  };
  
  export default Contact;
  