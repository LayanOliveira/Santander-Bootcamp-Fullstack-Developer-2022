package testing.calculator;

import java.util.Scanner;

public class Calculator {

	public static void main(String[] args) {
		try (Scanner scan = new Scanner(System.in)) {
			int a, b;
			
			System.out.println("Type the first value: ");
			a = scan.nextInt();
			System.out.println("Type the second value: ");
			b = scan.nextInt();
			
			int sum = sum(a,b);
			int subtract = subtract(a,b);
			int division = division(a,b);
			int multiply = multiply(a,b);
			
			System.out.println("Sum: " + sum);
			System.out.println("Subtraction: " + subtract);
			System.out.println("Division: " + division);
			System.out.println("Multiplication: " + multiply);
		}
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
