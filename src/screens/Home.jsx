import Banner from "../components/Banner";
import Completed from "../components/Completed";
import CurrentlyWorking from "../components/CurrentlyWorking";

export default function Home() {
  return (
    <>
      {/* Banner */}
      <Banner />
      {/* Currently Working */}
      <CurrentlyWorking />
      {/* Completed Descending  */}
      <Completed />
      {/* About Me */}
      {/* Hire Me */}
    </>
  );
}
