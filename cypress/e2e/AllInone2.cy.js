beforeEach('VisitLogIn', function(){

    //here we write befoerEach and afterEach so it will log in and loh out in after all function 
cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
cy.wait(3000);


//LogIn
cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin'/*,{delay:600}*/);
cy.wait(3000);
cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
cy.wait(3000);
cy.get('.oxd-button').click();
cy.wait(3000);








})


it('Add Delet Embloyee',    function(){


//chose Admin
cy.get(':nth-child(1) > .oxd-main-menu-item').click();
cy.wait(3000);
//click Add bouton
cy.get('.orangehrm-header-container > .oxd-button').click();
cy.wait(3000);
//chose user role
cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();
cy.wait(3000);
// chose admin from user role 
cy.get('.oxd-select-dropdown > :nth-child(2)').click();
cy.wait(3000);
//chose state 
cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();
cy.wait(3000);
//chose from state 
cy.get('.oxd-select-dropdown > :nth-child(2)').click();
cy.wait(3000);
//employee name ,, type a to drop down the list
cy.get('.oxd-autocomplete-text-input > input').type('a');
cy.wait(3000);
//chose from the list
cy.get('.oxd-autocomplete-dropdown > :nth-child(1)').click();
cy.wait(3000);
// type username 
cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Aahmadd');
cy.wait(3000);
//full password 
cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
cy.wait(3000);
// passoword confoemation 
cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
cy.wait(3000);
// save bouton
cy.get('.oxd-button--secondary').click();
cy.wait(5000);

// delet using serch functionm 
//type usename 
cy.get(':nth-child(2) > .oxd-input').type('Aahmadd');  
//user role 
 // click on search button
cy.get('.oxd-form-actions > .oxd-button--secondary').click();  
cy.wait(3000);
 //click on check box
cy.get('.oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').click(); 
cy.wait(3000);
//click on delete basket
cy.get('.oxd-table-cell-actions > :nth-child(1) > .oxd-icon').click(); 
cy.wait(3000);

//confirm delete
cy.get('.orangehrm-modal-footer > .oxd-button--label-danger').click();  
cy.wait(5000);


/*
// assertion
        cy.get('.oxd-table-body').should('contain', 'Ahmadd').then(() => cy.log('Job title verified'));
        cy.wait(4000);
        // First find the exact row containing your job title and scrollview
        cy.contains('.oxd-table-row', 'Ahmadd')
            .scrollIntoView({ duration: 300 })
            .should('exist')
            .within(() => {
                // checkbox click
                cy.get(':nth-child(1) > .oxd-table-card-cell-checkbox .oxd-icon')
                    .click({ force: true });
                // click trash
                cy.get(':nth-child(1) > .oxd-icon')
                    .should('be.visible')
                    .click({ force: true, multiple: true });
            });
        cy.wait(1000);
        cy.get('.orangehrm-modal-footer > .oxd-button--label-danger').click(); // confirm delete





*/


})



it('Add Deleat JobTitle',    function(){

//chose Admin
cy.get(':nth-child(1) > .oxd-main-menu-item').click();

cy.wait(5000);

// click on job boutoon to drop the list 
cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item > .oxd-icon').click();
cy.wait(3000);


// chose jon title from the lisr 
cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-link').click();
cy.wait(3000);

// click on add bouton 
cy.get('.oxd-button').click();
cy.wait(3000);

// write the job title 
cy.get(':nth-child(2) > .oxd-input').type('Software Engineerr');
cy.wait(3000);

//write the job description
cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type('Tests software to find bugs, ensure quality, and verify that it meets requirements before release. Works with developers to fix issues.');
cy.wait(3000);

// add browse
cy.get ('[type="file"]').selectFile('cypress/fixtures/jobSpecification .txt',{force: true});
cy.wait(3000);

// weite note 
cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-textarea').type('First');
cy.wait(3000);

// tan on save boutton  
cy.get('.oxd-button--secondary').click();
cy.wait(3000);

//deleat 
// assertion
        cy.get('.oxd-table-body').should('contain', 'Software Engineerr').then(() => cy.log('Job title verified'));
        cy.wait(4000);
        // First find the exact row containing your job title and scrollview
        cy.contains('.oxd-table-row', 'Software Engineerr')
            .scrollIntoView({ duration: 300 })
            .should('exist')
            .within(() => {
                // checkbox click
                cy.get(':nth-child(1) > .oxd-table-card-cell-checkbox .oxd-icon')
                    .click({ force: true });
                // click trash
                cy.get(':nth-child(1) > .oxd-icon')
                    .should('be.visible')
                    .click({ force: true, multiple: true });
            });
        cy.wait(1000);
        cy.get('.orangehrm-modal-footer > .oxd-button--label-danger').click(); // confirm delete


})


it('MyInfo',    function(){

//click on my info bouton 
cy.get(':nth-child(6) > .oxd-main-menu-item > .oxd-text').click();
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

cy.get('.orangehrm-card-container > .oxd-form > .oxd-form-row > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type('123456');
cy.wait(3000);

cy.get('.orangehrm-card-container > .oxd-form > .oxd-form-actions > .oxd-button').click();
cy.wait(3000);


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
cy.get('.oxd-textarea').clear().type('important');
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
        cy.wait(4000);


})



afterEach('LogOut', function(){

//LogOut
cy.get('.oxd-userdropdown-tab > .oxd-icon').click();
cy.wait(4000);
cy.get(':nth-child(4) > .oxd-userdropdown-link').click();
cy.wait(4000);





})