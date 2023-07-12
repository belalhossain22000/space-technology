import Destination from "@/components/Destination/Destination";
import EnjoySpace from "@/components/EnjoySpace/EnjoySpace";
import Hero from "@/components/Hero/Hero";
import UltimateExperience from "@/components/UltimateExperience/UltimateExperience";


 const Home=() => {
  return (
    <main className="bg-[#0C003D] overflow-x-hidde">
     <Hero/>
     <EnjoySpace/>
     <Destination/>
     <UltimateExperience/>
    </main>
  )
}
export default Home;