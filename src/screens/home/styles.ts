import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const HomeContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  animation: ${fadeIn} 0.5s ease-out;

  @media (max-width: 768px) {
    margin-left: 0;
    height: 100vh;
  }
`;

export const HomeContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #f8f9fa;
  overflow-y: auto;
  padding: 20px;
  gap: 20px;

  @media (max-width: 768px) {
    padding: 10px;
    gap: 15px;
    margin-left: 60px;
  }

  @media (max-width: 480px) {
    padding: 8px;
    gap: 12px;
  }
`;

export const PaymentHeader = styled.div`
  background-color: #ffffff;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 16px;
  }

  @media (max-width: 480px) {
    padding: 12px;
  }
`;

export const PaymentTitle = styled.h2`
  margin: 0 0 24px 0;
  font-size: 28px;
  font-weight: 600;
  color: #1a1a1a;
`;

export const StatsContainer = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
    margin-bottom: 16px;
  }

  @media (max-width: 480px) {
    gap: 12px;
    margin-bottom: 12px;
  }
`;

export const StatCard = styled.div`
  flex: 1;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 16px;
  }

  @media (max-width: 480px) {
    padding: 12px;
  }
`;

export const StatLabel = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0 0 8px 0;
`;

export const StatValue = styled.h3`
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 4px 0;
  color: #1a1a1a;
`;

export const StatChange = styled.span<{ positive?: boolean }>`
  font-size: 12px;
  color: ${({ positive }) => (positive ? "#10b981" : "#ef4444")};
  font-weight: 500;
`;

export const MainContentContainer = styled.div`
  display: flex;
  gap: 24px;
  flex: 1;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 16px;
  }

  @media (max-width: 480px) {
    gap: 12px;
  }
`;

export const LeftPanel = styled.div`
  flex: 2;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 24px;

  @media (max-width: 768px) {
    padding: 16px;
  }

  @media (max-width: 480px) {
    padding: 12px;
  }
`;

export const RightPanel = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 1024px) {
    flex-direction: row;
    gap: 16px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }

  @media (max-width: 480px) {
    gap: 12px;
  }
`;

export const MonthlyTransactionCard = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 24px;

  @media (max-width: 768px) {
    padding: 16px;
  }

  @media (max-width: 480px) {
    padding: 12px;
  }
`;

export const TransactionViewCard = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 24px;
  flex: 1;

  @media (max-width: 768px) {
    padding: 16px;
  }

  @media (max-width: 480px) {
    padding: 12px;
  }
`;

export const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 16px 0;
`;

export const TableContainer = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  overflow: hidden;
`;

export const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  border-bottom: 1px solid #e5e7eb;
`;

export const TableTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0;
`;
