import { FaRegCheckCircle, FaRegCircle } from "react-icons/fa";
import styled from "styled-components";

interface Props {
  isChecked: boolean;
  onCheck: () => void;
}

function CheckIconbutton({ isChecked, onCheck }: Props) {
  return (
    <CheckIconbuttonStyle onClick={onCheck}>
      {
        isChecked ? <FaRegCheckCircle /> : <FaRegCircle />
      }
    </CheckIconbuttonStyle>
  );
}

const CheckIconbuttonStyle = styled.button`
  background: none;
  border: 0;
  cursor: pointer;

  svg {
    width: 24px;
    height: 24px;
  }
`;

export default CheckIconbutton;