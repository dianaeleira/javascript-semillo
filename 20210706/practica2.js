const validaCiudad = (departamento) => {
    let ciudad = prompt("Ingresa una ciudad y validamos si es del departamento de "+departamento+": ");
    let sw = 0;
    const departamento1 = departamento;
    departamento = departamento.toLowerCase();
    ciudad = ciudad.toLowerCase(); //toUpperCase()
    if (ciudad === "") {
        alert("Debes ingresar la ciudad en el campo prompt!");
    }
    else{
        switch (departamento) {
            case "cundinamarca":
                if(ciudad ==="bogota"||ciudad ==="cajica"||ciudad ==="chia"||ciudad ==="sopo"){
                    sw = 1;
                }
                else{
                    sw = 0;
                }
            break;
            case "antioquia":
                if(ciudad ==="medellin"||ciudad ==="rio negro"||ciudad ==="envigado"||ciudad ==="bello"){
                    sw = 1;
                }
                else{
                    sw = 0;
                }
                
            break;
            case "magdalena":
                if(ciudad ==="santa marta"||ciudad ==="aracataca"||ciudad ==="zona bananera"||ciudad ==="cienaga"){
                    sw = 1;
                }
                else{
                    sw = 0;
                }
                
            break;
            case "atlantico":
                if(ciudad ==="barranquilla"||ciudad ==="malambo"||ciudad ==="soledad"||ciudad ==="galapa"){
                    sw = 1;
                }
                else{
                    sw = 0;
                }
                
            break;  
            default:
            break;
 
        }
        if(sw ===1){
            alert("Correcto! La ciudad "+ciudad+" corresponde al departamento de "+departamento1+".");
        }
        else{
            alert("Oops! La ciudad "+ciudad+" no corresponde al registro de ciudades para el departamento de "+departamento1+".");
            console.log(ciudad); 
        }
    }
  };
  