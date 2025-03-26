"use client"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CircleCheckIcon, ChevronRightIcon } from "lucide-react";

const challenges = [
  {
    id: "item-1",
    title: "Admin",
    description:
      "Onboarding is a major administrative burden, severely impacting recruitment efficiency and hindering overall business agility.",
    solution:
      "iona.ai automates the onboarding process, freeing up your team to focus on strategic tasks",
  },
  {
    id: "item-2",
    title: "Chaos",
    description:
      "At scale, the onboarding process becomes chaotic. The team constantly reacts to urgent issues instead of proactively managing the process.",
    solution:
      "iona.ai provides a unified platform for all onboarding tasks, ensuring a consistent and efficient process.",
  },
  {
    id: "item-3",
    title: "Brand",
    description:
      "Our employer brand is hurt by slow onboarding. New hires complain, and delays in offers and paperwork increase the risk of them accepting competing offers.",
    solution:
      "iona.ai provides a unified platform for all onboarding tasks, ensuring a consistent and efficient process.",
  },
  {
    id: "item-4",
    title: "Compliance",
    description:
      "We prioritize strict government compliance, but the meticulous data handling required for 100% accuracy creates significant operational overhead and carries a constant risk of reputational damage.",
    solution:
      "iona.ai provides a unified platform for all onboarding tasks, ensuring a consistent and efficient process.",
  },
  {
    id: "item-5",
    title: "Pressure",
    description:
      "Business push for faster, cheaper onboarding. Our current tools can't keep up, hindering our ability to streamline and improve the experience.",
    solution:
      "iona.ai provides a unified platform for all onboarding tasks, ensuring a consistent and efficient process.",
  },
  {
    id: "item-6",
    title: "Tools",
    description:
      "Juggling multiple tools, relying heavily on internal resources and staffing agencies, all while struggling to achieve quality hires at the speed and scale you need.",
    solution:
      "iona.ai provides a unified platform for all onboarding tasks, ensuring a consistent and efficient process.",
  },
];

const AccordionComponent = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <Accordion 
        type="single" 
        collapsible 
        className="w-full divide-y divide-gray-100"
      >
        {challenges.map((challenge) => (
          <AccordionItem 
            key={challenge.id} 
            value={challenge.id}
            className="group"
          >
            <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 transition-colors duration-300 group-data-[state=open]:bg-blue-50/30">
              <div className="flex items-center space-x-4 w-full">
                <CircleCheckIcon 
                  className="text-gray-400 group-data-[state=open]:text-blue-600 transition-colors" 
                  size={24} 
                />
                <span className="font-semibold text-lg text-gray-800 group-data-[state=open]:text-blue-800 flex-grow">
                  {challenge.title}
                </span>
                <ChevronRightIcon 
                  className="transform group-data-[state=open]:rotate-90 transition-transform text-gray-500" 
                  size={24} 
                />
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6 pt-2">
              <div className="relative pl-6 text-gray-700 text-base leading-relaxed">
                <span className="absolute left-0 top-0 text-4xl text-blue-500 opacity-50">"</span>
                {challenge.description}
              </div>
              <div className="mt-4 bg-blue-50 rounded-xl p-4 flex items-center space-x-3 text-blue-700">
                <CircleCheckIcon className="text-blue-600" size={20} />
                <span className="font-medium">{challenge.solution}</span>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default AccordionComponent;