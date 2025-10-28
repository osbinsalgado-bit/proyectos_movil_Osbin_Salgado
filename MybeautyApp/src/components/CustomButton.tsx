import { Button, Text, TouchableOpacity, View, StyleSheet} from "react-native";

type Props = {
    title: string;
    onPress: () => void;
    variant?: "primary" | "secundary" | "tertiary";
};


export default function CustomButton({title, onPress, variant = "primary"}: Props){
    const style = getStyles(variant);

    return(
        <View>
            <TouchableOpacity style={style.button} onPress={onPress}>
                <Text style={style.buttonStyle}> 
                    {title} 
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const getStyles = (variant: "primary" | "secundary" | "tertiary") => 
    StyleSheet.create(
        {
        button:{
            borderColor: "#000",
            borderRadius: 10,
            padding: 12,
            backgroundColor: variant === "primary" ? "#000":
                            variant === "secundary" ? "#c4a2a2ff":
                            "#ffff",
            alignItems: "center",
            
        },

        buttonStyle: {
            color: variant === "primary" ? "#ffff":
                            variant === "secundary" ? "#000":
                            "#d76214ff",
            fontWeight: "bold",
            fontSize: 16,
        }

    }
    )