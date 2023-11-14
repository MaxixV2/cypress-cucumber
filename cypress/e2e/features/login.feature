Feature: Login

    Background:
        Given User is located on login page


    Scenario: Login with valid data
        When User logins with valid username and valid password
        Then User should be redirected to inventory page

    Scenario: Login with invalid username
        When User logs in with invalid username
        Then User should see an invalid credentials error message

    Scenario: Login with invalid password
        When User logs in with invalid password
        Then User should see an invalid credentials error message

    Scenario: Login with empty username
        When User logs in with empty username
        Then User should see an empty username error message

    Scenario: Login with empty password
        When User logs in with empty password
        Then User should see an empty password error message

