import { useEffect } from "react";

const useTidioChat = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//code.tidio.co/komdfuc9mnpqkl86ax6okjjs1h4tm0ek.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
};

export default useTidioChat;

