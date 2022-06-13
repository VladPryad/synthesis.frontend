import Web3 from "web3";

export const formatAmount = (amountWei) => {
    let amount;
    const web3 = new Web3();

    try {
        amount = web3.utils.fromWei(amountWei);
    } catch {
        amount = amountWei;
    }
    
    return amount;
}

export const printAmount = (amount, len = 18) => {
    // const a = new BigNumber(amount);

    // return a.toExponential();
    //return Number.parseFloat(formatAmount(amount)).toFixed(10);

    if(amount.toString().length <= len) {
        return amount;
    } else {
        let s = amount.toString();
        let h = s.slice(0, len);
        let l = s.slice(len + 1, s.length - 1);
        return (
            <div id="outer">
                <span>H: {h}</span> <br/>
                <span style={{fontSize: "small"}}>L: {l}</span>
            </div>
        )
    }
}

export const printSymbol = (symbol, index) => {
    return (<span>{symbol}<sup>{index}</sup></span>)
}