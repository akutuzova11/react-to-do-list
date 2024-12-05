import Section from "../../Common/Section/index.js";
import Header from "../../Common/Header/index.js";
import { Container } from "../../Common/Container/index.js";

export default () => (
  <Container>
    <Header title="O autorze" />
    <Section title="Angelina Kutuzova" body={<> 
        <p> Odkrywanie nowych miejsc przez podróże to dla mnie nie tylko fascynująca przygoda, ale także pasja, która
          nadaje mojemu życiu barwę i głębię. W 2023 roku udało mi się zrealizować swoje marzenie o odwiedzeniu 
          <strong> 17 różnych miast,</strong> co było dla mnie niezapomnianym doświadczeniem.
        </p>
        <p>Postawiłam sobie ambitny cel podróżowania co najmniej raz w miesiącu, <strong>a z dumą mogę powiedzieć, że
            udało mi się go osiągnąć!</strong> Każda wyprawa była unikalnym wyzwaniem, które nie tylko poszerzało moje
          horyzonty, ale również rozwijało moje umiejętności elastycznego radzenia sobie z niespodziewanymi sytuacjami.
        </p>
        <p>Planowanie każdej podróży wymagało precyzji, ale równocześnie uwielbiam czerpać radość ze spontaniczności
          podróży. <strong>Dla mnie, każdy nowy kierunek to jak nieodkryta księga, pełna fascynujących historii, gotowa
            do mojego odkrycia.</strong></p>
        <p>Podróże to dla mnie nie tylko zmiana krajobrazu, ale także nieustanne poszerzanie horyzontów i rozwijanie się
          jako jednostki. Każdy nowy krok jest dla mnie niepowtarzalnym rozdziałem w tej niezwykłej podróży przez życie,
          pełnej fascynujących doświadczeń i inspiracji.
          </p>
          </>} />
  </Container>
);
