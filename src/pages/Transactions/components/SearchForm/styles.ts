import styled from "styled-components";

export const SearchFormContainer = styled.form`
   display: flex;
   gap: 1rem;

   input {
      background: ${({ theme }) => theme["gray-900"]};
      flex: 1;

      border-radius: 6px;
      border: 0;
      padding: 1rem;
   
      color: ${({ theme }) => theme["gray-300"]};

      &::placeholder {
         color: ${({ theme }) => theme["gray-500"]};
      }
   }

   button {
      background: transparent;
      display: flex;
      align-items: center;
      gap: 0.75rem;

      padding: 1rem;

      border-radius: 6px;
      border: 1px solid ${({ theme }) => theme["green-300"]};
      
      color: ${({ theme }) => theme["green-300"]};
      font-weight: bold;

      cursor: pointer;

      &:disabled {
         opacity: 0.6;
         cursor: not-allowed;
      }

      &:not(:disabled):hover {
         background: ${({ theme }) => theme["green-500"]};
         border: 1px solid ${({ theme }) => theme["green-500"]};
         color: ${({ theme }) => theme.white};
         transition: background-color 0.2s, color 0.2s, border-color 0.2s;
      }
   }
`;