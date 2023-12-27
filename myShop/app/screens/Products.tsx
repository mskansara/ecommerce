import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ListRenderItem, Image } from "react-native";
import { Product, fetchProducts } from "../api/api";
import { ProductsPageProp } from "../Navigation/ProductsStack";
import { SafeAreaView } from "react-native-safe-area-context";

const Products = ({navigation}: ProductsPageProp) => {
    const [products, setProducts] = useState([]);
    useEffect (() => {
        const load =async () => {
            const data = await fetchProducts();
            setProducts(data);
            
        }
        load();
    }, []);

    const renderProductItem = ({item}) => {
        
        return (
            <TouchableOpacity 
                style={styles.productItem}
                onPress={()=>navigation.navigate('ProductDetails', {id: item.id})}
            >
                <Image style={styles.productImage} source={{uri: item.product_image}}/>
                <Text style={styles.productName}>{item.productName}</Text>
                <Text style={styles.productPrice}>${item.product_price}</Text>
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.container}>
            <FlatList 
                data={products} 
                renderItem={renderProductItem} 
                keyExtractor={(item) => item.id}
                numColumns={2}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2'
    },
    productItem: {
        flex:1,
        margin: 5,
        padding: 10,
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 8
    },
    productImage: {
        height: 100,
        width: 100,
        resizeMode: 'contain'
    },
    productName: {
        marginTop: 8,
        fontSize: 14,
        fontWeight: 'bold'
    },
    productPrice: {
        marginTop: 4,
        fontSize: 14,
        color: '#666'
    }
})

export default Products;