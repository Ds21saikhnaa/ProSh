import Product from "./Product";
import React from "react";

export const SuggestProduct = ( { products } ) => {
    return (
        <div style={{...styles.container, ...styles.row}}>
        {
            products.map((el, ind) => (
                <div style={styles.card}>
                    <Product key={ind} product={el} />
                </div>
            ))
        }
        </div>
    )
}

const styles = {
    container: {
        width: "100%",
        overflowX: "auto"
    },
    row : {
        display: "flex",
        flexDirection: "row"
    },
    card: {
        minWidth: "300px",
        maxWidth: "400px",
        marginLeft: "10px"
    }
}