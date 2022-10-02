import { useEditingPrintId } from '../../hooks/app';
import { Header, HeaderLeft, HeaderRight } from '../header';
import { Logo } from '../logo';
import { Price } from '../price';
import { PrintEdit } from '../print-edit';
import { Prints } from '../prints';
import { QueryClient, QueryClientProvider } from 'react-query'
 
import './App.css';

const queryClient = new QueryClient()

export function App() {
  const [editingPrintId] = useEditingPrintId();
  const isEditing = !!editingPrintId;

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Header>
          <HeaderLeft><Logo /></HeaderLeft>
          <HeaderRight><Price /></HeaderRight>
        </Header>
        {!isEditing && <Prints />}
        {isEditing && <PrintEdit />}
      </div>
    </QueryClientProvider>
  );
}
