package testing.calculator;

import java.util.Scanner;

public class Calculator {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		
		int a, b;
		
		System.out.println("Type the first value: ");
		a = scan.nextInt();
		System.out.println("Type the second value: ");
		b = scan.nextInt();
		
		int sum = sum(a,b);
		int subtract = subtract(a,b);
		int division = division(a,b);
		int multiply = multiply(a,b);
		
		System.out.println("The sum is: " + sum);
		System.out.println("The subtraction is: " + subtract);
		System.out.println("The division is: " + division);
		System.out.println("The multiplication is: " + multiply);
	}



	public static int sum(int a, int b) {
		return a + b;
	}
	public static int subtract(int a, int b) {
		return a - b;
	}
	public static int division(int a, int b) {
		return a / b;
	}
	public static int multiply(int a, int b) {
		return a * b;
	}
	
}
