export {}
import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
    // selector: 'app-course-list', não faz mais sentido usar o selector, pois estamos trabalhando com rotas
    templateUrl: './course-list.component.html' 
})

export class CourseListComponent implements OnInit { 
    
    filteredCourses: Course[] = [];

    _courses: Course[] = [];

    _filterBy!: string;

    constructor(private courseService: CourseService) {}

    ngOnInit(): void {
       this.retrieveAll();
    }

    retrieveAll(): void {
        this.courseService.retrieveAll().subscribe({
            next: courses => {
                this._courses = courses;
                this.filteredCourses = this._courses;
            },
            error: err => console.log('Error', err)
        });
    }

    set filter(value: string) {
        this._filterBy = value;

        this.filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
    }

    get filter() {
        return this._filterBy;
    }
}
// Turned template into templateUrl
// Add CourseListComponent to app.module.ts's declarations 
// Every time you create a component you need to declare it in it's corresponding module, in this case is the default app.module.ts