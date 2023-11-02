import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";

import { TransactionsContainer, TransactionsTable, PriceHighlight } from "./styles";

export function Transactions() {
   return (
      <div>
         <Header />
         <Summary />

         <TransactionsContainer>
            <SearchForm />

            <TransactionsTable>
               <tbody>
                  <tr>
                     <td>Desenvolvimento de site</td>
                     <td><PriceHighlight variant="income">R$ 12.000,00</PriceHighlight></td>
                     <td>Venda</td>
                     <td>13/04/2022</td>
                  </tr>

                  <tr>
                     <td>MC Donnalds</td>
                     <td><PriceHighlight variant="outcome">- R$ 54,00</PriceHighlight></td>
                     <td>Alimentação</td>
                     <td>14/04/2022</td>
                  </tr>

               </tbody>
            </TransactionsTable>
         </TransactionsContainer>
      </div>
   );
}