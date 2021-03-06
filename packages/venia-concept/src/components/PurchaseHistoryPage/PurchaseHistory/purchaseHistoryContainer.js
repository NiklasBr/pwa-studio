import { connect } from 'src/drivers';
import { transformItems } from 'src/selectors/purchaseHistory';
import PurchaseHistory from './purchaseHistory';
import actions, { getPurchaseHistory } from 'src/actions/purchaseHistory';

const mapStateToProps = ({ purchaseHistory }) => {
    let { isFetching, items } = purchaseHistory;

    items = transformItems(items);

    return {
        isFetching,
        items
    };
};

const mapDispatchToProps = {
    getPurchaseHistory,
    resetPurchaseHistory: actions.reset
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PurchaseHistory);
