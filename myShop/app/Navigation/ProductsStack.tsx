import { NativeStackScreenProps, createNativeStackNavigator } from "@react-navigation/native-stack";
import Products from "../screens/Products";
import ProductDetails from "../screens/ProductDetails";

type ProductsStackParamList = {
    Products: undefined;
    ProductDetails: { id: number }
    // TODO: Cart Model
}

const ProductsStack = createNativeStackNavigator<ProductsStackParamList>();
export type ProductsPageProp = NativeStackScreenProps<ProductsStackParamList, 'Products'>;
export type ProductsDetailsPageProp = NativeStackScreenProps<ProductsStackParamList, 'ProductDetails'>;

const ProductsStackNav = () => {
    return (
        <ProductsStack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#0096FF'
            },
            headerTintColor: '#141414'
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
        </ProductsStack.Navigator>
    );
}

export default ProductsStackNav;