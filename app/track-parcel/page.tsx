import Jumbotron from "@/components/jumbotron/Jumbotron";
import SearchForm from "@/components/search-form/SearchForm";

const TrackParcel = () => {

if (typeof window !== "undefined") {
  console.log("hello from browser");
}

  return (
    <div>
      <Jumbotron title="Find Package" />
      <SearchForm />
    </div>
  );
};

export default TrackParcel;
