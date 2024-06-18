import React, { useState, useEffect } from 'react';
import { getProducts } from '../services/api';
import { Grid, TextField, MenuItem, Select, FormControl, InputLabel, Button } from '@mui/material';
import ProductCard from '../components/ProductCard';
import Pagination from '@mui/material/Pagination';

const AllProductsPage = () => {
    const [products, setProducts] = useState([]);
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState('price');
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);

    useEffect(() => {
        getProducts(filters, sort, page, limit).then(response => {
            setProducts(response.data);
        });
    }, [filters, sort, page, limit]);

    // Handle filter and sort changes
    const handleFilterChange = (e) => {
        setFilters({
            ...filters,
            [e.target.name]: e.target.value
        });
    };

    const handleSortChange = (e) => {
        setSort(e.target.value);
    };

    const handlePageChange = (event, value) => {
        setPage(value);
    };

    return (
        <>
            <Grid container spacing={2} sx={{ my: 2 }}>
                {/* Filters */}
                <Grid item xs={12} sm={6} md={3}>
                    <TextField label="Category" name="category" onChange={handleFilterChange} fullWidth />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <TextField label="Company" name="company" onChange={handleFilterChange} fullWidth />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <TextField label="Price Range" name="priceRange" onChange={handleFilterChange} fullWidth />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <TextField label="Availability" name="availability" onChange={handleFilterChange} fullWidth />
                </Grid>
                {/* Sort */}
                <Grid item xs={12} sm={6} md={3}>
                    <FormControl fullWidth>
                        <InputLabel>Sort By</InputLabel>
                        <Select value={sort} onChange={handleSortChange}>
                            <MenuItem value="price">Price</MenuItem>
                            <MenuItem value="rating">Rating</MenuItem>
                            <MenuItem value="discount">Discount</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                {products.map(product => (
                    <Grid item xs={12} sm={6} md={4} key={product.id}>
                        <ProductCard product={product} />
                    </Grid>
                ))}
            </Grid>
            <Pagination count={10} page={page} onChange={handlePageChange} sx={{ mt: 2 }} />
        </>
    );
};

export default AllProductsPage;
