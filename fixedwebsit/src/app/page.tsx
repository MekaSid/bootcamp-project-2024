
import Heading from "../components/mainpage/Heading";
import ProfileImage from "../components/mainpage/ProfileImage";
import Description from "../components/mainpage/Description";

export default function Home() {
  return (
    <div className="container">
      <main className="main-content">
        <div className="content-wrapper">
          <ProfileImage />
          <div className="text-content">
            <Heading />
            <Description />
          </div>
        </div>
      </main>
    </div>
  );
}
