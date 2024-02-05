import Image from "next/image";

const TransparentImage = () => {
  return (
    <Image
      fetchPriority="high"
      priority
      width={400}
      height={400}
      
      style={{
        "pointer-events": "none",
        position: "absolute",
        top: "0",
        left: "0",
        width: "98vw",
        height: "99vh",
        "max-width": "98vw",
        "max-height": "99vh",
      }}
      src="/transparentImg.png"
    />
  );
};
export default TransparentImage;
