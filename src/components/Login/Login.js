import React from 'react'

function Login() {
    return (
        <div>
            <h2>Conocer un nuevo mundo</h2>
          {/*   <form action="">
         <label for="Primer nombre" >
            <span>¿cual es su nombre?</span>
            <input type="text" id="nombre" placeholder="tu nombre" autocomplete="name" required/>
                </label>
         <label for="Segundo nombre" >
            <span>¿cual es su nombre?</span>
            <input type="text" id="nombre" placeholder="tu nombre" autocomplete="name" required/>
                </label>
         <label for="Primer Apellido" >
            <span>¿cual es su nombre?</span>
            <input type="text" id="nombre" placeholder="tu nombre" autocomplete="name" required/>
                </label>
         <label for="Correo Electronico" >
            <span>¿cual es su nombre?</span>
            <input type="email" id="nombre" placeholder="tu nombre" autocomplete="name" required/>
                </label>
         <label for="Contraseña" >
            <span>¿cual es su nombre?</span>
            <input type="text" id="nombre" placeholder="tu nombre" autocomplete="name" required/>
                </label>
         <label for="Repetir Contraseña" >
            <span>¿cual es su nombre?</span>
            <input type="text" id="nombre" placeholder="tu nombre" autocomplete="name" required/>
                </label>
           
            </form> */}
            <div id="subscribe">
  <form action="/wifi/login" method="post">
    <input name="METHOD" type="hidden" value="login" class="inputstyle"/>
    <input   name="firstname" type="text" value="Nombre" class="inputstyle" placeholder="Primer Nombre"/>
    <input name="lastname" type="text" value="Apelido" class="inputstyle"  placeholder="Primer Nombre"/>
    <input name="password" type="password" value="YOUR PASSWORD" class="inputstyle"/>
    <input type="submit"  value="Iniciar Sesión" class="button"  />
  </form>

  <form action="http://152.200.138.122:9000/wifi/forgotpassword" method="get">
   <input type="submit" value="Has olvidado Contraseña" class="button"  />
  </form>

            </div>
            <button ><a href="/w3d/sign-in"><i className="fas fa-sign-in-alt fa-2x" />
           </a> </button>
        </div>
    )
}

export default Login
