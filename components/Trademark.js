import image from "../assets/img/mens-wear.png";
import Image from "next/image";

const Trademark = () => {
  return (
    <section className="trademark" id="trademark">
      <div className="trademark-container">
        <Image src={image} alt="La marca Men's Wear" />
      </div>
    </section>
  );
};

export default Trademark;
