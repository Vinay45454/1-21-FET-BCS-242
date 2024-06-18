import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../services/api';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';

const ProductDetailPage = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        getProductById(productId).then(response => {
            setProduct(response.data);
        });
    }, [productId]);

    if (!product) {
        return <Typography>Loading...</Typography>;
    }

    return (
        <Card>
            <CardMedia
                component="img"
                height="200"
                image={product.image || 'https://via.placeholder.com/200'}
                alt={product.name}
            />
            <CardContent>
                <Typography variant="h4" component="div">
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
            </CardContent>
        </Card>
    );
};

export default ProductDetailPage;
