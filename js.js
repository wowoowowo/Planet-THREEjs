
const camera = new THREE.PerspectiveCamera(60, 
                window.innerWidth/window.innerHeight, 0.0001, 10000);
camera.position.set(0,0,50)
const scene = new THREE.Scene();
scene.add( camera )
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, });
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );




const l1 = new THREE.PointLight( 0xFFFFFF, 1, 100 )
l1.position.set( 40, -10, 10 );
scene.add( l1 );

const l2 = new THREE.PointLight( 0xFFFFFF, 1, 100 );
l2.position.set( 35, 50, 60 );
scene.add( l2 );

const l3 = new THREE.PointLight( 0xFFFFFF, 1, 100 );
l3.position.set( 10, 0, 70 );
scene.add( l3 );



const sphereGeometry = new THREE.SphereGeometry(15, 32, 16)
const sphereMaterial = new THREE.MeshPhongMaterial({
    color: 0x3333FF,
    shininess: 80,
});
const sphere = new THREE.Mesh( sphereGeometry, sphereMaterial )
scene.add( sphere )

const circleGeometry = new THREE.CircleGeometry(20,40)
const circleMaterial = new THREE.MeshPhongMaterial({
    color: 0x9F2B68,
    shininess: 80,
});
const circle = new THREE.Mesh( circleGeometry, circleMaterial )

sphere.add(circle)




const handleResize = () => {
    const { innerHeight, innerWidth } = window;
    renderer.setSize( innerWidth, innerHeight );
    camera.aspect = innerWidth/innerHeight;
    camera.updateProjectionMatrix();
}
const loop = () => {
    renderer.render(scene, camera);
    requestAnimationFrame(loop);
};
loop();
window.addEventListener('resize', handleResize)