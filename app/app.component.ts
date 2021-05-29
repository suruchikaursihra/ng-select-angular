import {Component, NgModule, ViewChild, HostBinding} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormControl, FormGroup, ReactiveFormsModule, FormsModule} from '@angular/forms';
import {NgSelectModule, NgOption} from '@ng-select/ng-select';

@Component({
    selector: 'my-app',
    template: `
        <h1>Angular ng-select <small class="text-muted"><a target="_blank" href="https://github.com/ng-select/ng-select">Open in Github</a></small></h1>

<div>
<div style="margin: 16px">
  <button type="button" (click)="theme='blue'">Blue theme</button>
  <button type="button" (click)="theme='purple'">Purple theme</button>
  <button type="button" (click)="theme='dark'">Dark theme</button>
</div>

<mat-form-field>
    <mat-label>City</mat-label>
    <ng-select ngSelectMat [items]="cities"
                   bindLabel="name"
                   placeholder="Select city"
                   [(ngModel)]="selectedCity" required="true" #model="ngModel"></ng-select>
    <mat-error *ngIf="model.invalid">Required</mat-error>
</mat-form-field>



</div>


        <label>Your first ng-select</label>
        <div>
        <mat-form-field>
        <ng-select ngSelectMat [items]="cities"
                   bindLabel="name"
                   placeholder="Select city"
                   [(ngModel)]="selectedCity">
        </ng-select>
        </mat-form-field>
        </div>
        <p>
            Selected city: {{selectedCity | json}}
        </p>
        <hr />
        
        <label>Multiselect with custom bindings</label>
                <div>
        <mat-form-field>
        <ng-select ngSelectMat [items]="cities2"
                   bindLabel="name"
                   bindValue="id"
                   [multiple]="true"
                   placeholder="Select cities"
                   [(ngModel)]="selectedCityIds">
        </ng-select>
                
        </mat-form-field>
        </div>
        <p>
            Selected cities: {{selectedCityIds}}
        </p>
        <hr />
        
        <label>Custom tags</label>
                <div>
        <mat-form-field>
        <ng-select ngSelectMat [items]="users"
                   bindLabel="name"
                   bindValue="id"
                   [addTag]="addCustomUser"
                   [multiple]="true"
                   placeholder="Select user or add custom tag"
                   [(ngModel)]="selectedUserIds">
        </ng-select>
          
        </mat-form-field>
        </div>
        <p>
            Selected user: {{selectedUserIds}}
        </p>
        <hr />
        
        <label>Custom templates</label>

                <div>
        <mat-form-field>
        <ng-select ngSelectMat [items]="cities3"
                   bindLabel="name"
                   bindValue="name"
                   placeholder="Select city"
                   [(ngModel)]="selectedCityName">
            <ng-template ng-header-tmp>
              Custom header
            </ng-template>
            <ng-template ng-label-tmp let-item="item">
                <img height="15" width="15" [src]="item.avatar"/>
                <b>{{item.name}}</b> is cool
            </ng-template>
            <ng-template ng-option-tmp let-item="item" let-index="index">
                <img height="15" width="15" [src]="item.avatar"/>
                <b>{{item.name}}</b>
            </ng-template>
            <ng-template ng-footer-tmp>
              Custom footer
            </ng-template>
        </ng-select>
                
        </mat-form-field>
        </div>
        <p>
            Selected city: {{selectedCityName}}
        </p>
        <hr />
        
        <label>Hight performance. Handles even 10000 items.</label>
               <div>
        <mat-form-field>
        <ng-select ngSelectMat [items]="cities4"
                   [virtualScroll]="true"
                   bindLabel="name"
                   bindValue="id"
                   placeholder="Select city"
                   [(ngModel)]="selectedCityId">
        </ng-select>
                
        </mat-form-field>
        </div>
        <p>
            Selected city ID: {{selectedCityId}}
        </p>
        <hr />
        
        <label>Append dropdown to body</label>

                <div>
        <mat-form-field>
        <ng-select ngSelectMat [items]="cities4"
                   bindLabel="name"
                   [virtualScroll]="true"
                   bindValue="id"
                   appendTo="body"
                   placeholder="Select city"
                   [(ngModel)]="selectedCityId">
        </ng-select>
                
        </mat-form-field>
        </div>
        <p>
            Selected city ID: {{selectedCityId}}
        </p>
        <hr />
        
        <label>Grouping</label>
                <div>
        <mat-form-field>
        <ng-select ngSelectMat [items]="accounts"
                bindLabel="name"
                bindValue="name"
                groupBy="country"
                [(ngModel)]="selectedAccount">
        </ng-select>
                
        </mat-form-field>
        </div>
        
        <div style="margin-top:300px"></div>
`
})
export class AppComponent {

