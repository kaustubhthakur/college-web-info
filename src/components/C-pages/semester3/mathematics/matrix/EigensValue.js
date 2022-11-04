import React from 'react'
import './styles.css'
const EigensValue = () => {
  return (
    <div >
     <section className="what">
        <h1  >What is EigenValue?</h1><br/>
        <ul >
            <h3 >Eigenvalues are the special set of scalars associated with the system of linear equations. It is mostly used in matrix equations. ‘Eigen’ is a German word that means ‘proper’ or ‘characteristic’. Therefore, the term eigenvalue can be termed as characteristic value, characteristic root, proper values or latent roots as well. In simple words, the eigenvalue is a scalar that is used to transform the eigenvector.</h3><br/>
        <h3>
The basic equation is
<h1>Ax = λx</h1>
The number or scalar value “λ” is an eigenvalue of A.
        </h3>
        </ul><br/>
        <h1>What is EigenVectors?</h1><br/>
        <ul>
            <h3>Eigenvectors are the vectors (non-zero) that do not change the direction when any linear transformation is applied. It changes by only a scalar factor. In a brief, we can say, if A is a linear transformation from a vector space V and x is a vector in V, which is not a zero vector, then v is an eigenvector of A if A(X) is a scalar multiple of x.</h3>
        </ul>
     </section><br/>
     <section className="properties">
        <h1>Properties of Eigenvalue</h1><br/>
        <h3>1) A matrix possesses inverse if and only if all of its eigenvalues are nonzero.</h3><br/>
        <h3>2) if A is an n × n triangular matrix (upper triangular, lower triangular, or diagonal), then the eigenvalues of A are entries of the main diagonal of A.</h3><br/>
        <h3>3) f μ ≠ 0 complex number, λ is an eigenvalue of matrix A, and x ≠ 0 corresponding eigenvectors, then μx is a corresponding eigenvector</h3><br/>
   <h3>4)  If an n × n matrix A has n distinct eigenvalues, then A is diagonalizable. </h3><br/>
   <h2>Real World Example of Eigen value and Eigen vector</h2><br/>
   <h3>When you watch a movie on screen(TV/movie theater,..), though the picture(s)/movie you see is actually 2D, you do not lose much information from the 3D real world it is capturing. That is because the principal eigen vector is more towards 2D plane the picture is being captured and any small loss of information(depth) is inferred automatically by our brain. (reason why we most of the times take photos using camera facing directly at us, not from the top of the head). Each scene requires certain aspects of the image to be enhanced, that is the reason the camera man/woman chooses his/her camera angle to capture most of those visual aspects. (apart from colour of costume, background scene and background music)</h3>
     </section>
     <section className="blog">
      <h1 className="blogg" >Links</h1><br/>
      <h2><a href="https://mathworld.wolfram.com/Eigenvalue.html">Eigen Value</a></h2><br/>
      <h2><a href="https://mathworld.wolfram.com/Eigenvector.html#:~:text=Eigenvectors%20are%20a%20special%20set,144).">Eigens Vector</a></h2>
      <h1 className='blogg' >Problems Video Links</h1><br/>
      <h2><a href="https://www.youtube.com/watch?v=apmSB7kmF38&list=PLNKD1qB9pptv5bt5v8EArZL4PxPWhh03E&index=43&t=468s">Problem-1</a></h2><br/>
      <h2><a href="https://www.youtube.com/watch?v=zVUl38x5C-w&list=PLNKD1qB9pptv5bt5v8EArZL4PxPWhh03E&index=45">Problem-2</a></h2><br/>
      <h2><a href="https://www.youtube.com/watch?v=yB6PvxsLH9w&list=PLNKD1qB9pptv5bt5v8EArZL4PxPWhh03E&index=46">Problem-3</a></h2>
     </section>
    </div>
  )
}

export default EigensValue
