import styled from "styled-components";

export const ShoppingContainer = styled.div`
  flex: 1;
  display: flex;
  height: 100vh;
  background-color: #f8f9fa;
  overflow: hidden;

  @media (max-width: 768px) {
    margin-left: 60px;
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;
