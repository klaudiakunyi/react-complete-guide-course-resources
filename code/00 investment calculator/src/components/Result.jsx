import { calculateInvestmentResults, formatter } from '../util/investment.js'

export default function Result({ investment }) {
    const annualData = calculateInvestmentResults(investment)
    const initialInvestment =
    annualData[0].valueEndOfYear -
    annualData[0].interest -
    annualData[0].annualInvestment;
    return <table id="result" className='center'>
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment value</th>
                <th>Interest (year)</th>
                <th>Total interest</th>
                <th>Invested capital</th>
            </tr>
        </thead>
        <tbody>
            {annualData.map((record) => {
                const totalInterest =
                record.valueEndOfYear -
                record.annualInvestment * record.year -
                    initialInvestment;
                const totalAmountInvested = record.valueEndOfYear - totalInterest;
                return <tr key={record.year}>
                    <td>{record['year']}</td>
                    <td>{formatter.format(record['valueEndOfYear'])}</td>
                    <td>{formatter.format(record['interest'])}</td>
                    <td>{formatter.format(totalInterest)}</td>
                    <td>{formatter.format(totalAmountInvested)}</td>
                </tr>
            })}
        </tbody>
    </table>
}