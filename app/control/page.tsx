"use client";

import CreateParcelForm from "@/components/createparcelForm/CreateParcelForm";
import PackagesTable from "@/components/packages_table/PackagesTable";
import { useFetchAllPackages } from "@/hooks/useFetchAllPackages";

const ControlPage = () => {
  const { packages } = useFetchAllPackages();

  console.log(packages);

  return (
    <div>
      <CreateParcelForm />
      {packages ? <PackagesTable packages={packages} /> : null}
    </div>
  );
};

export default ControlPage;
