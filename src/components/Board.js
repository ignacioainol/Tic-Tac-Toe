import React from 'react'
import { Square } from './Square'

export const Board = ({ squares, onClick }) => {

    const style = {
        border: '5px solid darkblue',
        borderRadius: '10px',
        width: '500px',
        margin: '0 auto',
        display: 'grid',
        gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
    }

    return (
        <div style={style}>
            {
                squares.map((square, i) => (
                    <Square key={i} value={square} onClick={() => onClick(i)} />
                ))
            }
        </div>
    )
}
