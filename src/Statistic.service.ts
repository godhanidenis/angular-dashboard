import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class StatisticService {
  apiURL = "https://api.mocki.io/v1/bfc60a1f";

  constructor(private http: HttpClient) {}

  getStatisticData() {
    return this.http.get(this.apiURL);
  }
}
