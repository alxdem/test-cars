'use client';

import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import {useState, useEffect} from 'react';
import AppSelectProps from '@/components/AppSelect/AppSelect.props';
import useRoute from '@/hooks/useRoute';

export default function AppSelect({label, id, items}: AppSelectProps) {
    const {orderValue, sortChange} = useRoute();

    const [sort, setSort] = useState('');

    useEffect(() => {
        if (!orderValue) {
            return;
        }

        setSort(orderValue);
    }, [orderValue]);

    const handleChange = (e: SelectChangeEvent) => {
        const value = e.target.value;
        sortChange(value);
        setSort(e.target.value);
    };

    return (
        <FormControl
            sx={{
                width: {
                    sm: 300,
                }
            }}
            fullWidth
        >
            <InputLabel id={id}>{label}</InputLabel>
            <Select
                labelId={id}
                id={id}
                value={sort}
                label={label}
                onChange={handleChange}
            >
                {items.map(item => (
                    <MenuItem
                        key={item.value}
                        value={item.value}
                    >
                        {item.text}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}