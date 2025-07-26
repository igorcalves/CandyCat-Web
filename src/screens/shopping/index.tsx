import { FaArrowLeft } from "react-icons/fa";
import Icon from "../../components/icons";
import { RegisterItemBtn } from "../../GlobalStyles";
import { ReusableTable } from "../../components/reusableTable";
import type { TableItem } from "../../components/reusableTable";
import {
  LeftPanel,
  MainContentContainer,
  TableHeader,
  TableTitle,
} from "../home/styles";
import { ShoppingContainer } from "./styles";
import { useState } from "react";
import styled, { keyframes } from "styled-components";

// Animações para transição de telas
const slideInFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

// Componentes animados
const AnimatedCartDetails = styled.div`
  animation: ${slideInFromRight} 0.4s ease-out;
  width: 100%;
  overflow: hidden;
`;

const AnimatedCartList = styled.div`
  animation: ${slideInFromLeft} 0.4s ease-out;
  width: 100%;
  overflow: hidden;
`;

// Estilos customizados para os modais
const StyledDialogContent = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  padding: 24px;
  max-width: 500px;
  width: 90%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1001;
  max-height: 90vh;
  overflow-y: auto;
`;

const ConfirmDialogContent = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  padding: 24px;
  max-width: 400px;
  width: 90%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1001;
`;

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  h2 {
    margin: 0;
    font-size: 18px;
    font-weight: 600;
    color: #1f2937;
  }
`;

const ModalBody = styled.div`
  margin-bottom: 24px;

  p {
    color: #6b7280;
    line-height: 1.5;
    margin: 0;
  }
`;

const ModalFooter = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
`;

const FormField = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
    color: #374151;
    font-size: 14px;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 14px;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`;

const ModalButton = styled.button<{ variant?: "primary" | "secondary" }>`
  padding: 10px 16px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;

  ${({ variant = "primary" }) =>
    variant === "primary"
      ? `
      background-color: #667eea;
      color: white;
      
      &:hover:not(:disabled) {
        background-color: #5a67d8;
      }
      
      &:disabled {
        background-color: #9ca3af;
        cursor: not-allowed;
      }
    `
      : `
      background-color: #f3f4f6;
      color: #374151;
      border: 1px solid #d1d5db;
      
      &:hover {
        background-color: #e5e7eb;
      }
    `}
`;

const SuccessButton = styled(ModalButton)`
  background-color: #10b981;

  &:hover:not(:disabled) {
    background-color: #059669;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #6b7280;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #374151;
  }
