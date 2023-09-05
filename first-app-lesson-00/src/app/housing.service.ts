import {Injectable} from '@angular/core';
import {HousingLocation} from "./housinglocation";

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  url = 'http://localhost:3000/locations';

  constructor() {
  }

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

  getPhotoUrl(photo: string | undefined): string {
    let baseUrl = 'https://angular.io/assets/images/tutorials/faa';
    let url = `${baseUrl}/${photo}`;
    console.log(url);
    return url;
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }
}
