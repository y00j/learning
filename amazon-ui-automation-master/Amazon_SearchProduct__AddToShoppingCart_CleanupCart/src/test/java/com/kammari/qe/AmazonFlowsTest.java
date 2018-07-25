package com.kammari.qe;

import com.kammari.config.AppConfiguration;
import com.kammari.pages.*;
import com.kammari.qe.base.FunctionalTest;
import org.junit.Test;

import com.kammari.util.WaitHelper;

import static junit.framework.TestCase.assertTrue;

public class AmazonFlowsTest extends FunctionalTest {

    //Search and Add To Cart, then Clean up cart at end
    @Test
    public void SearchAndAddToCart() throws Exception {

        HomePage homePage = new HomePage(driver);
        homePage.AtChecker();
        homePage.ClickOnSignIn();
        WaitHelper.WaitForPageLoad();


        LoginPage loginPage = new LoginPage(driver);
        loginPage.AtChecker();

        loginPage.EnterEmail(AppConfiguration.Email);
        WaitHelper.WaitForPageLoad();

        loginPage.ClickOnContinueButton();
        WaitHelper.WaitForPageLoad();

        loginPage.EnterPassword(AppConfiguration.Password );
        WaitHelper.WaitForPageLoad();

        loginPage.ClickOnSignInSubmitButton();
        WaitHelper.WaitForPageLoad();

        LandingPage landingPage = new LandingPage(driver);
        landingPage.AtChecker();
        landingPage.EnterSearchTermClickSearchButton(AppConfiguration.ProductPartialName);
        //WaitHelper.WaitForAjaxComplete();
        WaitHelper.WaitForPageLoad();

        SearchPage searchPage = new SearchPage(driver);
        searchPage.AtChecker();
        searchPage.ClickOnSelectProduct();
        WaitHelper.WaitForPageLoad();

        ProductPage productPage = new ProductPage(driver);
        productPage.AtChecker();
        productPage.AddToCart();
        WaitHelper.WaitForPageLoad();

        productPage.GoToShoppingCartPage();
        WaitHelper.WaitForPageLoad();

        ShoppingCartPage shoppingCartPage = new ShoppingCartPage(driver);
        shoppingCartPage.AtChecker();
        
        //Not Incrementing Item Quantity
//        shoppingCartPage.IncrementShoppingCartItem();
//        WaitHelper.WaitForPageLoad();

        shoppingCartPage.RemoveItem();
        WaitHelper.WaitForPageLoad();


        landingPage.hoverOnAccountListDropDownLink();

        landingPage.ClickOnSignOutLink();
        WaitHelper.WaitForPageLoad();

        //Check you are back on home page
        homePage.AtChecker();
    }
}