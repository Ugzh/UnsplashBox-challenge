import SearchIcon from "@/assets/img/Search.svg";
import Image from "next/image";
function Input({
  placeholder,
  searchRequest,
}: {
  placeholder: string;
  searchRequest: string | null;
}) {
  return (
    <div className="relative w-3/4 ">
      <input
        type="text"
        placeholder={placeholder}
        className="font-light border-2 rounded-md h-14 w-full px-4"
      >
        {searchRequest}
      </input>
      <Image
        src={SearchIcon}
        alt="Search icon"
        className="absolute right-2 top-4"
      />
    </div>
  );
}

export default Input;
