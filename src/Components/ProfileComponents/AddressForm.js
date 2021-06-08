import React from 'react'

function AddressForm() {
    return (
        <div>
            <input placeholder="Name" type="text" />
            <input placeholder="10 digit mobile number" type="number" />
            <input placeholder="Pincode" type="number" />
            <input placeholder="Address" type="text" />
            <input placeholder="City" type="text" />
            <label>Address Type
                <input type="radio" />
            </label>
        </div>
    )
}

export default AddressForm
