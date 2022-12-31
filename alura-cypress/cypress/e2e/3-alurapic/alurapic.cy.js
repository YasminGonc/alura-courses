describe('Login e registro de usuarios alurapic', () => {
    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com/#/home')
    })

    it('verifica mensagem validacao', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Email is required!'). should('be.visible');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
    })

    it('verifica mesagem de email invalido', () => {
        cy.contains('a', 'Register now').click();
        cy.get('input[formcontrolname="email"]').type('yasmin');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Invalid e-mail'). should('be.visible');
    })

    it('verifica mesagem de user name em caps', () => {
        cy.contains('a', 'Register now').click();
        cy.get('input[formcontrolname="userName"]').type('YAS');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Must be lower case'). should('be.visible');
    })

    it('verifica mesagem de senha com menos de 8 caracteres', () => {
        cy.contains('a', 'Register now').click();
        cy.get('input[formcontrolname="password"]').type('123');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 8'). should('be.visible');
    })
})