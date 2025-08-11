import { View, Text, StyleSheet } from "react-native";
import Cell from "./Cell";
import { useState } from "react";

const Board = ({ size }) => {
    const [cellStatus, setCellStatus] = useState(Array(size * size).fill(-1));
    const [isRoundPlayerTurn, setIsRoundPlayerTurn] = useState(true);

    const onCellPress = (cellIndex) => {
        if(cellStatus[cellIndex] !== -1) {
            return;
        }
        if(isRoundPlayerTurn) {
            cellStatus[cellIndex] = 0;
        } else {
            cellStatus[cellIndex] = 1;
        }

        setCellStatus([...cellStatus]);
        setIsRoundPlayerTurn(!isRoundPlayerTurn);


        const winner = checkWinner(cellStatus, size);
        if (winner !== -1) {
            alert(`Le joueur ${winner === 0 ? 'O' : 'X'} a gagné !`);
            return;
        }

    }

    const renderRow = (index) => {
        let row = [];
        for(let i = 0; i < size; i++) {
            row.push(<Cell 
                key = {index * size + i}
                value ={cellStatus[index * size + i]} 
                onPress={() => onCellPress(index * size + i)} />)
        }
        return row;
    }

    const checkWinner = (board, size) => {
        // Vérifie les lignes
        for (let i = 0; i < size; i++) {
            const first = board[i * size];
            if (first !== -1 && board.slice(i * size, (i + 1) * size).every(cell => cell === first)) {
            return first;
            }
        }

        // Vérifie les colonnes
        for (let i = 0; i < size; i++) {
            const first = board[i];
            if (first !== -1) {
            let win = true;
            for (let j = 0; j < size; j++) {
                if (board[j * size + i] !== first) {
                win = false;
                break;
                }
            }
            if (win) return first;
            }
        }

        // Vérifie la diagonale principale
        let firstMain = board[0];
        if (firstMain !== -1) {
            let winMain = true;
            for (let i = 0; i < size; i++) {
            if (board[i * size + i] !== firstMain) {
                winMain = false;
                break;
            }
            }
            if (winMain) return firstMain;
        }

        // Vérifie la diagonale secondaire
        let firstSec = board[size - 1];
        if (firstSec !== -1) {
            let winSec = true;
            for (let i = 0; i < size; i++) {
            if (board[i * size + (size - 1 - i)] !== firstSec) {
                winSec = false;
                break;
            }
            }
            if (winSec) return firstSec;
        }

        // Aucun gagnant
        return -1;
        };


    return(
        <View style={styles.container}>
            { 
            
            [...Array(size).keys()].map((rowIndex) => {
                return <View key={rowIndex} style={styles.rowContainer}> {renderRow(rowIndex)} </View>
            })}
            
        </View>
    )
}
    
    
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column'
    },

    rowContainer:{
        display: 'flex',
        flexDirection: 'row'
    }
})



export default Board