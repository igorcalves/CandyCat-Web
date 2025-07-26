import {
  HomeContainer,
  HomeContent,
  PaymentHeader,
  StatsContainer,
  StatCard,
  StatLabel,
  StatValue,
  StatChange,
  MainContentContainer,
  LeftPanel,
  RightPanel,
  MonthlyTransactionCard,
  TransactionViewCard,
  CardTitle,
  TableHeader,
  TableTitle,
} from "./styles";

export const Home = () => {
  return (
    <HomeContainer>
      <HomeContent>
        <PaymentHeader>
          <StatsContainer>
            <StatCard>
              <StatLabel>Entrada</StatLabel>
              <StatValue>$55,580</StatValue>
              <StatChange positive>↑ 3.3% Last month</StatChange>
            </StatCard>

            <StatCard>
              <StatLabel>Total Gasto</StatLabel>
              <StatValue>$40,580</StatValue>
              <StatChange positive>↑ 2.1% Last month</StatChange>
            </StatCard>
          </StatsContainer>
        </PaymentHeader>

        <MainContentContainer>
          <LeftPanel>
            <TableHeader>
              <TableTitle>Todas Entradas</TableTitle>
              <div>Search and filters would go here</div>
            </TableHeader>
            <div style={{ padding: "20px", color: "#666" }}>
              Table content would go here
            </div>
            {/* @TODO aqui vai ter uma lista para as entradas de gastos ou de dinheiro que entrou */}
          </LeftPanel>

          <RightPanel>
            <MonthlyTransactionCard>
              <CardTitle>Gastos Mensais</CardTitle>
              <div style={{ color: "#666" }}>Chart placeholder - $55,580</div>
              {/* @TODO aqui vai ter um grafico mostrando o gasto dos meses passados */}
            </MonthlyTransactionCard>

            <TransactionViewCard>
              <CardTitle>Gastos</CardTitle>
              <div style={{ color: "#666" }}>
                Pie chart placeholder - $55,580
                {/* @TODO aqui vai ter um grafico semi circulo mostrando quais foram os maiores gastos do mes atual*/}
              </div>
            </TransactionViewCard>
          </RightPanel>
        </MainContentContainer>
      </HomeContent>
    </HomeContainer>
  );
};
