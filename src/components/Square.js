import React from 'react'

const styles = {
    background: 'lightblue',
    border: '5px solid darkblue',
    fontSize: '50px',
    height: '160px',
    fontWeight: '800',
    cursor: 'pointer',
    outline: 'none'
}

export const Square = ({ value, onClick }) => {
    return (
        <button style={styles} onClick={onClick}>
            {value}
        </button>
    )
}
