import { IAmostrasCollection, IAnalista } from "./IAmostra.interface";

export interface INovaOs {
    amostras: object,
    observacao: string
}
export interface IOrdensDeServico {
    ordemsDeServico?: IOrdemDeServico[];
  }

  export interface IOrdemDeServicoByOsResponse {
    ordemDeServico: IOrdemDeServico;
    message: string;
  }
  export interface IOrdemDeServicoResponse {
    ordemsDeServico: IOrdensDeServico["ordemsDeServico"];
    message: string;
  }

  export interface ISolicitante{
    _id: string;
    name: string;
    email: string;
    phone: string;
    area: string;
    funcao: string;
  }

  export interface IOrdemDeServico{ 
    _id: string;
    numeroOs?: string;
    solicitante?: ISolicitante;
    amostras: IAmostrasCollection
    data_solicitacao: string;
    status: TStatus;
    data_recepcao?:string;
    prazo_inicio_fim?:string;
    progresso?:Record<string, number>;
    observacao?:string;
    observacao_adm?:string;
    revisor_da_os?:IAnalista;
    createdAt: string;
    updatedAt: string;
  }

  export interface IAtualizarOrdemDeServico{
    _id: string;
    amostras?: IAmostrasCollection
    status?: TStatus | undefined;
    data_recepcao?:string;
    prazo_inicio_fim?:string;
    observacao_adm?:string;
  }
  

  export type TStatus = "Aguardando Autorização" | "Autorizada" | "Em Execução" | "Finalizada" | "Cancelada";