import { Component, OnInit, Input, AfterViewInit } from "@angular/core";
import * as HighCharts from "highcharts";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-portfolio",
  templateUrl: "./portfolio.component.html",
  styleUrls: ["./portfolio.component.css"]
})
export class PortfolioComponent implements OnInit, AfterViewInit {
  @Input() pourData: {};
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    console.log(this.pourData);
    this.pieChart();
    console.log(this.pourData);
  }

  pieChart() {
    const chart = HighCharts.chart("pie-" + this.pourData.key + "-chart", {
      chart: {
        type: "pie",

        // Explicitly tell the width and height of a chart
        width: null,
        height: 100
      },
      title: {
        text: ""
      },
      plotOptions: {
        pie: {
          innerSize: "70%",
          allowPointSelect: true,
          colors: ["skyblue", "gold", "tomato"],
          cursor: "pointer",
          dataLabels: {
            enabled: false
          },

          showInLegend: true
        }
      },
      legend: {
        align: "right",
        verticalAlign: "top",
        layout: "vertical",
        padding: 13
      },
      series: [
        {
          name: "Statistic anlysis",
          data: [
            ["Impression", 70.0],
            ["Hover", 10.0],
            ["Click & Submit", 20.0]
          ]
        }
      ]
    });
  }
}
