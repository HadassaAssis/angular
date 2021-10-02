/// <reference types="@types/googlemaps" />
import { Component, ViewChild, EventEmitter, Output, OnInit, AfterViewInit, Input } from '@angular/core';

@Component({
    selector: 'AutocompleteComponent',
    template: `
    <mat-form-field class="col-8" appearance="outline">
    <mat-label>enter full address</mat-label>
      <input matInput 
        type="text"
        [(ngModel)]="autocompleteInput" #addresstext requierd>
        </mat-form-field>
    `,
})
export class AutocompleteComponent implements OnInit, AfterViewInit {
    @Input() adressType!: string;
    @Output() setAddress: EventEmitter<any> = new EventEmitter();
    @ViewChild('addresstext') addresstext: any;

    autocompleteInput!: string;
    queryWait!: boolean;

    constructor() {
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.getPlaceAutocomplete();
    }

    private getPlaceAutocomplete() {
        const autocomplete = new google.maps.places.Autocomplete(this.addresstext.nativeElement,
            { 
                types: ['address']  // 'establishment' / 'address' / 'geocode'
            });
        console.log(this.addresstext.nativeElement)
        google.maps.event.addListener(autocomplete, 'place_changed', () => {
            const place = autocomplete.getPlace();
            this.invokeEvent(place);
        });
    }

    invokeEvent(place: google.maps.places.PlaceResult) {
        this.setAddress.emit(place);
    }

}
