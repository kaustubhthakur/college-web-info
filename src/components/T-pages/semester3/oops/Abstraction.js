import React from 'react'

const Abstraction = () => {
  return (
    <div>
       <section className="what">
            <h1>What is Abstraction?</h1><br/>
            <h3>Inheritance means creating new classes based on existing ones. A class that inherits from another class can reuse the methods and fields of that class. In addition, you can add new fields and methods to your current class as well.</h3><br/>

        <h3>Data Abstraction may also be defined as the process of identifying only the required characteristics of an object ignoring the irrelevant details. The properties and behaviors of an object differentiate it from other objects of similar type and also help in classifying/grouping the objects.  </h3><br/>
        <h1>Abstract classes and Abstract methods</h1><br/>
        <h3>An abstract class is a class that is declared with an abstract keyword.</h3><br/>
        <h3>An abstract method is a method that is declared without implementation</h3><br/>
        <h3>An abstract class may or may not have all abstract methods. Some of them can be concrete methods</h3><br/>
        <h3>A method-defined abstract must always be redefined in the subclass, thus making overriding compulsory or making the subclass itself abstract.</h3><br/>
        <h3>Any class that contains one or more abstract methods must also be declared with an abstract keyword.</h3><br/>
    
        </section><br/>
      
    </div>
  )
}

export default Abstraction
