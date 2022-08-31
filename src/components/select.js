import React, { useState, useEffect } from 'react';
import { PaperSelect } from 'react-native-paper-select';

export default function Select({ handleSelect }) {
    const [currencies, setCurrencies] = useState({
        value: '',
        list: [
            { _id: '1', value: 'USD' },
            { _id: '2', value: 'EUR' },
            { _id: '3', value: 'GBP' },
            { _id: '4', value: 'CAD' },
            { _id: '5', value: 'JPY' },
            { _id: '6', value: 'AED' },
            { _id: '7', value: 'DKK' },
            { _id: '8', value: 'BRL' },
            { _id: '9', value: 'CNY' },
            { _id: '10', value: 'HKD' },
            { _id: '11', value: 'INR' },
            { _id: '12', value: 'MXN' },
            { _id: '13', value: 'UGX' },
            { _id: '14', value: 'PLN' },
            { _id: '15', value: 'PHP' },
            { _id: '16', value: 'CZK' },
            { _id: '17', value: 'HUF' },
            { _id: '18', value: 'BGN' },
            { _id: '19', value: 'RON' },
            { _id: '20', value: 'LKR' },
            { _id: '21', value: 'TRY' },
            { _id: '22', value: 'ZAR' },
            { _id: '23', value: 'RUB' },
        ],
        selectedList: [],
        error: '',
    });

    useEffect(() => {
        if(currencies.value === '') setCurrencies({...currencies, error: 'Select one to continue'}) ; 
        handleSelect(currencies)
    }, [currencies.value, currencies.error]);
    
return (
    <PaperSelect
    label="Select Currency"
    value={currencies.value}
    onSelection={(value) => {
        setCurrencies({
        ...currencies,
        value: value.text,
        selectedList: value.selectedList,
        error: '',
        });
    }}
    arrayList={[...currencies.list]}
    selectedArrayList={currencies.selectedList}
    errorText={currencies.error}
    multiEnable={false}
    hideSearchBox={true}
    />
)};


