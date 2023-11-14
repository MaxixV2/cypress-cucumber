Feature: Items

    Background:
        Given User is logged in


    Scenario: Add items to cart
        When User adds item to cart
        Then User should see item in cart

    Scenario: Remove items from cart
        When User adds item to cart
        And User removes item from cart
        Then User should see no Remove buttons