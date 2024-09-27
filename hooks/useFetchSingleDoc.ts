import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase";

export const useFetchSingleDoc = (id: string) => {
  const [parcel, setParcel] = useState<any>(null); // Initialize with null, as parcel is a single object
  const [error, setError] = useState<string | null>(null); // Better error management with string or null

  const controller = new AbortController();

  const fetchTransactions = async () => {
    try {
      if (!id) return; // Avoid fetching if no id is provided

      // Create docRef

      // Fetch the parcel
    } catch (err: any) {
      setError(err.message || "An error occurred while fetching the parcel");
    }
  };

  fetchTransactions();

  return { parcel, error };
};
