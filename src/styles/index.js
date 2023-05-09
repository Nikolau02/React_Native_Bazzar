/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import { StyleSheet, Dimensions } from "react-native";
const SLIDER_WIDTH = Dimensions.get('window').width;
const SLIDER_HEIGHT = Dimensions.get('window').height;
const ITEM_WIDTH = SLIDER_WIDTH * 0.88;
const heigtImg = ITEM_WIDTH * 0.7;
let widthDetalhes = null;
let heightDetalhes = null;

if (SLIDER_HEIGHT > SLIDER_WIDTH) {
    widthDetalhes = SLIDER_WIDTH * 0.5;
    heightDetalhes = SLIDER_HEIGHT * 0.5;
} else if (SLIDER_HEIGHT < SLIDER_WIDTH) {
    widthDetalhes = SLIDER_WIDTH * 0.25;
    heightDetalhes = SLIDER_HEIGHT * 0.7;
}

const header = StyleSheet.create({
    viewHeader: {
        backgroundColor: '#3A3D3D',
        height: 40,
        justifyContent: 'center',
    },
    textHeader: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff',
        marginLeft: 15,
    },
});

const sobre = StyleSheet.create({
    viewPrincipal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerTitle: {
        backgroundColor: '#000000',
        opacity: 0.7,
        height: 70,
        width: 300,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 40,
    },
    containerText: {
        color: '#ffffff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    viewMais: {
        width: ITEM_WIDTH,
        maxWidth: 500,
        marginBottom: 20,
        backgroundColor: '#CFD8DC',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    image: {
        flex: 1,
        justifyContent: 'flex-start',
        borderRadius: 10,
        marginBottom: 20,
        width: SLIDER_WIDTH,
        height: heigtImg,
    },
    image2: {
        flex: 1,
        justifyContent: 'flex-start',
        borderRadius: 10,
        marginBottom: 20,
        width: SLIDER_WIDTH,
        height: heigtImg,
        maxHeight: 400,
    },
    image3: {
        flex: 1,
        margin: 5,
        minWidth: 50,
    },
    viewImgsPags: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    titulo: {
        fontSize: 20,
    },
    textoComum: {
        fontSize: 14,
        margin: 10,
    },
});

const local = StyleSheet.create({
    viewPrincipal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewLocal: {
        width: ITEM_WIDTH,
        maxWidth: 500,
        height: 80,
        marginBottom: 0,
        backgroundColor: '#CFD8DC',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        flex: 1,
        justifyContent: 'flex-start',
        width: ITEM_WIDTH,
        maxWidth: 500,
        height: heigtImg,
        maxHeight: 330,
    },
    texto: {
        fontSize: 20,
        margin: 10,
    },
});

const footer = StyleSheet.create({
    viewFooter: {
        flex: 1,
        marginTop: 15,
        marginBottom: 0,
    },
    viewRedes2: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    texto: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#3A3D3D',
        alignSelf: 'center',
    },
    viewPagamentos: {
        flex: 1,
    },
    imagesFooter: {
        width: 80,
        height: 80,
        margin: 25,
    },
    imagesCartoes: {
        margin: 5,
    },
});

const carousel = StyleSheet.create({
    container: {
        //flex: 1,
        marginTop: 10,
        marginBottom: 30,
        padding: 15,
    },
    image: {
        flex: 1,
        justifyContent: 'flex-start',
        width: ITEM_WIDTH,
    },
    titulo: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    subtitulo: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    botao: {
        backgroundColor: '#DB696A',
        height: 35,
        width: 150,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 25,
        marginTop: 80,
        marginBottom: 10,
    },
    textBtn: {
        color: '#ffffff',
        fontSize: 14,
    },
    containerTitle: {
        backgroundColor: '#000000',
        opacity: 0.7,
        height: 70,
        width: 150,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginLeft: 20,
    },
});

const detalhes = StyleSheet.create({
    viewContainer: {
        flex: 1,
    },
    images: {
        width: widthDetalhes,
        maxWidth: 270,
        borderRadius: 5,
        height: heightDetalhes,
        maxHeight: 550,
        alignSelf: 'center',
    },
    titles: {
        fontSize: 20,
        margin: 10,
        alignSelf: 'center',
    },
});

const produtos = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    cardProdutos: {
        justifyContent: 'center',
        margin: 25,
        border: 1,
        borderColor: '#3A3D3D',
    },
    image: {
        flex: 1,
        height: 125,
        width: 85,
    },
    produtosText: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#000000',
    },
    titulo: {
        color: '#3A3D3D',
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10,
    },
    btnDetalhes: {
        backgroundColor: "#2b67ff",
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnDetalhes2: {
        backgroundColor: "#952bff",
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText: {
        color: "#ffffff",
        fontWeight: 'bold',
    },
});

export { header, sobre, local, footer, carousel, produtos, detalhes };
