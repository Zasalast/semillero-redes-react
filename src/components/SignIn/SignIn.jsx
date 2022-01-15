import React from 'react'

function SignIn() {
    return (
        <div>
   {/*        <div class="box">  
    <h1><span class="textlogo">.:</span> w3d </h1>
     <p>Create new account</p>
  <form action="/wifi/user/account" method="post">
  <p class="bodytext"> 
    First Name: (*)<br>
    <input name="first" type="text" class="inputstyle"/></br> 
    Last Name: (*)<br>
    <input name="last" type="text" class="inputstyle"/></br> 
    Email:<br>
    <input name="email" type="text" class="inputstyle"/></br> 
    Password: (*)<br>
    <input name="password" type="password" class="inputstyle"/> </br>
    Retype password: (*)<br>
    <input name="password2" type="password" class="inputstyle"/> </br>
    Type of avatar:<br>
    <input required="" class="avatar" name="avatar" type="radio" value="Female"/> Female <br>
<input required="" class="avatar" name="avatar" type="radio" value="Male"/> Male <br> 
<input required="" class="avatar" name="avatar" type="radio" value="Neutral" checked="checked"/> Neutral <br>
    <input type="submit" value="create" class="button"/>
  </p>      */}
             
 {/*  </form>

 
  </div> */}
            <form action="">
                <label for="nombre" >
            <span>Nombres</span>
            <input type="text" id="nombre" placeholder="tu nombre" autocomplete="name" required/>
        </label>
                <label for="Apellido" >
            <span>Apellidos</span>
            <input type="text" id="nombre" placeholder="tu nombre" autocomplete="name" required/>
        </label>
                <label for="nombre" >
            <span>Correo Electrónico</span>
            <input type="text" id="nombre" placeholder="tu nombre" autocomplete="name" required/>
        </label>
                <label for="nombre" >
            <span>Contraseña</span>
            <input type="text" id="nombre" placeholder="tu nombre" autocomplete="name" required/>
        </label>
                <label for="nombre" >
            <span>Repita Contraseña</span>
            <input type="text" id="nombre" placeholder="tu nombre" autocomplete="name" required/>
        </label>
            <datalist id="cursos">
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="Neutral">Neutral</option>                
            </datalist>
            </form>
            hola
        </div>
    )
}

export default SignIn
