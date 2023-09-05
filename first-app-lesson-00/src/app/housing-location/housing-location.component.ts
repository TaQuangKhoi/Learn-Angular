import {Component, inject, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HousingLocation} from '../housinglocation';
import {RouterLink} from "@angular/router";
import {HousingService} from "../housing.service";

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
      <section class="listing">
          <img class="listing-photo" [src]="housingService.getPhotoUrl(housingLocation?.photo)" alt="Exterior photo of {{housingLocation.name}}">
          <h2 class="listing-heading">{{ housingLocation.name }}</h2>
          <p class="listing-location">{{ housingLocation.city }}, {{ housingLocation.state }}</p>
          <a [routerLink]="['/details', housingLocation.id]">Learn More</a>
      </section>
  `,
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
  housingService = inject(HousingService);
}
