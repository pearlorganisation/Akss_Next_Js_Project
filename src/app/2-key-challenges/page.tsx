import AccordionComponent from "@/components/AccordionComponent";

const KeyChallenges = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 flex-grow">
        <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12 lg:space-y-16">
          {/* Heading Section */}
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-4 sm:mb-6 lg:mb-8 leading-tight">
              Key Challenges of
              <br />
              <span className="text-indigo-600">High-Volume Hiring</span>
            </h1>
            
            <div className="max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto px-4 sm:px-0">
              <p className="text-base sm:text-lg md:text-xl text-gray-700 font-medium mb-4 sm:mb-6 lg:mb-8 leading-relaxed">
                High-volume hiring remains a complex puzzle – <span className="text-indigo-600 font-bold">chaotic, expensive, and overwhelmingly administrative</span>. 
                Traditional tools fall short, creating a landscape of frustration and missed opportunities.
              </p>
              
              <p className="text-sm sm:text-base md:text-lg text-gray-600 italic mb-6 sm:mb-8 lg:mb-10">
                Discover how iona.ai transforms these challenges into strategic advantages.
              </p>
            </div>
          </div>

          {/* Accordion Section */}
          <div className="w-full max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-2xl border border-gray-200 shadow-lg p-2 sm:p-4 lg:p-6">
              <AccordionComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyChallenges;