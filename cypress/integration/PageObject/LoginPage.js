class LoginPage
{
    visit(){
        cy.visit('https://simplenote.com/');
    }
    loginButton(){
        return cy.get('.menu-item-111',{timeout:10000});
    }
    loginText(){
        return cy.contains('Log in');
    }
    forgetPassword(){
        return cy.contains('Forgot your password?');
    }
    wordpressText(){
        return cy.contains('Log in with WordPress.com');
    }
    loginError(){
        return cy.contains('Could not sign in with the provided email address and password.');
    }
    loginPass(){
        return cy.get(".notes-title",{timeout:10000});
    }

    fillEmail(value){
        const field=cy.get('input[id="email"]');
        field.clear();
        field.type(value);
        return this
    }
    fillPassword(value){
        const field=cy.get('input[id="password"]');
        field.clear();
        field.type(value);
        return this
    }
    submitbutton(){
        const button=cy.get('input[type="submit"]');
        button.click();

    }

}
export default LoginPage