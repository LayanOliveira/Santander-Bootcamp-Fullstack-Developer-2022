# Functions

## First task: Approved students

1. Create a function that receives an array `students` and an number which will represent the final grade;
2. Run through an array and populate a new auxiliary array with only the students which grade's are higher or equal to their final grade;
3. Utilize "object destructuring" to manipulate the desired properties of each student.

## Second task: This

Given the function `calculateAge`, utilize the methods call and apply to modify the value of `this`. Create your own objects for this exercise!

```js
function calculateAge(years) {
	return `In ${years} years, ${this.name} will be ${
		this.years + years
	} years old.`;
}
```

# Credits

[Stebsnusch](https://github.com/stebsnusch/basecamp-javascript/tree/main/funcoes)
