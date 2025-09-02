const { defineConfig } = require("cypress");
module.exports = defineConfig({
  video:true, //بعد ما اكتب هذا السطر اكتب التالي بالتيرمنال عشان يسوي الامر التصوير 
  // npx cypress run --browser Edge --headed --spec "cypress\e2e\AllInOne.cy.js"
  //"عند ال "احط الباث حق الفايل اللي ابي اصوره بس امسح لحد سايبريس 
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    testIsolation:falseS

    /*

إذا كتبت testIsolation: false
•	Cypress ما يعزل الاختبارات.
•	يعني:
o	يظل تسجيل الدخول (cookies/session) شغال للاختبارات اللي بعدها.
o	يظل الـ localStorage مثل ما هو.
o	يظل على نفس الصفحة اللي وصلت لها.
بكلمات ثانية: يخلي الاختبارات تكمل على نفس السياق بدل ما تبدأ من الصفر.




    */
  },
});
