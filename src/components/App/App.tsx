import { Header, HeaderLeft, HeaderRight } from '../header';
import './App.css';

export function App() {
  return (
    <div className="App">
      <Header>
        <HeaderLeft>Logo</HeaderLeft>
        <HeaderRight>Price</HeaderRight>
      </Header>
    </div>
  );
}
