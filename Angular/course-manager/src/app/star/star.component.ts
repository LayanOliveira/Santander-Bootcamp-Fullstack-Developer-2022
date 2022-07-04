import { Component, Input, OnChanges } from "@angular/core";

@Component({
    selector: 'app-sar',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {

    @Input()
    rating: number = 0;

    starWidth!: number;

    ngOnChanges(): void {
        this.starWidth = this.rating * 74 / 5; // Esse calculo é do font-awesome, não precisa entender
    }
}
