
export default function UserInput({ investment, handleChange }) {

    return <section id="user-input">
        <div class='input-group'>
            <label>Initial investment</label>
            <input type="number" required value={investment.initialInvestment} onChange={(event)=>handleChange('initialInvestment', event.target.value)}/>

            <label>Annual Investment</label>
            <input type="number" value={investment.annualInvestment}  onChange={(event)=>handleChange('annualInvestment', event.target.value)}/>
        </div>
        <div class='input-group'>
            <label>Expected return</label>
            <input type="number" value={investment.expectedReturn}  onChange={(event)=>handleChange('expectedReturn', event.target.value)}/>
            <label>Duration</label>
            <input type="number" value={investment.duration}  onChange={(event)=>handleChange('duration', event.target.value)}/>
        </div>
    </section>
}