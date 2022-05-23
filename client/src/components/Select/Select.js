import React from 'react';
import './Select.scss';

const Select = ({ title, data, curentData, setCurrentData }) => {
    return (
        <div className="select">
            <p className="select__title">{title}</p>
            <select
                onChange={(e) => setCurrentData(e.target.value)}
                value={curentData}
                className="select__select">
                <option value={''}>Все</option>
                {data.map((item) => (
                    <option key={item.id} value={item.id}>
                        {item.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Select;
