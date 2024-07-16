import Header from "../components/header";
import Input from "../components/input";
import Image from "next/image";
import HeroImage from "@/assets/img/hero-image.png";

export default function Home() {
  return (
    <div className="h-screen relative">
      <Header />
      <div className="flex flex-col mx-auto justify-center items-center text-[#121826] mt-[20vh] w-full">
        <div className="flex flex-col justify-center items-center w-1/2 gap-4">
          <h1 className="text-4xl font-semibold">Search</h1>
          <h2 className="font-regular ">
            Search high-resolution images from Unsplash
          </h2>
          <Input placeholder="Enter your keywords..." searchRequest={null} />
        </div>
      </div>
      <Image
        src={HeroImage}
        alt="background of unplash pictures"
        className="absolute top-44 w-full object-fill -z-10"
      />
    </div>
  );
}
