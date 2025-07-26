import styled from "styled-components";

const TasksContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f8f9fa;

  @media (max-width: 768px) {
    margin-left: 60px;
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const TasksTitle = styled.h1`
  font-size: 48px;
  font-weight: 700;
  color: #1a1a1a;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 36px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

export const Tasks = () => {
  return (
    <TasksContainer>
      <TasksTitle>Tasks</TasksTitle>
    </TasksContainer>
  );
};
