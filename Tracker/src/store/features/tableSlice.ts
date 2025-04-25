import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit"
import { TableData } from "../../models/CryptoModel";

interface initState {
    table: TableData[],
}

interface UpdatePayload{
    id: number,
    price: number,
    hour1: number,
    hour24: number,
    day7: number,
    volumeInDollar: number,
    volumeInAsset: number;
}

const initialState: initState = {
    table: [
        {
        id: 1,
        icon: "/icons/bitcoin.png",
        name: "Bitcoin",
        symbol: "BTC",
        price: 93759.48,
        hour1: 0.43,
        hour24: 0.93,
        day7: 11.11,
        marketCap: 1861618902186,
        volumeInDollar: 43874950947,
        volumeInAsset: 467810,
        circulatingSupply: 19850000,
        chart: "/img1.jpg"
        },
        {
        id: 2,
        icon: "/icons/ethereum.png",
        name: "Ethereum",
        symbol: "ETH",
        price: 1802.46,
        hour1: 0.60,
        hour24: 3.21,
        day7: 13.68,
        marketCap: 217581279327,
        volumeInDollar: 23547469307,
        volumeInAsset: 13050000,
        circulatingSupply: 120710000,
        chart: "/img2.jpg"
        },
        {
        id: 3,
        icon: "/icons/money.png",
        name: "Tether",
        symbol: "USDT",
        price: 1.0,
        hour1: 0.00,
        hour24: 0.00,
        day7: 0.04,
        marketCap: 145320022085,
        volumeInDollar: 92288882007,
        volumeInAsset: 92250000,
        circulatingSupply: 145270000,
        chart: "/img3.jpg"
        },
        {
        id: 4,
        icon: "/icons/xrp.png",
        name: "XRP",
        symbol: "XRP",
        price: 2.22,
        hour1: 0.46,
        hour24: 0.54,
        day7: 6.18,
        marketCap: 130073814966,
        volumeInDollar: 5131481491,
        volumeInAsset: 2300000000,
        circulatingSupply: 58390000000,
        chart: "/img4.jpg"
        },
        {
        id: 5,
        icon: "/icons/bnb.png",
        name: "BNB",
        symbol: "BNB",
        price: 606.65,
        hour1: 0.09,
        hour24: -1.20,
        day7: 3.73,
        marketCap: 85471956947,
        volumeInDollar: 1874281784,
        volumeInAsset: 3080000,
        circulatingSupply: 140890000,
        chart: "/img5.jpg"
        },
      
]
}



export const tableSlice: Slice = createSlice({
    name: 'table',
    initialState,
    reducers: {
        updateTableRow: (state,action: PayloadAction<UpdatePayload>) => {
            const temp: UpdatePayload = action.payload;
            const id = state.table.findIndex((t : TableData) => t.id === temp.id);
            if (id !== -1) {  
                if (temp.price !== undefined) state.table[id].price = temp.price;  
                if (temp.hour1 !== undefined) state.table[id].hour1 = temp.hour1;  
                if (temp.hour24 !== undefined) state.table[id].hour24 = temp.hour24;  
                if (temp.day7 !== undefined) state.table[id].day7 = temp.day7;  
                if (temp.volumeInDollar !== undefined) state.table[id].volumeInDollar = temp.volumeInDollar;  
                if (temp.volumeInAsset !== undefined) state.table[id].volumeInAsset = temp.volumeInAsset;  
              } 
        }
    }
});

export const {updateTableRow} = tableSlice.actions;

export default tableSlice.reducer;