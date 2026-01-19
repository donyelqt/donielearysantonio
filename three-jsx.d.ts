import { Object3DNode, MaterialNode } from '@react-three/fiber';
import { Group, Mesh, CylinderGeometry, ConeGeometry, SphereGeometry, ExtrudeGeometry, MeshStandardMaterial, MeshBasicMaterial, PointLight, AmbientLight } from 'three';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      group: Object3DNode<Group, typeof Group>;
      mesh: Object3DNode<Mesh, typeof Mesh>;
      cylinderGeometry: Object3DNode<CylinderGeometry, typeof CylinderGeometry>;
      coneGeometry: Object3DNode<ConeGeometry, typeof ConeGeometry>;
      sphereGeometry: Object3DNode<SphereGeometry, typeof SphereGeometry>;
      extrudeGeometry: Object3DNode<ExtrudeGeometry, typeof ExtrudeGeometry>;
      meshStandardMaterial: Object3DNode<MaterialNode<MeshStandardMaterial>, typeof MeshStandardMaterial>;
      meshBasicMaterial: Object3DNode<MaterialNode<MeshBasicMaterial>, typeof MeshBasicMaterial>;
      pointLight: Object3DNode<PointLight, typeof PointLight>;
      ambientLight: Object3DNode<AmbientLight, typeof AmbientLight>;
    }
  }
}
