package qtpselenium.cucumber;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.java.it.Date;
import cucumber.api.junit.Cucumber;

// runner class

@RunWith(Cucumber.class)
@CucumberOptions(
format={"html:output"},
features={"src//test//java//qtpselenium//cucumber//feature//"},
tags={"@test2"})
public class CucumberRunner {
	

}

