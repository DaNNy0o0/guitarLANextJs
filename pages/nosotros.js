import Image from "next/image";
import Layout from "../components/layout";
import styles from '../styles/nosotros.module.css'

export default function Nosotros() {
  return (
    <Layout
      title={"Nosotros"}
      description="Sobre nosotros, guitarLA, tienda de música"
    >
      <main className="contenedor">
        <h1 className="heading">Nosotros</h1>

        <div className={styles.contenido}>
          <Image src='/img/nosotros.jpg' width={1000} height={800} alt="Imagen sobre nosotros" />
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              ornare odio a urna maximus bibendum. Integer in libero dui. Sed
              eleifend augue ut ornare tristique. Praesent congue mattis magna
              congue porta. Cras malesuada bibendum commodo. Phasellus rhoncus
              molestie augue a varius. Integer sed hendrerit nisi, ac accumsan
              arcu. Ut tincidunt tristique massa, sodales tempus arcu
              ullamcorper nec. Pellentesque pharetra tempor quam. Donec a urna
              ut odio ullamcorper maximus in ac leo. Praesent leo enim, interdum
            </p>

            <p>
              Integer tincidunt porttitor odio, et dictum enim rutrum in.
              Vestibulum ornare enim nulla, nec interdum sapien fringilla at.
              Nunc mattis tortor nec molestie cursus. Maecenas ultrices justo
              gravida erat eleifend, eu imperdiet dolor commodo. Duis
              pellentesque nulla et fermentum luctus. Integer molestie bibendum
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
