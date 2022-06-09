export function ElementCard(props) {
    const { amount, symbol, logo, element } = props;
    return (
        <div>ElementCard: {symbol}:{element.id} Amount: {amount} Compound: {element.compound} </div>
    )
}