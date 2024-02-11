import { fetchSearch } from "@/lib/fetchSearch";
import React from "react";

type Props = {
  searchParams: {
    q: string;
  };
};

const SearchPage = async ({ searchParams: { q } }: Props) => {
  const results = await fetchSearch(q);

  console.log("Results: ", results);
  return <div>SearchPage</div>;
};

export default SearchPage;
