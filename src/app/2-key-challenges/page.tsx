import AccordionComponent from "@/components/AccordionComponent";
 
const KeyChallenges = () => {
  return (
    <div>
      {/** above section */}
      <div>
        <div className="space-y-12">
          <div className="space-y-4 mx-10">
            <h1 className="text-4xl sm:text-5xl lg:text-8xl font-bold tracking-tight">
             Key Challenges of High- <br />
              <span >Volume Hiring</span>
            </h1>
             <div className="mt-2">
               <p>
                Chaotic, expensive, and admin-heavy. Current tools aren't equipped for this scale hiring. This leads to frustration and suboptimal outcomes.
                <br />
                iona.ai is designed to help you overcome these challenges. Expand an issue to learn how we fix it for you.
               </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-4">
       <AccordionComponent />
      </div>
 
    </div>
  );
};

export default KeyChallenges;
