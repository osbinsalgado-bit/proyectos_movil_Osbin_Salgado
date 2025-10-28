import { View, TextInput, StyleSheet, Text, TouchableOpacity } from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { useState } from "react";

type Props = {
  required?: boolean;
  type?: "text" | "email" | "password" | "number";
  value: string;
  placeholder: string;
  onChange: (text: string) => void;
};

export default function CustomInput({type = "email", required, value, placeholder,  onChange,}: Props) {

  const [isSecureText, setIsSecureText] = useState(type === "password");
  const [emailError, setEmailError] = useState("");
  const [error, setError] = useState("");

  const icon =
    type === "email" ? "email" : type === "password" ? "lock" : "text-fields";

const validateInput = (text: string) => {
  onChange(text);

  // Si el campo es requerido y está vacío
  if (required && text.trim() === "") {
    setError("El campo es obligatorio");
    setEmailError("");
    return;
  } else {
    setError("");
  }

  // Validación para email
  if (type === "email") {
    const validDomains = ["@gmail.com"];
    const isValid = validDomains.some((domain) => text.endsWith(domain));
    setEmailError(
      text.length > 0 && !isValid ? "Correo inválido" : ""
    );
  }
};


  return (
    <View>
      <View style={styles.inputContainer}>
        <MaterialIcons name={icon as any} size={20} color="#000" />
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={validateInput}
          secureTextEntry={isSecureText}
          style={styles.input}
        />

        {type === "password" && (
          <TouchableOpacity
            style={styles.eyeButton}
            onPress={() => setIsSecureText(!isSecureText)}
          >
            <Ionicons
              name={isSecureText ? "eye-off" : "eye"}
              size={22}
              color="#333"
            />
          </TouchableOpacity>
        )}
      </View>

 
    {error.length > 0 && <Text style={styles.errorText}>{error}</Text>}
    {emailError.length > 0 && <Text style={styles.errorText}>{emailError}</Text>}

    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#111010ff",
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: "#f9f9f9",
    width: "90%",
    justifyContent: "space-between",
  },

  input: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },

  eyeButton: {
    padding: 5,
  },

  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 4,
    textAlign: "left",
    width: "90%",
  },
});
