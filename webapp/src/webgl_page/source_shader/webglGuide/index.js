export const fogShaderSource = {
    vshader: `
            attribute vec4 a_position;
            attribute vec4 a_color;
            varying vec4 f_color;
            uniform mat4 u_modelMatrix;
            uniform vec4 u_eye;
            uniform mat4 u_mvpMatrix; 
            varying float v_dist;
            void main(){
                gl_Position = u_mvpMatrix * a_position;
                f_color = a_color;
                v_dist = gl_Position.w;
            }
        `,
    fshader: `
            precision mediump float;
            varying vec4 f_color;
            varying float v_dist;
            uniform vec4 u_fogColor;
            uniform vec2 u_fogDist;
            void main(){
                float fogFactor = clamp((u_fogDist.y - v_dist) / (u_fogDist.y - u_fogDist.x), 0.0, 1.0);
                vec4 color = mix(u_fogColor, f_color, fogFactor);
                gl_FragColor = color;
            }
        `
}