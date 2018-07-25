package com.kammari.pages;

import com.kammari.config.AppConfiguration;
import com.kammari.pages.base.BasePage;
import com.kammari.util.DriverHelper;
import com.kammari.util.WaitHelper;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;

public class LandingPage extends BasePage {

	@FindBy(css = "#nav-link-accountList")
	private WebElement AccountListDropDownLink;

	@FindBy(css = "#nav-flyout-accountList")
	private WebElement AccountListFlyoutNav;

	@FindBy(css = "#nav-item-signout-sa")
	private WebElement SignOutLink;

	@FindBy(css = "#twotabsearchtextbox")
	private WebElement SearchTextBox;

	@FindBy(css = "#nav-search .nav-input")
	private WebElement SearchButton;

	public LandingPage(WebDriver driver) {
		super(driver);
	}

	public void AtChecker() throws Exception{
		DriverHelper.AssertPageTitleContains("Amazon");
		DriverHelper.AssertPageUrlStartsWith(AppConfiguration.BaseUrl);
	}

	public void hoverOnAccountListDropDownLink() {
		Actions builder = new Actions(driver);
		builder.moveToElement(AccountListDropDownLink).build().perform();
		WaitHelper.WaitForElementToBeVisible(AccountListFlyoutNav);
	}

	public void ClickOnSignOutLink() { SignOutLink.click();}

//	//public void ClickOnShoppingCart(){
//		ShoppingCart.click();
//	}

	public void EnterSearchTermClickSearchButton(String SearchTerm) {
		SearchTextBox.sendKeys(SearchTerm);
		SearchButton.click();

	}

}
