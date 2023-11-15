import { loading } from "@/public/assets";
import Image from "next/image";

const Loading = () => {
  return (
    <div className="min-h-screen">
      <Image width={70} height={70} alt="Loading" src={loading} />
    </div>
  );
};

export default Loading;
