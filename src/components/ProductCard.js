// src/components/ProductCard.js
import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => (
    <Card>
        <CardMedia
            component="img"
            height="140"
            image={product.image || 'https://via.placeholder.com/140'}
            alt={product.name}
        />
        <CardContent>
            <Typography variant="h5" component="div">
                {product.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Company: {product.company}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Category: {product.category}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Price: ${product.price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Rating: {product.rating}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Discount: {product.discount}%
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Availability: {product.availability ? 'In Stock' : 'Out of Stock'}
            </Typography>
            <Link to={`/products/${product.id}`} style={{ textDecoration: 'none' }}>
                <Button size="small">Learn More</Button>
            </Link>
        </CardContent>
    </Card>
);

export default ProductCard;
