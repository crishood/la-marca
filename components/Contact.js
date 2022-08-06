const Contact = () => {
  return (
    <section className="contact">
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
        <form className="contact-form">
          <div className="contact-form-col">
            <input type="text" placeholder="NOMBRE: " />
            <select name="select">
              <option hidden selected>
                TIPO DE DOCUMENTO:
              </option>
              <option value="value1">CÉDULA DE CIUDADANÍA</option>
              <option value="value2">PASAPORTE</option>
            </select>
            <input type="text" placeholder="TELÉFONO: " />
          </div>
          <div className="contact-form-col">
            <input type="text" placeholder="CORREO ELECTRÓNICO: " />
            <input type="text" placeholder="NÚMERO DE DOCUMENTO: " />
            <div className="contact-form-check">
              <label>
                <input type="checkbox" /> Acepto términos y condiciones
              </label>
              <button>SUSCRIBIRME</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
