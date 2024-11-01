import Image from "next/image";

export default function ProfileImage() {
  return (
    <div className="image-container">
      <Image
        src="/python.png"
        alt="Your Face"
        width={200}
        height={200}
        className="profile-image"
      />
    </div>
  );
}
