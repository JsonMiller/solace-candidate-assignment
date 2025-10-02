"use client";

import { useState } from "react";
import type { AdvocateData, Specialty } from "@/app/types/assignment-types";
import AdvocateTable from "@/app/components/advocate-table";
import AdvocateSearch from "@/app/components/advocate-search";

/**
 * Simple component to be the entry point to the client. It takes in the advocates from the server and renders the page.
 * @param initialAdvocates full list of advocates in our table.
 */
export default function AdvocateList({ initialAdvocates }: { initialAdvocates: AdvocateData[] }) {
  const [filteredAdvocates, setFilteredAdvocates] = useState<AdvocateData[]>(initialAdvocates);

  const onChange = (searchTerm: string) => {
    if(!searchTerm || searchTerm === "") {
      setFilteredAdvocates(initialAdvocates);
      return;
    }

    setFilteredAdvocates(initialAdvocates.filter((advocate) => {
      return (
          advocate.firstName.includes(searchTerm) ||
          advocate.lastName.includes(searchTerm) ||
          advocate.city.includes(searchTerm) ||
          advocate.degree.includes(searchTerm) ||
          advocate.specialties.includes(searchTerm as Specialty) ||
          advocate.yearsOfExperience.toString().includes(searchTerm)
      );
    }));
  };

  const onReset = () => {
    setFilteredAdvocates(initialAdvocates);
  };

  return (
    <>
      <AdvocateSearch onChange={onChange} onReset={onReset}/>
      <br/>
      <br/>
      <AdvocateTable advocateData={filteredAdvocates || []}/>
    </>
  );
}