import React from 'react'
import {DataTable} from 'primereact/datatable';
import { Column } from 'primereact/column';
import { TableData } from '../../models/CryptoModel';
import { useSelector } from 'react-redux';
import { StoreType } from '../../store/store';

function Table() {
    const table : TableData[] = useSelector((state: StoreType) => state.table.table);

const chartTemplate = (rowData: TableData) => {
   return ( <img src = {rowData.chart} alt='no image' width={100} height={40} /> );
}

const volumeTemplate = (rowData: TableData) => {
    return (
        <div>
            <div className='d-flex justify-content-center' style={{fontSize: "17px"}}>
                ${rowData.volumeInDollar.toLocaleString()}
            </div>
            <div className='d-flex justify-content-center gap-1'>
                <span className='text-muted'>{rowData.volumeInAsset.toLocaleString()}</span>
                <span className="text-muted">{rowData.symbol}</span>
            </div>
        </div>
    )
}

const nameTemplate = (rowData: TableData) => {
    return (
        <div className='d-flex align-items-center gap-2'>
            <img src={rowData.icon} alt='' width={24} height={24} />
            <div>
                <strong>{rowData.name}</strong> <span className="text-muted">{rowData.symbol}</span>
            </div>

        </div>
    )
}

const priceTemplate = (rowData: TableData) => {  
    return `$${rowData.price.toLocaleString()}`;  
};  

const marketCapTemplate = (rowData: TableData) => {  
    return `$${rowData.marketCap.toLocaleString()}`;  
};  

const circulatingTemplate = (rowData: TableData) => {  
    return `$${rowData.marketCap.toLocaleString()}`;  
};  

const percentageChangeTemplate = (value: number) => {  
    const colorStyle = value > 0 ? { color: 'green' } : value < 0 ? { color: 'red' } : {};  
    return <span style={colorStyle}>{value}%</span>;  
  };  


  return (
    <div>
        <DataTable value={table} className='table' responsiveLayout='scroll'>
            <Column field='id' header="#"></Column>
            <Column header="Name" field='name' body={nameTemplate} sortable></Column>
            <Column field="price" header="Price" body={priceTemplate} sortable></Column>
            <Column field='hour1' header="1h %" body={(rowData) => percentageChangeTemplate(rowData.hour1)} sortable />  
            <Column field='hour24' header="24h %" body={(rowData) => percentageChangeTemplate(rowData.hour24)} sortable />  
            <Column field='day7' header="7d %" body={(rowData) => percentageChangeTemplate(rowData.day7)} sortable />  
            <Column field='marketCap' header="Market Cap" body={marketCapTemplate} sortable></Column>
            <Column header="Volume(24h)" body={volumeTemplate} field='volumeInDollar' sortable></Column>
            <Column field='circulatingSupply' header="Circulating Supply" body={circulatingTemplate} sortable></Column>
            <Column header="Last 7 Days" body={chartTemplate} />
        </DataTable>
    </div>
  )
}

export default Table