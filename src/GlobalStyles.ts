import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const RegisterItemBtn = styled.button`
  position: relative;
  overflow: hidden;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #667eea;
  color: white;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: #667eeaaf;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0%;
    background-color: rgba(255, 255, 255, 0.3);
    transition: width 0.6s ease;
    z-index: 0;
  }

  &:active::after {
    width: 100%;
    transition: width 0.2s ease;
  }

  span {
    position: relative;
    z-index: 1;
  }
`;

// Componentes da Tabela Reutilizável
export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  overflow: hidden;
  background-color: #ffffff;
`;

export const TableHeaderRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 120px 100px 80px 150px;
  gap: 16px;
  padding: 16px;
  background-color: #f9fafb;
  border-bottom: 1px solid #e5e7eb;
  font-weight: 600;
  font-size: 14px;
  color: #374151;
  position: sticky;
  top: 0;
  z-index: 1;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 80px 60px 100px;
    gap: 8px;
    padding: 12px;
    font-size: 12px;
  }
`;

export const TableBody = styled.div`
  flex: 1;
  overflow-y: auto;
  max-height: calc(100% - 60px);
`;

export const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 120px 100px 80px 150px;
  gap: 16px;
  padding: 16px;
  border-bottom: 1px solid #f3f4f6;
  align-items: center;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f9fafb;
  }

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr 80px 60px 100px;
    gap: 8px;
    padding: 12px;
  }
`;

export const TableCell = styled.div`
  font-size: 14px;
  color: #374151;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const TableCellHeader = styled.div`
  font-size: 14px;
  color: #374151;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.025em;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const StatusBadge = styled.span<{
  status: "em-aberto" | "concluido";
}>`
  display: inline-flex;
  align-items: center;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;

  ${({ status }) => {
    switch (status) {
      case "concluido":
        return `
          background-color: #d1fae5;
          color: #065f46;
        `;
      case "em-aberto":
      default:
        return `
          background-color: #fef3c7;
          color: #92400e;
        `;
    }
  }}
`;

export const ActionButton = styled.button<{
  variant?: "primary" | "success" | "secondary";
}>`
  padding: 6px 12px;
  border-radius: 6px;
  border: none;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-right: 4px;

  ${({ variant = "primary" }) => {
    switch (variant) {
      case "success":
        return `
          background-color: #10b981;
          color: white;
          &:hover {
            background-color: #059669;
          }
        `;
      case "secondary":
        return `
          background-color: #6b7280;
          color: white;
          &:hover {
            background-color: #4b5563;
          }
        `;
      case "primary":
      default:
        return `
          background-color: #667eea;
          color: white;
          &:hover {
            background-color: #5a67d8;
          }
        `;
    }
  }}

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    padding: 4px 8px;
    font-size: 10px;
  }
`;

export const TableActionsCell = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  justify-content: flex-end;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2px;
  }
`;
