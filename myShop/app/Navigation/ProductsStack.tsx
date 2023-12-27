import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack";
import Products from "../screens/Products";
import ProductDetails from "../screens/ProductDetails";
import CartModal from "../screens/CartModal";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import useCartStore from "../state/cartStore";
import { useEffect, useState } from "react";
import { TouchableOpacity, View, Text, StyleSheet} from "react-native";
import { Ionicons } from '@expo/vector-icons';

type ProductsStackParamList = {
    Products: undefined;
    ProductDetails: { id: number };
    CartModal: undefined;
}

const ProductsStack = createNativeStackNavigator<ProductsStackParamList>();
export type ProductsPageProp = NativeStackScreenProps<ProductsStackParamList, 'Products'>;
export type ProductsDetailsPageProp = NativeStackScreenProps<ProductsStackParamList, 'ProductDetails'>;
export type StackNavigation = NavigationProp<ProductsStackParamList>;

const ProductsStackNav = () => {
    return (
        <ProductsStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#0096FF'
            },
            headerTintColor: '#141414',
        }}>
            <ProductsStack.Screen 
                name="Products" 
                component={Products} 
                options={{
                    headerTitle: "Online Shop",
                }}
            />

            <ProductsStack.Screen 
                name="ProductDetails" 
                component={ProductDetails} 
                options={{
                    headerTitle: "",
                }}
            />
            <ProductsStack.Screen 
                name="CartModal" 
                component={CartModal} 
                options={{
                    headerShown: false,
                    presentation: 'modal'
                }}
            />
        </ProductsStack.Navigator>
    );
}

export default ProductsStackNav;