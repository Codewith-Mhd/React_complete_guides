import "./styles.css"
import React, {Component} from "react"
import Radium, {StyleRoot} from "radium"
import Person from "././components/Person/Person"
import UserInput from "././components/UserInput/UserInput"
import UserOutput from "././components/UserOutput/UserOutput"
import Userinput from "././components/Input/Input"
import Validation from "././components/Validation/Validation"
import Char from "././components/Char/Char"

class App extends Component {
  state = {
    persons: [
      {id: "shs", name: "Max", age: 25},
      {id: "sks", name: "Menu", age: 45},
      {id: "ejs", name: "Aziz", age: 21}
    ],
    username: "Super Max",
    showPersons: false,
    userInput: ""
  }

  inputchangeHandler = (event) => {
    this.setState({userInput: event.target.value})
  }
  switchNameHandler = (newName) => {
    //console.log("was clicked");
    // Don't do this this.state.persons.name="Maximilian"
    this.setState({
      persons: [
        {name: newName, age: 34},
        {name: "Stefanie", age: 54}
      ]
    })
  }

  nameChangeHandler = (event, id) => {
    this.setState({
      persons: [
        {name: event.target.value, age: 46},
        {name: "Ehsan", age: 54}
      ]
    })
  }

  usernameChangeHandler = (event) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id
    })
    const person = {
      ...this.state.persons[findIndex]
    }
    person.name = event.target.value
    const persons = [...this.state.persons]
    persons[personIndex] = person
    this.setState({persons: persons})
  }

  // show the persons when clicked on this btn
  toggleHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({showPersons: !doesShow})
  }

  // delete a spacific person
  deletepersonHandler = (personId) => {
    // get all person a copy a person by slice method
    //const persons = this.state.persons.slice();
    // copy a person by sprid ....
    const persons = [...this.state.persons]
    // delete a person
    persons.splice(personId, 1)
    this.setState({persons: persons})
  }

  deletecharHandler = (index) => {
    const text = this.state.userInput.split("")
    text.splice(index, 1)
    const updateText = text.join("")
    this.setState({userInput: updateText})
  }

  render() {
    const styles = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      borderRadius: "6px",
      // it's a radium pkg for sedo selctor and media query
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black"
      }
    }

    let persons = null
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={person.id}
                name={person.name}
                age={person.age}
                changed={(event) => this.nameChangeHandler(event, person.id)}
                clicked={() => this.switchNameHandler("Aziz")}
                onDelete={() => this.deletepersonHandler(index)}
              />
            )
          })}
        </div>
      )
      styles.background = "lightgray"
      styles[":hover"] = {
        background: "lightgreen"
      }
    }

    let classes = []
    if (this.state.persons.length <= 2) {
      classes.push("red") // classes =["red"]
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold") // classes =["bold","red"]
    }

    const charList = this.state.userInput.split("").map((ch, index) => {
      return (
        <Char character={ch} deleted={() => this.deletecharHandler(index)} />
      )
    })

    return (
      <StyleRoot>
        <div className="App">
          <p className={classes.join(" ")}>This is really working!</p>
          <button style={styles} onClick={this.toggleHandler}>
            Switch Name
          </button>
          {persons}

          <h2>User Input below</h2>
          <UserInput
            changed={this.usernameChangeHandler}
            currentName={this.state.username}
          />
          <UserOutput userName={this.state.username} />
          <UserOutput userName={this.state.username} />

          <Userinput changeInput={this.inputchangeHandler} />
          <p>{this.state.userInput}</p>
          <Validation inputLength={this.state.userInput.length} />
          {charList}
          <h2>Start editing to see some magic happen!</h2>
        </div>
      </StyleRoot>
    )
  }
}

export default Radium(App)
