$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('com\fakenewssoloproject\cucumbertutorial\cucumbertutorial.feature');
formatter.feature({
  "line": 1,
  "name": "CucumberJava",
  "description": "",
  "id": "cucumberjava",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Login functionality exists",
  "description": "",
  "id": "cucumberjava;login-functionality-exists",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I have open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I open Facebook website",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Login button should exit",
  "keyword": "Then "
});
formatter.match({
  "location": "cucumberTutorial.openBrowser()"
});
formatter.result({
  "duration": 3173022349,
  "status": "passed"
});
formatter.match({
  "location": "cucumberTutorial.goToFacebook()"
});
formatter.result({
  "duration": 1449391736,
  "status": "passed"
});
formatter.match({
  "location": "cucumberTutorial.loginButton()"
});
formatter.result({
  "duration": 207056567,
  "status": "passed"
});
});