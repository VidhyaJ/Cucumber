$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("myfeature.feature");
formatter.feature({
  "line": 1,
  "name": "Login to Campaignonthecloud",
  "description": "\r\nIn order to verify the different campaigns\r\nAs a Admin user\r\nI want to login to COTC",
  "id": "login-to-campaignonthecloud",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 21,
  "name": "I am a gmail User",
  "description": "",
  "id": "login-to-campaignonthecloud;i-am-a-gmail-user",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@test2"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I open \"\u003cBrowser\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I navigate to \"http://www.gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter gmail login information",
  "rows": [
    {
      "cells": [
        "Fields",
        "Values"
      ],
      "line": 26
    },
    {
      "cells": [
        "loginname",
        "vidhya@infowaveglobal.com"
      ],
      "line": 27
    },
    {
      "cells": [
        "password",
        "testing1"
      ],
      "line": 28
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on \"loginButton\"",
  "keyword": "And "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "login-to-campaignonthecloud;i-am-a-gmail-user;",
  "rows": [
    {
      "cells": [
        "Browser"
      ],
      "line": 32,
      "id": "login-to-campaignonthecloud;i-am-a-gmail-user;;1"
    },
    {
      "cells": [
        "Mozilla"
      ],
      "line": 33,
      "id": "login-to-campaignonthecloud;i-am-a-gmail-user;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 33,
  "name": "I am a gmail User",
  "description": "",
  "id": "login-to-campaignonthecloud;i-am-a-gmail-user;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@test2"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I open \"Mozilla\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I navigate to \"http://www.gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter gmail login information",
  "rows": [
    {
      "cells": [
        "Fields",
        "Values"
      ],
      "line": 26
    },
    {
      "cells": [
        "loginname",
        "vidhya@infowaveglobal.com"
      ],
      "line": 27
    },
    {
      "cells": [
        "password",
        "testing1"
      ],
      "line": 28
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on \"loginButton\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Mozilla",
      "offset": 8
    }
  ],
  "location": "StepDefinition.i_open(String)"
});
formatter.result({
  "duration": 4773622232,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "http://www.gmail.com",
      "offset": 15
    }
  ],
  "location": "StepDefinition.i_navigate_to(String)"
});
formatter.result({
  "duration": 8962762172,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.i_enter_gmail_login_information(DataTable)"
});
formatter.result({
  "duration": 1053735,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginButton",
      "offset": 12
    }
  ],
  "location": "StepDefinition.i_click_on(String)"
});
formatter.result({
  "duration": 268965526,
  "status": "passed"
});
});