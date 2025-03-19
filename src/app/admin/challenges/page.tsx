import ChallengesList from "@/components/ChallengeList";
import { getAllTheChallenges } from "@/lib/Database/Actions/ChallengeAction";
  
const ChallengesPage = async () => {
  const challenges = await getAllTheChallenges(); // Fetching data in Server Component

  return <ChallengesList initialData={challenges} data={challenges.data || []} />;
};

export default ChallengesPage;
