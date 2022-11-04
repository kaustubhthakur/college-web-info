import React from 'react'
import './styles.css'
const Inheritance = () => {
  return (
    <div>
        <section className="what">
            <h1>What is Inheritance?</h1><br/>
            <h3>Inheritance means creating new classes based on existing ones. A class that inherits from another class can reuse the methods and fields of that class. In addition, you can add new fields and methods to your current class as well.</h3><br/>
            <h1>Terminologies of Inheritance</h1><br/>
        <h3><span className="text">Class:- </span>class is a set of objects which shares common characteristics/ behavior and common properties/ attributes. Class is not a real-world entity. It is just a template or blueprint or prototype from which objects are created.</h3><br/>
       
        
        <h3><span className="text">Super Class/Parent Class :-</span> The class whose features are inherited is known as a superclass(or a base class or a parent class).</h3><br/>
       
        <h3><span className="text">Sub Class/Child Class:-</span>The class that inherits the other class is known as a subclass(or a derived class, extended class, or child class). The subclass can add its own fields and methods in addition to the superclass fields and methods</h3><br/>
        <h3><span className="text">Reusability:-</span> Inheritance supports the concept of “reusability”, i.e. when we want to create a new class and there is already a class that includes some of the code that we want, we can derive our new class from the existing class. By doing this, we are reusing the fields and methods of the existing class. </h3><br/>
       
        </section><br/>
        <section className="what">
            <h1>How to Use inheritance in Java?</h1><br/>
           <h3 className> The <strong>extend</strong> Keyword is used for inheritance in java. Using the extends keyword indicates you are derived from an existing class. In other words, “extends” refers to increased functionality  </h3><br/>
        <br/>
        <h1>Syntax</h1><br/>
        <h2 className="syntax">
        class derived-class extends base-class  <br/>

   (<br/>//methods and fields  <br/>
   )
        </h2><br/>

         <h2> Click <a href="https://www.geeksforgeeks.org/inheritance-in-java/#:~:text=In%20Java%2C%20inheritance%20means%20creating,your%20current%20class%20as%20well.">here</a> for example and source code
        </h2>
        </section><br/>
       
    </div>
  )
}

export default Inheritance