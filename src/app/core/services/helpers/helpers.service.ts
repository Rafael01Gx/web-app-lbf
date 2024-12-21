import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HelpersService {
  constructor() {}

  calcularPrazoEmDias(dataPrazo: string): string {
    const converterParaData = (data: string): Date => {
      const [dia, mes, ano] = data.split('/').map((num) => parseInt(num, 10));
      return new Date(ano, mes - 1, dia);
    };
    const prazoData: Date = converterParaData(dataPrazo);
    const dataAtual: Date = new Date();
    const diferencaMs: number = prazoData.getTime() - dataAtual.getTime();
    const diasDeDiferenca: number = diferencaMs / (1000 * 60 * 60 * 24);

    if (diasDeDiferenca < 0) {
      return `${Math.abs(Math.floor(diasDeDiferenca))} - Dias em atraso`;
    }

    return `${Math.floor(diasDeDiferenca)} - Dias restantes`;
  }

  limitarCasasDecimais(input: HTMLInputElement, casasDecimais: number): void {
    if (input.value) {
      const value = parseFloat(input.value).toFixed(casasDecimais);
      input.value = value;
    }
  }
  transformarResultado(value: number | string, casasDecimais: number): string {
    if (value === null || value === undefined) {
      return '';
    }
    if(typeof value === 'string'){
      return value
    }

    const formattedValue = value.toFixed(casasDecimais);
    const valorComPonto = formattedValue.replace('.', ',');
    const partes = valorComPonto.split(',');
    partes[0] = partes[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    return partes.join(',');
  }


  getMonthAndWeek(weekNumber:string| number) {
weekNumber = Number(weekNumber)
    if ( typeof weekNumber !== 'number'){
      return weekNumber;
    }
    const year = new Date().getFullYear();
    const firstDayOfYear = new Date(year, 0, 1);

    const targetDate = new Date(year, 0, 1 + (weekNumber - 1) * 7);

    const month = targetDate.toLocaleString('pt-BR', { month: 'short' });
    const firstDayOfMonth = new Date(targetDate.getFullYear(), targetDate.getMonth(), 1);
    const weekOfMonth = Math.ceil((targetDate.getDate() + firstDayOfMonth.getDay()) / 7);
    

    return `S${weekOfMonth}-${month.charAt(0).toUpperCase() + month.slice(1)}`;
  }

}
