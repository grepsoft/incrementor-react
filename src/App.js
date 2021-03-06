import { useState } from "react";
import Incrementor from "./incrementor/incrementor";
import "./styles.css";
import styled from "styled-components";

const Holder = styled.div`
  display: flex;
  -webkit-box-shadow: 7px 5px 11px -1px rgba(11, 33, 51, 0.92);
  box-shadow: 7px 5px 11px -1px rgba(11, 33, 51, 0.92);
`;

const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1e88e5;
  width: 120px;
  height: 180px;
`;

const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  width: 220px;
`;

const Display = styled.div`
  color: #fff;
  display: flex;
  justify-content: center;
  font-size: 3rem;
`;

const min = 0;
const max = 10;

export default function App() {
  const [value, setValue] = useState(min);

  return (
    <div className="App">
      <Holder>
        <Left>
          <Display>{value}</Display>
        </Left>
        <Right>
          <Incrementor
            value={value}
            onChange={(v) => setValue(v)}
            min={min}
            max={max}
            ks
          />
        </Right>
      </Holder>
    </div>
  );
}