  @HostBinding('class') _theme="mat-typography purple";
  get theme(){ return this._theme; }
  set theme(v) {this._theme = 'mat-typography '+ v;}

    cities = [
        {id: 1, name: 'Vilnius'},
        {id: 2, name: 'Kaunas'},
        {id: 3, name: 'Pavilnys', disabled: true},
        {id: 4, name: 'Pabradė'},
        {id: 5, name: 'Klaipėda'}
    ];
    
    cities2 = [
        {id: 1, name: 'Vilnius'},
        {id: 2, name: 'Kaunas'},
        {id: 3, name: 'Pavilnys', disabled: true},
        {id: 4, name: 'Pabradė'},
        {id: 5, name: 'Klaipėda'}
    ];
    
    cities3 = [
        {id: 1, name: 'Vilnius', avatar: '//www.gravatar.com/avatar/b0d8c6e5ea589e6fc3d3e08afb1873bb?d=retro&r=g&s=30 2x'},
        {id: 2, name: 'Kaunas', avatar: '//www.gravatar.com/avatar/ddac2aa63ce82315b513be9dc93336e5?d=retro&r=g&s=15'},
        {id: 3, name: 'Pavilnys', avatar: '//www.gravatar.com/avatar/6acb7abf486516ab7fb0a6efa372042b?d=retro&r=g&s=15'}
    ];
    
    cities4 = [];
    
    users = [
        {id: 'anjmao', name: 'Anjmao'},
        {id: 'varnas', name: 'Tadeus Varnas'}
    ];
    
    selectedAccount = 'Adam'
    accounts = [
        { name: 'Adam', email: 'adam@email.com', age: 12, country: 'United States' },
        { name: 'Samantha', email: 'samantha@email.com', age: 30, country: 'United States' },
        { name: 'Amalie', email: 'amalie@email.com', age: 12, country: 'Argentina' },
        { name: 'Estefanía', email: 'estefania@email.com', age: 21, country: 'Argentina' },
        { name: 'Adrian', email: 'adrian@email.com', age: 21, country: 'Ecuador' },
        { name: 'Wladimir', email: 'wladimir@email.com', age: 30, country: 'Ecuador' },
        { name: 'Natasha', email: 'natasha@email.com', age: 54, country: 'Ecuador' },
        { name: 'Nicole', email: 'nicole@email.com', age: 43, country: 'Colombia' },
        { name: 'Michael', email: 'michael@email.com', age: 15, country: 'Colombia' },
        { name: 'Nicolás', email: 'nicole@email.com', age: 43, country: 'Colombia' }
    ];

    selectedCity: any;
    selectedCityIds: string[];
    selectedCityName = 'Vilnius';
    selectedCityId: number;
    selectedUserIds: number[];
    
    constructor() {
        this.create10kCities();
    }
    
    addCustomUser = (term) => ({id: term, name: term});
    
    private create10kCities() {
        this.cities4 = Array.from({length: 10000}, (value, key) => key)
                            .map(val => ({
                              id: val,
                              name: `city ${val}`
                            }));
    }
}
