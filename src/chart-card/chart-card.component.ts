import { Component, OnInit, Input, AfterViewInit } from "@angular/core";
import * as HighCharts from "highcharts";

import {
  faArrowCircleDown,
  faSquare,
  faArrowDown,
  faCircle,
  faGraduationCap,
  faBook,
  faChartBar,
  faBookReader
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-chart-card",
  templateUrl: "./chart-card.component.html",
  styleUrls: ["./chart-card.component.css"]
})
export class ChartCardComponent implements OnInit, AfterViewInit {
  faArrowDown = faArrowDown;
  faSquare = faSquare;
  faCircle = faCircle;
  icon;
  color: string;

  @Input() pourData: {};
  dataArray: [] = [];
  constructor() {}

  ngOnInit() {
    switch (this.pourData["name"]) {
      case "lesson": {
        this.icon = faBookReader;
        //statements;
        break;
      }
      case "course": {
        this.icon = faBook;
        //statements;
        break;
      }
      case "students": {
        this.icon = faGraduationCap;
        //statements;
        break;
      }
      case "engagement": {
        this.icon = faChartBar;
        //statements;
        break;
      }
      default: {
        //statements;
        break;
      }
    }
  }

  ngAfterViewInit() {
    this.color = this.getRandomColor();
    this.areaChart();
  }

  areaChart() {
    this.dataArray = this.pourData["data"];
    let chart = HighCharts.chart(this.pourData["name"] + "-chart", {
      chart: {
        type: "area",
        height: 100
      },
      title: {
        text: ""
      },
      xAxis: {
        visible: false
      },
      yAxis: {
        visible: false
      },
      tooltip: {
        pointFormat: "<b>{point.y:,.0f}</b>"
      },
      plotOptions: {
        area: {
          pointStart: 1940,
          marker: {
            enabled: false,
            symbol: "circle",
            radius: 2,
            states: {
              hover: {
                enabled: true
              }
            }
          },
          color: this.color,
          lineWidth: 1,
          fillColor: {
            linearGradient: [0, 0, 0, 100],
            stops: [
              [0, this.color],
              [
                1,
                HighCharts.color("white")
                  .setOpacity(0)
                  .get("rgba")
              ]
            ]
          }
        }
      },
      legend: {
        enabled: false
      },
      series: this.pourData["data"]
    });
  }

  getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
