context('about.posterix fill form and send', () => {
  before(() => {
    cy.visit('https://about.posterix.pro/');
  });

  specify("Fill form and send", () => {
    cy.get('.form__field').contains('Ваше имя').type('Тестовое имя');
    cy.get('.form__field').contains('Номер телефона').type('+375333907652');
    cy.get('.form__field').contains('Название заведения').type('Тестовое заведение');

    cy.get('.form__checkbox').contains('Являюсь клиентом').click();

    cy.get('.form__select').click();
    cy.get('.select__list .select__item').contains('Pro').click();
    cy.get('.form__field').contains('Ваше сообщение').type('Тестовое сообщение');

    cy.get('.form__checkbox').contains('Я принимаю').click();
    cy.get('form__button').contains('Попробовать бесплатно');
  });
})