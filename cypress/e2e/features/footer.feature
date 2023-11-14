Feature: Footer

    Background:
        Given User is logged in

    Scenario: Footer Twitter link
        When User clicks Twitter footer link
        Then User should be redirected to saucedemo page on Twitter

    Scenario: Footer Facebook link
        When User click Facebook footer link
        Then User should be redirected to saucedemo page on Facebook

    Scenario: Footer Linkedin link
        When User click Linkedin footer link
        Then User should be redirected to saucedemo page on Linkedin

