const LOGIN = "xxx@wp.pl";
const PASSWORD = "secret";

function notify(message, title = "Bot") {
  cy.exec(
    `osascript -e 'display notification "${message}" with title "${title}"'`
  );
}

describe("Luxmed", () => {
  it("Sprawdz wolne terminy", () => {
    cy.visit("https://portalpacjenta.luxmed.pl/");
    cy.get("#Login").type(LOGIN);
    cy.get("#TempPassword").type(PASSWORD);
    cy.get('[value="ZALOGUJ SIĘ"]').click();

    cy.visit(
      "https://portalpacjenta.luxmed.pl/PatientPortal/NewPortal/Page/Reservation/Search"
    );
    cy.get("#serviceVariant").click();
    cy.get("div")
      .contains("Gastroenterolog - konsultacja telefoniczna")
      .click();
    cy.get("modal-container")
      .find("button")
      .contains(" Wybierz wizytę kontrolną ")
      .click();
    cy.get('[placeholder="Dowolny lekarz"]').click();
    cy.get("span").contains("Anna Nowak").click();
    cy.get("button").contains("Szukaj").click({ force: true });
  });
});
