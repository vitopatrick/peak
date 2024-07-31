import { useEffect } from "react";

const useTidioChat = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//code.tidio.co/6tv1csteggumhlxfaus2ybaisf6w2sx3.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
};

export default useTidioChat;

