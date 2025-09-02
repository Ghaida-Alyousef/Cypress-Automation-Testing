it.only('OrangeHrmLoginAddEmpolee', function(){
    

//LogIn


cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
cy.wait(4000);
cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin'/*,{delay:600}*/);
cy.wait(4000);
cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
cy.wait(4000);
cy.get('.oxd-button').click();
cy.wait(4000);


//chose Admin
cy.get(':nth-child(1) > .oxd-main-menu-item').click();
cy.wait(4000);
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
cy.wait(4000);

//user role 
 // click on search button
cy.get('.oxd-form-actions > .oxd-button--secondary').click();  
cy.wait(3000);
 //click on check box
cy.get('.oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').click(); 
cy.wait(3000);
//click on delete basket
cy.get('.oxd-table-cell-actions > :nth-child(1) > .oxd-icon').click(); 

//confirm delete
cy.get('.orangehrm-modal-footer > .oxd-button--label-danger').click();  
cy.wait(3000);


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

}
)