import { Component, effect, inject, Input, OnInit, signal, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  ChartComponent,
  ApexChart,
  ApexAxisChartSeries,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexFill,
  ApexYAxis,
  ApexXAxis,
  ApexTooltip,
  ApexMarkers,
  ApexAnnotations,
  ApexStroke,
  NgApexchartsModule,
  ApexResponsive,
} from 'ng-apexcharts';
import { TEnsaiosData } from '../../../shared/interfaces/IAnalyticals.interface';
import { IWidthAndHeight } from '../../../shared/interfaces/IDimensoes.interface';
import { NgStyle } from '@angular/common';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  title: ApexTitleSubtitle;
  fill: ApexFill;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  annotations: ApexAnnotations;
  colors: any;
  toolbar: any;
  grid: ApexGrid;
  responsive: ApexResponsive[]
};
interface Xaxis {
  min: number | undefined;
  max: number | undefined;
}
export type TOptions = {
  [key in '1m' | '6m' | '1y' | '1yd' | 'all']: { xaxis: Xaxis };
};

@Component({
    selector: 'app-analytical-ensaios',
    imports: [NgApexchartsModule,NgStyle],
    templateUrl: './analytical-ensaios.component.html',
    styleUrl: './analytical-ensaios.component.scss'
})
export class AnalyticalEnsaiosComponent implements OnInit{
  public exibirGrafico:Boolean = false
  @Input({ alias: 'widthAndHeight', required: true }) set inputDimensoes(
    widthAndHeight: IWidthAndHeight
  ) {
    this.dimensoes.set(widthAndHeight);
  }

  public dimensoes = signal<IWidthAndHeight>({ width: 0, height: 0 });

  private route = inject(ActivatedRoute)
  @ViewChild('chart', { static: false }) chart!: ChartComponent;
  public chartOptions!: Partial<ChartOptions>;
  public activeOptionButton = 'all';
  public updateOptionsData : TOptions= {
    '1m': {
      xaxis: {
        min: new Date('28 Jan 2013').getTime(),
        max: new Date('27 Feb 2013').getTime(),
      },
    },
    '6m': {
      xaxis: {
        min: new Date('27 Sep 2012').getTime(),
        max: new Date('27 Feb 2013').getTime(),
      },
    },
    '1y': {
      xaxis: {
        min: new Date('27 Feb 2012').getTime(),
        max: new Date('27 Feb 2013').getTime(),
      },
    },
    '1yd': {
      xaxis: {
        min: new Date('01 Jan 2013').getTime(),
        max: new Date('27 Feb 2013').getTime(),
      },
    },
    all: {
      xaxis: {
        min: undefined,
        max: undefined,
      },
    },
  };

ngOnInit(): void {
  //this.initializeChartFromResolver()
}
constructor() {
  effect(() => {
    const { width, height } = this.dimensoes();
    this.initializeChartFromResolver()

  });
}

  private initializeChartFromResolver(): void {
    const resolvedData = this.route.snapshot.data['analyticsData'];

    if (resolvedData.ensaiosData.length >0) {
    this.exibirGrafico = true
      this.initChart(
        resolvedData.ensaiosData
      );
    }
  }


  initChart(data:TEnsaiosData): void {
    this.chartOptions = {      
      series: [       
        {
          data: data,
          name: 'Qnt de Ensaios',
        },
      ],

      chart: {
        type: 'area',
        height:this.dimensoes().height,
        width:this.dimensoes().width
      },
      annotations: {
       
        yaxis: [
          {
            y: 30,
            borderColor: '#999',
            label: {
              text: 'Support',
              style: {
                color: '#fff',
                background: '#00E396',
                
              },
            },
          },
        ],

      },
      dataLabels: {
        enabled: false,
      },
      markers: {
        size: 0,
      },
      xaxis: {
        type: 'datetime',
        min: data[0][0],
        tickAmount: 6,
      },
      tooltip: {
        x: {
          format: 'dd MMM yyyy',
        },
        
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 100],
        },
      },
    };
  }

  public updateOptions(option: keyof TOptions): void {
    this.activeOptionButton = option;
    this.chart.updateOptions(this.updateOptionsData[option], false, true, true);
  }
}


