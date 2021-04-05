import { Component, OnInit } from "@angular/core";
import * as HighCharts from "highcharts";
import { faCircle, faArrowDown } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-class-analytics",
  templateUrl: "./class-analytics.component.html",
  styleUrls: ["./class-analytics.component.css"]
})
export class ClassAnalyticsComponent implements OnInit {
  faCircle = faCircle;
  faArrowDown = faArrowDown;

  constructor() {}

  ngOnInit() {
    this.lineChart();
  }

  lineChart() {
    let chart = HighCharts.chart("line-chart", {
      chart: {
        height: 210
      },
      title: {
        text: ""
      },
      xAxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
      },

      plotOptions: {
        series: {
          marker: {
            enabled: false
          }
        }
      },
      legend: {
        enabled: false
      },
      yAxis: {
        title: false
      },
      series: [
        {
          type: "area",
          color: "#34abcd",
          lineWidth: 1,
          data: [19.9, 71.5, 50.4, 47.2, 14.0, 10.7],
          fillColor: {
            linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
            stops: [
              [0, "#34abcd"],
              [
                1,
                HighCharts.color("white")
                  .setOpacity(0)
                  .get()
              ]
            ]
          }
        }
      ]
    });
  }
}
