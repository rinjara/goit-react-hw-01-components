import PropTypes from 'prop-types';
import { TransactionLine } from './TransactionLine';
import { Table, TableHead, TableBody, TableRow } from './TransactionHistory.styled';

export const TransactionHistory = ({items}) => {
    return (
        <Table>
            <TableHead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </TableHead>
            
            <TableBody>
                {items.map((transaction) => (
                    <TableRow key={transaction.id}>
                        <TransactionLine info={transaction} />
                    </TableRow> 
                ))}
            </TableBody>
        </Table>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired
        }),
    ),
};