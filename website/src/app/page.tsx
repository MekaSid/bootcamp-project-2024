// src/app/page.tsx

import Heading from "../components/Heading";
import ProfileImage from "../components/ProfileImage";
import Description from "../components/Description";

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
