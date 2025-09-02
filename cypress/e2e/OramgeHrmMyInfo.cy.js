it.only('OrangeHrmMyinfo', function(){

cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
cy.wait(4000);
//LogIn
cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin'/*,{delay:600}*/);
cy.wait(4000);
cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
cy.wait(3000);
cy.get('.oxd-button').click();
cy.wait(3000);

//click on my info bouton 
cy.get(':nth-child(6) > .oxd-main-menu-item').click();
cy.wait(3000);

// write Employee full name 
//firist 
cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').clear().type('Ghaida');
cy.wait(3000);

//middel
cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').clear().type('Essam');
cy.wait(3000);

//last
cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').clear().type('Alyousef');

cy.wait(3000);
//nicname كان موجود وراح
//cy.get(':nth-child(1) > .oxd-form > :nth-child(1) > .oxd-grid-3 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('ghaaaa');
//cy.wait(2000);




//employee id 
cy.get(':nth-child(3) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('123456789');
cy.wait(3000);

//other id 
cy.get(':nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('1234');
cy.wait(3000);

//Driver's License Number

cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('123567890');
cy.wait(3000);



// التاريخ 
cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').clear().type('2028-02-02');
cy.wait(3000);
cy.get('.--close').click();
cy.wait(3000);





//nationality
cy.get(':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();
cy.wait(3000);

cy.get('.oxd-select-dropdown').contains('Saudi').click();
cy.wait(3000);


//status
cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();
cy.wait(3000);

cy.get('.oxd-select-dropdown').contains('Married').click();
cy.wait(3000);



//DATE OF BIRTH
cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').clear().type('2000-01-01');
cy.wait(3000);

cy.get('.--close').click();
cy.wait(3000);

//GENDER
cy.get(':nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input').click();
cy.wait(3000);

//save
cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click();
cy.wait(3000);

//blood
cy.get('.orangehrm-card-container > .oxd-form > .oxd-form-row > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();
cy.wait(3000);

cy.get('.oxd-select-dropdown').contains('A+').click();
cy.wait(3000);

cy.get('.orangehrm-card-container > .oxd-form > .oxd-form-row > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('123456');
cy.wait(3000);

cy.get('.orangehrm-card-container > .oxd-form > .oxd-form-actions > .oxd-button').click();
cy.wait(3000);


/*
//License Expiry Date
cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').clear().type('2002-02-04');
cy.wait(3000);

//SSN Number كان موجود وراح
//cy.get(':nth-child(3) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('1234');
//cy.wait(2000);

//SIN Number كان موجود وراح
//cy.get(':nth-child(3) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('4321');

//Nationality
//tab on arrow to drop the list
cy.get(':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click();
cy.wait(3000);

//chose from list 


//Marital Status

*/


// Add Attachments
cy.get('.orangehrm-action-header > .oxd-button').click();
cy.wait(3000);

//tab on browser 
cy.get('.oxd-file-button').click();
cy.wait(3000);
//add file 
cy.get ('[type="file"]').selectFile('cypress/fixtures/Add.txt',{force: true});
cy.wait(3000);
//write comment 
cy.get('.oxd-textarea').type('important');
cy.wait(3000);

//tan on save bouton 
cy.get('.orangehrm-attachment > .orangehrm-card-container > .oxd-form > .oxd-form-actions > .oxd-button--secondary').click();
cy.wait(3000);

//profile picture
//click on the picture
    cy.get('.employee-image').click();
        cy.wait(3000);

    //click on the add bouton 
    cy.get('.oxd-file-div > .oxd-icon-button').click();
        cy.wait(3000);


    cy.get('[type="file"]').selectFile('cypress/fixtures/profile Picture.png',{force: true});
    cy.wait(3000);
    //click on the save bouton
    cy.get('.oxd-button').click();
        cy.wait(3000);


}
)