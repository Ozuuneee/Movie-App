// "use client"

// import { SearchInput } from "../_components/SearchInput";
// import { ChangeEvent, useState } from "react";
// import { SearchResultList } from "../_components/SearchResultList";

// export const SearchForMainPage = () => {
//     const [searchValue, setSearchValue] = useState<string>("");

//     const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//         setSearchValue(e.target.value);
//     }
//   return (
//     <div className="flex flex-col gap-8">
//       <SearchInput handleChange={handleChange} value={searchValue} />
//       { searchValue && <SearchResultList searchValue={searchValue} />}
//     </div>
//   );
// };