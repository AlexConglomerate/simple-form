import React from 'react';

function FormInput({label, errors, register, keyName, rules}) {
    return (
        <div className={'p-2'}>
            <label className="block text-gray-700 font-medium mb-2">
                {label}
            </label>
            <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                {...register(keyName, rules)}
            />
            <div className={'text-red-800'}>{errors?.[keyName] && (errors?.[keyName]?.message || 'Error')}</div>
        </div>
    )
}

export default FormInput;