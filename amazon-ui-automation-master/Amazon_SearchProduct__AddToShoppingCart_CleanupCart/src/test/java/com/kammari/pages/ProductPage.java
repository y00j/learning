package com.kammari.pages;

import com.kammari.config.AppConfiguration;
import com.kammari.util.DriverHelper;
import com.kammari.pages.base.BasePage;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class ProductPage extends BasePage {

    @FindBy(css="#add-to-cart-button")
    private WebElement AddToCartButton;

    //@FindBy(css = ".nav-cart-icon")
    @FindBy(css = "#nav-cart .nav-line-2")
    private WebElement ShoppingCartLink;

    public ProductPage(WebDriver driver) {
        super(driver);
    }

    public void AtChecker() throws Exception{
        DriverHelper.AssertPageTitleContains("Amazon");
        DriverHelper.AssertPageUrlStartsWith(AppConfiguration.BaseUrl);
    }

    public void AddToCart() throws Exception {
        AddToCartButton.click();
    }

    public void GoToShoppingCartPage(){
        ShoppingCartLink.click();
    }

//    public void GoToShoppingCartPage() {
//        FooterShoppingCartLink.click();
//    }


}