`;

export const Shopping = () => {
  const [selectedShoppingCart, setSelectedShoppingCart] = useState<
    string | null
  >(null);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isAddItemModalOpen, setIsAddItemModalOpen] = useState(false);
  const [newItemName, setNewItemName] = useState("");
  const [newItemQuantity, setNewItemQuantity] = useState("");

  // Dados de exemplo para os carrinhos de compra
  const shoppingCarts: TableItem[] = [
    {
      id: "1",
      criador: "João Silva",
      dataCriacao: "2025-01-20",
      quantidadeItens: 15,
      status: "em-aberto",
    },
    {
      id: "2",
      criador: "Maria Santos",
      dataCriacao: "2025-01-18",
      quantidadeItens: 8,
      status: "em-aberto",
    },
    {
      id: "3",
      criador: "Pedro Oliveira",
      dataCriacao: "2025-01-15",
      quantidadeItens: 23,
      status: "concluido",
    },
    {
      id: "3",
      criador: "Pedro Oliveira",
      dataCriacao: "2025-01-15",
      quantidadeItens: 23,
      status: "concluido",
    },
  ];
  const handleOpenCart = (id: string) => {
    setSelectedShoppingCart(id);
    console.log("Abrindo carrinho:", id);
  };

  const handleDeleteCart = (id: string) => {
    console.log("Excluindo carrinho:", id);
    // Aqui você implementaria a lógica para excluir o carrinho
  };

  const handleCompleteCart = (id: string) => {
    console.log("Concluindo carrinho:", id);

    setSelectedShoppingCart(null);
  };

  const handleBackToList = () => {
    setSelectedShoppingCart(null);
  };

  const handleOpenCreateModal = () => {
    setIsCreateModalOpen(true);
  };

  const handleCloseCreateModal = () => {
    setIsCreateModalOpen(false);
  };

  const handleCreateCart = () => {
    console.log("Criando novo carrinho");
    // Aqui você implementaria a lógica para criar o carrinho
    handleCloseCreateModal();
  };

  const handleOpenAddItemModal = () => {
    setIsAddItemModalOpen(true);
  };

  const handleCloseAddItemModal = () => {
    setIsAddItemModalOpen(false);
    setNewItemName("");
    setNewItemQuantity("");
  };

  const handleAddItem = () => {
    if (newItemName.trim() && newItemQuantity.trim()) {
      console.log(
        "Adicionando item:",
        newItemName,
        "Quantidade:",
        newItemQuantity
      );
      // Aqui você implementaria a lógica para adicionar o item
      handleCloseAddItemModal();
    }
  };

  return (
    <ShoppingContainer>
      <MainContentContainer
        style={{
          margin: 30,
        }}
      >
        <LeftPanel>
          {selectedShoppingCart ? (
            <AnimatedCartDetails>
              <TableHeader>
                <div
                  style={{
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                  }}
                  onClick={handleBackToList}
                >
                  <Icon icon={<FaArrowLeft />} color="#667eea" />
                </div>
                <TableTitle>Lista de compras</TableTitle>
                <div style={{ display: "flex", gap: "10px" }}>
                  <RegisterItemBtn onClick={handleOpenAddItemModal}>
                    Adicionar Item
                  </RegisterItemBtn>
                  <RegisterItemBtn
                    style={{ backgroundColor: "#10b981" }}
                    onClick={() => handleCompleteCart(selectedShoppingCart)}
                  >
                    Concluir Carrinho
                  </RegisterItemBtn>
                </div>
              </TableHeader>
              {/* Aqui você pode adicionar o conteúdo da lista de compras específica */}
              <div
                style={{ padding: "20px", textAlign: "center", color: "#666" }}
              >
                Conteúdo da lista de compras do carrinho: {selectedShoppingCart}
              </div>
            </AnimatedCartDetails>
          ) : (
            <AnimatedCartList>
              <TableHeader>
                <TableTitle>Carrinhos de compras</TableTitle>
                <RegisterItemBtn onClick={handleOpenCreateModal}>
                  Criar Carrinho de compras
                </RegisterItemBtn>
              </TableHeader>
              <div style={{ marginTop: "20px", height: "calc(100% - 80px)" }}>
                <ReusableTable
                  items={shoppingCarts}
                  onOpen={handleOpenCart}
                  onDelete={handleDeleteCart}
                />
              </div>
            </AnimatedCartList>
          )}
        </LeftPanel>
      </MainContentContainer>

      {/* Modal de confirmação para criar novo carrinho */}
      {isCreateModalOpen && (
        <>
          <ModalBackdrop onClick={handleCloseCreateModal} />
          <ConfirmDialogContent>
            <ModalHeader>
              <h2>Criar Novo Carrinho</h2>
              <CloseButton onClick={handleCloseCreateModal}>×</CloseButton>
            </ModalHeader>
            <ModalBody>
              <p>Deseja criar um novo carrinho de compras?</p>
            </ModalBody>
            <ModalFooter>
              <ModalButton variant="secondary" onClick={handleCloseCreateModal}>
                Cancelar
              </ModalButton>
              <ModalButton onClick={handleCreateCart}>
                Criar Carrinho
              </ModalButton>
            </ModalFooter>
          </ConfirmDialogContent>
        </>
      )}

      {/* Modal para adicionar item ao carrinho */}
      {isAddItemModalOpen && (
        <>
          <ModalBackdrop onClick={handleCloseAddItemModal} />
          <StyledDialogContent>
            <ModalHeader>
              <h2>Adicionar Item ao Carrinho</h2>
              <CloseButton onClick={handleCloseAddItemModal}>×</CloseButton>
            </ModalHeader>
            <ModalBody>
              <FormField>
                <label htmlFor="item-name-input">Nome do Item:</label>
                <StyledInput
                  id="item-name-input"
                  placeholder="Digite o nome do item"
                  value={newItemName}
                  onChange={(e) => setNewItemName(e.target.value)}
                />
              </FormField>
              <FormField>
                <label htmlFor="item-quantity-input">Quantidade:</label>
                <StyledInput
                  id="item-quantity-input"
                  type="number"
                  placeholder="Digite a quantidade"
                  value={newItemQuantity}
                  onChange={(e) => setNewItemQuantity(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleAddItem()}
                />
              </FormField>
            </ModalBody>
            <ModalFooter>
              <ModalButton
                variant="secondary"
                onClick={handleCloseAddItemModal}
              >
                Cancelar
              </ModalButton>
              <SuccessButton
                onClick={handleAddItem}
                disabled={!newItemName.trim() || !newItemQuantity.trim()}
              >
                Adicionar Item
              </SuccessButton>
            </ModalFooter>
          </StyledDialogContent>
        </>
      )}
    </ShoppingContainer>
  );
};
