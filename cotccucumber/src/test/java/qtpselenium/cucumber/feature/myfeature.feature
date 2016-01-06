Feature: Login to Campaignonthecloud

In order to verify the different campaigns
As a Admin user
I want to login to COTC

@javaDev
Scenario Outline: I am a Admin User

Given I open "<Browser>"
And I navigate to "http://vidhyaautomate.campaignonthecloud"
And I enter "login_xpath" as "<UserName>"
And I enter "password_xpath" as "<Password>"
And I click on "loginButton"

Examples:
| Browser | UserName                  | Password |
| Mozilla | vidhya@infowaveglobal.com | testing1 |

@test2
Scenario Outline: I am a gmail User

Given I open "<Browser>"
And I navigate to "http://www.gmail.com"
And I enter gmail login information
| Fields	  | Values						|
| loginname | vidhya@infowaveglobal.com     |
| password  | testing1                      |
And I click on "loginButton"

Examples:
| Browser |
| Mozilla |
