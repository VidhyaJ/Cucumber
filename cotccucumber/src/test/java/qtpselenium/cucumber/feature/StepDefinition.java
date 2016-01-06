package qtpselenium.cucumber.feature;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.List;
import java.util.Properties;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;

public class StepDefinition {
WebDriver driver=null;
Properties prop=null;

public StepDefinition(){
	prop= new Properties();
	try {
		FileInputStream ip= new FileInputStream(System.getProperty("user.dir")+"//src//test//java//config//project.properties");
		try {
			prop.load(ip);
			prop.getProperty("login_xpath");
			System.out.println("property Name is  : " +prop.getProperty("login_xpath"));
			} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	} catch (FileNotFoundException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
	
	
}
	@Given("^I open \"([^\"]*)\"$")
	public void i_open(String browsername) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("i_open " +browsername);
		System.out.println("Hello world");
		if (browsername.equalsIgnoreCase("Mozilla")){
		driver= new FirefoxDriver();	
		}

	}

	@Given("^I navigate to \"([^\"]*)\"$")
	public void i_navigate_to(String url) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("i_navigate to  " +url);
		driver.get("http://vidhyaautomate.campaignonthecloud.com");
		
	    
	}

	@And("^I click on \"([^\"]*)\"$")
	public void i_click_on(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("i_click_on  " +arg1);
		driver.findElement(By.xpath("//*[@id='lnkbtnlogin']")).click();
	}

	@And("^I enter \"([^\"]*)\" as \"([^\"]*)\"$")
	public void i_enter_as(String object, String objectvalue) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("i_enter  as " +object+ "--"+objectvalue);
		driver.findElement(By.xpath(prop.getProperty(object))).sendKeys(objectvalue);
	}
		@And("^I enter gmail login information$")
		public void i_enter_gmail_login_information(DataTable table) throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
		    // For automatic transformation, change DataTable to one of
		    // List<YourType>, List<List<E>>, List<Map<K,V>> or Map<K,V>.
		    // E,K,V must be a scalar (String, Integer, Date, enum etc)		    
		List<List<String>> data=table.raw();
		System.out.println("Data is : " +data.get(1).get(1));
		}
		
	}

	
