import { StyleSheet } from "react-native"

const globalStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#373A40',
        paddingHorizontal: 20,
        paddingTop: 42,
    },
    text: {
        color: '#fff',

    },
    row: {
        flexDirection: 'row',

    },
    section: {
        marginTop: 5,
       
        marginBottom: 10,
      
    },
    inputContainer: {
        backgroundColor: '#6666',
        padding: 10,
        borderRadius: 8,
    },
    cardStyle: {
        backgroundColor: '#6666',
        padding: 10,
        borderRadius: 8,
    },
    tag: {
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 20,
        backgroundColor: '#4B70F5'
    },
    card: {
       
        borderRadius: 12
    },
    editTopIcon: {
        width: 40,
        height: 40,
        borderRadius: 100,
        backgroundColor: 'rgba(0,0,0,0.2)',
        justifyContent: 'center',
        alignItems:'center',
        marginBottom: 15,
    },
    
   
})

export default globalStyle
