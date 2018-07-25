package com.kammari.pages;

import com.kammari.config.AppConfiguration;
import com.kammari.util.DriverHelper;
import com.kammari.pages.base.BasePage;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class SearchPage extends BasePage {

    //@FindBy(css = "#activeCartViewForm div[data-asin=\"146542900X\"] .s-access-title")
    @FindBy(css = ".s-access-title")
    private WebElement SelectProduct;

    public SearchPage(WebDriver driver) {
        super(driver);
    }

    public void AtChecker() throws Exception{
        DriverHelper.AssertPageTitleContains("Amazon");
        DriverHelper.AssertPageUrlStartsWith(AppConfiguration.BaseUrl);
    }

    public void ClickOnSelectProduct(){ SelectProduct.click();}
}
