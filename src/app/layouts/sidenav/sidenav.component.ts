import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SidenavService } from '../../core/services/sidenav/exibir-txt.service';

@Component({
    selector: 'app-sidenav',
    imports: [RouterLink, CommonModule],
    templateUrl: './sidenav.component.html',
    styleUrl: './sidenav.component.scss'
})
export class SidenavComponent implements OnInit {
  ngOnInit() {
    this.exibirTxt = this.sidenavService.getExibirTxt();
    this.filterMenu();
  }

  exibirTxt: boolean;

  constructor(private sidenavService: SidenavService) {
    this.exibirTxt = this.sidenavService.getExibirTxt();
  }

  toggleTxt() {
    this.exibirTxt = !this.exibirTxt;
    this.sidenavService.setExibirTxt(this.exibirTxt);
  }
  filteredMenu: any[] = [];

  menu = [
    {
      ico: 'description',
      name: 'Minhas OS',
      link: '/ordem-de-servico',
      auth: ['Usuário','Operador','Administrador']
    },
    {
      ico: 'task',
      name: 'Amostras',
      link: '/amostras',
      auth: ['Usuário','Administrador']
    },
    {
      ico: 'workspaces',
      name: 'Análises',
      link: '/analises',
      auth: ['Operador','Administrador']
    },
    {
      ico: 'manage_search',
      name: 'Gerenciar OS',
      link: '/gerenciar-os',
      auth: ['Administrador']
    },
    {
      ico: 'dashboard',
      name: 'Dashboard',
      link: '/analises-preditivas',
      auth: ['Operador','Administrador']
    },
/*
    {
      ico: 'science',
      name: 'SGS',
      link: '',
      auth: ['Operador','Administrador']
    }, */
    {
      ico: 'manage_accounts',
      name: 'Contas',
      link: '/gerenciar-contas',
      auth: ['Administrador']
    },
    {
      ico: 'settings',
      name: 'Configurações',
      link: '/configuracoes',
      auth: ['Operador','Administrador']
    },
  ];


    private filterMenu(): void {
      const userLevel = sessionStorage.getItem('user-level');
      if (userLevel) {
        this.filteredMenu = this.menu.filter(item => item.auth.includes(userLevel));
      }
    }
}
