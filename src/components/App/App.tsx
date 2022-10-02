import { Header, HeaderLeft, HeaderRight } from '../header';
import { Logo } from '../logo';
import { Price } from '../price';
import { Prints } from '../prints';

import './App.css';

export function App() {
  return (
    <div className="App">
      <Header>
        <HeaderLeft><Logo /></HeaderLeft>
        <HeaderRight><Price /></HeaderRight>
      </Header>
      <Prints />
    </div>
  );
}
