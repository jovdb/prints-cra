import { useEditingPrintId } from '../../store/prints-edit';
import { Header, HeaderLeft, HeaderRight } from '../header';
import { Logo } from '../logo';
import { Price } from '../price';
import { PrintEdit } from '../print-edit';
import { Prints } from '../prints';

import './App.css';

export function App() {
  const [editingPrintId] = useEditingPrintId();
  const isEditing = !!editingPrintId;

  return (
    <div className="App">
      <Header>
        <HeaderLeft><Logo /></HeaderLeft>
        <HeaderRight><Price /></HeaderRight>
      </Header>
      {!isEditing && <Prints />}
      {isEditing && <PrintEdit />}
    </div>
  );
}
