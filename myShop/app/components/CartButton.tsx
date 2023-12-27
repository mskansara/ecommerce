import React, {useEffect, useState} from "react";
import useCartStore from "../state/cartStore";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { NavigationProp, useNavigation } from "@react-navigation/native";

type ProductsStackParamList = {
    CartModal: undefined;
}
export type StackNavigation = NavigationProp<ProductsStackParamList>;

const CartButton = () => {
    const navigation = useNavigation<StackNavigation>();
    const [ count, setCount ] = useState(0)
    const { products } = useCartStore((state) => ({
        products: state.products
    }));

    useEffect(() => {
        const count = products.reduce((prev, products) => prev + products.quantity, 0)
        setCount(count);
    },[products])

    return (
        <TouchableOpacity
            style={styles.floatingButton}
          onPress={() => {
            navigation.navigate("CartModal");
        }}>
          <View style={styles.countContainer}>
            <Text style={styles.countText}>{count}</Text>
          </View>
          
          <Ionicons name="cart" size={28} color={'#000'} />
        </TouchableOpacity>
      
    );
}

const styles = StyleSheet.create({
    floatingButton: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
        backgroundColor: '#0096FF',
        borderRadius: 50
    },
    countContainer: {
        position: 'absolute',
        zIndex: 1,
        bottom: -1,
        right: -5,
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    countText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
})
export default CartButton;