import Section from "../../Common/Section/index.js";
import Header from "../../Common/Header/index.js";
import { Container } from "../../Common/Container/index.js";

export default () => (
  <Container>
    <Header title="O autorze" />
    <Section
      title="Angelina Kutuzova"
      body={
        <>
          <p>
            Jestem pasjonatką technologii 💻, z doświadczeniem zawodowym jako{" "}
            <strong>Strategic Customer Success Manager</strong> w startupie.
            Obecnie koncentruję się na rozwoju umiejętności programistycznych w
            zakresie <strong>front-endu</strong>.
          </p>
          <p>
            Moje zainteresowania obejmują szeroką gamę tematów, od muzyki (w tym
            naukę gry na pianinie 🎹 i śpiew w chórze), przez sztukę, aż po
            psychologię.
          </p>
          <p>
            Lubię podróżować i chodzić w góry 🏞, odkrywając nowe miejsca i
            czerpiąc inspirację z natury. Dążę do ciągłego rozwoju i poszerzania
            swojej wiedzy, łącząc profesjonalizm z pasją do nauki.
          </p>
          <p>
            W wolnym czasie angażuję się w zajęcia z jogi, zumby, salsation oraz
            biorę udział w wydarzeniach kulturalnych.{" "}
            <strong>
              W mojej pracy i życiu kieruję się odpowiedzialnością, dbałością o
              szczegóły oraz chęcią dzielenia się wiedzą i wspierania innych.
            </strong>
          </p>
        </>
      }
    />
  </Container>
);
