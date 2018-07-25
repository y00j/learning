package com.kammari.pages;

import com.kammari.config.AppConfiguration;
import com.kammari.pages.base.BasePage;
import com.kammari.util.DriverHelper;
import com.kammari.util.WaitHelper;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.Select;

public class ShoppingCartPage extends BasePage {

    @FindBy(css = "#activeCartViewForm div[data-asin=\"146542900X\"] .sc-product-title")
    private WebElement ItemName;

    //Not Incrementing Item Quantity
//    @FindBy(css = "#activeCartViewForm div[data-asin='146542900X'] select[name='quantity']")
//    private WebElement ItemQuantityDropBox;

    @FindBy(css = "#activeCartViewForm div[data-asin=\"146542900X\"] .quantity .a-dropdown-prompt")
    private WebElement ItemQuantityVal;

    @FindBy(css = "#activeCartViewForm div[data-asin=\"146542900X\"] .sc-action-delete input[value=\"Delete\"]")
    private WebElement DeleteProductLink;

    public ShoppingCartPage(WebDriver driver) {
        super(driver);
    }

    public void AtChecker() throws Exception{
        DriverHelper.AssertPageTitleContains("Amazon");
        DriverHelper.AssertPageUrlStartsWith(AppConfiguration.BaseUrl);
    }


    //Not Incrementing Item Quantity
//    public void IncrementShoppingCartItem() throws Exception {
//        String GetItemQuantity = ItemQuantityVal.getText();
//        Select ItemQuantityDropDown = new Select(ItemQuantityDropBox);
//        ItemQuantityDropDown.selectByIndex(2);
//      System.out.println("Shopping Cart Value before Increment was : " + GetItemQuantity + " After Increment Shopping cart Value is : ");
//
//        //System.out.println("Item Value : " + ItemQuantity );
//    }

    public void RemoveItem() throws Exception {
        DeleteProductLink.click();
    }


}
