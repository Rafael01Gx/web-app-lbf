import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './core/services/auth-guard/auth-guard.service';
import { PublicGuard } from './core/services/public-guard/public-guard.service';
import { DashboardComponent } from './pages/manage-accounts/manage-accounts.component';
import { OsPageComponent } from './pages/os-page/os-page.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { ConfiguracoesComponent } from './pages/configuracoes/configuracoes.component';
import { AnalisesComponent } from './pages/analises/analises.component';
import { ManageOsComponent } from './pages/manage-os/manage-os.component';
import { ForgotPassowrdComponent } from './pages/forgot-passowrd/forgot-passowrd.component';
import { RecoveryPasswordComponent } from './pages/recovery-password/recovery-password.component';
import { RelatorioDeAnaliseComponent } from './components/relatorio-de-analise/relatorio-de-analise.component';
import { AmostrasComponent } from './pages/amostras/amostras.component';
import { OsAnalyticsResolver } from './core/services/analytical-charts/OsAnalytics.resolver';
import { PainelAnalisesPreditivasComponent } from './pages/painel-analises-preditivas/painel-analises-preditivas.component';



export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [PublicGuard]
  },
  {
    path: 'criarconta',
    component: SignupComponent,
    canActivate: [PublicGuard]
  },
  {
    path: 'forgot-password',
    component: ForgotPassowrdComponent,
    canActivate: [PublicGuard]
  },
  {
    path: 'recovery-password/reset_password',
    component: RecoveryPasswordComponent,
    canActivate: [PublicGuard]
  },
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'analises-preditivas',
    component: PainelAnalisesPreditivasComponent,
    canActivate: [AuthGuard],
    resolve: {
      analyticsData: OsAnalyticsResolver
    }
  },
  {
    path: 'gerenciar-contas',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'perfil',
    component: UserProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'ordem-de-servico',
    component: OsPageComponent,
    children: [
      { path: '', redirectTo: 'nova-ordem-de-servico', pathMatch: 'full' },
      { path: 'nova-ordem-de-servico', loadComponent: ()=> import('./components/componentes-ordem-de-servico/nova-os/nova-os.component').then((p)=>p.NovaOsComponent) },
      { path: 'aguardando-analise', loadComponent:()=> import('./components/componentes-ordem-de-servico/os-pendentes/os-pendentes.component').then((p)=> p.OsPendentesComponent)  },
      { path: 'ordem-de-servico-concluidas', loadComponent:()=> import('./components/componentes-ordem-de-servico/os-finalizadas/os-finalizadas.component').then((p)=> p.OsFinalizadasComponent)}
    ],
    canActivate: [AuthGuard]
  },
  {
    path: 'gerenciar-os',
    component: ManageOsComponent,
    children: [
      { path: '', redirectTo: 'aguardando-autorizacao', pathMatch: 'full' },
      { path: 'aguardando-autorizacao', loadComponent:()=> import('./components/componentes-ordem-de-servico/gerenciar/gerenciar-os-aguardando-autorizacao/gerenciar-os-aguardando-autorizacao.component').then((p)=> p.GerenciarOsAguardandoAutorizacaoComponent) },
      { path: 'aguardando-analise', loadComponent:()=> import('./components/componentes-ordem-de-servico/gerenciar/gerenciar-os-autorizadas/gerenciar-os-autorizadas.component').then((p)=> p.GerenciarOsAutorizadasComponent) },
      { path: 'os-em-andamento', loadComponent:()=> import('./components/componentes-ordem-de-servico/gerenciar/gerenciar-os-em-execucao/gerenciar-os-em-execucao.component').then((p)=> p.GerenciarOsEmExecucaoComponent) },
      { path: 'finalizadas', loadComponent:()=> import('./components/componentes-ordem-de-servico/gerenciar/gerenciar-os-finalizadas/gerenciar-os-finalizadas.component').then((p)=> p.GerenciarOsFinalizadasComponent) }
    ],
    canActivate: [AuthGuard]
  },
  {
    path: 'configuracoes',
    component: ConfiguracoesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'relatorio-de-analises',
    component: RelatorioDeAnaliseComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'amostras',
    component:AmostrasComponent ,
    canActivate: [AuthGuard]
  },
  {
    path: 'analises',
    component: AnalisesComponent,
    children: [
      { path: '', redirectTo: 'aguardando-autorizacao', pathMatch: 'full' },
      { path: 'aguardando-autorizacao', loadComponent: ()=> import('./components/componentes-analise/aguardando-autorizacao/aguardando-autorizacao.component').then((p)=>p.AguardandoAutorizacaoComponent) },
      { path: 'aguardando-analise', loadComponent: ()=> import('./components/componentes-analise/aguardando-analise/aguardando-analise.component').then((p)=>p.AguardandoAnaliseComponent) },
      { path: 'analise-em-andamento', loadComponent: ()=> import('./components/componentes-analise/analise-em-anamento/analise-em-anamento.component').then((p)=>p.AnaliseEmAnamentoComponent) },
      { path: 'finalizadas', loadComponent: ()=> import('./components/componentes-analise/analises-finalizadas/analises-finalizadas.component').then((p)=>p.AnalisesFinalizadasComponent) }
    ],
    canActivate: [AuthGuard]
  },

  {
    path: '**',
    redirectTo: ''
  }
];