import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";

export const useFetchAllPackages = () => {
  const [packages, setPackages] = useState<any[]>([]); // Specify an array type
  const [error, setError] = useState<string | null>(null); // Initialize error state

  useEffect(() => {
    const controller = new AbortController();

    const fetchTransactions = async () => {
      try {
        // Create collectionRef
        const collectionRef = collection(db, "packages");

        // Fetch the packages
        const snapshot = await getDocs(collectionRef);

        // Map over the docs and extract data
        const fetchedPackages = snapshot.docs.map((doc) => ({
          id: doc.id, // Include document id for unique identification
          ...doc.data(),
        }));

        // Set the packages state
        setPackages(fetchedPackages);
      } catch (err: any) {
        // Handle any errors that occur during fetching
        setError(err.message || "An error occurred while fetching packages");
      }
    };

    fetchTransactions();

    return () => controller.abort();
  }, []);

  return { packages, error };
};
