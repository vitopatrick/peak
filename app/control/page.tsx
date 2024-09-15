import { getPackages } from "@/actions/package";
import CreateParcelForm from "@/components/createparcelForm/CreateParcelForm";
import PackagesTable from "@/components/packages_table/PackagesTable";

const ControlPage = async () => {
  const packages: any = await getPackages();

  return (
    <div>
      <CreateParcelForm />
      <PackagesTable packages={packages} />
    </div>
  );
};

export default ControlPage;
