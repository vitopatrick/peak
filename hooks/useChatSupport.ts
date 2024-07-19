import { useEffect } from "react";

const useTidioChat = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//code.tidio.co/wzz59nlshlkvxfmepnbh2jujamzygyaf.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
};

export default useTidioChat;
