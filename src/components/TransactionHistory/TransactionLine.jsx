import PropTypes from 'prop-types';
import {TypeTableColumn} from './TransactionHistory.styled'

export const TransactionLine = ({ info: { type, amount, currency } }) => {
    return (
        <>
            <TypeTableColumn>{ type }</TypeTableColumn>
            <td>{ amount }</td>
            <td>{ currency }</td>
        </>
    )
}

TransactionLine.propTypes = {
    info: PropTypes.shape({
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    })
};