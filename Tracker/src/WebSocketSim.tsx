import { useEffect } from 'react'
import { useDispatch, UseDispatch, useSelector } from 'react-redux'
import { StoreType } from './store/store';
import { updateTableRow } from './store/features/tableSlice';

function getRandomBetween(min: number,max:number){
    return Math.random() * (max - min) + min;
}

function getRandomPercentage(oldValue: number){
    //change of +- 5%
    return +(oldValue + (Math.random() * 10 - 5)).toFixed(2);
}

function getRandomVolume(oldVolume: number) {  
    //change of +- 5% 
    return Math.max(0, Math.round(oldVolume * (1 + (Math.random() * 0.1 - 0.05))));  
}  

const WebSocketSim = () => {
    const dispatch = useDispatch();
    const table = useSelector((state: StoreType) => state.table.table);

    useEffect(() => {
        const internval = setInterval(() => {
            const index = Math.floor(Math.random() * table.length);
            const coin = table[index];
            if(!coin) return;

            const newPrice = +(coin.price * (1 +(Math.random() * 0.02 - 0.01))).toFixed(2);
            const newHour1 = getRandomPercentage(coin.hour1);
            const newHour24 = getRandomPercentage(coin.hour24);
            const newDay7 = getRandomPercentage(coin.day7);
            const newVolumeInDollar = getRandomVolume(coin.volumeInDollar);
            const newVolumeInAsset = getRandomVolume(coin.volumeInAsset);

            dispatch(updateTableRow({
                id: coin.id,
                price: newPrice,  
                hour1: newHour1,  
                hour24: newHour24,  
                day7: newDay7,  
                volumeInDollar: newVolumeInDollar,  
                volumeInAsset: newVolumeInAsset
            }));
        },getRandomBetween(2000,4000));

        return () => clearInterval(internval);
    },[dispatch,table]);
    return null;
}

export default WebSocketSim;