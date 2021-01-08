import React, {useEffect} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import CartItems from '../CartItems/CartItems';
import {fetchData} from '../../Redux/Actions/Actions';

const MainWrapper = styled.div`
    padding: 20px;
`;

function Cart(props) {
    const {fetchData, loading, cartItems} = props;

    useEffect(()=>{
        fetchData();
    }, [fetchData]);
    console.log(cartItems);
    return (
        <MainWrapper>
            {loading ? 'Loading' : <CartItems/>}
        </MainWrapper>
    );

}

const mapStateToProps = (state)=>{
    return {
        cartItems: state.cartItemsReducer.cartItems,
        loading: state.cartItemsReducer.loading
    }
}

const mapDispatchToProps = {
    fetchData
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);