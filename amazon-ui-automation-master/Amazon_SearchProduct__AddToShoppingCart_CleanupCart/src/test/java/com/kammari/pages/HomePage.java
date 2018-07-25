package com.kammari.pages;

import com.kammari.config.AppConfiguration;
import com.kammari.pages.base.BasePage;
import com.kammari.util.DriverHelper;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class HomePage extends BasePage {

	@FindBy(css = "#nav-link-accountList > span.nav-line-1")
	private WebElement SignInLink;

	//@FindBy(css = ".nav-action-inner")
	//private WebElement SignInButton;
	
	public HomePage(WebDriver driver) {
		super(driver);
	}

	public void AtChecker() throws Exception{
		DriverHelper.AssertPageTitleContains("Amazon");
		DriverHelper.AssertPageUrlStartsWith(AppConfiguration.BaseUrl);
	}

	public void ClickOnSignIn() {
		SignInLink.click();
	}

	/*public void ClickOnSignInButton(){
		SignInButton.click();
	} */

}
