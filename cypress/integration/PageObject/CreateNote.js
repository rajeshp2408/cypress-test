class CreateNote{

newNote(){
    return cy.get('.icon-new-note > path',{timeout: 10000});

};
noteEditor(){
    return cy.get('.note-editor',{timeout: 10000});
}
// fillNoteBody(value){
//     const field=cy.get('.mtk1',{timeout:10000});
//     // field.clear();
//     field.type(value);
//     return this
// }

clickMenu(){
    return cy.get('.icon-menu',{timeout: 10000})
}
navMenu(){
    return cy.get(':nth-child(1) > .button',{timeout: 10000})
}
formSubmit(){
    return cy.get('.dialog-actions > :nth-child(3) > .button',{timeout: 10000})
}
confirmLogout(){
    return cy.get('.log-out',{timeout: 10000})
}
trashCan(){
    return cy.get('.icon-trash',{timeout: 10000})
}
verifyFile(){
    return cy.get('.mtk1',{timeout: 10000});
}
}
export default CreateNote