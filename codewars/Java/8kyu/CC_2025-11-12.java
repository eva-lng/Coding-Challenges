/* Be Concise I - The Ternary Operator

You are given a function that takes a parameter age (which will always be a positive integer) and does the following:
1. If the age is 12 or lower, it return "You're a(n) kid"
2. If the age is anything between 13 and 17 (inclusive), it return "You're a(n) teenager"
3. If the age is anything between 18 and 64 (inclusive), it return "You're a(n) adult"
4. If the age is 65 or above, it return "You're a(n) elderly"

Your task is to shorten the code as much as possible. Note that submitting the given code will not work because there is a character limit of 137.
*/

public class C{
public static String describeAge(int a){
return "You're a(n) "+(a<13?"kid":a<18?"teenager":a<65?"adult":"elderly");
}
}