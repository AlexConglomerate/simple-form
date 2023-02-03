import React from 'react';

function FormButton({disabled, name}) {
    const buttonStyle = ' mx-1 rounded-lg px-3 py-2 mt-4 text-slate-700 font-medium '
        + (!disabled ? ' bg-green-100 hover:bg-green-200 cursor-pointer' : ' bg-slate-100 cursor-not-allowed ')
    return (
        <input
            value={name}
            className={buttonStyle}
            disabled={disabled}
            type={"submit"}
        />
    );
}

export default FormButton;