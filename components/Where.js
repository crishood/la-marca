import Image from "next/image";
import guy from "../assets/img/guy.png";
const Where = () => {
  return (
    <section className="where">
      <div className="where-container">
        <div className="where-title container">
          <h2>¿Dónde comprar?</h2>
        </div>
        <div className="where-description-wrapper">
          <div className="container">
            <div className="where-description">
              <div className="where-description-col-1">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse auctor enim augue, sit amet consectetur ligula
                  porttitor sit amet. Nulla facilisi. Praesent dolor eros,
                  cursus sit amet ante gravida, posuere gravida turpis.
                </p>
              </div>
              <div className="where-description-col-2">
                <p>
                  Vivamus sit amet posuere nisl, non maximus risus. Maecenas
                  magna enim, suscipit sit amet ipsum bibendum, semper varius
                  elit. Integer et tristique eros. Duis vitae pharetra arcu.
                  Aliquam vel eros tincidunt, vehicula ante sit amet, finibus
                  magna. Morbi cursus eros commodo erat dignissim sollicitudin.
                  Donec finibus, turpis in pellentesque tempor, justo purus
                  accumsan neque, ut maximus risus nulla vel orci.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="where-picture">
          <div className="container">
            <div className="where-picture-description">
              <div className="where-picture-frame">
                <Image src={guy} />
              </div>
              <div className="where-picture-text">
                <h2>Aliquam ac felis semper, consequat fidelis. |</h2>

                <p>
                  Vivamus sit amet posuere nisl, non maximus risus. Maecenas
                  magna enim, suscipit sit amet ipsum bibendum, semper varius
                  elit. Integer et tristique eros. Duis vitae pharetra arcu.
                  Aliquam vel eros tincidunt, vehicula ante sit amet, finibus
                  magna.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Where;
