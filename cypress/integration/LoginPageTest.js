/// <reference types="cypress"/>

import LoginPage from '../integration/PageObject/LoginPage'



const lp=new LoginPage();

describe("Cypress Test for SimpleNote",()=>{
    it('SimpleNote URL,load correctly',()=>{
        lp.visit();
        cy.title().should('eq','Simplenote');
    })
    //- Login with incorrect credentials. Ensure correct error message is displayed.
    it('SimpleNote URL,Login with incorrect credentials. Ensure correct error message is displayed.',()=>{

        lp.loginButton().click();
        //Verify login, contains
        lp.loginText().should('exist');
        lp.forgetPassword().should('exist');
        lp.wordpressText().should('exist');
        
        //Login with invalid valid email credential
        lp.loginError().should('not.exist');

        lp.fillEmail('rajeshp2408@gmail.com');
        lp.fillPassword('testing1234');
        lp.submitbutton();
        lp.loginError().should('exist');

    });

    //- Login with correct credentials. Ensure the correct user is logged in.
    it('SimpleNote URL,Login with correct credentials. Ensure the correct user is logged in.',()=>{

        //Login with valid email credential
        
        lp.fillEmail('rajeshp2408@gmail.com');
        lp.fillPassword('Testing2021');
        lp.submitbutton();
        lp.loginPass().should('have.text',"All Notes");

    });
});