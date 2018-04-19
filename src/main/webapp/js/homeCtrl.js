module.controller('homeCtrl', ['$scope', '$http', '$route', function ($scope, $http, $route) {
        console.log("inicializando app");

        $scope.datosFormulario = {};
        $scope.informacion = {};
        $scope.errores = {};
        $scope.verFomularioLogin = true;
        $scope.verFomularioRegistrarse = false;
        $scope.verFomularioRecuperarPass = false;

        //Funciones
        $scope.iniciarsesion = iniciarsesion;
        $scope.registrarse = registrarse;
        $scope.recupararPass = recupararPass;
        //Vistas
        $scope.viewRegistrarse = viewRegistrarse;
        $scope.viewIniciarSesion = viewIniciarSesion;
        $scope.viewRecupararPass = viewRecupararPass;
        //Funciones para funcionalidad
        $scope.limpiarErroresFomulario = limpiarErroresFomulario;

        // *** Funcion para iniciar sesión ***
        function iniciarsesion() {
            $scope.limpiarErroresFomulario();
            $scope.errores = {};
            var error = false;
            if (!$scope.datosFormulario.username) {
                $scope.errores.username = 'Campo Obligatorio*';
                error = true;
            }
            if (!$scope.datosFormulario.pass) {
                $scope.errores.pass = 'Campo Obligatorio*';
                error = true;
            }
            if (!error) {
                alert("Exito");
            }
        }

        // *** Funcion para registrarse ***
        function registrarse() {
            $scope.limpiarErroresFomulario();
            var error = false;
            var regExp = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
            if (!$scope.datosFormulario.username) {
                $scope.errores.username = 'Campo Obligatorio*';
                error = true;
            }
            if (!$scope.datosFormulario.email) {
                $scope.errores.email = 'Campo Obligatorio*';
                error = true;
            } else {
                if (!regExp.exec($scope.datosFormulario.email)) {
                    $scope.errores.email = 'El campo no es una dirección de correo electronico valida';
                    error = true;
                }
            }
            if (!$scope.datosFormulario.wallet) {
                $scope.errores.wallet = 'Campo Obligatorio*';
                error = true;
            }
            if (!$scope.datosFormulario.pass) {
                $scope.errores.pass = 'Campo Obligatorio*';
                error = true;
            }
            if (!$scope.datosFormulario.repass) {
                $scope.errores.repass = 'Campo Obligatorio*';
                error = true;
            } else {
                if ($scope.datosFormulario.pass !== $scope.datosFormulario.repass) {
                    $scope.errores.repass = 'No es igual a la contraseña ingresada';
                    error = true;
                }
            }
            if (!error) {
                $scope.informacion.usuario = $scope.datosFormulario.username;
                $scope.informacion.email = $scope.datosFormulario.email;
                $scope.informacion.wallet = $scope.datosFormulario.wallet;
                $scope.informacion.password = $scope.datosFormulario.pass;
                $http.post('').
                        success(function (data, status, headers, config) {
                            if (data.codmensaje === "OK") {
                                $scope.resultados = data.object;
                            } else {
                                alert(data.mensaje);
                            }
                        }).error(function (data, status, headers, config) {
                    //alert(status);
                    if (data === null) {
                        alert('Debe ingresar un número de documento ó licencia de conducción.');
                    }
                    alert('Error al consultar la información, por favor intente más tarde.');
                });
            }
        }

        // *** funcion para recuperar la contraseña ***
        function recupararPass() {
            $scope.limpiarErroresFomulario();
            var error = false;
            var regExp = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
            if (!$scope.datosFormulario.username) {
                $scope.errores.username = 'Campo Obligatorio*';
                error = true;
            }
            if (!$scope.datosFormulario.email) {
                $scope.errores.email = 'Campo Obligatorio*';
                error = true;
            } else {
                if (!regExp.exec($scope.datosFormulario.email)) {
                    $scope.errores.email = 'El campo no es una dirección de correo electronico valida';
                    error = true;
                }
            }
            if (!error) {
                alert("Exito");
            }
        }

        // *** funcion para mostrar el formulario para registrarse
        function viewRegistrarse() {
            $scope.verFomularioLogin = false;
            $scope.verFomularioRegistrarse = true;
            $scope.verFomularioRecuperarPass = false;
            $scope.limpiarErroresFomulario();
            $scope.datosFormulario = {};
        }

        // *** funcion para mostrar el formulario para registrarse
        function viewIniciarSesion() {
            $scope.verFomularioLogin = true;
            $scope.verFomularioRegistrarse = false;
            $scope.verFomularioRecuperarPass = false;
            $scope.limpiarErroresFomulario();
            $scope.datosFormulario = {};
        }

        // *** funcion para mostrar el formulario para registrarse
        function viewRecupararPass() {
            $scope.verFomularioLogin = false;
            $scope.verFomularioRegistrarse = false;
            $scope.verFomularioRecuperarPass = true;
            $scope.limpiarErroresFomulario();
            $scope.datosFormulario = {};
        }

        function limpiarErroresFomulario() {
            $scope.errores.username = '';
            $scope.errores.email = '';
            $scope.errores.wallet = '';
            $scope.errores.pass = '';
            $scope.errores.repass = '';
        }

    }]);
