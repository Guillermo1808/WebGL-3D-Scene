// Declaracion de variables para la escena
let scene, camera,altura,movimiento,light, renderer, cylinder,liquido, rect1, rect2, rect3, tapa, cilindroTapa, filtro, esfera, pata1,pata2,pata3,pata4,servir, base;

    // Inicializa la escena
    let init = function(){

        //Altura maxima que pueden alcanzar el tubo, esfera y filtro
        altura = 1.4;

        //Movimiento de la luz
        movimiento = .1;

        //Crea la escena
        scene = new THREE.Scene();
        scene.background = new THREE.Color("rgb(0, 160, 209)");

        // Crea la camara y la posicionamos con respecto al origen
        camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 1000);
        camera.position.z = 20;
        camera.position.x = 0;
        camera.rotation.x = -0.4;
        camera.position.y = 8;

        // Crea la fuente de luz y la posiciona
        light = new THREE.DirectionalLight(0xffffff,1);
        scene.add(light);
        light.castShadow = true;        
        light.position.z = 2;
        light.position.y = 10;
        light.position.x = 2;
        

        // Crea el cilindro (vaso) y el liquido dentro (cafe), los posiciona y les activa crear sombra
        createCylinder();        
        cylinder.receiveShadow = true;
        liquido.position.y = -0.9;
        liquido.receiveShadow = true;
        liquido.castShadow = true;

        // LLama la funcion para crear los rectangulos para la agarradera y los posiciona
        createAgarradera();
        rect1.position.x = -2.2

        rect2.position.x = -1.7
        rect2.position.y = 1.5

        rect3.position.x = -1.7
        rect3.position.y = -1.6

        // Activa las sombras de los rectangulos
        rect1.castShadow = true;
        rect1.receiveShadow = true;
        rect2.castShadow = true;
        rect2.receiveShadow = true;
        rect3.castShadow = true;
        rect3.receiveShadow = true;

        // LLama funcion para crear la tapa y las posiciona
        createTapa();
        tapa.position.y = 2.0
        tapa.castShadow = true;
        tapa.receiveShadow = true;

        // LLama la funcion para crear el cilindo de la tapa, el filtro del cafe y la posiciona
        agarreCyilinder();
        cilindroTapa.position.y = 2.5;
        //Activa las sombras
        cilindroTapa.castShadow = true;
        cilindroTapa.receiveShadow = true;

        filtro.position.y = 0.7;
        //Activa las sombras
        filtro.castShadow = true;
        filtro.receiveShadow = true;
        
        // Llama funcion para la esfera de arriba del tubo y la posiciona
        createEsfera();
        esfera.position.y = 4.4;
        //Activa las sombras
        esfera.castShadow = true;
        esfera.receiveShadow = true;

        // LLama funcion para crear las patas de la prensa y el pequeño pico del vaso
        createPatas();
        pata1.position.x=1;
        pata1.position.y=1.43;
        

        pata2.position.x=-.9;
        pata2.position.y=-2.1;

        pata3.position.x=.8;
        pata3.position.y=-2.1;

        pata4.position.z=-1;
        pata4.position.y=-2.1;

        //Activa las sombras
        pata1.castShadow = true;
        pata1.receiveShadow = true;
        pata2.castShadow = true;
        pata2.receiveShadow = true;
        pata3.castShadow = true;
        pata3.receiveShadow = true;
        pata4.castShadow = true;
        pata4.receiveShadow = true;

        //LLama funcion para crear la base de madera
        createBase();
        base.position.y=-4.2;
        //Activa las sombras
        base.receiveShadow = true;
        

        // Crea el render para la escena
        renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);

        // Activa las sombras para la escena
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFShadowMap;
        
        document.body.appendChild(renderer.domElement);
    };

    // Funcion para crear la agarradera
    let createAgarradera = function(){
        let geometry = new THREE.BoxGeometry(0.4,3,0.3);
        let material = new THREE.MeshPhongMaterial({
            side: THREE.DoubleSide,
            color: "rgb(38, 43, 47)",
            emissive: "rgb(255, 255, 255)",
            emissiveIntensity: 0.6,
        });
        rect1 = new THREE.Mesh(geometry, material);

        geometry = new THREE.BoxGeometry(1.4,0.3,0.3);
        
        rect2 = new THREE.Mesh(geometry, material);

        geometry = new THREE.BoxGeometry(1.4,0.3,0.3);

        rect3 = new THREE.Mesh(geometry, material);

        //Agrega los objetos a la escena
        scene.add(rect1);
        scene.add(rect2);
        scene.add(rect3);
    };

    //Funcion para crear el vaso y el cafe
    //Consiste de dos cilindros, el del vaso y uno dentro de este que representa el cafe
    let createCylinder = function(){
        let geometry = new THREE.CylinderGeometry(1,1,4,32);
        let material = new THREE.MeshLambertMaterial({
            color: "rgb(255, 255, 255)",
            opacity: 0.4,
            transparent: true
        });
        let geometryC = new THREE.CylinderGeometry(0.95,0.95,2.3,32);
        let cafe = new THREE.MeshLambertMaterial({
            color: "rgb(83, 47, 8)",
            refractionRatio: 0.5,
            opacity: 0.7,
            transparent: true
        });
        cylinder = new THREE.Mesh(geometry, material);
        //Agrega el vaso
        scene.add(cylinder);
        
        liquido = new THREE.Mesh(geometryC, cafe);
        //Agrega el cafe
        scene.add(liquido);
    };

    // Funcion para crear el tubo de la prensa y el filtro
    let agarreCyilinder = function(){
        let geometry = new THREE.CylinderGeometry(.1,.1,3.5,32);
        let material = new THREE.MeshPhongMaterial({
            side: THREE.DoubleSide,
            color: "rgb(96, 99,105)",
            emissive: "rgb(255, 255, 255)",
            emissiveIntensity: 0.6,
        });
        cilindroTapa = new THREE.Mesh(geometry, material);
        //Agrega el tubo a la escena
        scene.add(cilindroTapa);

        // filtro
        geometry = new THREE.CylinderGeometry(0.948,0.948,0.1,32);
        //Agrega la textura del filtro
        material = new THREE.MeshStandardMaterial({map: new THREE.TextureLoader().load('https://thumbs.dreamstime.com/b/pattern-metal-net-air-filter-texture-background-pattern-grille-air-filter-texture-background-170545236.jpg'), side: THREE.DoubleSide})
        filtro = new THREE.Mesh(geometry, material);
        //Agrega el filtro a la escena
        scene.add(filtro);

    };

    // Crea la esfera de arriba del tubo
    let createEsfera = function(){
        let geometry = new THREE.SphereGeometry(0.2,32,32);
        let material = new THREE.MeshPhongMaterial({
            side: THREE.DoubleSide,
            color: "rgb(96, 99,105)",
            emissive: "rgb(255, 255, 255)",
            emissiveIntensity: 0.6,
        });
        esfera = new THREE.Mesh(geometry, material);
        //Agrega la esfera
        scene.add(esfera);
    };
    
    // Crea la tapa arriba del vaso
    let createTapa = function(){
        let geometry = new THREE.CylinderGeometry(.8,1.3,.5,32);
        let material = new THREE.MeshPhongMaterial({
            side: THREE.DoubleSide,
            color: "rgb(96, 99,105)",
            emissive: "rgb(255, 255, 255)",
            emissiveIntensity: 0.6,
        });
        tapa = new THREE.Mesh(geometry, material);
        //Agrega la tapa a la escena
        scene.add(tapa);
    };

    //Funcion para crear la base de madera
    let createBase = function(){
        let geometry = new THREE.BoxGeometry(20,4,12);

        // Crea arreglo de texuturas de madera para las caras del cubo
        var cubeMaterials = [
            new THREE.MeshStandardMaterial({map: new THREE.TextureLoader().load('https://thepaintpeople.com/wp-content/uploads/2015/09/prepare-bare-wood-staining.jpg'), side: THREE.DoubleSide}),
            new THREE.MeshStandardMaterial({map: new THREE.TextureLoader().load('https://thepaintpeople.com/wp-content/uploads/2015/09/prepare-bare-wood-staining.jpg'), side: THREE.DoubleSide}),
            new THREE.MeshStandardMaterial({map: new THREE.TextureLoader().load('https://thepaintpeople.com/wp-content/uploads/2015/09/prepare-bare-wood-staining.jpg'), side: THREE.DoubleSide}),
            new THREE.MeshStandardMaterial({map: new THREE.TextureLoader().load('https://thepaintpeople.com/wp-content/uploads/2015/09/prepare-bare-wood-staining.jpg'), side: THREE.DoubleSide}),
            new THREE.MeshStandardMaterial({map: new THREE.TextureLoader().load('https://thepaintpeople.com/wp-content/uploads/2015/09/prepare-bare-wood-staining.jpg'), side: THREE.DoubleSide}),
            new THREE.MeshStandardMaterial({map: new THREE.TextureLoader().load('https://thepaintpeople.com/wp-content/uploads/2015/09/prepare-bare-wood-staining.jpg'), side: THREE.DoubleSide})
        ];
        let material = new THREE.MeshFaceMaterial(cubeMaterials);
        base = new THREE.Mesh(geometry, material);
        //Agrega la base
        scene.add(base);
    };

    //Crea las patas y el pico del vaso
    let createPatas = function(){

        var geometry = new THREE.CylinderGeometry(.5, 0, .6, 4, 1)
        //Material para el pico
        var material = new THREE.MeshLambertMaterial({
            color: "rgb(255, 255, 255)",
            opacity: 0.4,
            transparent: true
        });
        
        pata1 = new THREE.Mesh(geometry, material);
        //Agrega el pico del vaso
        scene.add(pata1);

        //Se cambia el material para crear las patas
        material = new THREE.MeshPhongMaterial({
            side: THREE.DoubleSide,
            color: "rgb(96, 99,105)",
            emissive: "rgb(255, 255, 255)",
            emissiveIntensity: 0.5,
        });
        geometry = new THREE.CylinderGeometry(.1, .2, .3, 4, 1)
        material = new THREE.MeshBasicMaterial({color: "rgb(96, 99,105)"});
        pata2 = new THREE.Mesh(geometry, material);
        //Agrega la pata
        scene.add(pata2);

        geometry = new THREE.CylinderGeometry(.1, .2, .3, 4, 1)
        material = new THREE.MeshBasicMaterial({color: "rgb(96, 99,105)"});
        pata3 = new THREE.Mesh(geometry, material);
        //Agrega la pata
        scene.add(pata3);

        geometry = new THREE.CylinderGeometry(.1, .2, .3, 4, 1)
        material = new THREE.MeshBasicMaterial({color: "rgb(96, 99,105)"});
        pata4 = new THREE.Mesh(geometry, material);
        //Agrega la pata
        scene.add(pata4);
    };

    //Funcion que detecta cuando se oprime alguna tecla
    document.addEventListener("keydown", onDocumentKeyDown, false);
    function onDocumentKeyDown(event){ 
        
        //Asigna a keyCode el codigo del boton que se presiona
        var keyCode = event.which;

        // Flecha hacia arriba
        if(keyCode == 38){
            // Si la altura maxima no ha sido alcanzada, el tubo, la esfera y el filtro suben .1 en y
            if(altura <=2){
            altura += .1;
            cilindroTapa.translateY(.1);
            esfera.translateY(.1);
            filtro.translateY(.1);

            // Si el filtro esta tocando el cafe y la opacidad minima no ha sido alcanzada, le resta .01538461538 a la opacidad
            if(filtro.position.y <=0.3){
            if(liquido.material.opacity >= 0.4){
                liquido.material.opacity -= .01538461538;
                }
            }
        }
        }
        // Flecha hacia abajo
        if(keyCode == 40){

            // Si la altura minima no ha sido alcanzada, el tubo, la esfera y el filtro bajan .1 en y
            if(altura >-0.4){
            altura -= .1;
            cilindroTapa.translateY(-.1);
            esfera.translateY(-.1);
            filtro.translateY(-.1);

            // Si la opacidad maxima del cafe no ha sido alcanzada, le agrega .01538461538
            if(liquido.material.opacity < 0.98){
            liquido.material.opacity += .01538461538;
            }
            }
        }
        
    };

    //Funcion principal de la escena que actualiza el render y las figuras
    let mainLoop = function(){
        renderer.render(scene,camera);
        requestAnimationFrame(mainLoop);

        //Agrega el valor de movimiento al eje X para mover la luz
        light.position.x += movimiento;

        //Si la luz alcanza su posicion maxima o minima en X, se cambia la direccion
        if(light.position.x >15 || light.position.x <-15){
            movimiento *= -1;
        }
    
        
    };

    //Llama para iniciar la escena
    init();

    //Llama para actualizar el render
    mainLoop();