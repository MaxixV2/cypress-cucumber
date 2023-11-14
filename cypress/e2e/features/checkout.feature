Feature: Checkout

    Background:
        Given User is logged in


    Scenario: Valid checkout
        When User adds item to cart
        And User checks out with valid data
        Then User should be redirected to completed checkout page

    Scenario: Checkout with empty first name input
        When User adds item to cart
        And User checks out with empty first name input
        Then User should see an empty first name input error message

    Scenario: Checkout with empty last name input
        When User adds item to cart
        And User checks out with empty last name input
        Then User should see an empty last name input error message

    Scenario: Checkout with empty postal code input
        When User adds item to cart
        And User checks out with empty postal code input
        Then User should see an empty postal code input error message

    
