let scene, camera, renderer, cylinder, rect1, rect2, rect3, tapa, cilindroTapa, esfera, pata1,pata2,pata3,pata4,servir, base;

    let init = function(){
        scene = new THREE.Scene();
        scene.background = new THREE.Color("rgb(0, 160, 209)");

        camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 1000);
        camera.position.z = 15;
        camera.position.y = 1;
        camera.position.x = 1;

        createCylinder();
        createAgarradera();
        rect1.position.x = -2

        rect2.position.x = -1.5
        rect2.position.y = 1.5

        rect3.position.x = -1.5
        rect3.position.y = -1.6

        createTapa();
        tapa.position.y = 2.0

        agarreCyilinder();
        cilindroTapa.position.y = 0.8;

        createEsfera();
        esfera.position.y = 2.7;

        createPatas();
        pata1.position.x=1;
        pata1.position.y=1.43;
        

        pata2.position.x=-.9;
        pata2.position.y=-2.1;

        pata3.position.x=.8;
        pata3.position.y=-2.1;

        createBase();
        base.position.y=-4.5;

        

        renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        
        document.body.appendChild(renderer.domElement);
    };

    let createAgarradera = function(){
        let geometry = new THREE.BoxGeometry(0.4,3,0.3);
        let material = new THREE.MeshBasicMaterial({color: "rgb(38, 43, 47)"});
        rect1 = new THREE.Mesh(geometry, material);

        geometry = new THREE.BoxGeometry(1.4,0.3,0.3);
        material = new THREE.MeshBasicMaterial({color: "rgb(38, 43, 47)"});
        rect2 = new THREE.Mesh(geometry, material);

        geometry = new THREE.BoxGeometry(1.4,0.3,0.3);
        material = new THREE.MeshBasicMaterial({color: "rgb(38, 43, 47)"});
        rect3 = new THREE.Mesh(geometry, material);

        scene.add(rect1);
        scene.add(rect2);
        scene.add(rect3);
    };

    let createCylinder = function(){
        let geometry = new THREE.CylinderGeometry(1,1,4,32);
        let material = new THREE.MeshBasicMaterial({color: "rgb(162, 166, 168)"});
        cylinder = new THREE.Mesh(geometry, material);
        scene.add(cylinder);
    };

    let agarreCyilinder = function(){
        let geometry = new THREE.CylinderGeometry(.1,.1,3.5,32);
        let material = new THREE.MeshBasicMaterial({color: "rgb(96, 99,105)"});
        cilindroTapa = new THREE.Mesh(geometry, material);
        scene.add(cilindroTapa);
    };

    let createEsfera = function(){
        let geometry = new THREE.SphereGeometry(0.2,32,32);
        let material = new THREE.MeshBasicMaterial({color: "rgb(96, 99,105)"});
        esfera = new THREE.Mesh(geometry, material);
        scene.add(esfera);
    };
    
    let createTapa = function(){
        let geometry = new THREE.CylinderGeometry(.8,1.3,.5,32);
        let material = new THREE.MeshBasicMaterial({color: "rgb(96, 99,105)"});
        tapa = new THREE.Mesh(geometry, material);
        scene.add(tapa);
    };

    let createBase = function(){
        let geometry = new THREE.BoxGeometry(7,4,9);
        let material = new THREE.MeshBasicMaterial({color: "rgb(69, 42,37)"});
        base = new THREE.Mesh(geometry, material);
        scene.add(base);
    };

    let createPatas = function(){
        var geometry = new THREE.CylinderGeometry(.5, 0, .6, 4, 1)
        var material = new THREE.MeshBasicMaterial({color: "rgb(162, 166, 168)"});
        pata1 = new THREE.Mesh(geometry, material);
        scene.add(pata1);

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

    let mainLoop = function(){
        renderer.render(scene,camera);
        // cylinder.rotation.x += 0.00;
        // rect1.rotation.x += 0.00;
        // rect2.rotation.x += 0.00;
        // rect3.rotation.x += 0.00;
        // tapa.rotation.x += 0.00;
        // cilindroTapa.rotation.x += 0.00;
        // esfera.rotation.x += 0.00;
        // pata1.rotation.x += 0.00;
        // cylinder.rotation.y += 0.01;
        // rect1.rotation.y += 0.01;
        // rect2.rotation.y += 0.01;
        // rect3.rotation.y += 0.01;
        // tapa.rotation.y += 0.01;
        // cilindroTapa.rotation.y += 0.01;
        // esfera.rotation.y += 0.01;
        // pata1.rotation.y += 0.01;
        // camera.rotation.x += 0.00;
        // camera.rotation.y += 0.01;
        requestAnimationFrame(mainLoop);
    };
    init();
    mainLoop();