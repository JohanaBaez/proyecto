

// import React, { useState } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   TouchableOpacity,
//   Modal,
//   TextInput,
//   Linking,
// } from "react-native";




// const UserProfile = ({
//   name,
//   location,
//   description,   
//   imageUrl,
//   links,
// }: {
//   name: string;
//   location: string;
//   description: string;
//   imageUrl: string;
//   links: { url: string; text: string }[];
// }) => {
//   const [modalVisible, setModalVisible] = useState(false);
//   const [newLink, setNewLink] = useState({ url: "", text: "" });
  
 
  
    

//   const handleAddLinkPress = () => {
//     setModalVisible(true);
//   };

//   const handleSaveLinkPress = () => {
//     if (newLink.url && newLink.text) {
//       links.push({ url: newLink.url, text: newLink.text });
//       setModalVisible(false);
//       setNewLink({ url: "", text: "" });
//     }
//   };

//   const handleCancelLinkPress = () => {
//     setModalVisible(false);
//     setNewLink({ url: "", text: "" });
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.profileWrapper}>
//         <View style={styles.profileContainer}>
//           <View style={styles.imageContainer}>
//             <Image source={{ uri: imageUrl }} style={styles.profileImage} />
//           </View>
//           <View style={styles.profileTextContainer}>
//             <Text style={styles.nameText}>{name}</Text>
//             <Text style={styles.locationText}>{location}</Text>
//             <Text style={styles.descriptionText}>{description}</Text>
//           </View>
//           <View style={styles.linksContainer}>
//             {links.map((link, index) => (
//               <TouchableOpacity
//                 key={index}
//                 style={styles.linkButton}
//                 onPress={() => Linking.openURL(link.url)}
//               >
//                 <Text style={styles.linkText}>{link.text}</Text>
//               </TouchableOpacity>
//             ))}
//             <TouchableOpacity style={styles.addLinkButton} onPress={handleAddLinkPress}>
//               <Text style={styles.addLinkText}>+ New Link</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => {
//           setModalVisible(!modalVisible);
//         }}
//       >
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             <Text style={styles.modalTitle}>Add a new link</Text>
//             <TextInput
//               style={styles.input}
//               placeholder="URL"
//               value={newLink.url}
//               onChangeText={(text) => setNewLink({ ...newLink, url: text })}
//             />
//             <TextInput
//               style={styles.input}
//               placeholder="Text"
//               value={newLink.text}
//               onChangeText={(text) => setNewLink({ ...newLink, text: text })}
//             />
//             <View style={styles.buttonContainer}><TouchableOpacity style={styles.cancelButton} onPress={handleCancelLinkPress}>
//                 <Text style={styles.cancelText}>Cancel</Text>
//               </TouchableOpacity>
//               <TouchableOpacity style={styles.saveButton} onPress={handleSaveLinkPress}>
//                 <Text style={styles.saveText}>Save</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#000000",
//     alignItems: "center",
//     justifyContent: "center",
//     padding: 40,
//     width: 500,
//   },
//   profileWrapper: {
//     flexDirection: "column",
//     backgroundColor: "#1A1A1A",
//     borderRadius: 10,
//     alignItems: "center",
//     paddingHorizontal: 6,
//     paddingVertical: 30,
//     width: "80%",
//     maxWidth: 500,
//   },
//   profileContainer: {
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: -5,
//   },
//   imageContainer: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     overflow: "hidden",
//     marginRight: 20,
//   },
//   profileImage: {
//     width: "100%",
//     height: "100%",
//   },
//   profileTextContainer: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: -150,
//     maxWidth: 250,
//   },
//   nameText: {
//     fontSize: 35,
//     fontWeight: "bold",
//     color: "#FFFFFF",
//   },
//   locationText: {
//     fontSize: 15,
//     color: "#FFFF00",
//   },
//   descriptionText: {
//     fontSize: 15,
//     color: "#FFFFFF",
//     marginTop: 5,
//   },
//   linksContainer: {
//     marginTop: -20,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   linkButton: {
//     backgroundColor: "#333333",
//     paddingVertical: 10,
//     paddingHorizontal: 55,
//     borderRadius: 5,
//     marginBottom: 10,
//     height: 45,
//     width: 300, // Establece el ancho aquí
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   linkText: {
//     fontSize: 20,
//     color: "#FFFFFF",
//   },
//   addLinkButton: {
//     backgroundColor: "#007AFF",
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//     marginBottom: 15,
//     height: 40,
//     width: 300, // Establece el ancho aquí
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   addLinkText: {
//     fontSize: 20,
//     color: "#fff",
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: "flex-end",
//     alignItems: "center",
//     backgroundColor: "rgba(0, 0, 0, 0.5)",
//   },
//   modalContent: {
//     backgroundColor: "#fff",
//     padding: 20,
//     borderRadius: 10,
//     width: "100%",
//     maxWidth: 300,
//   },
//   modalTitle: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginBottom: 20,
//   },
//   input: {
//     height: 40,
//     borderColor: "#ccc",
//     borderWidth: 1,
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     marginBottom: 10,
//     width: "100%",
//   },
//   buttonContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginTop: 10,
//   },
//   cancelButton: {
//     backgroundColor: "#f2f2f2",
//     paddingVertical: 8,
//     paddingHorizontal: 16,
//     borderRadius: 20,
//   },
//   cancelText: {
//     fontSize: 16,
//     color: "#333",
//   },
//   saveButton: {
//     backgroundColor: "#007AFF",
//     paddingVertical: 8,
//     paddingHorizontal: 16,
//     borderRadius: 20,
//   },
//   saveText:{fontSize: 16,
//     color: "#fff",
//   },

  
// });



// export default UserProfile;




import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  TextInput,
  Linking,
  ScrollView,
} from "react-native";

const UserProfile = ({
  name,
  location,
  description,
  imageUrl,
  links,
}: {
  name: string;
  location: string;
  description: string;
  imageUrl: string;
  links: { url: string; text: string }[];
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [newLink, setNewLink] = useState({ url: "", text: "" });

  const handleAddLinkPress = () => {
    setModalVisible(true);
  };

  const handleSaveLinkPress = () => {
    if (newLink.url && newLink.text) {
      links.push({ url: newLink.url, text: newLink.text });
      console.log("Nuevo enlace agregado:");
      console.log("URL:", newLink.url);
      console.log("Texto:", newLink.text);
      setModalVisible(false);
      setNewLink({ url: "", text: "" });
    }
  };

  const handleCancelLinkPress = () => {
    setModalVisible(false);
    setNewLink({ url: "", text: "" });
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileWrapper}>
        <View style={styles.profileContainer}>
          <View style={styles.imageContainer}>
            <Image source={{ uri: imageUrl }} style={styles.profileImage} />
          </View>
          <View style={styles.profileTextContainer}>
            <Text style={styles.nameText}>{name}</Text>
            <Text style={styles.locationText}>{location}</Text>
            <Text style={styles.descriptionText}>{description}</Text>
          </View>
         <ScrollView style={styles.scrollView}>
         <View style={styles.linksContainer}>
            {links.map((link, index) => (
              <TouchableOpacity
                key={index}
                style={styles.linkButton}
                onPress={() => Linking.openURL(link.url)}
              >
                <Text style={styles.linkText}>{link.text}</Text>
              </TouchableOpacity>
            ))}
            
          </View>   
         </ScrollView>
         <TouchableOpacity style={styles.addLinkButton} onPress={handleAddLinkPress}>
              <Text style={styles.addLinkText}>+ New Link</Text>
            </TouchableOpacity>
          
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add a new link</Text>
            <TextInput
              style={styles.input}
              placeholder="URL"
              value={newLink.url}
              onChangeText={(text) => setNewLink({ ...newLink, url: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Text"
              value={newLink.text}
              onChangeText={(text) => setNewLink({ ...newLink, text: text })}
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.cancelButton} onPress={handleCancelLinkPress}>
                <Text style={styles.cancelText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.saveButton} onPress={handleSaveLinkPress}>
                <Text style={styles.saveText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
    padding: 40,
    width: 500,
  },
  scrollView: {
    flex: 1,
    width: "100%",
    marginTop: 20, // Agregamos un margen superior para separarlo visualmente del perfil de usuario
  },
  profileWrapper: {
    flexDirection: "column",
    backgroundColor: "#1A1A1A",
    borderRadius: 10,
    alignItems: "center",
    paddingHorizontal: 6,
    paddingVertical: 30,
    width: "80%",
    maxWidth: 500,
  },
  profileContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -5,
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: "hidden",
    marginRight: 20,
  },
  profileImage: {
    width: "100%",
    height: "100%",
  },
  profileTextContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -150,
    maxWidth: 250,
  },
  nameText: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  locationText: {
    fontSize: 15,
    color: "#FFFF00",
  },
  descriptionText: {
    fontSize: 15,
    color: "#FFFFFF",
    marginTop: 5,
  },
  linksContainer: {
    marginTop: -20,
    alignItems: "center",
    justifyContent: "center",
  },
  linkButton: {
    backgroundColor: "#333333",
    paddingVertical: 10,
    paddingHorizontal: 55,
    borderRadius: 5,
    marginBottom: 10,
    height: 45,
    width: 300,
    alignItems: "center",
    justifyContent: "center",
  },
  linkText: {
    fontSize: 20,
    color: "#FFFFFF",
  },
  addLinkButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 15,
    height: 40,
    width: 300,
    alignItems: "center",
    justifyContent: "center",
  },
  addLinkText: {
    fontSize: 20,
    color: "#fff",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "100%",
    maxWidth: 300,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    width: "100%",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  cancelButton: {
    backgroundColor: "#f2f2f2",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  cancelText: {
    fontSize: 16,
    color: "#333",
  },
  saveButton: {
    backgroundColor: "#007AFF",
    paddingVertical: 8,
    paddingHorizontal

: 16,
    borderRadius: 20,
  },
  saveText: {
    fontSize: 16,
    color: "#fff",
  },
});

export default UserProfile;

