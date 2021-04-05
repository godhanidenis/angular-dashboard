import { Component } from "@angular/core";
import * as HighCharts from "highcharts";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";
import { StatisticService } from "../Statistic.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  pieChartData = {};
  areaChartData = {};
  constructor(private statisticService: StatisticService) {}

  loadAreaChartData() {
    return {
      0: {
        name: "lesson",
        title: "TOTAL LESSONS",
        percent: "56.1",
        icon: "Up",
        count: "564",
        data: [
          {
            name: "",
            data: [
              4618,
              6444,
              9822,
              15468,
              20434,
              24126,
              27387,
              29459,
              31056,
              31982,
              32040,
              31233,
              29224,
              27342,
              26662,
              26956,
              27912,
              28999,
              28965
            ]
          }
        ]
      },
      1: {
        name: "course",
        title: "TOTAL COURSES",
        percent: "8.33",
        icon: "Down",
        count: "256",
        data: [
          {
            name: "",
            data: [
              4618,
              6444,
              9822,
              15468,
              20434,
              24126,
              27387,
              29459,
              31056,
              31982,
              32040,
              31233,
              29224,
              27342,
              26662,
              26956,
              27912,
              28999,
              28965
            ]
          }
        ]
      },
      2: {
        name: "students",
        title: "TOTAL STUDENTS",
        percent: "16.2",
        icon: "Up",
        count: "65,465",
        data: [
          {
            name: "",
            data: [
              4618,
              6444,
              9822,
              15468,
              20434,
              24126,
              27387,
              29459,
              31056,
              31982,
              32040,
              31233,
              29224,
              27342,
              26662,
              26956,
              27912,
              28999,
              28965
            ]
          }
        ]
      },
      3: {
        name: "engagement",
        title: "ENGAGEMENT RATE",
        percent: "64.5",
        icon: "Up",
        count: "",
        rate: "56",
        data: [
          {
            name: "",
            data: [
              4618,
              6444,
              9822,
              15468,
              20434,
              24126,
              27387,
              29459,
              31056,
              31982,
              32040,
              31233,
              29224,
              27342,
              26662,
              26956,
              27912,
              28999,
              28965
            ]
          }
        ]
      }
    };
  }

  ngOnInit() {
    // Data Fetching for AreaChart
    this.areaChartData = this.loadAreaChartData();

    // Data fetching for PieChart
    this.statisticService.getStatisticData().subscribe(data => {
      console.log("return from service", data);
      for (let dataKey in data) {
        this.pieChartData[dataKey] = {};
        delete data[dataKey]["guid"];
        for (let keyvalue in data[dataKey]) {
          this.pieChartData[dataKey][keyvalue] = {};
          this.pieChartData[dataKey][keyvalue]["color"] =
            data[dataKey][keyvalue]["color"];
          this.pieChartData[dataKey][keyvalue]["icon"] =
            data[dataKey][keyvalue]["icon"];
          for (let keyvalue1 in data[dataKey][keyvalue]) {
            if (/name/.test(keyvalue1)) {
              this.pieChartData[dataKey][keyvalue]["name"] =
                data[dataKey][keyvalue][keyvalue1];
            } else if (/balance/.test(keyvalue1)) {
              this.pieChartData[dataKey][keyvalue]["balance"] =
                data[dataKey][keyvalue][keyvalue1];
            } else if (/percent/.test(keyvalue1)) {
              this.pieChartData[dataKey][keyvalue]["percent"] =
                data[dataKey][keyvalue][keyvalue1];
            }
          }
        }
      }
    });
  }
}
