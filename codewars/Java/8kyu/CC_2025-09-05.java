/* Thinkful - Logic Drills: Traffic light

You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

For example, when the input is green, output should be yellow.
*/

import java.util.List;
import java.util.Arrays;

public class TrafficLights {
  private static List<String> lights = Arrays.asList("green", "yellow", "red");
  
  public static String updateLight(String current) {
    return lights.get((lights.indexOf(current) + 1) % lights.size());
  }
}