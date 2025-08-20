import FormSelect from "@/components/common-section/FormSelect";
import { OptionType } from "@/components/common-section/type";

const JobSort = () => {
 const sortOptions: OptionType[] = [
  { value: "SortBy Newest", label: "SortBy Newest" },
  { value: "SortBy Oldest", label: "SortBy Oldest" },
  { value: "SortBy Popular", label: "SortBy Popular" },
  { value: "SortBy Trending", label: "SortBy Trending" }
];

  return (
    <>
     <FormSelect options={sortOptions} />
    </>
  );
};

export default JobSort;
