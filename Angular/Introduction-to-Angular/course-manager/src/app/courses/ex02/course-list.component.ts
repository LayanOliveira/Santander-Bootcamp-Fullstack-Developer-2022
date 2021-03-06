import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html' 
})

export class CourseListComponent implements OnInit { 
    
    courses: Course[] = [];

    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: 'Angular: Forms',
                imageUrl: '',
                price: 99.99,
                code: 'XPS-8796',
                duration: 120,
                rating: 4.5,
                releaseDate: 'July, 02, 2022'
            },
            {
                id: 1,
                name: 'Angular: HTTP',
                imageUrl: '',
                price: 45.99,
                code: 'LKL-1094',
                duration: 80,
                rating: 4,
                releaseDate: 'July, 03, 2022'
            }
        ]
    }
}
// Turned template into templateUrl
// Add CourseListComponent to app.module.ts's declarations 
// Every time you create a component you need to declare it in it's corresponding module, in this case is the default app.module.ts