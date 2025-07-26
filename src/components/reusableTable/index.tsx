import React from "react";
import styled, { keyframes } from "styled-components";
import {
  TableContainer,
  TableHeaderRow,
  TableBody,
  TableRow,
  TableCell,
  TableCellHeader,
  StatusBadge,
  ActionButton,
  TableActionsCell,
} from "../../GlobalStyles";

// Animações
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const scaleIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

// Container animado da tabela
const AnimatedTableContainer = styled(TableContainer)`
  animation: ${fadeInUp} 0.6s ease-out;
`;

// Linha animada da tabela
const AnimatedTableRow = styled(TableRow)`
  animation: ${slideInLeft} 0.4s ease-out;
  animation-fill-mode: both;

  &:nth-child(1) {
    animation-delay: 0.1s;
  }
  &:nth-child(2) {
    animation-delay: 0.15s;
  }
  &:nth-child(3) {
    animation-delay: 0.2s;
  }
  &:nth-child(4) {
    animation-delay: 0.25s;
  }
  &:nth-child(5) {
    animation-delay: 0.3s;
  }
  &:nth-child(6) {
    animation-delay: 0.35s;
  }
  &:nth-child(7) {
    animation-delay: 0.4s;
  }
  &:nth-child(8) {
    animation-delay: 0.45s;
  }
  &:nth-child(n + 9) {
    animation-delay: 0.5s;
  }
`;

// Header animado
const AnimatedTableHeaderRow = styled(TableHeaderRow)`
  animation: ${scaleIn} 0.5s ease-out;
`;

export interface TableItem {
  id: string;
  criador: string;
  dataCriacao: string;
  quantidadeItens: number;
  status: "em-aberto" | "concluido";
}

interface ReusableTableProps {
  items: TableItem[];
  onOpen: (id: string) => void;
  onDelete: (id: string) => void;
  showQuantidade?: boolean;
}

export const ReusableTable: React.FC<ReusableTableProps> = ({
  items,
  onOpen,
  onDelete,
  showQuantidade = true,
}) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const getStatusText = (status: TableItem["status"]) => {
    switch (status) {
      case "concluido":
        return "Concluído";
      case "em-aberto":
      default:
        return "Em Aberto";
    }
  };

  return (
    <AnimatedTableContainer>
      <AnimatedTableHeaderRow>
        <TableCellHeader>Criador</TableCellHeader>
        <TableCellHeader>Data de Criação</TableCellHeader>
        {showQuantidade && <TableCellHeader>Qtd. Itens</TableCellHeader>}
        <TableCellHeader>Status</TableCellHeader>
        <TableCellHeader>Ações</TableCellHeader>
      </AnimatedTableHeaderRow>

      <TableBody>
        {items.length === 0 ? (
          <AnimatedTableRow>
            <TableCell
              style={{
                gridColumn: showQuantidade ? "1 / -1" : "1 / -1",
                textAlign: "center",
                color: "#9ca3af",
                padding: "40px 16px",
              }}
            >
              Nenhum item encontrado
            </TableCell>
          </AnimatedTableRow>
        ) : (
          items.map((item) => (
            <AnimatedTableRow key={item.id}>
              <TableCell>{item.criador}</TableCell>
              <TableCell>{formatDate(item.dataCriacao)}</TableCell>
              {showQuantidade && <TableCell>{item.quantidadeItens}</TableCell>}
              <TableCell>
                <StatusBadge status={item.status}>
                  {getStatusText(item.status)}
                </StatusBadge>
              </TableCell>
              <TableActionsCell>
                <ActionButton variant="primary" onClick={() => onOpen(item.id)}>
                  Abrir
                </ActionButton>
                <ActionButton
                  variant="secondary"
                  onClick={() => onDelete(item.id)}
                >
                  Excluir
                </ActionButton>
              </TableActionsCell>
            </AnimatedTableRow>
          ))
        )}
      </TableBody>
    </AnimatedTableContainer>
  );
};
