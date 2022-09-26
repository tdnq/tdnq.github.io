uniform sampler2D textureUv;
in vec2 vUv;
void main(){
    gl_FragColor = vec4 (texture2D(textureUv, vUv));
}