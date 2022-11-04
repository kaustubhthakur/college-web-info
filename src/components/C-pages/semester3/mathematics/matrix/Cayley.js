import React from 'react'
import './styles.css'
const Cayley = () => {
  return (
    <div>
      
     <section className="what">
        <h1  >What is Cayley-Halminton Theorem?</h1><br/>
        <ul >
            <h3>According to the Cayley Hamilton theorem, a square matrix will satisfy its own characteristic polynomial equation. A characteristic polynomial is associated with the determinant of a matrix and the eigenvalues of the matrix will be the roots of this polynomial. Suppose a square matrix A is given with n rows and n columns. The characteristic polynomial of this matrix is given as det
(
λ
I
n
−
A
)
. Here, 
I
n
 is the identity matrix, 
λ
 is a scalar quantity and det signifies the determinant operation.</h3>
        </ul><br/>
        <h1>Theorem Proof</h1><br/>
        <ul>
            <h3>p(A) = A^n+a(n-1)*A^n-1+....a1*A+a0*In = 0</h3> <br/>
            <h3>p(A)=0 ,where A is an n*n square matrix</h3><br/>
            <h3 className='proof' >The Cayley Hamilton theorem states that the characteristic polynomial expression of a real or complex square matrix will be equal to the zero matrix. The characteristic polynomial p(
λ
) = det
(
λ
I
n
−
A
)
 can be decomposed as p(
λ
) = 
a
n
λ
n
+
a
n
−
1
λ
n
−
1
+
.
.
.
+
a
1
λ
+
a
0
λ
0
. This is a monic polynomial where the leading coefficient, i.e, the coefficient of the highest degree variable, will be equal to 1. Thus, 
a
n
 = 1. Here, 
a
n
−
1
,...,
a
1
, 
a
0
 are coefficients of the variables 
λ
n
−
1
,..., 
λ
1
, 
λ
0
 respectively.

We have p(
λ
) = 
a
n
λ
n
+
a
n
−
1
λ
n
−
1
+
.
.
.
+
a
1
λ
+
a
0
λ
0
p(
λ
) = 
λ
n
+
a
n
−
1
λ
n
−
1
+
.
.
.
+
a
1
λ
+
a
0
On replacing 
λ
 with the matrix, A, the polynomial can be written as follows:

p(A) = 
A
n
+
a
n
−
1
A
n
−
1
+
.
.
.
+
a
1
A
+
a
0
I
n
Now according to the Cayley Hamilton Theorem, this polynomial will be 0.

Thus, p(A) = 
A
n
+
a
n
−
1
A
n
−
1
+
.
.
.
+
a
1
A
+
a
0
I
n
 = 0 or p(A) = 0</h3>
        </ul>
     </section><br/>
     <section className="properties">
        <h1>Applications of Cayley-Halminton Theorem</h1><br/>
        <h3>1) The Cayley Hamilton Theorem is used to define vital concepts in control theory such as the controllability of linear systems.
       </h3><br/>
       <h3>2) In commutative algebra, Nakayama's lemma can be proved using a generalization of the Cayley Hamilton Theorem. </h3><br/>
       <h3>3) The Theorem of Jacobson can be proved using the Cayley Hamilton Theorem.</h3><br/>


  </section>
     <section className="blog">
      <h1 className="blogg" >Links</h1><br/>
      <h2><a href="https://www.youtube.com/watch?v=Xfl0BIvLiV4&list=PLNKD1qB9pptv5bt5v8EArZL4PxPWhh03E&index=30">Cayley-Halminton Theorem</a></h2><br/>
      <h3>If You Wanted to learn in depth about cayley-halminton theorem <a href="https://www.cuemath.com/algebra/cayley-hamilton-theorem/">click</a> here</h3>
      <br/><h1 className='blogg' >Problems Video Links</h1><br/>
      <h2><a href="https://www.youtube.com/watch?v=Bi0jUBf0mU4&list=PLNKD1qB9pptv5bt5v8EArZL4PxPWhh03E&index=31">Problem-1</a></h2><br/>
      <h2><a href="https://www.youtube.com/watch?v=vejowli8Sas&list=PLNKD1qB9pptv5bt5v8EArZL4PxPWhh03E&index=33">Problem-2</a></h2><br/>
      <h2><a href="https://yutsumura.com/tag/cayley-hamilton-theorem/">additional-problems</a></h2>
     </section>
    </div>
  )
}

export default Cayley
