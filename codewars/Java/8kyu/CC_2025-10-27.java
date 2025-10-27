/* Welcome to the City

Create a method that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

Example:
['John', 'Smith'], 'Phoenix', 'Arizona'

This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!
*/

public class Hello1 {
  public String sayHello(String [] name, String city, String state){
    return String.format(
      "Hello, %s! Welcome to %s, %s!",
      String.join(" ", name), city, state
    );
  }
}

public class Hello2 {
  public String sayHello(String [] name, String city, String state){
    String fullName = String.join(" ", name);
    return "Hello, " + fullName + "! Welcome to " + city + ", " + state + "!";
  }
}