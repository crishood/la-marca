import { useState } from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const [sent, setSent] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    document.getElementById("news-form").reset();
    setSent(true);
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-title">
          <h2>Súscribete a nuestro newsletter</h2>
        </div>
        <div className="contact-text">
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit.
          </p>
        </div>
        <form
          className="contact-form"
          onSubmit={handleSubmit(onSubmit)}
          id="news-form"
        >
          <div className="contact-form-col">
            <input
              type="text"
              placeholder="NOMBRE: "
              {...register("name", { required: true })}
            />

            <select name="select" {...register("docType", { required: true })}>
              <option disabled selected hidden value="">
                TIPO DE DOCUMENTO:
              </option>
              <option value="CC">CÉDULA DE CIUDADANÍA</option>
              <option value="Pasaporte">PASAPORTE</option>
            </select>
            <input
              type="text"
              placeholder="TELÉFONO: "
              {...register("phone", { required: true, pattern: /^[0-9]*$/ })}
            />
          </div>
          <div className="contact-form-col">
            <input
              type="text"
              placeholder="CORREO ELECTRÓNICO: "
              {...register("email", {
                required: true,
                pattern:
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
            />
            <input
              type="text"
              placeholder="NÚMERO DE DOCUMENTO: "
              {...register("document", { required: true, pattern: /^[0-9]*$/ })}
            />
            <div className="contact-form-check">
              <label>
                <input
                  type="checkbox"
                  {...register("terms", { required: true })}
                />{" "}
                Acepto términos y condiciones
              </label>
              <button>SUSCRIBIRME</button>
            </div>
          </div>
          <div className="errors">
            <p>{errors.name?.type === "required" && "* Ingresa tu nombre"}</p>
            <p>
              {errors.docType?.type === "required" &&
                "* Selecciona un tipo de documento"}
            </p>
            <p>
              {errors.phone?.type === "required" ||
              errors.phone?.type === "pattern"
                ? "* Ingresa un número de contacto válido"
                : null}
            </p>

            <p>
              {errors.email?.type === "required" ||
              errors.email?.type === "pattern"
                ? "* Ingresa un email válido"
                : null}
            </p>
            <p>
              {errors.document?.type === "required" ||
              errors.document?.type === "pattern"
                ? "* Ingresa un número de documento válido"
                : null}
            </p>
            <p>
              {errors.terms?.type === "required" &&
                "* Acepta los términos por favor"}
            </p>
          </div>
          <div className="sent">
            <p>{sent && "Bienvenido/a a nuestro Newsletter"}</p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
