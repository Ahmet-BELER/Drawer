import { StyleSheet , Dimensions} from "react-native";

    export default StyleSheet.create({
    
        card: {
            margin: 5,
            width: Dimensions.get("window").width / 2.2,
            flex: 1,
            backgroundColor: "#ffff",
            justifyContent: "space-between",
            borderRadius: 20,
          },
          imageContainer: {
            flex: 1,
            alignItems: "center",
            justifyContent: "center",    
          },
        
          descriptionConatiner: {
            justifyContent: "center",
           
            marginHorizontal: 10,
          },
          image: {
            width: Dimensions.get("window").width / 2.5,
            height: Dimensions.get("window").height / 4,
            borderRadius: 5,
        
           
          
          },
          packageName: {
            fontWeight: "bold",
            marginTop:5,
            color:"#391326",
           
          },
          name: { 
            font:10,
            fontWeight:'bold',
            color:"black"
                  
          },
          ratingValue: {  
            color:"black"
        },
        ratingCount: {   color:"black",
          fontSize: 12
         },

          description:{ 
   flexDirection: "row"
    
          }
        });
/* 
    header: {
        fontSize: 10,

    }
    sperator: {
        borderWidth: 0.5,
        borderColor: '#e0e0e0',

    }
    SearchContainer: {

        flexDirection:"row",
        justifyContent:"space-between",
        padding:10,
        paddingTop:0,
     
    }
    icon:{
        padding:10,
        paddingBottom:0,
        
    }

}) */