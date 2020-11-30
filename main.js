let scene, camera,altura,movimiento,light, renderer, cylinder,liquido, rect1, rect2, rect3, tapa, cilindroTapa, filtro, esfera, pata1,pata2,pata3,pata4,servir, base;

    let init = function(){
        altura = 1.4;
        movimiento = .1;

        scene = new THREE.Scene();
        scene.background = new THREE.Color("rgb(0, 160, 209)");
        camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 1000);
        camera.position.z = 20;
        camera.position.x = 0;

        camera.rotation.x = -0.4;
        camera.position.y = 8;

        light = new THREE.DirectionalLight(0xffffff,1);
        scene.add(light);
        light.castShadow = true;
        // light.shadow = new THREE.LightShadow(new THREE.PerspectiveCamera(50,1,10,2500));
        
        light.position.z = 2;
        light.position.y = 10;
        light.position.x = 2;
        

        createCylinder();
        
        cylinder.receiveShadow = true;
        liquido.position.y = -0.9;
        liquido.receiveShadow = true;
        liquido.castShadow = true;

        createAgarradera();
        rect1.position.x = -2.2

        rect2.position.x = -1.7
        rect2.position.y = 1.5

        rect3.position.x = -1.7
        rect3.position.y = -1.6

        rect1.castShadow = true;
        rect1.receiveShadow = true;
        rect2.castShadow = true;
        rect2.receiveShadow = true;
        rect3.castShadow = true;
        rect3.receiveShadow = true;

        createTapa();
        tapa.position.y = 2.0
        tapa.castShadow = true;
        tapa.receiveShadow = true;

        agarreCyilinder();
        cilindroTapa.position.y = 2.5;
        cilindroTapa.castShadow = true;
        cilindroTapa.receiveShadow = true;

        filtro.position.y = 0.7;
        filtro.castShadow = true;
        filtro.receiveShadow = true;
        
        createEsfera();
        esfera.position.y = 4.4;
        esfera.castShadow = true;
        esfera.receiveShadow = true;
        createPatas();
        pata1.position.x=1;
        pata1.position.y=1.43;
        

        pata2.position.x=-.9;
        pata2.position.y=-2.1;

        pata3.position.x=.8;
        pata3.position.y=-2.1;

        pata4.position.z=-1;
        pata4.position.y=-2.1;

        pata1.castShadow = true;
        pata1.receiveShadow = true;
        pata2.castShadow = true;
        pata2.receiveShadow = true;
        pata3.castShadow = true;
        pata3.receiveShadow = true;
        pata4.castShadow = true;
        pata4.receiveShadow = true;
        createBase();
        base.position.y=-4.2;
        // base.castShadow = true;
        base.receiveShadow = true;
        

        renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);

        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFShadowMap;
        
        document.body.appendChild(renderer.domElement);
    };

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

        scene.add(rect1);
        scene.add(rect2);
        scene.add(rect3);
    };

    let createCylinder = function(){
        let geometry = new THREE.CylinderGeometry(1,1,4,32);
        let material = new THREE.MeshLambertMaterial({
            color: "rgb(255, 255, 255)",
            opacity: 0.4,
            transparent: true
        });
        let geometryC = new THREE.CylinderGeometry(0.95,0.95,2.3,32);
        let cafe = new THREE.MeshLambertMaterial({
            // side: THREE.DoubleSide,
            // color: "rgb(162, 166, 168)",
            // emissive: "rgb(255, 255, 255)",
            // emissiveIntensity: 0.5,
            // shininess: 100,
            // reflectivity: 1.0,
            color: "rgb(83, 47, 8)",
            refractionRatio: 0.5,
            opacity: 0.7,
            transparent: true
        });
        cylinder = new THREE.Mesh(geometry, material);
        scene.add(cylinder);
        
        liquido = new THREE.Mesh(geometryC, cafe);
        scene.add(liquido);
    };

    let agarreCyilinder = function(){
        let geometry = new THREE.CylinderGeometry(.1,.1,3.5,32);
        let material = new THREE.MeshPhongMaterial({
            side: THREE.DoubleSide,
            color: "rgb(96, 99,105)",
            emissive: "rgb(255, 255, 255)",
            emissiveIntensity: 0.6,
        });
        cilindroTapa = new THREE.Mesh(geometry, material);
        scene.add(cilindroTapa);

        // filtro
        geometry = new THREE.CylinderGeometry(0.948,0.948,0.1,32);
        material = new THREE.MeshStandardMaterial({map: new THREE.TextureLoader().load('https://thumbs.dreamstime.com/b/pattern-metal-net-air-filter-texture-background-pattern-grille-air-filter-texture-background-170545236.jpg'), side: THREE.DoubleSide})
        filtro = new THREE.Mesh(geometry, material);
        scene.add(filtro);

    };

    let createEsfera = function(){
        let geometry = new THREE.SphereGeometry(0.2,32,32);
        let material = new THREE.MeshPhongMaterial({
            side: THREE.DoubleSide,
            color: "rgb(96, 99,105)",
            emissive: "rgb(255, 255, 255)",
            emissiveIntensity: 0.6,
        });
        esfera = new THREE.Mesh(geometry, material);
        scene.add(esfera);
    };
    
    let createTapa = function(){
        let geometry = new THREE.CylinderGeometry(.8,1.3,.5,32);
        let material = new THREE.MeshPhongMaterial({
            side: THREE.DoubleSide,
            color: "rgb(96, 99,105)",
            emissive: "rgb(255, 255, 255)",
            emissiveIntensity: 0.6,
        });
        tapa = new THREE.Mesh(geometry, material);
        scene.add(tapa);
    };

    let createBase = function(){
        let geometry = new THREE.BoxGeometry(20,4,12);
        var cubeMaterials = [
            new THREE.MeshStandardMaterial({map: new THREE.TextureLoader().load('https://thepaintpeople.com/wp-content/uploads/2015/09/prepare-bare-wood-staining.jpg'), side: THREE.DoubleSide}),
            new THREE.MeshStandardMaterial({map: new THREE.TextureLoader().load('https://thepaintpeople.com/wp-content/uploads/2015/09/prepare-bare-wood-staining.jpg'), side: THREE.DoubleSide}),
            new THREE.MeshStandardMaterial({map: new THREE.TextureLoader().load('https://thepaintpeople.com/wp-content/uploads/2015/09/prepare-bare-wood-staining.jpg'), side: THREE.DoubleSide}),
            new THREE.MeshStandardMaterial({map: new THREE.TextureLoader().load('https://thepaintpeople.com/wp-content/uploads/2015/09/prepare-bare-wood-staining.jpg'), side: THREE.DoubleSide}),
            new THREE.MeshStandardMaterial({map: new THREE.TextureLoader().load('https://thepaintpeople.com/wp-content/uploads/2015/09/prepare-bare-wood-staining.jpg'), side: THREE.DoubleSide}),
            new THREE.MeshStandardMaterial({map: new THREE.TextureLoader().load('https://thepaintpeople.com/wp-content/uploads/2015/09/prepare-bare-wood-staining.jpg'), side: THREE.DoubleSide})
        ];
        let material = new THREE.MeshFaceMaterial(cubeMaterials);
        // let material = new THREE.MeshBasicMaterial({color: "rgb(200,200,200)"});
        base = new THREE.Mesh(geometry, material);
        scene.add(base);
    };

    let createPatas = function(){
        var geometry = new THREE.CylinderGeometry(.5, 0, .6, 4, 1)
        var material = new THREE.MeshLambertMaterial({
            color: "rgb(255, 255, 255)",
            opacity: 0.4,
            transparent: true
        });
        
        pata1 = new THREE.Mesh(geometry, material);
        scene.add(pata1);

        material = new THREE.MeshPhongMaterial({
            side: THREE.DoubleSide,
            color: "rgb(96, 99,105)",
            emissive: "rgb(255, 255, 255)",
            emissiveIntensity: 0.5,
        });
        geometry = new THREE.CylinderGeometry(.1, .2, .3, 4, 1)
        material = new THREE.MeshBasicMaterial({color: "rgb(96, 99,105)"});
        pata2 = new THREE.Mesh(geometry, material);
        scene.add(pata2);

        geometry = new THREE.CylinderGeometry(.1, .2, .3, 4, 1)
        material = new THREE.MeshBasicMaterial({color: "rgb(96, 99,105)"});
        pata3 = new THREE.Mesh(geometry, material);
        scene.add(pata3);

        geometry = new THREE.CylinderGeometry(.1, .2, .3, 4, 1)
        material = new THREE.MeshBasicMaterial({color: "rgb(96, 99,105)"});
        pata4 = new THREE.Mesh(geometry, material);
        scene.add(pata4);
        // geometry = new THREE.ConeGeometry(5,20,32);
        // material = new THREE.MeshBasicMaterial({color: "rgb(200,200,200)"});
        // pata1 = new THREE.Mesh(geometry, material);
        // scene.add(pata1);
    };
    document.addEventListener("keydown", onDocumentKeyDown, false);
    function onDocumentKeyDown(event){ 
        
        var keyCode = event.which;
        // arrow up
        if(keyCode == 38){
            if(altura <=2){
            
            altura += .1;
            cilindroTapa.translateY(.1);
            esfera.translateY(.1);
            filtro.translateY(.1);
            if(filtro.position.y <=0.3){
            if(liquido.material.opacity >= 0.4){
                liquido.material.opacity -= .01538461538;
                }
            }
        }
        }
        //arrow down
        if(keyCode == 40){
            if(altura >-0.4){
            altura -= .1;
            cilindroTapa.translateY(-.1);
            esfera.translateY(-.1);
            filtro.translateY(-.1);
            if(liquido.material.opacity < 0.98){
            liquido.material.opacity += .01538461538;
            }
            }
        }
        
    };

    let mainLoop = function(){
        renderer.render(scene,camera);
        requestAnimationFrame(mainLoop);
        light.position.x += movimiento;
        if(light.position.x >15 || light.position.x <-15){
            movimiento *= -1;
        }
    
        
    };
    init();
    mainLoop();