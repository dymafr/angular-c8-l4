import { Component, OnInit } from "@angular/core";
import { Subject, BehaviorSubject } from "rxjs";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})

// Ouvrez la console en cliquant sur console en bas à gauche de la fenêtre preview
export class AppComponent implements OnInit {
  ngOnInit() {
    // Subject
    const subject = new Subject<number>();

    subject.next(1);

    const s1 = subject.subscribe((x: number) => console.log("[s1] : ", x));

    subject.next(2);

    const s2 = subject.subscribe((x: number) => console.log("[s2] : ", x));

    subject.next(3);

    s1.unsubscribe();

    subject.next(4);

    // BehaviorSubject avec une valeur initiale
    // Emet toujours la dernière valeur
    const behaviorSubject = new BehaviorSubject<number>(0);

    behaviorSubject.next(42);

    const s3 = behaviorSubject.subscribe((x: number) =>
      console.log("[s3] : ", x)
    );
    const s4 = behaviorSubject.subscribe((x: number) =>
      console.log("[s4] : ", x)
    );
  }
}
