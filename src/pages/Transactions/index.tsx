import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";

import { TransactionsContainer, TransactionsTable, PriceHighlight } from "./styles";


interface TransactionsProps {
   id: number;
   description: string;
   type: "income" | "outcome";
   price: number;
   category: string;
   createdAt: string;
}

export function Transactions() {
   const [transactions, setTransactions] = useState<TransactionsProps[]>([]);

   async function loadTransactions() {
      const response = await fetch('http://localhost:3000/transactions');
      const data = await response.json();

      setTransactions(data);
   }

   useEffect(() => {
      loadTransactions();
   }, [])

   return (
      <div>
         <Header />
         <Summary />

         <TransactionsContainer>
            <SearchForm />

            <TransactionsTable>
               <tbody>
                  {transactions.map(transaction => {
                     return (
                        <tr key={transaction.id}>
                           <td width="45%">{transaction.description}</td>
                           <td><PriceHighlight variant={transaction.type}>R$ {transaction.price}</PriceHighlight></td>
                           <td>{transaction.category}</td>
                           <td>{transaction.createdAt}</td>
                        </tr>
                     )
                  })}
               </tbody>
            </TransactionsTable>
         </TransactionsContainer>
      </div>
   );
}