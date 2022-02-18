import React from 'react';

const Controls = ({ search, sort, onSearch, onSort }) => (
    <>
        <div className='input-group mb-3' style={{ maxWidth: '300px' }}>
            <input type='text' className='form-control' placeholder='Search...' value={search} onChange={onSearch}/>
            <button className='btn btn-outline-secondary' type='button'><i className='bi-search'/></button>
        </div>

        <ul className='list-inline'>
            <li className='form-check form-check-inline'>Сортировать:</li>
            <li className='form-check form-check-inline'>
                <label className='form-check-label'>
                    <input
                        className='form-check-input'
                        type='radio'
                        name='sort'
                        value='name'
                        checked={sort === 'name'}
                        onChange={onSort}
                    />
                    name
                </label>
            </li>
            <li className='form-check form-check-inline'>
                <label className='form-check-label'>
                    <input
                        className='form-check-input'
                        type='radio'
                        name='sort'
                        value='price'
                        checked={sort === 'price'}
                        onChange={onSort}
                    />
                    price
                </label>
            </li>
            <li className='list-inline-item'>
                <button type='button' className='btn btn-link'>Reset</button>
            </li>
        </ul>

        <div className='input-group mb-3 mt-3' style={{ maxWidth: '300px' }}>
            <input type='text' className='form-control' placeholder='Amount coins...' />
            <button className='btn btn-outline-warning' type='button'>Fetch</button>
        </div>
    </>
);

export default Controls;
