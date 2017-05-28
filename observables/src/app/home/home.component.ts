import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  numbersObsSubscription: Subscription;
  customObsSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    const myNumbers = Observable.interval(1000).map(
      (data: number) => {
        return data * 2;
      }
    );
    // 1 callback to handle normal data
    // 2 error
    // 3 complete
    this.numbersObsSubscription = myNumbers.subscribe(
      (number: number) => {
        console.log(number);
      }
    );
      const myObservable = Observable.create((observer: Observer<string>) => {
        setTimeout(() => {
          observer.next('first package');
        }, 2000);
        setTimeout(() => {
          observer.next('second package');
        }, 4000);
        setTimeout(() => {
          // observer.error('this does not work');
          observer.complete();
        }, 5000);
      });

      this.customObsSubscription = myObservable.subscribe(
        (data: string) => { console.log(data);},
        (error: string) => { console.log(error);},
        () => {console.log('complete');}
      );
    }
    ngOnDestroy() {
      this.customObsSubscription.unsubscribe();
      this.numbersObsSubscription.unsubscribe();
    }
}
