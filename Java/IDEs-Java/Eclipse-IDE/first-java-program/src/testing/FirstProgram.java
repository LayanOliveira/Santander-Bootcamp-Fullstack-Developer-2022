package testing;

import testing.model.Cat;

public class FirstProgram {

	public static void main(String[] args) {
		Cat cat = new Cat();
		Books books = new Books();
		
		System.out.println(cat);
		System.out.println(books);
		/*int a = 2;
		int b = 3;
		System.out.println("Hello World! " + (a+b));
	*/
		
	}
}

class Books {
	private String name;
	private String npag;

}
