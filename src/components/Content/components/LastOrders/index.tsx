import React from "react";
import { Pagination } from "./Pagination";

import * as S from "./styles";

export function LastOrders() {
  return (
    <S.Container>
      <S.Title>
        Últimos pedidos realizados
      </S.Title>
      <S.TableOrders>
      <tbody>
        <tr>
          <th>Pedido</th>
          <th>Data e Horário</th>
          <th>Produtos</th>
          <th>Total</th>
          <th>Comprador</th>
          <th>Status dos Pedidos</th>
          <th>Ação Recomendada</th>
        </tr>
        <tr>
          <td>0112466</td>
          <td>30/07/2021 - 15:49</td>
          <td><span>Ver (Quantidade)</span></td>
          <td>R$ 200,00</td>
          <td>Comprador A</td>
          <td>Pronta para embalar</td>
          <td><button>Marcar como embalado</button></td>
        </tr>
        <tr>
          <td>0112466</td>
          <td>30/07/2021 - 14:17</td>
          <td><span>Ver (Quantidade)</span></td>
          <td>R$ 200,00</td>
          <td>Comprador B</td>
          <td>Pronta para embalar</td>
          <td><button>Marcar como embalado</button></td>
        </tr>
        <tr>
          <td>0112466</td>
          <td>29/07/2021 - 22:07</td>
          <td><span>Ver (Quantidade)</span></td>
          <td>R$ 200,00</td>
          <td>Comprador C</td>
          <td>Pronta para embalar</td>
          <td><button>Marcar como embalado</button></td>
        </tr>
        <tr>
          <td>0112466</td>
          <td>29/07/2021 - 11:45</td>
          <td><span>Ver (Quantidade)</span></td>
          <td>R$ 200,00</td>
          <td>Comprador D</td>
          <td>Pronta para embalar</td>
          <td><button>Marcar como embalado</button></td>
        </tr>
        <tr>
          <td>0112466</td>
          <td>29/07/2021 - 12:22</td>
          <td><span>Ver (Quantidade)</span></td>
          <td>R$ 200,00</td>
          <td>Comprador E</td>
          <td>Pronto para envio</td>
          <td><button>Notificar envio</button></td>
        </tr>
      </tbody>
    </S.TableOrders>
    <Pagination />
    </S.Container>
  );
}
