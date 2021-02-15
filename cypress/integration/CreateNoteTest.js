/// <reference types="cypress"/>

import LoginPage from '../integration/PageObject/LoginPage'
import CreateNote from '../integration/PageObject/CreateNote'


const lp=new LoginPage();
const cn=new CreateNote();


describe("Cypress Test for SimpleNote Creation",()=>{
    
    //- Login with correct credentials. Ensure the correct user is logged in.
    it('SimpleNote URL,Login with correct credentials. Ensure the correct user is logged in.',()=>{

        //Login with valid email credential
        lp.visit();
        lp.loginButton().click();
        lp.fillEmail('rajeshp2408@gmail.com');
        lp.fillPassword('Testing2021');
        lp.submitbutton();
        lp.loginPass().should('have.text',"All Notes");

    });

    it('Create a note - set note title.',()=>{
        // cn.newNote().click();
        // cn.noteEditor().type('SimpleNoteTest1');
        cy.get('.icon-new-note').click();
        cy.get('.note-editor',{timeout:20000}).type('SimpleNoteTest1');
        // cn.fillNoteBody('SimpleNoteTest one two three');
    });

    it('Logout Simplenote',()=>{
        cn.clickMenu().click();
        cn.navMenu().click();
        cn.formSubmit().click();
        cn.confirmLogout().click();

    });
    it('Re-login to verify the notes still exist',()=>{
        //Login with valid email credential

        lp.fillEmail('rajeshp2408@gmail.com');
        lp.fillPassword('Testing2021');
        lp.submitbutton();
        cn.verifyFile().should('have.text',"SimpleNoteTest1");
    
    });
    it('Remove testfile',()=>{
        cn.trashCan().click();
    
    });
});