import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react"
import { SummaryCard, SummaryContainer } from "./styles"

export const Summary = () => {
  return (
    <SummaryContainer>
        <SummaryCard>
            <span>Entradas</span>

            <ArrowCircleUp size={32} color="#00b37e" />

            <strong>R$ 17.400,00</strong>
        </SummaryCard>

        <SummaryCard>
            <span>Saídas</span>

            <ArrowCircleDown size={32} color="#f75a68" />

            <strong>R$ 17.400,00</strong>
        </SummaryCard>

        <SummaryCard variant="green">
            <span>Total</span>

            <CurrencyDollar size={32} color="#fff" />

            <strong>R$ 17.400,00</strong>
        </SummaryCard>
    </SummaryContainer>
  )
}