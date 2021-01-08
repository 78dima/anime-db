import React from 'react';
import styled from 'styled-components';
import {Grid} from "@material-ui/core";
import image from './paella.jpg';
import Paper from "@material-ui/core/Paper";

const Cart = styled.div`
    padding: 20px;
`;
const CartInner = styled.div`
    
`;
const CartWrapImg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
`;
const CartImg = styled.img`
 
`;
const CartContent = styled.div`
  padding: 15px;
`;
const CartName = styled.div`
  color: #333
`;
const CartText = styled.div`
  color: #333
`;

function CartItems() {
    return (
       <Grid container>
           <Grid item xs={4}>
               <Paper>
                   <Cart>
                       <CartInner>
                           <CartWrapImg>
                               <CartImg src={image} alt=""/>
                           </CartWrapImg>
                           <CartContent>
                               <CartName>Orihime</CartName>
                               <CartText>lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum</CartText>
                           </CartContent>
                       </CartInner>
                   </Cart>
               </Paper>
           </Grid>
       </Grid>
    );
}

export default CartItems;

