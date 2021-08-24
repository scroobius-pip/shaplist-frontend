import React, { useState } from 'react'
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/airbnb.css";
import { majorScale, Pane, TextInputField } from 'evergreen-ui';

interface Props {
    value: number
    onChange: (value: number) => any
    // initialValue: number
    description?: string
    disabled?: boolean
    label?: string
}

const TimePicker = ({ value, onChange, description, label, disabled }: Props) => {

    return <>
        <Flatpickr
            defaultValue={value.toString()}
            options={{
                autoFillDefaultTime: false,
                mode: 'single',
                enableTime: true,
                altInput: true,
                altFormat: "F J Y at h:i K",
            }}
            data-enable-time
            value={value}
            onChange={(selectedDates) => {
                console.log(selectedDates)
                // @ts-ignore
                onChange(selectedDates[0])
            }}
            render={({ defaultValue, value, ...props }, ref) => {
                return <Pane >
                    <TextInputField
                        marginBottom={majorScale(1)}
                        description={description}
                        label={label}
                        disabled={disabled}
                        fontSize={10}
                        ref={ref}
                        defaultValue={defaultValue}
                        // @ts-ignore
                        value={value}
                    />
                </Pane>
            }}
        />

    </>
}

export default TimePicker