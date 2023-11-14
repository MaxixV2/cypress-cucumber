Feature: Logout

    Background:
        Given User is logged in

    Scenario: Log out
        When User logs out
        Then User should be redirected to login page