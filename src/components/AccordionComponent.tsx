"use client"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
    <div>  <Accordion type="single" collapsible className="mx-10">
        {challenges.map((challenge) => (
          <AccordionItem key={challenge.id} value={challenge.id}>
            <AccordionTrigger>
              <span className="font-bold text-xl">{challenge.title}</span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="font-light text-base">       <span className="text-xl font-serif">❞</span> 
               <span className="pl-3">{challenge.description}</span> 
             </div>
              <div className="bg-blue-50 h-14 text-blue-400 font-bold flex pl-12 items-center">
                {challenge.solution}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion></div>
  )
}

export default AccordionComponent