import React, { useEffect, useState } from 'react';

const CurrencyList = ({ currencyArray }) => {

    return (<ul>
        {currencyArray.map((el, i) => <li key={el.id} className='currency_card'>
            <div className='flag'>
                {el.useInCountries.length > 0 ? <img src={el.useInCountries[0].flag} /> : null}
                {/* */}
            </div>
            <div className='country'>
                {el.useInCountries.length > 0 ? el.useInCountries[0].name : null}
            </div>
            <div className='currency'>
                {el.currency}
            </div>
            <div className='course'>
                {el.rate}
            </div>
        </li>)}
    </ul>)
}
export default CurrencyList