// Importation des modules nécessaires depuis React et React Native
import { Component } from "react"; // Importe la classe Component pour créer un composant basé sur une classe
import { Button, Text, View } from 'react-native'; // Importe les composants natifs pour l'interface utilisateur (Text, Button, View)

// Définition de la classe ComposantEtat qui hérite de Component
class ComposantEtat extends Component {
    // Constructeur de la classe, appelé lors de la création du composant
    constructor(props) {
        super(props); // Appelle le constructeur de la classe parent (Component) pour initialiser les props

        // Initialisation de l'état (state) du composant
        this.state = {
           counter: 0, // Propriété 'counter' initialisée à 0 pour suivre un compteur
        }

        // Binding explicite de la méthode moreCounter pour garantir que 'this' fait référence à l'instance du composant
        this.moreCounter = this.moreCounter.bind(this);
        // Le binding est nécessaire car, sans cela, 'this' dans moreCounter pourrait être undefined lors de l'appel via onPress
    }

    // Méthode pour incrémenter le compteur dans l'état
    moreCounter() {
        // Utilise setState pour mettre à jour l'état de manière réactive
        this.setState({
            counter: this.state.counter + 1 // Incrémente la valeur de counter de 1
        });
        // setState déclenche un nouveau rendu du composant avec la nouvelle valeur de l'état
    }

    // Méthode render, obligatoire pour définir l'interface utilisateur
    render() {
        // Accès à l'état pour afficher la valeur du compteur
        const counter1 = this.state.counter; // Stocke counter dans une variable locale pour lisibilité
        const { counter } = this.state; // Déstructuration de l'état pour un accès plus concis à counter

        // Retourne le JSX qui définit l'interface utilisateur
        return (
            <>
                {/* Fragment (<>) pour regrouper plusieurs éléments sans ajouter de nœud DOM supplémentaire */}
                {/* Affiche la valeur de counter directement depuis this.state */}
                <Text>{this.state.counter}</Text>
                {/* Affiche la valeur de counter1, obtenue via une variable intermédiaire */}
                <Text>{ counter1 }</Text>
                {/* Affiche la valeur de counter, obtenue par déstructuration */}
                <Text>{ counter }</Text>
                {/* Bouton qui appelle la méthode moreCounter lorsqu'il est pressé */}
                <Button title="Appuyer ici" onPress={this.moreCounter}></Button>
                {/* Grâce au binding dans le constructeur, this.moreCounter est correctement lié */}
                {/* Alternative commentée : binding implicite avec une fonction fléchée */}
                {/* <Button title="Appuyer ici" onPress={() => this.moreCounter()}></Button> */}
                {/* Le binding implicite avec () => this.moreCounter() évite le besoin de bind dans le constructeur */}
                {/* Cependant, cela crée une nouvelle fonction à chaque rendu, ce qui peut être moins performant */}
            </>
        );
    }
}

// Exportation du composant pour qu'il puisse être utilisé ailleurs dans l'application
export default ComposantEtat;