import { useRouter } from "next/router";
import { BsEmojiSunglasses } from "react-icons/bs";

const SidebarLogo = () => {
  const router = useRouter();
  
  return (
    <div 
      onClick={() => router.push('/')}
      className="
        rounded-full 
        h-20
        w-20
        p-4 
        flex 
        items-center 
        justify-center 
        hover:bg-blue-300 
        hover:bg-rose-300
        cursor-pointer
    ">
      <BsEmojiSunglasses size={28} color="white" />
    </div>
  );
};

export default SidebarLogo;
