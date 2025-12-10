/* Correct the time-string

A new task for you!
- You have to create a method, that corrects a given time string.
- There was a problem in addition, so many of the time strings are broken.
- Time is formatted using the 24-hour clock, so from 00:00:00 to 23:59:59.

Examples:
"09:10:01" -> "09:10:01"  
"11:70:10" -> "12:10:10"  
"19:99:99" -> "20:40:39"  
"24:01:01" -> "00:01:01"

If the input-string is null or empty return exactly this value! If the time-string-format is invalid, return null.
*/

import java.time.LocalTime;
import java.time.format.DateTimeFormatter;

public class Solution {

  public static String timeCorrect(String timestring) {    
    try { 
      if(timestring == null || timestring.isEmpty()) return timestring;
      if(timestring.length() != 8) return null;
      if(timestring.contains("-") || timestring.contains("+")) return null;
      
      String[] timeArr = timestring.split(":");
    
      int hours = Integer.valueOf(timeArr[0]);
      int minutes = Integer.valueOf(timeArr[1]);
      int seconds = Integer.valueOf(timeArr[2]);
    
      if (seconds > 59) {
        int rest = seconds / 60;
        seconds = seconds % 60;
        minutes += rest;
      }

      if (minutes > 59) {
        int rest = minutes / 60;
        minutes = minutes % 60;
        hours += rest;
      }

      if (hours > 23) {
        hours = hours % 24;
      }
    
      return DateTimeFormatter.ofPattern("HH:mm:ss").format(LocalTime.of(hours, minutes, seconds));   
    } catch(Exception e) {
      return null;
    }
  }

}