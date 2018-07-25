package com.kammari.pages;

import com.kammari.config.AppConfiguration;
import com.kammari.pages.base.BasePage;
import com.kammari.util.DriverHelper;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class LoginPage extends BasePage {

	//@FindBy(css = ".nav-action-inner")
	//private WebElement SignInButton;

	@FindBy(css="#ap_email")
	private WebElement EmailTextbox;

	@FindBy(css=".a-button-input")
	private WebElement ContinueButton;
	
	@FindBy(css="#ap_password")
	private WebElement PasswordTextbox;

	@FindBy(css="#signInSubmit")
	private WebElement SignInSubmitButton;

	public LoginPage(WebDriver driver) {
		super(driver);
	}

	public void AtChecker() throws Exception{
		DriverHelper.AssertPageTitleContains("Amazon Sign In");
		DriverHelper.AssertPageUrlStartsWith(AppConfiguration.BaseUrl);
	}

//	public void ClickOnSignInButton(){
//		SignInButton.click();
//	}

	public void EnterEmail(String Email) {
		EmailTextbox.sendKeys(Email);

		//LoginButton.click();
	}
	public void EnterPassword(String Password){
		PasswordTextbox.sendKeys(Password);
	}

	public void ClickOnContinueButton(){ContinueButton.click();}

	public void ClickOnSignInSubmitButton() {
		SignInSubmitButton.click();
	}
}
