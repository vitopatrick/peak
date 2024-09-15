import { getPackages } from "@/actions/package";
import CreateParcelForm from "@/components/createparcelForm/CreateParcelForm";
import PackagesTable from "@/components/packages_table/PackagesTable";

const ControlPage = async () => {
  const packages = await getPackages();

  return (
    <div>
      <CreateParcelForm />
      {Array.isArray(packages) ? <PackagesTable packages={packages} /> : []}
      {/* {packages ? <PackagesTable /> : null} */}
    </div>
  );
};

export default ControlPage;
