it.only('OrangeHrmLogin', function(){

cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');



cy.wait(4000);
cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin'/*,{delay:600}*/);
cy.wait(4000);
cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
cy.wait(4000);
cy.get('.oxd-button').click();
cy.wait(4000);


//LogOut

cy.get('.oxd-userdropdown-tab > .oxd-icon').click();
cy.wait(4000);
cy.get(':nth-child(4) > .oxd-userdropdown-link').click();
cy.wait(4000);

}





)